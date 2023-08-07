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
          weatherModule.querySelector('.city__name').textContent = data.location.name;
          weatherModule.querySelector('.temperature__value').textContent = data.current.temp_c;
          weatherModule.querySelector('.pressure__value').textContent = "".concat(data.current.pressure_mb, " hPa");
          weatherModule.querySelector('.humidity__value').textContent = "".concat(data.current.humidity, "%");
          weatherModule.querySelector('.wind-speed__value').textContent = "".concat(Math.floor(data.current.wind_kph * 1000 / 3600), " m/s");

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
/******/ 	__webpack_require__.h = () => ("07e1bfc4c975688960a1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsR0FBR0wsS0FBSyxDQUFDMUIsU0FBUyxDQUFDLElBQUksQ0FBQztFQUN0QyxJQUFNZ0MsUUFBUSxHQUFHM0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMyQyxLQUFLO0VBRTdELElBQUlELFFBQVEsRUFBRTtJQUNWMUQsVUFBVSxDQUFDeUQsUUFBUSxFQUFFQyxRQUFRLENBQUM7O0lBRTlCO0lBQ0FELFFBQVEsQ0FBQ1gsZ0JBQWdCLENBQUMsb0NBQW9DLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtNQUMxRUEsRUFBRSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO1FBQ3BDQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBRXRCLElBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxNQUFNLENBQUNDLGFBQWEsQ0FBQ0EsYUFBYTtRQUN0REYsS0FBSyxDQUFDRyxNQUFNLENBQUMsQ0FBQztNQUNsQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7SUFFRnhDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDNEMsTUFBTSxDQUFDSCxRQUFRLENBQUM7RUFDbkQ7QUFHSixDQUFDLENBQUM7QUFFRnpELFVBQVUsQ0FBQyxDQUFDOzs7Ozs7OztVQ2pHWiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eUlwKSA9PiB7XG5cbiAgICB0cnkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YmM4MmJkYTRhOTgyNDM0ZDgxMjEzMDUwNjIzMDcwOCZxPSR7Y2l0eUlwID8/ICdhdXRvOmlwJ30mZGF5cz01YCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJykuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJykudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYDtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoZGF0YS5jdXJyZW50LndpbmRfa3BoICogMTAwMCAvIDM2MDApfSBtL3NgO1xuXG4gICAgICAgICAgICAvLyBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5LmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGxpRUwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNwYW5EYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAvLyAgICAgc3BhbkRheS5jbGFzc05hbWUgPSAnZGF5JztcbiAgICAgICAgICAgIC8vICAgICBzcGFuRGF5LmlubmVySFRNTCA9IGVsLmRhdGU7XG4gICAgICAgICAgICAvLyAgICAgbGlFTC5hcHBlbmQoc3BhbkRheSk7XG4gICAgICAgICAgICAvLyAgICAgY29uc3Qgc3BhblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAvLyAgICAgc3BhblRlbXAuY2xhc3NOYW1lID0gJ3RlbXBlcmF0dXJlJztcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzcGFuVGVtcERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAvLyAgICAgc3BhblRlbXBEYXRhLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZV9fdmFsdWUnO1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVsKVxuICAgICAgICAgICAgLy8gICAgIHNwYW5UZW1wRGF0YS5pbm5lckhUTUwgPSBgJHtlbC5kYXkuYXZndGVtcF9jfSAmZGVnO0NgO1xuICAgICAgICAgICAgLy8gICAgIHNwYW5UZW1wLmFwcGVuZChzcGFuVGVtcERhdGEpO1xuICAgICAgICAgICAgLy8gICAgIGxpRUwuYXBwZW5kKHNwYW5UZW1wKTtcbiAgICAgICAgICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fZm9yZWNhc3QnKS5hcHBlbmQobGlFTCk7XG4gICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpXG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG5cbn1cblxuLy8gZGVsZXRlIHdlYXRoZXIgZm9yZWNhc3RcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2R1bGVfX3dlYXRoZXIgYnV0dG9uLmJ0bi0tY2xvc2UnKS5mb3JFYWNoKGVsID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGRpdkVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgZGl2RWwucmVtb3ZlKCk7XG4gICAgfSk7XG59KTtcblxuLy8gc2hvdyBmb3JtIGZvciBuZXcgd2VhdGhlciBmb3JlY2FzdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jaXR5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybScpLmhpZGRlbiA9IGZhbHNlO1xufSk7XG5cbi8vIGhpZGUgZm9ybVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybSBidXR0b24uYnRuLS1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKS5oaWRkZW4gPSB0cnVlO1xufSk7XG5cbi8vIGFkZCBuZXcgZm9yZWNhc3QgdGhyb3VnaCBBUElcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJyk7XG4gICAgY29uc3QgbmV3RGl2RWwgPSBkaXZFbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNzZWFyY2gnKS52YWx1ZTtcblxuICAgIGlmIChjaXR5TmFtZSkge1xuICAgICAgICBnZXRXZWF0aGVyKG5ld0RpdkVsLCBjaXR5TmFtZSlcblxuICAgICAgICAvLyBjbG9uZU5vZGUoKSBkb2VzIG5vdCBjb3B5IGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICBuZXdEaXZFbC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kdWxlX193ZWF0aGVyIGJ1dHRvbi5idG4tLWNsb3NlJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXZFbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZGl2RWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpLmFwcGVuZChuZXdEaXZFbCk7XG4gICAgfVxuXG5cbn0pO1xuXG5nZXRXZWF0aGVyKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA3ZTFiZmM0Yzk3NTY4ODk2MGExXCIpIl0sIm5hbWVzIjpbImdldFdlYXRoZXIiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJjaXR5SXAiLCJyZXNwb25zZSIsImRhdGEiLCJ3ZWF0aGVyTW9kdWxlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsImZldGNoIiwiY29uY2F0Iiwic2VudCIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjbG9uZU5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5IiwiTWF0aCIsImZsb29yIiwid2luZF9rcGgiLCJFcnJvciIsInN0YXR1cyIsInQwIiwiZXJyb3IiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdkVsIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsImhpZGRlbiIsIm5ld0RpdkVsIiwiY2l0eU5hbWUiLCJ2YWx1ZSIsImFwcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=