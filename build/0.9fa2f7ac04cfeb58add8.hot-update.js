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
            _context.next = 23;
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
          weatherModule.querySelectorAll('.weather__forecast li').forEach(function (el, index) {
            el.querySelector('.day').textContent = data.forecast.forecastday[index].date;
            el.querySelector('.temperature__value').textContent = data.forecast.forecastday[index].day.avgtemp_c;
          });
          weatherModule.querySelectorAll('.module__weather button.btn--close i').forEach(function (el) {
            el.addEventListener('click', function (event) {
              event.preventDefault();
              var divEl = event.target.parentElement.parentElement;
              console.log(event.target);
              console.log(divEl);
              // divEl.remove();
            });
          });

          document.querySelector('#app').appendChild(weatherModule);
          document.querySelector('.loading').style.display = 'none';
          _context.next = 24;
          break;
        case 23:
          throw Error(response.status);
        case 24:
          _context.next = 29;
          break;
        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 29:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 26]]);
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
/******/ 	__webpack_require__.h = () => ("1d34e24a6dff8f5bb5b7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztFQUV0QmxDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDOEMsTUFBTSxHQUFHLEtBQUs7QUFDMUQsQ0FBQyxDQUFDOztBQUVGO0FBQ0EvQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDK0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUMzRkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUV0QmxDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDOEMsTUFBTSxHQUFHLElBQUk7QUFDekQsQ0FBQyxDQUFDOztBQUVGO0FBQ0EvQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDK0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUNqRkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN0QixJQUFNYyxRQUFRLEdBQUdoRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ2dELEtBQUs7RUFFN0QsSUFBSUQsUUFBUSxFQUFFO0lBQ1YvRCxVQUFVLENBQUMrRCxRQUFRLENBQUM7RUFDeEI7QUFDSixDQUFDLENBQUM7Ozs7Ozs7O1VDakVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5SXApID0+IHtcbiAgICB0cnkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YmM4MmJkYTRhOTgyNDM0ZDgxMjEzMDUwNjIzMDcwOCZxPSR7Y2l0eUlwID8/ICdhdXRvOmlwJ30mZGF5cz01YCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJykuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWA7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEuY3VycmVudC53aW5kX2twaCAqIDEwMDAgLyAzNjAwKX0gbS9zYDtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvckFsbCgnLndlYXRoZXJfX2ZvcmVjYXN0IGxpJykuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgZWwucXVlcnlTZWxlY3RvcignLmRheScpLnRleHRDb250ZW50ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpbmRleF0uZGF0ZTtcbiAgICAgICAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2luZGV4XS5kYXkuYXZndGVtcF9jO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yQWxsKCcubW9kdWxlX193ZWF0aGVyIGJ1dHRvbi5idG4tLWNsb3NlIGknKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXZFbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGl2RWwpXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpdkVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5hcHBlbmRDaGlsZCh3ZWF0aGVyTW9kdWxlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG59XG5cbmdldFdlYXRoZXIoKVxuXG4vLyBzaG93IGZvcm1cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtY2l0eScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKS5oaWRkZW4gPSBmYWxzZTtcbn0pO1xuXG4vLyBoaWRlIGZvcm1cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0gYnV0dG9uLmJ0bi0tY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtJykuaGlkZGVuID0gdHJ1ZTtcbn0pO1xuXG4vLyBhZGQgbmV3IGZvcmVjYXN0XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3NlYXJjaCcpLnZhbHVlO1xuXG4gICAgaWYgKGNpdHlOYW1lKSB7XG4gICAgICAgIGdldFdlYXRoZXIoY2l0eU5hbWUpXG4gICAgfVxufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZDM0ZTI0YTZkZmY4ZjViYjViN1wiKSJdLCJuYW1lcyI6WyJnZXRXZWF0aGVyIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiY2l0eUlwIiwicmVzcG9uc2UiLCJkYXRhIiwid2VhdGhlck1vZHVsZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJmZXRjaCIsImNvbmNhdCIsInNlbnQiLCJvayIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIk1hdGgiLCJmbG9vciIsIndpbmRfa3BoIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImluZGV4IiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRhdGUiLCJkYXkiLCJhdmd0ZW1wX2MiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdkVsIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiRXJyb3IiLCJzdGF0dXMiLCJ0MCIsImVycm9yIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoaWRkZW4iLCJjaXR5TmFtZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==