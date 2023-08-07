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
            _context.next = 17;
            break;
          }
          _context.next = 7;
          return response.json();
        case 7:
          data = _context.sent;
          console.log(data);
          document.querySelector('.city__name').innerHTML = data.location.name;
          document.querySelector('.temperature__value').innerHTML = data.current.temp_c;
          document.querySelector('.pressure__value').innerHTML = "".concat(data.current.pressure_mb, " hPa");
          document.querySelector('.humidity__value').innerHTML = "".concat(data.current.humidity, "%");
          document.querySelector('.wind-speed__value').innerHTML = "".concat(Math.floor(data.current.wind_kph * 1000 / 3600), " m/s");
          data.forecast.forecastday.forEach(function (el) {
            var liEL = document.createElement('li');
            var spanDay = document.createElement('span');
            spanDay.className = 'day';
            spanDay.innerHTML = 'day';
            liEL.append(spanDay);
            var spanTemp = document.createElement('span');
            spanTemp.className = 'temperature';
            var spanTempData = document.createElement('span');
            spanTempData.className = 'temperature__value';
            spanTempData.innerHTML = "".concat(el.day.avgtemp_c, " &deg;C");
            spanTemp.append(spanTempData);
            liEL.append(spanTemp);
            document.querySelector('.weather__forecast').append(liEL);
          });
          _context.next = 18;
          break;
        case 17:
          throw Error(response.status);
        case 18:
          _context.next = 23;
          break;
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 20]]);
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

  // cloneNode() does not copy event listeners
  newDivEl.querySelectorAll('.module__weather button.btn--close').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      var divEl = event.target.parentElement.parentElement;
      divEl.remove();
    });
  });
  document.querySelector('#app').append(newDivEl);
});
getWeather('auto:ip');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7b86a6ea8687ac6cb8a5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jIChjaXR5SXApID0+IHtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YmM4MmJkYTRhOTgyNDM0ZDgxMjEzMDUwNjIzMDcwOCZxPSR7Y2l0eUlwfSZkYXlzPTVgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKS5pbm5lckhUTUwgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJykuaW5uZXJIVE1MID0gZGF0YS5jdXJyZW50LnRlbXBfYztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKS5pbm5lckhUTUwgPSBgJHtkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWA7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJykuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJykuaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcihkYXRhLmN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMCl9IG0vc2A7XG5cbiAgICAgICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhbkRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBzcGFuRGF5LmNsYXNzTmFtZSA9ICdkYXknO1xuICAgICAgICAgICAgICAgIHNwYW5EYXkuaW5uZXJIVE1MID0gJ2RheSc7XG4gICAgICAgICAgICAgICAgbGlFTC5hcHBlbmQoc3BhbkRheSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhblRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc3BhblRlbXAuY2xhc3NOYW1lID0gJ3RlbXBlcmF0dXJlJztcbiAgICAgICAgICAgICAgICBjb25zdCBzcGFuVGVtcERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc3BhblRlbXBEYXRhLmNsYXNzTmFtZSA9ICd0ZW1wZXJhdHVyZV9fdmFsdWUnO1xuICAgICAgICAgICAgICAgIHNwYW5UZW1wRGF0YS5pbm5lckhUTUwgPSBgJHtlbC5kYXkuYXZndGVtcF9jfSAmZGVnO0NgO1xuICAgICAgICAgICAgICAgIHNwYW5UZW1wLmFwcGVuZChzcGFuVGVtcERhdGEpO1xuICAgICAgICAgICAgICAgIGxpRUwuYXBwZW5kKHNwYW5UZW1wKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fZm9yZWNhc3QnKS5hcHBlbmQobGlFTCk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXMpXG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG5cbn1cblxuLy8gZGVsZXRlIHdlYXRoZXIgZm9yZWNhc3RcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2R1bGVfX3dlYXRoZXIgYnV0dG9uLmJ0bi0tY2xvc2UnKS5mb3JFYWNoKGVsID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGRpdkVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgZGl2RWwucmVtb3ZlKCk7XG4gICAgfSk7XG59KTtcblxuLy8gc2hvdyBmb3JtIGZvciBuZXcgd2VhdGhlciBmb3JlY2FzdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jaXR5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybScpLmhpZGRlbiA9IGZhbHNlO1xufSk7XG5cbi8vIGhpZGUgZm9ybVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybSBidXR0b24uYnRuLS1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKS5oaWRkZW4gPSB0cnVlO1xufSk7XG5cbi8vIGFkZCBuZXcgZm9yZWNhc3QgdGhyb3VnaCBBUElcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZGl2RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJyk7XG4gICAgY29uc3QgbmV3RGl2RWwgPSBkaXZFbC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAvLyBjbG9uZU5vZGUoKSBkb2VzIG5vdCBjb3B5IGV2ZW50IGxpc3RlbmVyc1xuICAgIG5ld0RpdkVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2R1bGVfX3dlYXRoZXIgYnV0dG9uLmJ0bi0tY2xvc2UnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpdkVsID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGRpdkVsLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5hcHBlbmQobmV3RGl2RWwpO1xufSk7XG5cbmdldFdlYXRoZXIoJ2F1dG86aXAnKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2I4NmE2ZWE4Njg3YWM2Y2I4YTVcIikiXSwibmFtZXMiOlsiZ2V0V2VhdGhlciIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNpdHlJcCIsInJlc3BvbnNlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsImNvbmNhdCIsIm1ldGhvZCIsInNlbnQiLCJvayIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJNYXRoIiwiZmxvb3IiLCJ3aW5kX2twaCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJmb3JFYWNoIiwiZWwiLCJsaUVMIiwiY3JlYXRlRWxlbWVudCIsInNwYW5EYXkiLCJjbGFzc05hbWUiLCJhcHBlbmQiLCJzcGFuVGVtcCIsInNwYW5UZW1wRGF0YSIsImRheSIsImF2Z3RlbXBfYyIsIkVycm9yIiwic3RhdHVzIiwidDAiLCJlcnJvciIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGl2RWwiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwiaGlkZGVuIiwibmV3RGl2RWwiLCJjbG9uZU5vZGUiXSwic291cmNlUm9vdCI6IiJ9