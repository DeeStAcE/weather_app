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
            _context.next = 21;
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
          document.querySelector('#app').appendChild(weatherModule);
          document.querySelector('.loading').style.display = 'none';

          // data.forecast.forecastday.forEach(el => {
          //     const liEL = document.createElement('li');
          //     const spanDay = document.createElement('span');
          //     spanDay.className = 'day';
          //     spanDay.innerHTML = el.date;
          //     liEL.append(spanDay);
          //     const spanTemp = document.createElement('span');
          //     spanTemp.className = 'temperature';
          //     const spanTempData = document.createElement('span');
          //     spanTempData.className = 'temperature__value';
          //     console.log(el)
          //     spanTempData.innerHTML = `${el.day.avgtemp_c} &deg;C`;
          //     spanTemp.append(spanTempData);
          //     liEL.append(spanTemp);
          //     document.querySelector('.weather__forecast').append(liEL);
          // })
          _context.next = 22;
          break;
        case 21:
          throw Error(response.status);
        case 22:
          _context.next = 27;
          break;
        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 24]]);
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

// add new forecast through API
document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault();
  var cityName = document.querySelector('input#search').value;
  if (cityName) {
    getWeather(cityName);
  }
});

// delete weather forecast
document.querySelectorAll('.module__weather button.btn--close').forEach(function (el) {
  el.addEventListener('click', function (event) {
    event.preventDefault();
    var divEl = event.target.parentElement.parentElement;
    divEl.remove();
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("882897190c4003e415ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsRUFBSTtFQUMxRUEsRUFBRSxDQUFDUixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0lBQ3BDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBRXRCLElBQU1PLEtBQUssR0FBR1IsS0FBSyxDQUFDUyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0EsYUFBYTtJQUN0REYsS0FBSyxDQUFDRyxNQUFNLENBQUMsQ0FBQztFQUNsQixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7O1VDbkZGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5SXApID0+IHtcbiAgICB0cnkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YmM4MmJkYTRhOTgyNDM0ZDgxMjEzMDUwNjIzMDcwOCZxPSR7Y2l0eUlwID8/ICdhdXRvOmlwJ30mZGF5cz01YCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJykuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWA7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEuY3VycmVudC53aW5kX2twaCAqIDEwMDAgLyAzNjAwKX0gbS9zYDtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpLmFwcGVuZENoaWxkKHdlYXRoZXJNb2R1bGUpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIC8vIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgbGlFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAvLyAgICAgY29uc3Qgc3BhbkRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIC8vICAgICBzcGFuRGF5LmNsYXNzTmFtZSA9ICdkYXknO1xuICAgICAgICAgICAgLy8gICAgIHNwYW5EYXkuaW5uZXJIVE1MID0gZWwuZGF0ZTtcbiAgICAgICAgICAgIC8vICAgICBsaUVMLmFwcGVuZChzcGFuRGF5KTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzcGFuVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIC8vICAgICBzcGFuVGVtcC5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUnO1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNwYW5UZW1wRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIC8vICAgICBzcGFuVGVtcERhdGEuY2xhc3NOYW1lID0gJ3RlbXBlcmF0dXJlX192YWx1ZSc7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZWwpXG4gICAgICAgICAgICAvLyAgICAgc3BhblRlbXBEYXRhLmlubmVySFRNTCA9IGAke2VsLmRheS5hdmd0ZW1wX2N9ICZkZWc7Q2A7XG4gICAgICAgICAgICAvLyAgICAgc3BhblRlbXAuYXBwZW5kKHNwYW5UZW1wRGF0YSk7XG4gICAgICAgICAgICAvLyAgICAgbGlFTC5hcHBlbmQoc3BhblRlbXApO1xuICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyX19mb3JlY2FzdCcpLmFwcGVuZChsaUVMKTtcbiAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbn1cblxuZ2V0V2VhdGhlcigpXG5cbi8vIHNob3cgZm9ybVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jaXR5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybScpLmhpZGRlbiA9IGZhbHNlO1xufSk7XG5cbi8vIGhpZGUgZm9ybVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybSBidXR0b24uYnRuLS1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKS5oaWRkZW4gPSB0cnVlO1xufSk7XG5cbi8vIGFkZCBuZXcgZm9yZWNhc3QgdGhyb3VnaCBBUElcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjc2VhcmNoJykudmFsdWU7XG5cbiAgICBpZiAoY2l0eU5hbWUpIHtcbiAgICAgICAgZ2V0V2VhdGhlcihjaXR5TmFtZSlcbiAgICB9XG59KTtcblxuXG5cbi8vIGRlbGV0ZSB3ZWF0aGVyIGZvcmVjYXN0XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kdWxlX193ZWF0aGVyIGJ1dHRvbi5idG4tLWNsb3NlJykuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBkaXZFbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGRpdkVsLnJlbW92ZSgpO1xuICAgIH0pO1xufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODgyODk3MTkwYzQwMDNlNDE1ZmZcIikiXSwibmFtZXMiOlsiZ2V0V2VhdGhlciIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNpdHlJcCIsInJlc3BvbnNlIiwiZGF0YSIsIndlYXRoZXJNb2R1bGUiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiZmV0Y2giLCJjb25jYXQiLCJzZW50Iiwib2siLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJNYXRoIiwiZmxvb3IiLCJ3aW5kX2twaCIsImFwcGVuZENoaWxkIiwiRXJyb3IiLCJzdGF0dXMiLCJ0MCIsImVycm9yIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhpZGRlbiIsImNpdHlOYW1lIiwidmFsdWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiZGl2RWwiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==