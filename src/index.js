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
    console.error('No location found');
  }
}