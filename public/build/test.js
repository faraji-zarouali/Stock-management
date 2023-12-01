(self["webpackChunk"] = self["webpackChunk"] || []).push([["test"],{

/***/ "./assets/js/test.js":
/*!***************************!*\
  !*** ./assets/js/test.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$(document).ready(function () {
  var sidebar = $(".sidebar");
  var closeBtn = $("#btn");
  var searchBtn = $(".bx-search");
  closeBtn.on("click", function () {
    sidebar.toggleClass("open");
    menuBtnChange(); //calling the function(optional)
  });

  searchBtn.on("click", function () {
    // Sidebar open when you click on the search icon
    sidebar.toggleClass("open");
    menuBtnChange(); //calling the function(optional)
  });

  // Define your menuBtnChange function here (if needed)
  function menuBtnChange() {
    // Your logic for menu button change
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/test.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVk7RUFDMUIsSUFBSUMsT0FBTyxHQUFHSCxDQUFDLENBQUMsVUFBVSxDQUFDO0VBQy9CLElBQUlJLFFBQVEsR0FBR0osQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUN4QixJQUFJSyxTQUFTLEdBQUdMLENBQUMsQ0FBQyxZQUFZLENBQUM7RUFFL0JJLFFBQVEsQ0FBQ0UsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3pCSCxPQUFPLENBQUNJLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDM0JDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNuQixDQUFDLENBQUM7O0VBRUZILFNBQVMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQUU7SUFDNUJILE9BQU8sQ0FBQ0ksV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUMzQkMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25CLENBQUMsQ0FBQzs7RUFFRTtFQUNBLFNBQVNBLGFBQWFBLENBQUEsRUFBRztJQUN2QjtFQUFBO0FBR0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Rlc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNpZGViYXIgPSAkKFwiLnNpZGViYXJcIik7XHJcbmxldCBjbG9zZUJ0biA9ICQoXCIjYnRuXCIpO1xyXG5sZXQgc2VhcmNoQnRuID0gJChcIi5ieC1zZWFyY2hcIik7XHJcblxyXG5jbG9zZUJ0bi5vbihcImNsaWNrXCIsICgpID0+IHtcclxuICBzaWRlYmFyLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICBtZW51QnRuQ2hhbmdlKCk7IC8vY2FsbGluZyB0aGUgZnVuY3Rpb24ob3B0aW9uYWwpXHJcbn0pO1xyXG5cclxuc2VhcmNoQnRuLm9uKFwiY2xpY2tcIiwgKCkgPT4geyAvLyBTaWRlYmFyIG9wZW4gd2hlbiB5b3UgY2xpY2sgb24gdGhlIHNlYXJjaCBpY29uXHJcbiAgc2lkZWJhci50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgbWVudUJ0bkNoYW5nZSgpOyAvL2NhbGxpbmcgdGhlIGZ1bmN0aW9uKG9wdGlvbmFsKVxyXG59KTtcclxuXHJcbiAgICAvLyBEZWZpbmUgeW91ciBtZW51QnRuQ2hhbmdlIGZ1bmN0aW9uIGhlcmUgKGlmIG5lZWRlZClcclxuICAgIGZ1bmN0aW9uIG1lbnVCdG5DaGFuZ2UoKSB7XHJcbiAgICAgIC8vIFlvdXIgbG9naWMgZm9yIG1lbnUgYnV0dG9uIGNoYW5nZVxyXG4gICAgfVxyXG5cclxuICB9KTsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzaWRlYmFyIiwiY2xvc2VCdG4iLCJzZWFyY2hCdG4iLCJvbiIsInRvZ2dsZUNsYXNzIiwibWVudUJ0bkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=