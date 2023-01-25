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
      console.log(response);
      let weatherInfo = getData(response);
      console.log(weatherInfo);
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
  const temp = document.createElement('div');
  temp.classList.add('temp');
  temp.textContent = calcTemp(data.temperature);
  info.appendChild(temp);
  const image = document.createElement('img');
  image.setAttribute('alt','image');
  info.appendChild(image);
  const weather = document.createElement('div');
  weather.classList.add('weather');
  weather.textContent= data.info;
  info.appendChild(weather);
  const humidity = document.createElement('div');
  humidity.classList.add('humidity');
  humidity.textContent= `HUMIDITY: ${data.humidity}%`;
  info.appendChild(humidity);
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
//required data
//Name of city
//Country code
//icon
//weather description
//temp
//humidity

function getData(data) {
    return {
        name: data.name.toUpperCase(),
        country: data.sys.country,
        icon: data.weather[0].icon,
        info: data.weather[0].description.toUpperCase(),
        temperature: data.main.temp,
        humidity: data.main.humidity,
    };
}

//i am creating a global object to access state at different times. 
//currently used twice at calcTemp, twice at convertTemp and eventListener callback
//will most probably swith to pubsub

/* have only fixed the temp convert for initially loaded data.
   should fix rendering of searched info and also its conversion
*/
let currentWeather;

const btn = document.querySelector('button');
const locInput = document.querySelector('#location');
const check = document.querySelector('#convert');

check.addEventListener('change', (e)=> {
  let tempDiv = document.querySelector('.info .temp');
  let newTemp = convertTemp(currentWeather);
  tempDiv.textContent= newTemp;
});

btn.addEventListener('click', renderPage);

