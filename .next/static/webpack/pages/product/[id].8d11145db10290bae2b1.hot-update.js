self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./utils/validation.js":
/*!*****************************!*\
  !*** ./utils/validation.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libphonenumber-js */ "./node_modules/libphonenumber-js/index.es6.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\nasir\\Desktop\\Bimed\\main-frontend-dev\\utils\\validation.js",
    _this = undefined;




var useValidate = function useValidate(phoneCountry) {
  var displayInputError = function displayInputError(errors, inputName) {
    if (errors.some(function (err) {
      return err.path === inputName;
    })) {
      var _errors$find;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "error-text",
        children: (_errors$find = errors.find(function (err) {
          return err.path === inputName;
        })) === null || _errors$find === void 0 ? void 0 : _errors$find.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this);
    }

    return null;
  };

  var displayErrorName = function displayErrorName(errors, inputName, inputNameText) {
    if (errors.some(function (error) {
      return error.path === inputName;
    })) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "error-text",
        children: inputNameText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 14
      }, _this);
    }

    return null;
  };

  var inputErrorClassname = function inputErrorClassname(errors, inputName) {
    return errors.some(function (err) {
      return err.path === inputName;
    }) ? 'input-error' : '';
  };

  yup__WEBPACK_IMPORTED_MODULE_1__.setLocale({
    string: {
      email: 'Неправильно введен e-mail'
    }
  });
  yup__WEBPACK_IMPORTED_MODULE_1__.addMethod(yup__WEBPACK_IMPORTED_MODULE_1__.string, 'validatePhone', function (errorMessage) {
    return this.test('checkPhone', errorMessage, function (phone) {
      var path = this.path,
          createError = this.createError;
      var phoneNumber = (0,libphonenumber_js__WEBPACK_IMPORTED_MODULE_2__.parsePhoneNumber)(phone && phone.length > 1 ? phone : '+99600', phoneCountry.toUpperCase());
      return phoneNumber.isValid() || createError({
        path: path,
        message: errorMessage
      });
    });
  });

  var loginSchema = function loginSchema(data) {
    return yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
      phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер')
    }).validate(data, {
      abortEarly: false
    }).then(function () {
      return [];
    })["catch"](function (error) {
      return error.inner;
    });
  };

  var registerSchema = function registerSchema(data) {
    return yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
      firstname: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
      lastname: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите фамилию'),
      date_of_birth: yup__WEBPACK_IMPORTED_MODULE_1__.date().required('Введите дату рождения'),
      phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер')
    }).validate(data, {
      abortEarly: false
    }).then(function () {
      return [];
    })["catch"](function (error) {
      return error.inner;
    });
  };

  var productModalSchema = function productModalSchema(data) {
    return yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
      name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
      phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер'),
      product: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Укажите товар')
    }).validate(data, {
      abortEarly: false
    }).then(function () {
      return [];
    })["catch"](function (error) {
      return error.inner;
    });
  };

  var feedBackSchema = function feedBackSchema(data) {
    return yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
      name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
      phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер'),
      email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required('Введите e-mail'),
      body: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Напишите комментарий'),
      title: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Напишите тему')
    }).validate(data, {
      abortEarly: false
    }).then(function () {
      return [];
    })["catch"](function (error) {
      return error.inner;
    });
  };

  var requestCallSchema = function requestCallSchema(data) {
    return yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
      name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
      phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер')
    }).validate(data, {
      abortEarly: false
    }).then(function () {
      return [];
    })["catch"](function (error) {
      return error.inner;
    });
  };

  var wholesalersSchema = function wholesalersSchema(data) {
    return yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
      name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
      phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер'),
      license: yup__WEBPACK_IMPORTED_MODULE_1__.mixed().required('Прикрепите файл')
    }).validate(data, {
      abortEarly: false
    }).then(function () {
      return [];
    })["catch"](function (error) {
      return error.inner;
    });
  };

  return {
    loginSchema: loginSchema,
    registerSchema: registerSchema,
    displayInputError: displayInputError,
    displayErrorName: displayErrorName,
    inputErrorClassname: inputErrorClassname,
    productModalSchema: productModalSchema,
    feedBackSchema: feedBackSchema,
    requestCallSchema: requestCallSchema,
    wholesalersSchema: wholesalersSchema
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useValidate);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6WyJ1c2VWYWxpZGF0ZSIsInBob25lQ291bnRyeSIsImRpc3BsYXlJbnB1dEVycm9yIiwiZXJyb3JzIiwiaW5wdXROYW1lIiwic29tZSIsImVyciIsInBhdGgiLCJmaW5kIiwibWVzc2FnZSIsImRpc3BsYXlFcnJvck5hbWUiLCJpbnB1dE5hbWVUZXh0IiwiZXJyb3IiLCJpbnB1dEVycm9yQ2xhc3NuYW1lIiwieXVwIiwic3RyaW5nIiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJ0ZXN0IiwicGhvbmUiLCJjcmVhdGVFcnJvciIsInBob25lTnVtYmVyIiwicGFyc2VQaG9uZU51bWJlciIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwiaXNWYWxpZCIsImxvZ2luU2NoZW1hIiwiZGF0YSIsInNoYXBlIiwidmFsaWRhdGVQaG9uZSIsInZhbGlkYXRlIiwiYWJvcnRFYXJseSIsInRoZW4iLCJpbm5lciIsInJlZ2lzdGVyU2NoZW1hIiwiZmlyc3RuYW1lIiwicmVxdWlyZWQiLCJsYXN0bmFtZSIsImRhdGVfb2ZfYmlydGgiLCJwcm9kdWN0TW9kYWxTY2hlbWEiLCJuYW1lIiwicHJvZHVjdCIsImZlZWRCYWNrU2NoZW1hIiwiYm9keSIsInRpdGxlIiwicmVxdWVzdENhbGxTY2hlbWEiLCJ3aG9sZXNhbGVyc1NjaGVtYSIsImxpY2Vuc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxZQUFZLEVBQUk7QUFDbEMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxNQUFELEVBQVNDLFNBQVQsRUFBdUI7QUFDL0MsUUFBSUQsTUFBTSxDQUFDRSxJQUFQLENBQVksVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixLQUFhSCxTQUFqQjtBQUFBLEtBQWYs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O0FBSFEsS0FBbkIsRUFLR04sUUFMSCxDQUtZSCxJQUxaLEVBS2tCO0FBQUVJLGdCQUFVLEVBQUU7QUFBZCxLQUxsQixFQU1HQyxJQU5ILENBTVE7QUFBQSxhQUFNLEVBQU47QUFBQSxLQU5SLFdBT1MsVUFBQXBCLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNxQixLQUFWO0FBQUEsS0FQZCxDQUQ0QjtBQUFBLEdBQTlCOztBQVdBLFNBQU87QUFDTFAsZUFBVyxFQUFYQSxXQURLO0FBRUxRLGtCQUFjLEVBQWRBLGNBRks7QUFHTGhDLHFCQUFpQixFQUFqQkEsaUJBSEs7QUFJTFEsb0JBQWdCLEVBQWhCQSxnQkFKSztBQUtMRyx1QkFBbUIsRUFBbkJBLG1CQUxLO0FBTUwwQixzQkFBa0IsRUFBbEJBLGtCQU5LO0FBT0xHLGtCQUFjLEVBQWRBLGNBUEs7QUFRTEcscUJBQWlCLEVBQWpCQSxpQkFSSztBQVNMQyxxQkFBaUIsRUFBakJBO0FBVEssR0FBUDtBQVdELENBMUhEOztBQTRIQSwrREFBZTlDLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjhkMTExNDVkYjEwMjkwYmFlMmIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHsgcGFyc2VQaG9uZU51bWJlciB9IGZyb20gXCJsaWJwaG9uZW51bWJlci1qc1wiO1xuXG5cbmNvbnN0IHVzZVZhbGlkYXRlID0gcGhvbmVDb3VudHJ5ID0+IHtcbiAgY29uc3QgZGlzcGxheUlucHV0RXJyb3IgPSAoZXJyb3JzLCBpbnB1dE5hbWUpID0+IHtcbiAgICBpZiAoZXJyb3JzLnNvbWUoZXJyID0+IGVyci5wYXRoID09PSBpbnB1dE5hbWUpKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+XG4gICAgICAgICAge2Vycm9ycy5maW5kKGVyciA9PiBlcnIucGF0aCA9PT0gaW5wdXROYW1lKT8ubWVzc2FnZX1cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9yTmFtZSA9IChlcnJvcnMsIGlucHV0TmFtZSwgaW5wdXROYW1lVGV4dCkgPT4ge1xuICAgIGlmIChlcnJvcnMuc29tZShlcnJvciA9PiBlcnJvci5wYXRoID09PSBpbnB1dE5hbWUpKSB7XG4gICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPntpbnB1dE5hbWVUZXh0fTwvcD47XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IGlucHV0RXJyb3JDbGFzc25hbWUgPSAoZXJyb3JzLCBpbnB1dE5hbWUpID0+IHtcbiAgICByZXR1cm4gZXJyb3JzLnNvbWUoZXJyID0+IGVyci5wYXRoID09PSBpbnB1dE5hbWUpID8gJ2lucHV0LWVycm9yJyA6ICcnO1xuICB9O1xuXG4gIHl1cC5zZXRMb2NhbGUoe1xuICAgIHN0cmluZzoge1xuICAgICAgZW1haWw6ICfQndC10L/RgNCw0LLQuNC70YzQvdC+INCy0LLQtdC00LXQvSBlLW1haWwnLFxuICAgIH0sXG4gIH0pO1xuXG4gIHl1cC5hZGRNZXRob2QoeXVwLnN0cmluZywgJ3ZhbGlkYXRlUGhvbmUnLCBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdCgnY2hlY2tQaG9uZScsIGVycm9yTWVzc2FnZSwgZnVuY3Rpb24gKHBob25lKSB7XG4gICAgICBjb25zdCB7IHBhdGgsIGNyZWF0ZUVycm9yIH0gPSB0aGlzO1xuICAgICAgY29uc3QgcGhvbmVOdW1iZXIgPSBwYXJzZVBob25lTnVtYmVyKFxuICAgICAgICBwaG9uZSAmJiBwaG9uZS5sZW5ndGggPiAxID8gcGhvbmUgOiAnKzk5NjAwJyxcbiAgICAgICAgcGhvbmVDb3VudHJ5LnRvVXBwZXJDYXNlKCksXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICBwaG9uZU51bWJlci5pc1ZhbGlkKCkgfHxcbiAgICAgICAgY3JlYXRlRXJyb3IoeyBwYXRoLCBtZXNzYWdlOiBlcnJvck1lc3NhZ2UgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGxvZ2luU2NoZW1hID0gZGF0YSA9PiAoXG4gICAgeXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICAgIHBob25lOiB5dXAuc3RyaW5nKCkudmFsaWRhdGVQaG9uZSgn0J3QtdC/0YDQsNCy0LjQu9GM0L3QviDQstCy0LXQtNC10L0g0L3QvtC80LXRgCcpLFxuICAgIH0pXG4gICAgICAudmFsaWRhdGUoZGF0YSwge2Fib3J0RWFybHk6IGZhbHNlfSlcbiAgICAgIC50aGVuKCgpID0+IFtdKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGVycm9yLmlubmVyKVxuICApO1xuXG4gIGNvbnN0IHJlZ2lzdGVyU2NoZW1hID0gZGF0YSA9PiAoXG4gICAgeXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICAgIGZpcnN0bmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCfQktCy0LXQtNC40YLQtSDQuNC80Y8nKSxcbiAgICAgIGxhc3RuYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ9CS0LLQtdC00LjRgtC1INGE0LDQvNC40LvQuNGOJyksXG4gICAgICBkYXRlX29mX2JpcnRoOiB5dXAuZGF0ZSgpLnJlcXVpcmVkKCfQktCy0LXQtNC40YLQtSDQtNCw0YLRgyDRgNC+0LbQtNC10L3QuNGPJyksXG4gICAgICBwaG9uZTogeXVwLnN0cmluZygpLnZhbGlkYXRlUGhvbmUoJ9Cd0LXQv9GA0LDQstC40LvRjNC90L4g0LLQstC10LTQtdC9INC90L7QvNC10YAnKSxcbiAgICB9KVxuICAgICAgLnZhbGlkYXRlKGRhdGEsIHthYm9ydEVhcmx5OiBmYWxzZX0pXG4gICAgICAudGhlbigoKSA9PiBbXSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBlcnJvci5pbm5lcilcbiAgKTtcblxuICBcbiAgY29uc3QgcHJvZHVjdE1vZGFsU2NoZW1hID0gZGF0YSA9PiAoXG4gICAgeXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICAgIG5hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgn0JLQstC10LTQuNGC0LUg0LjQvNGPJyksXG4gICAgICBwaG9uZTogeXVwLnN0cmluZygpLnZhbGlkYXRlUGhvbmUoJ9Cd0LXQv9GA0LDQstC40LvRjNC90L4g0LLQstC10LTQtdC9INC90L7QvNC10YAnKSxcbiAgICAgIHByb2R1Y3Q6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgn0KPQutCw0LbQuNGC0LUg0YLQvtCy0LDRgCcpLFxuICAgIH0pXG4gICAgICAudmFsaWRhdGUoZGF0YSwgeyBhYm9ydEVhcmx5OiBmYWxzZSB9KVxuICAgICAgLnRoZW4oKCkgPT4gW10pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gZXJyb3IuaW5uZXIpXG4gICk7XG5cbiAgY29uc3QgZmVlZEJhY2tTY2hlbWEgPSBkYXRhID0+IChcbiAgICB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICAgICAgbmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCfQktCy0LXQtNC40YLQtSDQuNC80Y8nKSxcbiAgICAgIHBob25lOiB5dXAuc3RyaW5nKCkudmFsaWRhdGVQaG9uZSgn0J3QtdC/0YDQsNCy0LjQu9GM0L3QviDQstCy0LXQtNC10L0g0L3QvtC80LXRgCcpLFxuICAgICAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCfQktCy0LXQtNC40YLQtSBlLW1haWwnKSxcbiAgICAgIGJvZHk6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgn0J3QsNC/0LjRiNC40YLQtSDQutC+0LzQvNC10L3RgtCw0YDQuNC5JyksXG4gICAgICB0aXRsZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCfQndCw0L/QuNGI0LjRgtC1INGC0LXQvNGDJyksXG4gICAgfSlcbiAgICAgIC52YWxpZGF0ZShkYXRhLCB7IGFib3J0RWFybHk6IGZhbHNlIH0pXG4gICAgICAudGhlbigoKSA9PiBbXSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBlcnJvci5pbm5lcilcbiAgKTtcblxuICBjb25zdCByZXF1ZXN0Q2FsbFNjaGVtYSA9IGRhdGEgPT4gKFxuICAgIHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICBuYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ9CS0LLQtdC00LjRgtC1INC40LzRjycpLFxuICAgICAgcGhvbmU6IHl1cC5zdHJpbmcoKS52YWxpZGF0ZVBob25lKCfQndC10L/RgNCw0LLQuNC70YzQvdC+INCy0LLQtdC00LXQvSDQvdC+0LzQtdGAJyksXG4gICAgfSlcbiAgICAgIC52YWxpZGF0ZShkYXRhLCB7IGFib3J0RWFybHk6IGZhbHNlIH0pXG4gICAgICAudGhlbigoKSA9PiBbXSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBlcnJvci5pbm5lcilcbiAgKTtcblxuICBjb25zdCB3aG9sZXNhbGVyc1NjaGVtYSA9IGRhdGEgPT4gKFxuICAgIHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICBuYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ9CS0LLQtdC00LjRgtC1INC40LzRjycpLFxuICAgICAgcGhvbmU6IHl1cC5zdHJpbmcoKS52YWxpZGF0ZVBob25lKCfQndC10L/RgNCw0LLQuNC70YzQvdC+INCy0LLQtdC00LXQvSDQvdC+0LzQtdGAJyksXG4gICAgICBsaWNlbnNlOiB5dXAubWl4ZWQoKS5yZXF1aXJlZCgn0J/RgNC40LrRgNC10L/QuNGC0LUg0YTQsNC50LsnKSxcbiAgICB9KVxuICAgICAgLnZhbGlkYXRlKGRhdGEsIHsgYWJvcnRFYXJseTogZmFsc2UgfSlcbiAgICAgIC50aGVuKCgpID0+IFtdKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGVycm9yLmlubmVyKVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgbG9naW5TY2hlbWEsXG4gICAgcmVnaXN0ZXJTY2hlbWEsXG4gICAgZGlzcGxheUlucHV0RXJyb3IsXG4gICAgZGlzcGxheUVycm9yTmFtZSxcbiAgICBpbnB1dEVycm9yQ2xhc3NuYW1lLFxuICAgIHByb2R1Y3RNb2RhbFNjaGVtYSxcbiAgICBmZWVkQmFja1NjaGVtYSxcbiAgICByZXF1ZXN0Q2FsbFNjaGVtYSxcbiAgICB3aG9sZXNhbGVyc1NjaGVtYSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVZhbGlkYXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==