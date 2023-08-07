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
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=bc82bda4a982434d812130506230708&q=".concat(cityIp, "&days=5"));
        case 3:
          response = _context.sent;
          if (!response.ok) {
            _context.next = 9;
            break;
          }
          data = response.json();
          console.log(data.location);

          // document.querySelector('.city__name').innerHTML = data.location.name
          _context.next = 10;
          break;
        case 9:
          throw Error(response.status);
        case 10:
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
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
/******/ 	__webpack_require__.h = () => ("7265d38eb6f0bca287c5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wYThkZDM2YThiNTgxYWUyODg5NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVU7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLG1GQUFBLGVBQUFDLHNFQUFBLENBQUcsU0FBQUUsUUFBT0MsTUFBTTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFMLHNFQUFBLFVBQUFPLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUdEQyxLQUFLLHFGQUFBQyxNQUFBLENBQXFGVCxNQUFNLFlBQVMsQ0FBQztRQUFBO1VBQTNIQyxRQUFRLEdBQUFJLFFBQUEsQ0FBQUssSUFBQTtVQUFBLEtBRVZULFFBQVEsQ0FBQ1UsRUFBRTtZQUFBTixRQUFBLENBQUFFLElBQUE7WUFBQTtVQUFBO1VBQ0xMLElBQUksR0FBR0QsUUFBUSxDQUFDVyxJQUFJLENBQUMsQ0FBQztVQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNaLElBQUksQ0FBQ2EsUUFBUSxDQUFDOztVQUUxQjtVQUFBVixRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUEsTUFFTVMsS0FBSyxDQUFDZixRQUFRLENBQUNnQixNQUFNLENBQUM7UUFBQTtVQUFBWixRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFhLEVBQUEsR0FBQWIsUUFBQTtVQUloQ1EsT0FBTyxDQUFDTSxLQUFLLENBQUFkLFFBQUEsQ0FBQWEsRUFBSSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFiLFFBQUEsQ0FBQWUsSUFBQTtNQUFBO0lBQUEsR0FBQXJCLE9BQUE7RUFBQSxDQUd6QjtFQUFBLGdCQWxCS0wsVUFBVUEsQ0FBQTJCLEVBQUE7SUFBQSxPQUFBMUIsSUFBQSxDQUFBMkIsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQWtCZjtBQUVEN0IsVUFBVSxDQUFDLFNBQVMsQ0FBQzs7Ozs7Ozs7VUNwQnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5SXApID0+IHtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YmM4MmJkYTRhOTgyNDM0ZDgxMjEzMDUwNjIzMDcwOCZxPSR7Y2l0eUlwfSZkYXlzPTVgKTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9jYXRpb24pXG5cbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJykuaW5uZXJIVE1MID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpXG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG5cbn1cblxuZ2V0V2VhdGhlcignYXV0bzppcCcpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MjY1ZDM4ZWI2ZjBiY2EyODdjNVwiKSJdLCJuYW1lcyI6WyJnZXRXZWF0aGVyIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiY2l0eUlwIiwicmVzcG9uc2UiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwiY29uY2F0Iiwic2VudCIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsIkVycm9yIiwic3RhdHVzIiwidDAiLCJlcnJvciIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==