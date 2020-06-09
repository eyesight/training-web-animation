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
      }, '3000')

      //print bouncing
      .add({
        targets: '.icon-print',
        opacity: '1',
        duration: 400,
        easing: 'linear'
      }, '1301')
      .add({
        targets: '.icon-print',
        translateY: '-30',
        scaleY: '1.3',
        duration: 400,
        easing: 'easeOutQuart'
      }, '1350')
      .add({
        targets: '.icon-print',
        translateY: '5',
        scaleY: '0.9',
        duration: 100,
        easing: 'easeInOutCubic'
      }, '1750')
      .add({
        targets: '.icon-print',
        translateY: '0',
        scaleY: '1',
        duration: 100,
        easing: 'easeInOutCubic'
      }, '1850')
      
      //book bouncing
      .add({
        targets: '.icon-book',
        opacity: '1',
        duration: 400,
        easing: 'linear'
      }, '1401')
      .add({
        targets: '.icon-book',
        translateY: '-40',
        scaleY: '1.5',
        duration: 400,
        easing: 'easeOutQuart'
      }, '1450')
      .add({
        targets: '.icon-book',
        translateY: '2',
        scaleY: '0.9',
        duration: 100,
        easing: 'easeInOutCubic'
      }, '1850')
      .add({
        targets: '.icon-book',
        translateY: '-5',
        scaleY: '1',
        duration: 100,
        easing: 'easeInOutCubic'
      }, '1950')
      .add({
        targets: '.icon-book',
        translateY: '0',
        duration: 100,
        easing: 'easeInOutCubic'
      }, '2050')

      //web bouncing
      .add({
        targets: '.icon-web',
        opacity: '1',
        duration: 400,
        easing: 'linear'
      }, '1501')
      .add({
        targets: '.icon-web',
        translateY: '-40',
        scaleY: '1.9',
        duration: 400,
        easing: 'easeOutQuart'
      }, '1550')
      .add({
        targets: '.icon-web',
        translateY: '5',
        scaleY: '1',
        duration: 100,
        easing: 'easeInOutCubic'
      }, '1950')
      .add({
        targets: '.icon-web',
        translateY: '-20',
        scaleY: '1.1',
        duration: 100,
        easing: 'easeInOutCubic'
      }, '2050')
      .add({
        targets: '.icon-web',
        translateY: '0',
        scaleY: '1',
        duration: 100,
        easing: 'easeInOutCubic'
      }, '2150')

      //fade-in letters
      .add({
        targets: '.logo .letter',
        opacity: '1',
        delay: anime.stagger(40)
      }, 2000)

      //icon print pops out
      .add({
        targets: '.icon-print',
        translateY: ['-30', '30'],
        duration: 500
      }, 2900)

      .add({
        targets: '.icon-print',
        opacity: '0',
        duration: 100
      }, 3300)

      .add({
        targets: '.ne',
        opacity: '1',
        duration: 300
      }, 3300)

      .add({
        targets: '.ne',
        translateY: ['20', '0'],
        duration: 500,
        easing: 'easeOutQuart'
      }, 3450)

      //icon book pops out
      .add({
        targets: '.icon-book',
        translateY: ['-30', '10'],
        duration: 500
      }, 3000)

      .add({
        targets: '.icon-book',
        opacity: '0',
        duration: 100
      }, 3400)
      .add({
        targets: '.ha',
        opacity: '1',
        duration: 300,
        easing: 'easeInOutCubic'
      }, 3400)
      .add({
        targets: '.ha',
        translateY: ['20', '0'],
        duration: 500,
        easing: 'easeOutQuart'
      }, 3550)
      .add({
        targets: '.icon-web',
        translateY: ['-30', '10'],
        duration: 300
      }, 3100)

      .add({
        targets: '.icon-web',
        opacity: '0',
        duration: 100
      }, 3300)
      .add({
        targets: '.ho',
        opacity: '1',
        duration: 300
      }, 3300)
      .add({
        targets: '.ho',
        translateY: ['20', '0'],
        duration: 500,
        easing: 'easeOutQuart',
        complete: function() {
          addClass();
        }
      }, 3550)
      .add({
        targets: '.claim',
        opacity: 1,
        duration: 200
      }, 3600)

      //change color to white
      .add({
        targets: ['.letter', '.plus-one', '.plus-two', '.ho path', '.ne path', '.ha path', '.claim path'],
        fill: '#ffffff',
        duration: 400
      }, 4800)
      .add({
        targets: '.logo-anim__svg',
        top: '10px',
        left: '20px',
        translateY: ['-50%', '-25%'],
        translateX: ['-50%', '-25%'],
        duration: 400,
        scale: '0.5',
        easing: 'linear',
        complete: function() {
          addClass();
        }
      }, 4500)
      
      return logoAnimationTL;
	
})();   

function addClass() {
  let container = document.querySelector('.logo-anim');
  if(!container.classList.contains('.bg')) {
    container.classList.add('bg');
  }
}

logoAnimation.play();

/* window.addEventListener('load', () => {
  if (sessionStorage.getItem("bgIsSet")) {
    return;
  } else {
    logoAnimation.play();
    sessionStorage.setItem("bgIsSet", true);
  }
}); */