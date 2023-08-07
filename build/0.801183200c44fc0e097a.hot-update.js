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
            _context.next = 22;
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
          weatherModule.querySelectorAll('.module__weather button.btn--close').forEach(function (el) {
            el.addEventListener('click', function (event) {
              event.preventDefault();
              var divEl = event.target.parentElement.parentElement;
              divEl.remove();
            });
          });
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
          _context.next = 23;
          break;
        case 22:
          throw Error(response.status);
        case 23:
          _context.next = 28;
          break;
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 28:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 25]]);
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f839ed5807d657b657f2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDeUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUNqRkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN0QixJQUFNZSxRQUFRLEdBQUczQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzJDLEtBQUs7RUFFN0QsSUFBSUQsUUFBUSxFQUFFO0lBQ1YxRCxVQUFVLENBQUMwRCxRQUFRLENBQUM7RUFDeEI7QUFDSixDQUFDLENBQUM7Ozs7Ozs7O1VDL0VGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5SXApID0+IHtcbiAgICB0cnkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YmM4MmJkYTRhOTgyNDM0ZDgxMjEzMDUwNjIzMDcwOCZxPSR7Y2l0eUlwID8/ICdhdXRvOmlwJ30mZGF5cz01YCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJykuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWA7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJykudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEuY3VycmVudC53aW5kX2twaCAqIDEwMDAgLyAzNjAwKX0gbS9zYDtcblxuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yQWxsKCcubW9kdWxlX193ZWF0aGVyIGJ1dHRvbi5idG4tLWNsb3NlJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2RWwgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBkaXZFbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykuYXBwZW5kQ2hpbGQod2VhdGhlck1vZHVsZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgLy8gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBsaUVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzcGFuRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgLy8gICAgIHNwYW5EYXkuY2xhc3NOYW1lID0gJ2RheSc7XG4gICAgICAgICAgICAvLyAgICAgc3BhbkRheS5pbm5lckhUTUwgPSBlbC5kYXRlO1xuICAgICAgICAgICAgLy8gICAgIGxpRUwuYXBwZW5kKHNwYW5EYXkpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNwYW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgLy8gICAgIHNwYW5UZW1wLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSc7XG4gICAgICAgICAgICAvLyAgICAgY29uc3Qgc3BhblRlbXBEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgLy8gICAgIHNwYW5UZW1wRGF0YS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmVfX3ZhbHVlJztcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlbClcbiAgICAgICAgICAgIC8vICAgICBzcGFuVGVtcERhdGEuaW5uZXJIVE1MID0gYCR7ZWwuZGF5LmF2Z3RlbXBfY30gJmRlZztDYDtcbiAgICAgICAgICAgIC8vICAgICBzcGFuVGVtcC5hcHBlbmQoc3BhblRlbXBEYXRhKTtcbiAgICAgICAgICAgIC8vICAgICBsaUVMLmFwcGVuZChzcGFuVGVtcCk7XG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJfX2ZvcmVjYXN0JykuYXBwZW5kKGxpRUwpO1xuICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKVxuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxufVxuXG5nZXRXZWF0aGVyKClcblxuLy8gc2hvdyBmb3JtXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNpdHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtJykuaGlkZGVuID0gZmFsc2U7XG59KTtcblxuLy8gaGlkZSBmb3JtXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtIGJ1dHRvbi5idG4tLWNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybScpLmhpZGRlbiA9IHRydWU7XG59KTtcblxuLy8gYWRkIG5ldyBmb3JlY2FzdCB0aHJvdWdoIEFQSVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNzZWFyY2gnKS52YWx1ZTtcblxuICAgIGlmIChjaXR5TmFtZSkge1xuICAgICAgICBnZXRXZWF0aGVyKGNpdHlOYW1lKVxuICAgIH1cbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjgzOWVkNTgwN2Q2NTdiNjU3ZjJcIikiXSwibmFtZXMiOlsiZ2V0V2VhdGhlciIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNpdHlJcCIsInJlc3BvbnNlIiwiZGF0YSIsIndlYXRoZXJNb2R1bGUiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiZmV0Y2giLCJjb25jYXQiLCJzZW50Iiwib2siLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJNYXRoIiwiZmxvb3IiLCJ3aW5kX2twaCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdkVsIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsImFwcGVuZENoaWxkIiwiRXJyb3IiLCJzdGF0dXMiLCJ0MCIsImVycm9yIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoaWRkZW4iLCJjaXR5TmFtZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==