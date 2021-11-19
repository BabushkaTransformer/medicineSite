(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_locale_ru__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/locale/ru */ "moment/locale/ru");
/* harmony import */ var moment_locale_ru__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_locale_ru__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\nasir\\Desktop\\Bimed\\main-frontend-dev\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





moment__WEBPACK_IMPORTED_MODULE_2___default().locale('ru');

function Application({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store__WEBPACK_IMPORTED_MODULE_1__.ContextProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Application);

/***/ }),

/***/ "./store/bucket/reducer.js":
/*!*********************************!*\
  !*** ./store/bucket/reducer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function bucket(state, {
  type,
  data
}) {
  switch (type) {
    case 'CHANGE_BUCKET':
      return data;

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (bucket);

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": function() { return /* binding */ Context; },
/* harmony export */   "ContextProvider": function() { return /* binding */ ContextProvider; },
/* harmony export */   "connectContext": function() { return /* binding */ connectContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bucket_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bucket/reducer */ "./store/bucket/reducer.js");
/* harmony import */ var _info_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/reducer */ "./store/info/reducer.js");
/* harmony import */ var _products_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/reducer */ "./store/products/reducer.js");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/reducer */ "./store/user/reducer.js");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initialState */ "./store/initialState.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./utils/index.js");

var _jsxFileName = "C:\\Users\\nasir\\Desktop\\Bimed\\main-frontend-dev\\store\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext();
const combinedReducers = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.combineReducers)({
  bucket: _bucket_reducer__WEBPACK_IMPORTED_MODULE_2__.default,
  info: _info_reducer__WEBPACK_IMPORTED_MODULE_3__.default,
  products: _products_reducer__WEBPACK_IMPORTED_MODULE_4__.default,
  user: _user_reducer__WEBPACK_IMPORTED_MODULE_5__.default
});

function ContextProvider({
  children
}) {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(combinedReducers, _initialState__WEBPACK_IMPORTED_MODULE_6__.default);
  const context = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => [state, dispatch], [state, dispatch]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {
    value: context,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

const connectContext = (Component, select) => {
  return props => {
    const [store, dispatch] = react__WEBPACK_IMPORTED_MODULE_1__.useContext(Context);

    const data = _objectSpread({}, select ? select(store) : {});

    return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread(_objectSpread(_objectSpread({}, data), props), {}, {
      dispatch: dispatch
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined), [JSON.stringify(data), JSON.stringify(props)]);
  };
};



/***/ }),

/***/ "./store/info/constants.js":
/*!*********************************!*\
  !*** ./store/info/constants.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  GET_BANNERS: "GET_BANNERS",
  GET_FAQ: "GET_FAQ",
  GET_ABOUT: "GET_ABOUT",
  GET_CONTACTS: "GET_CONTACTS",
  GET_PHARMACY: "GET_PHARMACY",
  GET_NEWS: "GET_NEWS"
});

/***/ }),

/***/ "./store/info/reducer.js":
/*!*******************************!*\
  !*** ./store/info/reducer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/info/constants.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function info(state, _ref) {
  let {
    type
  } = _ref,
      res = _objectWithoutProperties(_ref, ["type"]);

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_BANNERS:
      return Object.assign(state, {
        banners: Object.assign(state.banners, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_FAQ:
      return Object.assign(state, {
        faq: Object.assign(state.faq, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_ABOUT:
      return Object.assign(state, {
        about: Object.assign(state.about, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_CONTACTS:
      return Object.assign(state, {
        contacts: Object.assign(state.contacts, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_PHARMACY:
      return Object.assign(state, {
        pharmacy: Object.assign(state.pharmacy, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_NEWS:
      return Object.assign(state, {
        news: Object.assign(state.news, res)
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (info);

/***/ }),

/***/ "./store/initialState.js":
/*!*******************************!*\
  !*** ./store/initialState.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  bucket: [],
  products: {
    all: {
      data: []
    },
    top: {
      data: []
    },
    sales: {
      data: []
    },
    catalog: {
      data: []
    }
  },
  user: {
    isLoggedIn: false,
    otp: {},
    info: {},
    orders: {
      data: [{
        id: 1235,
        status: 'accepted',
        totalPrice: 1234,
        orderDate: new Date(2021, 6, 22, 13, 43),
        items: [{
          id: 692,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 693,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 2,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 694,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }]
      }, {
        id: 1335,
        status: 'delivered',
        totalPrice: 1234,
        orderDate: new Date(2021, 1, 15, 18, 43),
        items: [{
          id: 692,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 4,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 693,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 694,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }]
      }, {
        id: 2335,
        status: 'declined',
        totalPrice: 1234,
        orderDate: new Date(2021, 2, 25, 16, 43),
        items: [{
          id: 692,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 3,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 693,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }, {
          id: 694,
          images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU'],
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEOjCw-9M2dcnaKmDjq3jZRpVU6UhccJGmQ&usqp=CAU',
          title: 'Витамин С 900 мг 5 г порош.шипуч.№10 саше-пакет',
          description: 'В качестве биологически активной добавки к пище, дополнительного источника витаминов и минералов.',
          receptRequired: true,
          oldPrice: 13920,
          price: 12980,
          available: true,
          manufactureCountry: 'Россия',
          manufacture: 'АВАНТА АО',
          brand: 'БЕЛОРУЧКА',
          relizeForm: 'Крем для рук 75мл, туба',
          amount: 1,
          composition: 'вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция вода, глицерин, масло минеральное, каприлик/каприк триглицерид, цетеариловый спирт, вазелин, глицерилстеарат, гидроксиэтилмочевина, диметикон, феноксиэтанол, этилгексилглицерин, масло подсолнечное, масло фисташковое, масло оливковое, цетилфосфат калия, витамин Е-ацетат, витамин F, ПЭГ-7 глицерилкокоат, ПЭГ-40 гидрогенат касторового масла, карбомер, ароматическая композиция'
        }]
      }]
    }
  },
  info: {
    banners: {
      data: [{
        title: 'kek',
        url: 'https://images.food52.com/IjL6uGq1jFuk18cPGiZTUVphPIo=/1200x1200/103b54ba-45fd-47d5-84f1-d9e3ed1245a8--2019-1022_kek-lapis-sarawak_3x2_rocky-luten_028.jpg'
      }, {
        title: 'kek1',
        url: 'https://images.food52.com/IjL6uGq1jFuk18cPGiZTUVphPIo=/1200x1200/103b54ba-45fd-47d5-84f1-d9e3ed1245a8--2019-1022_kek-lapis-sarawak_3x2_rocky-luten_028.jpg'
      }, {
        title: 'kek2',
        url: 'https://images.food52.com/IjL6uGq1jFuk18cPGiZTUVphPIo=/1200x1200/103b54ba-45fd-47d5-84f1-d9e3ed1245a8--2019-1022_kek-lapis-sarawak_3x2_rocky-luten_028.jpg'
      }, {
        title: 'kek3',
        url: 'https://images.food52.com/IjL6uGq1jFuk18cPGiZTUVphPIo=/1200x1200/103b54ba-45fd-47d5-84f1-d9e3ed1245a8--2019-1022_kek-lapis-sarawak_3x2_rocky-luten_028.jpg'
      }, {
        title: 'kek4',
        url: 'https://images.food52.com/IjL6uGq1jFuk18cPGiZTUVphPIo=/1200x1200/103b54ba-45fd-47d5-84f1-d9e3ed1245a8--2019-1022_kek-lapis-sarawak_3x2_rocky-luten_028.jpg'
      }]
    },
    about: {},
    contacts: {},
    pharmacy: {},
    news: {},
    faq: {}
  }
});

/***/ }),

/***/ "./store/products/constants.js":
/*!*************************************!*\
  !*** ./store/products/constants.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_SALES_PRODUCTS: "GET_SALES_PRODUCTS",
  GET_TOP_PRODUCTS: "GET_TOP_PRODUCTS",
  GET_CATALOG_PRODUCTS: "GET_CATALOG_PRODUCTS"
});

/***/ }),

/***/ "./store/products/reducer.js":
/*!***********************************!*\
  !*** ./store/products/reducer.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/products/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function products(state, _ref) {
  let {
    type
  } = _ref,
      res = _objectWithoutProperties(_ref, ["type"]);

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_PRODUCTS:
      return Object.assign(state, {
        all: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_SALES_PRODUCTS:
      return Object.assign(state, {
        sales: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_TOP_PRODUCTS:
      return Object.assign(state, {
        top: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_CATALOG_PRODUCTS:
      return Object.assign(state, {
        catalog: _objectSpread({
          data: res.data || state.catalog.data || []
        }, res)
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (products);

/***/ }),

/***/ "./store/user/constants.js":
/*!*********************************!*\
  !*** ./store/user/constants.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SEND_OTP: "SEND_OTP",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  REGISTRATION: "REGISTRATION",
  CHANGE_USER: "CHANGE_USER",
  GET_USER_ORDERS: "GET_USER_ORDERS",
  CREATE_ORDER: "CREATE_ORDER",
  CHANGE_FAVORITE: 'CHANGE_FAVORITE'
});

/***/ }),

/***/ "./store/user/reducer.js":
/*!*******************************!*\
  !*** ./store/user/reducer.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./store/user/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function user(state, _ref) {
  var _state$data$orders, _state$info$data;

  let {
    type
  } = _ref,
      res = _objectWithoutProperties(_ref, ["type"]);

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.SEND_OTP:
      return Object.assign(state, {
        otp: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGIN:
      return Object.assign(state, {
        isLoggedIn: !res.error,
        info: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.LOGOUT:
      return {
        isLoggedIn: false,
        orders: {},
        otp: {},
        info: {
          loading: res.loading
        }
      };

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.REGISTRATION:
      return Object.assign(state, {
        isLoggedIn: true,
        info: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_USER:
      return Object.assign(state, {
        info: res
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.GET_USER_ORDERS:
      return Object.assign(state, {
        orders: Object.assign(state.orders, res)
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.CREATE_ORDER:
      return Object.assign(state, {
        orders: _objectSpread(_objectSpread({}, res), {}, {
          data: ((_state$data$orders = state.data.orders) === null || _state$data$orders === void 0 ? void 0 : _state$data$orders.concat(res.data)) || res.data
        })
      });

    case _constants__WEBPACK_IMPORTED_MODULE_0__.default.CHANGE_FAVORITE:
      return Object.assign(state, {
        info: _objectSpread({
          data: Object.assign(state.info.data, {
            favorite_medicines: res.data || ((_state$info$data = state.info.data) === null || _state$info$data === void 0 ? void 0 : _state$info$data.favorite_medicines)
          })
        }, state.info)
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "post": function() { return /* binding */ post; },
/* harmony export */   "updateToken": function() { return /* binding */ updateToken; },
/* harmony export */   "modalsRequest": function() { return /* binding */ modalsRequest; },
/* harmony export */   "deleteRequest": function() { return /* binding */ deleteRequest; },
/* harmony export */   "multipleRequest": function() { return /* binding */ multipleRequest; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baseUrl = process.env.API_URL || 'http://localhost:8080';
const get = async url => {
  const token = localStorage.getItem('token') || '';
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'GET',
    // mode: 'no-cors',
    // cache: 'default',
    headers: _objectSpread({
      'Content-Type': 'application/json'
    }, token ? {
      'x-auth-token': token
    } : {})
  });

  if (res.ok) {
    const response = await res.json();
    return response.body;
  }

  if (res.status === 403) {
    updateToken();
  }

  throw new Error('error');
};
const post = async (url, body, params) => {
  const token = localStorage.getItem('token') || '';
  const res = await fetch(`${baseUrl}${url}`, _objectSpread({
    method: 'POST',
    // mode: 'no-cors',
    // cache: 'default',
    headers: _objectSpread({
      'Content-Type': 'application/json'
    }, token ? {
      'x-auth-token': token
    } : {}),
    body: JSON.stringify(body)
  }, params));

  if (res.ok) {
    const response = await res.json();
    return response.body;
  }

  if (res.status === 403) {
    updateToken();
  }

  throw new Error('error');
};
const updateToken = async () => {
  const token = localStorage.getItem('token') || '';
  const res = await fetch(`${baseUrl}/api/auth`, {
    method: 'GET',
    // mode: 'no-cors',
    // cache: 'default',
    headers: _objectSpread({
      'Content-Type': 'application/json'
    }, token ? {
      'x-auth-token': token
    } : {})
  });

  if (res.ok) {
    const response = await res.json();
    window.localStorage.setItem('token', response.body.token);
    return response.body;
  }

  throw new Error(error);
};
const modalsRequest = async (url, body, isFormData = false, method = 'POST') => {
  const token = localStorage.getItem('token') || '';
  const res = await fetch(`${baseUrl}${url}`, {
    method,
    body: isFormData ? body : JSON.stringify(body),
    headers: _objectSpread(_objectSpread({}, !isFormData ? {
      'Content-Type': 'application/json'
    } : {}), token ? {
      'x-auth-token': token
    } : {})
  });

  if (res.ok) {
    const response = await res.json();
    return {
      success: true,
      body: response.body
    };
  }

  return {
    success: false
  };
};
const deleteRequest = async url => {
  const token = localStorage.getItem('token') || '';
  const res = await fetch(`${baseUrl}${url}`, {
    method: 'DELETE',
    headers: _objectSpread({
      'Content-Type': 'application/json'
    }, token ? {
      'x-auth-token': token
    } : {})
  });

  if (res.ok) {
    const response = await res.json();
    return {
      success: true,
      body: response.body
    };
  }

  return {
    success: false
  };
}; // do not touch this

