/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=fecc9594811eafcca4593093c22fa171', {mode: 'cors'})
    .then(function(response) {
      if(response.ok) {
        return response.json();
      }
      else {
        throw new Error("Status code error: "+response.status);
      }
    })
    .then(function(response) {
      let weatherInfo = getData(response);
      displayData(weatherInfo);
    })
    .catch(function(err) {
        console.log('error occured');
        console.error(err);
    });

function displayData(data) {
  const info = document.querySelector('.info');
  info.textContent = '';
  const city = document.createElement('div');
  city.classList.add('city');
  city.textContent = `${data.name},${data.country}`;
  info.appendChild(city);
  const inforow = document.createElement('div');
  inforow.classList.add('infoRow');
  info.appendChild(inforow);
  const temp = document.createElement('div');
  temp.classList.add('temp');
  temp.textContent = calcTemp(data.temperature);
  inforow.appendChild(temp);
  const image = document.createElement('img');
  image.setAttribute('alt','image');
  image.setAttribute('src',`http://openweathermap.org/img/wn/${data.icon}@2x.png`);
  inforow.appendChild(image);
  const weather = document.createElement('div');
  weather.classList.add('weather');
  weather.textContent= data.info;
  info.appendChild(weather);
  const humidity = document.createElement('div');
  humidity.classList.add('humidity');
  humidity.textContent= `HUMIDITY: ${data.humidity}%`;
  info.appendChild(humidity);
  const wind = document.createElement('div');
  wind.classList.add('wind');
  wind.textContent = `WIND SPEED: ${data.wind}m/s`;
  info.appendChild(wind);
}

function calcTemp(temp) {
  let fahren = ((((+temp)-273.15)*1.8)+32).toFixed(2);
  let cels = ((+temp)-273.15).toFixed(2);
  if(check.checked) {
    currentWeather = +cels;
    return cels+'°C';
  }
  else {
    currentWeather = +fahren;
    return fahren+'°F';
  }
}

function convertTemp(temp) {
  if(check.checked) {
    let cels = (((+temp)-32)/1.8).toFixed(2);
    currentWeather = +cels;
    return cels+'°C';
  }
  else {
    let fahren = (((+temp)*1.8)+32).toFixed(2);
    currentWeather = +fahren;
    return fahren+'°F';
  }
}

function getData(data) {
    return {
        name: data.name.toUpperCase(),
        country: data.sys.country,
        icon: data.weather[0].icon,
        info: data.weather[0].description.toUpperCase(),
        temperature: data.main.temp,
        humidity: data.main.humidity,
        wind: data.wind.speed,
    };
}

//i am creating a global object to access state at different times. 
//currently used twice at calcTemp, twice at convertTemp and eventListener callback
//will most probably swith to pubsub
let currentWeather;

const btn = document.querySelector('header .search button');
const locInput = document.querySelector('header .search #default-search');
const check = document.querySelector('header #convert');
const errorDiv = document.querySelector('#content .error');

check.addEventListener('change', (e)=> {
  let tempDiv = document.querySelector('.info .temp');
  let newTemp = convertTemp(currentWeather);
  tempDiv.textContent= newTemp;
});

btn.addEventListener('click', renderPage);

