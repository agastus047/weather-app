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
    })
    .catch(function(err) {
        console.log('error occured');
        console.error(err);
    });