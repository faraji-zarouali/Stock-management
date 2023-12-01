(self["webpackChunk"] = self["webpackChunk"] || []).push([["productList"],{

/***/ "./assets/js/product_list.js":
/*!***********************************!*\
  !*** ./assets/js/product_list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var toastr = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
$(document).ready(function () {
  var changeStatusBtn = $('#change-status-btn');
  changeStatusBtn.hide();
  var productDataTable = $('#product-datatable').DataTable(_defineProperty({
    processing: true,
    serverSide: true,
    pageLength: 8,
    lengthMenu: [[8, 25, 50, -1], [8, 25, 50, 'All']],
    autoWidth: false,
    ajax: {
      url: Routing.generate('app_product_get_list'),
      datasrc: function datasrc(d) {
        d.draw = d.draw || 0;
        d.start = d.start || 0;
        d.length = d.length || 15;
      }
    },
    order: [[1, 'asc']],
    columns: [{
      data: 'status',
      render: function render(data, type, row) {
        return data ? '<input type="checkbox" class="product-checkbox" disabled>' : '<input type="checkbox" class="product-checkbox" data-product-id="' + row.id + '">';
      },
      orderable: false
    }, {
      name: 'p.id',
      data: 'id',
      orderable: true,
      searchable: true
    }, {
      name: 'p.name',
      data: 'product_name',
      orderable: true,
      searchable: true
    }, {
      name: 'p.price',
      data: 'product_price',
      render: function render(data) {
        return "".concat(data, " DH");
      }
    }, {
      name: 'p.quantity',
      data: 'product_quantity',
      orderable: true
    }, {
      name: 's.name',
      data: 'supplier_name',
      searchable: true
    }, {
      name: 'c.name',
      data: 'category_name',
      searchable: true
    }, {
      data: 'status',
      render: function render(data) {
        var iconClass = data ? 'fas fa-check text-success' : 'fas fa-times text-danger';
        return '<i class="' + iconClass + '"></i>';
      },
      orderable: false
    }, {
      data: 'id',
      render: function render(data, type, row) {
        return "<div class=\"dropdown-table\">\n                      <button class=\"buttonDropDownRow\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"fa fa-ellipsis-h\"></i>\n                    </button>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item edit-button\" data-product-id=\"".concat(data, "\">Update</a>\n                        <a class=\"dropdown-item extract-pdf-button\" data-product-id=\"").concat(data, "\">Extract PDF</a>\n                    </div>\n                </div>");
      }
    }]
  }, "autoWidth", false));
  $('body').on('click', '#add-product-button', function () {
    $('#add-product-modal').modal('show');
  });
  $('#add-product-modal').on('click', '#add-product-btn', function () {
    var newProductName = $("#newProductName").val();
    var newProductPrice = $("#newProductPrice").val();
    var newProductQuantity = $("#newProductQuantity").val();
    var newProductSupplier = $('#newProductSupplier').find(":selected").val();
    var newProductCategory = $('#newProductCategory').find(":selected").val();
    var newProductData = {
      name: newProductName,
      price: newProductPrice,
      quantity: newProductQuantity,
      supplier: newProductSupplier,
      category: newProductCategory
    };
    $.ajax({
      url: Routing.generate('app_new_product'),
      type: "POST",
      contentType: 'application/json',
      data: JSON.stringify(newProductData),
      success: function success(response, textStatus, xhr) {
        if (xhr.status === 200) {
          productDataTable.ajax.reload(null, false);
          $('#add-product-modal').modal('hide');
          $("#newProductName").val();
          $("#newProductPrice").val("");
          $("#newProductQuantity").val("");
          // Show success pop-up
          toastr["success"]("New Product Added successfully", "Success");
        } else {
          console.error('Unexpected success status code:', xhr.status);
        }
      },
      error: function error(xhr) {
        if (xhr.responseJSON && xhr.responseJSON.errors) {
          // Display validation errors to the Product
          toastr["error"](xhr.responseJSON.errors);
        } else {
          // Handle other errors
          toastr["error"]('An error occurred');
        }
      }
    });
  });

  // Handle "Check All" functionality
  $('#select_all').on('change', function () {
    var isChecked = $(this).prop('checked');

    // Check or uncheck all (excluding disabled checkboxes)
    $('.product-checkbox:enabled', productDataTable.rows().nodes()).prop('checked', isChecked);

    // Show the button if at least one checkbox is checked
    changeStatusBtn.toggle($('.product-checkbox:checked', productDataTable.rows().nodes()).length > 0);
  });

  // Handle individual checkbox changes
  $('#product-datatable tbody').on('change', '.product-checkbox', function () {
    // Check if all selectable checkboxes are checked and update the "Check All" checkbox
    $('#select_all').prop('checked', $('.product-checkbox:enabled:checked').length === $('.product-checkbox:enabled').length);

    // Show the button if at least one checkbox is checked
    changeStatusBtn.toggle($('.product-checkbox:checked', productDataTable.rows().nodes()).length > 0);
  });

  // Show the button if at least one checkbox is checked
  changeStatusBtn.toggle($('.product-checkbox:checked', productDataTable.rows().nodes()).length > 0);
  changeStatusBtn.on('click', function () {
    var selectedProductIds = [];

    // Get the IDs of selected products
    $('.product-checkbox:checked', productDataTable.rows().nodes()).each(function () {
      selectedProductIds.push($(this).data('product-id'));
    });
    $.ajax({
      url: Routing.generate('app_update_product_status'),
      type: 'POST',
      contentType: 'application/json;charset=utf-8',
      data: JSON.stringify({
        productIds: selectedProductIds
      }),
      success: function success(response) {
        productDataTable.ajax.reload(null, false);
        $('#select_all').prop('checked', false);
        changeStatusBtn.hide();
        // Show success pop-up
        toastr["success"]("Status changed successfully", "Success");
        console.log(response);
      },
      error: function error(_error) {
        // Handle errors
        console.error(_error);
      }
    });
  });
  $('body').on('click', '.edit-button', function () {
    var productId = $(this).data('product-id');
    $.ajax({
      url: Routing.generate('app_get_product', {
        id: productId
      }),
      type: "GET",
      success: function success(dataResult) {
        $('#pId').val(dataResult.product.id);
        $('#editProductName').val(dataResult.product.name);
        $('#editProductPrice').val(dataResult.product.price);
        $('#editProductQuantity').val(dataResult.product.quantity);
        $('#editProductSupplier').val(dataResult.product.supplier);
        $('#editProductCategory').val(dataResult.product.category);
        $('#edit-product-modal').modal('show');
      }
    });
  });
  $('.modal').on('click', '#btnUpdateSubmit', function () {
    var updatedProductId = $("#pId").val();
    var updatedProductName = $("#editProductName").val();
    var updatedProductPrice = $("#editProductPrice").val();
    var updatedProductQuantity = $("#editProductQuantity").val();
    var updatedProductSupplier = $('#editProductSupplier').find(":selected").val();
    var updatedProductCategory = $('#editProductCategory').find(":selected").val();
    var updatedProductData = {
      id: updatedProductId,
      name: updatedProductName,
      price: updatedProductPrice,
      quantity: updatedProductQuantity,
      supplier: updatedProductSupplier,
      category: updatedProductCategory
    };
    $.ajax({
      url: Routing.generate('app_update_product'),
      type: "POST",
      contentType: 'application/json',
      data: JSON.stringify(updatedProductData),
      success: function success(response, textStatus, xhr) {
        console.log(response);
        if (xhr.status === 200) {
          productDataTable.ajax.reload(null, false);
          $('#edit-product-modal').modal('hide');

          // Show success pop-up
          toastr["success"]("Update successfully", "Success");
        } else {
          console.error('Unexpected success status code:', xhr.status);
        }
      },
      error: function error(xhr) {
        // Handle errors
        if (xhr.responseJSON && xhr.responseJSON.errors) {
          toastr["error"](xhr.responseJSON.errors);
        } else {
          // Handle other errors
          toastr["error"]('An error occurred');
        }
      }
    });
  });
  $('body').on('click', '.extract-pdf-button', function () {
    var productId = $(this).data('product-id');
    var url = Routing.generate('export_to_pdf', {
      id: productId
    });

    // Open the PDF in a new window or tab
    window.open(url, '_blank');
  });
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
// eslint-disable-next-line es/no-array-prototype-find -- testing
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineBuiltInAccessor(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_toastr_toastr_js-node_modules_core-js_internals_array-species-create_js--4bb413","vendors-node_modules_core-js_modules_es_symbol_description_js-node_modules_core-js_modules_es-df0961","vendors-node_modules_core-js_modules_es_array_push_js-node_modules_core-js_modules_es_date_to-d548ed"], () => (__webpack_exec__("./assets/js/product_list.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUF3RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3pEWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsWUFBWSxxSEFBNEM7QUFDeEQsdUJBQXVCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUVoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsc0JBQXNCOztBQUVuRTtBQUNBO0FBQ0EsSUFBSSxtREFBbUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7Ozs7QUNyQmE7QUFDYixrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsMkJBQTJCLG1IQUE0QztBQUN2RSxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Byb2R1Y3RfbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIHZhciBjaGFuZ2VTdGF0dXNCdG4gPSAkKCcjY2hhbmdlLXN0YXR1cy1idG4nKTtcclxuICAgIGNoYW5nZVN0YXR1c0J0bi5oaWRlKCk7XHJcbiAgICBcclxuICAgIHZhciBwcm9kdWN0RGF0YVRhYmxlID0gJCgnI3Byb2R1Y3QtZGF0YXRhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgICAgICBwcm9jZXNzaW5nOiB0cnVlLFxyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgcGFnZUxlbmd0aDogOCxcclxuICAgICAgICBsZW5ndGhNZW51OiBbXHJcbiAgICAgICAgICAgIFs4LCAyNSwgNTAsIC0xXSxcclxuICAgICAgICAgICAgWzgsIDI1LCA1MCwgJ0FsbCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhdXRvV2lkdGg6IGZhbHNlLFxyXG4gICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfcHJvZHVjdF9nZXRfbGlzdCcpLFxyXG4gICAgICAgICAgICBkYXRhc3JjIDogZnVuY3Rpb24oZCkge1xyXG4gICAgICAgICAgICAgICAgZC5kcmF3ID0gZC5kcmF3IHx8IDA7XHJcbiAgICAgICAgICAgICAgICBkLnN0YXJ0ID0gZC5zdGFydCB8fCAwO1xyXG4gICAgICAgICAgICAgICAgZC5sZW5ndGggPSBkLmxlbmd0aCB8fCAxNTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9yZGVyOiBbWzEsICdhc2MnXV0sXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiAnc3RhdHVzJyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIHJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhID8gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInByb2R1Y3QtY2hlY2tib3hcIiBkaXNhYmxlZD4nIDonPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwicHJvZHVjdC1jaGVja2JveFwiIGRhdGEtcHJvZHVjdC1pZD1cIicgKyByb3cuaWQgKyAnXCI+JztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3AuaWQnLCBkYXRhOiAnaWQnLCBvcmRlcmFibGU6IHRydWUgLCBzZWFyY2hhYmxlOiB0cnVlfSxcclxuICAgICAgICAgICAge25hbWU6ICdwLm5hbWUnLCBkYXRhOiAncHJvZHVjdF9uYW1lJywgb3JkZXJhYmxlOiB0cnVlICwgc2VhcmNoYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncC5wcmljZScsIGRhdGE6ICdwcm9kdWN0X3ByaWNlJyxcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2RhdGF9IERIYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncC5xdWFudGl0eScsIGRhdGE6ICdwcm9kdWN0X3F1YW50aXR5Jywgb3JkZXJhYmxlOiB0cnVlfSxcclxuICAgICAgICAgICAge25hbWU6ICdzLm5hbWUnLCBkYXRhOiAnc3VwcGxpZXJfbmFtZScsIHNlYXJjaGFibGU6IHRydWV9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2MubmFtZScsIGRhdGE6ICdjYXRlZ29yeV9uYW1lJywgc2VhcmNoYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6ICdzdGF0dXMnLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb25DbGFzcyA9IGRhdGEgPyAnZmFzIGZhLWNoZWNrIHRleHQtc3VjY2VzcycgOiAnZmFzIGZhLXRpbWVzIHRleHQtZGFuZ2VyJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxpIGNsYXNzPVwiJyArIGljb25DbGFzcyArICdcIj48L2k+JztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCByb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJkcm9wZG93bi10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbkRyb3BEb3duUm93XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVsbGlwc2lzLWhcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bk1lbnVCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGVkaXQtYnV0dG9uXCIgZGF0YS1wcm9kdWN0LWlkPVwiJHtkYXRhfVwiPlVwZGF0ZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIGV4dHJhY3QtcGRmLWJ1dHRvblwiIGRhdGEtcHJvZHVjdC1pZD1cIiR7ZGF0YX1cIj5FeHRyYWN0IFBERjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhdXRvV2lkdGg6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNhZGQtcHJvZHVjdC1idXR0b24nLCBmdW5jdGlvbigpIHsgIFxyXG4gICAgICAgICQoJyNhZGQtcHJvZHVjdC1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7ICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNhZGQtcHJvZHVjdC1tb2RhbCcpLm9uKCdjbGljaycsICcjYWRkLXByb2R1Y3QtYnRuJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBuZXdQcm9kdWN0TmFtZSA9ICQoXCIjbmV3UHJvZHVjdE5hbWVcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIG5ld1Byb2R1Y3RQcmljZSA9ICQoXCIjbmV3UHJvZHVjdFByaWNlXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBuZXdQcm9kdWN0UXVhbnRpdHkgPSAkKFwiI25ld1Byb2R1Y3RRdWFudGl0eVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgbmV3UHJvZHVjdFN1cHBsaWVyID0gJCgnI25ld1Byb2R1Y3RTdXBwbGllcicpLmZpbmQoXCI6c2VsZWN0ZWRcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIG5ld1Byb2R1Y3RDYXRlZ29yeSA9ICQoJyNuZXdQcm9kdWN0Q2F0ZWdvcnknKS5maW5kKFwiOnNlbGVjdGVkXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBuZXdQcm9kdWN0RGF0YSA9IHtcclxuICAgICAgICAgICAgbmFtZTogbmV3UHJvZHVjdE5hbWUsXHJcbiAgICAgICAgICAgIHByaWNlOiBuZXdQcm9kdWN0UHJpY2UsXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiBuZXdQcm9kdWN0UXVhbnRpdHksXHJcbiAgICAgICAgICAgIHN1cHBsaWVyOiBuZXdQcm9kdWN0U3VwcGxpZXIsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBuZXdQcm9kdWN0Q2F0ZWdvcnksXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAgUm91dGluZy5nZW5lcmF0ZSgnYXBwX25ld19wcm9kdWN0JyksXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShuZXdQcm9kdWN0RGF0YSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlLCB0ZXh0U3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RGF0YVRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjYWRkLXByb2R1Y3QtbW9kYWwnKS5tb2RhbCgnaGlkZScpOyBcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI25ld1Byb2R1Y3ROYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjbmV3UHJvZHVjdFByaWNlXCIpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI25ld1Byb2R1Y3RRdWFudGl0eVwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBzdWNjZXNzIHBvcC11cFxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0cltcInN1Y2Nlc3NcIl0oXCJOZXcgUHJvZHVjdCBBZGRlZCBzdWNjZXNzZnVsbHlcIiwgXCJTdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgc3VjY2VzcyBzdGF0dXMgY29kZTonLCB4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VKU09OICYmIHhoci5yZXNwb25zZUpTT04uZXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHZhbGlkYXRpb24gZXJyb3JzIHRvIHRoZSBQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB0b2FzdHJbXCJlcnJvclwiXSh4aHIucmVzcG9uc2VKU09OLmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICB0b2FzdHJbXCJlcnJvclwiXSgnQW4gZXJyb3Igb2NjdXJyZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgXCJDaGVjayBBbGxcIiBmdW5jdGlvbmFsaXR5XHJcbiAgICAkKCcjc2VsZWN0X2FsbCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaXNDaGVja2VkID0gJCh0aGlzKS5wcm9wKCdjaGVja2VkJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgb3IgdW5jaGVjayBhbGwgKGV4Y2x1ZGluZyBkaXNhYmxlZCBjaGVja2JveGVzKVxyXG4gICAgICAgICQoJy5wcm9kdWN0LWNoZWNrYm94OmVuYWJsZWQnLCBwcm9kdWN0RGF0YVRhYmxlLnJvd3MoKS5ub2RlcygpKS5wcm9wKCdjaGVja2VkJywgaXNDaGVja2VkKTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0aGUgYnV0dG9uIGlmIGF0IGxlYXN0IG9uZSBjaGVja2JveCBpcyBjaGVja2VkXHJcbiAgICAgICAgY2hhbmdlU3RhdHVzQnRuLnRvZ2dsZSgkKCcucHJvZHVjdC1jaGVja2JveDpjaGVja2VkJywgcHJvZHVjdERhdGFUYWJsZS5yb3dzKCkubm9kZXMoKSkubGVuZ3RoID4gMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIYW5kbGUgaW5kaXZpZHVhbCBjaGVja2JveCBjaGFuZ2VzXHJcbiAgICAkKCcjcHJvZHVjdC1kYXRhdGFibGUgdGJvZHknKS5vbignY2hhbmdlJywgJy5wcm9kdWN0LWNoZWNrYm94JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYWxsIHNlbGVjdGFibGUgY2hlY2tib3hlcyBhcmUgY2hlY2tlZCBhbmQgdXBkYXRlIHRoZSBcIkNoZWNrIEFsbFwiIGNoZWNrYm94XHJcbiAgICAgICAgJCgnI3NlbGVjdF9hbGwnKS5wcm9wKCdjaGVja2VkJywgJCgnLnByb2R1Y3QtY2hlY2tib3g6ZW5hYmxlZDpjaGVja2VkJykubGVuZ3RoID09PSAkKCcucHJvZHVjdC1jaGVja2JveDplbmFibGVkJykubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0aGUgYnV0dG9uIGlmIGF0IGxlYXN0IG9uZSBjaGVja2JveCBpcyBjaGVja2VkXHJcbiAgICAgICAgY2hhbmdlU3RhdHVzQnRuLnRvZ2dsZSgkKCcucHJvZHVjdC1jaGVja2JveDpjaGVja2VkJywgcHJvZHVjdERhdGFUYWJsZS5yb3dzKCkubm9kZXMoKSkubGVuZ3RoID4gMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTaG93IHRoZSBidXR0b24gaWYgYXQgbGVhc3Qgb25lIGNoZWNrYm94IGlzIGNoZWNrZWRcclxuICAgIGNoYW5nZVN0YXR1c0J0bi50b2dnbGUoJCgnLnByb2R1Y3QtY2hlY2tib3g6Y2hlY2tlZCcsIHByb2R1Y3REYXRhVGFibGUucm93cygpLm5vZGVzKCkpLmxlbmd0aCA+IDApO1xyXG5cclxuICAgIFxyXG4gICAgY2hhbmdlU3RhdHVzQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzZWxlY3RlZFByb2R1Y3RJZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBJRHMgb2Ygc2VsZWN0ZWQgcHJvZHVjdHNcclxuICAgICAgICAkKCcucHJvZHVjdC1jaGVja2JveDpjaGVja2VkJywgcHJvZHVjdERhdGFUYWJsZS5yb3dzKCkubm9kZXMoKSkuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRQcm9kdWN0SWRzLnB1c2goJCh0aGlzKS5kYXRhKCdwcm9kdWN0LWlkJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogIFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF91cGRhdGVfcHJvZHVjdF9zdGF0dXMnKSxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHsgcHJvZHVjdElkczogc2VsZWN0ZWRQcm9kdWN0SWRzIH0pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERhdGFUYWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc2VsZWN0X2FsbCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VTdGF0dXNCdG4uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgc3VjY2VzcyBwb3AtdXBcclxuICAgICAgICAgICAgICAgIHRvYXN0cltcInN1Y2Nlc3NcIl0oXCJTdGF0dXMgY2hhbmdlZCBzdWNjZXNzZnVsbHlcIiwgXCJTdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmVkaXQtYnV0dG9uJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQodGhpcykuZGF0YSgncHJvZHVjdC1pZCcpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZ2V0X3Byb2R1Y3QnLCB7aWQ6cHJvZHVjdElkfSksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhUmVzdWx0KXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwSWQnKS52YWwoZGF0YVJlc3VsdC5wcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXRQcm9kdWN0TmFtZScpLnZhbChkYXRhUmVzdWx0LnByb2R1Y3QubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0UHJvZHVjdFByaWNlJykudmFsKGRhdGFSZXN1bHQucHJvZHVjdC5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0UHJvZHVjdFF1YW50aXR5JykudmFsKGRhdGFSZXN1bHQucHJvZHVjdC5xdWFudGl0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0UHJvZHVjdFN1cHBsaWVyJykudmFsKGRhdGFSZXN1bHQucHJvZHVjdC5zdXBwbGllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0UHJvZHVjdENhdGVnb3J5JykudmFsKGRhdGFSZXN1bHQucHJvZHVjdC5jYXRlZ29yeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1wcm9kdWN0LW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5tb2RhbCcpLm9uKCdjbGljaycsICcjYnRuVXBkYXRlU3VibWl0JywgZnVuY3Rpb24oKSB7XHJcbiAgICBcclxuICAgICAgICB2YXIgdXBkYXRlZFByb2R1Y3RJZCA9ICQoXCIjcElkXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciB1cGRhdGVkUHJvZHVjdE5hbWUgPSAkKFwiI2VkaXRQcm9kdWN0TmFtZVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgdXBkYXRlZFByb2R1Y3RQcmljZSA9ICQoXCIjZWRpdFByb2R1Y3RQcmljZVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgdXBkYXRlZFByb2R1Y3RRdWFudGl0eSA9ICQoXCIjZWRpdFByb2R1Y3RRdWFudGl0eVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgdXBkYXRlZFByb2R1Y3RTdXBwbGllciA9ICQoJyNlZGl0UHJvZHVjdFN1cHBsaWVyJykuZmluZChcIjpzZWxlY3RlZFwiKS52YWwoKTtcclxuICAgICAgICB2YXIgdXBkYXRlZFByb2R1Y3RDYXRlZ29yeSA9ICQoJyNlZGl0UHJvZHVjdENhdGVnb3J5JykuZmluZChcIjpzZWxlY3RlZFwiKS52YWwoKTtcclxuICAgICAgICB2YXIgdXBkYXRlZFByb2R1Y3REYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHVwZGF0ZWRQcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB1cGRhdGVkUHJvZHVjdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogdXBkYXRlZFByb2R1Y3RQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiB1cGRhdGVkUHJvZHVjdFF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcGxpZXI6IHVwZGF0ZWRQcm9kdWN0U3VwcGxpZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogdXBkYXRlZFByb2R1Y3RDYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX3VwZGF0ZV9wcm9kdWN0JyksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkUHJvZHVjdERhdGEpLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UsIHRleHRTdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0RGF0YVRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXQtcHJvZHVjdC1tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHN1Y2Nlc3MgcG9wLXVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0cltcInN1Y2Nlc3NcIl0oXCJVcGRhdGUgc3VjY2Vzc2Z1bGx5XCIsIFwiU3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgc3VjY2VzcyBzdGF0dXMgY29kZTonLCB4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIpIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VKU09OICYmIHhoci5yZXNwb25zZUpTT04uZXJyb3JzKSB7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHJbXCJlcnJvclwiXSh4aHIucmVzcG9uc2VKU09OLmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHJbXCJlcnJvclwiXSgnQW4gZXJyb3Igb2NjdXJyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmV4dHJhY3QtcGRmLWJ1dHRvbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKHRoaXMpLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdmFyIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ2V4cG9ydF90b19wZGYnLCB7IGlkOiBwcm9kdWN0SWQgfSk7XHJcblxyXG4gICAgICAgIC8vIE9wZW4gdGhlIFBERiBpbiBhIG5ldyB3aW5kb3cgb3IgdGFiXHJcbiAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyBsZW4pO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIDEpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmluZDtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xuXG52YXIgRklORCA9ICdmaW5kJztcbnZhciBTS0lQU19IT0xFUyA9IHRydWU7XG5cbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZpbmQgLS0gdGVzdGluZ1xuaWYgKEZJTkQgaW4gW10pIEFycmF5KDEpW0ZJTkRdKGZ1bmN0aW9uICgpIHsgU0tJUFNfSE9MRVMgPSBmYWxzZTsgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB9LCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcyhGSU5EKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIEZVTkNUSU9OX05BTUVfRVhJU1RTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5FWElTVFM7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lQnVpbHRJbkFjY2Vzc29yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3NvcicpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nKTtcbnZhciBuYW1lUkUgPSAvZnVuY3Rpb25cXGIoPzpcXHN8XFwvXFwqW1xcU1xcc10qP1xcKlxcL3xcXC9cXC9bXlxcblxccl0qW1xcblxccl0rKSooW15cXHMoL10qKS87XG52YXIgcmVnRXhwRXhlYyA9IHVuY3VycnlUaGlzKG5hbWVSRS5leGVjKTtcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICFGVU5DVElPTl9OQU1FX0VYSVNUUykge1xuICBkZWZpbmVCdWlsdEluQWNjZXNzb3IoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gcmVnRXhwRXhlYyhuYW1lUkUsIGZ1bmN0aW9uVG9TdHJpbmcodGhpcykpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjaGFuZ2VTdGF0dXNCdG4iLCJoaWRlIiwicHJvZHVjdERhdGFUYWJsZSIsIkRhdGFUYWJsZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInByb2Nlc3NpbmciLCJzZXJ2ZXJTaWRlIiwicGFnZUxlbmd0aCIsImxlbmd0aE1lbnUiLCJhdXRvV2lkdGgiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwiZGF0YXNyYyIsImQiLCJkcmF3Iiwic3RhcnQiLCJsZW5ndGgiLCJvcmRlciIsImNvbHVtbnMiLCJkYXRhIiwicmVuZGVyIiwidHlwZSIsInJvdyIsImlkIiwib3JkZXJhYmxlIiwibmFtZSIsInNlYXJjaGFibGUiLCJjb25jYXQiLCJpY29uQ2xhc3MiLCJvbiIsIm1vZGFsIiwibmV3UHJvZHVjdE5hbWUiLCJ2YWwiLCJuZXdQcm9kdWN0UHJpY2UiLCJuZXdQcm9kdWN0UXVhbnRpdHkiLCJuZXdQcm9kdWN0U3VwcGxpZXIiLCJmaW5kIiwibmV3UHJvZHVjdENhdGVnb3J5IiwibmV3UHJvZHVjdERhdGEiLCJwcmljZSIsInF1YW50aXR5Iiwic3VwcGxpZXIiLCJjYXRlZ29yeSIsImNvbnRlbnRUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInRleHRTdGF0dXMiLCJ4aHIiLCJzdGF0dXMiLCJyZWxvYWQiLCJ0b2FzdHIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXNwb25zZUpTT04iLCJlcnJvcnMiLCJpc0NoZWNrZWQiLCJwcm9wIiwicm93cyIsIm5vZGVzIiwidG9nZ2xlIiwic2VsZWN0ZWRQcm9kdWN0SWRzIiwiZWFjaCIsInB1c2giLCJwcm9kdWN0SWRzIiwibG9nIiwicHJvZHVjdElkIiwiZGF0YVJlc3VsdCIsInByb2R1Y3QiLCJ1cGRhdGVkUHJvZHVjdElkIiwidXBkYXRlZFByb2R1Y3ROYW1lIiwidXBkYXRlZFByb2R1Y3RQcmljZSIsInVwZGF0ZWRQcm9kdWN0UXVhbnRpdHkiLCJ1cGRhdGVkUHJvZHVjdFN1cHBsaWVyIiwidXBkYXRlZFByb2R1Y3RDYXRlZ29yeSIsInVwZGF0ZWRQcm9kdWN0RGF0YSIsIndpbmRvdyIsIm9wZW4iXSwic291cmNlUm9vdCI6IiJ9