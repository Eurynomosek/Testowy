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

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n\n    Swal.fire({\n      title: 'Czy na pewno chcesz usunąć rekord?',\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonColor: '#3085d6',\n      cancelButtonColor: '#d33',\n      confirmButtonText: 'Tak',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.isConfirmed) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire('Oops...', data.responseJSON.message, data.responseJSON.status);\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbkNvbG9yIiwiY2FuY2VsQnV0dG9uQ29sb3IiLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGVsZXRlVXJsIiwiZGF0YSIsImRvbmUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImZhaWwiLCJyZXNwb25zZUpTT04iLCJtZXNzYWdlIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDLFlBQVc7QUFDVEEsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhQyxLQUFiLENBQW1CLFlBQVc7QUFBQTs7QUFDMUJDLElBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLE1BQUFBLEtBQUssRUFBRSxvQ0FERDtBQUVOQyxNQUFBQSxJQUFJLEVBQUUsU0FGQTtBQUdOQyxNQUFBQSxnQkFBZ0IsRUFBRSxJQUhaO0FBSU5DLE1BQUFBLGtCQUFrQixFQUFFLFNBSmQ7QUFLTkMsTUFBQUEsaUJBQWlCLEVBQUUsTUFMYjtBQU1OQyxNQUFBQSxpQkFBaUIsRUFBRSxLQU5iO0FBT05DLE1BQUFBLGdCQUFnQixFQUFFO0FBUFosS0FBVixFQVFHQyxJQVJILENBUVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCLFVBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtBQUNwQmIsUUFBQUEsQ0FBQyxDQUFDYyxJQUFGLENBQU87QUFDSEMsVUFBQUEsTUFBTSxFQUFFLFFBREw7QUFFSEMsVUFBQUEsR0FBRyxFQUFFQyxTQUFTLEdBQUdqQixDQUFDLENBQUMsS0FBRCxDQUFELENBQVFrQixJQUFSLENBQWEsSUFBYjtBQUZkLFNBQVAsRUFJQ0MsSUFKRCxDQUlNLFVBQVNELElBQVQsRUFBZTtBQUNqQkUsVUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNILFNBTkQsRUFPQ0MsSUFQRCxDQU9NLFVBQVNMLElBQVQsRUFBZTtBQUNqQmhCLFVBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVLFNBQVYsRUFBcUJlLElBQUksQ0FBQ00sWUFBTCxDQUFrQkMsT0FBdkMsRUFBZ0RQLElBQUksQ0FBQ00sWUFBTCxDQUFrQkUsTUFBbEU7QUFDSCxTQVREO0FBVUg7QUFDSixLQXJCRDtBQXNCSCxHQXZCRDtBQXdCSCxDQXpCQSxDQUFEIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcbiAgICAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogJ0N6eSBuYSBwZXdubyBjaGNlc3ogdXN1bsSFxIcgcmVrb3JkPycsXG4gICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiAnIzMwODVkNicsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogJyNkMzMnLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdUYWsnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05pZSdcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGRlbGV0ZVVybCArICQodGhpcykuZGF0YShcImlkXCIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKCdPb3BzLi4uJywgZGF0YS5yZXNwb25zZUpTT04ubWVzc2FnZSwgZGF0YS5yZXNwb25zZUpTT04uc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcbn0pO1xuIl0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy9kZWxldGUuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

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