const multipleRequest = () => {};

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useValidate": function() { return /* reexport safe */ _validation__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "objectToQuery": function() { return /* binding */ objectToQuery; },
/* harmony export */   "combineReducers": function() { return /* binding */ combineReducers; },
/* harmony export */   "debounce": function() { return /* binding */ debounce; },
/* harmony export */   "calculatePrice": function() { return /* binding */ calculatePrice; },
/* harmony export */   "months": function() { return /* binding */ months; },
/* harmony export */   "SOCIALS": function() { return /* binding */ SOCIALS; },
/* harmony export */   "STATUSES": function() { return /* binding */ STATUSES; }
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./utils/api.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api__WEBPACK_IMPORTED_MODULE_0__) if(["default","useValidate","objectToQuery","combineReducers","debounce","calculatePrice","months","SOCIALS","STATUSES"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _api__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation */ "./utils/validation.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const objectToQuery = params => Object.keys(params).map(key => key + '=' + params[key]).join('&');
const combineReducers = slices => (state, action) => Object.keys(slices).reduce((acc, prop) => _objectSpread(_objectSpread({}, acc), {}, {
  [prop]: slices[prop](acc[prop], action)
}), state);
function debounce(func, time = 300) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(func.bind(this, ...args), time);
  };
}
function calculatePrice(items, discountPercentage, userType = 'noncommercial') {
  const price = items.reduce((a, b) => a + b.price[userType] * b.amount, 0);
  const discount = Math.floor(price * discountPercentage);
  return {
    discount,
    total: price - discount,
    totalNoDiscount: price
  };
}
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const SOCIALS = {
  vk: "http://vk.com/share.php?",
  ok: "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl=",
  fb: "http://www.facebook.com/sharer.php?u=",
  wp: "https://api.whatsapp.com/send?text="
};
const STATUSES = {
  accepted: 'Принят',
  delivered: 'Доставлен',
  declined: 'Отменен'
};

/***/ }),

