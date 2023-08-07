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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b82e6fcfae608633e544")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsQ0FBQyxDQUFDa0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztFQUNqRkEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUV0QixJQUFNQyxLQUFLLEdBQUd0QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztFQUN4RCxJQUFNMEMsUUFBUSxHQUFHTCxLQUFLLENBQUMzQixTQUFTLENBQUMsSUFBSSxDQUFDO0VBQ3RDLElBQU1pQyxRQUFRLEdBQUc1QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQzRDLEtBQUs7RUFFN0QsSUFBSUQsUUFBUSxFQUFFO0lBQ1YzRCxVQUFVLENBQUMwRCxRQUFRLEVBQUVDLFFBQVEsQ0FBQzs7SUFFOUI7SUFDQUQsUUFBUSxDQUFDWCxnQkFBZ0IsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQzFFQSxFQUFFLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxLQUFLLEVBQUs7UUFDcENBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFFdEIsSUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLE1BQU0sQ0FBQ0MsYUFBYSxDQUFDQSxhQUFhO1FBQ3RERixLQUFLLENBQUNHLE1BQU0sQ0FBQyxDQUFDO01BQ2xCLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGekMsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM2QyxNQUFNLENBQUNILFFBQVEsQ0FBQztFQUNuRDtBQUdKLENBQUMsQ0FBQzs7Ozs7Ozs7VUNsR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGNpdHlJcCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1iYzgyYmRhNGE5ODI0MzRkODEyMTMwNTA2MjMwNzA4JnE9JHtjaXR5SXAgPz8gJ2F1dG86aXAnfSZkYXlzPTVgKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlck1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJykudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYDtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoZGF0YS5jdXJyZW50LndpbmRfa3BoICogMTAwMCAvIDM2MDApfSBtL3NgO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykuYXBwZW5kQ2hpbGQod2VhdGhlck1vZHVsZSk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgLy8gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBsaUVMID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzcGFuRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgLy8gICAgIHNwYW5EYXkuY2xhc3NOYW1lID0gJ2RheSc7XG4gICAgICAgICAgICAvLyAgICAgc3BhbkRheS5pbm5lckhUTUwgPSBlbC5kYXRlO1xuICAgICAgICAgICAgLy8gICAgIGxpRUwuYXBwZW5kKHNwYW5EYXkpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNwYW5UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgLy8gICAgIHNwYW5UZW1wLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZSc7XG4gICAgICAgICAgICAvLyAgICAgY29uc3Qgc3BhblRlbXBEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgLy8gICAgIHNwYW5UZW1wRGF0YS5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmVfX3ZhbHVlJztcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlbClcbiAgICAgICAgICAgIC8vICAgICBzcGFuVGVtcERhdGEuaW5uZXJIVE1MID0gYCR7ZWwuZGF5LmF2Z3RlbXBfY30gJmRlZztDYDtcbiAgICAgICAgICAgIC8vICAgICBzcGFuVGVtcC5hcHBlbmQoc3BhblRlbXBEYXRhKTtcbiAgICAgICAgICAgIC8vICAgICBsaUVMLmFwcGVuZChzcGFuVGVtcCk7XG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJfX2ZvcmVjYXN0JykuYXBwZW5kKGxpRUwpO1xuICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKVxuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxufVxuXG5nZXRXZWF0aGVyKClcblxuLy8gZGVsZXRlIHdlYXRoZXIgZm9yZWNhc3RcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2R1bGVfX3dlYXRoZXIgYnV0dG9uLmJ0bi0tY2xvc2UnKS5mb3JFYWNoKGVsID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGRpdkVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgZGl2RWwucmVtb3ZlKCk7XG4gICAgfSk7XG59KTtcblxuLy8gc2hvdyBmb3JtIGZvciBuZXcgd2VhdGhlciBmb3JlY2FzdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jaXR5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybScpLmhpZGRlbiA9IGZhbHNlO1xufSk7XG5cbi8vIGhpZGUgZm9ybVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybSBidXR0b24uYnRuLS1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKS5oaWRkZW4gPSB0cnVlO1xufSk7XG5cbi8vIGFkZCBuZXcgZm9yZWNhc3QgdGhyb3VnaCBBUElcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJyk7XG4gICAgY29uc3QgbmV3RGl2RWwgPSBkaXZFbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNzZWFyY2gnKS52YWx1ZTtcblxuICAgIGlmIChjaXR5TmFtZSkge1xuICAgICAgICBnZXRXZWF0aGVyKG5ld0RpdkVsLCBjaXR5TmFtZSlcblxuICAgICAgICAvLyBjbG9uZU5vZGUoKSBkb2VzIG5vdCBjb3B5IGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICBuZXdEaXZFbC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kdWxlX193ZWF0aGVyIGJ1dHRvbi5idG4tLWNsb3NlJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaXZFbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZGl2RWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpLmFwcGVuZChuZXdEaXZFbCk7XG4gICAgfVxuXG5cbn0pO1xuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI4MmU2ZmNmYWU2MDg2MzNlNTQ0XCIpIl0sIm5hbWVzIjpbImdldFdlYXRoZXIiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJjaXR5SXAiLCJyZXNwb25zZSIsImRhdGEiLCJ3ZWF0aGVyTW9kdWxlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsImZldGNoIiwiY29uY2F0Iiwic2VudCIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjbG9uZU5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5IiwiTWF0aCIsImZsb29yIiwid2luZF9rcGgiLCJhcHBlbmRDaGlsZCIsIkVycm9yIiwic3RhdHVzIiwidDAiLCJlcnJvciIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGl2RWwiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwiaGlkZGVuIiwibmV3RGl2RWwiLCJjaXR5TmFtZSIsInZhbHVlIiwiYXBwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==