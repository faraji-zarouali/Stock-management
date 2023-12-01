(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/styles.css */ "./assets/styles/styles.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js */ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js");
/* harmony import */ var _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
/* harmony import */ var datatables_net_dt_css_jquery_dataTables_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! datatables.net-dt/css/jquery.dataTables.css */ "./node_modules/datatables.net-dt/css/jquery.dataTables.css");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)



// start the Stimulus application

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;
var routes = __webpack_require__(/*! ../public/js/fos_js_routes.json */ "./public/js/fos_js_routes.json");

var routing = _vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_js__WEBPACK_IMPORTED_MODULE_3___default().setRoutingData(routes);
__webpack_require__.g.Routing = (_vendor_friendsofsymfony_jsrouting_bundle_Resources_public_js_router_js__WEBPACK_IMPORTED_MODULE_3___default());
// import 'datatables.net-dt/css/jquery.dataTables.css';
// import 'datatables.net-responsive-dt/css/responsive.dataTables.css'; // Add this line for responsive features

(toastr__WEBPACK_IMPORTED_MODULE_4___default().options) = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};
__webpack_require__.g.toastr = (toastr__WEBPACK_IMPORTED_MODULE_4___default());
// import 'toastr/build/toastr.css';

// @import '~bootstrap/dist/css/bootstrap.min';




/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js":
/*!********************************************************************************!*\
  !*** ./vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.js ***!
  \********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.object.freeze.js */ "./node_modules/core-js/modules/es.object.freeze.js");
__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ "./node_modules/core-js/modules/es.regexp.dot-all.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (root, factory) {
  var routing = factory();
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (routing.Routing),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  var exports = {};
  "use strict";
  exports.__esModule = true;
  exports.Routing = exports.Router = void 0;
  var Router = /** @class */function () {
    function Router(context, routes) {
      this.context_ = context || {
        base_url: '',
        prefix: '',
        host: '',
        port: '',
        scheme: '',
        locale: ''
      };
      this.setRoutes(routes || {});
    }
    Router.getInstance = function () {
      return exports.Routing;
    };
    Router.setData = function (data) {
      var router = Router.getInstance();
      router.setRoutingData(data);
    };
    Router.prototype.setRoutingData = function (data) {
      this.setBaseUrl(data['base_url']);
      this.setRoutes(data['routes']);
      if (typeof data.prefix !== 'undefined') {
        this.setPrefix(data['prefix']);
      }
      if (typeof data.port !== 'undefined') {
        this.setPort(data['port']);
      }
      if (typeof data.locale !== 'undefined') {
        this.setLocale(data['locale']);
      }
      this.setHost(data['host']);
      if (typeof data.scheme !== 'undefined') {
        this.setScheme(data['scheme']);
      }
    };
    Router.prototype.setRoutes = function (routes) {
      this.routes_ = Object.freeze(routes);
    };
    Router.prototype.getRoutes = function () {
      return this.routes_;
    };
    Router.prototype.setBaseUrl = function (baseUrl) {
      this.context_.base_url = baseUrl;
    };
    Router.prototype.getBaseUrl = function () {
      return this.context_.base_url;
    };
    Router.prototype.setPrefix = function (prefix) {
      this.context_.prefix = prefix;
    };
    Router.prototype.setScheme = function (scheme) {
      this.context_.scheme = scheme;
    };
    Router.prototype.getScheme = function () {
      return this.context_.scheme;
    };
    Router.prototype.setHost = function (host) {
      this.context_.host = host;
    };
    Router.prototype.getHost = function () {
      return this.context_.host;
    };
    Router.prototype.setPort = function (port) {
      this.context_.port = port;
    };
    Router.prototype.getPort = function () {
      return this.context_.port;
    };
    ;
    Router.prototype.setLocale = function (locale) {
      this.context_.locale = locale;
    };
    Router.prototype.getLocale = function () {
      return this.context_.locale;
    };
    ;
    /**
     * Builds query string params added to a URL.
     * Port of jQuery's $.param() function, so credit is due there.
     */
    Router.prototype.buildQueryParams = function (prefix, params, add) {
      var _this = this;
      var name;
      var rbracket = new RegExp(/\[\]$/);
      if (params instanceof Array) {
        params.forEach(function (val, i) {
          if (rbracket.test(prefix)) {
            add(prefix, val);
          } else {
            _this.buildQueryParams(prefix + '[' + (_typeof(val) === 'object' ? i : '') + ']', val, add);
          }
        });
      } else if (_typeof(params) === 'object') {
        for (name in params) {
          this.buildQueryParams(prefix + '[' + name + ']', params[name], add);
        }
      } else {
        add(prefix, params);
      }
    };
    /**
     * Returns a raw route object.
     */
    Router.prototype.getRoute = function (name) {
      var prefixedName = this.context_.prefix + name;
      var sf41i18nName = name + '.' + this.context_.locale;
      var prefixedSf41i18nName = this.context_.prefix + name + '.' + this.context_.locale;
      var variants = [prefixedName, sf41i18nName, prefixedSf41i18nName, name];
      for (var i in variants) {
        if (variants[i] in this.routes_) {
          return this.routes_[variants[i]];
        }
      }
      throw new Error('The route "' + name + '" does not exist.');
    };
    /**
     * Generates the URL for a route.
     */
    Router.prototype.generate = function (name, opt_params, absolute) {
      var route = this.getRoute(name);
      var params = opt_params || {};
      var unusedParams = Object.assign({}, params);
      var url = '';
      var optional = true;
      var host = '';
      var port = typeof this.getPort() == 'undefined' || this.getPort() === null ? '' : this.getPort();
      route.tokens.forEach(function (token) {
        if ('text' === token[0] && typeof token[1] === 'string') {
          url = Router.encodePathComponent(token[1]) + url;
          optional = false;
          return;
        }
        if ('variable' === token[0]) {
          if (token.length === 6 && token[5] === true) {
            // Sixth part of the token array indicates if it should be included in case of defaults
            optional = false;
          }
          var hasDefault = route.defaults && !Array.isArray(route.defaults) && typeof token[3] === 'string' && token[3] in route.defaults;
          if (false === optional || !hasDefault || typeof token[3] === 'string' && token[3] in params && !Array.isArray(route.defaults) && params[token[3]] != route.defaults[token[3]]) {
            var value = void 0;
            if (typeof token[3] === 'string' && token[3] in params) {
              value = params[token[3]];
              delete unusedParams[token[3]];
            } else if (typeof token[3] === 'string' && hasDefault && !Array.isArray(route.defaults)) {
              value = route.defaults[token[3]];
            } else if (optional) {
              return;
            } else {
              throw new Error('The route "' + name + '" requires the parameter "' + token[3] + '".');
            }
            var empty = true === value || false === value || '' === value;
            if (!empty || !optional) {
              var encodedValue = Router.encodePathComponent(value);
              if ('null' === encodedValue && null === value) {
                encodedValue = '';
              }
              url = token[1] + encodedValue + url;
            }
            optional = false;
          } else if (hasDefault && typeof token[3] === 'string' && token[3] in unusedParams) {
            delete unusedParams[token[3]];
          }
          return;
        }
        throw new Error('The token type "' + token[0] + '" is not supported.');
      });
      if (url === '') {
        url = '/';
      }
      route.hosttokens.forEach(function (token) {
        var value;
        if ('text' === token[0]) {
          host = token[1] + host;
          return;
        }
        if ('variable' === token[0]) {
          if (token[3] in params) {
            value = params[token[3]];
            delete unusedParams[token[3]];
          } else if (route.defaults && !Array.isArray(route.defaults) && token[3] in route.defaults) {
            value = route.defaults[token[3]];
          }
          host = token[1] + value + host;
        }
      });
      url = this.context_.base_url + url;
      if (route.requirements && '_scheme' in route.requirements && this.getScheme() != route.requirements['_scheme']) {
        var currentHost = host || this.getHost();
        url = route.requirements['_scheme'] + '://' + currentHost + (currentHost.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
      } else if ('undefined' !== typeof route.schemes && 'undefined' !== typeof route.schemes[0] && this.getScheme() !== route.schemes[0]) {
        var currentHost = host || this.getHost();
        url = route.schemes[0] + '://' + currentHost + (currentHost.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
      } else if (host && this.getHost() !== host + (host.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port)) {
        url = this.getScheme() + '://' + host + (host.indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
      } else if (absolute === true) {
        url = this.getScheme() + '://' + this.getHost() + (this.getHost().indexOf(':' + port) > -1 || '' === port ? '' : ':' + port) + url;
      }
      if (Object.keys(unusedParams).length > 0) {
        var queryParams_1 = [];
        var add = function add(key, value) {
          // if value is a function then call it and assign it's return value as value
          value = typeof value === 'function' ? value() : value;
          // change null to empty string
          value = value === null ? '' : value;
          queryParams_1.push(Router.encodeQueryComponent(key) + '=' + Router.encodeQueryComponent(value));
        };
        for (var prefix in unusedParams) {
          if (unusedParams.hasOwnProperty(prefix)) {
            this.buildQueryParams(prefix, unusedParams[prefix], add);
          }
        }
        url = url + '?' + queryParams_1.join('&');
      }
      return url;
    };
    /**
     * Returns the given string encoded to mimic Symfony URL generator.
     */
    Router.customEncodeURIComponent = function (value) {
      return encodeURIComponent(value).replace(/%2F/g, '/').replace(/%40/g, '@').replace(/%3A/g, ':').replace(/%21/g, '!').replace(/%3B/g, ';').replace(/%2C/g, ',').replace(/%2A/g, '*').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/'/g, '%27');
    };
    /**
     * Returns the given path properly encoded to mimic Symfony URL generator.
     */
    Router.encodePathComponent = function (value) {
      return Router.customEncodeURIComponent(value).replace(/%3D/g, '=').replace(/%2B/g, '+').replace(/%21/g, '!').replace(/%7C/g, '|');
    };
    /**
     * Returns the given query parameter or value properly encoded to mimic Symfony URL generator.
     */
    Router.encodeQueryComponent = function (value) {
      return Router.customEncodeURIComponent(value).replace(/%3F/g, '?');
    };
    return Router;
  }();
  exports.Router = Router;
  exports.Routing = new Router();
  exports["default"] = exports.Routing;
  return {
    Router: exports.Router,
    Routing: exports.Routing
  };
});

/***/ }),