async function renderPage() {
  let location = locInput.value;
  let locData;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=fecc9594811eafcca4593093c22fa171`;
  let response = await fetch(url,{mode: 'cors'});
  //its better to set try catch with fetch
  let responseData;
  if(response.ok) {
    responseData = await response.json();
    locData = getData(responseData);
    console.log(locData);
  }
  else {
    console.error('No location found');
  }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBHQUEwRyxhQUFhO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVUsR0FBRyxhQUFhO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsU0FBUztBQUMxRSxrQ0FBa0MsYUFBYTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1Mb25kb24mQVBQSUQ9ZmVjYzk1OTQ4MTFlYWZjY2E0NTkzMDkzYzIyZmExNzEnLCB7bW9kZTogJ2NvcnMnfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgaWYocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGF0dXMgY29kZSBlcnJvcjogXCIrcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBsZXQgd2VhdGhlckluZm8gPSBnZXREYXRhKHJlc3BvbnNlKTtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJJbmZvKTtcbiAgICAgIGRpc3BsYXlEYXRhKHdlYXRoZXJJbmZvKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG9jY3VyZWQnKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0pO1xuXG5mdW5jdGlvbiBkaXNwbGF5RGF0YShkYXRhKSB7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuICBpbmZvLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2l0eS5jbGFzc0xpc3QuYWRkKCdjaXR5Jyk7XG4gIGNpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLm5hbWV9LCR7ZGF0YS5jb3VudHJ5fWA7XG4gIGluZm8uYXBwZW5kQ2hpbGQoY2l0eSk7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBjYWxjVGVtcChkYXRhLnRlbXBlcmF0dXJlKTtcbiAgaW5mby5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCdpbWFnZScpO1xuICBpbmZvLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB3ZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXInKTtcbiAgd2VhdGhlci50ZXh0Q29udGVudD0gZGF0YS5pbmZvO1xuICBpbmZvLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eScpO1xuICBodW1pZGl0eS50ZXh0Q29udGVudD0gYEhVTUlESVRZOiAke2RhdGEuaHVtaWRpdHl9JWA7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xufVxuXG5mdW5jdGlvbiBjYWxjVGVtcCh0ZW1wKSB7XG4gIGxldCBmYWhyZW4gPSAoKCgoK3RlbXApLTI3My4xNSkqMS44KSszMikudG9GaXhlZCgyKTtcbiAgbGV0IGNlbHMgPSAoKCt0ZW1wKS0yNzMuMTUpLnRvRml4ZWQoMik7XG4gIGlmKGNoZWNrLmNoZWNrZWQpIHtcbiAgICBjdXJyZW50V2VhdGhlciA9ICtjZWxzO1xuICAgIHJldHVybiBjZWxzKyfCsEMnO1xuICB9XG4gIGVsc2Uge1xuICAgIGN1cnJlbnRXZWF0aGVyID0gK2ZhaHJlbjtcbiAgICByZXR1cm4gZmFocmVuKyfCsEYnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUZW1wKHRlbXApIHtcbiAgaWYoY2hlY2suY2hlY2tlZCkge1xuICAgIGxldCBjZWxzID0gKCgoK3RlbXApLTMyKS8xLjgpLnRvRml4ZWQoMik7XG4gICAgY3VycmVudFdlYXRoZXIgPSArY2VscztcbiAgICByZXR1cm4gY2VscysnwrBDJztcbiAgfVxuICBlbHNlIHtcbiAgICBsZXQgZmFocmVuID0gKCgoK3RlbXApKjEuOCkrMzIpLnRvRml4ZWQoMik7XG4gICAgY3VycmVudFdlYXRoZXIgPSArZmFocmVuO1xuICAgIHJldHVybiBmYWhyZW4rJ8KwRic7XG4gIH1cbn1cbi8vcmVxdWlyZWQgZGF0YVxuLy9OYW1lIG9mIGNpdHlcbi8vQ291bnRyeSBjb2RlXG4vL2ljb25cbi8vd2VhdGhlciBkZXNjcmlwdGlvblxuLy90ZW1wXG4vL2h1bWlkaXR5XG5cbmZ1bmN0aW9uIGdldERhdGEoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IGRhdGEubmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBjb3VudHJ5OiBkYXRhLnN5cy5jb3VudHJ5LFxuICAgICAgICBpY29uOiBkYXRhLndlYXRoZXJbMF0uaWNvbixcbiAgICAgICAgaW5mbzogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIHRlbXBlcmF0dXJlOiBkYXRhLm1haW4udGVtcCxcbiAgICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICB9O1xufVxuXG4vL2kgYW0gY3JlYXRpbmcgYSBnbG9iYWwgb2JqZWN0IHRvIGFjY2VzcyBzdGF0ZSBhdCBkaWZmZXJlbnQgdGltZXMuIFxuLy9jdXJyZW50bHkgdXNlZCB0d2ljZSBhdCBjYWxjVGVtcCwgdHdpY2UgYXQgY29udmVydFRlbXAgYW5kIGV2ZW50TGlzdGVuZXIgY2FsbGJhY2tcbi8vd2lsbCBtb3N0IHByb2JhYmx5IHN3aXRoIHRvIHB1YnN1YlxuXG4vKiBoYXZlIG9ubHkgZml4ZWQgdGhlIHRlbXAgY29udmVydCBmb3IgaW5pdGlhbGx5IGxvYWRlZCBkYXRhLlxuICAgc2hvdWxkIGZpeCByZW5kZXJpbmcgb2Ygc2VhcmNoZWQgaW5mbyBhbmQgYWxzbyBpdHMgY29udmVyc2lvblxuKi9cbmxldCBjdXJyZW50V2VhdGhlcjtcblxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5jb25zdCBsb2NJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpO1xuY29uc3QgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udmVydCcpO1xuXG5jaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSk9PiB7XG4gIGxldCB0ZW1wRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8gLnRlbXAnKTtcbiAgbGV0IG5ld1RlbXAgPSBjb252ZXJ0VGVtcChjdXJyZW50V2VhdGhlcik7XG4gIHRlbXBEaXYudGV4dENvbnRlbnQ9IG5ld1RlbXA7XG59KTtcblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyUGFnZSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlclBhZ2UoKSB7XG4gIGxldCBsb2NhdGlvbiA9IGxvY0lucHV0LnZhbHVlO1xuICBsZXQgbG9jRGF0YTtcbiAgbGV0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPWZlY2M5NTk0ODExZWFmY2NhNDU5MzA5M2MyMmZhMTcxYDtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLHttb2RlOiAnY29ycyd9KTtcbiAgLy9pdHMgYmV0dGVyIHRvIHNldCB0cnkgY2F0Y2ggd2l0aCBmZXRjaFxuICBsZXQgcmVzcG9uc2VEYXRhO1xuICBpZihyZXNwb25zZS5vaykge1xuICAgIHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBsb2NEYXRhID0gZ2V0RGF0YShyZXNwb25zZURhdGEpO1xuICAgIGNvbnNvbGUubG9nKGxvY0RhdGEpO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIGxvY2F0aW9uIGZvdW5kJyk7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=