async function renderPage() {
  errorDiv.textContent='';
  let location = locInput.value;
  let locData;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=fecc9594811eafcca4593093c22fa171`;
  let response;
  try {
    response = await fetch(url,{mode: 'cors'});
  }
  catch(error) {
    console.error('fetch unsuccessful'+error);
  }
  let responseData;
  if(response.ok) {
    responseData = await response.json();
    locData = getData(responseData);
    displayData(locData);
  }
  else {
    errorDiv.textContent='No matches found!';
    console.error('No location found');
  }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBHQUEwRyxhQUFhO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVSxHQUFHLGFBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsVUFBVTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxVQUFVO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxTQUFTO0FBQzFFO0FBQ0E7QUFDQSxnQ0FBZ0MsYUFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZldGNoKCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUxvbmRvbiZBUFBJRD1mZWNjOTU5NDgxMWVhZmNjYTQ1OTMwOTNjMjJmYTE3MScsIHttb2RlOiAnY29ycyd9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBpZihyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0YXR1cyBjb2RlIGVycm9yOiBcIityZXNwb25zZS5zdGF0dXMpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGxldCB3ZWF0aGVySW5mbyA9IGdldERhdGEocmVzcG9uc2UpO1xuICAgICAgZGlzcGxheURhdGEod2VhdGhlckluZm8pO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3Igb2NjdXJlZCcpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlEYXRhKGRhdGEpIHtcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJyk7XG4gIGluZm8udGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaXR5LmNsYXNzTGlzdC5hZGQoJ2NpdHknKTtcbiAgY2l0eS50ZXh0Q29udGVudCA9IGAke2RhdGEubmFtZX0sJHtkYXRhLmNvdW50cnl9YDtcbiAgaW5mby5hcHBlbmRDaGlsZChjaXR5KTtcbiAgY29uc3QgaW5mb3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbmZvcm93LmNsYXNzTGlzdC5hZGQoJ2luZm9Sb3cnKTtcbiAgaW5mby5hcHBlbmRDaGlsZChpbmZvcm93KTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGNhbGNUZW1wKGRhdGEudGVtcGVyYXR1cmUpO1xuICBpbmZvcm93LmFwcGVuZENoaWxkKHRlbXApO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsJ2ltYWdlJyk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJyxgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXRhLmljb259QDJ4LnBuZ2ApO1xuICBpbmZvcm93LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXInKTtcbiAgd2VhdGhlci50ZXh0Q29udGVudD0gZGF0YS5pbmZvO1xuICBpbmZvLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xuICBodW1pZGl0eS50ZXh0Q29udGVudD0gYEhVTUlESVRZOiAke2RhdGEuaHVtaWRpdHl9JWA7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdpbmQuY2xhc3NMaXN0LmFkZCgnd2luZCcpO1xuICB3aW5kLnRleHRDb250ZW50ID0gYFdJTkQgU1BFRUQ6ICR7ZGF0YS53aW5kfW0vc2A7XG4gIGluZm8uYXBwZW5kQ2hpbGQod2luZCk7XG59XG5cbmZ1bmN0aW9uIGNhbGNUZW1wKHRlbXApIHtcbiAgbGV0IGZhaHJlbiA9ICgoKCgrdGVtcCktMjczLjE1KSoxLjgpKzMyKS50b0ZpeGVkKDIpO1xuICBsZXQgY2VscyA9ICgoK3RlbXApLTI3My4xNSkudG9GaXhlZCgyKTtcbiAgaWYoY2hlY2suY2hlY2tlZCkge1xuICAgIGN1cnJlbnRXZWF0aGVyID0gK2NlbHM7XG4gICAgcmV0dXJuIGNlbHMrJ8KwQyc7XG4gIH1cbiAgZWxzZSB7XG4gICAgY3VycmVudFdlYXRoZXIgPSArZmFocmVuO1xuICAgIHJldHVybiBmYWhyZW4rJ8KwRic7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udmVydFRlbXAodGVtcCkge1xuICBpZihjaGVjay5jaGVja2VkKSB7XG4gICAgbGV0IGNlbHMgPSAoKCgrdGVtcCktMzIpLzEuOCkudG9GaXhlZCgyKTtcbiAgICBjdXJyZW50V2VhdGhlciA9ICtjZWxzO1xuICAgIHJldHVybiBjZWxzKyfCsEMnO1xuICB9XG4gIGVsc2Uge1xuICAgIGxldCBmYWhyZW4gPSAoKCgrdGVtcCkqMS44KSszMikudG9GaXhlZCgyKTtcbiAgICBjdXJyZW50V2VhdGhlciA9ICtmYWhyZW47XG4gICAgcmV0dXJuIGZhaHJlbisnwrBGJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREYXRhKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBkYXRhLm5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgY291bnRyeTogZGF0YS5zeXMuY291bnRyeSxcbiAgICAgICAgaWNvbjogZGF0YS53ZWF0aGVyWzBdLmljb24sXG4gICAgICAgIGluZm86IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi50b1VwcGVyQ2FzZSgpLFxuICAgICAgICB0ZW1wZXJhdHVyZTogZGF0YS5tYWluLnRlbXAsXG4gICAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICB9O1xufVxuXG4vL2kgYW0gY3JlYXRpbmcgYSBnbG9iYWwgb2JqZWN0IHRvIGFjY2VzcyBzdGF0ZSBhdCBkaWZmZXJlbnQgdGltZXMuIFxuLy9jdXJyZW50bHkgdXNlZCB0d2ljZSBhdCBjYWxjVGVtcCwgdHdpY2UgYXQgY29udmVydFRlbXAgYW5kIGV2ZW50TGlzdGVuZXIgY2FsbGJhY2tcbi8vd2lsbCBtb3N0IHByb2JhYmx5IHN3aXRoIHRvIHB1YnN1YlxubGV0IGN1cnJlbnRXZWF0aGVyO1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgLnNlYXJjaCBidXR0b24nKTtcbmNvbnN0IGxvY0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIC5zZWFyY2ggI2RlZmF1bHQtc2VhcmNoJyk7XG5jb25zdCBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciAjY29udmVydCcpO1xuY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCAuZXJyb3InKTtcblxuY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpPT4ge1xuICBsZXQgdGVtcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvIC50ZW1wJyk7XG4gIGxldCBuZXdUZW1wID0gY29udmVydFRlbXAoY3VycmVudFdlYXRoZXIpO1xuICB0ZW1wRGl2LnRleHRDb250ZW50PSBuZXdUZW1wO1xufSk7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlclBhZ2UpO1xuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJQYWdlKCkge1xuICBlcnJvckRpdi50ZXh0Q29udGVudD0nJztcbiAgbGV0IGxvY2F0aW9uID0gbG9jSW5wdXQudmFsdWU7XG4gIGxldCBsb2NEYXRhO1xuICBsZXQgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9ZmVjYzk1OTQ4MTFlYWZjY2E0NTkzMDkzYzIyZmExNzFgO1xuICBsZXQgcmVzcG9uc2U7XG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwse21vZGU6ICdjb3JzJ30pO1xuICB9XG4gIGNhdGNoKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignZmV0Y2ggdW5zdWNjZXNzZnVsJytlcnJvcik7XG4gIH1cbiAgbGV0IHJlc3BvbnNlRGF0YTtcbiAgaWYocmVzcG9uc2Uub2spIHtcbiAgICByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgbG9jRGF0YSA9IGdldERhdGEocmVzcG9uc2VEYXRhKTtcbiAgICBkaXNwbGF5RGF0YShsb2NEYXRhKTtcbiAgfVxuICBlbHNlIHtcbiAgICBlcnJvckRpdi50ZXh0Q29udGVudD0nTm8gbWF0Y2hlcyBmb3VuZCEnO1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIGxvY2F0aW9uIGZvdW5kJyk7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=