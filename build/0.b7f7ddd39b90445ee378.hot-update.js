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
document.querySelector('.module__weather button.btn--close').addEventListener('click', function (event) {
  event.preventDefault();
  var divEl = event.target.parentElement.parentElement;
  divEl.remove();
});

// show form for new weather forecast
document.querySelector('#add-city').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.module__form').hidden = false;
});

// hide form
document.querySelector('.module__form button.btn--close').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.module__form').hidden = true;
});
document.querySelector('button ').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.module__form').hidden = true;
});
getWeather('auto:ip');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eaa9f349a895aad0b7dd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBRXRCLElBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0EsYUFBYTtFQUN0REYsS0FBSyxDQUFDRyxNQUFNLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUM7O0FBRUY7QUFDQXpCLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDUyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0VBQ3JFQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBRXRCckIsUUFBUSxDQUFDVSxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUNnQixNQUFNLEdBQUcsS0FBSztBQUMxRCxDQUFDLENBQUM7O0FBRUY7QUFDQTFCLFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLGlDQUFpQyxDQUFDLENBQUNTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7RUFDM0ZBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFFdEJyQixRQUFRLENBQUNVLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ2dCLE1BQU0sR0FBRyxJQUFJO0FBQ3pELENBQUMsQ0FBQztBQUVGMUIsUUFBUSxDQUFDVSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNTLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7RUFDbkVBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFFdEJyQixRQUFRLENBQUNVLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ2dCLE1BQU0sR0FBRyxJQUFJO0FBQ3pELENBQUMsQ0FBQztBQUVGckQsVUFBVSxDQUFDLFNBQVMsQ0FBQzs7Ozs7Ozs7VUN2RXJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5SXApID0+IHtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YmM4MmJkYTRhOTgyNDM0ZDgxMjEzMDUwNjIzMDcwOCZxPSR7Y2l0eUlwfSZkYXlzPTVgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKS5pbm5lckhUTUwgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJykuaW5uZXJIVE1MID0gZGF0YS5jdXJyZW50LnRlbXBfYztcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKS5pbm5lckhUTUwgPSBgJHtkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWA7XG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJykuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJykuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50LndpbmRfa3BoICogMTAwMCAvIDM2MDB9IG0vc2A7XG5cbiAgICAgICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhbkRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBzcGFuRGF5LmNsYXNzTmFtZSA9ICdkYXknO1xuICAgICAgICAgICAgICAgIHNwYW5EYXkuaW5uZXJIVE1MID0gJ2RheSc7XG4gICAgICAgICAgICAgICAgbGlFTC5hcHBlbmQoc3BhbkRheSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc3BhblRlbXAuY2xhc3NOYW1lID0gJ3RlbXBlcmF0dXJlJztcbiAgICAgICAgICAgICAgICBjb25zdCBzcGFuVGVtcERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc3BhblRlbXBEYXRhLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZV9fdmFsdWUnO1xuICAgICAgICAgICAgICAgIHNwYW5UZW1wRGF0YS5pbm5lckhUTUwgPSBgJHtlbC5kYXkuYXZndGVtcF9jfSAmZGVnO0NgO1xuICAgICAgICAgICAgICAgIHNwYW5UZW1wLmFwcGVuZChzcGFuVGVtcERhdGEpO1xuICAgICAgICAgICAgICAgIGxpRUwuYXBwZW5kKHNwYW5UZW1wKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fZm9yZWNhc3QnKS5hcHBlbmQobGlFTCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpXG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG5cbn1cblxuLy8gZGVsZXRlIHNwZWNpZmljIHdlYXRoZXIgZm9yZWNhc3RcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXIgYnV0dG9uLmJ0bi0tY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkaXZFbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgZGl2RWwucmVtb3ZlKCk7XG59KTtcblxuLy8gc2hvdyBmb3JtIGZvciBuZXcgd2VhdGhlciBmb3JlY2FzdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jaXR5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybScpLmhpZGRlbiA9IGZhbHNlO1xufSk7XG5cbi8vIGhpZGUgZm9ybVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybSBidXR0b24uYnRuLS1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKS5oaWRkZW4gPSB0cnVlO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbiAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtJykuaGlkZGVuID0gdHJ1ZTtcbn0pO1xuXG5nZXRXZWF0aGVyKCdhdXRvOmlwJylcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVhYTlmMzQ5YTg5NWFhZDBiN2RkXCIpIl0sIm5hbWVzIjpbImdldFdlYXRoZXIiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJjaXR5SXAiLCJyZXNwb25zZSIsImRhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJjb25jYXQiLCJtZXRob2QiLCJzZW50Iiwib2siLCJqc29uIiwiY29uc29sZSIsImxvZyIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJmb3JFYWNoIiwiZWwiLCJsaUVMIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3BhbkRheSIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImFwcGVuZCIsInNwYW5UZW1wIiwic3BhblRlbXBEYXRhIiwiZGF5IiwiYXZndGVtcF9jIiwicXVlcnlTZWxlY3RvciIsIkVycm9yIiwic3RhdHVzIiwidDAiLCJlcnJvciIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXZFbCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJoaWRkZW4iXSwic291cmNlUm9vdCI6IiJ9