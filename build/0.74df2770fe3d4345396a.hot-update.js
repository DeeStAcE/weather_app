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
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=bc82bda4a982434d812130506230708&q=auto:ip&days=5", {
            method: 'GET'
          });
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
getWeather();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8c3e6927316508babe5c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NGRmMjc3MGZlM2Q0MzQ1Mzk2YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVU7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLG1GQUFBLGVBQUFDLHNFQUFBLENBQUcsU0FBQUUsUUFBQTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFKLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ1FDLEtBQUssb0dBQW9HO1lBQzVIQyxNQUFNLEVBQUU7VUFDWixDQUFDLENBQUM7UUFBQTtVQUZJUixRQUFRLEdBQUFJLFFBQUEsQ0FBQUssSUFBQTtVQUFBLEtBSVZULFFBQVEsQ0FBQ1UsRUFBRTtZQUFBTixRQUFBLENBQUFFLElBQUE7WUFBQTtVQUFBO1VBQ0xMLElBQUksR0FBR0QsUUFBUSxDQUFDVyxJQUFJLENBQUMsQ0FBQztVQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNaLElBQUksQ0FBQztVQUFBRyxRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUEsTUFFWFEsS0FBSyxDQUFDZCxRQUFRLENBQUNlLE1BQU0sQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBWCxRQUFBLENBQUFZLElBQUE7TUFBQTtJQUFBLEdBQUFqQixPQUFBO0VBQUEsQ0FFbkM7RUFBQSxnQkFYS0wsVUFBVUEsQ0FBQTtJQUFBLE9BQUFDLElBQUEsQ0FBQXNCLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FXZjtBQUVEeEIsVUFBVSxDQUFDLENBQUM7Ozs7Ozs7O1VDYloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YmM4MmJkYTRhOTgyNDM0ZDgxMjEzMDUwNjIzMDcwOCZxPWF1dG86aXAmZGF5cz01YCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cylcbiAgICB9XG59XG5cbmdldFdlYXRoZXIoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhjM2U2OTI3MzE2NTA4YmFiZTVjXCIpIl0sIm5hbWVzIjpbImdldFdlYXRoZXIiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXNwb25zZSIsImRhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJtZXRob2QiLCJzZW50Iiwib2siLCJqc29uIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwic3RhdHVzIiwic3RvcCIsImFwcGx5IiwiYXJndW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==