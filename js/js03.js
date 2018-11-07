document.addEventListener("DOMContentLoaded", function(){
      var wrapperEl = document.querySelector(".wrapper-no3");
      var el = document.querySelector(".js-karateCheck");
      var checkbox = document.querySelector(".checkit");
      var count = 0;
      var textEl = document.querySelector(".text__inner");
          el.addEventListener('click', function() {
          count ++;
          if(wrapperEl.classList.contains('kicked2')){
            wrapperEl.classList = ('wrapper-no3');
            checkbox.checked = false;
            textEl.innerHTML = 'K(l)ick it!';
          }else if(wrapperEl.classList.contains('kicked')){
            wrapperEl.classList.add('kicked2');
            checkbox.checked = true;
            textEl.innerHTML = 'Oss! </br> Click to restart.';
          }else{
            wrapperEl.classList.add('kicked');
            textEl.innerHTML = 'you\'re so close. </br>K(l)ick again!'
          }
        });
    });