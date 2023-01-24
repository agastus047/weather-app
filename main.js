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
    })
    .catch(function(err) {
        console.log('error occured');
        console.error(err);
    });
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBHQUEwRyxhQUFhO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9TG9uZG9uJkFQUElEPWZlY2M5NTk0ODExZWFmY2NhNDU5MzA5M2MyMmZhMTcxJywge21vZGU6ICdjb3JzJ30pXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhdHVzIGNvZGUgZXJyb3I6IFwiK3Jlc3BvbnNlLnN0YXR1cyk7XG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3Igb2NjdXJlZCcpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9