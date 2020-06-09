document.addEventListener("DOMContentLoaded", function(){
  const allBtns =  Array.prototype.slice.call(document.querySelectorAll('.anchor--inline'));
  const region = 'Zurich';
  let url = "https://api.openweathermap.org/data/2.5/weather?q="+region+"&appid=b7e16357c51158b01403b03c861e6026";

  function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
  }

  if(!url){
    url = "https://api.openweathermap.org/data/2.5/weather?q=Zurich&appid=b7e16357c51158b01403b03c861e6026";
  }
    let weather = JSON.parse(Get(url));
  // when the url for openweather doesn't know the region render data of zurich 
  if(!url || weather.cod == 404){
    url = "https://api.openweathermap.org/data/2.5/weather?q=Zurich&appid=b7e16357c51158b01403b03c861e6026";
    weather = JSON.parse(Get(url));
  }
  let windspeed = 0;
  if(weather.wind.speed > 6) {
    windspeed = Math.round(weather.wind.speed);
  } else {
    windspeed = Math.round(weather.wind.speed * 10);
  }

  let temp = Math.round(weather.main.temp - 273.15); //temperature
  let weatherid = Math.round(weather.weather[0].id / 10); //green: weather-code
  let wind = weather.wind.deg ? Math.round((0.28 * weather.wind.deg) * 2.55) : 90; //blue: winddirection

  let temp2 = Math.round(weather.main.temp - 273.15 + windspeed); //temperature
  let weatherid2 = Math.round(weather.weather[0].id / 10 + windspeed); //green: weather-code
  let wind2 = weather.wind.deg ? Math.round((0.28 * weather.wind.deg) * 2.55 + windspeed) : 90 * 2; //blue: winddirection
  let windspeed2 = weather.wind.speed / 10;

  let allTextBlocks = Array.prototype.slice.call(document.querySelectorAll('.text'));
  allTextBlocks.forEach((item)=> {
    item.style.backgroundColor = 'rgb(' + temp + ', ' + weatherid + ', ' + wind + ')'; 
  });

  let weathertext = weather.weather[0].description + ', temprature: ' + temp + '°C, winddirection: ' + weather.wind.deg + '°, wind speed: ' + weather.wind.speed + ' m/s';

  document.querySelector('body').style.backgroundColor = 'rgb(' + temp + ', ' + weatherid + ', ' + wind + ')'; 

  document.querySelector('.initials').style.color = 'rgb(' + temp2 + ', ' + wind2 + ', ' + weatherid2 + ')';

  document.querySelector('.info').style.backgroundColor = 'rgb(' + weatherid + ', ' + temp + ', ' + wind + ')';
  document.querySelector('.info').innerHTML = weathertext;

  console.log('temp: ' + temp);
  console.log('weather ID: ' + weatherid);
  console.log('wind: ' + wind);
  console.log('windspeed: ' + weather.wind.speed);
  console.log('windspeed: ' + windspeed2);
  console.log(weather);
 
  clickLeftRight(allBtns);
  //clickOutSide(allBtns);

});

function clickLeftRight(elements) {
  elements.forEach((item)=> {
    item.addEventListener("click", (e) => {
      elements.forEach((itemnew)=> {
        removeClass(itemnew.parentNode.parentNode, 'active');
      });
      if(item.parentNode.parentNode.nextElementSibling) {
        addClass(item.parentNode.parentNode.nextElementSibling, 'active')
      } else {
        addClass(item.parentNode.parentNode.previousElementSibling, 'active')
      }
    })
  });
}

function clickOutSide(elements) {
  window.addEventListener("click", (e) => {
    elements.forEach((itemnew)=> {
    console.log(e.target);
    if (!event.target.classList.contains('text__text') || !event.target.classList.contains('anchor')) {
      elements.forEach((itemnew)=> {
        removeClass(itemnew.parentNode.parentNode, 'active');
      });
    }
 });
});
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else if (hasClass(el, className)) {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    el.className = el.className.replace(reg, " ");
  }
}