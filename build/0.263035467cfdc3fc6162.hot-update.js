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
          console.log(weatherModule.querySelectorAll('.weather__forecast'));
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
/******/ 	__webpack_require__.h = () => ("f0a2818e3f1331345ee6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNjMwMzU0NjdjZmRjM2ZjNjE2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVU7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLG1GQUFBLGVBQUFDLHNFQUFBLENBQUcsU0FBQUUsUUFBT0MsTUFBTTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQSxFQUFBQyxhQUFBO0lBQUEsT0FBQU4sc0VBQUEsVUFBQVEsU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBRXhCRSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztVQUFDTixRQUFBLENBQUFFLElBQUE7VUFBQSxPQUVwQ0ssS0FBSyxxRkFBQUMsTUFBQSxDQUFxRmQsTUFBTSxJQUFJLFNBQVMsWUFBUyxDQUFDO1FBQUE7VUFBeElDLFFBQVEsR0FBQUssUUFBQSxDQUFBUyxJQUFBO1VBQUEsS0FDVmQsUUFBUSxDQUFDZSxFQUFFO1lBQUFWLFFBQUEsQ0FBQUUsSUFBQTtZQUFBO1VBQUE7VUFBQUYsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FDUVAsUUFBUSxDQUFDZ0IsSUFBSSxDQUFDLENBQUM7UUFBQTtVQUE1QmYsSUFBSSxHQUFBSSxRQUFBLENBQUFTLElBQUE7VUFDVkcsT0FBTyxDQUFDQyxHQUFHLENBQUNqQixJQUFJLENBQUM7VUFFWEMsYUFBYSxHQUFHTSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDVSxTQUFTLENBQUMsSUFBSSxDQUFDO1VBQ2hGakIsYUFBYSxDQUFDa0IsZUFBZSxDQUFDLFFBQVEsQ0FBQztVQUN2Q2xCLGFBQWEsQ0FBQ08sYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDWSxXQUFXLEdBQUdwQixJQUFJLENBQUNxQixRQUFRLENBQUNDLElBQUk7VUFDM0VyQixhQUFhLENBQUNPLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDWSxXQUFXLEdBQUdwQixJQUFJLENBQUN1QixPQUFPLENBQUNDLE1BQU07VUFDcEZ2QixhQUFhLENBQUNPLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDWSxXQUFXLE1BQUFSLE1BQUEsQ0FBTVosSUFBSSxDQUFDdUIsT0FBTyxDQUFDRSxXQUFXLFNBQU07VUFDL0Z4QixhQUFhLENBQUNPLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDWSxXQUFXLE1BQUFSLE1BQUEsQ0FBTVosSUFBSSxDQUFDdUIsT0FBTyxDQUFDRyxRQUFRLE1BQUc7VUFDekZ6QixhQUFhLENBQUNPLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDWSxXQUFXLE1BQUFSLE1BQUEsQ0FBTWUsSUFBSSxDQUFDQyxLQUFLLENBQUM1QixJQUFJLENBQUN1QixPQUFPLENBQUNNLFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQU07VUFDeEhiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaEIsYUFBYSxDQUFDNkIsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQztVQUNqRTdCLGFBQWEsQ0FBQzZCLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFDQyxFQUFFLEVBQUVDLEtBQUssRUFBSztZQUN4RUQsRUFBRSxDQUFDeEIsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDWSxXQUFXLEdBQUdwQixJQUFJLENBQUNrQyxRQUFRLENBQUNDLFdBQVcsQ0FBQ0YsS0FBSyxDQUFDLENBQUNHLElBQUk7WUFDNUVwQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2dCLEtBQUssQ0FBQztVQUN0QixDQUFDLENBQUM7VUFFRmhDLGFBQWEsQ0FBQzZCLGdCQUFnQixDQUFDLG9DQUFvQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7WUFDL0VBLEVBQUUsQ0FBQ0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztjQUNwQ0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztjQUN0QixJQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxhQUFhLENBQUNBLGFBQWE7Y0FDdERGLEtBQUssQ0FBQ0csTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1VBRUZwQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ29DLFdBQVcsQ0FBQzNDLGFBQWEsQ0FBQztVQUN6RE0sUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07VUFBQ04sUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBLE1BRXBEdUMsS0FBSyxDQUFDOUMsUUFBUSxDQUFDK0MsTUFBTSxDQUFDO1FBQUE7VUFBQTFDLFFBQUEsQ0FBQUUsSUFBQTtVQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQTJDLEVBQUEsR0FBQTNDLFFBQUE7VUFHaENZLE9BQU8sQ0FBQ2dDLEtBQUssQ0FBQTVDLFFBQUEsQ0FBQTJDLEVBQUksQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBM0MsUUFBQSxDQUFBNkMsSUFBQTtNQUFBO0lBQUEsR0FBQXBELE9BQUE7RUFBQSxDQUV6QjtFQUFBLGdCQXRDS0wsVUFBVUEsQ0FBQTBELEVBQUE7SUFBQSxPQUFBekQsSUFBQSxDQUFBMEQsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQXNDZjtBQUVENUQsVUFBVSxDQUFDLENBQUM7O0FBRVo7QUFDQWUsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM2QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0VBQ3JFQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBRXRCaEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM2QyxNQUFNLEdBQUcsS0FBSztBQUMxRCxDQUFDLENBQUM7O0FBRUY7QUFDQTlDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlDQUFpQyxDQUFDLENBQUM2QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0VBQzNGQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBRXRCaEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM2QyxNQUFNLEdBQUcsSUFBSTtBQUN6RCxDQUFDLENBQUM7O0FBRUY7QUFDQTlDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM2QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0VBQ2pGQSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ3RCLElBQU1lLFFBQVEsR0FBRy9DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDK0MsS0FBSztFQUU3RCxJQUFJRCxRQUFRLEVBQUU7SUFDVjlELFVBQVUsQ0FBQzhELFFBQVEsQ0FBQztFQUN4QjtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7VUNoRUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGNpdHlJcCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1iYzgyYmRhNGE5ODI0MzRkODEyMTMwNTA2MjMwNzA4JnE9JHtjaXR5SXAgPz8gJ2F1dG86aXAnfSZkYXlzPTVgKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICAgICAgY29uc3Qgd2VhdGhlck1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJykudGV4dENvbnRlbnQgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wX2M7XG4gICAgICAgICAgICB3ZWF0aGVyTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYDtcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoZGF0YS5jdXJyZW50LndpbmRfa3BoICogMTAwMCAvIDM2MDApfSBtL3NgO1xuICAgICAgICAgICAgY29uc29sZS5sb2cod2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlcl9fZm9yZWNhc3QnKSlcbiAgICAgICAgICAgIHdlYXRoZXJNb2R1bGUucXVlcnlTZWxlY3RvckFsbCgnLndlYXRoZXJfX2ZvcmVjYXN0JykuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgZWwucXVlcnlTZWxlY3RvcignLmRheScpLnRleHRDb250ZW50ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpbmRleF0uZGF0ZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgd2VhdGhlck1vZHVsZS5xdWVyeVNlbGVjdG9yQWxsKCcubW9kdWxlX193ZWF0aGVyIGJ1dHRvbi5idG4tLWNsb3NlJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2RWwgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBkaXZFbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykuYXBwZW5kQ2hpbGQod2VhdGhlck1vZHVsZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxufVxuXG5nZXRXZWF0aGVyKClcblxuLy8gc2hvdyBmb3JtXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNpdHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtJykuaGlkZGVuID0gZmFsc2U7XG59KTtcblxuLy8gaGlkZSBmb3JtXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtIGJ1dHRvbi5idG4tLWNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybScpLmhpZGRlbiA9IHRydWU7XG59KTtcblxuLy8gYWRkIG5ldyBmb3JlY2FzdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNzZWFyY2gnKS52YWx1ZTtcblxuICAgIGlmIChjaXR5TmFtZSkge1xuICAgICAgICBnZXRXZWF0aGVyKGNpdHlOYW1lKVxuICAgIH1cbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjBhMjgxOGUzZjEzMzEzNDVlZTZcIikiXSwibmFtZXMiOlsiZ2V0V2VhdGhlciIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNpdHlJcCIsInJlc3BvbnNlIiwiZGF0YSIsIndlYXRoZXJNb2R1bGUiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiZmV0Y2giLCJjb25jYXQiLCJzZW50Iiwib2siLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJNYXRoIiwiZmxvb3IiLCJ3aW5kX2twaCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJpbmRleCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXZFbCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJhcHBlbmRDaGlsZCIsIkVycm9yIiwic3RhdHVzIiwidDAiLCJlcnJvciIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGlkZGVuIiwiY2l0eU5hbWUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=