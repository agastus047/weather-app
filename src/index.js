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