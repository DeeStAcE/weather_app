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

          data.forecast.forEach();
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
getWeather('auto:ip');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b663d73cac8d308d57d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNmZmNDVhOGJhN2U5ZTY3NTU5NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVU7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLG1GQUFBLGVBQUFDLHNFQUFBLENBQUcsU0FBQUUsUUFBT0MsTUFBTTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFMLHNFQUFBLFVBQUFPLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUdEQyxLQUFLLHFGQUFBQyxNQUFBLENBQXFGVCxNQUFNLGNBQVc7WUFDOUhVLE1BQU0sRUFBRTtVQUNaLENBQUMsQ0FBQztRQUFBO1VBRklULFFBQVEsR0FBQUksUUFBQSxDQUFBTSxJQUFBO1VBQUEsS0FJVlYsUUFBUSxDQUFDVyxFQUFFO1lBQUFQLFFBQUEsQ0FBQUUsSUFBQTtZQUFBO1VBQUE7VUFDTEwsSUFBSSxHQUFHRCxRQUFRLENBQUNZLElBQUksQ0FBQyxDQUFDO1VBQzVCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsSUFBSSxDQUFDOztVQUVqQjtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBQSxJQUFJLENBQUNjLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7VUFBQVosUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBLE1BRWpCVyxLQUFLLENBQUNqQixRQUFRLENBQUNrQixNQUFNLENBQUM7UUFBQTtVQUFBZCxRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFlLEVBQUEsR0FBQWYsUUFBQTtVQUloQ1MsT0FBTyxDQUFDTyxLQUFLLENBQUFoQixRQUFBLENBQUFlLEVBQUksQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBZixRQUFBLENBQUFpQixJQUFBO01BQUE7SUFBQSxHQUFBdkIsT0FBQTtFQUFBLENBR3pCO0VBQUEsZ0JBMUJLTCxVQUFVQSxDQUFBNkIsRUFBQTtJQUFBLE9BQUE1QixJQUFBLENBQUE2QixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBMEJmO0FBRUQvQixVQUFVLENBQUMsU0FBUyxDQUFDOzs7Ozs7OztVQzVCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGNpdHlJcCkgPT4ge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1iYzgyYmRhNGE5ODI0MzRkODEyMTMwNTA2MjMwNzA4JnE9JHtjaXR5SXB9JmRheXM9NWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpLmlubmVySFRNTCA9IGRhdGEubG9jYXRpb24ubmFtZTtcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKS5pbm5lckhUTUwgPSBkYXRhLmN1cnJlbnQudGVtcF9jO1xuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpLmlubmVySFRNTCA9IGAke2RhdGEuY3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYDtcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKS5pbm5lckhUTUwgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKS5pbm5lckhUTUwgPSBgJHtkYXRhLmN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMH0gbS9zYDtcblxuICAgICAgICAgICAgZGF0YS5mb3JlY2FzdC5mb3JFYWNoKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cblxufVxuXG5nZXRXZWF0aGVyKCdhdXRvOmlwJylcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBiNjYzZDczY2FjOGQzMDhkNTdkXCIpIl0sIm5hbWVzIjpbImdldFdlYXRoZXIiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJjaXR5SXAiLCJyZXNwb25zZSIsImRhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJjb25jYXQiLCJtZXRob2QiLCJzZW50Iiwib2siLCJqc29uIiwiY29uc29sZSIsImxvZyIsImZvcmVjYXN0IiwiZm9yRWFjaCIsIkVycm9yIiwic3RhdHVzIiwidDAiLCJlcnJvciIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==