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
          cityIp = "auto:ip";
          _context.next = 4;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=bc82bda4a982434d812130506230708&q=".concat(cityIp, "&days=5"), {
            method: 'GET'
          });
        case 4:
          response = _context.sent;
          if (!response.ok) {
            _context.next = 11;
            break;
          }
          data = response.json();
          console.log(cityIp);
          console.log(data);
          _context.next = 12;
          break;
        case 11:
          throw Error(response.status);
        case 12:
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function getWeather(_x) {
    return _ref.apply(this, arguments);
  };
}();
getWeather();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("90e1c3935dfb45beb874")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OTY0NDA3ZDFhZjZkMDdiM2FjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVU7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLG1GQUFBLGVBQUFDLHNFQUFBLENBQUcsU0FBQUUsUUFBT0MsTUFBTTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFMLHNFQUFBLFVBQUFPLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUd4Qk4sTUFBTSxZQUFZO1VBQUNLLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ0lDLEtBQUsscUZBQUFDLE1BQUEsQ0FBcUZULE1BQU0sY0FBVztZQUM5SFUsTUFBTSxFQUFFO1VBQ1osQ0FBQyxDQUFDO1FBQUE7VUFGSVQsUUFBUSxHQUFBSSxRQUFBLENBQUFNLElBQUE7VUFBQSxLQUlWVixRQUFRLENBQUNXLEVBQUU7WUFBQVAsUUFBQSxDQUFBRSxJQUFBO1lBQUE7VUFBQTtVQUNMTCxJQUFJLEdBQUdELFFBQVEsQ0FBQ1ksSUFBSSxDQUFDLENBQUM7VUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZixNQUFNLENBQUM7VUFDbkJjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixJQUFJLENBQUM7VUFBQUcsUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBLE1BRVhTLEtBQUssQ0FBQ2YsUUFBUSxDQUFDZ0IsTUFBTSxDQUFDO1FBQUE7VUFBQVosUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBYSxFQUFBLEdBQUFiLFFBQUE7VUFJaENTLE9BQU8sQ0FBQ0ssS0FBSyxDQUFBZCxRQUFBLENBQUFhLEVBQUksQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBYixRQUFBLENBQUFlLElBQUE7TUFBQTtJQUFBLEdBQUFyQixPQUFBO0VBQUEsQ0FHekI7RUFBQSxnQkFwQktMLFVBQVVBLENBQUEyQixFQUFBO0lBQUEsT0FBQTFCLElBQUEsQ0FBQTJCLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FvQmY7QUFFRDdCLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7OztVQ3RCWiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoY2l0eUlwKSA9PiB7XG5cbiAgICB0cnkge1xuICAgICAgICBjaXR5SXAgPSBgYXV0bzppcGA7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YmM4MmJkYTRhOTgyNDM0ZDgxMjEzMDUwNjIzMDcwOCZxPSR7Y2l0eUlwfSZkYXlzPTVgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgY29uc29sZS5sb2coY2l0eUlwKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgfVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cblxufVxuXG5nZXRXZWF0aGVyKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MGUxYzM5MzVkZmI0NWJlYjg3NFwiKSJdLCJuYW1lcyI6WyJnZXRXZWF0aGVyIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiY2l0eUlwIiwicmVzcG9uc2UiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwiY29uY2F0IiwibWV0aG9kIiwic2VudCIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsInN0YXR1cyIsInQwIiwiZXJyb3IiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=