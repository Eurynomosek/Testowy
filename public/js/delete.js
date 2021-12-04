/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: confirmDelete,\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire('Oops...', data.responseJSON.message, data.responseJSON.status);\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImNvbmZpcm1EZWxldGUiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25Db2xvciIsImNhbmNlbEJ1dHRvbkNvbG9yIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRlbGV0ZVVybCIsImRhdGEiLCJkb25lIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmYWlsIiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsInN0YXR1cyJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQyxZQUFZO0FBQ1ZBLEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUMsS0FBYixDQUFtQixZQUFZO0FBQUE7O0FBQzNCQyxJQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxNQUFBQSxLQUFLLEVBQUVDLGFBREQ7QUFFTkMsTUFBQUEsSUFBSSxFQUFFLFNBRkE7QUFHTkMsTUFBQUEsZ0JBQWdCLEVBQUUsSUFIWjtBQUlOQyxNQUFBQSxrQkFBa0IsRUFBRSxTQUpkO0FBS05DLE1BQUFBLGlCQUFpQixFQUFFLE1BTGI7QUFNTkMsTUFBQUEsaUJBQWlCLEVBQUUsS0FOYjtBQU9OQyxNQUFBQSxnQkFBZ0IsRUFBRTtBQVBaLEtBQVYsRUFRR0MsSUFSSCxDQVFRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQixVQUFJQSxNQUFNLENBQUNDLFdBQVgsRUFBd0I7QUFDcEJkLFFBQUFBLENBQUMsQ0FBQ2UsSUFBRixDQUFPO0FBQ0hDLFVBQUFBLE1BQU0sRUFBRSxRQURMO0FBRUhDLFVBQUFBLEdBQUcsRUFBRUMsU0FBUyxHQUFHbEIsQ0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFRbUIsSUFBUixDQUFhLElBQWI7QUFGZCxTQUFQLEVBSUNDLElBSkQsQ0FJTSxVQUFVRCxJQUFWLEVBQWdCO0FBQ2xCRSxVQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0gsU0FORCxFQU9DQyxJQVBELENBT00sVUFBVUwsSUFBVixFQUFnQjtBQUNsQmpCLFVBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVLFNBQVYsRUFBcUJnQixJQUFJLENBQUNNLFlBQUwsQ0FBa0JDLE9BQXZDLEVBQWdEUCxJQUFJLENBQUNNLFlBQUwsQ0FBa0JFLE1BQWxFO0FBQ0gsU0FURDtBQVVIO0FBQ0osS0FyQkQ7QUFzQkgsR0F2QkQ7QUF3QkgsQ0F6QkEsQ0FBRCIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5kZWxldGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogY29uZmlybURlbGV0ZSxcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6ICcjMzA4NWQ2JyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiAnI2QzMycsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1RhaycsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTmllJ1xuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogZGVsZXRlVXJsICsgJCh0aGlzKS5kYXRhKFwiaWRcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSgnT29wcy4uLicsIGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2UsIGRhdGEucmVzcG9uc2VKU09OLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG59KTtcbiJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;