(self["webpackChunk"] = self["webpackChunk"] || []).push([["category"],{

/***/ "./assets/js/category.js":
/*!*******************************!*\
  !*** ./assets/js/category.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* provided dependency */ var toastr = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
$(document).ready(function () {
  var table = $('#category-datatable').DataTable({
    pageLength: 8,
    lengthMenu: [[8, 25, 50, -1], [8, 25, 50, 'All']],
    ajax: {
      url: Routing.generate('app_category_getlist')
    },
    order: [[0, 'asc']],
    columns: [{
      name: 'c.id',
      data: 'id',
      orderable: true,
      searchable: true
    }, {
      name: 'c.name',
      data: 'name',
      orderable: true,
      searchable: true
    }, {
      name: 'c.description',
      data: 'description',
      orderable: true,
      searchable: true
    }, {
      name: 'c.code',
      data: 'code',
      orderable: true,
      searchable: true
    }, {
      name: 'c.isActive',
      data: 'isActive',
      render: function render(data) {
        var iconClass = data ? 'fas fa-check text-success' : 'fas fa-times text-danger';
        return '<i class="' + iconClass + '"></i>';
      },
      orderable: false
    }, {
      data: 'id',
      render: function render(data, type, row) {
        var deactivateButton = "<button class=\"btn btn-".concat(row.status ? 'danger' : 'secondary', " action-button\" data-category-id=\"").concat(data, "\">Activate</button>");
        var editButton = "<button class=\"btn btn-primary edit-button\" data-category-id=\"".concat(data, "\">Update</button>");
        return "".concat(deactivateButton, " ").concat(editButton);
      }
    }],
    dom: 'Bfrtip'
  });
  $('body').on('click', '#add-category-button', function () {
    $('#add-category-modal').modal('show');
  });
  $('#add-category-modal').on('click', '#add-category-btn', function () {
    var newCategoryName = $("#newCategoryName").val();
    var newCategoryDescription = $("#newCategoryDescription").val();
    var newCategoryCode = $("#newCategoryCode").val();
    var newCategoryData = {
      name: newCategoryName,
      description: newCategoryDescription,
      code: newCategoryCode
    };
    $.ajax({
      url: Routing.generate('app_new_category'),
      type: "POST",
      contentType: 'application/json',
      data: JSON.stringify(newCategoryData),
      success: function success(response, textStatus, xhr) {
        if (xhr.status === 200) {
          table.ajax.reload(null, false);
          $('#add-category-modal').modal('hide');
          $('#newCategoryName').val("");
          $('#newCategoryDescription').val("");
          $('#newCategoryCode').val("");
          // Show success pop-up
          toastr["success"]("New category Added successfully", "Success");
        } else {
          console.error('Unexpected success status code:', xhr.status);
        }
      },
      error: function error(xhr) {
        // Handle errors
        if (xhr.responseJSON && xhr.responseJSON.errors) {
          // Display validation errors to the Category
          toastr["error"](xhr.responseJSON.errors);
        } else {
          // Handle other errors
          toastr["error"]('An error occurred');
        }
      }
    });
  });
  $('body').on('click', '.edit-button', function () {
    var categoryId = $(this).data('category-id');
    $.ajax({
      url: Routing.generate('app_get_category', {
        id: categoryId
      }),
      type: "GET",
      success: function success(dataResult) {
        $('#cId').val(dataResult.category.id);
        $('#editCategoryName').val(dataResult.category.name);
        $('#editCategorydescription').val(dataResult.category.description);
        $('#editCategoryCode').val(dataResult.category.code);
        $('#edit-category-modal').modal('show');
      }
    });
  });
  $('.modal').on('click', '#edit-category-btn', function () {
    var updatedCategoryId = $("#cId").val();
    var updatedCategoryName = $("#editCategoryName").val();
    var updatedCategorydescription = $('#editCategorydescription').val();
    var updatedCategoryCode = $("#editCategoryCode").val();
    var updatedCategoryData = {
      id: updatedCategoryId,
      name: updatedCategoryName,
      description: updatedCategorydescription,
      code: updatedCategoryCode
    };
    $.ajax({
      url: Routing.generate('app_update_category'),
      type: "POST",
      contentType: 'application/json',
      data: JSON.stringify(updatedCategoryData),
      success: function success(response, textStatus, xhr) {
        console.log(response);
        if (xhr.status === 200) {
          table.ajax.reload(null, false);
          $('#edit-category-modal').modal('hide');
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
          // Display validation errors to the category
          toastr["error"]('Validation errors:\n' + xhr.responseJSON.errors.join('\n'));
        } else {
          // Handle other errors
          toastr["error"]('An error occurred');
        }
      }
    });
  });
  $('body').on('click', '.action-button', function () {
    var categoryId = $(this).data('category-id');
    $.ajax({
      url: Routing.generate('app_update_category_status', {
        id: categoryId
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_toastr_toastr_js-node_modules_core-js_internals_array-species-create_js--4bb413","vendors-node_modules_core-js_modules_es_symbol_description_js-node_modules_core-js_modules_es-df0961"], () => (__webpack_exec__("./assets/js/category.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixtQkFBTyxDQUFDLHVHQUFxQzs7QUFFdkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBOEM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEJZO0FBQ2Isa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELDJCQUEyQixtSEFBNEM7QUFDdkUsa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELDRCQUE0QixtQkFBTyxDQUFDLDJHQUF1Qzs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgIHZhciB0YWJsZSA9ICQoJyNjYXRlZ29yeS1kYXRhdGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIHBhZ2VMZW5ndGg6IDgsXHJcbiAgICAgICAgbGVuZ3RoTWVudTogW1xyXG4gICAgICAgICAgICBbOCwgMjUsIDUwLCAtMV0sXHJcbiAgICAgICAgICAgIFs4LCAyNSwgNTAsICdBbGwnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYWpheDoge1xyXG4gICAgICAgICAgICB1cmw6IFJvdXRpbmcuZ2VuZXJhdGUoJ2FwcF9jYXRlZ29yeV9nZXRsaXN0JyksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcmRlcjogW1swLCAnYXNjJ11dLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAge25hbWU6ICdjLmlkJywgZGF0YTogJ2lkJywgb3JkZXJhYmxlOiB0cnVlICwgc2VhcmNoYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnYy5uYW1lJywgZGF0YTogJ25hbWUnLCBvcmRlcmFibGU6IHRydWUgLCBzZWFyY2hhYmxlOiB0cnVlfSxcclxuICAgICAgICAgICAge25hbWU6ICdjLmRlc2NyaXB0aW9uJywgZGF0YTogJ2Rlc2NyaXB0aW9uJywgb3JkZXJhYmxlOiB0cnVlICwgc2VhcmNoYWJsZTogdHJ1ZX0sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnYy5jb2RlJywgZGF0YTogJ2NvZGUnLCBvcmRlcmFibGU6IHRydWUgLCBzZWFyY2hhYmxlOiB0cnVlfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2MuaXNBY3RpdmUnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogJ2lzQWN0aXZlJyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpY29uQ2xhc3MgPSBkYXRhID8gJ2ZhcyBmYS1jaGVjayB0ZXh0LXN1Y2Nlc3MnIDogJ2ZhcyBmYS10aW1lcyB0ZXh0LWRhbmdlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8aSBjbGFzcz1cIicgKyBpY29uQ2xhc3MgKyAnXCI+PC9pPic7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3JkZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogJ2lkJyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24oZGF0YSwgdHlwZSwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlYWN0aXZhdGVCdXR0b24gPSBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tJHtyb3cuc3RhdHVzID8gJ2RhbmdlcicgOiAnc2Vjb25kYXJ5J30gYWN0aW9uLWJ1dHRvblwiIGRhdGEtY2F0ZWdvcnktaWQ9XCIke2RhdGF9XCI+QWN0aXZhdGU8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlZGl0QnV0dG9uID0gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgZWRpdC1idXR0b25cIiBkYXRhLWNhdGVnb3J5LWlkPVwiJHtkYXRhfVwiPlVwZGF0ZTwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2RlYWN0aXZhdGVCdXR0b259ICR7ZWRpdEJ1dHRvbn1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBkb206ICdCZnJ0aXAnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2FkZC1jYXRlZ29yeS1idXR0b24nLCBmdW5jdGlvbigpIHsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgJCgnI2FkZC1jYXRlZ29yeS1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjYWRkLWNhdGVnb3J5LW1vZGFsJykub24oJ2NsaWNrJywgJyNhZGQtY2F0ZWdvcnktYnRuJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbmV3Q2F0ZWdvcnlOYW1lID0gJChcIiNuZXdDYXRlZ29yeU5hbWVcIikudmFsKCk7XHJcbiAgICB2YXIgbmV3Q2F0ZWdvcnlEZXNjcmlwdGlvbiA9ICQoXCIjbmV3Q2F0ZWdvcnlEZXNjcmlwdGlvblwiKS52YWwoKTtcclxuICAgIHZhciBuZXdDYXRlZ29yeUNvZGUgPSAkKFwiI25ld0NhdGVnb3J5Q29kZVwiKS52YWwoKTtcclxuXHJcbiAgICB2YXIgbmV3Q2F0ZWdvcnlEYXRhID0ge1xyXG4gICAgICAgIG5hbWU6IG5ld0NhdGVnb3J5TmFtZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogbmV3Q2F0ZWdvcnlEZXNjcmlwdGlvbixcclxuICAgICAgICBjb2RlOiBuZXdDYXRlZ29yeUNvZGUsXHJcbiAgICB9O1xyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICB1cmw6ICBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfbmV3X2NhdGVnb3J5JyksXHJcbiAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShuZXdDYXRlZ29yeURhdGEpLFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UsIHRleHRTdGF0dXMsIHhocikge1xyXG5cclxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKG51bGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgJCgnI2FkZC1jYXRlZ29yeS1tb2RhbCcpLm1vZGFsKCdoaWRlJyk7IFxyXG4gICAgICAgICAgICAkKCcjbmV3Q2F0ZWdvcnlOYW1lJykudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAkKCcjbmV3Q2F0ZWdvcnlEZXNjcmlwdGlvbicpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgJCgnI25ld0NhdGVnb3J5Q29kZScpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgLy8gU2hvdyBzdWNjZXNzIHBvcC11cFxyXG4gICAgICAgICAgICB0b2FzdHJbXCJzdWNjZXNzXCJdKFwiTmV3IGNhdGVnb3J5IEFkZGVkIHN1Y2Nlc3NmdWxseVwiLCBcIlN1Y2Nlc3NcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIHN1Y2Nlc3Mgc3RhdHVzIGNvZGU6JywgeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICBpZiAoeGhyLnJlc3BvbnNlSlNPTiAmJiB4aHIucmVzcG9uc2VKU09OLmVycm9ycykge1xyXG4gICAgICAgIC8vIERpc3BsYXkgdmFsaWRhdGlvbiBlcnJvcnMgdG8gdGhlIENhdGVnb3J5XHJcbiAgICAgICAgdG9hc3RyW1wiZXJyb3JcIl0oeGhyLnJlc3BvbnNlSlNPTi5lcnJvcnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBIYW5kbGUgb3RoZXIgZXJyb3JzXHJcbiAgICAgICAgdG9hc3RyW1wiZXJyb3JcIl0oJ0FuIGVycm9yIG9jY3VycmVkJyk7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICB9KTsgICAgICAgICAgICAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5lZGl0LWJ1dHRvbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gJCh0aGlzKS5kYXRhKCdjYXRlZ29yeS1pZCcpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfZ2V0X2NhdGVnb3J5Jywge2lkOmNhdGVnb3J5SWR9KSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGFSZXN1bHQpeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjY0lkJykudmFsKGRhdGFSZXN1bHQuY2F0ZWdvcnkuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdENhdGVnb3J5TmFtZScpLnZhbChkYXRhUmVzdWx0LmNhdGVnb3J5Lm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdENhdGVnb3J5ZGVzY3JpcHRpb24nKS52YWwoZGF0YVJlc3VsdC5jYXRlZ29yeS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNlZGl0Q2F0ZWdvcnlDb2RlJykudmFsKGRhdGFSZXN1bHQuY2F0ZWdvcnkuY29kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1jYXRlZ29yeS1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5tb2RhbCcpLm9uKCdjbGljaycsICcjZWRpdC1jYXRlZ29yeS1idG4nLCBmdW5jdGlvbigpIHtcclxuICAgIFxyXG4gICAgICAgIHZhciB1cGRhdGVkQ2F0ZWdvcnlJZCA9ICQoXCIjY0lkXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciB1cGRhdGVkQ2F0ZWdvcnlOYW1lID0gJChcIiNlZGl0Q2F0ZWdvcnlOYW1lXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciB1cGRhdGVkQ2F0ZWdvcnlkZXNjcmlwdGlvbiA9ICQoJyNlZGl0Q2F0ZWdvcnlkZXNjcmlwdGlvbicpLnZhbCgpO1xyXG4gICAgICAgIHZhciB1cGRhdGVkQ2F0ZWdvcnlDb2RlID0gJChcIiNlZGl0Q2F0ZWdvcnlDb2RlXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICB2YXIgdXBkYXRlZENhdGVnb3J5RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1cGRhdGVkQ2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHVwZGF0ZWRDYXRlZ29yeU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdXBkYXRlZENhdGVnb3J5ZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiB1cGRhdGVkQ2F0ZWdvcnlDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfdXBkYXRlX2NhdGVnb3J5JyksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkQ2F0ZWdvcnlEYXRhKSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlLCB0ZXh0U3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkgeyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZWRpdC1jYXRlZ29yeS1tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgc3VjY2VzcyBwb3AtdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyW1wic3VjY2Vzc1wiXShcIlVwZGF0ZSBzdWNjZXNzZnVsbHlcIiwgXCJTdWNjZXNzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBzdWNjZXNzIHN0YXR1cyBjb2RlOicsIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZXNwb25zZUpTT04gJiYgeGhyLnJlc3BvbnNlSlNPTi5lcnJvcnMpIHsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0cltcImVycm9yXCJdKHhoci5yZXNwb25zZUpTT04uZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IHZhbGlkYXRpb24gZXJyb3JzIHRvIHRoZSBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0cltcImVycm9yXCJdKCdWYWxpZGF0aW9uIGVycm9yczpcXG4nICsgeGhyLnJlc3BvbnNlSlNPTi5lcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgb3RoZXIgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyW1wiZXJyb3JcIl0oJ0FuIGVycm9yIG9jY3VycmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuYWN0aW9uLWJ1dHRvbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjYXRlZ29yeUlkID0gJCh0aGlzKS5kYXRhKCdjYXRlZ29yeS1pZCcpO1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdhcHBfdXBkYXRlX2NhdGVnb3J5X3N0YXR1cycse2lkOmNhdGVnb3J5SWR9KSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlLCB0ZXh0U3RhdHVzLCB4aHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQobnVsbCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IHN1Y2Nlc3MgcG9wLXVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0cltcInN1Y2Nlc3NcIl0oXCJTdGF0dXMgVXBkYXRlIHN1Y2Nlc3NmdWxseVwiLCBcIlN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBzdWNjZXNzIHN0YXR1cyBjb2RlOicsIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTdGF0dXMgVXBkYXRlIGZhaWxlZDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gNDAwICYmIHhoci5zdGF0dXMgPCA1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTdGF0dXMgVXBkYXRlIGZhaWxlZDogQ2xpZW50IGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIuc3RhdHVzID49IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1N0YXR1cyBVcGRhdGUgZmFpbGVkOiBTZXJ2ZXIgZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoRSk7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgbGVuKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyAxKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPT0gT2JqZWN0O1xudmFyIEZPUkNFRCA9IEVTM19TVFJJTkdTIHx8ICFhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4odG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgRlVOQ1RJT05fTkFNRV9FWElTVFMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkVYSVNUUztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmcpO1xudmFyIG5hbWVSRSA9IC9mdW5jdGlvblxcYig/Olxcc3xcXC9cXCpbXFxTXFxzXSo/XFwqXFwvfFxcL1xcL1teXFxuXFxyXSpbXFxuXFxyXSspKihbXlxccygvXSopLztcbnZhciByZWdFeHBFeGVjID0gdW5jdXJyeVRoaXMobmFtZVJFLmV4ZWMpO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIUZVTkNUSU9OX05BTUVfRVhJU1RTKSB7XG4gIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiByZWdFeHBFeGVjKG5hbWVSRSwgZnVuY3Rpb25Ub1N0cmluZyh0aGlzKSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInRhYmxlIiwiRGF0YVRhYmxlIiwicGFnZUxlbmd0aCIsImxlbmd0aE1lbnUiLCJhamF4IiwidXJsIiwiUm91dGluZyIsImdlbmVyYXRlIiwib3JkZXIiLCJjb2x1bW5zIiwibmFtZSIsImRhdGEiLCJvcmRlcmFibGUiLCJzZWFyY2hhYmxlIiwicmVuZGVyIiwiaWNvbkNsYXNzIiwidHlwZSIsInJvdyIsImRlYWN0aXZhdGVCdXR0b24iLCJjb25jYXQiLCJzdGF0dXMiLCJlZGl0QnV0dG9uIiwiZG9tIiwib24iLCJtb2RhbCIsIm5ld0NhdGVnb3J5TmFtZSIsInZhbCIsIm5ld0NhdGVnb3J5RGVzY3JpcHRpb24iLCJuZXdDYXRlZ29yeUNvZGUiLCJuZXdDYXRlZ29yeURhdGEiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJjb250ZW50VHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJ0ZXh0U3RhdHVzIiwieGhyIiwicmVsb2FkIiwidG9hc3RyIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2VKU09OIiwiZXJyb3JzIiwiY2F0ZWdvcnlJZCIsImlkIiwiZGF0YVJlc3VsdCIsImNhdGVnb3J5IiwidXBkYXRlZENhdGVnb3J5SWQiLCJ1cGRhdGVkQ2F0ZWdvcnlOYW1lIiwidXBkYXRlZENhdGVnb3J5ZGVzY3JpcHRpb24iLCJ1cGRhdGVkQ2F0ZWdvcnlDb2RlIiwidXBkYXRlZENhdGVnb3J5RGF0YSIsImxvZyIsImpvaW4iLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=