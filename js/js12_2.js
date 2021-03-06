//import anime from 'animejs/lib/anime.es.js';


var logoAnimation = (function() {
  document.body.classList.add('ready');
  anime.set('.plus-one', {scale: '1, 0.2'});
  anime.set('.plus-two', {translateY: '-150', scale: '0.2, 1', opacity: '0'});
  anime.set('.icon-print', {translateY: '10'});
  anime.set('.icon-book', {translateY: '10'});
  anime.set('.icon-web', {translateY: '10'});
  var logoAnimationTL = anime.timeline({
      autoplay: false,
      easing: 'easeInCirc'
    })
    .add({
      targets: '.plus-two',
      translateY: '6',
      opacity: '1',
      duration: 800,
      easing: 'easeInExpo'
    }, '0')
    .add({
      targets: '.plus-one',
      translateY: '100',
      opacity: '1',
      duration: 100,
      easing: 'easeInExpo'
    }, '800')
    .add({
      targets: '.plus-one',
      translateY: '6',
      duration: 50,
      scale: '1, 1',
      easing: 'easeInExpo'
    }, '950')
    .add({
      targets: '.plus-one',
      translateY: '0',
      duration: 50,
      easing: 'easeInExpo'
    }, '900')
    .add({
      targets: '.plus-two',
      scale: '15, 1',
      translateX: '-12',
      duration: 300,
      easing: 'easeOutCirc'
    }, '800')

    .add({
      targets: '.plus-two',
      scale: '1, 1',
      translateX: 0,
      duration: 400,
      easing: 'easeOutCirc'
    }, '2600')

    //print bouncing
    .add({
      targets: '.icon-print-rolle1',
      opacity: '1',
      duration: 300,
      easing: 'easeInCirc'
    }, '1301')
    .add({
      targets: '.icon-print-rolle2',
      opacity: '1',
      duration: 300,
      easing: 'easeInCirc'
    }, '1301')
    .add({
      targets: '.icon-print',
      translateY: '-30',
      scaleY: '1.5',
      duration: 100,
      easing: 'easeInCirc'
  }, '1400')
  .add({
      targets: '.icon-print',
      translateY: '5',
      scaleY: '0.5',
      duration: 50,
      easing: 'easeInCirc'
    }, '1510')
    .add({
      targets: '.icon-print',
      translateY: '-30',
      scaleY: '1.5',
      duration: 100,
      easing: 'easeInCirc'
    }, '1500')
    .add({
      targets: '.icon-print',
      translateY: '5',
      scaleY: '1',
      duration: 100,
      easing: 'easeInCirc'
    }, '1600')
    .add({
      targets: '.icon-print',
      translateY: '-20',
      duration: 50,
      easing: 'easeInCirc'
    }, '1700')
    .add({
      targets: '.icon-print',
      translateY: '0',
      duration: 50,
      easing: 'easeInCirc'
    }, '1750')
    
    //book bouncing
    .add({
      targets: '.icon-book',
      opacity: '1',
      duration: 300,
      easing: 'easeInCirc'
    }, '1401')
    .add({
      targets: '.icon-book',
      translateY: '-30',
      scaleY: '1.8',
      duration: 100,
      easing: 'easeInCirc'
    }, '1500')
    .add({
      targets: '.icon-book',
      translateY: '0',
      scaleY: '0.5',
      duration: 50,
      easing: 'easeInCirc'
    }, '1610')
    .add({
      targets: '.icon-book',
      translateY: '-20',
      scaleY: '1.5',
      duration: 100,
      easing: 'easeInCirc'
    }, '1600')
    .add({
      targets: '.icon-book',
      translateY: '5',
      scaleY: '1',
      duration: 100,
      easing: 'easeInCirc'
    }, '1700')
    .add({
      targets: '.icon-book',
      translateY: '-10',
      scaleY: '1.5',
      duration: 50,
      easing: 'easeInCirc'
    }, '1800')
    .add({
      targets: '.icon-book',
      translateY: '0',
      scaleY: '1',
      duration: 50,
      easing: 'easeInCirc'
    }, '1850')

    //web bouncing
    .add({
      targets: ['.web'],
      opacity: '1',
      duration: 300,
      easing: 'easeInCirc'
    }, '1501')
    .add({
      targets: '.icon-web',
      translateY: '-40',
      scaleY: '1.9',
      duration: 100,
      easing: 'easeInCirc'
    }, '1600')
    .add({
      targets: '.icon-web',
      translateY: '5',
      scaleY: '0.5',
      duration: 50,
      easing: 'easeInCirc'
    }, '1710')
    .add({
      targets: '.icon-web',
      translateY: '-20',
      scaleY: '1.5',
      duration: 100,
      easing: 'easeInCirc'
    }, '1700')
    .add({
      targets: '.icon-web',
      translateY: '5',
      scaleY: '1',
      duration: 100,
      easing: 'easeInCirc'
    }, '1800')
    .add({
      targets: '.icon-web',
      translateY: '-10',
      scaleY: '1.2',
      duration: 50,
      easing: 'easeInCirc'
    }, '1900')
    .add({
      targets: '.icon-web',
      translateY: '0',
      scaleY: '1',
      duration: 50,
      easing: 'easeInCirc'
    }, '1950')

    //bouncing line

    .add({
      targets: '.logo .letter',
      opacity: '1',
      delay: anime.stagger(50)
    }, 2000)

    //icon print pops out
    .add({
      targets: '.icon-print-rolle1',
      opacity: '0',
      duration: 200
    }, 2600)

    .add({
      targets: '.icon-print-rolle2',
      opacity: '0',
      duration: 200
    }, 2800)

    .add({
      targets: '.e-morph',
      opacity: '1',
      duration: 200
    }, 2700)

    .add({
      targets: '.e-morph',
      opacity: '0',
      duration: 200
    }, 2800)

    .add({
      targets: '.e',
      opacity: '1',
      duration: 200
    }, 2800)

    .add({
      targets: '.n-morph',
      opacity: '1',
      duration: 200
    }, 2700)

    .add({
      targets: '.n-morph',
      opacity: '0',
      duration: 200
    }, 2800)

    .add({
      targets: '.n',
      opacity: '1',
      duration: 200
    }, 2800)


    //icon book pops out
    .add({
      targets: '.icon-book',
      opacity: [1, 0],
      duration: 300
    }, 2600)

    .add({
      targets: '.ha',
      opacity: '1',
      translateY: 0,
      duration: 300
    }, 2800)

    //icon web pops out
    .add({
      targets: ['.web-notused'],
      opacity: '0',
      duration: 200
    }, 2500)

    .add({
      targets: ['.web-left', '.web-right'],
      translateX: 36,
      translateY: -4,
      scale: 0.5,
      duration: 100
    }, 2600)

    .add({
      targets: '.punkt',
      opacity: '1',
      duration: 100
    }, 2700)

    .add({
      targets: ['.web-left', '.web-right'],
      opacity: '0',
      duration: 100
    }, 2700)

    .add({
      targets: '.letters-ho',
      opacity: '1',
      duration: 100,
      complete: function() {
        addClass();
      }
    }, 2900)

    .add({
      targets: '.claim',
      opacity: 1,
      duration: 200
    }, 3100)

    //change color to white
    .add({
      targets: ['.letter', '.plus-one', '.plus-two', '.ho path', '.ho rect', '.ne path', '.ha path', '.claim path'],
      fill: '#ffffff',
      duration: 400
    }, 3200)

    .add({
      targets: '.logo-anim__svg',
      top: '10px',
      left: '15px',
      translateY: ['-50%', '-25%'],
      translateX: ['-50%', '-25%'],
      duration: 300,
      scale: '0.5',
      easing: 'linear'
    }, 3400)
    
    return logoAnimationTL;

})();   

function addClass() {
  let container = document.querySelector('.logo-anim');
  if(!container.classList.contains('.bg')) {
    container.classList.add('bg');
  }
}

window.addEventListener('load', () => {
  if (sessionStorage.getItem("bgIsSet")) {
    return;
  } else {
    logoAnimation.play();
    sessionStorage.setItem("bgIsSet", true);
  }
});