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
    var response, data, weatherModule;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          document.querySelector('.loading').style.display = 'block';
          _context.next = 4;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=bc82bda4a982434d812130506230708&q=".concat(cityIp ?? 'auto:ip', "&days=5"));
        case 4:
          response = _context.sent;
          if (!response.ok) {
            _context.next = 24;
            break;
          }
          _context.next = 8;
          return response.json();
        case 8:
          data = _context.sent;
          console.log(data);
          weatherModule = document.querySelector('.module__weather').cloneNode(true);
          weatherModule.removeAttribute('hidden');
          weatherModule.querySelector('.city__name').textContent = data.location.name;
          weatherModule.querySelector('.temperature__value').textContent = data.current.temp_c;
          weatherModule.querySelector('.pressure__value').textContent = "".concat(data.current.pressure_mb, " hPa");
          weatherModule.querySelector('.humidity__value').textContent = "".concat(data.current.humidity, "%");
          weatherModule.querySelector('.wind-speed__value').textContent = "".concat(Math.floor(data.current.wind_kph * 1000 / 3600), " m/s");
          console.log(weatherModule.querySelectorAll('.weather__forecast').children);
          weatherModule.querySelectorAll('.weather__forecast').forEach(function (el, index) {
            el.querySelector('.day').textContent = data.forecast.forecastday[index].date;
            console.log(index);
          });
          weatherModule.querySelectorAll('.module__weather button.btn--close').forEach(function (el) {
            el.addEventListener('click', function (event) {
              event.preventDefault();
              var divEl = event.target.parentElement.parentElement;
              divEl.remove();
            });
          });
          document.querySelector('#app').appendChild(weatherModule);
          document.querySelector('.loading').style.display = 'none';
          _context.next = 25;
          break;
        case 24:
          throw Error(response.status);
        case 25:
          _context.next = 30;
          break;
        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 30:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 27]]);
  }));
  return function getWeather(_x) {
    return _ref.apply(this, arguments);
  };
}();
getWeather();

// show form
document.querySelector('#add-city').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.module__form').hidden = false;
});

// hide form
document.querySelector('.module__form button.btn--close').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('.module__form').hidden = true;
});

// add new forecast
document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault();
  var cityName = document.querySelector('input#search').value;
  if (cityName) {
    getWeather(cityName);
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("39fa8794d07614363deb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQzs7QUFFRjtBQUNBL0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsaUNBQWlDLENBQUMsQ0FBQzhCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7RUFDM0ZBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFFdEJqQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQzhDLE1BQU0sR0FBRyxJQUFJO0FBQ3pELENBQUMsQ0FBQzs7QUFFRjtBQUNBL0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQzhCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7RUFDakZBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDdEIsSUFBTWUsUUFBUSxHQUFHaEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUNnRCxLQUFLO0VBRTdELElBQUlELFFBQVEsRUFBRTtJQUNWL0QsVUFBVSxDQUFDK0QsUUFBUSxDQUFDO0VBQ3hCO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7OztVQ2hFRiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eUlwKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWJjODJiZGE0YTk4MjQzNGQ4MTIxMzA1MDYyMzA3MDgmcT0ke2NpdHlJcCA/PyAnYXV0bzppcCd9JmRheXM9NWApO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyTW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fd2VhdGhlcicpLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZTtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnRlbXBfYztcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50LnByZXNzdXJlX21ifSBoUGFgO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpLnRleHRDb250ZW50ID0gYCR7TWF0aC5mbG9vcihkYXRhLmN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMCl9IG0vc2A7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWF0aGVyX19mb3JlY2FzdCcpLmNoaWxkcmVuKVxuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlcl9fZm9yZWNhc3QnKS5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuZGF5JykudGV4dENvbnRlbnQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2luZGV4XS5kYXRlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2R1bGVfX3dlYXRoZXIgYnV0dG9uLmJ0bi0tY2xvc2UnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXZFbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGRpdkVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5hcHBlbmRDaGlsZCh3ZWF0aGVyTW9kdWxlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG59XG5cbmdldFdlYXRoZXIoKVxuXG4vLyBzaG93IGZvcm1cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtY2l0eScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKS5oaWRkZW4gPSBmYWxzZTtcbn0pO1xuXG4vLyBoaWRlIGZvcm1cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0gYnV0dG9uLmJ0bi0tY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtJykuaGlkZGVuID0gdHJ1ZTtcbn0pO1xuXG4vLyBhZGQgbmV3IGZvcmVjYXN0XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3NlYXJjaCcpLnZhbHVlO1xuXG4gICAgaWYgKGNpdHlOYW1lKSB7XG4gICAgICAgIGdldFdlYXRoZXIoY2l0eU5hbWUpXG4gICAgfVxufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzOWZhODc5NGQwNzYxNDM2M2RlYlwiKSJdLCJuYW1lcyI6WyJnZXRXZWF0aGVyIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiY2l0eUlwIiwicmVzcG9uc2UiLCJkYXRhIiwid2VhdGhlck1vZHVsZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJmZXRjaCIsImNvbmNhdCIsInNlbnQiLCJvayIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIk1hdGgiLCJmbG9vciIsIndpbmRfa3BoIiwicXVlcnlTZWxlY3RvckFsbCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGl2RWwiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwiYXBwZW5kQ2hpbGQiLCJFcnJvciIsInN0YXR1cyIsInQwIiwiZXJyb3IiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsImhpZGRlbiIsImNpdHlOYW1lIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9