/***/ "./utils/validation.js":
/*!*****************************!*\
  !*** ./utils/validation.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libphonenumber-js */ "libphonenumber-js");
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(libphonenumber_js__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\nasir\\Desktop\\Bimed\\main-frontend-dev\\utils\\validation.js";



const useValidate = phoneCountry => {
  const displayInputError = (errors, inputName) => {
    if (errors.some(err => err.path === inputName)) {
      var _errors$find;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "error-text",
        children: (_errors$find = errors.find(err => err.path === inputName)) === null || _errors$find === void 0 ? void 0 : _errors$find.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined);
    }

    return null;
  };

  const displayErrorName = (errors, inputName, inputNameText) => {
    if (errors.some(error => error.path === inputName)) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "error-text",
        children: inputNameText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 14
      }, undefined);
    }

    return null;
  };

  const inputErrorClassname = (errors, inputName) => {
    return errors.some(err => err.path === inputName) ? 'input-error' : '';
  };

  yup__WEBPACK_IMPORTED_MODULE_1__.setLocale({
    string: {
      email: 'Неправильно введен e-mail'
    }
  });
  yup__WEBPACK_IMPORTED_MODULE_1__.addMethod(yup__WEBPACK_IMPORTED_MODULE_1__.string, 'validatePhone', function (errorMessage) {
    return this.test('checkPhone', errorMessage, function (phone) {
      const {
        path,
        createError
      } = this;
      const phoneNumber = (0,libphonenumber_js__WEBPACK_IMPORTED_MODULE_2__.parsePhoneNumber)(phone && phone.length > 1 ? phone : '+99600', phoneCountry.toUpperCase());
      return phoneNumber.isValid() || createError({
        path,
        message: errorMessage
      });
    });
  });

  const loginSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  const registerSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    firstname: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
    lastname: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите фамилию'),
    date_of_birth: yup__WEBPACK_IMPORTED_MODULE_1__.date().required('Введите дату рождения'),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  const productModalSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер'),
    product: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Укажите товар')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  const feedBackSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер'),
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email().required('Введите e-mail'),
    body: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Напишите комментарий'),
    title: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Напишите тему')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  const requestCallSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  const wholesalersSchema = data => yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_1__.string().required('Введите имя'),
    phone: yup__WEBPACK_IMPORTED_MODULE_1__.string().validatePhone('Неправильно введен номер'),
    license: yup__WEBPACK_IMPORTED_MODULE_1__.mixed().required('Прикрепите файл')
  }).validate(data, {
    abortEarly: false
  }).then(() => []).catch(error => error.inner);

  return {
    loginSchema,
    registerSchema,
    displayInputError,
    displayErrorName,
    inputErrorClassname,
    productModalSchema,
    feedBackSchema,
    requestCallSchema,
    wholesalersSchema
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useValidate);

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "libphonenumber-js":
/*!************************************!*\
  !*** external "libphonenumber-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("libphonenumber-js");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "moment/locale/ru":
/*!***********************************!*\
  !*** external "moment/locale/ru" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment/locale/ru");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vd25fYmltZWQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL293bl9iaW1lZC8uL3N0b3JlL2J1Y2tldC9yZWR1Y2VyLmpzIiwid2VicGFjazovL293bl9iaW1lZC8uL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL293bl9iaW1lZC8uL3N0b3JlL2luZm8vY29uc3RhbnRzLmpzIiwid2VicGFjazovL293bl9iaW1lZC8uL3N0b3JlL2luZm8vcmVkdWNlci5qcyIsIndlYnBhY2s6Ly9vd25fYmltZWQvLi9zdG9yZS9pbml0aWFsU3RhdGUuanMiLCJ3ZWJwYWNrOi8vb3duX2JpbWVkLy4vc3RvcmUvcHJvZHVjdHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL293bl9iaW1lZC8uL3N0b3JlL3Byb2R1Y3RzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vb3duX2JpbWVkLy4vc3RvcmUvdXNlci9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vb3duX2JpbWVkLy4vc3RvcmUvdXNlci9yZWR1Y2VyLmpzIiwid2VicGFjazovL293bl9iaW1lZC8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9vd25fYmltZWQvLi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vd25fYmltZWQvLi91dGlscy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL293bl9iaW1lZC9leHRlcm5hbCBcImxpYnBob25lbnVtYmVyLWpzXCIiLCJ3ZWJwYWNrOi8vb3duX2JpbWVkL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vb3duX2JpbWVkL2V4dGVybmFsIFwibW9tZW50L2xvY2FsZS9ydVwiIiwid2VicGFjazovL293bl9iaW1lZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vb3duX2JpbWVkL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vb3duX2JpbWVkL2V4dGVybmFsIFwieXVwXCIiXSwibmFtZXMiOlsibW9tZW50IiwiQXBwbGljYXRpb24iLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJidWNrZXQiLCJzdGF0ZSIsInR5cGUiLCJkYXRhIiwiQ29udGV4dCIsIlJlYWN0IiwiY29tYmluZWRSZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsImluZm8iLCJwcm9kdWN0cyIsInVzZXIiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwiaW5pdGlhbFN0YXRlIiwiY29udGV4dCIsImNvbm5lY3RDb250ZXh0Iiwic2VsZWN0IiwicHJvcHMiLCJzdG9yZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJHRVRfQkFOTkVSUyIsIkdFVF9GQVEiLCJHRVRfQUJPVVQiLCJHRVRfQ09OVEFDVFMiLCJHRVRfUEhBUk1BQ1kiLCJHRVRfTkVXUyIsInJlcyIsImNvbnN0YW50cyIsIk9iamVjdCIsImFzc2lnbiIsImJhbm5lcnMiLCJmYXEiLCJhYm91dCIsImNvbnRhY3RzIiwicGhhcm1hY3kiLCJuZXdzIiwiYWxsIiwidG9wIiwic2FsZXMiLCJjYXRhbG9nIiwiaXNMb2dnZWRJbiIsIm90cCIsIm9yZGVycyIsImlkIiwic3RhdHVzIiwidG90YWxQcmljZSIsIm9yZGVyRGF0ZSIsIkRhdGUiLCJpdGVtcyIsImltYWdlcyIsInByZXZpZXciLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicmVjZXB0UmVxdWlyZWQiLCJvbGRQcmljZSIsInByaWNlIiwiYXZhaWxhYmxlIiwibWFudWZhY3R1cmVDb3VudHJ5IiwibWFudWZhY3R1cmUiLCJicmFuZCIsInJlbGl6ZUZvcm0iLCJhbW91bnQiLCJjb21wb3NpdGlvbiIsInVybCIsIkdFVF9QUk9EVUNUUyIsIkdFVF9TQUxFU19QUk9EVUNUUyIsIkdFVF9UT1BfUFJPRFVDVFMiLCJHRVRfQ0FUQUxPR19QUk9EVUNUUyIsIlNFTkRfT1RQIiwiTE9HSU4iLCJMT0dPVVQiLCJSRUdJU1RSQVRJT04iLCJDSEFOR0VfVVNFUiIsIkdFVF9VU0VSX09SREVSUyIsIkNSRUFURV9PUkRFUiIsIkNIQU5HRV9GQVZPUklURSIsImVycm9yIiwibG9hZGluZyIsImNvbmNhdCIsImZhdm9yaXRlX21lZGljaW5lcyIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsImdldCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIm9rIiwicmVzcG9uc2UiLCJqc29uIiwiYm9keSIsInVwZGF0ZVRva2VuIiwiRXJyb3IiLCJwb3N0IiwicGFyYW1zIiwid2luZG93Iiwic2V0SXRlbSIsIm1vZGFsc1JlcXVlc3QiLCJpc0Zvcm1EYXRhIiwic3VjY2VzcyIsImRlbGV0ZVJlcXVlc3QiLCJtdWx0aXBsZVJlcXVlc3QiLCJvYmplY3RUb1F1ZXJ5Iiwia2V5cyIsIm1hcCIsImtleSIsImpvaW4iLCJzbGljZXMiLCJhY3Rpb24iLCJyZWR1Y2UiLCJhY2MiLCJwcm9wIiwiZGVib3VuY2UiLCJmdW5jIiwidGltZSIsInRpbWVyIiwiYXJncyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJiaW5kIiwiY2FsY3VsYXRlUHJpY2UiLCJkaXNjb3VudFBlcmNlbnRhZ2UiLCJ1c2VyVHlwZSIsImEiLCJiIiwiZGlzY291bnQiLCJNYXRoIiwiZmxvb3IiLCJ0b3RhbCIsInRvdGFsTm9EaXNjb3VudCIsIm1vbnRocyIsIlNPQ0lBTFMiLCJ2ayIsImZiIiwid3AiLCJTVEFUVVNFUyIsImFjY2VwdGVkIiwiZGVsaXZlcmVkIiwiZGVjbGluZWQiLCJ1c2VWYWxpZGF0ZSIsInBob25lQ291bnRyeSIsImRpc3BsYXlJbnB1dEVycm9yIiwiZXJyb3JzIiwiaW5wdXROYW1lIiwic29tZSIsImVyciIsInBhdGgiLCJmaW5kIiwibWVzc2FnZSIsImRpc3BsYXlFcnJvck5hbWUiLCJpbnB1dE5hbWVUZXh0IiwiaW5wdXRFcnJvckNsYXNzbmFtZSIsInl1cCIsInN0cmluZyIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwidGVzdCIsInBob25lIiwiY3JlYXRlRXJyb3IiLCJwaG9uZU51bWJlciIsInBhcnNlUGhvbmVOdW1iZXIiLCJsZW5ndGgiLCJ0b1VwcGVyQ2FzZSIsImlzVmFsaWQiLCJsb2dpblNjaGVtYSIsInNoYXBlIiwidmFsaWRhdGVQaG9uZSIsInZhbGlkYXRlIiwiYWJvcnRFYXJseSIsInRoZW4iLCJjYXRjaCIsImlubmVyIiwicmVnaXN0ZXJTY2hlbWEiLCJmaXJzdG5hbWUiLCJyZXF1aXJlZCIsImxhc3RuYW1lIiwiZGF0ZV9vZl9iaXJ0aCIsInByb2R1Y3RNb2RhbFNjaGVtYSIsIm5hbWUiLCJwcm9kdWN0IiwiZmVlZEJhY2tTY2hlbWEiLCJyZXF1ZXN0Q2FsbFNjaGVtYSIsIndob2xlc2FsZXJzU2NoZW1hIiwibGljZW5zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBQSxvREFBQSxDQUFjLElBQWQ7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQjtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBckIsRUFBK0M7QUFDM0Msc0JBQ0ksOERBQUMsbURBQUQ7QUFBQSwyQkFDSSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7QUFFRCwrREFBZUYsV0FBZixFOzs7Ozs7Ozs7Ozs7QUNqQkEsU0FBU0csTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQXZCLEVBQXVDO0FBRXJDLFVBQVFELElBQVI7QUFDRSxTQUFLLGVBQUw7QUFDRSxhQUFPQyxJQUFQOztBQUNGO0FBQ0UsYUFBT0YsS0FBUDtBQUpKO0FBTUQ7O0FBRUQsK0RBQWVELE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNSSxPQUFPLGdCQUFHQyxnREFBQSxFQUFoQjtBQUNBLE1B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UHJvdmlkZXIgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IFwibW9tZW50L2xvY2FsZS9ydVwiO1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnO1xuXG5cbm1vbWVudC5sb2NhbGUoJ3J1Jyk7XG5cbmZ1bmN0aW9uIEFwcGxpY2F0aW9uKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvQ29udGV4dFByb3ZpZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcGxpY2F0aW9uO1xuIiwiZnVuY3Rpb24gYnVja2V0KHN0YXRlLCB7IHR5cGUsIGRhdGEgfSkge1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ0NIQU5HRV9CVUNLRVQnOlxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBidWNrZXQ7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYnVja2V0IGZyb20gJy4vYnVja2V0L3JlZHVjZXInO1xuaW1wb3J0IGluZm8gZnJvbSAnLi9pbmZvL3JlZHVjZXInO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vcHJvZHVjdHMvcmVkdWNlcic7XG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXIvcmVkdWNlcic7XG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJztcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICcuLi91dGlscyc7XG5cblxuY29uc3QgQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbmNvbnN0IGNvbWJpbmVkUmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBidWNrZXQsXG4gIGluZm8sXG4gIHByb2R1Y3RzLFxuICB1c2VyLFxufSk7XG5cbmZ1bmN0aW9uIENvbnRleHRQcm92aWRlcih7Y2hpbGRyZW59KSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihjb21iaW5lZFJlZHVjZXJzLCBpbml0aWFsU3RhdGUpO1xuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiBbc3RhdGUsIGRpc3BhdGNoXSwgW3N0YXRlLCBkaXNwYXRjaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5jb25zdCBjb25uZWN0Q29udGV4dCA9IChDb21wb25lbnQsIHNlbGVjdCkgPT4ge1xuICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW3N0b3JlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VDb250ZXh0KENvbnRleHQpXG4gICAgY29uc3QgZGF0YSA9IHsuLi4oc2VsZWN0ID8gc2VsZWN0KHN0b3JlKSA6IHt9KX1cbiAgICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICAgICgpID0+IChcbiAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgIHsuLi5kYXRhfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XG4gICAgICAgIC8+KSxcbiAgICAgIFtKU09OLnN0cmluZ2lmeShkYXRhKSwgSlNPTi5zdHJpbmdpZnkocHJvcHMpXSxcbiAgICApO1xuICB9O1xufTtcblxuZXhwb3J0IHtDb250ZXh0LCBDb250ZXh0UHJvdmlkZXIsIGNvbm5lY3RDb250ZXh0fTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgR0VUX0JBTk5FUlM6IFwiR0VUX0JBTk5FUlNcIixcbiAgR0VUX0ZBUTogXCJHRVRfRkFRXCIsXG4gIEdFVF9BQk9VVDogXCJHRVRfQUJPVVRcIixcbiAgR0VUX0NPTlRBQ1RTOiBcIkdFVF9DT05UQUNUU1wiLFxuICBHRVRfUEhBUk1BQ1k6IFwiR0VUX1BIQVJNQUNZXCIsXG4gIEdFVF9ORVdTOiBcIkdFVF9ORVdTXCIsXG59O1xuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuXG5mdW5jdGlvbiBpbmZvKHN0YXRlLCB7IHR5cGUsIC4uLnJlcyB9KSB7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBjb25zdGFudHMuR0VUX0JBTk5FUlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgICBiYW5uZXJzOiBPYmplY3QuYXNzaWduKHN0YXRlLmJhbm5lcnMsIHJlcyksXG4gICAgICB9KTtcbiAgICBjYXNlIGNvbnN0YW50cy5HRVRfRkFROlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICAgICAgZmFxOiBPYmplY3QuYXNzaWduKHN0YXRlLmZhcSwgcmVzKSxcbiAgICAgIH0pO1xuICAgIGNhc2UgY29uc3RhbnRzLkdFVF9BQk9VVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgICAgIGFib3V0OiBPYmplY3QuYXNzaWduKHN0YXRlLmFib3V0LCByZXMpLFxuICAgICAgfSk7XG4gICAgY2FzZSBjb25zdGFudHMuR0VUX0NPTlRBQ1RTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICAgICAgY29udGFjdHM6IE9iamVjdC5hc3NpZ24oc3RhdGUuY29udGFjdHMsIHJlcyksXG4gICAgICB9KTtcbiAgICBjYXNlIGNvbnN0YW50cy5HRVRfUEhBUk1BQ1k6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgICBwaGFybWFjeTogT2JqZWN0LmFzc2lnbihzdGF0ZS5waGFybWFjeSwgcmVzKSxcbiAgICAgIH0pO1xuICAgIGNhc2UgY29uc3RhbnRzLkdFVF9ORVdTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICAgICAgbmV3czogT2JqZWN0LmFzc2lnbihzdGF0ZS5uZXdzLCByZXMpLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZm87XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGJ1Y2tldDogW10sXG4gIHByb2R1Y3RzOiB7XG4gICAgYWxsOiB7XG4gICAgICBkYXRhOiBbXSxcbiAgICB9LFxuICAgIHRvcDoge1xuICAgICAgZGF0YTogW10sXG4gICAgfSxcbiAgICBzYWxlczoge1xuICAgICAgZGF0YTogW10sXG4gICAgfSxcbiAgICBjYXRhbG9nOiB7XG4gICAgICBkYXRhOiBbXSxcbiAgICB9LFxuICB9LFxuICB1c2VyOiB7XG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgb3RwOiB7fSxcbiAgICBpbmZvOiB7fSxcbiAgICBvcmRlcnM6IHtcbiAgICAgIGRhdGE6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMjM1LFxuICAgICAgICAgIHN0YXR1czogJ2FjY2VwdGVkJyxcbiAgICAgICAgICB0b3RhbFByaWNlOiAxMjM0LFxuICAgICAgICAgIG9yZGVyRGF0ZTogbmV3IERhdGUoMjAyMSwgNiwgMjIsIDEzLCA0MyksXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDY5MixcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnXSxcbiAgICAgICAgICAgICAgcHJldmlldzogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsXG4gICAgICAgICAgICAgIHRpdGxlOiAn0JLQuNGC0LDQvNC40L0g0KEgOTAwINC80LMgNSDQsyDQv9C+0YDQvtGILtGI0LjQv9GD0Ycu4oSWMTAg0YHQsNGI0LUt0L/QsNC60LXRgicsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0JIg0LrQsNGH0LXRgdGC0LLQtSDQsdC40L7Qu9C+0LPQuNGH0LXRgdC60Lgg0LDQutGC0LjQstC90L7QuSDQtNC+0LHQsNCy0LrQuCDQuiDQv9C40YnQtSwg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L7Qs9C+INC40YHRgtC+0YfQvdC40LrQsCDQstC40YLQsNC80LjQvdC+0LIg0Lgg0LzQuNC90LXRgNCw0LvQvtCyLicsXG4gICAgICAgICAgICAgIHJlY2VwdFJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICBvbGRQcmljZTogMTM5MjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMjk4MCxcbiAgICAgICAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBtYW51ZmFjdHVyZUNvdW50cnk6ICfQoNC+0YHRgdC40Y8nLFxuICAgICAgICAgICAgICBtYW51ZmFjdHVyZTogJ9CQ0JLQkNCd0KLQkCDQkNCeJyxcbiAgICAgICAgICAgICAgYnJhbmQ6ICfQkdCV0JvQntCg0KPQp9Ca0JAnLFxuICAgICAgICAgICAgICByZWxpemVGb3JtOiAn0JrRgNC10Lwg0LTQu9GPINGA0YPQuiA3NdC80LssINGC0YPQsdCwJyxcbiAgICAgICAgICAgICAgYW1vdW50OiAxLFxuICAgICAgICAgICAgICBjb21wb3NpdGlvbjogJ9Cy0L7QtNCwLCDQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC80LjQvdC10YDQsNC70YzQvdC+0LUsINC60LDQv9GA0LjQu9C40Lov0LrQsNC/0YDQuNC6INGC0YDQuNCz0LvQuNGG0LXRgNC40LQsINGG0LXRgtC10LDRgNC40LvQvtCy0YvQuSDRgdC/0LjRgNGCLCDQstCw0LfQtdC70LjQvSwg0LPQu9C40YbQtdGA0LjQu9GB0YLQtdCw0YDQsNGCLCDQs9C40LTRgNC+0LrRgdC40Y3RgtC40LvQvNC+0YfQtdCy0LjQvdCwLCDQtNC40LzQtdGC0LjQutC+0L0sINGE0LXQvdC+0LrRgdC40Y3RgtCw0L3QvtC7LCDRjdGC0LjQu9Cz0LXQutGB0LjQu9Cz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0L/QvtC00YHQvtC70L3QtdGH0L3QvtC1LCDQvNCw0YHQu9C+INGE0LjRgdGC0LDRiNC60L7QstC+0LUsINC80LDRgdC70L4g0L7Qu9C40LLQutC+0LLQvtC1LCDRhtC10YLQuNC70YTQvtGB0YTQsNGCINC60LDQu9C40Y8sINCy0LjRgtCw0LzQuNC9INCVLdCw0YbQtdGC0LDRgiwg0LLQuNGC0LDQvNC40L0gRiwg0J/QrdCTLTcg0LPQu9C40YbQtdGA0LjQu9C60L7QutC+0LDRgiwg0J/QrdCTLTQwINCz0LjQtNGA0L7Qs9C10L3QsNGCINC60LDRgdGC0L7RgNC+0LLQvtCz0L4g0LzQsNGB0LvQsCwg0LrQsNGA0LHQvtC80LXRgCwg0LDRgNC+0LzQsNGC0LjRh9C10YHQutCw0Y8g0LrQvtC80L/QvtC30LjRhtC40Y8g0LLQvtC00LAsINCz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0LzQuNC90LXRgNCw0LvRjNC90L7QtSwg0LrQsNC/0YDQuNC70LjQui/QutCw0L/RgNC40Log0YLRgNC40LPQu9C40YbQtdGA0LjQtCwg0YbQtdGC0LXQsNGA0LjQu9C+0LLRi9C5INGB0L/QuNGA0YIsINCy0LDQt9C10LvQuNC9LCDQs9C70LjRhtC10YDQuNC70YHRgtC10LDRgNCw0YIsINCz0LjQtNGA0L7QutGB0LjRjdGC0LjQu9C80L7Rh9C10LLQuNC90LAsINC00LjQvNC10YLQuNC60L7QvSwg0YTQtdC90L7QutGB0LjRjdGC0LDQvdC+0LssINGN0YLQuNC70LPQtdC60YHQuNC70LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQv9C+0LTRgdC+0LvQvdC10YfQvdC+0LUsINC80LDRgdC70L4g0YTQuNGB0YLQsNGI0LrQvtCy0L7QtSwg0LzQsNGB0LvQviDQvtC70LjQstC60L7QstC+0LUsINGG0LXRgtC40LvRhNC+0YHRhNCw0YIg0LrQsNC70LjRjywg0LLQuNGC0LDQvNC40L0g0JUt0LDRhtC10YLQsNGCLCDQstC40YLQsNC80LjQvSBGLCDQn9Ct0JMtNyDQs9C70LjRhtC10YDQuNC70LrQvtC60L7QsNGCLCDQn9Ct0JMtNDAg0LPQuNC00YDQvtCz0LXQvdCw0YIg0LrQsNGB0YLQvtGA0L7QstC+0LPQviDQvNCw0YHQu9CwLCDQutCw0YDQsdC+0LzQtdGALCDQsNGA0L7QvNCw0YLQuNGH0LXRgdC60LDRjyDQutC+0LzQv9C+0LfQuNGG0LjRjydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiA2OTMsXG4gICAgICAgICAgICAgIGltYWdlczogWydodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJ10sXG4gICAgICAgICAgICAgIHByZXZpZXc6ICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLFxuICAgICAgICAgICAgICB0aXRsZTogJ9CS0LjRgtCw0LzQuNC9INChIDkwMCDQvNCzIDUg0LMg0L/QvtGA0L7RiC7RiNC40L/Rg9GHLuKEljEwINGB0LDRiNC1LdC/0LDQutC10YInLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9CSINC60LDRh9C10YHRgtCy0LUg0LHQuNC+0LvQvtCz0LjRh9C10YHQutC4INCw0LrRgtC40LLQvdC+0Lkg0LTQvtCx0LDQstC60Lgg0Log0L/QuNGJ0LUsINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0LPQviDQuNGB0YLQvtGH0L3QuNC60LAg0LLQuNGC0LDQvNC40L3QvtCyINC4INC80LjQvdC10YDQsNC70L7Qsi4nLFxuICAgICAgICAgICAgICByZWNlcHRSZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgb2xkUHJpY2U6IDEzOTIwLFxuICAgICAgICAgICAgICBwcmljZTogMTI5ODAsXG4gICAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbWFudWZhY3R1cmVDb3VudHJ5OiAn0KDQvtGB0YHQuNGPJyxcbiAgICAgICAgICAgICAgbWFudWZhY3R1cmU6ICfQkNCS0JDQndCi0JAg0JDQnicsXG4gICAgICAgICAgICAgIGJyYW5kOiAn0JHQldCb0J7QoNCj0KfQmtCQJyxcbiAgICAgICAgICAgICAgcmVsaXplRm9ybTogJ9Ca0YDQtdC8INC00LvRjyDRgNGD0LogNzXQvNC7LCDRgtGD0LHQsCcsXG4gICAgICAgICAgICAgIGFtb3VudDogMixcbiAgICAgICAgICAgICAgY29tcG9zaXRpb246ICfQstC+0LTQsCwg0LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQvNC40L3QtdGA0LDQu9GM0L3QvtC1LCDQutCw0L/RgNC40LvQuNC6L9C60LDQv9GA0LjQuiDRgtGA0LjQs9C70LjRhtC10YDQuNC0LCDRhtC10YLQtdCw0YDQuNC70L7QstGL0Lkg0YHQv9C40YDRgiwg0LLQsNC30LXQu9C40L0sINCz0LvQuNGG0LXRgNC40LvRgdGC0LXQsNGA0LDRgiwg0LPQuNC00YDQvtC60YHQuNGN0YLQuNC70LzQvtGH0LXQstC40L3QsCwg0LTQuNC80LXRgtC40LrQvtC9LCDRhNC10L3QvtC60YHQuNGN0YLQsNC90L7Quywg0Y3RgtC40LvQs9C10LrRgdC40LvQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC/0L7QtNGB0L7Qu9C90LXRh9C90L7QtSwg0LzQsNGB0LvQviDRhNC40YHRgtCw0YjQutC+0LLQvtC1LCDQvNCw0YHQu9C+INC+0LvQuNCy0LrQvtCy0L7QtSwg0YbQtdGC0LjQu9GE0L7RgdGE0LDRgiDQutCw0LvQuNGPLCDQstC40YLQsNC80LjQvSDQlS3QsNGG0LXRgtCw0YIsINCy0LjRgtCw0LzQuNC9IEYsINCf0K3Qky03INCz0LvQuNGG0LXRgNC40LvQutC+0LrQvtCw0YIsINCf0K3Qky00MCDQs9C40LTRgNC+0LPQtdC90LDRgiDQutCw0YHRgtC+0YDQvtCy0L7Qs9C+INC80LDRgdC70LAsINC60LDRgNCx0L7QvNC10YAsINCw0YDQvtC80LDRgtC40YfQtdGB0LrQsNGPINC60L7QvNC/0L7Qt9C40YbQuNGPINCy0L7QtNCwLCDQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC80LjQvdC10YDQsNC70YzQvdC+0LUsINC60LDQv9GA0LjQu9C40Lov0LrQsNC/0YDQuNC6INGC0YDQuNCz0LvQuNGG0LXRgNC40LQsINGG0LXRgtC10LDRgNC40LvQvtCy0YvQuSDRgdC/0LjRgNGCLCDQstCw0LfQtdC70LjQvSwg0LPQu9C40YbQtdGA0LjQu9GB0YLQtdCw0YDQsNGCLCDQs9C40LTRgNC+0LrRgdC40Y3RgtC40LvQvNC+0YfQtdCy0LjQvdCwLCDQtNC40LzQtdGC0LjQutC+0L0sINGE0LXQvdC+0LrRgdC40Y3RgtCw0L3QvtC7LCDRjdGC0LjQu9Cz0LXQutGB0LjQu9Cz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0L/QvtC00YHQvtC70L3QtdGH0L3QvtC1LCDQvNCw0YHQu9C+INGE0LjRgdGC0LDRiNC60L7QstC+0LUsINC80LDRgdC70L4g0L7Qu9C40LLQutC+0LLQvtC1LCDRhtC10YLQuNC70YTQvtGB0YTQsNGCINC60LDQu9C40Y8sINCy0LjRgtCw0LzQuNC9INCVLdCw0YbQtdGC0LDRgiwg0LLQuNGC0LDQvNC40L0gRiwg0J/QrdCTLTcg0LPQu9C40YbQtdGA0LjQu9C60L7QutC+0LDRgiwg0J/QrdCTLTQwINCz0LjQtNGA0L7Qs9C10L3QsNGCINC60LDRgdGC0L7RgNC+0LLQvtCz0L4g0LzQsNGB0LvQsCwg0LrQsNGA0LHQvtC80LXRgCwg0LDRgNC+0LzQsNGC0LjRh9C10YHQutCw0Y8g0LrQvtC80L/QvtC30LjRhtC40Y8nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogNjk0LFxuICAgICAgICAgICAgICBpbWFnZXM6IFsnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVSddLFxuICAgICAgICAgICAgICBwcmV2aWV3OiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfQktC40YLQsNC80LjQvSDQoSA5MDAg0LzQsyA1INCzINC/0L7RgNC+0Ygu0YjQuNC/0YPRhy7ihJYxMCDRgdCw0YjQtS3Qv9Cw0LrQtdGCJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQkiDQutCw0YfQtdGB0YLQstC1INCx0LjQvtC70L7Qs9C40YfQtdGB0LrQuCDQsNC60YLQuNCy0L3QvtC5INC00L7QsdCw0LLQutC4INC6INC/0LjRidC1LCDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtCz0L4g0LjRgdGC0L7Rh9C90LjQutCwINCy0LjRgtCw0LzQuNC90L7QsiDQuCDQvNC40L3QtdGA0LDQu9C+0LIuJyxcbiAgICAgICAgICAgICAgcmVjZXB0UmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgIG9sZFByaWNlOiAxMzkyMCxcbiAgICAgICAgICAgICAgcHJpY2U6IDEyOTgwLFxuICAgICAgICAgICAgICBhdmFpbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIG1hbnVmYWN0dXJlQ291bnRyeTogJ9Cg0L7RgdGB0LjRjycsXG4gICAgICAgICAgICAgIG1hbnVmYWN0dXJlOiAn0JDQktCQ0J3QotCQINCQ0J4nLFxuICAgICAgICAgICAgICBicmFuZDogJ9CR0JXQm9Ce0KDQo9Cn0JrQkCcsXG4gICAgICAgICAgICAgIHJlbGl6ZUZvcm06ICfQmtGA0LXQvCDQtNC70Y8g0YDRg9C6IDc10LzQuywg0YLRg9Cx0LAnLFxuICAgICAgICAgICAgICBhbW91bnQ6IDEsXG4gICAgICAgICAgICAgIGNvbXBvc2l0aW9uOiAn0LLQvtC00LAsINCz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0LzQuNC90LXRgNCw0LvRjNC90L7QtSwg0LrQsNC/0YDQuNC70LjQui/QutCw0L/RgNC40Log0YLRgNC40LPQu9C40YbQtdGA0LjQtCwg0YbQtdGC0LXQsNGA0LjQu9C+0LLRi9C5INGB0L/QuNGA0YIsINCy0LDQt9C10LvQuNC9LCDQs9C70LjRhtC10YDQuNC70YHRgtC10LDRgNCw0YIsINCz0LjQtNGA0L7QutGB0LjRjdGC0LjQu9C80L7Rh9C10LLQuNC90LAsINC00LjQvNC10YLQuNC60L7QvSwg0YTQtdC90L7QutGB0LjRjdGC0LDQvdC+0LssINGN0YLQuNC70LPQtdC60YHQuNC70LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQv9C+0LTRgdC+0LvQvdC10YfQvdC+0LUsINC80LDRgdC70L4g0YTQuNGB0YLQsNGI0LrQvtCy0L7QtSwg0LzQsNGB0LvQviDQvtC70LjQstC60L7QstC+0LUsINGG0LXRgtC40LvRhNC+0YHRhNCw0YIg0LrQsNC70LjRjywg0LLQuNGC0LDQvNC40L0g0JUt0LDRhtC10YLQsNGCLCDQstC40YLQsNC80LjQvSBGLCDQn9Ct0JMtNyDQs9C70LjRhtC10YDQuNC70LrQvtC60L7QsNGCLCDQn9Ct0JMtNDAg0LPQuNC00YDQvtCz0LXQvdCw0YIg0LrQsNGB0YLQvtGA0L7QstC+0LPQviDQvNCw0YHQu9CwLCDQutCw0YDQsdC+0LzQtdGALCDQsNGA0L7QvNCw0YLQuNGH0LXRgdC60LDRjyDQutC+0LzQv9C+0LfQuNGG0LjRjyDQstC+0LTQsCwg0LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQvNC40L3QtdGA0LDQu9GM0L3QvtC1LCDQutCw0L/RgNC40LvQuNC6L9C60LDQv9GA0LjQuiDRgtGA0LjQs9C70LjRhtC10YDQuNC0LCDRhtC10YLQtdCw0YDQuNC70L7QstGL0Lkg0YHQv9C40YDRgiwg0LLQsNC30LXQu9C40L0sINCz0LvQuNGG0LXRgNC40LvRgdGC0LXQsNGA0LDRgiwg0LPQuNC00YDQvtC60YHQuNGN0YLQuNC70LzQvtGH0LXQstC40L3QsCwg0LTQuNC80LXRgtC40LrQvtC9LCDRhNC10L3QvtC60YHQuNGN0YLQsNC90L7Quywg0Y3RgtC40LvQs9C10LrRgdC40LvQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC/0L7QtNGB0L7Qu9C90LXRh9C90L7QtSwg0LzQsNGB0LvQviDRhNC40YHRgtCw0YjQutC+0LLQvtC1LCDQvNCw0YHQu9C+INC+0LvQuNCy0LrQvtCy0L7QtSwg0YbQtdGC0LjQu9GE0L7RgdGE0LDRgiDQutCw0LvQuNGPLCDQstC40YLQsNC80LjQvSDQlS3QsNGG0LXRgtCw0YIsINCy0LjRgtCw0LzQuNC9IEYsINCf0K3Qky03INCz0LvQuNGG0LXRgNC40LvQutC+0LrQvtCw0YIsINCf0K3Qky00MCDQs9C40LTRgNC+0LPQtdC90LDRgiDQutCw0YHRgtC+0YDQvtCy0L7Qs9C+INC80LDRgdC70LAsINC60LDRgNCx0L7QvNC10YAsINCw0YDQvtC80LDRgtC40YfQtdGB0LrQsNGPINC60L7QvNC/0L7Qt9C40YbQuNGPJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxMzM1LFxuICAgICAgICAgIHN0YXR1czogJ2RlbGl2ZXJlZCcsXG4gICAgICAgICAgdG90YWxQcmljZTogMTIzNCxcbiAgICAgICAgICBvcmRlckRhdGU6IG5ldyBEYXRlKDIwMjEsIDEsIDE1LCAxOCwgNDMpLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiA2OTIsXG4gICAgICAgICAgICAgIGltYWdlczogWydodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJ10sXG4gICAgICAgICAgICAgIHByZXZpZXc6ICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLFxuICAgICAgICAgICAgICB0aXRsZTogJ9CS0LjRgtCw0LzQuNC9INChIDkwMCDQvNCzIDUg0LMg0L/QvtGA0L7RiC7RiNC40L/Rg9GHLuKEljEwINGB0LDRiNC1LdC/0LDQutC10YInLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9CSINC60LDRh9C10YHRgtCy0LUg0LHQuNC+0LvQvtCz0LjRh9C10YHQutC4INCw0LrRgtC40LLQvdC+0Lkg0LTQvtCx0LDQstC60Lgg0Log0L/QuNGJ0LUsINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0LPQviDQuNGB0YLQvtGH0L3QuNC60LAg0LLQuNGC0LDQvNC40L3QvtCyINC4INC80LjQvdC10YDQsNC70L7Qsi4nLFxuICAgICAgICAgICAgICByZWNlcHRSZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgb2xkUHJpY2U6IDEzOTIwLFxuICAgICAgICAgICAgICBwcmljZTogMTI5ODAsXG4gICAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbWFudWZhY3R1cmVDb3VudHJ5OiAn0KDQvtGB0YHQuNGPJyxcbiAgICAgICAgICAgICAgbWFudWZhY3R1cmU6ICfQkNCS0JDQndCi0JAg0JDQnicsXG4gICAgICAgICAgICAgIGJyYW5kOiAn0JHQldCb0J7QoNCj0KfQmtCQJyxcbiAgICAgICAgICAgICAgcmVsaXplRm9ybTogJ9Ca0YDQtdC8INC00LvRjyDRgNGD0LogNzXQvNC7LCDRgtGD0LHQsCcsXG4gICAgICAgICAgICAgIGFtb3VudDogNCxcbiAgICAgICAgICAgICAgY29tcG9zaXRpb246ICfQstC+0LTQsCwg0LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQvNC40L3QtdGA0LDQu9GM0L3QvtC1LCDQutCw0L/RgNC40LvQuNC6L9C60LDQv9GA0LjQuiDRgtGA0LjQs9C70LjRhtC10YDQuNC0LCDRhtC10YLQtdCw0YDQuNC70L7QstGL0Lkg0YHQv9C40YDRgiwg0LLQsNC30LXQu9C40L0sINCz0LvQuNGG0LXRgNC40LvRgdGC0LXQsNGA0LDRgiwg0LPQuNC00YDQvtC60YHQuNGN0YLQuNC70LzQvtGH0LXQstC40L3QsCwg0LTQuNC80LXRgtC40LrQvtC9LCDRhNC10L3QvtC60YHQuNGN0YLQsNC90L7Quywg0Y3RgtC40LvQs9C10LrRgdC40LvQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC/0L7QtNGB0L7Qu9C90LXRh9C90L7QtSwg0LzQsNGB0LvQviDRhNC40YHRgtCw0YjQutC+0LLQvtC1LCDQvNCw0YHQu9C+INC+0LvQuNCy0LrQvtCy0L7QtSwg0YbQtdGC0LjQu9GE0L7RgdGE0LDRgiDQutCw0LvQuNGPLCDQstC40YLQsNC80LjQvSDQlS3QsNGG0LXRgtCw0YIsINCy0LjRgtCw0LzQuNC9IEYsINCf0K3Qky03INCz0LvQuNGG0LXRgNC40LvQutC+0LrQvtCw0YIsINCf0K3Qky00MCDQs9C40LTRgNC+0LPQtdC90LDRgiDQutCw0YHRgtC+0YDQvtCy0L7Qs9C+INC80LDRgdC70LAsINC60LDRgNCx0L7QvNC10YAsINCw0YDQvtC80LDRgtC40YfQtdGB0LrQsNGPINC60L7QvNC/0L7Qt9C40YbQuNGPINCy0L7QtNCwLCDQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC80LjQvdC10YDQsNC70YzQvdC+0LUsINC60LDQv9GA0LjQu9C40Lov0LrQsNC/0YDQuNC6INGC0YDQuNCz0LvQuNGG0LXRgNC40LQsINGG0LXRgtC10LDRgNC40LvQvtCy0YvQuSDRgdC/0LjRgNGCLCDQstCw0LfQtdC70LjQvSwg0LPQu9C40YbQtdGA0LjQu9GB0YLQtdCw0YDQsNGCLCDQs9C40LTRgNC+0LrRgdC40Y3RgtC40LvQvNC+0YfQtdCy0LjQvdCwLCDQtNC40LzQtdGC0LjQutC+0L0sINGE0LXQvdC+0LrRgdC40Y3RgtCw0L3QvtC7LCDRjdGC0LjQu9Cz0LXQutGB0LjQu9Cz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0L/QvtC00YHQvtC70L3QtdGH0L3QvtC1LCDQvNCw0YHQu9C+INGE0LjRgdGC0LDRiNC60L7QstC+0LUsINC80LDRgdC70L4g0L7Qu9C40LLQutC+0LLQvtC1LCDRhtC10YLQuNC70YTQvtGB0YTQsNGCINC60LDQu9C40Y8sINCy0LjRgtCw0LzQuNC9INCVLdCw0YbQtdGC0LDRgiwg0LLQuNGC0LDQvNC40L0gRiwg0J/QrdCTLTcg0LPQu9C40YbQtdGA0LjQu9C60L7QutC+0LDRgiwg0J/QrdCTLTQwINCz0LjQtNGA0L7Qs9C10L3QsNGCINC60LDRgdGC0L7RgNC+0LLQvtCz0L4g0LzQsNGB0LvQsCwg0LrQsNGA0LHQvtC80LXRgCwg0LDRgNC+0LzQsNGC0LjRh9C10YHQutCw0Y8g0LrQvtC80L/QvtC30LjRhtC40Y8nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogNjkzLFxuICAgICAgICAgICAgICBpbWFnZXM6IFsnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVSddLFxuICAgICAgICAgICAgICBwcmV2aWV3OiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfQktC40YLQsNC80LjQvSDQoSA5MDAg0LzQsyA1INCzINC/0L7RgNC+0Ygu0YjQuNC/0YPRhy7ihJYxMCDRgdCw0YjQtS3Qv9Cw0LrQtdGCJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQkiDQutCw0YfQtdGB0YLQstC1INCx0LjQvtC70L7Qs9C40YfQtdGB0LrQuCDQsNC60YLQuNCy0L3QvtC5INC00L7QsdCw0LLQutC4INC6INC/0LjRidC1LCDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtCz0L4g0LjRgdGC0L7Rh9C90LjQutCwINCy0LjRgtCw0LzQuNC90L7QsiDQuCDQvNC40L3QtdGA0LDQu9C+0LIuJyxcbiAgICAgICAgICAgICAgcmVjZXB0UmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgIG9sZFByaWNlOiAxMzkyMCxcbiAgICAgICAgICAgICAgcHJpY2U6IDEyOTgwLFxuICAgICAgICAgICAgICBhdmFpbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIG1hbnVmYWN0dXJlQ291bnRyeTogJ9Cg0L7RgdGB0LjRjycsXG4gICAgICAgICAgICAgIG1hbnVmYWN0dXJlOiAn0JDQktCQ0J3QotCQINCQ0J4nLFxuICAgICAgICAgICAgICBicmFuZDogJ9CR0JXQm9Ce0KDQo9Cn0JrQkCcsXG4gICAgICAgICAgICAgIHJlbGl6ZUZvcm06ICfQmtGA0LXQvCDQtNC70Y8g0YDRg9C6IDc10LzQuywg0YLRg9Cx0LAnLFxuICAgICAgICAgICAgICBhbW91bnQ6IDEsXG4gICAgICAgICAgICAgIGNvbXBvc2l0aW9uOiAn0LLQvtC00LAsINCz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0LzQuNC90LXRgNCw0LvRjNC90L7QtSwg0LrQsNC/0YDQuNC70LjQui/QutCw0L/RgNC40Log0YLRgNC40LPQu9C40YbQtdGA0LjQtCwg0YbQtdGC0LXQsNGA0LjQu9C+0LLRi9C5INGB0L/QuNGA0YIsINCy0LDQt9C10LvQuNC9LCDQs9C70LjRhtC10YDQuNC70YHRgtC10LDRgNCw0YIsINCz0LjQtNGA0L7QutGB0LjRjdGC0LjQu9C80L7Rh9C10LLQuNC90LAsINC00LjQvNC10YLQuNC60L7QvSwg0YTQtdC90L7QutGB0LjRjdGC0LDQvdC+0LssINGN0YLQuNC70LPQtdC60YHQuNC70LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQv9C+0LTRgdC+0LvQvdC10YfQvdC+0LUsINC80LDRgdC70L4g0YTQuNGB0YLQsNGI0LrQvtCy0L7QtSwg0LzQsNGB0LvQviDQvtC70LjQstC60L7QstC+0LUsINGG0LXRgtC40LvRhNC+0YHRhNCw0YIg0LrQsNC70LjRjywg0LLQuNGC0LDQvNC40L0g0JUt0LDRhtC10YLQsNGCLCDQstC40YLQsNC80LjQvSBGLCDQn9Ct0JMtNyDQs9C70LjRhtC10YDQuNC70LrQvtC60L7QsNGCLCDQn9Ct0JMtNDAg0LPQuNC00YDQvtCz0LXQvdCw0YIg0LrQsNGB0YLQvtGA0L7QstC+0LPQviDQvNCw0YHQu9CwLCDQutCw0YDQsdC+0LzQtdGALCDQsNGA0L7QvNCw0YLQuNGH0LXRgdC60LDRjyDQutC+0LzQv9C+0LfQuNGG0LjRjyDQstC+0LTQsCwg0LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQvNC40L3QtdGA0LDQu9GM0L3QvtC1LCDQutCw0L/RgNC40LvQuNC6L9C60LDQv9GA0LjQuiDRgtGA0LjQs9C70LjRhtC10YDQuNC0LCDRhtC10YLQtdCw0YDQuNC70L7QstGL0Lkg0YHQv9C40YDRgiwg0LLQsNC30LXQu9C40L0sINCz0LvQuNGG0LXRgNC40LvRgdGC0LXQsNGA0LDRgiwg0LPQuNC00YDQvtC60YHQuNGN0YLQuNC70LzQvtGH0LXQstC40L3QsCwg0LTQuNC80LXRgtC40LrQvtC9LCDRhNC10L3QvtC60YHQuNGN0YLQsNC90L7Quywg0Y3RgtC40LvQs9C10LrRgdC40LvQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC/0L7QtNGB0L7Qu9C90LXRh9C90L7QtSwg0LzQsNGB0LvQviDRhNC40YHRgtCw0YjQutC+0LLQvtC1LCDQvNCw0YHQu9C+INC+0LvQuNCy0LrQvtCy0L7QtSwg0YbQtdGC0LjQu9GE0L7RgdGE0LDRgiDQutCw0LvQuNGPLCDQstC40YLQsNC80LjQvSDQlS3QsNGG0LXRgtCw0YIsINCy0LjRgtCw0LzQuNC9IEYsINCf0K3Qky03INCz0LvQuNGG0LXRgNC40LvQutC+0LrQvtCw0YIsINCf0K3Qky00MCDQs9C40LTRgNC+0LPQtdC90LDRgiDQutCw0YHRgtC+0YDQvtCy0L7Qs9C+INC80LDRgdC70LAsINC60LDRgNCx0L7QvNC10YAsINCw0YDQvtC80LDRgtC40YfQtdGB0LrQsNGPINC60L7QvNC/0L7Qt9C40YbQuNGPJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDY5NCxcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnXSxcbiAgICAgICAgICAgICAgcHJldmlldzogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsXG4gICAgICAgICAgICAgIHRpdGxlOiAn0JLQuNGC0LDQvNC40L0g0KEgOTAwINC80LMgNSDQsyDQv9C+0YDQvtGILtGI0LjQv9GD0Ycu4oSWMTAg0YHQsNGI0LUt0L/QsNC60LXRgicsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0JIg0LrQsNGH0LXRgdGC0LLQtSDQsdC40L7Qu9C+0LPQuNGH0LXRgdC60Lgg0LDQutGC0LjQstC90L7QuSDQtNC+0LHQsNCy0LrQuCDQuiDQv9C40YnQtSwg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L7Qs9C+INC40YHRgtC+0YfQvdC40LrQsCDQstC40YLQsNC80LjQvdC+0LIg0Lgg0LzQuNC90LXRgNCw0LvQvtCyLicsXG4gICAgICAgICAgICAgIHJlY2VwdFJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICBvbGRQcmljZTogMTM5MjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMjk4MCxcbiAgICAgICAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBtYW51ZmFjdHVyZUNvdW50cnk6ICfQoNC+0YHRgdC40Y8nLFxuICAgICAgICAgICAgICBtYW51ZmFjdHVyZTogJ9CQ0JLQkNCd0KLQkCDQkNCeJyxcbiAgICAgICAgICAgICAgYnJhbmQ6ICfQkdCV0JvQntCg0KPQp9Ca0JAnLFxuICAgICAgICAgICAgICByZWxpemVGb3JtOiAn0JrRgNC10Lwg0LTQu9GPINGA0YPQuiA3NdC80LssINGC0YPQsdCwJyxcbiAgICAgICAgICAgICAgYW1vdW50OiAxLFxuICAgICAgICAgICAgICBjb21wb3NpdGlvbjogJ9Cy0L7QtNCwLCDQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC80LjQvdC10YDQsNC70YzQvdC+0LUsINC60LDQv9GA0LjQu9C40Lov0LrQsNC/0YDQuNC6INGC0YDQuNCz0LvQuNGG0LXRgNC40LQsINGG0LXRgtC10LDRgNC40LvQvtCy0YvQuSDRgdC/0LjRgNGCLCDQstCw0LfQtdC70LjQvSwg0LPQu9C40YbQtdGA0LjQu9GB0YLQtdCw0YDQsNGCLCDQs9C40LTRgNC+0LrRgdC40Y3RgtC40LvQvNC+0YfQtdCy0LjQvdCwLCDQtNC40LzQtdGC0LjQutC+0L0sINGE0LXQvdC+0LrRgdC40Y3RgtCw0L3QvtC7LCDRjdGC0LjQu9Cz0LXQutGB0LjQu9Cz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0L/QvtC00YHQvtC70L3QtdGH0L3QvtC1LCDQvNCw0YHQu9C+INGE0LjRgdGC0LDRiNC60L7QstC+0LUsINC80LDRgdC70L4g0L7Qu9C40LLQutC+0LLQvtC1LCDRhtC10YLQuNC70YTQvtGB0YTQsNGCINC60LDQu9C40Y8sINCy0LjRgtCw0LzQuNC9INCVLdCw0YbQtdGC0LDRgiwg0LLQuNGC0LDQvNC40L0gRiwg0J/QrdCTLTcg0LPQu9C40YbQtdGA0LjQu9C60L7QutC+0LDRgiwg0J/QrdCTLTQwINCz0LjQtNGA0L7Qs9C10L3QsNGCINC60LDRgdGC0L7RgNC+0LLQvtCz0L4g0LzQsNGB0LvQsCwg0LrQsNGA0LHQvtC80LXRgCwg0LDRgNC+0LzQsNGC0LjRh9C10YHQutCw0Y8g0LrQvtC80L/QvtC30LjRhtC40Y8g0LLQvtC00LAsINCz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0LzQuNC90LXRgNCw0LvRjNC90L7QtSwg0LrQsNC/0YDQuNC70LjQui/QutCw0L/RgNC40Log0YLRgNC40LPQu9C40YbQtdGA0LjQtCwg0YbQtdGC0LXQsNGA0LjQu9C+0LLRi9C5INGB0L/QuNGA0YIsINCy0LDQt9C10LvQuNC9LCDQs9C70LjRhtC10YDQuNC70YHRgtC10LDRgNCw0YIsINCz0LjQtNGA0L7QutGB0LjRjdGC0LjQu9C80L7Rh9C10LLQuNC90LAsINC00LjQvNC10YLQuNC60L7QvSwg0YTQtdC90L7QutGB0LjRjdGC0LDQvdC+0LssINGN0YLQuNC70LPQtdC60YHQuNC70LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQv9C+0LTRgdC+0LvQvdC10YfQvdC+0LUsINC80LDRgdC70L4g0YTQuNGB0YLQsNGI0LrQvtCy0L7QtSwg0LzQsNGB0LvQviDQvtC70LjQstC60L7QstC+0LUsINGG0LXRgtC40LvRhNC+0YHRhNCw0YIg0LrQsNC70LjRjywg0LLQuNGC0LDQvNC40L0g0JUt0LDRhtC10YLQsNGCLCDQstC40YLQsNC80LjQvSBGLCDQn9Ct0JMtNyDQs9C70LjRhtC10YDQuNC70LrQvtC60L7QsNGCLCDQn9Ct0JMtNDAg0LPQuNC00YDQvtCz0LXQvdCw0YIg0LrQsNGB0YLQvtGA0L7QstC+0LPQviDQvNCw0YHQu9CwLCDQutCw0YDQsdC+0LzQtdGALCDQsNGA0L7QvNCw0YLQuNGH0LXRgdC60LDRjyDQutC+0LzQv9C+0LfQuNGG0LjRjydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMjMzNSxcbiAgICAgICAgICBzdGF0dXM6ICdkZWNsaW5lZCcsXG4gICAgICAgICAgdG90YWxQcmljZTogMTIzNCxcbiAgICAgICAgICBvcmRlckRhdGU6IG5ldyBEYXRlKDIwMjEsIDIsIDI1LCAxNiwgNDMpLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiA2OTIsXG4gICAgICAgICAgICAgIGltYWdlczogWydodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJ10sXG4gICAgICAgICAgICAgIHByZXZpZXc6ICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLFxuICAgICAgICAgICAgICB0aXRsZTogJ9CS0LjRgtCw0LzQuNC9INChIDkwMCDQvNCzIDUg0LMg0L/QvtGA0L7RiC7RiNC40L/Rg9GHLuKEljEwINGB0LDRiNC1LdC/0LDQutC10YInLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ9CSINC60LDRh9C10YHRgtCy0LUg0LHQuNC+0LvQvtCz0LjRh9C10YHQutC4INCw0LrRgtC40LLQvdC+0Lkg0LTQvtCx0LDQstC60Lgg0Log0L/QuNGJ0LUsINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0LPQviDQuNGB0YLQvtGH0L3QuNC60LAg0LLQuNGC0LDQvNC40L3QvtCyINC4INC80LjQvdC10YDQsNC70L7Qsi4nLFxuICAgICAgICAgICAgICByZWNlcHRSZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgb2xkUHJpY2U6IDEzOTIwLFxuICAgICAgICAgICAgICBwcmljZTogMTI5ODAsXG4gICAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgbWFudWZhY3R1cmVDb3VudHJ5OiAn0KDQvtGB0YHQuNGPJyxcbiAgICAgICAgICAgICAgbWFudWZhY3R1cmU6ICfQkNCS0JDQndCi0JAg0JDQnicsXG4gICAgICAgICAgICAgIGJyYW5kOiAn0JHQldCb0J7QoNCj0KfQmtCQJyxcbiAgICAgICAgICAgICAgcmVsaXplRm9ybTogJ9Ca0YDQtdC8INC00LvRjyDRgNGD0LogNzXQvNC7LCDRgtGD0LHQsCcsXG4gICAgICAgICAgICAgIGFtb3VudDogMyxcbiAgICAgICAgICAgICAgY29tcG9zaXRpb246ICfQstC+0LTQsCwg0LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQvNC40L3QtdGA0LDQu9GM0L3QvtC1LCDQutCw0L/RgNC40LvQuNC6L9C60LDQv9GA0LjQuiDRgtGA0LjQs9C70LjRhtC10YDQuNC0LCDRhtC10YLQtdCw0YDQuNC70L7QstGL0Lkg0YHQv9C40YDRgiwg0LLQsNC30LXQu9C40L0sINCz0LvQuNGG0LXRgNC40LvRgdGC0LXQsNGA0LDRgiwg0LPQuNC00YDQvtC60YHQuNGN0YLQuNC70LzQvtGH0LXQstC40L3QsCwg0LTQuNC80LXRgtC40LrQvtC9LCDRhNC10L3QvtC60YHQuNGN0YLQsNC90L7Quywg0Y3RgtC40LvQs9C10LrRgdC40LvQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC/0L7QtNGB0L7Qu9C90LXRh9C90L7QtSwg0LzQsNGB0LvQviDRhNC40YHRgtCw0YjQutC+0LLQvtC1LCDQvNCw0YHQu9C+INC+0LvQuNCy0LrQvtCy0L7QtSwg0YbQtdGC0LjQu9GE0L7RgdGE0LDRgiDQutCw0LvQuNGPLCDQstC40YLQsNC80LjQvSDQlS3QsNGG0LXRgtCw0YIsINCy0LjRgtCw0LzQuNC9IEYsINCf0K3Qky03INCz0LvQuNGG0LXRgNC40LvQutC+0LrQvtCw0YIsINCf0K3Qky00MCDQs9C40LTRgNC+0LPQtdC90LDRgiDQutCw0YHRgtC+0YDQvtCy0L7Qs9C+INC80LDRgdC70LAsINC60LDRgNCx0L7QvNC10YAsINCw0YDQvtC80LDRgtC40YfQtdGB0LrQsNGPINC60L7QvNC/0L7Qt9C40YbQuNGPINCy0L7QtNCwLCDQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC80LjQvdC10YDQsNC70YzQvdC+0LUsINC60LDQv9GA0LjQu9C40Lov0LrQsNC/0YDQuNC6INGC0YDQuNCz0LvQuNGG0LXRgNC40LQsINGG0LXRgtC10LDRgNC40LvQvtCy0YvQuSDRgdC/0LjRgNGCLCDQstCw0LfQtdC70LjQvSwg0LPQu9C40YbQtdGA0LjQu9GB0YLQtdCw0YDQsNGCLCDQs9C40LTRgNC+0LrRgdC40Y3RgtC40LvQvNC+0YfQtdCy0LjQvdCwLCDQtNC40LzQtdGC0LjQutC+0L0sINGE0LXQvdC+0LrRgdC40Y3RgtCw0L3QvtC7LCDRjdGC0LjQu9Cz0LXQutGB0LjQu9Cz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0L/QvtC00YHQvtC70L3QtdGH0L3QvtC1LCDQvNCw0YHQu9C+INGE0LjRgdGC0LDRiNC60L7QstC+0LUsINC80LDRgdC70L4g0L7Qu9C40LLQutC+0LLQvtC1LCDRhtC10YLQuNC70YTQvtGB0YTQsNGCINC60LDQu9C40Y8sINCy0LjRgtCw0LzQuNC9INCVLdCw0YbQtdGC0LDRgiwg0LLQuNGC0LDQvNC40L0gRiwg0J/QrdCTLTcg0LPQu9C40YbQtdGA0LjQu9C60L7QutC+0LDRgiwg0J/QrdCTLTQwINCz0LjQtNGA0L7Qs9C10L3QsNGCINC60LDRgdGC0L7RgNC+0LLQvtCz0L4g0LzQsNGB0LvQsCwg0LrQsNGA0LHQvtC80LXRgCwg0LDRgNC+0LzQsNGC0LjRh9C10YHQutCw0Y8g0LrQvtC80L/QvtC30LjRhtC40Y8nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogNjkzLFxuICAgICAgICAgICAgICBpbWFnZXM6IFsnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVSddLFxuICAgICAgICAgICAgICBwcmV2aWV3OiAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJyxcbiAgICAgICAgICAgICAgdGl0bGU6ICfQktC40YLQsNC80LjQvSDQoSA5MDAg0LzQsyA1INCzINC/0L7RgNC+0Ygu0YjQuNC/0YPRhy7ihJYxMCDRgdCw0YjQtS3Qv9Cw0LrQtdGCJyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQkiDQutCw0YfQtdGB0YLQstC1INCx0LjQvtC70L7Qs9C40YfQtdGB0LrQuCDQsNC60YLQuNCy0L3QvtC5INC00L7QsdCw0LLQutC4INC6INC/0LjRidC1LCDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtCz0L4g0LjRgdGC0L7Rh9C90LjQutCwINCy0LjRgtCw0LzQuNC90L7QsiDQuCDQvNC40L3QtdGA0LDQu9C+0LIuJyxcbiAgICAgICAgICAgICAgcmVjZXB0UmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgIG9sZFByaWNlOiAxMzkyMCxcbiAgICAgICAgICAgICAgcHJpY2U6IDEyOTgwLFxuICAgICAgICAgICAgICBhdmFpbGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIG1hbnVmYWN0dXJlQ291bnRyeTogJ9Cg0L7RgdGB0LjRjycsXG4gICAgICAgICAgICAgIG1hbnVmYWN0dXJlOiAn0JDQktCQ0J3QotCQINCQ0J4nLFxuICAgICAgICAgICAgICBicmFuZDogJ9CR0JXQm9Ce0KDQo9Cn0JrQkCcsXG4gICAgICAgICAgICAgIHJlbGl6ZUZvcm06ICfQmtGA0LXQvCDQtNC70Y8g0YDRg9C6IDc10LzQuywg0YLRg9Cx0LAnLFxuICAgICAgICAgICAgICBhbW91bnQ6IDEsXG4gICAgICAgICAgICAgIGNvbXBvc2l0aW9uOiAn0LLQvtC00LAsINCz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0LzQuNC90LXRgNCw0LvRjNC90L7QtSwg0LrQsNC/0YDQuNC70LjQui/QutCw0L/RgNC40Log0YLRgNC40LPQu9C40YbQtdGA0LjQtCwg0YbQtdGC0LXQsNGA0LjQu9C+0LLRi9C5INGB0L/QuNGA0YIsINCy0LDQt9C10LvQuNC9LCDQs9C70LjRhtC10YDQuNC70YHRgtC10LDRgNCw0YIsINCz0LjQtNGA0L7QutGB0LjRjdGC0LjQu9C80L7Rh9C10LLQuNC90LAsINC00LjQvNC10YLQuNC60L7QvSwg0YTQtdC90L7QutGB0LjRjdGC0LDQvdC+0LssINGN0YLQuNC70LPQtdC60YHQuNC70LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQv9C+0LTRgdC+0LvQvdC10YfQvdC+0LUsINC80LDRgdC70L4g0YTQuNGB0YLQsNGI0LrQvtCy0L7QtSwg0LzQsNGB0LvQviDQvtC70LjQstC60L7QstC+0LUsINGG0LXRgtC40LvRhNC+0YHRhNCw0YIg0LrQsNC70LjRjywg0LLQuNGC0LDQvNC40L0g0JUt0LDRhtC10YLQsNGCLCDQstC40YLQsNC80LjQvSBGLCDQn9Ct0JMtNyDQs9C70LjRhtC10YDQuNC70LrQvtC60L7QsNGCLCDQn9Ct0JMtNDAg0LPQuNC00YDQvtCz0LXQvdCw0YIg0LrQsNGB0YLQvtGA0L7QstC+0LPQviDQvNCw0YHQu9CwLCDQutCw0YDQsdC+0LzQtdGALCDQsNGA0L7QvNCw0YLQuNGH0LXRgdC60LDRjyDQutC+0LzQv9C+0LfQuNGG0LjRjyDQstC+0LTQsCwg0LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQvNC40L3QtdGA0LDQu9GM0L3QvtC1LCDQutCw0L/RgNC40LvQuNC6L9C60LDQv9GA0LjQuiDRgtGA0LjQs9C70LjRhtC10YDQuNC0LCDRhtC10YLQtdCw0YDQuNC70L7QstGL0Lkg0YHQv9C40YDRgiwg0LLQsNC30LXQu9C40L0sINCz0LvQuNGG0LXRgNC40LvRgdGC0LXQsNGA0LDRgiwg0LPQuNC00YDQvtC60YHQuNGN0YLQuNC70LzQvtGH0LXQstC40L3QsCwg0LTQuNC80LXRgtC40LrQvtC9LCDRhNC10L3QvtC60YHQuNGN0YLQsNC90L7Quywg0Y3RgtC40LvQs9C10LrRgdC40LvQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC/0L7QtNGB0L7Qu9C90LXRh9C90L7QtSwg0LzQsNGB0LvQviDRhNC40YHRgtCw0YjQutC+0LLQvtC1LCDQvNCw0YHQu9C+INC+0LvQuNCy0LrQvtCy0L7QtSwg0YbQtdGC0LjQu9GE0L7RgdGE0LDRgiDQutCw0LvQuNGPLCDQstC40YLQsNC80LjQvSDQlS3QsNGG0LXRgtCw0YIsINCy0LjRgtCw0LzQuNC9IEYsINCf0K3Qky03INCz0LvQuNGG0LXRgNC40LvQutC+0LrQvtCw0YIsINCf0K3Qky00MCDQs9C40LTRgNC+0LPQtdC90LDRgiDQutCw0YHRgtC+0YDQvtCy0L7Qs9C+INC80LDRgdC70LAsINC60LDRgNCx0L7QvNC10YAsINCw0YDQvtC80LDRgtC40YfQtdGB0LrQsNGPINC60L7QvNC/0L7Qt9C40YbQuNGPJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IDY5NCxcbiAgICAgICAgICAgICAgaW1hZ2VzOiBbJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnLCAnaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym46QU5kOUdjUkxFT2pDdy05TTJkY25hS21EanEzalpScFZVNlVoY2NKR21RJnVzcXA9Q0FVJywgJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsICdodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NSTEVPakN3LTlNMmRjbmFLbURqcTNqWlJwVlU2VWhjY0pHbVEmdXNxcD1DQVUnXSxcbiAgICAgICAgICAgICAgcHJldmlldzogJ2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuOkFOZDlHY1JMRU9qQ3ctOU0yZGNuYUttRGpxM2paUnBWVTZVaGNjSkdtUSZ1c3FwPUNBVScsXG4gICAgICAgICAgICAgIHRpdGxlOiAn0JLQuNGC0LDQvNC40L0g0KEgOTAwINC80LMgNSDQsyDQv9C+0YDQvtGILtGI0LjQv9GD0Ycu4oSWMTAg0YHQsNGI0LUt0L/QsNC60LXRgicsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0JIg0LrQsNGH0LXRgdGC0LLQtSDQsdC40L7Qu9C+0LPQuNGH0LXRgdC60Lgg0LDQutGC0LjQstC90L7QuSDQtNC+0LHQsNCy0LrQuCDQuiDQv9C40YnQtSwg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L7Qs9C+INC40YHRgtC+0YfQvdC40LrQsCDQstC40YLQsNC80LjQvdC+0LIg0Lgg0LzQuNC90LXRgNCw0LvQvtCyLicsXG4gICAgICAgICAgICAgIHJlY2VwdFJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICBvbGRQcmljZTogMTM5MjAsXG4gICAgICAgICAgICAgIHByaWNlOiAxMjk4MCxcbiAgICAgICAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBtYW51ZmFjdHVyZUNvdW50cnk6ICfQoNC+0YHRgdC40Y8nLFxuICAgICAgICAgICAgICBtYW51ZmFjdHVyZTogJ9CQ0JLQkNCd0KLQkCDQkNCeJyxcbiAgICAgICAgICAgICAgYnJhbmQ6ICfQkdCV0JvQntCg0KPQp9Ca0JAnLFxuICAgICAgICAgICAgICByZWxpemVGb3JtOiAn0JrRgNC10Lwg0LTQu9GPINGA0YPQuiA3NdC80LssINGC0YPQsdCwJyxcbiAgICAgICAgICAgICAgYW1vdW50OiAxLFxuICAgICAgICAgICAgICBjb21wb3NpdGlvbjogJ9Cy0L7QtNCwLCDQs9C70LjRhtC10YDQuNC9LCDQvNCw0YHQu9C+INC80LjQvdC10YDQsNC70YzQvdC+0LUsINC60LDQv9GA0LjQu9C40Lov0LrQsNC/0YDQuNC6INGC0YDQuNCz0LvQuNGG0LXRgNC40LQsINGG0LXRgtC10LDRgNC40LvQvtCy0YvQuSDRgdC/0LjRgNGCLCDQstCw0LfQtdC70LjQvSwg0LPQu9C40YbQtdGA0LjQu9GB0YLQtdCw0YDQsNGCLCDQs9C40LTRgNC+0LrRgdC40Y3RgtC40LvQvNC+0YfQtdCy0LjQvdCwLCDQtNC40LzQtdGC0LjQutC+0L0sINGE0LXQvdC+0LrRgdC40Y3RgtCw0L3QvtC7LCDRjdGC0LjQu9Cz0LXQutGB0LjQu9Cz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0L/QvtC00YHQvtC70L3QtdGH0L3QvtC1LCDQvNCw0YHQu9C+INGE0LjRgdGC0LDRiNC60L7QstC+0LUsINC80LDRgdC70L4g0L7Qu9C40LLQutC+0LLQvtC1LCDRhtC10YLQuNC70YTQvtGB0YTQsNGCINC60LDQu9C40Y8sINCy0LjRgtCw0LzQuNC9INCVLdCw0YbQtdGC0LDRgiwg0LLQuNGC0LDQvNC40L0gRiwg0J/QrdCTLTcg0LPQu9C40YbQtdGA0LjQu9C60L7QutC+0LDRgiwg0J/QrdCTLTQwINCz0LjQtNGA0L7Qs9C10L3QsNGCINC60LDRgdGC0L7RgNC+0LLQvtCz0L4g0LzQsNGB0LvQsCwg0LrQsNGA0LHQvtC80LXRgCwg0LDRgNC+0LzQsNGC0LjRh9C10YHQutCw0Y8g0LrQvtC80L/QvtC30LjRhtC40Y8g0LLQvtC00LAsINCz0LvQuNGG0LXRgNC40L0sINC80LDRgdC70L4g0LzQuNC90LXRgNCw0LvRjNC90L7QtSwg0LrQsNC/0YDQuNC70LjQui/QutCw0L/RgNC40Log0YLRgNC40LPQu9C40YbQtdGA0LjQtCwg0YbQtdGC0LXQsNGA0LjQu9C+0LLRi9C5INGB0L/QuNGA0YIsINCy0LDQt9C10LvQuNC9LCDQs9C70LjRhtC10YDQuNC70YHRgtC10LDRgNCw0YIsINCz0LjQtNGA0L7QutGB0LjRjdGC0LjQu9C80L7Rh9C10LLQuNC90LAsINC00LjQvNC10YLQuNC60L7QvSwg0YTQtdC90L7QutGB0LjRjdGC0LDQvdC+0LssINGN0YLQuNC70LPQtdC60YHQuNC70LPQu9C40YbQtdGA0LjQvSwg0LzQsNGB0LvQviDQv9C+0LTRgdC+0LvQvdC10YfQvdC+0LUsINC80LDRgdC70L4g0YTQuNGB0YLQsNGI0LrQvtCy0L7QtSwg0LzQsNGB0LvQviDQvtC70LjQstC60L7QstC+0LUsINGG0LXRgtC40LvRhNC+0YHRhNCw0YIg0LrQsNC70LjRjywg0LLQuNGC0LDQvNC40L0g0JUt0LDRhtC10YLQsNGCLCDQstC40YLQsNC80LjQvSBGLCDQn9Ct0JMtNyDQs9C70LjRhtC10YDQuNC70LrQvtC60L7QsNGCLCDQn9Ct0JMtNDAg0LPQuNC00YDQvtCz0LXQvdCw0YIg0LrQsNGB0YLQvtGA0L7QstC+0LPQviDQvNCw0YHQu9CwLCDQutCw0YDQsdC+0LzQtdGALCDQsNGA0L7QvNCw0YLQuNGH0LXRgdC60LDRjyDQutC+0LzQv9C+0LfQuNGG0LjRjydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICB9LFxuICBpbmZvOiB7XG4gICAgYmFubmVyczoge1xuICAgICAgZGF0YTogW1xuICAgICAgICB7IHRpdGxlOiAna2VrJywgdXJsOiAnaHR0cHM6Ly9pbWFnZXMuZm9vZDUyLmNvbS9Jakw2dUdxMWpGdWsxOGNQR2laVFVWcGhQSW89LzEyMDB4MTIwMC8xMDNiNTRiYS00NWZkLTQ3ZDUtODRmMS1kOWUzZWQxMjQ1YTgtLTIwMTktMTAyMl9rZWstbGFwaXMtc2FyYXdha18zeDJfcm9ja3ktbHV0ZW5fMDI4LmpwZycgfSxcbiAgICAgICAgeyB0aXRsZTogJ2tlazEnLCB1cmw6ICdodHRwczovL2ltYWdlcy5mb29kNTIuY29tL0lqTDZ1R3ExakZ1azE4Y1BHaVpUVVZwaFBJbz0vMTIwMHgxMjAwLzEwM2I1NGJhLTQ1ZmQtNDdkNS04NGYxLWQ5ZTNlZDEyNDVhOC0tMjAxOS0xMDIyX2tlay1sYXBpcy1zYXJhd2FrXzN4Ml9yb2NreS1sdXRlbl8wMjguanBnJyB9LFxuICAgICAgICB7IHRpdGxlOiAna2VrMicsIHVybDogJ2h0dHBzOi8vaW1hZ2VzLmZvb2Q1Mi5jb20vSWpMNnVHcTFqRnVrMThjUEdpWlRVVnBoUElvPS8xMjAweDEyMDAvMTAzYjU0YmEtNDVmZC00N2Q1LTg0ZjEtZDllM2VkMTI0NWE4LS0yMDE5LTEwMjJfa2VrLWxhcGlzLXNhcmF3YWtfM3gyX3JvY2t5LWx1dGVuXzAyOC5qcGcnIH0sXG4gICAgICAgIHsgdGl0bGU6ICdrZWszJywgdXJsOiAnaHR0cHM6Ly9pbWFnZXMuZm9vZDUyLmNvbS9Jakw2dUdxMWpGdWsxOGNQR2laVFVWcGhQSW89LzEyMDB4MTIwMC8xMDNiNTRiYS00NWZkLTQ3ZDUtODRmMS1kOWUzZWQxMjQ1YTgtLTIwMTktMTAyMl9rZWstbGFwaXMtc2FyYXdha18zeDJfcm9ja3ktbHV0ZW5fMDI4LmpwZycgfSxcbiAgICAgICAgeyB0aXRsZTogJ2tlazQnLCB1cmw6ICdodHRwczovL2ltYWdlcy5mb29kNTIuY29tL0lqTDZ1R3ExakZ1azE4Y1BHaVpUVVZwaFBJbz0vMTIwMHgxMjAwLzEwM2I1NGJhLTQ1ZmQtNDdkNS04NGYxLWQ5ZTNlZDEyNDVhOC0tMjAxOS0xMDIyX2tlay1sYXBpcy1zYXJhd2FrXzN4Ml9yb2NreS1sdXRlbl8wMjguanBnJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIGFib3V0OiB7fSxcbiAgICBjb250YWN0czoge30sXG4gICAgcGhhcm1hY3k6IHt9LFxuICAgIG5ld3M6IHt9LFxuICAgIGZhcToge30sXG4gIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBHRVRfUFJPRFVDVFM6IFwiR0VUX1BST0RVQ1RTXCIsXG4gIEdFVF9TQUxFU19QUk9EVUNUUzogXCJHRVRfU0FMRVNfUFJPRFVDVFNcIixcbiAgR0VUX1RPUF9QUk9EVUNUUzogXCJHRVRfVE9QX1BST0RVQ1RTXCIsXG4gIEdFVF9DQVRBTE9HX1BST0RVQ1RTOiBcIkdFVF9DQVRBTE9HX1BST0RVQ1RTXCIsXG59O1xuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuXG5mdW5jdGlvbiBwcm9kdWN0cyhzdGF0ZSwgeyB0eXBlLCAuLi5yZXMgfSkge1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgY29uc3RhbnRzLkdFVF9QUk9EVUNUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgICAgIGFsbDogcmVzLFxuICAgICAgfSk7XG4gICAgY2FzZSBjb25zdGFudHMuR0VUX1NBTEVTX1BST0RVQ1RTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICAgICAgc2FsZXM6IHJlcyxcbiAgICAgIH0pO1xuICAgIGNhc2UgY29uc3RhbnRzLkdFVF9UT1BfUFJPRFVDVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgICB0b3A6IHJlcyxcbiAgICAgIH0pO1xuICAgIGNhc2UgY29uc3RhbnRzLkdFVF9DQVRBTE9HX1BST0RVQ1RTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICAgICAgY2F0YWxvZzoge1xuICAgICAgICAgIGRhdGE6IHJlcy5kYXRhIHx8IHN0YXRlLmNhdGFsb2cuZGF0YSB8fCBbXSxcbiAgICAgICAgICAuLi5yZXMsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHM7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIFNFTkRfT1RQOiBcIlNFTkRfT1RQXCIsXG4gIExPR0lOOiBcIkxPR0lOXCIsXG4gIExPR09VVDogXCJMT0dPVVRcIixcbiAgUkVHSVNUUkFUSU9OOiBcIlJFR0lTVFJBVElPTlwiLFxuICBDSEFOR0VfVVNFUjogXCJDSEFOR0VfVVNFUlwiLFxuICBHRVRfVVNFUl9PUkRFUlM6IFwiR0VUX1VTRVJfT1JERVJTXCIsXG4gIENSRUFURV9PUkRFUjogXCJDUkVBVEVfT1JERVJcIixcbiAgQ0hBTkdFX0ZBVk9SSVRFOiAnQ0hBTkdFX0ZBVk9SSVRFJyxcbn07XG4iLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5cbmZ1bmN0aW9uIHVzZXIoc3RhdGUsIHsgdHlwZSwgLi4ucmVzIH0pIHtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGNvbnN0YW50cy5TRU5EX09UUDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgICAgIG90cDogcmVzLFxuICAgICAgfSk7XG4gICAgY2FzZSBjb25zdGFudHMuTE9HSU46XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgICBpc0xvZ2dlZEluOiAhcmVzLmVycm9yLFxuICAgICAgICBpbmZvOiByZXMsXG4gICAgICB9KTtcbiAgICBjYXNlIGNvbnN0YW50cy5MT0dPVVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgb3JkZXJzOiB7fSxcbiAgICAgICAgb3RwOiB7fSxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgIGxvYWRpbmc6IHJlcy5sb2FkaW5nLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIGNvbnN0YW50cy5SRUdJU1RSQVRJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICBpbmZvOiByZXMsXG4gICAgICB9KTtcbiAgICBjYXNlIGNvbnN0YW50cy5DSEFOR0VfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgICAgIGluZm86IHJlcyxcbiAgICAgIH0pO1xuICAgIGNhc2UgY29uc3RhbnRzLkdFVF9VU0VSX09SREVSUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgICAgIG9yZGVyczogT2JqZWN0LmFzc2lnbihzdGF0ZS5vcmRlcnMsIHJlcyksXG4gICAgICB9KTtcbiAgICBjYXNlIGNvbnN0YW50cy5DUkVBVEVfT1JERVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgICBvcmRlcnM6IHtcbiAgICAgICAgICAuLi5yZXMsXG4gICAgICAgICAgZGF0YTogc3RhdGUuZGF0YS5vcmRlcnM/LmNvbmNhdChyZXMuZGF0YSkgfHwgcmVzLmRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICBjYXNlIGNvbnN0YW50cy5DSEFOR0VfRkFWT1JJVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbihzdGF0ZS5pbmZvLmRhdGEsIHtcbiAgICAgICAgICAgIGZhdm9yaXRlX21lZGljaW5lczogcmVzLmRhdGEgfHwgc3RhdGUuaW5mby5kYXRhPy5mYXZvcml0ZV9tZWRpY2luZXMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgLi4uc3RhdGUuaW5mbyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VyO1xuIiwiY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCc7XG5cbmV4cG9ydCBjb25zdCBnZXQgPSBhc3luYyB1cmwgPT4ge1xuICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIHx8ICcnO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfSR7dXJsfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIC8vIG1vZGU6ICduby1jb3JzJyxcbiAgICAvLyBjYWNoZTogJ2RlZmF1bHQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAuLi4odG9rZW4gPyAoeyAneC1hdXRoLXRva2VuJzogdG9rZW4gfSkgOiB7fSlcbiAgICB9LFxuICB9KTtcblxuICBpZiAocmVzLm9rKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmJvZHk7XG4gIH1cblxuICBpZiAocmVzLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgdXBkYXRlVG9rZW4oKTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignZXJyb3InKTtcbn1cblxuZXhwb3J0IGNvbnN0IHBvc3QgPSBhc3luYyAodXJsLCBib2R5LCBwYXJhbXMpID0+IHtcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB8fCAnJztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0ke3VybH1gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gbW9kZTogJ25vLWNvcnMnLFxuICAgIC8vIGNhY2hlOiAnZGVmYXVsdCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC4uLih0b2tlbiA/ICh7ICd4LWF1dGgtdG9rZW4nOiB0b2tlbiB9KSA6IHt9KVxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgLi4ucGFyYW1zLFxuICB9KTtcblxuICBpZiAocmVzLm9rKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4gcmVzcG9uc2UuYm9keTtcbiAgfVxuXG4gIGlmIChyZXMuc3RhdHVzID09PSA0MDMpIHtcbiAgICB1cGRhdGVUb2tlbigpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdlcnJvcicpO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgfHwgJyc7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS9hdXRoYCwge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgLy8gbW9kZTogJ25vLWNvcnMnLFxuICAgIC8vIGNhY2hlOiAnZGVmYXVsdCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIC4uLih0b2tlbiA/ICh7ICd4LWF1dGgtdG9rZW4nOiB0b2tlbiB9KSA6IHt9KVxuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChyZXMub2spIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzcG9uc2UuYm9keS50b2tlbik7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmJvZHlcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG59XG5cbmV4cG9ydCBjb25zdCBtb2RhbHNSZXF1ZXN0ID0gYXN5bmMgKHVybCwgYm9keSAsIGlzRm9ybURhdGEgPSBmYWxzZSwgbWV0aG9kID0gJ1BPU1QnKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSB8fCAnJztcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfSR7dXJsfWAsIHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGJvZHk6IGlzRm9ybURhdGEgPyBib2R5IDogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIC4uLighaXNGb3JtRGF0YSA/ICh7ICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nIH0pIDoge30pLFxuICAgICAgICAuLi4odG9rZW4gPyAoeyAneC1hdXRoLXRva2VuJzogdG9rZW4gfSkgOiB7fSksXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGJvZHk6IHJlc3BvbnNlLmJvZHkgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVSZXF1ZXN0ID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIHx8ICcnO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfSR7dXJsfWAsIHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLi4uKHRva2VuID8geyAneC1hdXRoLXRva2VuJzogdG9rZW4gfSA6IHt9KSxcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChyZXMub2spIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBib2R5OiByZXNwb25zZS5ib2R5IH1cbiAgfVxuXG4gIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH1cbn1cblxuLy8gZG8gbm90IHRvdWNoIHRoaXNcbmV4cG9ydCBjb25zdCBtdWx0aXBsZVJlcXVlc3QgPSAoKSA9PiB7IH1cbiIsImV4cG9ydCAqIGZyb20gJy4vYXBpJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlVmFsaWRhdGUgfSBmcm9tICcuL3ZhbGlkYXRpb24nO1xuXG5leHBvcnQgY29uc3Qgb2JqZWN0VG9RdWVyeSA9IHBhcmFtcyA9PlxuICBPYmplY3Qua2V5cyhwYXJhbXMpLm1hcChrZXkgPT4ga2V5ICsgJz0nICsgcGFyYW1zW2tleV0pLmpvaW4oJyYnKTtcblxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IHNsaWNlcyA9PiAoc3RhdGUsIGFjdGlvbikgPT5cbiAgT2JqZWN0LmtleXMoc2xpY2VzKS5yZWR1Y2UoXG4gICAgKGFjYywgcHJvcCkgPT4gKHtcbiAgICAgIC4uLmFjYyxcbiAgICAgIFtwcm9wXTogc2xpY2VzW3Byb3BdKGFjY1twcm9wXSwgYWN0aW9uKSxcbiAgICB9KSxcbiAgICBzdGF0ZVxuICApO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgdGltZSA9IDMwMCkge1xuICBsZXQgdGltZXIgPSBudWxsO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmMuYmluZCh0aGlzLCAuLi5hcmdzKSwgdGltZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVByaWNlKGl0ZW1zLCBkaXNjb3VudFBlcmNlbnRhZ2UsIHVzZXJUeXBlID0gJ25vbmNvbW1lcmNpYWwnKSB7XG4gIGNvbnN0IHByaWNlID0gaXRlbXMucmVkdWNlKChhLCBiKSA9PiBhICsgYi5wcmljZVt1c2VyVHlwZV0gKiBiLmFtb3VudCwgMCk7XG4gIGNvbnN0IGRpc2NvdW50ID0gTWF0aC5mbG9vcihwcmljZSAqIGRpc2NvdW50UGVyY2VudGFnZSk7XG5cbiAgcmV0dXJuIHsgZGlzY291bnQsIHRvdGFsOiBwcmljZSAtIGRpc2NvdW50LCB0b3RhbE5vRGlzY291bnQ6IHByaWNlIH07XG59XG5cbmV4cG9ydCBjb25zdCBtb250aHMgPSBbXG4gIFwi0K/QvdCy0LDRgNGMXCIsIFwi0KTQtdCy0YDQsNC70YxcIiwgXCLQnNCw0YDRglwiLFxuICBcItCQ0L/RgNC10LvRjFwiLCBcItCc0LDQuVwiLCBcItCY0Y7QvdGMXCIsIFwi0JjRjtC70YxcIixcbiAgXCLQkNCy0LPRg9GB0YJcIiwgXCLQodC10L3RgtGP0LHRgNGMXCIsIFwi0J7QutGC0Y/QsdGA0YxcIixcbiAgXCLQndC+0Y/QsdGA0YxcIiwgXCLQlNC10LrQsNCx0YDRjFwiXG5dO1xuXG5leHBvcnQgY29uc3QgU09DSUFMUyA9IHtcbiAgdms6IFwiaHR0cDovL3ZrLmNvbS9zaGFyZS5waHA/XCIsXG4gIG9rOiBcImh0dHA6Ly93d3cub2Rub2tsYXNzbmlraS5ydS9kaz9zdC5jbWQ9YWRkU2hhcmUmc3Qucz0xJnN0Ll9zdXJsPVwiLFxuICBmYjogXCJodHRwOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIucGhwP3U9XCIsXG4gIHdwOiBcImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9XCIsXG59O1xuXG5leHBvcnQgY29uc3QgU1RBVFVTRVMgPSB7XG4gIGFjY2VwdGVkOiAn0J/RgNC40L3Rj9GCJyxcbiAgZGVsaXZlcmVkOiAn0JTQvtGB0YLQsNCy0LvQtdC9JyxcbiAgZGVjbGluZWQ6ICfQntGC0LzQtdC90LXQvScsXG59O1xuIiwiaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIjtcbmltcG9ydCB7IHBhcnNlUGhvbmVOdW1iZXIgfSBmcm9tIFwibGlicGhvbmVudW1iZXItanNcIjtcblxuXG5jb25zdCB1c2VWYWxpZGF0ZSA9IHBob25lQ291bnRyeSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlJbnB1dEVycm9yID0gKGVycm9ycywgaW5wdXROYW1lKSA9PiB7XG4gICAgaWYgKGVycm9ycy5zb21lKGVyciA9PiBlcnIucGF0aCA9PT0gaW5wdXROYW1lKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlxuICAgICAgICAgIHtlcnJvcnMuZmluZChlcnIgPT4gZXJyLnBhdGggPT09IGlucHV0TmFtZSk/Lm1lc3NhZ2V9XG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlFcnJvck5hbWUgPSAoZXJyb3JzLCBpbnB1dE5hbWUsIGlucHV0TmFtZVRleHQpID0+IHtcbiAgICBpZiAoZXJyb3JzLnNvbWUoZXJyb3IgPT4gZXJyb3IucGF0aCA9PT0gaW5wdXROYW1lKSkge1xuICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj57aW5wdXROYW1lVGV4dH08L3A+O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCBpbnB1dEVycm9yQ2xhc3NuYW1lID0gKGVycm9ycywgaW5wdXROYW1lKSA9PiB7XG4gICAgcmV0dXJuIGVycm9ycy5zb21lKGVyciA9PiBlcnIucGF0aCA9PT0gaW5wdXROYW1lKSA/ICdpbnB1dC1lcnJvcicgOiAnJztcbiAgfTtcblxuICB5dXAuc2V0TG9jYWxlKHtcbiAgICBzdHJpbmc6IHtcbiAgICAgIGVtYWlsOiAn0J3QtdC/0YDQsNCy0LjQu9GM0L3QviDQstCy0LXQtNC10L0gZS1tYWlsJyxcbiAgICB9LFxuICB9KTtcblxuICB5dXAuYWRkTWV0aG9kKHl1cC5zdHJpbmcsICd2YWxpZGF0ZVBob25lJywgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLnRlc3QoJ2NoZWNrUGhvbmUnLCBlcnJvck1lc3NhZ2UsIGZ1bmN0aW9uIChwaG9uZSkge1xuICAgICAgY29uc3QgeyBwYXRoLCBjcmVhdGVFcnJvciB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHBob25lTnVtYmVyID0gcGFyc2VQaG9uZU51bWJlcihcbiAgICAgICAgcGhvbmUgJiYgcGhvbmUubGVuZ3RoID4gMSA/IHBob25lIDogJys5OTYwMCcsXG4gICAgICAgIHBob25lQ291bnRyeS50b1VwcGVyQ2FzZSgpLFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgcGhvbmVOdW1iZXIuaXNWYWxpZCgpIHx8XG4gICAgICAgIGNyZWF0ZUVycm9yKHsgcGF0aCwgbWVzc2FnZTogZXJyb3JNZXNzYWdlIH0pXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBsb2dpblNjaGVtYSA9IGRhdGEgPT4gKFxuICAgIHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICBwaG9uZTogeXVwLnN0cmluZygpLnZhbGlkYXRlUGhvbmUoJ9Cd0LXQv9GA0LDQstC40LvRjNC90L4g0LLQstC10LTQtdC9INC90L7QvNC10YAnKSxcbiAgICB9KVxuICAgICAgLnZhbGlkYXRlKGRhdGEsIHthYm9ydEVhcmx5OiBmYWxzZX0pXG4gICAgICAudGhlbigoKSA9PiBbXSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBlcnJvci5pbm5lcilcbiAgKTtcblxuICBjb25zdCByZWdpc3RlclNjaGVtYSA9IGRhdGEgPT4gKFxuICAgIHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICBmaXJzdG5hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgn0JLQstC10LTQuNGC0LUg0LjQvNGPJyksXG4gICAgICBsYXN0bmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCfQktCy0LXQtNC40YLQtSDRhNCw0LzQuNC70LjRjicpLFxuICAgICAgZGF0ZV9vZl9iaXJ0aDogeXVwLmRhdGUoKS5yZXF1aXJlZCgn0JLQstC10LTQuNGC0LUg0LTQsNGC0YMg0YDQvtC20LTQtdC90LjRjycpLFxuICAgICAgcGhvbmU6IHl1cC5zdHJpbmcoKS52YWxpZGF0ZVBob25lKCfQndC10L/RgNCw0LLQuNC70YzQvdC+INCy0LLQtdC00LXQvSDQvdC+0LzQtdGAJyksXG4gICAgfSlcbiAgICAgIC52YWxpZGF0ZShkYXRhLCB7YWJvcnRFYXJseTogZmFsc2V9KVxuICAgICAgLnRoZW4oKCkgPT4gW10pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gZXJyb3IuaW5uZXIpXG4gICk7XG5cblxuICBjb25zdCBwcm9kdWN0TW9kYWxTY2hlbWEgPSBkYXRhID0+IChcbiAgICB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICAgICAgbmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCfQktCy0LXQtNC40YLQtSDQuNC80Y8nKSxcbiAgICAgIHBob25lOiB5dXAuc3RyaW5nKCkudmFsaWRhdGVQaG9uZSgn0J3QtdC/0YDQsNCy0LjQu9GM0L3QviDQstCy0LXQtNC10L0g0L3QvtC80LXRgCcpLFxuICAgICAgcHJvZHVjdDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCfQo9C60LDQttC40YLQtSDRgtC+0LLQsNGAJyksXG4gICAgfSlcbiAgICAgIC52YWxpZGF0ZShkYXRhLCB7IGFib3J0RWFybHk6IGZhbHNlIH0pXG4gICAgICAudGhlbigoKSA9PiBbXSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBlcnJvci5pbm5lcilcbiAgKTtcblxuICBjb25zdCBmZWVkQmFja1NjaGVtYSA9IGRhdGEgPT4gKFxuICAgIHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICBuYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ9CS0LLQtdC00LjRgtC1INC40LzRjycpLFxuICAgICAgcGhvbmU6IHl1cC5zdHJpbmcoKS52YWxpZGF0ZVBob25lKCfQndC10L/RgNCw0LLQuNC70YzQvdC+INCy0LLQtdC00LXQvSDQvdC+0LzQtdGAJyksXG4gICAgICBlbWFpbDogeXVwLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoJ9CS0LLQtdC00LjRgtC1IGUtbWFpbCcpLFxuICAgICAgYm9keTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCfQndCw0L/QuNGI0LjRgtC1INC60L7QvNC80LXQvdGC0LDRgNC40LknKSxcbiAgICAgIHRpdGxlOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ9Cd0LDQv9C40YjQuNGC0LUg0YLQtdC80YMnKSxcbiAgICB9KVxuICAgICAgLnZhbGlkYXRlKGRhdGEsIHsgYWJvcnRFYXJseTogZmFsc2UgfSlcbiAgICAgIC50aGVuKCgpID0+IFtdKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGVycm9yLmlubmVyKVxuICApO1xuXG4gIGNvbnN0IHJlcXVlc3RDYWxsU2NoZW1hID0gZGF0YSA9PiAoXG4gICAgeXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICAgIG5hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgn0JLQstC10LTQuNGC0LUg0LjQvNGPJyksXG4gICAgICBwaG9uZTogeXVwLnN0cmluZygpLnZhbGlkYXRlUGhvbmUoJ9Cd0LXQv9GA0LDQstC40LvRjNC90L4g0LLQstC10LTQtdC9INC90L7QvNC10YAnKSxcbiAgICB9KVxuICAgICAgLnZhbGlkYXRlKGRhdGEsIHsgYWJvcnRFYXJseTogZmFsc2UgfSlcbiAgICAgIC50aGVuKCgpID0+IFtdKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGVycm9yLmlubmVyKVxuICApO1xuXG4gIGNvbnN0IHdob2xlc2FsZXJzU2NoZW1hID0gZGF0YSA9PiAoXG4gICAgeXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICAgIG5hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgn0JLQstC10LTQuNGC0LUg0LjQvNGPJyksXG4gICAgICBwaG9uZTogeXVwLnN0cmluZygpLnZhbGlkYXRlUGhvbmUoJ9Cd0LXQv9GA0LDQstC40LvRjNC90L4g0LLQstC10LTQtdC9INC90L7QvNC10YAnKSxcbiAgICAgIGxpY2Vuc2U6IHl1cC5taXhlZCgpLnJlcXVpcmVkKCfQn9GA0LjQutGA0LXQv9C40YLQtSDRhNCw0LnQuycpLFxuICAgIH0pXG4gICAgICAudmFsaWRhdGUoZGF0YSwgeyBhYm9ydEVhcmx5OiBmYWxzZSB9KVxuICAgICAgLnRoZW4oKCkgPT4gW10pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gZXJyb3IuaW5uZXIpXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBsb2dpblNjaGVtYSxcbiAgICByZWdpc3RlclNjaGVtYSxcbiAgICBkaXNwbGF5SW5wdXRFcnJvcixcbiAgICBkaXNwbGF5RXJyb3JOYW1lLFxuICAgIGlucHV0RXJyb3JDbGFzc25hbWUsXG4gICAgcHJvZHVjdE1vZGFsU2NoZW1hLFxuICAgIGZlZWRCYWNrU2NoZW1hLFxuICAgIHJlcXVlc3RDYWxsU2NoZW1hLFxuICAgIHdob2xlc2FsZXJzU2NoZW1hLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVmFsaWRhdGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsaWJwaG9uZW51bWJlci1qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnQvbG9jYWxlL3J1XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=