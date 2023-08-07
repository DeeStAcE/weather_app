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
            _context.next = 19;
            break;
          }
          _context.next = 8;
          return response.json();
        case 8:
          data = _context.sent;
          console.log(data);
          weatherModule = document.querySelector('.module__weather').cloneNode(true);
          weatherModule.removeAttribute('hidden');
          weatherModule.querySelector('.city__name').innerHTML = data.location.name;
          weatherModule.querySelector('.temperature__value').innerHTML = data.current.temp_c;
          weatherModule.querySelector('.pressure__value').innerHTML = "".concat(data.current.pressure_mb, " hPa");
          weatherModule.querySelector('.humidity__value').innerHTML = "".concat(data.current.humidity, "%");
          weatherModule.querySelector('.wind-speed__value').innerHTML = "".concat(Math.floor(data.current.wind_kph * 1000 / 3600), " m/s");

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
          _context.next = 20;
          break;
        case 19:
          throw Error(response.status);
        case 20:
          _context.next = 25;
          break;
        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 22]]);
  }));
  return function getWeather(_x) {
    return _ref.apply(this, arguments);
  };
}();

// delete weather forecast
document.querySelectorAll('.module__weather button.btn--close').forEach(function (el) {
  el.addEventListener('click', function (event) {
    event.preventDefault();
    var divEl = event.target.parentElement.parentElement;
    divEl.remove();
  });
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

// add new forecast through API
document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault();
  var divEl = document.querySelector('.module__weather');
  var newDivEl = divEl.cloneNode(true);
  var cityName = document.querySelector('input#search').value;
  if (cityName) {
    getWeather(newDivEl, cityName);

    // cloneNode() does not copy event listeners
    newDivEl.querySelectorAll('.module__weather button.btn--close').forEach(function (el) {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        var divEl = event.target.parentElement.parentElement;
        divEl.remove();
      });
    });
    document.querySelector('#app').append(newDivEl);
  }
});
getWeather();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c3739f8530c67e781466")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsR0FBR0wsS0FBSyxDQUFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQztFQUN0QyxJQUFNZ0MsUUFBUSxHQUFHM0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMyQyxLQUFLO0VBRTdELElBQUlELFFBQVEsRUFBRTtJQUNWMUQsVUFBVSxDQUFDeUQsUUFBUSxFQUFFQyxRQUFRLENBQUM7O0lBRTlCO0lBQ0FELFFBQVEsQ0FBQ1gsZ0JBQWdCLENBQUMsb0NBQW9DLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtNQUMxRUEsRUFBRSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO1FBQ3BDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBRXRCLElBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0EsYUFBYTtRQUN0REYsS0FBSyxDQUFDRyxNQUFNLENBQUMsQ0FBQztNQUNsQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFFRnhDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDNEMsTUFBTSxDQUFDSCxRQUFRLENBQUM7RUFDbkQ7QUFHSixDQUFDLENBQUM7QUFFRnpELFVBQVUsQ0FBQyxDQUFDOzs7Ozs7OztVQ2pHWiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eUlwKSA9PiB7XG5cbiAgICB0cnkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YmM4MmJkYTRhOTgyNDM0ZDgxMjEzMDUwNjIzMDcwOCZxPSR7Y2l0eUlwID8/ICdhdXRvOmlwJ30mZGF5cz01YCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJykuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJykuaW5uZXJIVE1MID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJykuaW5uZXJIVE1MID0gZGF0YS5jdXJyZW50LnRlbXBfYztcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpLmlubmVySFRNTCA9IGAke2RhdGEuY3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYDtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpLmlubmVySFRNTCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJykuaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcihkYXRhLmN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMCl9IG0vc2A7XG5cbiAgICAgICAgICAgIC8vIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgbGlFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAvLyAgICAgY29uc3Qgc3BhbkRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIC8vICAgICBzcGFuRGF5LmNsYXNzTmFtZSA9ICdkYXknO1xuICAgICAgICAgICAgLy8gICAgIHNwYW5EYXkuaW5uZXJIVE1MID0gZWwuZGF0ZTtcbiAgICAgICAgICAgIC8vICAgICBsaUVMLmFwcGVuZChzcGFuRGF5KTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzcGFuVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIC8vICAgICBzcGFuVGVtcC5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUnO1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNwYW5UZW1wRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIC8vICAgICBzcGFuVGVtcERhdGEuY2xhc3NOYW1lID0gJ3RlbXBlcmF0dXJlX192YWx1ZSc7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZWwpXG4gICAgICAgICAgICAvLyAgICAgc3BhblRlbXBEYXRhLmlubmVySFRNTCA9IGAke2VsLmRheS5hdmd0ZW1wX2N9ICZkZWc7Q2A7XG4gICAgICAgICAgICAvLyAgICAgc3BhblRlbXAuYXBwZW5kKHNwYW5UZW1wRGF0YSk7XG4gICAgICAgICAgICAvLyAgICAgbGlFTC5hcHBlbmQoc3BhblRlbXApO1xuICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyX19mb3JlY2FzdCcpLmFwcGVuZChsaUVMKTtcbiAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cblxufVxuXG4vLyBkZWxldGUgd2VhdGhlciBmb3JlY2FzdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZHVsZV9fd2VhdGhlciBidXR0b24uYnRuLS1jbG9zZScpLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgZGl2RWwgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBkaXZFbC5yZW1vdmUoKTtcbiAgICB9KTtcbn0pO1xuXG4vLyBzaG93IGZvcm0gZm9yIG5ldyB3ZWF0aGVyIGZvcmVjYXN0XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNpdHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtJykuaGlkZGVuID0gZmFsc2U7XG59KTtcblxuLy8gaGlkZSBmb3JtXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtIGJ1dHRvbi5idG4tLWNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybScpLmhpZGRlbiA9IHRydWU7XG59KTtcblxuLy8gYWRkIG5ldyBmb3JlY2FzdCB0aHJvdWdoIEFQSVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBkaXZFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKTtcbiAgICBjb25zdCBuZXdEaXZFbCA9IGRpdkVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0I3NlYXJjaCcpLnZhbHVlO1xuXG4gICAgaWYgKGNpdHlOYW1lKSB7XG4gICAgICAgIGdldFdlYXRoZXIobmV3RGl2RWwsIGNpdHlOYW1lKVxuXG4gICAgICAgIC8vIGNsb25lTm9kZSgpIGRvZXMgbm90IGNvcHkgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIG5ld0RpdkVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2R1bGVfX3dlYXRoZXIgYnV0dG9uLmJ0bi0tY2xvc2UnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdkVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBkaXZFbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykuYXBwZW5kKG5ld0RpdkVsKTtcbiAgICB9XG5cblxufSk7XG5cbmdldFdlYXRoZXIoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzM3MzlmODUzMGM2N2U3ODE0NjZcIikiXSwibmFtZXMiOlsiZ2V0V2VhdGhlciIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNpdHlJcCIsInJlc3BvbnNlIiwiZGF0YSIsIndlYXRoZXJNb2R1bGUiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiZmV0Y2giLCJjb25jYXQiLCJzZW50Iiwib2siLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVySFRNTCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5IiwiTWF0aCIsImZsb29yIiwid2luZF9rcGgiLCJFcnJvciIsInN0YXR1cyIsInQwIiwiZXJyb3IiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdkVsIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsImhpZGRlbiIsIm5ld0RpdkVsIiwiY2l0eU5hbWUiLCJ2YWx1ZSIsImFwcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=