/***/ "./assets/styles/styles.css":
/*!**********************************!*\
  !*** ./assets/styles/styles.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./public/js/fos_js_routes.json":
/*!**************************************!*\
  !*** ./public/js/fos_js_routes.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"base_url":"","routes":{"app_category_getlist":{"tokens":[["text","/category/getlist"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_new_category":{"tokens":[["text","/category/new"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_get_category":{"tokens":[["variable","/","[^/]++","id",true],["text","/category/get"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_update_category":{"tokens":[["text","/category/update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_update_category_status":{"tokens":[["variable","/","[^/]++","id",true],["text","/status/category"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_product_list":{"tokens":[["text","/product/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_product_get_list":{"tokens":[["text","/product/get-list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_new_product":{"tokens":[["text","/new/product"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_update_product_status":{"tokens":[["text","/status/product"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_get_product":{"tokens":[["variable","/","[^/]++","id",true],["text","/get/product"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_update_product":{"tokens":[["text","/update/product"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"export_to_pdf":{"tokens":[["variable","/","[^/]++","id",true],["text","/product/export-to-pdf"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_supplier_getlist":{"tokens":[["text","/supplier/getlist"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_new_supplier":{"tokens":[["text","/supplier/new"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_get_supplier":{"tokens":[["variable","/","[^/]++","id",true],["text","/supplier/get"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_update_supplier":{"tokens":[["text","/supplier/update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_update_supplier_status":{"tokens":[["variable","/","[^/]++","id",true],["text","/status/supplier"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_user_list":{"tokens":[["text","/user/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_user_getlist":{"tokens":[["text","/user/getlist"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_new_user":{"tokens":[["text","/user/new"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_get_user":{"tokens":[["variable","/","[^/]++","id",true],["text","/user/get"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"app_update_user":{"tokens":[["text","/user/update"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"app_update_user_status":{"tokens":[["variable","/","[^/]++","id",true],["text","/user/status"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":""}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_toastr_toastr_js-node_modules_core-js_internals_array-species-create_js--4bb413","vendors-node_modules_core-js_modules_es_symbol_description_js-node_modules_core-js_modules_es-df0961","vendors-node_modules_core-js_modules_es_array_push_js-node_modules_core-js_modules_es_date_to-d548ed","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-cbac6d"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRCtDOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxJQUFBQyxRQUFBLDBCQUFBQyxXQUFBO0VBQUFDLFNBQUEsQ0FBQUYsUUFBQSxFQUFBQyxXQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLFFBQUE7RUFBQSxTQUFBQSxTQUFBO0lBQUFLLGVBQUEsT0FBQUwsUUFBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsWUFBQSxDQUFBUixRQUFBO0lBQUFTLEdBQUE7SUFBQUMsS0FBQSxFQVVJLFNBQUFDLFFBQUEsRUFBVTtNQUNOLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLEdBQUcsbUVBQW1FO0lBQ2xHO0VBQUM7RUFBQSxPQUFBYixRQUFBO0FBQUEsRUFId0JELDJEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNtQztBQUNFOztBQUVyQztBQUNxQjtBQUVyQixJQUFNZ0IsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFRLENBQUM7QUFFM0JDLHFCQUFNLENBQUNGLENBQUMsR0FBR0UscUJBQU0sQ0FBQ0MsTUFBTSxHQUFHSCxDQUFDO0FBRTVCLElBQU1JLE1BQU0sR0FBR0gsbUJBQU8sQ0FBQyx1RUFBaUMsQ0FBQztBQUN1QztBQUNoRyxJQUFNSyxPQUFPLEdBQUdELDZIQUFzQixDQUFDRCxNQUFNLENBQUM7QUFDOUNGLHFCQUFNLENBQUNHLE9BQU8sR0FBR0EsZ0hBQU87QUFDeEI7QUFDQTtBQUM0QjtBQUU1QkcsdURBQWMsR0FBRztFQUNiLGFBQWEsRUFBRSxJQUFJO0VBQ25CLE9BQU8sRUFBRSxLQUFLO0VBQ2QsYUFBYSxFQUFFLEtBQUs7RUFDcEIsYUFBYSxFQUFFLEtBQUs7RUFDcEIsZUFBZSxFQUFFLGlCQUFpQjtFQUNsQyxtQkFBbUIsRUFBRSxJQUFJO0VBQ3pCLFNBQVMsRUFBRSxJQUFJO0VBQ2YsY0FBYyxFQUFFLEtBQUs7RUFDckIsY0FBYyxFQUFFLE1BQU07RUFDdEIsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixZQUFZLEVBQUUsT0FBTztFQUNyQixZQUFZLEVBQUUsUUFBUTtFQUN0QixZQUFZLEVBQUUsUUFBUTtFQUN0QixZQUFZLEVBQUU7QUFDZCxDQUFDO0FBRUxOLHFCQUFNLENBQUNNLE1BQU0sR0FBR0EsK0NBQU07QUFDdEI7QUFDNEM7QUFDNUM7QUFDdUQ7QUFHL0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRvQzs7QUFFNUQ7QUFDTyxJQUFNRyxHQUFHLEdBQUdELDBFQUFnQixDQUFDVCx5SUFJbkMsQ0FBQzs7QUFFRjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQyxXQUFVWSxJQUFJLEVBQUVDLE9BQU8sRUFBRTtFQUN0QixJQUFJUixPQUFPLEdBQUdRLE9BQU8sQ0FBQyxDQUFDO0VBQ3ZCLElBQUksSUFBMEMsRUFBRTtJQUM1QztJQUNBQyxpQ0FBTyxFQUFFLG9DQUFFVCxPQUFPLENBQUNELE9BQU87QUFBQTtBQUFBO0FBQUEsa0dBQUM7RUFDL0IsQ0FBQyxNQUFNLEVBV047QUFDTCxDQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVk7RUFDaEIsSUFBSWMsT0FBTyxHQUFHLENBQUMsQ0FBQztFQUNoQixZQUFZO0VBQ2hCQSxPQUFPLENBQUNHLFVBQVUsR0FBRyxJQUFJO0VBQ3pCSCxPQUFPLENBQUNkLE9BQU8sR0FBR2MsT0FBTyxDQUFDRSxNQUFNLEdBQUcsS0FBSyxDQUFDO0VBQ3pDLElBQUlBLE1BQU0sR0FBRyxhQUFlLFlBQVk7SUFDcEMsU0FBU0EsTUFBTUEsQ0FBQ1QsT0FBTyxFQUFFUixNQUFNLEVBQUU7TUFDN0IsSUFBSSxDQUFDbUIsUUFBUSxHQUFHWCxPQUFPLElBQUk7UUFBRVksUUFBUSxFQUFFLEVBQUU7UUFBRUMsTUFBTSxFQUFFLEVBQUU7UUFBRUMsSUFBSSxFQUFFLEVBQUU7UUFBRUMsSUFBSSxFQUFFLEVBQUU7UUFBRUMsTUFBTSxFQUFFLEVBQUU7UUFBRUMsTUFBTSxFQUFFO01BQUcsQ0FBQztNQUNuRyxJQUFJLENBQUNDLFNBQVMsQ0FBQzFCLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoQztJQUNBaUIsTUFBTSxDQUFDVSxXQUFXLEdBQUcsWUFBWTtNQUM3QixPQUFPWixPQUFPLENBQUNkLE9BQU87SUFDMUIsQ0FBQztJQUNEZ0IsTUFBTSxDQUFDVyxPQUFPLEdBQUcsVUFBVUMsSUFBSSxFQUFFO01BQzdCLElBQUlDLE1BQU0sR0FBR2IsTUFBTSxDQUFDVSxXQUFXLENBQUMsQ0FBQztNQUNqQ0csTUFBTSxDQUFDM0IsY0FBYyxDQUFDMEIsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUFDRFosTUFBTSxDQUFDYyxTQUFTLENBQUM1QixjQUFjLEdBQUcsVUFBVTBCLElBQUksRUFBRTtNQUM5QyxJQUFJLENBQUNHLFVBQVUsQ0FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO01BQ2pDLElBQUksQ0FBQ0gsU0FBUyxDQUFDRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7TUFDOUIsSUFBSSxPQUFPQSxJQUFJLENBQUNSLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDcEMsSUFBSSxDQUFDWSxTQUFTLENBQUNKLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztNQUNsQztNQUNBLElBQUksT0FBT0EsSUFBSSxDQUFDTixJQUFJLEtBQUssV0FBVyxFQUFFO1FBQ2xDLElBQUksQ0FBQ1csT0FBTyxDQUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDOUI7TUFDQSxJQUFJLE9BQU9BLElBQUksQ0FBQ0osTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNwQyxJQUFJLENBQUNVLFNBQVMsQ0FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO01BQ2xDO01BQ0EsSUFBSSxDQUFDTyxPQUFPLENBQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUMxQixJQUFJLE9BQU9BLElBQUksQ0FBQ0wsTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNwQyxJQUFJLENBQUNhLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO01BQ2xDO0lBQ0osQ0FBQztJQUNEWixNQUFNLENBQUNjLFNBQVMsQ0FBQ0wsU0FBUyxHQUFHLFVBQVUxQixNQUFNLEVBQUU7TUFDM0MsSUFBSSxDQUFDc0MsT0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ3hDLE1BQU0sQ0FBQztJQUN4QyxDQUFDO0lBQ0RpQixNQUFNLENBQUNjLFNBQVMsQ0FBQ1UsU0FBUyxHQUFHLFlBQVk7TUFDckMsT0FBTyxJQUFJLENBQUNILE9BQU87SUFDdkIsQ0FBQztJQUNEckIsTUFBTSxDQUFDYyxTQUFTLENBQUNDLFVBQVUsR0FBRyxVQUFVVSxPQUFPLEVBQUU7TUFDN0MsSUFBSSxDQUFDdkIsUUFBUSxDQUFDQyxRQUFRLEdBQUdzQixPQUFPO0lBQ3BDLENBQUM7SUFDRHpCLE1BQU0sQ0FBQ2MsU0FBUyxDQUFDWSxVQUFVLEdBQUcsWUFBWTtNQUN0QyxPQUFPLElBQUksQ0FBQ3hCLFFBQVEsQ0FBQ0MsUUFBUTtJQUNqQyxDQUFDO0lBQ0RILE1BQU0sQ0FBQ2MsU0FBUyxDQUFDRSxTQUFTLEdBQUcsVUFBVVosTUFBTSxFQUFFO01BQzNDLElBQUksQ0FBQ0YsUUFBUSxDQUFDRSxNQUFNLEdBQUdBLE1BQU07SUFDakMsQ0FBQztJQUNESixNQUFNLENBQUNjLFNBQVMsQ0FBQ00sU0FBUyxHQUFHLFVBQVViLE1BQU0sRUFBRTtNQUMzQyxJQUFJLENBQUNMLFFBQVEsQ0FBQ0ssTUFBTSxHQUFHQSxNQUFNO0lBQ2pDLENBQUM7SUFDRFAsTUFBTSxDQUFDYyxTQUFTLENBQUNhLFNBQVMsR0FBRyxZQUFZO01BQ3JDLE9BQU8sSUFBSSxDQUFDekIsUUFBUSxDQUFDSyxNQUFNO0lBQy9CLENBQUM7SUFDRFAsTUFBTSxDQUFDYyxTQUFTLENBQUNLLE9BQU8sR0FBRyxVQUFVZCxJQUFJLEVBQUU7TUFDdkMsSUFBSSxDQUFDSCxRQUFRLENBQUNHLElBQUksR0FBR0EsSUFBSTtJQUM3QixDQUFDO0lBQ0RMLE1BQU0sQ0FBQ2MsU0FBUyxDQUFDYyxPQUFPLEdBQUcsWUFBWTtNQUNuQyxPQUFPLElBQUksQ0FBQzFCLFFBQVEsQ0FBQ0csSUFBSTtJQUM3QixDQUFDO0lBQ0RMLE1BQU0sQ0FBQ2MsU0FBUyxDQUFDRyxPQUFPLEdBQUcsVUFBVVgsSUFBSSxFQUFFO01BQ3ZDLElBQUksQ0FBQ0osUUFBUSxDQUFDSSxJQUFJLEdBQUdBLElBQUk7SUFDN0IsQ0FBQztJQUNETixNQUFNLENBQUNjLFNBQVMsQ0FBQ2UsT0FBTyxHQUFHLFlBQVk7TUFDbkMsT0FBTyxJQUFJLENBQUMzQixRQUFRLENBQUNJLElBQUk7SUFDN0IsQ0FBQztJQUNEO0lBQ0FOLE1BQU0sQ0FBQ2MsU0FBUyxDQUFDSSxTQUFTLEdBQUcsVUFBVVYsTUFBTSxFQUFFO01BQzNDLElBQUksQ0FBQ04sUUFBUSxDQUFDTSxNQUFNLEdBQUdBLE1BQU07SUFDakMsQ0FBQztJQUNEUixNQUFNLENBQUNjLFNBQVMsQ0FBQ2dCLFNBQVMsR0FBRyxZQUFZO01BQ3JDLE9BQU8sSUFBSSxDQUFDNUIsUUFBUSxDQUFDTSxNQUFNO0lBQy9CLENBQUM7SUFDRDtJQUNBO0FBQ0o7QUFDQTtBQUNBO0lBQ0lSLE1BQU0sQ0FBQ2MsU0FBUyxDQUFDaUIsZ0JBQWdCLEdBQUcsVUFBVTNCLE1BQU0sRUFBRTRCLE1BQU0sRUFBRUMsR0FBRyxFQUFFO01BQy9ELElBQUlDLEtBQUssR0FBRyxJQUFJO01BQ2hCLElBQUlDLElBQUk7TUFDUixJQUFJQyxRQUFRLEdBQUcsSUFBSUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUNsQyxJQUFJTCxNQUFNLFlBQVlNLEtBQUssRUFBRTtRQUN6Qk4sTUFBTSxDQUFDTyxPQUFPLENBQUMsVUFBVUMsR0FBRyxFQUFFQyxDQUFDLEVBQUU7VUFDN0IsSUFBSUwsUUFBUSxDQUFDTSxJQUFJLENBQUN0QyxNQUFNLENBQUMsRUFBRTtZQUN2QjZCLEdBQUcsQ0FBQzdCLE1BQU0sRUFBRW9DLEdBQUcsQ0FBQztVQUNwQixDQUFDLE1BQ0k7WUFDRE4sS0FBSyxDQUFDSCxnQkFBZ0IsQ0FBQzNCLE1BQU0sR0FBRyxHQUFHLElBQUlQLE9BQUEsQ0FBTzJDLEdBQUcsTUFBSyxRQUFRLEdBQUdDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUVELEdBQUcsRUFBRVAsR0FBRyxDQUFDO1VBQzdGO1FBQ0osQ0FBQyxDQUFDO01BQ04sQ0FBQyxNQUNJLElBQUlwQyxPQUFBLENBQU9tQyxNQUFNLE1BQUssUUFBUSxFQUFFO1FBQ2pDLEtBQUtHLElBQUksSUFBSUgsTUFBTSxFQUFFO1VBQ2pCLElBQUksQ0FBQ0QsZ0JBQWdCLENBQUMzQixNQUFNLEdBQUcsR0FBRyxHQUFHK0IsSUFBSSxHQUFHLEdBQUcsRUFBRUgsTUFBTSxDQUFDRyxJQUFJLENBQUMsRUFBRUYsR0FBRyxDQUFDO1FBQ3ZFO01BQ0osQ0FBQyxNQUNJO1FBQ0RBLEdBQUcsQ0FBQzdCLE1BQU0sRUFBRTRCLE1BQU0sQ0FBQztNQUN2QjtJQUNKLENBQUM7SUFDRDtBQUNKO0FBQ0E7SUFDSWhDLE1BQU0sQ0FBQ2MsU0FBUyxDQUFDNkIsUUFBUSxHQUFHLFVBQVVSLElBQUksRUFBRTtNQUN4QyxJQUFJUyxZQUFZLEdBQUcsSUFBSSxDQUFDMUMsUUFBUSxDQUFDRSxNQUFNLEdBQUcrQixJQUFJO01BQzlDLElBQUlVLFlBQVksR0FBR1YsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUNqQyxRQUFRLENBQUNNLE1BQU07TUFDcEQsSUFBSXNDLG9CQUFvQixHQUFHLElBQUksQ0FBQzVDLFFBQVEsQ0FBQ0UsTUFBTSxHQUFHK0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUNqQyxRQUFRLENBQUNNLE1BQU07TUFDbkYsSUFBSXVDLFFBQVEsR0FBRyxDQUFDSCxZQUFZLEVBQUVDLFlBQVksRUFBRUMsb0JBQW9CLEVBQUVYLElBQUksQ0FBQztNQUN2RSxLQUFLLElBQUlNLENBQUMsSUFBSU0sUUFBUSxFQUFFO1FBQ3BCLElBQUlBLFFBQVEsQ0FBQ04sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDcEIsT0FBTyxFQUFFO1VBQzdCLE9BQU8sSUFBSSxDQUFDQSxPQUFPLENBQUMwQixRQUFRLENBQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ3BDO01BQ0o7TUFDQSxNQUFNLElBQUlPLEtBQUssQ0FBQyxhQUFhLEdBQUdiLElBQUksR0FBRyxtQkFBbUIsQ0FBQztJQUMvRCxDQUFDO0lBQ0Q7QUFDSjtBQUNBO0lBQ0luQyxNQUFNLENBQUNjLFNBQVMsQ0FBQ21DLFFBQVEsR0FBRyxVQUFVZCxJQUFJLEVBQUVlLFVBQVUsRUFBRUMsUUFBUSxFQUFFO01BQzlELElBQUlDLEtBQUssR0FBSSxJQUFJLENBQUNULFFBQVEsQ0FBQ1IsSUFBSSxDQUFFO01BQ2pDLElBQUlILE1BQU0sR0FBR2tCLFVBQVUsSUFBSSxDQUFDLENBQUM7TUFDN0IsSUFBSUcsWUFBWSxHQUFHL0IsTUFBTSxDQUFDZ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFdEIsTUFBTSxDQUFDO01BQzVDLElBQUl1QixHQUFHLEdBQUcsRUFBRTtNQUNaLElBQUlDLFFBQVEsR0FBRyxJQUFJO01BQ25CLElBQUluRCxJQUFJLEdBQUcsRUFBRTtNQUNiLElBQUlDLElBQUksR0FBSSxPQUFPLElBQUksQ0FBQ3VCLE9BQU8sQ0FBQyxDQUFDLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUksRUFBRSxHQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFDLENBQUM7TUFDbEd1QixLQUFLLENBQUNLLE1BQU0sQ0FBQ2xCLE9BQU8sQ0FBQyxVQUFVbUIsS0FBSyxFQUFFO1FBQ2xDLElBQUksTUFBTSxLQUFLQSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBT0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtVQUNyREgsR0FBRyxHQUFHdkQsTUFBTSxDQUFDMkQsbUJBQW1CLENBQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHSCxHQUFHO1VBQ2hEQyxRQUFRLEdBQUcsS0FBSztVQUNoQjtRQUNKO1FBQ0EsSUFBSSxVQUFVLEtBQUtFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUN6QixJQUFJQSxLQUFLLENBQUNFLE1BQU0sS0FBSyxDQUFDLElBQUlGLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFBRTtZQUMzQ0YsUUFBUSxHQUFHLEtBQUs7VUFDcEI7VUFDQSxJQUFJSyxVQUFVLEdBQUdULEtBQUssQ0FBQ1UsUUFBUSxJQUFJLENBQUN4QixLQUFLLENBQUN5QixPQUFPLENBQUNYLEtBQUssQ0FBQ1UsUUFBUSxDQUFDLElBQUksT0FBT0osS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBS0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJTixLQUFLLENBQUNVLFFBQVM7VUFDakksSUFBSSxLQUFLLEtBQUtOLFFBQVEsSUFBSSxDQUFDSyxVQUFVLElBQU0sT0FBT0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJMUIsTUFBTSxJQUFLLENBQUNNLEtBQUssQ0FBQ3lCLE9BQU8sQ0FBQ1gsS0FBSyxDQUFDVSxRQUFRLENBQUMsSUFBSTlCLE1BQU0sQ0FBQzBCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJTixLQUFLLENBQUNVLFFBQVEsQ0FBQ0osS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLEVBQUU7WUFDL0ssSUFBSXBGLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbEIsSUFBSSxPQUFPb0YsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJMUIsTUFBTSxFQUFFO2NBQ3BEMUQsS0FBSyxHQUFHMEQsTUFBTSxDQUFDMEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQ3hCLE9BQU9MLFlBQVksQ0FBQ0ssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsTUFDSSxJQUFJLE9BQU9BLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUlHLFVBQVUsSUFBSSxDQUFDdkIsS0FBSyxDQUFDeUIsT0FBTyxDQUFDWCxLQUFLLENBQUNVLFFBQVEsQ0FBQyxFQUFFO2NBQ25GeEYsS0FBSyxHQUFHOEUsS0FBSyxDQUFDVSxRQUFRLENBQUNKLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLE1BQ0ksSUFBSUYsUUFBUSxFQUFFO2NBQ2Y7WUFDSixDQUFDLE1BQ0k7Y0FDRCxNQUFNLElBQUlSLEtBQUssQ0FBQyxhQUFhLEdBQUdiLElBQUksR0FBRyw0QkFBNEIsR0FBR3VCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDMUY7WUFDQSxJQUFJTSxLQUFLLEdBQUcsSUFBSSxLQUFLMUYsS0FBSyxJQUFJLEtBQUssS0FBS0EsS0FBSyxJQUFJLEVBQUUsS0FBS0EsS0FBSztZQUM3RCxJQUFJLENBQUMwRixLQUFLLElBQUksQ0FBQ1IsUUFBUSxFQUFFO2NBQ3JCLElBQUlTLFlBQVksR0FBR2pFLE1BQU0sQ0FBQzJELG1CQUFtQixDQUFDckYsS0FBSyxDQUFDO2NBQ3BELElBQUksTUFBTSxLQUFLMkYsWUFBWSxJQUFJLElBQUksS0FBSzNGLEtBQUssRUFBRTtnQkFDM0MyRixZQUFZLEdBQUcsRUFBRTtjQUNyQjtjQUNBVixHQUFHLEdBQUdHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR08sWUFBWSxHQUFHVixHQUFHO1lBQ3ZDO1lBQ0FDLFFBQVEsR0FBRyxLQUFLO1VBQ3BCLENBQUMsTUFDSSxJQUFJSyxVQUFVLElBQUssT0FBT0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsSUFBSUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJTCxZQUFhLEVBQUU7WUFDL0UsT0FBT0EsWUFBWSxDQUFDSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDakM7VUFDQTtRQUNKO1FBQ0EsTUFBTSxJQUFJVixLQUFLLENBQUMsa0JBQWtCLEdBQUdVLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxxQkFBcUIsQ0FBQztNQUMxRSxDQUFDLENBQUM7TUFDRixJQUFJSCxHQUFHLEtBQUssRUFBRSxFQUFFO1FBQ1pBLEdBQUcsR0FBRyxHQUFHO01BQ2I7TUFDQUgsS0FBSyxDQUFDYyxVQUFVLENBQUMzQixPQUFPLENBQUMsVUFBVW1CLEtBQUssRUFBRTtRQUN0QyxJQUFJcEYsS0FBSztRQUNULElBQUksTUFBTSxLQUFLb0YsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ3JCckQsSUFBSSxHQUFHcUQsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHckQsSUFBSTtVQUN0QjtRQUNKO1FBQ0EsSUFBSSxVQUFVLEtBQUtxRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDekIsSUFBSUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJMUIsTUFBTSxFQUFFO1lBQ3BCMUQsS0FBSyxHQUFHMEQsTUFBTSxDQUFDMEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU9MLFlBQVksQ0FBQ0ssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ2pDLENBQUMsTUFDSSxJQUFJTixLQUFLLENBQUNVLFFBQVEsSUFBSSxDQUFDeEIsS0FBSyxDQUFDeUIsT0FBTyxDQUFDWCxLQUFLLENBQUNVLFFBQVEsQ0FBQyxJQUFLSixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUlOLEtBQUssQ0FBQ1UsUUFBUyxFQUFFO1lBQ3ZGeEYsS0FBSyxHQUFHOEUsS0FBSyxDQUFDVSxRQUFRLENBQUNKLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNwQztVQUNBckQsSUFBSSxHQUFHcUQsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHcEYsS0FBSyxHQUFHK0IsSUFBSTtRQUNsQztNQUNKLENBQUMsQ0FBQztNQUNGa0QsR0FBRyxHQUFHLElBQUksQ0FBQ3JELFFBQVEsQ0FBQ0MsUUFBUSxHQUFHb0QsR0FBRztNQUNsQyxJQUFJSCxLQUFLLENBQUNlLFlBQVksSUFBSyxTQUFTLElBQUlmLEtBQUssQ0FBQ2UsWUFBYSxJQUFJLElBQUksQ0FBQ3hDLFNBQVMsQ0FBQyxDQUFDLElBQUl5QixLQUFLLENBQUNlLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUM5RyxJQUFJQyxXQUFXLEdBQUcvRCxJQUFJLElBQUksSUFBSSxDQUFDdUIsT0FBTyxDQUFDLENBQUM7UUFDeEMyQixHQUFHLEdBQUdILEtBQUssQ0FBQ2UsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssR0FBR0MsV0FBVyxJQUFJQSxXQUFXLENBQUNDLE9BQU8sQ0FBQyxHQUFHLEdBQUcvRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUtBLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHQSxJQUFJLENBQUMsR0FBR2lELEdBQUc7TUFDN0ksQ0FBQyxNQUNJLElBQUksV0FBVyxLQUFLLE9BQU9ILEtBQUssQ0FBQ2tCLE9BQU8sSUFBSSxXQUFXLEtBQUssT0FBT2xCLEtBQUssQ0FBQ2tCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMzQyxTQUFTLENBQUMsQ0FBQyxLQUFLeUIsS0FBSyxDQUFDa0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQy9ILElBQUlGLFdBQVcsR0FBRy9ELElBQUksSUFBSSxJQUFJLENBQUN1QixPQUFPLENBQUMsQ0FBQztRQUN4QzJCLEdBQUcsR0FBR0gsS0FBSyxDQUFDa0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBR0YsV0FBVyxJQUFJQSxXQUFXLENBQUNDLE9BQU8sQ0FBQyxHQUFHLEdBQUcvRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUtBLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHQSxJQUFJLENBQUMsR0FBR2lELEdBQUc7TUFDaEksQ0FBQyxNQUNJLElBQUlsRCxJQUFJLElBQUksSUFBSSxDQUFDdUIsT0FBTyxDQUFDLENBQUMsS0FBS3ZCLElBQUksSUFBSUEsSUFBSSxDQUFDZ0UsT0FBTyxDQUFDLEdBQUcsR0FBRy9ELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBS0EsSUFBSSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUdBLElBQUksQ0FBQyxFQUFFO1FBQ3pHaUQsR0FBRyxHQUFHLElBQUksQ0FBQzVCLFNBQVMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHdEIsSUFBSSxJQUFJQSxJQUFJLENBQUNnRSxPQUFPLENBQUMsR0FBRyxHQUFHL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLQSxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBR0EsSUFBSSxDQUFDLEdBQUdpRCxHQUFHO01BQ2xILENBQUMsTUFDSSxJQUFJSixRQUFRLEtBQUssSUFBSSxFQUFFO1FBQ3hCSSxHQUFHLEdBQUcsSUFBSSxDQUFDNUIsU0FBUyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ0EsT0FBTyxDQUFDLENBQUMsQ0FBQ3lDLE9BQU8sQ0FBQyxHQUFHLEdBQUcvRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUtBLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHQSxJQUFJLENBQUMsR0FBR2lELEdBQUc7TUFDdEk7TUFDQSxJQUFJakMsTUFBTSxDQUFDaUQsSUFBSSxDQUFDbEIsWUFBWSxDQUFDLENBQUNPLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDdEMsSUFBSVksYUFBYSxHQUFHLEVBQUU7UUFDdEIsSUFBSXZDLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFhNUQsR0FBRyxFQUFFQyxLQUFLLEVBQUU7VUFDNUI7VUFDQUEsS0FBSyxHQUFJLE9BQU9BLEtBQUssS0FBSyxVQUFVLEdBQUlBLEtBQUssQ0FBQyxDQUFDLEdBQUdBLEtBQUs7VUFDdkQ7VUFDQUEsS0FBSyxHQUFJQSxLQUFLLEtBQUssSUFBSSxHQUFJLEVBQUUsR0FBR0EsS0FBSztVQUNyQ2tHLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDekUsTUFBTSxDQUFDMEUsb0JBQW9CLENBQUNyRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcyQixNQUFNLENBQUMwRSxvQkFBb0IsQ0FBQ3BHLEtBQUssQ0FBQyxDQUFDO1FBQ25HLENBQUM7UUFDRCxLQUFLLElBQUk4QixNQUFNLElBQUlpRCxZQUFZLEVBQUU7VUFDN0IsSUFBSUEsWUFBWSxDQUFDc0IsY0FBYyxDQUFDdkUsTUFBTSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDMkIsZ0JBQWdCLENBQUMzQixNQUFNLEVBQUVpRCxZQUFZLENBQUNqRCxNQUFNLENBQUMsRUFBRTZCLEdBQUcsQ0FBQztVQUM1RDtRQUNKO1FBQ0FzQixHQUFHLEdBQUdBLEdBQUcsR0FBRyxHQUFHLEdBQUdpQixhQUFhLENBQUNJLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDN0M7TUFDQSxPQUFPckIsR0FBRztJQUNkLENBQUM7SUFDRDtBQUNKO0FBQ0E7SUFDSXZELE1BQU0sQ0FBQzZFLHdCQUF3QixHQUFHLFVBQVV2RyxLQUFLLEVBQUU7TUFDL0MsT0FBT3dHLGtCQUFrQixDQUFDeEcsS0FBSyxDQUFDLENBQzNCeUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FDcEJBLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQ3BCQSxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUNwQkEsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FDcEJBLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQ3BCQSxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUNwQkEsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FDcEJBLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQ3JCQSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUNyQkEsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUNEO0FBQ0o7QUFDQTtJQUNJL0UsTUFBTSxDQUFDMkQsbUJBQW1CLEdBQUcsVUFBVXJGLEtBQUssRUFBRTtNQUMxQyxPQUFPMEIsTUFBTSxDQUFDNkUsd0JBQXdCLENBQUN2RyxLQUFLLENBQUMsQ0FDeEN5RyxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUNwQkEsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FDcEJBLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQ3BCQSxPQUFPLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztJQUM3QixDQUFDO0lBQ0Q7QUFDSjtBQUNBO0lBQ0kvRSxNQUFNLENBQUMwRSxvQkFBb0IsR0FBRyxVQUFVcEcsS0FBSyxFQUFFO01BQzNDLE9BQU8wQixNQUFNLENBQUM2RSx3QkFBd0IsQ0FBQ3ZHLEtBQUssQ0FBQyxDQUN4Q3lHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO0lBQzdCLENBQUM7SUFDRCxPQUFPL0UsTUFBTTtFQUNqQixDQUFDLENBQUMsQ0FBRTtFQUNKRixPQUFPLENBQUNFLE1BQU0sR0FBR0EsTUFBTTtFQUN2QkYsT0FBTyxDQUFDZCxPQUFPLEdBQUcsSUFBSWdCLE1BQU0sQ0FBQyxDQUFDO0VBQzlCRixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUdBLE9BQU8sQ0FBQ2QsT0FBTztFQUdoQyxPQUFPO0lBQUVnQixNQUFNLEVBQUVGLE9BQU8sQ0FBQ0UsTUFBTTtJQUFFaEIsT0FBTyxFQUFFYyxPQUFPLENBQUNkO0VBQVEsQ0FBQztBQUMvRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQzFSRjs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9mcmllbmRzb2ZzeW1mb255L2pzcm91dGluZy1idW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzJztcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5nbG9iYWwuJCA9IGdsb2JhbC5qUXVlcnkgPSAkO1xuXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuLi9wdWJsaWMvanMvZm9zX2pzX3JvdXRlcy5qc29uJyk7XG5pbXBvcnQgUm91dGluZyBmcm9tICcuLi92ZW5kb3IvZnJpZW5kc29mc3ltZm9ueS9qc3JvdXRpbmctYnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGVyLmpzJztcbmNvbnN0IHJvdXRpbmcgPSBSb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7XG5nbG9iYWwuUm91dGluZyA9IFJvdXRpbmdcbi8vIGltcG9ydCAnZGF0YXRhYmxlcy5uZXQtZHQvY3NzL2pxdWVyeS5kYXRhVGFibGVzLmNzcyc7XG4vLyBpbXBvcnQgJ2RhdGF0YWJsZXMubmV0LXJlc3BvbnNpdmUtZHQvY3NzL3Jlc3BvbnNpdmUuZGF0YVRhYmxlcy5jc3MnOyAvLyBBZGQgdGhpcyBsaW5lIGZvciByZXNwb25zaXZlIGZlYXR1cmVzXG5pbXBvcnQgdG9hc3RyIGZyb20gJ3RvYXN0cic7XG5cbnRvYXN0ci5vcHRpb25zID0ge1xuICAgIFwiY2xvc2VCdXR0b25cIjogdHJ1ZSxcbiAgICBcImRlYnVnXCI6IGZhbHNlLFxuICAgIFwibmV3ZXN0T25Ub3BcIjogZmFsc2UsXG4gICAgXCJwcm9ncmVzc0JhclwiOiBmYWxzZSxcbiAgICBcInBvc2l0aW9uQ2xhc3NcIjogXCJ0b2FzdC10b3AtcmlnaHRcIixcbiAgICBcInByZXZlbnREdXBsaWNhdGVzXCI6IHRydWUsXG4gICAgXCJvbmNsaWNrXCI6IG51bGwsXG4gICAgXCJzaG93RHVyYXRpb25cIjogXCIzMDBcIixcbiAgICBcImhpZGVEdXJhdGlvblwiOiBcIjEwMDBcIixcbiAgICBcInRpbWVPdXRcIjogXCIzMDAwXCIsXG4gICAgXCJleHRlbmRlZFRpbWVPdXRcIjogXCIxMDAwXCIsXG4gICAgXCJzaG93RWFzaW5nXCI6IFwic3dpbmdcIixcbiAgICBcImhpZGVFYXNpbmdcIjogXCJsaW5lYXJcIixcbiAgICBcInNob3dNZXRob2RcIjogXCJmYWRlSW5cIixcbiAgICBcImhpZGVNZXRob2RcIjogXCJmYWRlT3V0XCJcbiAgICB9XG5cbmdsb2JhbC50b2FzdHIgPSB0b2FzdHJcbi8vIGltcG9ydCAndG9hc3RyL2J1aWxkL3RvYXN0ci5jc3MnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlJztcbi8vIEBpbXBvcnQgJ35ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbic7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5cblxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldCc7XG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0LWR0L2Nzcy9qcXVlcnkuZGF0YVRhYmxlcy5jc3MnO1xuXG5cbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC5banRdc3g/JC9cbikpO1xuXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xuIiwiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcbiAgICB2YXIgcm91dGluZyA9IGZhY3RvcnkoKTtcclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXHJcbiAgICAgICAgZGVmaW5lKFtdLCByb3V0aW5nLlJvdXRpbmcpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG4gICAgICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxyXG4gICAgICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxyXG4gICAgICAgIC8vIGxpa2UgTm9kZS5cclxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJvdXRpbmcuUm91dGluZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcclxuICAgICAgICByb290LlJvdXRpbmcgPSByb3V0aW5nLlJvdXRpbmc7XHJcbiAgICAgICAgcm9vdC5mb3MgPSB7XHJcbiAgICAgICAgICAgIFJvdXRlcjogcm91dGluZy5Sb3V0ZXJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHBvcnRzID0ge307XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLlJvdXRpbmcgPSBleHBvcnRzLlJvdXRlciA9IHZvaWQgMDtcbnZhciBSb3V0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUm91dGVyKGNvbnRleHQsIHJvdXRlcykge1xuICAgICAgICB0aGlzLmNvbnRleHRfID0gY29udGV4dCB8fCB7IGJhc2VfdXJsOiAnJywgcHJlZml4OiAnJywgaG9zdDogJycsIHBvcnQ6ICcnLCBzY2hlbWU6ICcnLCBsb2NhbGU6ICcnIH07XG4gICAgICAgIHRoaXMuc2V0Um91dGVzKHJvdXRlcyB8fCB7fSk7XG4gICAgfVxuICAgIFJvdXRlci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuUm91dGluZztcbiAgICB9O1xuICAgIFJvdXRlci5zZXREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHJvdXRlciA9IFJvdXRlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgICByb3V0ZXIuc2V0Um91dGluZ0RhdGEoZGF0YSk7XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLnNldFJvdXRpbmdEYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZXRCYXNlVXJsKGRhdGFbJ2Jhc2VfdXJsJ10pO1xuICAgICAgICB0aGlzLnNldFJvdXRlcyhkYXRhWydyb3V0ZXMnXSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YS5wcmVmaXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFByZWZpeChkYXRhWydwcmVmaXgnXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhLnBvcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBvcnQoZGF0YVsncG9ydCddKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGEubG9jYWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbGUoZGF0YVsnbG9jYWxlJ10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SG9zdChkYXRhWydob3N0J10pO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEuc2NoZW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5zZXRTY2hlbWUoZGF0YVsnc2NoZW1lJ10pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLnNldFJvdXRlcyA9IGZ1bmN0aW9uIChyb3V0ZXMpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXNfID0gT2JqZWN0LmZyZWV6ZShyb3V0ZXMpO1xuICAgIH07XG4gICAgUm91dGVyLnByb3RvdHlwZS5nZXRSb3V0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlc187XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLnNldEJhc2VVcmwgPSBmdW5jdGlvbiAoYmFzZVVybCkge1xuICAgICAgICB0aGlzLmNvbnRleHRfLmJhc2VfdXJsID0gYmFzZVVybDtcbiAgICB9O1xuICAgIFJvdXRlci5wcm90b3R5cGUuZ2V0QmFzZVVybCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uYmFzZV91cmw7XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLnNldFByZWZpeCA9IGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Xy5wcmVmaXggPSBwcmVmaXg7XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLnNldFNjaGVtZSA9IGZ1bmN0aW9uIChzY2hlbWUpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Xy5zY2hlbWUgPSBzY2hlbWU7XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLmdldFNjaGVtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uc2NoZW1lO1xuICAgIH07XG4gICAgUm91dGVyLnByb3RvdHlwZS5zZXRIb3N0ID0gZnVuY3Rpb24gKGhvc3QpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Xy5ob3N0ID0gaG9zdDtcbiAgICB9O1xuICAgIFJvdXRlci5wcm90b3R5cGUuZ2V0SG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dF8uaG9zdDtcbiAgICB9O1xuICAgIFJvdXRlci5wcm90b3R5cGUuc2V0UG9ydCA9IGZ1bmN0aW9uIChwb3J0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dF8ucG9ydCA9IHBvcnQ7XG4gICAgfTtcbiAgICBSb3V0ZXIucHJvdG90eXBlLmdldFBvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLnBvcnQ7XG4gICAgfTtcbiAgICA7XG4gICAgUm91dGVyLnByb3RvdHlwZS5zZXRMb2NhbGUgPSBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgICAgIHRoaXMuY29udGV4dF8ubG9jYWxlID0gbG9jYWxlO1xuICAgIH07XG4gICAgUm91dGVyLnByb3RvdHlwZS5nZXRMb2NhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmxvY2FsZTtcbiAgICB9O1xuICAgIDtcbiAgICAvKipcbiAgICAgKiBCdWlsZHMgcXVlcnkgc3RyaW5nIHBhcmFtcyBhZGRlZCB0byBhIFVSTC5cbiAgICAgKiBQb3J0IG9mIGpRdWVyeSdzICQucGFyYW0oKSBmdW5jdGlvbiwgc28gY3JlZGl0IGlzIGR1ZSB0aGVyZS5cbiAgICAgKi9cbiAgICBSb3V0ZXIucHJvdG90eXBlLmJ1aWxkUXVlcnlQYXJhbXMgPSBmdW5jdGlvbiAocHJlZml4LCBwYXJhbXMsIGFkZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbmFtZTtcbiAgICAgICAgdmFyIHJicmFja2V0ID0gbmV3IFJlZ0V4cCgvXFxbXFxdJC8pO1xuICAgICAgICBpZiAocGFyYW1zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGkpIHtcbiAgICAgICAgICAgICAgICBpZiAocmJyYWNrZXQudGVzdChwcmVmaXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZChwcmVmaXgsIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCArICdbJyArICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyA/IGkgOiAnJykgKyAnXScsIHZhbCwgYWRkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChuYW1lIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXggKyAnWycgKyBuYW1lICsgJ10nLCBwYXJhbXNbbmFtZV0sIGFkZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGQocHJlZml4LCBwYXJhbXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmF3IHJvdXRlIG9iamVjdC5cbiAgICAgKi9cbiAgICBSb3V0ZXIucHJvdG90eXBlLmdldFJvdXRlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIHByZWZpeGVkTmFtZSA9IHRoaXMuY29udGV4dF8ucHJlZml4ICsgbmFtZTtcbiAgICAgICAgdmFyIHNmNDFpMThuTmFtZSA9IG5hbWUgKyAnLicgKyB0aGlzLmNvbnRleHRfLmxvY2FsZTtcbiAgICAgICAgdmFyIHByZWZpeGVkU2Y0MWkxOG5OYW1lID0gdGhpcy5jb250ZXh0Xy5wcmVmaXggKyBuYW1lICsgJy4nICsgdGhpcy5jb250ZXh0Xy5sb2NhbGU7XG4gICAgICAgIHZhciB2YXJpYW50cyA9IFtwcmVmaXhlZE5hbWUsIHNmNDFpMThuTmFtZSwgcHJlZml4ZWRTZjQxaTE4bk5hbWUsIG5hbWVdO1xuICAgICAgICBmb3IgKHZhciBpIGluIHZhcmlhbnRzKSB7XG4gICAgICAgICAgICBpZiAodmFyaWFudHNbaV0gaW4gdGhpcy5yb3V0ZXNfKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVzX1t2YXJpYW50c1tpXV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInICsgbmFtZSArICdcIiBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyB0aGUgVVJMIGZvciBhIHJvdXRlLlxuICAgICAqL1xuICAgIFJvdXRlci5wcm90b3R5cGUuZ2VuZXJhdGUgPSBmdW5jdGlvbiAobmFtZSwgb3B0X3BhcmFtcywgYWJzb2x1dGUpIHtcbiAgICAgICAgdmFyIHJvdXRlID0gKHRoaXMuZ2V0Um91dGUobmFtZSkpO1xuICAgICAgICB2YXIgcGFyYW1zID0gb3B0X3BhcmFtcyB8fCB7fTtcbiAgICAgICAgdmFyIHVudXNlZFBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcyk7XG4gICAgICAgIHZhciB1cmwgPSAnJztcbiAgICAgICAgdmFyIG9wdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgdmFyIGhvc3QgPSAnJztcbiAgICAgICAgdmFyIHBvcnQgPSAodHlwZW9mIHRoaXMuZ2V0UG9ydCgpID09ICd1bmRlZmluZWQnIHx8IHRoaXMuZ2V0UG9ydCgpID09PSBudWxsKSA/ICcnIDogdGhpcy5nZXRQb3J0KCk7XG4gICAgICAgIHJvdXRlLnRva2Vucy5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAgICAgaWYgKCd0ZXh0JyA9PT0gdG9rZW5bMF0gJiYgdHlwZW9mIHRva2VuWzFdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHVybCA9IFJvdXRlci5lbmNvZGVQYXRoQ29tcG9uZW50KHRva2VuWzFdKSArIHVybDtcbiAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5sZW5ndGggPT09IDYgJiYgdG9rZW5bNV0gPT09IHRydWUpIHsgLy8gU2l4dGggcGFydCBvZiB0aGUgdG9rZW4gYXJyYXkgaW5kaWNhdGVzIGlmIGl0IHNob3VsZCBiZSBpbmNsdWRlZCBpbiBjYXNlIG9mIGRlZmF1bHRzXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBoYXNEZWZhdWx0ID0gcm91dGUuZGVmYXVsdHMgJiYgIUFycmF5LmlzQXJyYXkocm91dGUuZGVmYXVsdHMpICYmIHR5cGVvZiB0b2tlblszXSA9PT0gJ3N0cmluZycgJiYgKHRva2VuWzNdIGluIHJvdXRlLmRlZmF1bHRzKTtcbiAgICAgICAgICAgICAgICBpZiAoZmFsc2UgPT09IG9wdGlvbmFsIHx8ICFoYXNEZWZhdWx0IHx8ICgodHlwZW9mIHRva2VuWzNdID09PSAnc3RyaW5nJyAmJiB0b2tlblszXSBpbiBwYXJhbXMpICYmICFBcnJheS5pc0FycmF5KHJvdXRlLmRlZmF1bHRzKSAmJiBwYXJhbXNbdG9rZW5bM11dICE9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuWzNdID09PSAnc3RyaW5nJyAmJiB0b2tlblszXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0b2tlblszXSA9PT0gJ3N0cmluZycgJiYgaGFzRGVmYXVsdCAmJiAhQXJyYXkuaXNBcnJheShyb3V0ZS5kZWZhdWx0cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcm91dGUuZGVmYXVsdHNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicgKyBuYW1lICsgJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInICsgdG9rZW5bM10gKyAnXCIuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGVtcHR5ID0gdHJ1ZSA9PT0gdmFsdWUgfHwgZmFsc2UgPT09IHZhbHVlIHx8ICcnID09PSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbXB0eSB8fCAhb3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmNvZGVkVmFsdWUgPSBSb3V0ZXIuZW5jb2RlUGF0aENvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ251bGwnID09PSBlbmNvZGVkVmFsdWUgJiYgbnVsbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmNvZGVkVmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRva2VuWzFdICsgZW5jb2RlZFZhbHVlICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhhc0RlZmF1bHQgJiYgKHR5cGVvZiB0b2tlblszXSA9PT0gJ3N0cmluZycgJiYgdG9rZW5bM10gaW4gdW51c2VkUGFyYW1zKSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW51c2VkUGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdG9rZW4gdHlwZSBcIicgKyB0b2tlblswXSArICdcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVybCA9PT0gJycpIHtcbiAgICAgICAgICAgIHVybCA9ICcvJztcbiAgICAgICAgfVxuICAgICAgICByb3V0ZS5ob3N0dG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgICAgICBpZiAoJ3RleHQnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgIGhvc3QgPSB0b2tlblsxXSArIGhvc3Q7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCd2YXJpYWJsZScgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuWzNdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyb3V0ZS5kZWZhdWx0cyAmJiAhQXJyYXkuaXNBcnJheShyb3V0ZS5kZWZhdWx0cykgJiYgKHRva2VuWzNdIGluIHJvdXRlLmRlZmF1bHRzKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9zdCA9IHRva2VuWzFdICsgdmFsdWUgKyBob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdXJsID0gdGhpcy5jb250ZXh0Xy5iYXNlX3VybCArIHVybDtcbiAgICAgICAgaWYgKHJvdXRlLnJlcXVpcmVtZW50cyAmJiAoJ19zY2hlbWUnIGluIHJvdXRlLnJlcXVpcmVtZW50cykgJiYgdGhpcy5nZXRTY2hlbWUoKSAhPSByb3V0ZS5yZXF1aXJlbWVudHNbJ19zY2hlbWUnXSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRIb3N0ID0gaG9zdCB8fCB0aGlzLmdldEhvc3QoKTtcbiAgICAgICAgICAgIHVybCA9IHJvdXRlLnJlcXVpcmVtZW50c1snX3NjaGVtZSddICsgJzovLycgKyBjdXJyZW50SG9zdCArIChjdXJyZW50SG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2Ygcm91dGUuc2NoZW1lcyAmJiAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHJvdXRlLnNjaGVtZXNbMF0gJiYgdGhpcy5nZXRTY2hlbWUoKSAhPT0gcm91dGUuc2NoZW1lc1swXSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRIb3N0ID0gaG9zdCB8fCB0aGlzLmdldEhvc3QoKTtcbiAgICAgICAgICAgIHVybCA9IHJvdXRlLnNjaGVtZXNbMF0gKyAnOi8vJyArIGN1cnJlbnRIb3N0ICsgKGN1cnJlbnRIb3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkgKyB1cmw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaG9zdCAmJiB0aGlzLmdldEhvc3QoKSAhPT0gaG9zdCArIChob3N0LmluZGV4T2YoJzonICsgcG9ydCkgPiAtMSB8fCAnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkpIHtcbiAgICAgICAgICAgIHVybCA9IHRoaXMuZ2V0U2NoZW1lKCkgKyAnOi8vJyArIGhvc3QgKyAoaG9zdC5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFic29sdXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB1cmwgPSB0aGlzLmdldFNjaGVtZSgpICsgJzovLycgKyB0aGlzLmdldEhvc3QoKSArICh0aGlzLmdldEhvc3QoKS5pbmRleE9mKCc6JyArIHBvcnQpID4gLTEgfHwgJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh1bnVzZWRQYXJhbXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBxdWVyeVBhcmFtc18xID0gW107XG4gICAgICAgICAgICB2YXIgYWRkID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uIHRoZW4gY2FsbCBpdCBhbmQgYXNzaWduIGl0J3MgcmV0dXJuIHZhbHVlIGFzIHZhbHVlXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSA/IHZhbHVlKCkgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgbnVsbCB0byBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSA9PT0gbnVsbCkgPyAnJyA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zXzEucHVzaChSb3V0ZXIuZW5jb2RlUXVlcnlDb21wb25lbnQoa2V5KSArICc9JyArIFJvdXRlci5lbmNvZGVRdWVyeUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAodmFyIHByZWZpeCBpbiB1bnVzZWRQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodW51c2VkUGFyYW1zLmhhc093blByb3BlcnR5KHByZWZpeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFF1ZXJ5UGFyYW1zKHByZWZpeCwgdW51c2VkUGFyYW1zW3ByZWZpeF0sIGFkZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsID0gdXJsICsgJz8nICsgcXVlcnlQYXJhbXNfMS5qb2luKCcmJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHN0cmluZyBlbmNvZGVkIHRvIG1pbWljIFN5bWZvbnkgVVJMIGdlbmVyYXRvci5cbiAgICAgKi9cbiAgICBSb3V0ZXIuY3VzdG9tRW5jb2RlVVJJQ29tcG9uZW50ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpXG4gICAgICAgICAgICAucmVwbGFjZSgvJTJGL2csICcvJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lNDAvZywgJ0AnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyUzQS9nLCAnOicpXG4gICAgICAgICAgICAucmVwbGFjZSgvJTIxL2csICchJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lM0IvZywgJzsnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyUyQy9nLCAnLCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvJTJBL2csICcqJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gcGF0aCBwcm9wZXJseSBlbmNvZGVkIHRvIG1pbWljIFN5bWZvbnkgVVJMIGdlbmVyYXRvci5cbiAgICAgKi9cbiAgICBSb3V0ZXIuZW5jb2RlUGF0aENvbXBvbmVudCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gUm91dGVyLmN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lM0QvZywgJz0nKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyUyQi9nLCAnKycpXG4gICAgICAgICAgICAucmVwbGFjZSgvJTIxL2csICchJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8lN0MvZywgJ3wnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGdpdmVuIHF1ZXJ5IHBhcmFtZXRlciBvciB2YWx1ZSBwcm9wZXJseSBlbmNvZGVkIHRvIG1pbWljIFN5bWZvbnkgVVJMIGdlbmVyYXRvci5cbiAgICAgKi9cbiAgICBSb3V0ZXIuZW5jb2RlUXVlcnlDb21wb25lbnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFJvdXRlci5jdXN0b21FbmNvZGVVUklDb21wb25lbnQodmFsdWUpXG4gICAgICAgICAgICAucmVwbGFjZSgvJTNGL2csICc/Jyk7XG4gICAgfTtcbiAgICByZXR1cm4gUm91dGVyO1xufSgpKTtcbmV4cG9ydHMuUm91dGVyID0gUm91dGVyO1xuZXhwb3J0cy5Sb3V0aW5nID0gbmV3IFJvdXRlcigpO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLlJvdXRpbmc7XG5cclxuXHJcbiAgICByZXR1cm4geyBSb3V0ZXI6IGV4cG9ydHMuUm91dGVyLCBSb3V0aW5nOiBleHBvcnRzLlJvdXRpbmcgfTtcclxufSkpO1xyIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0IiwiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJqUXVlcnkiLCJyb3V0ZXMiLCJSb3V0aW5nIiwicm91dGluZyIsInNldFJvdXRpbmdEYXRhIiwidG9hc3RyIiwib3B0aW9ucyIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0Iiwicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCJtb2R1bGUiLCJfdHlwZW9mIiwiZXhwb3J0cyIsImZvcyIsIlJvdXRlciIsIl9fZXNNb2R1bGUiLCJjb250ZXh0XyIsImJhc2VfdXJsIiwicHJlZml4IiwiaG9zdCIsInBvcnQiLCJzY2hlbWUiLCJsb2NhbGUiLCJzZXRSb3V0ZXMiLCJnZXRJbnN0YW5jZSIsInNldERhdGEiLCJkYXRhIiwicm91dGVyIiwicHJvdG90eXBlIiwic2V0QmFzZVVybCIsInNldFByZWZpeCIsInNldFBvcnQiLCJzZXRMb2NhbGUiLCJzZXRIb3N0Iiwic2V0U2NoZW1lIiwicm91dGVzXyIsIk9iamVjdCIsImZyZWV6ZSIsImdldFJvdXRlcyIsImJhc2VVcmwiLCJnZXRCYXNlVXJsIiwiZ2V0U2NoZW1lIiwiZ2V0SG9zdCIsImdldFBvcnQiLCJnZXRMb2NhbGUiLCJidWlsZFF1ZXJ5UGFyYW1zIiwicGFyYW1zIiwiYWRkIiwiX3RoaXMiLCJuYW1lIiwicmJyYWNrZXQiLCJSZWdFeHAiLCJBcnJheSIsImZvckVhY2giLCJ2YWwiLCJpIiwidGVzdCIsImdldFJvdXRlIiwicHJlZml4ZWROYW1lIiwic2Y0MWkxOG5OYW1lIiwicHJlZml4ZWRTZjQxaTE4bk5hbWUiLCJ2YXJpYW50cyIsIkVycm9yIiwiZ2VuZXJhdGUiLCJvcHRfcGFyYW1zIiwiYWJzb2x1dGUiLCJyb3V0ZSIsInVudXNlZFBhcmFtcyIsImFzc2lnbiIsInVybCIsIm9wdGlvbmFsIiwidG9rZW5zIiwidG9rZW4iLCJlbmNvZGVQYXRoQ29tcG9uZW50IiwibGVuZ3RoIiwiaGFzRGVmYXVsdCIsImRlZmF1bHRzIiwiaXNBcnJheSIsImVtcHR5IiwiZW5jb2RlZFZhbHVlIiwiaG9zdHRva2VucyIsInJlcXVpcmVtZW50cyIsImN1cnJlbnRIb3N0IiwiaW5kZXhPZiIsInNjaGVtZXMiLCJrZXlzIiwicXVlcnlQYXJhbXNfMSIsInB1c2giLCJlbmNvZGVRdWVyeUNvbXBvbmVudCIsImhhc093blByb3BlcnR5Iiwiam9pbiIsImN1c3RvbUVuY29kZVVSSUNvbXBvbmVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9