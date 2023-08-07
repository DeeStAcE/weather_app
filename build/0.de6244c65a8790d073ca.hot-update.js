"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var getWeather = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=bc82bda4a982434d812130506230708&q=".concat(cityIp, "&days=5"));
        case 2:
          response = _context.sent;
          if (!response.ok) {
            _context.next = 8;
            break;
          }
          data = response.json();
          console.log(data);
          _context.next = 9;
          break;
        case 8:
          throw Error(response.status);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getWeather() {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18cac2e2f28c34aacf3f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZTYyNDRjNjVhODc5MGQwNzNjYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVU7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLG1GQUFBLGVBQUFDLHNFQUFBLENBQUcsU0FBQUUsUUFBQTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFKLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ1FDLEtBQUsscUZBQUFDLE1BQUEsQ0FBcUZDLE1BQU0sWUFBUyxDQUFDO1FBQUE7VUFBM0hULFFBQVEsR0FBQUksUUFBQSxDQUFBTSxJQUFBO1VBQUEsS0FFVlYsUUFBUSxDQUFDVyxFQUFFO1lBQUFQLFFBQUEsQ0FBQUUsSUFBQTtZQUFBO1VBQUE7VUFDTEwsSUFBSSxHQUFHRCxRQUFRLENBQUNZLElBQUksQ0FBQyxDQUFDO1VBQzVCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsSUFBSSxDQUFDO1VBQUFHLFFBQUEsQ0FBQUUsSUFBQTtVQUFBO1FBQUE7VUFBQSxNQUVYUyxLQUFLLENBQUNmLFFBQVEsQ0FBQ2dCLE1BQU0sQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBWixRQUFBLENBQUFhLElBQUE7TUFBQTtJQUFBLEdBQUFsQixPQUFBO0VBQUEsQ0FFbkM7RUFBQSxnQkFUS0wsVUFBVUEsQ0FBQTtJQUFBLE9BQUFDLElBQUEsQ0FBQXVCLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FTZjs7Ozs7Ozs7VUNURCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1iYzgyYmRhNGE5ODI0MzRkODEyMTMwNTA2MjMwNzA4JnE9JHtjaXR5SXB9JmRheXM9NWApO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpXG4gICAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMThjYWMyZTJmMjhjMzRhYWNmM2ZcIikiXSwibmFtZXMiOlsiZ2V0V2VhdGhlciIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsImNvbmNhdCIsImNpdHlJcCIsInNlbnQiLCJvayIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJzdGF0dXMiLCJzdG9wIiwiYXBwbHkiLCJhcmd1bWVudHMiXSwic291cmNlUm9vdCI6IiJ9