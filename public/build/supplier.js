(self["webpackChunk"] = self["webpackChunk"] || []).push([["supplier"],{

/***/ "./assets/js/supplier.js":
/*!*******************************!*\
  !*** ./assets/js/supplier.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var toastr = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
$(document).ready(function () {
  var table = $('#supplier-datatable').DataTable({
    pageLength: 8,
    lengthMenu: [[8, 25, 50, -1], [8, 25, 50, 'All']],
    ajax: {
      url: Routing.generate('app_supplier_getlist')
    },
    order: [[0, 'asc']],
    columns: [{
      name: 's.id',
      data: 'id',
      orderable: true,
      searchable: true
    }, {
      name: 's.name',
      data: 'name',
      orderable: true,
      searchable: true
    }, {
      name: 's.address',
      data: 'address',
      orderable: true,
      searchable: true
    }, {
      name: 's.email',
      data: 'email',
      orderable: true,
      searchable: true
    }, {
      name: 's.phone',
      data: 'phone',
      orderable: true,
      searchable: true
    }, {
      name: 's.isActive',
      data: 'isActive',
      render: function render(data) {
        var iconClass = data ? 'fas fa-check text-success' : 'fas fa-times text-danger';
        return '<i class="' + iconClass + '"></i>';
      },
      orderable: false
    }, {
      data: 'id',
      render: function render(data, type, row) {
        var deactivateButton = "<button class=\"btn btn-".concat(row.status ? 'danger' : 'secondary', " action-button\" data-supplier-id=\"").concat(data, "\">Activate</button>");
        var editButton = "<button class=\"btn btn-primary edit-button\" data-supplier-id=\"".concat(data, "\">Update</button>");
        return "".concat(deactivateButton).concat(editButton);
      }
    }],
    dom: 'Bfrtip',
    autoWidth: false
  });
  $('body').on('click', '#add-supplier-button', function () {
    $('.sidebar').addClass('hide-sidebar');
  });
  $('#add-supplier-modal').on('click', '#add-supplier-btn', function () {
    var newSupplierName = $("#newSupplierName").val();
    var newSupplierAddress = $("#newSupplierAddress").val();
    var newSupplierEmail = $("#newSupplierEmail").val();
    var newSupplierPhone = $("#newSupplierPhone").val();
    var newSupplierData = {
      name: newSupplierName,
      address: newSupplierAddress,
      email: newSupplierEmail,
      phone: newSupplierPhone
    };
    $.ajax({
      url: Routing.generate('app_new_supplier'),
      type: "POST",
      contentType: 'application/json',
      data: JSON.stringify(newSupplierData),
      success: function success(response, textStatus, xhr) {
        if (xhr.status === 200) {
          table.ajax.reload(null, false);
          $('#add-supplier-modal').modal('hide');
          $('#newSupplierName').val("");
          $('#newSupplierAddress').val("");
          $('#newSupplierEmail').val("");
          $('#newSupplierPhone').val("");
          // Show success pop-up
          toastr["success"]("New supplier Added successfully", "Success");
        } else {
          console.error('Unexpected success status code:', xhr.status);
        }
      },
      error: function error(xhr) {
        // Handle errors
        if (xhr.responseJSON && xhr.responseJSON.errors) {
          // Display validation errors to the supplier
          toastr["error"](xhr.responseJSON.errors);
        } else {
          // Handle other errors
          toastr["error"]('An error occurred');
        }
      }
    });
  });
  $(document).on("click", ".close", function () {
    $("#add-supplier-modal").hide();
  });
  $('body').on('click', '.edit-button', function () {
    var supplierId = $(this).data('supplier-id');
    $.ajax({
      url: Routing.generate('app_get_supplier', {
        id: supplierId
      }),
      type: "GET",
      success: function success(dataResult) {
        $('#sId').val(dataResult.supplier.id);
        $('#editSupplierName').val(dataResult.supplier.name);
        $('#editSupplierAddress').val(dataResult.supplier.address);
        $('#editSupplierEmail').val(dataResult.supplier.email);
        $('#editSupplierPhone').val(dataResult.supplier.phone);
        $('#edit-supplier-modal').modal('show');
      }
    });
  });
  $('.modal').on('click', '#edit-supplier-btn', function () {
    var updatedSupplierId = $("#sId").val();
    var updatedSupplierName = $("#editSupplierName").val();
    var updatedSupplierAddress = $('#editSupplierAddress').val();
    var updatedSupplierEmail = $("#editSupplierEmail").val();
    var updatedSupplierPhone = $('#editSupplierPhone').val();
    var updatedSupplierData = {
      id: updatedSupplierId,
      name: updatedSupplierName,
      address: updatedSupplierAddress,
      email: updatedSupplierEmail,
      phone: updatedSupplierPhone
    };
    $.ajax({
      url: Routing.generate('app_update_supplier'),
      type: "POST",
      contentType: 'application/json',
      data: JSON.stringify(updatedSupplierData),
      success: function success(response, textStatus, xhr) {
        console.log(response);
        if (xhr.status === 200) {
          table.ajax.reload(null, false);
          $('#edit-supplier-modal').modal('hide');
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
          // Display validation errors to the Supplier
          toastr["error"]('Validation errors:\n' + xhr.responseJSON.errors.join('\n'));
        } else {
          // Handle other errors
          toastr["error"]('An error occurred');
        }
      }
    });
  });
  $('body').on('click', '.action-button', function () {
    var supplierId = $(this).data('supplier-id');
    $.ajax({
      url: Routing.generate('app_update_supplier_status', {
        id: supplierId
      }),
      type: "GET",
      success: function success(response, textStatus, xhr) {
        console.log(response);
        if (xhr.status === 200) {
          table.ajax.reload(null, false);
          // Show success pop-up
          toastr["success"]("Status Update successfully", "Success");
        } else {
          console.error('Unexpected success status code:', xhr.status);
        }
      },
      error: function error(xhr, status, _error) {
        console.error('Status Update failed:', _error);
        if (xhr.status >= 400 && xhr.status < 500) {
          alert('Status Update failed: Client error');
        } else if (xhr.status >= 500) {
          alert('Status Update failed: Server error');
        }
      }
    });
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

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in-accessor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in-accessor.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "./node_modules/core-js/internals/make-built-in.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty.f(target, name, descriptor);
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

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_toastr_toastr_js-node_modules_core-js_internals_array-species-create_js--4bb413"], () => (__webpack_exec__("./assets/js/supplier.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBb0M7QUFDOUQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N1cHBsaWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLm5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB2YXIgdGFibGUgPSAkKCcjc3VwcGxpZXItZGF0YXRhYmxlJykuRGF0YVRhYmxlKHtcclxuICAgICAgICBwYWdlTGVuZ3RoOiA4LFxyXG4gICAgICAgIGxlbmd0aE1lbnU6IFtcclxuICAgICAgICAgICAgWzgsIDI1LCA1MCwgLTFdLFxyXG4gICAgICAgICAgICBbOCwgMjUsIDUwLCAnQWxsJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGFqYXg6IHtcclxuICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfc3VwcGxpZXJfZ2V0bGlzdCcpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3JkZXI6IFtbMCwgJ2FzYyddXSxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgIHtuYW1lOiAncy5pZCcsIGRhdGE6ICdpZCcsIG9yZGVyYWJsZTogdHJ1ZSAsIHNlYXJjaGFibGU6IHRydWV9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ3MubmFtZScsIGRhdGE6ICduYW1lJywgb3JkZXJhYmxlOiB0cnVlICwgc2VhcmNoYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncy5hZGRyZXNzJywgZGF0YTogJ2FkZHJlc3MnLCBvcmRlcmFibGU6IHRydWUgLCBzZWFyY2hhYmxlOiB0cnVlfSxcclxuICAgICAgICAgICAge25hbWU6ICdzLmVtYWlsJywgZGF0YTogJ2VtYWlsJywgb3JkZXJhYmxlOiB0cnVlICwgc2VhcmNoYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAncy5waG9uZScsIGRhdGE6ICdwaG9uZScsIG9yZGVyYWJsZTogdHJ1ZSAsIHNlYXJjaGFibGU6IHRydWV9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAncy5pc0FjdGl2ZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAnaXNBY3RpdmUnLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGljb25DbGFzcyA9IGRhdGEgPyAnZmFzIGZhLWNoZWNrIHRleHQtc3VjY2VzcycgOiAnZmFzIGZhLXRpbWVzIHRleHQtZGFuZ2VyJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxpIGNsYXNzPVwiJyArIGljb25DbGFzcyArICdcIj48L2k+JztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiAnaWQnLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbihkYXRhLCB0eXBlLCByb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVhY3RpdmF0ZUJ1dHRvbiA9IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0ke3Jvdy5zdGF0dXMgPyAnZGFuZ2VyJyA6ICdzZWNvbmRhcnknfSBhY3Rpb24tYnV0dG9uXCIgZGF0YS1zdXBwbGllci1pZD1cIiR7ZGF0YX1cIj5BY3RpdmF0ZTwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVkaXRCdXR0b24gPSBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBlZGl0LWJ1dHRvblwiIGRhdGEtc3VwcGxpZXItaWQ9XCIke2RhdGF9XCI+VXBkYXRlPC9idXR0b24+YDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7ZGVhY3RpdmF0ZUJ1dHRvbn0ke2VkaXRCdXR0b259YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRvbTogJ0JmcnRpcCcsXHJcbiAgICAgICAgYXV0b1dpZHRoOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2FkZC1zdXBwbGllci1idXR0b24nLCBmdW5jdGlvbigpIHsgXHJcbiAgICAgICAgICAgICQoJy5zaWRlYmFyJykuYWRkQ2xhc3MoJ2hpZGUtc2lkZWJhcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2FkZC1zdXBwbGllci1tb2RhbCcpLm9uKCdjbGljaycsICcjYWRkLXN1cHBsaWVyLWJ0bicsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG5ld1N1cHBsaWVyTmFtZSA9ICQoXCIjbmV3U3VwcGxpZXJOYW1lXCIpLnZhbCgpO1xyXG4gICAgdmFyIG5ld1N1cHBsaWVyQWRkcmVzcyA9ICQoXCIjbmV3U3VwcGxpZXJBZGRyZXNzXCIpLnZhbCgpO1xyXG4gICAgdmFyIG5ld1N1cHBsaWVyRW1haWwgPSAkKFwiI25ld1N1cHBsaWVyRW1haWxcIikudmFsKCk7XHJcbiAgICB2YXIgbmV3U3VwcGxpZXJQaG9uZSA9ICQoXCIjbmV3U3VwcGxpZXJQaG9uZVwiKS52YWwoKTtcclxuXHJcbiAgICB2YXIgbmV3U3VwcGxpZXJEYXRhID0ge1xyXG4gICAgICAgIG5hbWU6IG5ld1N1cHBsaWVyTmFtZSxcclxuICAgICAgICBhZGRyZXNzOiBuZXdTdXBwbGllckFkZHJlc3MsXHJcbiAgICAgICAgZW1haWw6IG5ld1N1cHBsaWVyRW1haWwsXHJcbiAgICAgICAgcGhvbmU6IG5ld1N1cHBsaWVyUGhvbmUsXHJcbiAgICB9O1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICB1cmw6ICBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfbmV3X3N1cHBsaWVyJyksXHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShuZXdTdXBwbGllckRhdGEpLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UsIHRleHRTdGF0dXMsIHhocikge1xyXG5cclxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgJCgnI2FkZC1zdXBwbGllci1tb2RhbCcpLm1vZGFsKCdoaWRlJyk7IFxyXG4gICAgICAgICAgICAkKCcjbmV3U3VwcGxpZXJOYW1lJykudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAkKCcjbmV3U3VwcGxpZXJBZGRyZXNzJykudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAkKCcjbmV3U3VwcGxpZXJFbWFpbCcpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgJCgnI25ld1N1cHBsaWVyUGhvbmUnKS52YWwoXCJcIik7XHJcbiAgICAgICAgICAgIC8vIFNob3cgc3VjY2VzcyBwb3AtdXBcclxuICAgICAgICAgICAgdG9hc3RyW1wic3VjY2Vzc1wiXShcIk5ldyBzdXBwbGllciBBZGRlZCBzdWNjZXNzZnVsbHlcIiwgXCJTdWNjZXNzXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBzdWNjZXNzIHN0YXR1cyBjb2RlOicsIHhoci5zdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24gKHhocikge1xyXG4gICAgLy8gSGFuZGxlIGVycm9yc1xyXG4gICAgaWYgKHhoci5yZXNwb25zZUpTT04gJiYgeGhyLnJlc3BvbnNlSlNPTi5lcnJvcnMpIHtcclxuICAgICAgICAvLyBEaXNwbGF5IHZhbGlkYXRpb24gZXJyb3JzIHRvIHRoZSBzdXBwbGllclxyXG4gICAgICAgIHRvYXN0cltcImVycm9yXCJdKHhoci5yZXNwb25zZUpTT04uZXJyb3JzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIG90aGVyIGVycm9yc1xyXG4gICAgICAgIHRvYXN0cltcImVycm9yXCJdKCdBbiBlcnJvciBvY2N1cnJlZCcpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgfSk7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5jbG9zZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKFwiI2FkZC1zdXBwbGllci1tb2RhbFwiKS5oaWRlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5lZGl0LWJ1dHRvbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzdXBwbGllcklkID0gJCh0aGlzKS5kYXRhKCdzdXBwbGllci1pZCcpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZ2V0X3N1cHBsaWVyJywge2lkOnN1cHBsaWVySWR9KSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGFSZXN1bHQpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3NJZCcpLnZhbChkYXRhUmVzdWx0LnN1cHBsaWVyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXRTdXBwbGllck5hbWUnKS52YWwoZGF0YVJlc3VsdC5zdXBwbGllci5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXRTdXBwbGllckFkZHJlc3MnKS52YWwoZGF0YVJlc3VsdC5zdXBwbGllci5hZGRyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2VkaXRTdXBwbGllckVtYWlsJykudmFsKGRhdGFSZXN1bHQuc3VwcGxpZXIuZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdFN1cHBsaWVyUGhvbmUnKS52YWwoZGF0YVJlc3VsdC5zdXBwbGllci5waG9uZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1zdXBwbGllci1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5tb2RhbCcpLm9uKCdjbGljaycsICcjZWRpdC1zdXBwbGllci1idG4nLCBmdW5jdGlvbigpIHtcclxuICAgIFxyXG4gICAgICAgIHZhciB1cGRhdGVkU3VwcGxpZXJJZCA9ICQoXCIjc0lkXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciB1cGRhdGVkU3VwcGxpZXJOYW1lID0gJChcIiNlZGl0U3VwcGxpZXJOYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciB1cGRhdGVkU3VwcGxpZXJBZGRyZXNzID0gJCgnI2VkaXRTdXBwbGllckFkZHJlc3MnKS52YWwoKTtcclxuICAgICAgICB2YXIgdXBkYXRlZFN1cHBsaWVyRW1haWwgPSAkKFwiI2VkaXRTdXBwbGllckVtYWlsXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciB1cGRhdGVkU3VwcGxpZXJQaG9uZSA9ICQoJyNlZGl0U3VwcGxpZXJQaG9uZScpLnZhbCgpO1xyXG5cclxuICAgICAgICB2YXIgdXBkYXRlZFN1cHBsaWVyRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1cGRhdGVkU3VwcGxpZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHVwZGF0ZWRTdXBwbGllck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiB1cGRhdGVkU3VwcGxpZXJBZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVwZGF0ZWRTdXBwbGllckVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmU6IHVwZGF0ZWRTdXBwbGllclBob25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF91cGRhdGVfc3VwcGxpZXInKSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRTdXBwbGllckRhdGEpLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UsIHRleHRTdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZChudWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0LXN1cHBsaWVyLW1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBzdWNjZXNzIHBvcC11cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHJbXCJzdWNjZXNzXCJdKFwiVXBkYXRlIHN1Y2Nlc3NmdWxseVwiLCBcIlN1Y2Nlc3NcIilcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIHN1Y2Nlc3Mgc3RhdHVzIGNvZGU6JywgeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlc3BvbnNlSlNPTiAmJiB4aHIucmVzcG9uc2VKU09OLmVycm9ycykgeyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyW1wiZXJyb3JcIl0oeGhyLnJlc3BvbnNlSlNPTi5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc3BsYXkgdmFsaWRhdGlvbiBlcnJvcnMgdG8gdGhlIFN1cHBsaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyW1wiZXJyb3JcIl0oJ1ZhbGlkYXRpb24gZXJyb3JzOlxcbicgKyB4aHIucmVzcG9uc2VKU09OLmVycm9ycy5qb2luKCdcXG4nKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnNcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHJbXCJlcnJvclwiXSgnQW4gZXJyb3Igb2NjdXJyZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmFjdGlvbi1idXR0b24nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc3VwcGxpZXJJZCA9ICQodGhpcykuZGF0YSgnc3VwcGxpZXItaWQnKTtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogUm91dGluZy5nZW5lcmF0ZSgnYXBwX3VwZGF0ZV9zdXBwbGllcl9zdGF0dXMnLHtpZDpzdXBwbGllcklkfSksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSwgdGV4dFN0YXR1cywgeGhyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBzdWNjZXNzIHBvcC11cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHJbXCJzdWNjZXNzXCJdKFwiU3RhdHVzIFVwZGF0ZSBzdWNjZXNzZnVsbHlcIiwgXCJTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgc3VjY2VzcyBzdGF0dXMgY29kZTonLCB4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3RhdHVzIFVwZGF0ZSBmYWlsZWQ6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDQwMCAmJiB4aHIuc3RhdHVzIDwgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnU3RhdHVzIFVwZGF0ZSBmYWlsZWQ6IENsaWVudCBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnN0YXR1cyA+PSA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTdGF0dXMgVXBkYXRlIGZhaWxlZDogU2VydmVyIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxufSk7XHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHJldHVybiAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3IuZ2V0LCBuYW1lLCB7IGdldHRlcjogdHJ1ZSB9KTtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLnNldCwgbmFtZSwgeyBzZXR0ZXI6IHRydWUgfSk7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eS5mKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyBsZW4pO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIDEpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9PSBPYmplY3Q7XG52YXIgRk9SQ0VEID0gRVMzX1NUUklOR1MgfHwgIWFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbih0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBGVU5DVElPTl9OQU1FX0VYSVNUUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuRVhJU1RTO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZyk7XG52YXIgbmFtZVJFID0gL2Z1bmN0aW9uXFxiKD86XFxzfFxcL1xcKltcXFNcXHNdKj9cXCpcXC98XFwvXFwvW15cXG5cXHJdKltcXG5cXHJdKykqKFteXFxzKC9dKikvO1xudmFyIHJlZ0V4cEV4ZWMgPSB1bmN1cnJ5VGhpcyhuYW1lUkUuZXhlYyk7XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhRlVOQ1RJT05fTkFNRV9FWElTVFMpIHtcbiAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHJlZ0V4cEV4ZWMobmFtZVJFLCBmdW5jdGlvblRvU3RyaW5nKHRoaXMpKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidGFibGUiLCJEYXRhVGFibGUiLCJwYWdlTGVuZ3RoIiwibGVuZ3RoTWVudSIsImFqYXgiLCJ1cmwiLCJSb3V0aW5nIiwiZ2VuZXJhdGUiLCJvcmRlciIsImNvbHVtbnMiLCJuYW1lIiwiZGF0YSIsIm9yZGVyYWJsZSIsInNlYXJjaGFibGUiLCJyZW5kZXIiLCJpY29uQ2xhc3MiLCJ0eXBlIiwicm93IiwiZGVhY3RpdmF0ZUJ1dHRvbiIsImNvbmNhdCIsInN0YXR1cyIsImVkaXRCdXR0b24iLCJkb20iLCJhdXRvV2lkdGgiLCJvbiIsImFkZENsYXNzIiwibmV3U3VwcGxpZXJOYW1lIiwidmFsIiwibmV3U3VwcGxpZXJBZGRyZXNzIiwibmV3U3VwcGxpZXJFbWFpbCIsIm5ld1N1cHBsaWVyUGhvbmUiLCJuZXdTdXBwbGllckRhdGEiLCJhZGRyZXNzIiwiZW1haWwiLCJwaG9uZSIsImNvbnRlbnRUeXBlIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInRleHRTdGF0dXMiLCJ4aHIiLCJyZWxvYWQiLCJtb2RhbCIsInRvYXN0ciIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlSlNPTiIsImVycm9ycyIsImhpZGUiLCJzdXBwbGllcklkIiwiaWQiLCJkYXRhUmVzdWx0Iiwic3VwcGxpZXIiLCJ1cGRhdGVkU3VwcGxpZXJJZCIsInVwZGF0ZWRTdXBwbGllck5hbWUiLCJ1cGRhdGVkU3VwcGxpZXJBZGRyZXNzIiwidXBkYXRlZFN1cHBsaWVyRW1haWwiLCJ1cGRhdGVkU3VwcGxpZXJQaG9uZSIsInVwZGF0ZWRTdXBwbGllckRhdGEiLCJsb2ciLCJqb2luIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9