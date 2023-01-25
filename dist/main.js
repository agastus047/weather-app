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
      console.log(getData(response));
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
  info.appendChild(city);
  const temp = document.createElement('div');
  temp.classList.add('temp');
  info.appendChild(temp);
  const image = document.createElement('img');
  image.setAttribute('alt','image');
  info.appendChild(image);
  const weather = document.createElement('div');
  weather.classList.add('weather');
  info.appendChild(weather);
  const humidity = document.createElement('div');
  humidity.classList.add('humidity');
  info.appendChild(humidity);
}

function calcTemp(temp) {
  let fahren = (((+temp)-273.15)*1.8)+32;
  let cels = (+temp)-273.15;
  if(check.checked) {
    return cels;
  }
  else {
    return fahren;
  }
}

function convertTemp(temp) {
  if(check.checked) {
    let cels = ((+temp)-32)/1.8;
    return cels;
  }
  else {
    let fahren = ((+temp)*1.8)+32;
    return fahren;
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

const btn = document.querySelector('button');
const locInput = document.querySelector('#location');
const check = document.querySelector('#convert');

check.addEventListener('change', (e)=> {
  
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBHQUEwRyxhQUFhO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxTQUFTO0FBQzFFLGtDQUFrQyxhQUFhO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZldGNoKCdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUxvbmRvbiZBUFBJRD1mZWNjOTU5NDgxMWVhZmNjYTQ1OTMwOTNjMjJmYTE3MScsIHttb2RlOiAnY29ycyd9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBpZihyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0YXR1cyBjb2RlIGVycm9yOiBcIityZXNwb25zZS5zdGF0dXMpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGNvbnNvbGUubG9nKGdldERhdGEocmVzcG9uc2UpKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG9jY3VyZWQnKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0pO1xuXG5mdW5jdGlvbiBkaXNwbGF5RGF0YShkYXRhKSB7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mbycpO1xuICBpbmZvLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2l0eS5jbGFzc0xpc3QuYWRkKCdjaXR5Jyk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoY2l0eSk7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XG4gIGluZm8uYXBwZW5kQ2hpbGQodGVtcCk7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywnaW1hZ2UnKTtcbiAgaW5mby5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlci5jbGFzc0xpc3QuYWRkKCd3ZWF0aGVyJyk7XG4gIGluZm8uYXBwZW5kQ2hpbGQod2VhdGhlcik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5Jyk7XG4gIGluZm8uYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xufVxuXG5mdW5jdGlvbiBjYWxjVGVtcCh0ZW1wKSB7XG4gIGxldCBmYWhyZW4gPSAoKCgrdGVtcCktMjczLjE1KSoxLjgpKzMyO1xuICBsZXQgY2VscyA9ICgrdGVtcCktMjczLjE1O1xuICBpZihjaGVjay5jaGVja2VkKSB7XG4gICAgcmV0dXJuIGNlbHM7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZhaHJlbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0VGVtcCh0ZW1wKSB7XG4gIGlmKGNoZWNrLmNoZWNrZWQpIHtcbiAgICBsZXQgY2VscyA9ICgoK3RlbXApLTMyKS8xLjg7XG4gICAgcmV0dXJuIGNlbHM7XG4gIH1cbiAgZWxzZSB7XG4gICAgbGV0IGZhaHJlbiA9ICgoK3RlbXApKjEuOCkrMzI7XG4gICAgcmV0dXJuIGZhaHJlbjtcbiAgfVxufVxuLy9yZXF1aXJlZCBkYXRhXG4vL05hbWUgb2YgY2l0eVxuLy9Db3VudHJ5IGNvZGVcbi8vaWNvblxuLy93ZWF0aGVyIGRlc2NyaXB0aW9uXG4vL3RlbXBcbi8vaHVtaWRpdHlcblxuZnVuY3Rpb24gZ2V0RGF0YShkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXG4gICAgICAgIGljb246IGRhdGEud2VhdGhlclswXS5pY29uLFxuICAgICAgICBpbmZvOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24udG9VcHBlckNhc2UoKSxcbiAgICAgICAgdGVtcGVyYXR1cmU6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgIH07XG59XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuY29uc3QgbG9jSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKTtcbmNvbnN0IGNoZWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnZlcnQnKTtcblxuY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpPT4ge1xuICBcbn0pO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJQYWdlKTtcblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyUGFnZSgpIHtcbiAgbGV0IGxvY2F0aW9uID0gbG9jSW5wdXQudmFsdWU7XG4gIGxldCBsb2NEYXRhO1xuICBsZXQgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9ZmVjYzk1OTQ4MTFlYWZjY2E0NTkzMDkzYzIyZmExNzFgO1xuICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwse21vZGU6ICdjb3JzJ30pO1xuICAvL2l0cyBiZXR0ZXIgdG8gc2V0IHRyeSBjYXRjaCB3aXRoIGZldGNoXG4gIGxldCByZXNwb25zZURhdGE7XG4gIGlmKHJlc3BvbnNlLm9rKSB7XG4gICAgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGxvY0RhdGEgPSBnZXREYXRhKHJlc3BvbnNlRGF0YSk7XG4gICAgY29uc29sZS5sb2cobG9jRGF0YSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gbG9jYXRpb24gZm91bmQnKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==