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
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=bc82bda4a982434d812130506230708&q=auto:ip&days=5");
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
/******/ 	__webpack_require__.h = () => ("e13c807373bbe2449c2d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xOGNhYzJlMmYyOGMzNGFhY2YzZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVU7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLG1GQUFBLGVBQUFDLHNFQUFBLENBQUcsU0FBQUUsUUFBQTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFKLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ1FDLEtBQUssa0dBQWtHLENBQUM7UUFBQTtVQUF6SFAsUUFBUSxHQUFBSSxRQUFBLENBQUFJLElBQUE7VUFBQSxLQUVWUixRQUFRLENBQUNTLEVBQUU7WUFBQUwsUUFBQSxDQUFBRSxJQUFBO1lBQUE7VUFBQTtVQUNMTCxJQUFJLEdBQUdELFFBQVEsQ0FBQ1UsSUFBSSxDQUFDLENBQUM7VUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxJQUFJLENBQUM7VUFBQUcsUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBLE1BRVhPLEtBQUssQ0FBQ2IsUUFBUSxDQUFDYyxNQUFNLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQVYsUUFBQSxDQUFBVyxJQUFBO01BQUE7SUFBQSxHQUFBaEIsT0FBQTtFQUFBLENBRW5DO0VBQUEsZ0JBVEtMLFVBQVVBLENBQUE7SUFBQSxPQUFBQyxJQUFBLENBQUFxQixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBU2Y7QUFFRHZCLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7OztVQ1haIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWJjODJiZGE0YTk4MjQzNGQ4MTIxMzA1MDYyMzA3MDgmcT1hdXRvOmlwJmRheXM9NWApO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpXG4gICAgfVxufVxuXG5nZXRXZWF0aGVyKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMTNjODA3MzczYmJlMjQ0OWMyZFwiKSJdLCJuYW1lcyI6WyJnZXRXZWF0aGVyIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicmVzcG9uc2UiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwic2VudCIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsInN0YXR1cyIsInN0b3AiLCJhcHBseSIsImFyZ3VtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=