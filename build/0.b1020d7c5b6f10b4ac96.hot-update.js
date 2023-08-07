"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var getWeather = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(documentID, cityIp) {
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
            _context.next = 16;
            break;
          }
          _context.next = 7;
          return response.json();
        case 7:
          data = _context.sent;
          console.log(data);
          documentID.querySelector('.city__name').innerHTML = data.location.name;
          documentID.querySelector('.temperature__value').innerHTML = data.current.temp_c;
          documentID.querySelector('.pressure__value').innerHTML = "".concat(data.current.pressure_mb, " hPa");
          documentID.querySelector('.humidity__value').innerHTML = "".concat(data.current.humidity, "%");
          documentID.querySelector('.wind-speed__value').innerHTML = "".concat(Math.floor(data.current.wind_kph * 1000 / 3600), " m/s");

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
          //     documentID.querySelector('.weather__forecast').append(liEL);
          // })
          _context.next = 17;
          break;
        case 16:
          throw Error(response.status);
        case 17:
          _context.next = 22;
          break;
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 19]]);
  }));
  return function getWeather(_x, _x2) {
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
getWeather(document, 'auto:ip');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("440e8303e24225d54f39")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDOztJQUU5QjtJQUNBRixRQUFRLENBQUNYLGdCQUFnQixDQUFDLG9DQUFvQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7TUFDMUVBLEVBQUUsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLEtBQUssRUFBSztRQUNwQ0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztRQUV0QixJQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csTUFBTSxDQUFDQyxhQUFhLENBQUNBLGFBQWE7UUFDdERGLEtBQUssQ0FBQ0csTUFBTSxDQUFDLENBQUM7TUFDbEIsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0lBRUZWLFFBQVEsQ0FBQ3BCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ29DLE1BQU0sQ0FBQ0osUUFBUSxDQUFDO0VBQ25EO0FBR0osQ0FBQyxDQUFDO0FBRUZ2RCxVQUFVLENBQUMyQyxRQUFRLEVBQUUsU0FBUyxDQUFDOzs7Ozs7OztVQy9GL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKGRvY3VtZW50SUQsIGNpdHlJcCkgPT4ge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1iYzgyYmRhNGE5ODI0MzRkODEyMTMwNTA2MjMwNzA4JnE9JHtjaXR5SXB9JmRheXM9NWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgICAgICAgICBkb2N1bWVudElELnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJykuaW5uZXJIVE1MID0gZGF0YS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICAgICAgZG9jdW1lbnRJRC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJykuaW5uZXJIVE1MID0gZGF0YS5jdXJyZW50LnRlbXBfYztcbiAgICAgICAgICAgIGRvY3VtZW50SUQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpLmlubmVySFRNTCA9IGAke2RhdGEuY3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYDtcbiAgICAgICAgICAgIGRvY3VtZW50SUQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpLmlubmVySFRNTCA9IGAke2RhdGEuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgICAgICAgICAgIGRvY3VtZW50SUQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJykuaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcihkYXRhLmN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMCl9IG0vc2A7XG5cbiAgICAgICAgICAgIC8vIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgbGlFTCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAvLyAgICAgY29uc3Qgc3BhbkRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIC8vICAgICBzcGFuRGF5LmNsYXNzTmFtZSA9ICdkYXknO1xuICAgICAgICAgICAgLy8gICAgIHNwYW5EYXkuaW5uZXJIVE1MID0gZWwuZGF0ZTtcbiAgICAgICAgICAgIC8vICAgICBsaUVMLmFwcGVuZChzcGFuRGF5KTtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzcGFuVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIC8vICAgICBzcGFuVGVtcC5jbGFzc05hbWUgPSAndGVtcGVyYXR1cmUnO1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHNwYW5UZW1wRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIC8vICAgICBzcGFuVGVtcERhdGEuY2xhc3NOYW1lID0gJ3RlbXBlcmF0dXJlX192YWx1ZSc7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZWwpXG4gICAgICAgICAgICAvLyAgICAgc3BhblRlbXBEYXRhLmlubmVySFRNTCA9IGAke2VsLmRheS5hdmd0ZW1wX2N9ICZkZWc7Q2A7XG4gICAgICAgICAgICAvLyAgICAgc3BhblRlbXAuYXBwZW5kKHNwYW5UZW1wRGF0YSk7XG4gICAgICAgICAgICAvLyAgICAgbGlFTC5hcHBlbmQoc3BhblRlbXApO1xuICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50SUQucXVlcnlTZWxlY3RvcignLndlYXRoZXJfX2ZvcmVjYXN0JykuYXBwZW5kKGxpRUwpO1xuICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzKVxuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuXG59XG5cbi8vIGRlbGV0ZSB3ZWF0aGVyIGZvcmVjYXN0XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kdWxlX193ZWF0aGVyIGJ1dHRvbi5idG4tLWNsb3NlJykuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBkaXZFbCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGRpdkVsLnJlbW92ZSgpO1xuICAgIH0pO1xufSk7XG5cbi8vIHNob3cgZm9ybSBmb3IgbmV3IHdlYXRoZXIgZm9yZWNhc3RcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtY2l0eScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKS5oaWRkZW4gPSBmYWxzZTtcbn0pO1xuXG4vLyBoaWRlIGZvcm1cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0gYnV0dG9uLmJ0bi0tY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtJykuaGlkZGVuID0gdHJ1ZTtcbn0pO1xuXG4vLyBhZGQgbmV3IGZvcmVjYXN0IHRocm91Z2ggQVBJXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGRpdkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fd2VhdGhlcicpO1xuICAgIGNvbnN0IG5ld0RpdkVsID0gZGl2RWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQjc2VhcmNoJykudmFsdWU7XG5cbiAgICBpZiAoY2l0eU5hbWUpIHtcbiAgICAgICAgZ2V0V2VhdGhlcihuZXdEaXZFbCwgY2l0eU5hbWUpXG5cbiAgICAgICAgLy8gY2xvbmVOb2RlKCkgZG9lcyBub3QgY29weSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgbmV3RGl2RWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZHVsZV9fd2VhdGhlciBidXR0b24uYnRuLS1jbG9zZScpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2RWwgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIGRpdkVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKS5hcHBlbmQobmV3RGl2RWwpO1xuICAgIH1cblxuXG59KTtcblxuZ2V0V2VhdGhlcihkb2N1bWVudCwgJ2F1dG86aXAnKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDQwZTgzMDNlMjQyMjVkNTRmMzlcIikiXSwibmFtZXMiOlsiZ2V0V2VhdGhlciIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImRvY3VtZW50SUQiLCJjaXR5SXAiLCJyZXNwb25zZSIsImRhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJjb25jYXQiLCJtZXRob2QiLCJzZW50Iiwib2siLCJqc29uIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIk1hdGgiLCJmbG9vciIsIndpbmRfa3BoIiwiRXJyb3IiLCJzdGF0dXMiLCJ0MCIsImVycm9yIiwic3RvcCIsIl94IiwiX3gyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdkVsIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsImhpZGRlbiIsIm5ld0RpdkVsIiwiY2xvbmVOb2RlIiwiY2l0eU5hbWUiLCJ2YWx1ZSIsImFwcGVuZCJdLCJzb3VyY2VSb290IjoiIn0=