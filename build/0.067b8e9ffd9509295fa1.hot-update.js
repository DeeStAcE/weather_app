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
            _context.next = 7;
            break;
          }
          data = response.json(); // console.log(data)
          _context.next = 8;
          break;
        case 7:
          throw Error(response.status);
        case 8:
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
/******/ 	__webpack_require__.h = () => ("74df2770fe3d4345396a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNjdiOGU5ZmZkOTUwOTI5NWZhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVU7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLG1GQUFBLGVBQUFDLHNFQUFBLENBQUcsU0FBQUUsUUFBQTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFKLHNFQUFBLFVBQUFNLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ1FDLEtBQUssb0dBQW9HO1lBQzVIQyxNQUFNLEVBQUU7VUFDWixDQUFDLENBQUM7UUFBQTtVQUZJUixRQUFRLEdBQUFJLFFBQUEsQ0FBQUssSUFBQTtVQUFBLEtBSVZULFFBQVEsQ0FBQ1UsRUFBRTtZQUFBTixRQUFBLENBQUFFLElBQUE7WUFBQTtVQUFBO1VBQ0xMLElBQUksR0FBR0QsUUFBUSxDQUFDVyxJQUFJLENBQUMsQ0FBQyxFQUM1QjtVQUFBUCxRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUEsTUFFTU0sS0FBSyxDQUFDWixRQUFRLENBQUNhLE1BQU0sQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBVCxRQUFBLENBQUFVLElBQUE7TUFBQTtJQUFBLEdBQUFmLE9BQUE7RUFBQSxDQUVuQztFQUFBLGdCQVhLTCxVQUFVQSxDQUFBO0lBQUEsT0FBQUMsSUFBQSxDQUFBb0IsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQVdmO0FBRUR0QixVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7VUNiWiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1iYzgyYmRhNGE5ODI0MzRkODEyMTMwNTA2MjMwNzA4JnE9YXV0bzppcCZkYXlzPTVgLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKVxuICAgIH1cbn1cblxuZ2V0V2VhdGhlcigpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzRkZjI3NzBmZTNkNDM0NTM5NmFcIikiXSwibmFtZXMiOlsiZ2V0V2VhdGhlciIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInJlc3BvbnNlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsIm1ldGhvZCIsInNlbnQiLCJvayIsImpzb24iLCJFcnJvciIsInN0YXR1cyIsInN0b3AiLCJhcHBseSIsImFyZ3VtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=