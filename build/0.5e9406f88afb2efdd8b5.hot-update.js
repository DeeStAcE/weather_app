"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var getWeather = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(cityIp) {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=bc82bda4a982434d812130506230708&q=".concat(cityIp, "&days=5"), {
            method: 'GET'
          });
        case 3:
          response = _context.sent;
          if (!response.ok) {
            _context.next = 10;
            break;
          }
          data = response.json();
          console.log(data);

          // document.querySelector('.city__name').innerHTML = data.location.name;
          // document.querySelector('.temperature__value').innerHTML = data.current.temp_c;
          // document.querySelector('.pressure__value').innerHTML = `${data.current.pressure_mb} hPa`;
          // document.querySelector('.humidity__value').innerHTML = `${data.current.humidity}%`;
          // document.querySelector('.wind-speed__value').innerHTML = `${data.current.wind_kph * 1000 / 3600} m/s`;

          data.forecast.forecastday.forEach(function (el) {
            var liEL = document.createElement('li');
            var spanDay = document.createElement('span');
            spanDay.className = 'day';
            spanDay.innerHTML = 'day';
            liEL.append(spanDay);
            var spanTemp = document.createElement('span');
            spanTemp.className = 'temperature';
            var spanTempData = document.createElement('span');
            spanTempData.className = 'temperature__value';
            spanTempData.innerHTML = "".concat(el.day.avgtemp_c, " &deg;C");
            spanTemp.append(spanTempData);
            liEL.append(spanTemp);
            document.querySelector('.weather__forecast').append(liEL);
          });
          _context.next = 11;
          break;
        case 10:
          throw Error(response.status);
        case 11:
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return function getWeather(_x) {
    return _ref.apply(this, arguments);
  };
}();

// delete specific weather forecast
document.querySelector('button.btn--close').addEventListener('click', function (event) {
  event.preventDefault();
  var divEl = event.target.parentElement.parentElement;
  console.log(divEl);
  // divEl.remove();
});

// add new weather forecast
document.querySelector('#add-city').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.module__form').hidden = false;
});
getWeather('auto:ip');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bde2d6c0f469953728ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBRXRCLElBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0EsYUFBYTtFQUN0RC9CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDNEIsS0FBSyxDQUFDO0VBQ2xCO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0F0QixRQUFRLENBQUNVLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ1MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUNyRUEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUV0QnJCLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDZSxNQUFNLEdBQUcsS0FBSztBQUMxRCxDQUFDLENBQUM7QUFHRnBELFVBQVUsQ0FBQyxTQUFTLENBQUM7Ozs7Ozs7O1VDNURyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eUlwKSA9PiB7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWJjODJiZGE0YTk4MjQzNGQ4MTIxMzA1MDYyMzA3MDgmcT0ke2NpdHlJcH0mZGF5cz01YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJykuaW5uZXJIVE1MID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpLmlubmVySFRNTCA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJykuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50LnByZXNzdXJlX21ifSBoUGFgO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpLmlubmVySFRNTCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpLmlubmVySFRNTCA9IGAke2RhdGEuY3VycmVudC53aW5kX2twaCAqIDEwMDAgLyAzNjAwfSBtL3NgO1xuXG4gICAgICAgICAgICBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5LmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpRUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwYW5EYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc3BhbkRheS5jbGFzc05hbWUgPSAnZGF5JztcbiAgICAgICAgICAgICAgICBzcGFuRGF5LmlubmVySFRNTCA9ICdkYXknO1xuICAgICAgICAgICAgICAgIGxpRUwuYXBwZW5kKHNwYW5EYXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNwYW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHNwYW5UZW1wLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSc7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhblRlbXBEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHNwYW5UZW1wRGF0YS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmVfX3ZhbHVlJztcbiAgICAgICAgICAgICAgICBzcGFuVGVtcERhdGEuaW5uZXJIVE1MID0gYCR7ZWwuZGF5LmF2Z3RlbXBfY30gJmRlZztDYDtcbiAgICAgICAgICAgICAgICBzcGFuVGVtcC5hcHBlbmQoc3BhblRlbXBEYXRhKTtcbiAgICAgICAgICAgICAgICBsaUVMLmFwcGVuZChzcGFuVGVtcCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJfX2ZvcmVjYXN0JykuYXBwZW5kKGxpRUwpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKVxuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuXG59XG5cbi8vIGRlbGV0ZSBzcGVjaWZpYyB3ZWF0aGVyIGZvcmVjYXN0XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYnRuLS1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRpdkVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBjb25zb2xlLmxvZyhkaXZFbClcbiAgICAvLyBkaXZFbC5yZW1vdmUoKTtcbn0pO1xuXG4vLyBhZGQgbmV3IHdlYXRoZXIgZm9yZWNhc3RcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtY2l0eScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKS5oaWRkZW4gPSBmYWxzZTtcbn0pO1xuXG5cbmdldFdlYXRoZXIoJ2F1dG86aXAnKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmRlMmQ2YzBmNDY5OTUzNzI4YmFcIikiXSwibmFtZXMiOlsiZ2V0V2VhdGhlciIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNpdHlJcCIsInJlc3BvbnNlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsInNlbnQiLCJvayIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImZvckVhY2giLCJlbCIsImxpRUwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcGFuRGF5IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwic3BhblRlbXAiLCJzcGFuVGVtcERhdGEiLCJkYXkiLCJhdmd0ZW1wX2MiLCJxdWVyeVNlbGVjdG9yIiwiRXJyb3IiLCJzdGF0dXMiLCJ0MCIsImVycm9yIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdkVsIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImhpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=