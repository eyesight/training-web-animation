var canvas = null;
var waves = null;
function loadCanvas( ) {
    canvas = document.getElementById( 'canvas' );
    canvasHeight = canvas.clientHeight / 2;
    canvasWidth = canvas.clientWidth / 2;
    waves = new Waves( canvas, canvasWidth, canvasHeight );
    run();
    //setInterval( "run()", 80 );
}
function run(){
    //waves.update( );
    for (let i = 0; i<1; i++){
      waves.draw( );
    }
}

function Waves( $canvas, $width, $height ){
  this.numberOfWaves = 1;
  this.waveGap = 10;
  this.width = Waves.width = $width;
  this.height = Waves.height = $height;
  Waves.globalY = this.height / 2;
  this.move = 50;
  this.ctx = $canvas.getContext( '2d' );
 
  this.colour = Math.round(Math.random()*255)+", "+Math.round(Math.random()*255)+", "+Math.round(Math.random()*255);
  
  this.beginingY = this.height / 2;
  this.wavesObj = new Wave($canvas, this.beginingY, this.width, this.colour);
 
 
  /* this.update = function(){
      var bL = this.wavesArray.length;
      while( bL-- ){
          this.wavesArray[ bL ].update( );
      }
      Waves.globalY += this.move;
      if(Waves.globalY > (Waves.height / 2)-50){
          this.move = -1;
      }else if(Waves.globalY < -(Waves.height / 2)){
          this.move = 1;
      }
  } */
 
  this.draw = function(){
      this.ctx.save();
      this.wavesObj.draw( );
      this.ctx.restore();
  }
}

function Wave( $canvas, $y, $width ){
  this.ctx = $canvas.getContext( '2d' );
  this.force = 0;
  this.wavePower = 40;
  this.count = $y;
  this.y = $y;
  this.quarterY = $y / 4;
  this.halfY = this.quarterY * 2;
  this.countWaves = 10;
  this.waveWith = $width / this.countWaves;
 
  this.update = function(){
      this.y = $y + Waves.globalY;
      this.force = Math.sin(this.count);
      this.count += 0.05;
  }
 
  this.draw = function(){
      let x = -50;
      this.ctx.beginPath();
      this.ctx.moveTo(x, this.halfY);
      
      /* this.ctx.quadraticCurveTo(10, 100, 100, 100);
      this.ctx.quadraticCurveTo(190, 100, 250, 100);
      this.ctx.quadraticCurveTo(315, 100, 400, 100);
      this.ctx.quadraticCurveTo(485, 100, 550, 100);
      this.ctx.quadraticCurveTo(615, 100, 700, 100);*/

      for(let i = 0; i < this.countWaves; i++){
          x = x + this.waveWith; 
          if(i%2 == 0){
            console.log('------------------');
            console.log(x - (this.waveWith / 2));
            console.log(this.quarterY * 3);
            console.log(x);
            console.log(this.halfY);
            console.log('------------------');
              this.ctx.quadraticCurveTo(x - (this.waveWith / 2), this.quarterY * 3, x, this.halfY);
            }else{
                console.log('---------22222---------');
                console.log(x - (this.waveWith / 2));
                console.log(this.quarterY);
                console.log(x);
                console.log(this.halfY);
                console.log('----------22222--------');
                this.ctx.quadraticCurveTo(x - (this.waveWith / 2), this.quarterY, x, this.halfY);
            }
      }

      this.ctx.lineWidth = 10;
      this.ctx.strokeStyle = '#ff0000';
      this.ctx.stroke();
  }
}
window.addEventListener( 'load', loadCanvas, false );