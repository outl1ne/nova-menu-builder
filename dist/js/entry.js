/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue3_nestable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue3-nestable */ "./node_modules/vue3-nestable/dist/index.umd.js");
/* harmony import */ var vue3_nestable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue3_nestable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! laravel-nova-ui */ "laravel-nova-ui");
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Array,
      required: true
    },
    maxDepth: {
      type: Number,
      required: false,
      "default": 10
    }
  },
  computed: {
    getIconName: function getIconName() {
      var _this = this;
      return function (item) {
        return _this.isCascadeOpen(item) ? 'SortDescending' : 'ViewList';
      };
    }
  },
  components: {
    VueNestable: vue3_nestable__WEBPACK_IMPORTED_MODULE_0__.VueNestable,
    VueNestableHandle: vue3_nestable__WEBPACK_IMPORTED_MODULE_0__.VueNestableHandle,
    Icon: laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__.Icon
  },
  data: function data() {
    return {
      duplicateItem: null
    };
  },
  methods: {
    hasChildren: function hasChildren(item) {
      return Array.isArray(item.children) && item.children.length;
    },
    toggleMenuChildrenCascade: function toggleMenuChildrenCascade(item) {
      if (item.classProp.find(function (className) {
        return className === 'hide-cascade';
      })) {
        item.classProp.splice(item.classProp.indexOf('hide-cascade'), 1);
      } else {
        item.classProp.push('hide-cascade');
      }
      this.$emit('saveMenuLocalState', item);
    },
    isCascadeOpen: function isCascadeOpen(item) {
      return !item.classProp.find(function (className) {
        return className === 'hide-cascade';
      });
    },
    beforeMove: function beforeMove(_ref) {
      var dragItem = _ref.dragItem,
        pathFrom = _ref.pathFrom,
        pathTo = _ref.pathTo;
      if (dragItem.nestable) {
        return true;
      }
      return pathTo.length === 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./resources/js/api.js");
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! laravel-nova */ "laravel-nova");
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(laravel_nova__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_MenuBuilderHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/MenuBuilderHeader */ "./resources/js/components/core/MenuBuilderHeader.vue");
/* harmony import */ var _modals_UpdateMenuItemModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/UpdateMenuItemModal */ "./resources/js/components/modals/UpdateMenuItemModal.vue");
/* harmony import */ var _modals_DeleteMenuItemModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/DeleteMenuItemModal */ "./resources/js/components/modals/DeleteMenuItemModal.vue");
/* harmony import */ var _core_NoMenuItemsPlaceholder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/NoMenuItemsPlaceholder */ "./resources/js/components/core/NoMenuItemsPlaceholder.vue");
/* harmony import */ var _mixins_HandlesCollapsibleState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/HandlesCollapsibleState */ "./resources/js/mixins/HandlesCollapsibleState.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [laravel_nova__WEBPACK_IMPORTED_MODULE_1__.FormField, _mixins_HandlesCollapsibleState__WEBPACK_IMPORTED_MODULE_6__["default"]],
  props: ['resourceName', 'resourceId', 'field'],
  components: {
    MenuBuilderHeader: _core_MenuBuilderHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
    NoMenuItemsPlaceholder: _core_NoMenuItemsPlaceholder__WEBPACK_IMPORTED_MODULE_5__["default"],
    DeleteMenuItemModal: _modals_DeleteMenuItemModal__WEBPACK_IMPORTED_MODULE_4__["default"],
    UpdateMenuItemModal: _modals_UpdateMenuItemModal__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      loadingMenuItems: false,
      isMenuItemUpdating: false,
      selectedLocale: void 0,
      showDeleteModal: false,
      showAddModal: false,
      itemToDelete: null,
      update: false,
      linkType: {},
      errors: {},
      newItem: {
        name: null,
        value: '',
        target: '_self',
        menu_id: null,
        enabled: true,
        classProp: []
      },
      menuItems: [],
      menuItemTypes: void 0
    };
  },
  beforeMount: function beforeMount() {
    // Set starting locale
    this.selectedLocale = Object.keys(this.field.locales)[0];
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // Fix classes on Detail view
            _this.$parent.$el.classList.remove('py-3', 'px-6');
            _this.refreshData();
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  computed: {
    newItemData: function newItemData() {
      return _objectSpread(_objectSpread({}, this.newItem), {}, {
        locale: this.selectedLocale,
        "class": this.linkType["class"],
        menu_id: this.resourceId
      });
    }
  },
  methods: {
    setSelectedLocale: function setSelectedLocale(locale) {
      this.selectedLocale = locale;
      this.refreshData();
    },
    openAddModal: function openAddModal() {
      this.update = false;
      this.showAddModal = true;
    },
    closeModal: function closeModal() {
      this.showAddModal = false;
      this.showDeleteModal = false;
      this.resetNewItem();
    },
    refreshData: function refreshData() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var menuItems, menuItemTypes;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.loadingMenuItems = true;
              _context2.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_0__["default"].getItems(_this2.resourceId, _this2.selectedLocale);
            case 3:
              menuItems = _context2.sent.data;
              _this2.menuItems = _this2.setMenuItemProperties(Object.values(menuItems), _this2.getMenuLocalState(), _this2.field.collapsedAsDefault);
              _context2.next = 7;
              return _api__WEBPACK_IMPORTED_MODULE_0__["default"].getMenuItemTypes(_this2.resourceId, _this2.selectedLocale);
            case 7:
              menuItemTypes = _context2.sent.data;
              _this2.menuItemTypes = Object.values(menuItemTypes);
              _this2.loadingMenuItems = false;
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    editMenu: function editMenu(item) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var menuItem;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _this3.update = true;
              _context3.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_0__["default"].getMenuItem(item.id);
            case 3:
              menuItem = _context3.sent.data;
              _this3.newItem = menuItem;
              _this3.showAddModal = true;
              _this3.linkType = _this3.menuItemTypes.find(function (lt) {
                return lt["class"] === _this3.newItem["class"];
              }) || {};
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    removeMenu: function removeMenu(item) {
      this.itemToDelete = item;
      this.showDeleteModal = true;
    },
    confirmItemDelete: function confirmItemDelete() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_0__["default"].destroy(_this4.itemToDelete.id);
            case 3:
              _context4.next = 5;
              return _this4.refreshData();
            case 5:
              Nova.success(_this4.__('novaMenuBuilder.toastDeleteSucces'));
              _this4.itemToDelete = null;
              _this4.showDeleteModal = false;
              _context4.next = 13;
              break;
            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              _this4.handleErrors(_context4.t0);
            case 13:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 10]]);
      }))();
    },
    resetNewItem: function resetNewItem() {
      this.errors = {};
      this.newItem = {
        name: null,
        value: '',
        target: '_self',
        enabled: true,
        menu_id: this.resourceId
      };
      this.linkType = {};
    },
    confirmItemCreate: function confirmItemCreate() {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _this5.errors = {};
              _context5.next = 4;
              return _api__WEBPACK_IMPORTED_MODULE_0__["default"].create(_this5.newItemData);
            case 4:
              _this5.refreshData();
              _this5.showAddModal = false;
              _this5.resetNewItem();
              Nova.success(_this5.__('novaMenuBuilder.toastCreateSuccess'));
              _context5.next = 14;
              break;
            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              console.error(_context5.t0);
              _this5.handleErrors(_context5.t0);
            case 14:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 10]]);
      }))();
    },
    updateItem: function updateItem() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _this6.isMenuItemUpdating = true;
              _this6.errors = {};
              _context6.next = 5;
              return _api__WEBPACK_IMPORTED_MODULE_0__["default"].update(_this6.newItem.id, _this6.newItemData);
            case 5:
              _this6.isMenuItemUpdating = false;
              _this6.showAddModal = false;
              Nova.success(_this6.__('novaMenuBuilder.toastUpdateSuccess'));
              _this6.resetNewItem();
              _context6.next = 11;
              return _this6.refreshData();
            case 11:
              _context6.next = 17;
              break;
            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](0);
              _this6.isMenuItemUpdating = false;
              _this6.handleErrors(_context6.t0);
            case 17:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 13]]);
      }))();
    },
    updateMenu: function updateMenu() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_0__["default"].saveItems(_this7.resourceId, _this7.menuItems);
            case 3:
              Nova.success(_this7.__('novaMenuBuilder.toastReorderSuccess'));
              _context7.next = 9;
              break;
            case 6:
              _context7.prev = 6;
              _context7.t0 = _context7["catch"](0);
              Nova.error(_this7.__('novaMenuBuilder.serverError'));
            case 9:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 6]]);
      }))();
    },
    handleErrors: function handleErrors(res) {
      var errors = res.response && res.response.data && res.response.data.errors;
      if (errors) {
        this.errors = errors;
        Object.values(errors).map(function (error) {
          return Nova.error(error);
        });
      }
    },
    duplicateMenuItem: function duplicateMenuItem(item) {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return _api__WEBPACK_IMPORTED_MODULE_0__["default"].duplicate(item.id);
            case 3:
              _context8.next = 5;
              return _this8.refreshData();
            case 5:
              _this8.resetNewItem();
              Nova.success(_this8.__('novaMenuBuilder.toastDuplicateSuccess'));
              _context8.next = 12;
              break;
            case 9:
              _context8.prev = 9;
              _context8.t0 = _context8["catch"](0);
              _this8.handleErrors(_context8.t0);
            case 12:
            case "end":
              return _context8.stop();
          }
        }, _callee8, null, [[0, 9]]);
      }))();
    },
    updateLinkModel: function updateLinkModel(modelId) {
      this.newItem.value = modelId || '';
    },
    updateLinkType: function updateLinkType(event) {
      this.linkType = this.menuItemTypes.find(function (type) {
        return type["class"] === event.target.value;
      }) || {};
      this.newItem.value = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modals_CopyMenuItemsModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/CopyMenuItemsModal */ "./resources/js/components/modals/CopyMenuItemsModal.vue");
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! laravel-nova-ui */ "laravel-nova-ui");
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Button: laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
    CopyMenuItemsModal: _modals_CopyMenuItemsModal__WEBPACK_IMPORTED_MODULE_0__["default"],
    Icon: laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__.Icon
  },
  props: ['locales', 'activeLocale', 'resourceId', 'menuCount', 'showDuplicate'],
  data: function data() {
    return {
      showCopyModal: false
    };
  },
  computed: {
    showCopyButton: function showCopyButton() {
      // If only 1 locale and 1 menu, don't show the button
      var localeCount = Object.keys(this.locales).length;
      return localeCount > 1 || this.menuCount > 1;
    }
  },
  methods: {
    getLocaleDisplay: function getLocaleDisplay(locale) {
      var customDisplay = Nova.config('customLocaleDisplay');
      if (customDisplay && customDisplay[locale]) {
        return customDisplay[locale];
      }
      return "".concat(this.locales[locale], " (").concat(locale, ")");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-nova-ui */ "laravel-nova-ui");
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(laravel_nova_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modals_CopyMenuItemsModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/CopyMenuItemsModal.vue */ "./resources/js/components/modals/CopyMenuItemsModal.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Button: laravel_nova_ui__WEBPACK_IMPORTED_MODULE_0__.Button,
    Icon: laravel_nova_ui__WEBPACK_IMPORTED_MODULE_0__.Icon
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/js/api.js");
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! laravel-nova-ui */ "laravel-nova-ui");
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['showModal', 'activeLocale', 'locales', 'resourceName', 'resourceId', 'menuCount'],
  data: function data() {
    return {
      isCopying: false,
      menuOptions: [],
      selectedMenu: void 0,
      selectedLocale: void 0,
      localeOptions: []
    };
  },
  components: {
    Button: laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__.Button
  },
  mounted: function mounted() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _this.setLocaleDataBasedOnActiveLocale();
            _context.next = 3;
            return _this.fetchMenuOptions();
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  watch: {
    activeLocale: function activeLocale() {
      this.setLocaleDataBasedOnActiveLocale();
    },
    resourceId: function resourceId() {
      this.setLocaleDataBasedOnActiveLocale();
    },
    selectedMenu: function selectedMenu() {
      this.setLocaleDataBasedOnActiveLocale();
    }
  },
  methods: {
    fetchMenuOptions: function fetchMenuOptions() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var menuOptions;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _api__WEBPACK_IMPORTED_MODULE_0__["default"].getMenus({
                notEmpty: true
              });
            case 2:
              menuOptions = _context2.sent.data;
              if (_this2.hasMultipleLocales) {
                _this2.selectedMenu = String(_this2.resourceId);
              } else {
                // Just one locale, let's remove the current menu from the selection
                menuOptions = menuOptions.filter(function (m) {
                  return String(m.id) !== String(_this2.resourceId);
                });
              }
              _this2.menuOptions = menuOptions;
              _this2.selectedMenu = menuOptions[0] ? menuOptions[0].id : void 0;
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    copyMenuItemsFromMenu: function copyMenuItemsFromMenu() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!_this3.selectedMenu || !_this3.selectedLocale)) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              _this3.isCopying = true;
              _context3.prev = 3;
              _context3.next = 6;
              return _api__WEBPACK_IMPORTED_MODULE_0__["default"].copyItems(_this3.selectedMenu, _this3.selectedLocale, _this3.resourceId, _this3.activeLocale);
            case 6:
              _this3.$emit('refreshItems');
              _this3.$emit('closeModal');
              _context3.next = 13;
              break;
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](3);
              console.info(_context3.t0);
            case 13:
              _this3.isCopying = false;
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 10]]);
      }))();
    },
    setLocaleDataBasedOnActiveLocale: function setLocaleDataBasedOnActiveLocale() {
      var _this4 = this;
      var options = Object.keys(this.locales).map(function (key) {
        return {
          id: key,
          name: _this4.locales[key]
        };
      });

      // If it's the same menu, don't show current locale
      if (this.selectedMenu && String(this.resourceId) === String(this.selectedMenu)) {
        options = options.filter(function (obj) {
          return obj.id !== _this4.activeLocale;
        });
      }
      this.localeOptions = options;
      this.selectedLocale = options[0].id;
    }
  },
  computed: {
    hasMultipleLocales: function hasMultipleLocales() {
      return Object.keys(this.locales).length > 1;
    },
    hasMultipleMenus: function hasMultipleMenus() {
      return this.menuCount > 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-nova-ui */ "laravel-nova-ui");
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(laravel_nova_ui__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['showModal', 'itemToDelete'],
  components: {
    Button: laravel_nova_ui__WEBPACK_IMPORTED_MODULE_0__.Button
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-nova */ "laravel-nova");
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(laravel_nova__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var form_backend_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form-backend-validation */ "./node_modules/form-backend-validation/dist/index.js");
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! laravel-nova-ui */ "laravel-nova-ui");
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(laravel_nova_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_multiselect_src_Multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-multiselect/src/Multiselect */ "./node_modules/vue-multiselect/src/Multiselect.vue");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [laravel_nova__WEBPACK_IMPORTED_MODULE_0__.HandlesValidationErrors],
  props: ['newItem', 'showModal', 'update', 'linkType', 'menuItemTypes', 'resourceName', 'resourceId', 'isMenuItemUpdating', 'maxDepth'],
  data: function data() {
    return {
      toggleLabels: false,
      defaultFieldProps: {
        fullWidth: true,
        stacked: true,
        withLabel: true,
        visible: true
      },
      overflowHiddenParent: null
    };
  },
  components: {
    Button: laravel_nova_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
    Multiselect: vue_multiselect_src_Multiselect__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  watch: {
    'newItem.name': function newItemName(newName) {
      this.emitFieldValueChange('name', newName);
    },
    showModal: function showModal(show) {
      var _this = this;
      this.$nextTick(function () {
        var scrollWrap = document.querySelector('.modal.fixed');
        if (scrollWrap) {
          if (show) scrollWrap.addEventListener('scroll', _this.repositionDropdown);else scrollWrap.removeEventListener('scroll', _this.repositionDropdown);
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.toggleLabels = {
      checked: this.__('novaMenuBuilder.menuItemActive'),
      unchecked: this.__('novaMenuBuilder.menuItemDisabled')
    };
    this.switchColor = {
      checked: '#21b978',
      unchecked: '#dae1e7',
      disabled: '#eef1f4'
    };
    this.$nextTick(function () {
      if (!_this2.overflowHiddenParent && _this2.$refs.multiselect && _this2.$refs.multiselect.$el) {
        var parent = _this2.$refs.multiselect.$el.parentElement;
        var parentWithOverflowHidden = null;
        while (parent && !parentWithOverflowHidden) {
          if (parent.classList.contains('overflow-hidden')) parentWithOverflowHidden = parent;
          parent = parent.parentElement;
        }
        _this2.overflowHiddenParent = parentWithOverflowHidden;
      }
      if (_this2.overflowHiddenParent) _this2.overflowHiddenParent.style.overflow = 'visible';
    });
  },
  computed: {
    options: function options() {
      var options = _toConsumableArray(this.linkType.options);
      options.unshift({
        id: '',
        label: this.__('novaMenuBuilder.chooseOption')
      });
      return options;
    },
    fields: function fields() {
      var fields = this.linkType.fields || [];
      if (this.update) {
        fields = (this.linkType["class"] === this.newItem["class"] ? this.newItem.fields : this.linkType.fields) || [];
        fields.forEach(function (f) {
          if (f.component === 'slug-field') {
            f.updating = true;
            f.readonly = true;
            f.showCustomizeButton = true;
          }
        });
      }
      fields.forEach(function (f) {
        f.stacked = true;
        f.fullWidth = true;
        f.withLabel = true;
      });
      return fields || [];
    },
    wrappedErrors: function wrappedErrors() {
      var ogErrors = this.$props.errors;
      if (ogErrors && typeof ogErrors.has === 'function') return ogErrors;
      var newerror = new form_backend_validation__WEBPACK_IMPORTED_MODULE_1__.Errors(ogErrors || {});
      return newerror;
    },
    selectedOption: function selectedOption() {
      var _this3 = this;
      if (this.linkType.type === 'select') {
        return this.options.find(function (option) {
          return option.id === _this3.newItem.value;
        });
      }
      return void 0;
    }
  },
  methods: {
    handleChange: function handleChange(value) {
      this.$emit('onLinkModelUpdate', value ? value.id : void 0);
      this.$nextTick(this.repositionDropdown);
    },
    handleOpen: function handleOpen() {
      this.$nextTick(this.repositionDropdown);
    },
    handleClose: function handleClose() {
      if (this.overflowHiddenParent) this.overflowHiddenParent.style.overflow = null;
    },
    handleRemove: function handleRemove() {
      this.$nextTick(this.repositionDropdown);
    },
    storeWithData: function storeWithData(eventType) {
      var _this4 = this;
      this.fields.forEach(function (field) {
        var formData = new FormData();
        field.fill(formData);
        var values = Array.from(formData.values());
        if (field.component === 'trix-field') {
          _this4.newItem[field.attribute] = values[0];
          return;
        }

        // Is array
        var firstKey = Array.from(formData.keys())[0];
        if (firstKey && firstKey.endsWith(']')) {
          _this4.newItem[field.attribute] = values || [];
        } else {
          if (values.length === 0) _this4.newItem[field.attribute] = void 0;
          if (values.length === 1) _this4.newItem[field.attribute] = values[0];
          if (values.length > 1) _this4.newItem[field.attribute] = values;
        }
      });
      this.$emit(eventType);
    },
    repositionDropdown: function repositionDropdown() {
      var onOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var ms = this.$refs.multiselect;
      if (!ms) return;
      var el = ms.$el;
      var handlePositioning = function handlePositioning() {
        if (onOpen) ms.$refs.list.scrollTop = 0;
        var _el$getBoundingClient = el.getBoundingClientRect(),
          height = _el$getBoundingClient.height;
        var top = height;
        ms.$refs.list.style.position = 'absolute';
        ms.$refs.list.style.width = "".concat(el.clientWidth + 1, "px");
        ms.$refs.list.style.top = "".concat(top, "px");
        ms.$refs.list.style['border-radius'] = '0 0 5px 5px';
      };
      if (onOpen) this.$nextTick(handlePositioning);else handlePositioning();
    },
    getError: function getError(key) {
      return this.wrappedErrors.has(key);
    },
    emitFieldValue: function emitFieldValue(attribute, value) {
      Nova.$emit("".concat(attribute, "-value"), value);
    },
    emitFieldValueChange: function emitFieldValueChange(attribute, value) {
      Nova.$emit("".concat(attribute, "-change"), value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MenuIndexView.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MenuIndexView.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      resourceName: Nova.config('menuBuilderUriKey')
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=template&id=52537621":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=template&id=52537621 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = ["onClick"];
var _hoisted_2 = {
  "class": "buttons o1-gap-x-2 md:o1-w-1/3 o1-flex o1-justify-end o1-content-center"
};
var _hoisted_3 = ["title", "onClick"];
var _hoisted_4 = ["title", "onClick"];
var _hoisted_5 = ["title", "onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Icon");
  var _component_vue_nestable_handle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-nestable-handle");
  var _component_vue_nestable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-nestable");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_vue_nestable, {
    value: $props.value,
    "max-depth": $props.maxDepth,
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return $props.value = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.$emit('onMenuChange');
    }),
    hooks: {
      beforeMove: $options.beforeMove
    },
    "class": "px-3",
    classProp: "classProp"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var item = _ref.item;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_nestable_handle, {
        "class": "handle dark:o1-bg-gray-800 o1-flex io1-tems-center o1-justify-between o1-border o1-rounded-lg o1-outline-none o1-border-b o1-border-gray-200 dark:o1-border-gray-600"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["item-data o1-items-center o1-flex o1-shrink o1-min-w-0", {
              'o1-px-3': !$options.hasChildren(item)
            }])
          }, [$options.hasChildren(item) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
            key: 0,
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return $options.toggleMenuChildrenCascade(item);
            }, ["prevent"]),
            "class": "o1-appearance-none o1-cursor-pointer o1-fill-current hover:o1-text-primary o1-flex o1-px-3 o1-items-center focus:o1-outline-none"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
            name: $options.getIconName(item),
            type: "outline"
          }, null, 8 /* PROPS */, ["name"])], 8 /* PROPS */, _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["o1-text-90 o1-font-bold o1-whitespace-nowrap o1-overflow-hidden o1-text-ellipsis", {
              'opacity-25': !item.enabled
            }])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 3 /* TEXT, CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["o1-font-lighter o1-text-80 o1-ml-4 o1-text-sm o1-whitespace-nowrap o1-text-ellipsis o1-overflow-hidden", {
              'o1-opacity-25': !item.enabled
            }])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.displayValue), 3 /* TEXT, CLASS */)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            title: _ctx.__('novaMenuBuilder.edit'),
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('editMenu', item);
            }, ["prevent"]),
            "class": "mt-2 cursor-pointer text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
            name: "PencilAlt",
            type: "outline"
          })], 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            title: _ctx.__('novaMenuBuilder.duplicate'),
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('duplicateMenuItem', item);
            }, ["prevent"]),
            "class": "mt-2 cursor-pointer text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
            name: "Duplicate",
            type: "outline"
          })], 8 /* PROPS */, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            title: _ctx.__('novaMenuBuilder.delete'),
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('removeMenu', item);
            }, ["prevent"]),
            "class": "mt-2 cursor-pointer text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
            name: "trash",
            type: "outline"
          })], 8 /* PROPS */, _hoisted_5)])];
        }),
        _: 2 /* DYNAMIC */
      }, 1024 /* DYNAMIC_SLOTS */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["value", "max-depth", "hooks"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=template&id=20d77089":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=template&id=20d77089 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  id: "menu-builder-field",
  "class": "relative py-3 o1-w-full"
};
var _hoisted_2 = {
  key: 0,
  "class": "py-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_menu_builder_header = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("menu-builder-header");
  var _component_loader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("loader");
  var _component_no_menu_items_placeholder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("no-menu-items-placeholder");
  var _component_menu_builder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("menu-builder");
  var _component_update_menu_item_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("update-menu-item-modal");
  var _component_delete_menu_item_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("delete-menu-item-modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_menu_builder_header, {
    locales: $props.field.locales,
    resourceId: $props.resourceId,
    activeLocale: _ctx.selectedLocale,
    menuCount: $props.field.menuCount,
    showDuplicate: $props.field.showDuplicate,
    onAddMenuItem: $options.openAddModal,
    onChangeLocale: $options.setSelectedLocale,
    onRefreshItems: $options.refreshData
  }, null, 8 /* PROPS */, ["locales", "resourceId", "activeLocale", "menuCount", "showDuplicate", "onAddMenuItem", "onChangeLocale", "onRefreshItems"]), _ctx.loadingMenuItems ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_loader, {
    "class": "text-60"
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !_ctx.loadingMenuItems && !_ctx.menuItems.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_no_menu_items_placeholder, {
    key: 1,
    onOnAddClick: $options.openAddModal
  }, null, 8 /* PROPS */, ["onOnAddClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !_ctx.loadingMenuItems && _ctx.menuItems.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_menu_builder, {
    key: 2,
    onDuplicateMenuItem: $options.duplicateMenuItem,
    onEditMenu: $options.editMenu,
    onOnMenuChange: $options.updateMenu,
    onRemoveMenu: $options.removeMenu,
    onSaveMenuLocalState: _ctx.saveMenuLocalState,
    "max-depth": $props.field.maxDepth,
    value: _ctx.menuItems,
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.menuItems = $event;
    })
  }, null, 8 /* PROPS */, ["onDuplicateMenuItem", "onEditMenu", "onOnMenuChange", "onRemoveMenu", "onSaveMenuLocalState", "max-depth", "value"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_update_menu_item_modal, {
    "max-depth": $props.field.maxDepth,
    linkType: _ctx.linkType,
    menuItemTypes: _ctx.menuItemTypes,
    newItem: _ctx.newItem,
    resourceId: $props.resourceId,
    resourceName: $props.resourceName,
    showModal: _ctx.showAddModal,
    update: _ctx.update,
    errors: _ctx.errors,
    isMenuItemUpdating: _ctx.isMenuItemUpdating,
    onCloseModal: $options.closeModal,
    onConfirmItemCreate: $options.confirmItemCreate,
    onOnLinkModelUpdate: $options.updateLinkModel,
    onOnLinkTypeUpdate: $options.updateLinkType,
    onUpdateItem: $options.updateItem
  }, null, 8 /* PROPS */, ["max-depth", "linkType", "menuItemTypes", "newItem", "resourceId", "resourceName", "showModal", "update", "errors", "isMenuItemUpdating", "onCloseModal", "onConfirmItemCreate", "onOnLinkModelUpdate", "onOnLinkTypeUpdate", "onUpdateItem"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_delete_menu_item_modal, {
    itemToDelete: _ctx.itemToDelete,
    showModal: _ctx.showDeleteModal,
    onCloseModal: $options.closeModal,
    onConfirmItemDelete: $options.confirmItemDelete
  }, null, 8 /* PROPS */, ["itemToDelete", "showModal", "onCloseModal", "onConfirmItemDelete"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=template&id=f388e838":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=template&id=f388e838 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  id: "menu-builder-header"
};
var _hoisted_2 = {
  key: 0,
  "class": "locale-selection px-4 py-1.5 mr-4 bg-white dark:bg-gray-800 rounded-lg overflow-x-auto w-full"
};
var _hoisted_3 = ["onClick"];
var _hoisted_4 = ["innerHTML"];
var _hoisted_5 = ["title"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Icon");
  var _component_copy_menu_items_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("copy-menu-items-modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [Object.keys($props.locales).length > 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(Object.keys($props.locales), function (locale) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: locale,
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return _ctx.$emit('changeLocale', locale);
      }, ["prevent"]),
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["cursor-pointer font-bold px-2 h-full flex items-center box-border whitespace-nowrap", {
        'text-primary-500 border-primary-500': $props.activeLocale === locale,
        'text-80 border-transparent': $props.activeLocale !== locale
      }]),
      style: {
        "border-bottom-width": "2px"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      innerHTML: $options.getLocaleDisplay(locale)
    }, null, 8 /* PROPS */, _hoisted_4)], 10 /* CLASS, PROPS */, _hoisted_3);
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.showCopyButton && $props.showDuplicate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    "class": "mt-2 mr-4 cursor-pointer",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.showCopyModal = true;
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
    name: "Duplicate",
    type: "outline"
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "cursor-pointer mt-2",
    title: _ctx.__('novaMenuBuilder.addMenuItem'),
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.$emit('addMenuItem');
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
    name: "ViewGridAdd",
    type: "outline"
  })], 8 /* PROPS */, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_copy_menu_items_modal, {
    resourceId: $props.resourceId,
    activeLocale: $props.activeLocale,
    locales: $props.locales,
    showModal: _ctx.showCopyModal,
    menuCount: $props.menuCount,
    onCloseModal: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.showCopyModal = false;
    }),
    onRefreshItems: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.$emit('refreshItems');
    })
  }, null, 8 /* PROPS */, ["resourceId", "activeLocale", "locales", "showModal", "menuCount"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=template&id=304e0c88":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=template&id=304e0c88 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = ["dusk"];
var _hoisted_2 = {
  "class": "text-base font-normal mt-3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "flex flex-col justify-center items-center px-6 py-8",
    dusk: "".concat(_ctx.resourceName, "-empty-dialog")
  }, [_cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
    "class": "inline-block text-gray-300 dark:text-gray-500",
    xmlns: "http://www.w3.org/2000/svg",
    width: "65",
    height: "51",
    viewBox: "0 0 65 51"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
    "class": "fill-current",
    d: "M56 40h2c.552285 0 1 .447715 1 1s-.447715 1-1 1h-2v2c0 .552285-.447715 1-1 1s-1-.447715-1-1v-2h-2c-.552285 0-1-.447715-1-1s.447715-1 1-1h2v-2c0-.552285.447715-1 1-1s1 .447715 1 1v2zm-5.364125-8H38v8h7.049375c.350333-3.528515 2.534789-6.517471 5.5865-8zm-5.5865 10H6c-3.313708 0-6-2.686292-6-6V6c0-3.313708 2.686292-6 6-6h44c3.313708 0 6 2.686292 6 6v25.049375C61.053323 31.5511 65 35.814652 65 41c0 5.522847-4.477153 10-10 10-5.185348 0-9.4489-3.946677-9.950625-9zM20 30h16v-8H20v8zm0 2v8h16v-8H20zm34-2v-8H38v8h16zM2 30h16v-8H2v8zm0 2v4c0 2.209139 1.790861 4 4 4h12v-8H2zm18-12h16v-8H20v8zm34 0v-8H38v8h16zM2 20h16v-8H2v8zm52-10V6c0-2.209139-1.790861-4-4-4H6C3.790861 2 2 3.790861 2 6v4h52zm1 39c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8z"
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('novaMenuBuilder.noMenuItemsPlaceholder')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    "class": "mt-3",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.$emit('onAddClick');
    }, ["prevent"]))
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('novaMenuBuilder.addMenuItem')), 1 /* TEXT */)];
    }),
    _: 1 /* STABLE */
  })], 8 /* PROPS */, _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=template&id=2dac350f":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=template&id=2dac350f ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "ml-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ModalHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalHeader");
  var _component_SelectControl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SelectControl");
  var _component_DefaultField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultField");
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
  var _component_ModalFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalFooter");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    show: $props.showModal,
    "class": "bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalHeader, {
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('novaMenuBuilder.copyMenuItemsFromTitle'))
      }, null, 8 /* PROPS */, ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return _ctx.copyMenuItems && _ctx.copyMenuItems.apply(_ctx, arguments);
        }, ["prevent"])),
        autocomplete: "off"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultField, {
        field: {
          fullWidth: true,
          stacked: true,
          withLabel: true,
          visible: true,
          name: _ctx.__('novaMenuBuilder.menuResourceSingularLabel')
        }
      }, {
        field: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [$options.hasMultipleMenus ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_SelectControl, {
            key: 0,
            options: _ctx.menuOptions.map(function (v) {
              return {
                value: v.id,
                label: v.name
              };
            }),
            placeholder: _ctx.__('novaMenuBuilder.menuResourceSingularLabel'),
            selected: _ctx.selectedMenu,
            "onUpdate:selected": _cache[0] || (_cache[0] = function ($event) {
              return _ctx.selectedMenu = $event;
            }),
            onChange: _cache[1] || (_cache[1] = function ($event) {
              return _ctx.selectedMenu = $event;
            })
          }, null, 8 /* PROPS */, ["options", "placeholder", "selected"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["field"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultField, {
        field: {
          fullWidth: true,
          stacked: true,
          withLabel: true,
          visible: true,
          name: _ctx.__('novaMenuBuilder.locale')
        }
      }, {
        field: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SelectControl, {
            options: _ctx.localeOptions.map(function (v) {
              return {
                value: v.id,
                label: v.name
              };
            }),
            placeholder: _ctx.__('novaMenuBuilder.locale'),
            selected: _ctx.selectedLocale,
            "onUpdate:selected": _cache[2] || (_cache[2] = function ($event) {
              return _ctx.selectedLocale = $event;
            }),
            onChange: _cache[3] || (_cache[3] = function ($event) {
              return _ctx.selectedLocale = $event;
            })
          }, null, 8 /* PROPS */, ["options", "placeholder", "selected"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["field"])], 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalFooter, {
        "class": "flex justify-end"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            state: "danger",
            dusk: "cancel-action-button",
            onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('closeModal');
            }, ["prevent"])),
            label: _ctx.__('novaMenuBuilder.closeModalTitle'),
            "class": "mr-3"
          }, null, 8 /* PROPS */, ["label"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            type: "button",
            dusk: "confirm-action-button",
            state: "default",
            variant: "solid",
            disabled: _ctx.isCopying,
            loading: _ctx.isCopying,
            label: _ctx.__('novaMenuBuilder.copyMenuItemsButtonTitle'),
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($options.copyMenuItemsFromMenu, ["prevent"])
          }, null, 8 /* PROPS */, ["disabled", "loading", "label", "onClick"])])];
        }),
        _: 1 /* STABLE */
      })];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=template&id=596120dc":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=template&id=596120dc ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "p-6 grid gap-6"
};
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  "class": "ml-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ModalHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalHeader");
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
  var _component_ModalFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalFooter");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    show: $props.showModal,
    "class": "bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalHeader, {
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('novaMenuBuilder.delConfirmModalTitle'))
      }, null, 8 /* PROPS */, ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [$props.itemToDelete && $props.itemToDelete.children.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('novaMenuBuilder.delConfirmModalDescChildren')), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('novaMenuBuilder.delConfirmModalDesc')), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalFooter, {
        "class": "flex justify-end"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            state: "danger",
            dusk: "cancel-action-button",
            onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('closeModal');
            }, ["prevent"])),
            label: _ctx.__('novaMenuBuilder.closeModalTitle'),
            "class": "mr-3"
          }, null, 8 /* PROPS */, ["label"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            type: "button",
            dusk: "confirm-action-button",
            state: "danger",
            label: _ctx.__('novaMenuBuilder.delConfirmModalConfirm'),
            onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('confirmItemDelete');
            }, ["prevent"]))
          }, null, 8 /* PROPS */, ["label"])])];
        }),
        _: 1 /* STABLE */
      })];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=template&id=f5eac798":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=template&id=f5eac798 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _hoisted_1 = {
  "class": "ml-1"
};
var _hoisted_2 = {
  "class": "ml-1"
};
var _hoisted_3 = {
  "class": "o1-pt-2 o1-pb-6"
};
var _hoisted_4 = ["placeholder"];
var _hoisted_5 = {
  disabled: "disabled",
  selected: "selected",
  value: ""
};
var _hoisted_6 = ["placeholder"];
var _hoisted_7 = {
  "class": "ml-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_CheckboxWithLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CheckboxWithLabel");
  var _component_ModalHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalHeader");
  var _component_DefaultField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultField");
  var _component_SelectControl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SelectControl");
  var _component_multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("multiselect");
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
  var _component_ModalFooter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalFooter");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    show: $props.showModal,
    "class": "bg-white dark:bg-gray-800 rounded-lg shadow-lg",
    align: "flex justify-end"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalHeader, {
        "class": "flex flex-wrap justify-between"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__($props.update ? 'novaMenuBuilder.updateModalTitle' : 'novaMenuBuilder.createModalTitle')) + " ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CheckboxWithLabel, {
            "class": "ml-auto mr-4",
            checked: $props.newItem.nestable,
            onInput: _cache[0] || (_cache[0] = function ($event) {
              return $props.newItem.nestable = $event.target.checked;
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('novaMenuBuilder.nestableLabel')), 1 /* TEXT */)];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["checked"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.maxDepth !== 1]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CheckboxWithLabel, {
            checked: $props.newItem.enabled,
            onInput: _cache[1] || (_cache[1] = function ($event) {
              return $props.newItem.enabled = $event.target.checked;
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.newItem.enabled ? _this.toggleLabels.checked : _this.toggleLabels.unchecked), 1 /* TEXT */)];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["checked"])];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return _ctx.$emit($props.update ? 'updateItem' : 'confirmItemCreate');
        }, ["prevent"])),
        autocomplete: "off"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultField, {
        errors: $options.wrappedErrors,
        fullWidthContent: true,
        field: _objectSpread(_objectSpread({}, _ctx.defaultFieldProps), {}, {
          validationKey: 'name',
          name: _ctx.__('novaMenuBuilder.menuItemName')
        })
      }, {
        field: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            placeholder: _ctx.__('novaMenuBuilder.menuItemName'),
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
              'o1-border-red-400': $options.getError('name')
            }, "w-full form-control form-input form-control-bordered"]),
            id: "name",
            type: "text",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $props.newItem.name = $event;
            })
          }, null, 10 /* CLASS, PROPS */, _hoisted_4), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.newItem.name]])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["errors", "field"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultField, {
        errors: $options.wrappedErrors,
        fullWidthContent: true,
        field: _objectSpread(_objectSpread({}, _ctx.defaultFieldProps), {}, {
          validationKey: 'class',
          name: _ctx.__('novaMenuBuilder.menuItemType')
        })
      }, {
        field: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SelectControl, {
            selected: $props.linkType["class"],
            "onUpdate:selected": _cache[3] || (_cache[3] = function ($event) {
              return $props.linkType["class"] = $event;
            }),
            options: $props.menuItemTypes.map(function (val) {
              return {
                value: val["class"],
                label: _ctx.__(val.name)
              };
            }),
            onChange: _cache[4] || (_cache[4] = function (e) {
              return _ctx.$emit('onLinkTypeUpdate', e);
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('novaMenuBuilder.chooseMenuItemType')), 1 /* TEXT */)];
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["selected", "options"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["errors", "field"]), $props.linkType.type === 'static-url' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DefaultField, {
        key: 0,
        errors: $options.wrappedErrors,
        fullWidthContent: true,
        field: _objectSpread(_objectSpread({}, _ctx.defaultFieldProps), {}, {
          validationKey: 'value',
          name: _ctx.__('novaMenuBuilder.menuItemUrlFieldName')
        })
      }, {
        field: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            placeholder: _ctx.__('novaMenuBuilder.menuItemUrlFieldName'),
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
              'o1-border-red-400': $options.getError('value')
            }, "w-full form-control form-input form-control-bordered"]),
            id: "url",
            type: "text",
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $props.newItem.value = $event;
            })
          }, null, 10 /* CLASS, PROPS */, _hoisted_6), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.newItem.value]])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["errors", "field"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.linkType.type === 'select' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DefaultField, {
        key: 1,
        "class": "option-select-field o1-menu-builder-multiselect-wrapper",
        errors: $options.wrappedErrors,
        fullWidthContent: true,
        field: _objectSpread(_objectSpread({}, _ctx.defaultFieldProps), {}, {
          validationKey: 'value',
          name: _ctx.__('novaMenuBuilder.menuItemValue')
        })
      }, {
        field: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_multiselect, {
            ref: "multiselect",
            options: $options.options,
            placeholder: _ctx.__('novaMenuBuilder.chooseOption'),
            value: $options.selectedOption,
            onInput: $options.handleChange,
            onClose: $options.handleClose,
            onRemove: $options.handleRemove,
            onOpen: $options.handleOpen,
            label: "label",
            "track-by": "id",
            selectLabel: "",
            selectGroupLabel: "",
            selectedLabel: "",
            deselectLabel: "",
            deselectGroupLabel: ""
          }, {
            singleLabel: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.selectedOption ? $options.selectedOption.label : ''), 1 /* TEXT */)];
            }),
            noOptions: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return _cache[10] || (_cache[10] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "No options", -1 /* HOISTED */)]);
            }),
            noResult: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return _cache[11] || (_cache[11] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "No results", -1 /* HOISTED */)]);
            }),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["options", "placeholder", "value", "onInput", "onClose", "onRemove", "onOpen"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["errors", "field"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.linkType.type && $props.linkType.type !== 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_DefaultField, {
        key: 2,
        fullWidthContent: true,
        field: _objectSpread(_objectSpread({}, _ctx.defaultFieldProps), {}, {
          name: _ctx.__('Open in')
        })
      }, {
        field: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SelectControl, {
            selected: $props.newItem.target,
            "onUpdate:selected": _cache[6] || (_cache[6] = function ($event) {
              return $props.newItem.target = $event;
            }),
            options: [{
              value: '_self',
              label: _ctx.__('novaMenuBuilder.menuItemTargetSameWindow')
            }, {
              value: '_blank',
              label: _ctx.__('novaMenuBuilder.menuItemTargetNewWindow')
            }]
          }, null, 8 /* PROPS */, ["selected", "options"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["field"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.fields && $options.fields.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 3
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.fields, function (field, i) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)("form-".concat(field.component)), {
          key: "".concat($props.linkType["class"], "_").concat(i),
          field: field,
          "resource-id": $props.resourceId,
          "resource-name": $props.resourceName,
          errors: $options.wrappedErrors,
          "show-errors": true,
          "class": "menu-item-component",
          fullWidthContent: true
        }, null, 8 /* PROPS */, ["field", "resource-id", "resource-name", "errors"]);
      }), 128 /* KEYED_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32 /* NEED_HYDRATION */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalFooter, {
        "class": "flex justify-end"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            state: "danger",
            dusk: "cancel-action-button",
            onClick: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('closeModal');
            }, ["prevent"])),
            label: _ctx.__('novaMenuBuilder.closeModalTitle'),
            "class": "mr-3"
          }, null, 8 /* PROPS */, ["label"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            type: "button",
            dusk: "confirm-action-button",
            state: "default",
            variant: "solid",
            disabled: $props.isMenuItemUpdating,
            loading: $props.isMenuItemUpdating,
            label: _ctx.__($props.update ? 'novaMenuBuilder.updatebuttonTitle' : 'novaMenuBuilder.createButtonTitle'),
            onClick: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return $options.storeWithData($props.update ? 'updateItem' : 'confirmItemCreate');
            }, ["prevent"]))
          }, null, 8 /* PROPS */, ["disabled", "loading", "label"])])];
        }),
        _: 1 /* STABLE */
      })];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MenuIndexView.vue?vue&type=template&id=3a0a4569":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MenuIndexView.vue?vue&type=template&id=3a0a4569 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ResourceIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ResourceIndex");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ResourceIndex, {
    "resource-name": _ctx.resourceName,
    shouldOverrideMeta: true
  }, null, 8 /* PROPS */, ["resource-name"]);
}

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = __webpack_require__.g.TYPED_ARRAY_SUPPORT !== undefined
  ? __webpack_require__.g.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu-builder .v-popover,\n.menu-builder .v-popover > * > span {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.opacity-25 {\n  opacity: 0.25;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[dusk=nova-menus-detail-component] #menu-builder-field {\n  margin: -8px 0;\n}\n#menu-builder-field .menu-button {\n  position: absolute;\n  right: -12px;\n  margin-top: -72px;\n}\n#menu-builder-field .nestable {\n  position: relative;\n}\n#menu-builder-field .nestable .nestable-list {\n  margin: 0;\n  padding: 0 0 0 40px;\n  list-style-type: none;\n}\n#menu-builder-field .nestable > .nestable-list {\n  padding: 0;\n}\n#menu-builder-field .nestable .nestable-item,\n#menu-builder-field .nestable .nestable-item-copy {\n  margin: 10px 0 0;\n}\n#menu-builder-field .nestable .nestable-item:first-child,\n#menu-builder-field .nestable .nestable-item-copy:first-child {\n  margin-top: 0;\n}\n#menu-builder-field .nestable .nestable-item .nestable-list,\n#menu-builder-field .nestable .nestable-item-copy .nestable-list {\n  margin-top: 10px;\n}\n#menu-builder-field .nestable .nestable-item {\n  position: relative;\n}\n#menu-builder-field .handle {\n  width: 100%;\n  padding: 0 10px 0 0;\n  height: 45px;\n  line-height: 45px;\n}\n#menu-builder-field .nestable-item.is-dragging .nestable-list {\n  pointer-events: none;\n}\n#menu-builder-field .nestable-item.is-dragging * {\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n#menu-builder-field .nestable-item.is-dragging:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(106, 127, 233, 0.274);\n  border: 1px dashed rgb(73, 100, 241);\n  border-radius: 5px;\n}\n#menu-builder-field .nestable-drag-layer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  pointer-events: none;\n}\n#menu-builder-field .nestable-drag-layer > .nestable-list {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0;\n  background-color: rgba(106, 127, 233, 0.274);\n}\n#menu-builder-field .nestable [draggable=true] {\n  cursor: move;\n}\n#menu-builder-field .disabled {\n  opacity: 0.5;\n}\n#menu-builder-field .btn-cascade-open {\n  transform: rotate(180deg);\n  transform-origin: center center;\n}\n#menu-builder-field .hide-cascade > ol {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#menu-builder-header {\n  position: absolute;\n  right: 0;\n  top: -46px;\n  display: flex;\n  max-width: 80%;\n  place-content: end;\n}\n#menu-builder-header .locale-selection {\n  display: flex;\n  align-items: center;\n}\n#menu-builder-header .locale-selection::-webkit-scrollbar {\n  height: 5px;\n}\n#menu-builder-header .locale-selection::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 5px;\n}\ndiv.relative.overflow-hidden:has(> #menu-builder-field) {\n  overflow: visible;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".add-new-menu-item-modal .menu-item-component div.py-6.px-8:nth-child(1) {\n  padding: 1rem 2rem 1rem 0;\n}\n.add-new-menu-item-modal .menu-item-component div.py-6.px-8:nth-child(2) {\n  padding: 1rem 0 1rem 0;\n  width: 80%;\n}\n\n/* Multiselect styles */\n.o1-menu-builder-multiselect-wrapper .multiselect {\n  min-height: 36px;\n  border: none;\n  border-radius: 0;\n  background: none;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__tags {\n  --tw-border-opacity: 1;\n  border-width: 1px;\n  border-color: #cbd5e1;\n  background-color: #fff;\n  color: #475569;\n  padding: 6px 56px 0 6px;\n  min-height: 36px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.dark .o1-menu-builder-multiselect-wrapper .multiselect__tags {\n  border-color: #334155;\n  background-color: #0f172a;\n  color: #94a3b8;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__input {\n  border: none;\n  border-color: rgba(var(--colors-gray-100), var(--tw-border-opacity));\n  background-color: #fff;\n  color: rgba(var(--colors-gray-400));\n  font-size: 14px;\n  line-height: 14px;\n  padding-left: 8px;\n}\n.dark .o1-menu-builder-multiselect-wrapper .multiselect__input {\n  background-color: #0f172a;\n  color: #94a3b8;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__tag {\n  background-color: rgba(var(--colors-primary-500));\n  color: #fff;\n  font-weight: 600;\n  padding: 4px 24px 4px 8px;\n  margin: 1px 8px 1px 0;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__tag .multiselect__tag-icon::after {\n  color: #fff;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__tag .multiselect__tag-icon:hover {\n  background: rgba(var(--colors-primary-500));\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__tag .multiselect__tag-icon:hover::after {\n  color: #ef4444;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect > .multiselect__clear::before, .o1-menu-builder-multiselect-wrapper .multiselect > .multiselect__clear::after {\n  width: 2px;\n  background: rgba(var(--colors-gray-400));\n}\n.o1-menu-builder-multiselect-wrapper .multiselect > .multiselect__clear:hover::before, .o1-menu-builder-multiselect-wrapper .multiselect > .multiselect__clear:hover::after {\n  background: rgba(var(--colors-red-400));\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__single {\n  background-color: #fff;\n  color: #475569;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 700;\n  min-height: 18px;\n  padding-top: 2px;\n  padding-left: 8px;\n  color: #475569;\n}\n.dark .o1-menu-builder-multiselect-wrapper .multiselect__single {\n  color: rgba(var(--colors-gray-400));\n  background-color: #0f172a;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__spinner {\n  background-color: #fff;\n  color: #475569;\n}\n.dark .o1-menu-builder-multiselect-wrapper .multiselect__spinner {\n  background-color: #0f172a;\n  color: #94a3b8;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__spinner:before, .o1-menu-builder-multiselect-wrapper .multiselect__spinner:after {\n  border-color: rgba(var(--colors-primary-500)) transparent transparent;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper {\n  border-color: #cbd5e1;\n  transition: none;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper .multiselect__content {\n  overflow: hidden;\n  width: 100%;\n}\n.dark .o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper {\n  border-color: #334155;\n  background-color: #0f172a;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper li > span.multiselect__option {\n  background-color: #fff;\n  color: #94a3b8;\n  min-height: 32px;\n  font-size: 14px;\n  line-height: 14px;\n}\n.dark .o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper li > span.multiselect__option {\n  background-color: #0f172a;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper .multiselect__element {\n  background-color: #fff;\n  color: #475569;\n}\n.dark .o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper .multiselect__element {\n  background-color: #0f172a;\n  color: #94a3b8;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper .multiselect__element .multiselect__option {\n  color: #475569;\n  padding: 8px 12px;\n  min-height: 32px;\n  font-size: 14px;\n  line-height: 14px;\n}\n.dark .o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper .multiselect__element .multiselect__option {\n  color: #94a3b8;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper .multiselect__element .multiselect__option.multiselect__option--selected {\n  color: rgba(var(--colors-primary-500));\n  background-color: #fff;\n}\n.dark .o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper .multiselect__element .multiselect__option.multiselect__option--selected {\n  background-color: #0f172a;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper .multiselect__element .multiselect__option.multiselect__option--highlight {\n  background-color: rgba(var(--colors-primary-500));\n  color: #fff;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper .multiselect__element .multiselect__option.multiselect__option--highlight::after {\n  background-color: rgba(var(--colors-primary-500));\n  font-weight: 600;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper .multiselect__element .multiselect__option.multiselect__option--highlight.multiselect__option--selected {\n  background-color: #f87171;\n}\n.dark .o1-menu-builder-multiselect-wrapper .multiselect__content-wrapper .multiselect__element .multiselect__option.multiselect__option--highlight.multiselect__option--selected {\n  background-color: #f87171;\n}\n.o1-menu-builder-multiselect-wrapper .reorder__tag {\n  background-color: rgba(var(--colors-primary-500));\n  border-radius: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 5px;\n  font-weight: 600;\n  transition: all 0.2s ease-in-out;\n}\n.o1-menu-builder-multiselect-wrapper .reorder__tag:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__select {\n  height: 36px;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__placeholder {\n  margin-bottom: 8px;\n  padding-top: 0px;\n  padding-left: 8px;\n  min-height: 16px;\n  line-height: 16px;\n  cursor: default;\n  color: #475569;\n}\n.dark .o1-menu-builder-multiselect-wrapper .multiselect__placeholder {\n  color: #64748b;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__clear {\n  position: absolute;\n  right: 36px;\n  top: 8px;\n  height: 20px;\n  width: 20px;\n  display: block;\n  cursor: pointer;\n  z-index: 2;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__clear::before, .o1-menu-builder-multiselect-wrapper .multiselect__clear::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 3px;\n  height: 16px;\n  background: #aaa;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin: auto;\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__clear::before {\n  transform: rotate(45deg);\n}\n.o1-menu-builder-multiselect-wrapper .multiselect__clear::after {\n  transform: rotate(-45deg);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nfieldset[disabled] .multiselect {\n  pointer-events: none;\n}\n.multiselect__spinner {\n  position: absolute;\n  right: 1px;\n  top: 1px;\n  width: 40px;\n  height: 38px;\n  background: #fff;\n  display: block;\n}\n.multiselect__spinner:before,\n.multiselect__spinner:after {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  left: 50%;\n  margin: -8px 0 0 -8px;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  border-color: #41b883 transparent transparent;\n  border-style: solid;\n  border-width: 2px;\n  box-shadow: 0 0 0 1px transparent;\n}\n.multiselect__spinner:before {\n  animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);\n  animation-iteration-count: infinite;\n}\n.multiselect__spinner:after {\n  animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);\n  animation-iteration-count: infinite;\n}\n.multiselect__loading-enter-active,\n.multiselect__loading-leave-active {\n  transition: opacity 0.4s ease-in-out;\n  opacity: 1;\n}\n.multiselect__loading-enter,\n.multiselect__loading-leave-active {\n  opacity: 0;\n}\n.multiselect,\n.multiselect__input,\n.multiselect__single {\n  font-family: inherit;\n  font-size: 16px;\n  touch-action: manipulation;\n}\n.multiselect {\n  box-sizing: content-box;\n  display: block;\n  position: relative;\n  width: 100%;\n  min-height: 40px;\n  text-align: left;\n  color: #35495e;\n}\n.multiselect * {\n  box-sizing: border-box;\n}\n.multiselect:focus {\n  outline: none;\n}\n.multiselect--disabled {\n  background: #ededed;\n  pointer-events: none;\n  opacity: 0.6;\n}\n.multiselect--active {\n  z-index: 50;\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,\n.multiselect--active:not(.multiselect--above) .multiselect__input,\n.multiselect--active:not(.multiselect--above) .multiselect__tags {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.multiselect--active .multiselect__select {\n  transform: rotateZ(180deg);\n}\n.multiselect--above.multiselect--active .multiselect__current,\n.multiselect--above.multiselect--active .multiselect__input,\n.multiselect--above.multiselect--active .multiselect__tags {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.multiselect__input,\n.multiselect__single {\n  position: relative;\n  display: inline-block;\n  min-height: 20px;\n  line-height: 20px;\n  border: none;\n  border-radius: 5px;\n  background: #fff;\n  padding: 0 0 0 5px;\n  width: calc(100%);\n  transition: border 0.1s ease;\n  box-sizing: border-box;\n  margin-bottom: 8px;\n  vertical-align: top;\n}\n.multiselect__input::-moz-placeholder {\n  color: #35495e;\n}\n.multiselect__input::placeholder {\n  color: #35495e;\n}\n.multiselect__tag ~ .multiselect__input,\n.multiselect__tag ~ .multiselect__single {\n  width: auto;\n}\n.multiselect__input:hover,\n.multiselect__single:hover {\n  border-color: #cfcfcf;\n}\n.multiselect__input:focus,\n.multiselect__single:focus {\n  border-color: #a8a8a8;\n  outline: none;\n}\n.multiselect__single {\n  padding-left: 5px;\n  margin-bottom: 8px;\n}\n.multiselect__tags-wrap {\n  display: inline;\n}\n.multiselect__tags {\n  min-height: 40px;\n  display: block;\n  padding: 8px 40px 0 8px;\n  border-radius: 5px;\n  border: 1px solid #e8e8e8;\n  background: #fff;\n  font-size: 14px;\n}\n.multiselect__tag {\n  position: relative;\n  display: inline-block;\n  padding: 4px 26px 4px 10px;\n  border-radius: 5px;\n  margin-right: 10px;\n  color: #fff;\n  line-height: 1;\n  background: #41b883;\n  margin-bottom: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 100%;\n  text-overflow: ellipsis;\n}\n.multiselect__tag-icon {\n  cursor: pointer;\n  margin-left: 7px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-weight: 700;\n  font-style: initial;\n  width: 22px;\n  text-align: center;\n  line-height: 22px;\n  transition: all 0.2s ease;\n  border-radius: 5px;\n}\n.multiselect__tag-icon:after {\n  content: \"×\";\n  color: #266d4d;\n  font-size: 14px;\n}\n.multiselect__tag-icon:focus,\n.multiselect__tag-icon:hover {\n  background: #369a6e;\n}\n.multiselect__tag-icon:focus:after,\n.multiselect__tag-icon:hover:after {\n  color: white;\n}\n.multiselect__current {\n  line-height: 16px;\n  min-height: 40px;\n  box-sizing: border-box;\n  display: block;\n  overflow: hidden;\n  padding: 8px 12px 0;\n  padding-right: 30px;\n  white-space: nowrap;\n  margin: 0;\n  text-decoration: none;\n  border-radius: 5px;\n  border: 1px solid #e8e8e8;\n  cursor: pointer;\n}\n.multiselect__select {\n  line-height: 16px;\n  display: block;\n  position: absolute;\n  box-sizing: border-box;\n  width: 40px;\n  height: 38px;\n  right: 1px;\n  top: 1px;\n  padding: 4px 8px;\n  margin: 0;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.multiselect__select:before {\n  position: relative;\n  right: 0;\n  top: 65%;\n  color: #999;\n  margin-top: 4px;\n  border-style: solid;\n  border-width: 5px 5px 0 5px;\n  border-color: #999999 transparent transparent transparent;\n  content: \"\";\n}\n.multiselect__placeholder {\n  color: #adadad;\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-top: 2px;\n}\n.multiselect--active .multiselect__placeholder {\n  display: none;\n}\n.multiselect__content-wrapper {\n  position: absolute;\n  display: block;\n  background: #fff;\n  width: 100%;\n  max-height: 240px;\n  overflow: auto;\n  border: 1px solid #e8e8e8;\n  border-top: none;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  z-index: 50;\n  -webkit-overflow-scrolling: touch;\n}\n.multiselect__content {\n  list-style: none;\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  min-width: 100%;\n  vertical-align: top;\n}\n.multiselect--above .multiselect__content-wrapper {\n  bottom: 100%;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom: none;\n  border-top: 1px solid #e8e8e8;\n}\n.multiselect__content::webkit-scrollbar {\n  display: none;\n}\n.multiselect__element {\n  display: block;\n}\n.multiselect__option {\n  display: block;\n  padding: 12px;\n  min-height: 40px;\n  line-height: 16px;\n  text-decoration: none;\n  text-transform: none;\n  vertical-align: middle;\n  position: relative;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.multiselect__option:after {\n  top: 0;\n  right: 0;\n  position: absolute;\n  line-height: 40px;\n  padding-right: 12px;\n  padding-left: 20px;\n  font-size: 13px;\n}\n.multiselect__option--highlight {\n  background: #41b883;\n  outline: none;\n  color: white;\n}\n.multiselect__option--highlight:after {\n  content: attr(data-select);\n  background: #41b883;\n  color: white;\n}\n.multiselect__option--selected {\n  background: #f3f3f3;\n  color: #35495e;\n  font-weight: bold;\n}\n.multiselect__option--selected:after {\n  content: attr(data-selected);\n  color: silver;\n  background: inherit;\n}\n.multiselect__option--selected.multiselect__option--highlight {\n  background: #ff6a6a;\n  color: #fff;\n}\n.multiselect__option--selected.multiselect__option--highlight:after {\n  background: #ff6a6a;\n  content: attr(data-deselect);\n  color: #fff;\n}\n.multiselect--disabled .multiselect__current,\n.multiselect--disabled .multiselect__select {\n  background: #ededed;\n  color: #a6a6a6;\n}\n.multiselect__option--disabled {\n  background: #ededed !important;\n  color: #a6a6a6 !important;\n  cursor: text;\n  pointer-events: none;\n}\n.multiselect__option--group {\n  background: #ededed;\n  color: #35495e;\n}\n.multiselect__option--group.multiselect__option--highlight {\n  background: #35495e;\n  color: #fff;\n}\n.multiselect__option--group.multiselect__option--highlight:after {\n  background: #35495e;\n}\n.multiselect__option--disabled.multiselect__option--highlight {\n  background: #dedede;\n}\n.multiselect__option--group-selected.multiselect__option--highlight {\n  background: #ff6a6a;\n  color: #fff;\n}\n.multiselect__option--group-selected.multiselect__option--highlight:after {\n  background: #ff6a6a;\n  content: attr(data-deselect);\n  color: #fff;\n}\n.multiselect-enter-active,\n.multiselect-leave-active {\n  transition: all 0.15s ease;\n}\n.multiselect-enter,\n.multiselect-leave-active {\n  opacity: 0;\n}\n.multiselect__strong {\n  margin-bottom: 8px;\n  line-height: 20px;\n  display: inline-block;\n  vertical-align: top;\n}\n*[dir=\"rtl\"] .multiselect {\n  text-align: right;\n}\n*[dir=\"rtl\"] .multiselect__select {\n  right: auto;\n  left: 1px;\n}\n*[dir=\"rtl\"] .multiselect__tags {\n  padding: 8px 8px 0px 40px;\n}\n*[dir=\"rtl\"] .multiselect__content {\n  text-align: right;\n}\n*[dir=\"rtl\"] .multiselect__option:after {\n  right: auto;\n  left: 0;\n}\n*[dir=\"rtl\"] .multiselect__clear {\n  right: auto;\n  left: 12px;\n}\n*[dir=\"rtl\"] .multiselect__spinner {\n  right: auto;\n  left: 1px;\n}\n@keyframes spinning {\nfrom {\n    transform: rotate(0);\n}\nto {\n    transform: rotate(2turn);\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/form-backend-validation/dist/Errors.js":
/*!*************************************************************!*\
  !*** ./node_modules/form-backend-validation/dist/Errors.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Errors);

        this.record(errors);
    }

    /**
     * Get all the errors.
     *
     * @return {object}
     */


    _createClass(Errors, [{
        key: "all",
        value: function all() {
            return this.errors;
        }

        /**
         * Determine if any errors exists for the given field or object.
         *
         * @param {string} field
         */

    }, {
        key: "has",
        value: function has(field) {
            var hasError = this.errors.hasOwnProperty(field);

            if (!hasError) {
                var errors = Object.keys(this.errors).filter(function (e) {
                    return e.startsWith(field + ".") || e.startsWith(field + "[");
                });

                hasError = errors.length > 0;
            }

            return hasError;
        }
    }, {
        key: "first",
        value: function first(field) {
            return this.get(field)[0];
        }
    }, {
        key: "get",
        value: function get(field) {
            return this.errors[field] || [];
        }

        /**
         * Determine if we have any errors.
         * Or return errors for the given keys.
         *
         * @param {array} keys
         */

    }, {
        key: "any",
        value: function any() {
            var _this = this;

            var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            if (keys.length === 0) {
                return Object.keys(this.errors).length > 0;
            }

            var errors = {};

            keys.forEach(function (key) {
                return errors[key] = _this.get(key);
            });

            return errors;
        }

        /**
         * Record the new errors.
         *
         * @param {object} errors
         */

    }, {
        key: "record",
        value: function record() {
            var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.errors = errors;
        }

        /**
         * Clear a specific field, object or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (!field) {
                this.errors = {};

                return;
            }

            var errors = Object.assign({}, this.errors);

            Object.keys(errors).filter(function (e) {
                return e === field || e.startsWith(field + ".") || e.startsWith(field + "[");
            }).forEach(function (e) {
                return delete errors[e];
            });

            this.errors = errors;
        }
    }]);

    return Errors;
}();

exports["default"] = Errors;

/***/ }),

/***/ "./node_modules/form-backend-validation/dist/Form.js":
/*!***********************************************************!*\
  !*** ./node_modules/form-backend-validation/dist/Form.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Errors = __webpack_require__(/*! ./Errors */ "./node_modules/form-backend-validation/dist/Errors.js");

var _Errors2 = _interopRequireDefault(_Errors);

var _util = __webpack_require__(/*! ./util */ "./node_modules/form-backend-validation/dist/util/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = function () {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     * @param {object} options
     */
    function Form() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Form);

        this.processing = false;
        this.successful = false;

        this.withData(data).withOptions(options).withErrors({});
    }

    _createClass(Form, [{
        key: 'withData',
        value: function withData(data) {
            if ((0, _util.isArray)(data)) {
                data = data.reduce(function (carry, element) {
                    carry[element] = '';
                    return carry;
                }, {});
            }

            this.setInitialValues(data);

            this.errors = new _Errors2.default();
            this.processing = false;
            this.successful = false;

            for (var field in data) {
                (0, _util.guardAgainstReservedFieldName)(field);

                this[field] = data[field];
            }

            return this;
        }
    }, {
        key: 'withErrors',
        value: function withErrors(errors) {
            this.errors = new _Errors2.default(errors);

            return this;
        }
    }, {
        key: 'withOptions',
        value: function withOptions(options) {
            this.__options = {
                resetOnSuccess: true
            };

            if (options.hasOwnProperty('resetOnSuccess')) {
                this.__options.resetOnSuccess = options.resetOnSuccess;
            }

            if (options.hasOwnProperty('onSuccess')) {
                this.onSuccess = options.onSuccess;
            }

            if (options.hasOwnProperty('onFail')) {
                this.onFail = options.onFail;
            }

            var windowAxios = typeof window === 'undefined' ? false : window.axios;

            this.__http = options.http || windowAxios || __webpack_require__(/*! axios */ "./node_modules/form-backend-validation/node_modules/axios/index.js");

            if (!this.__http) {
                throw new Error('No http library provided. Either pass an http option, or install axios.');
            }

            return this;
        }

        /**
         * Fetch all relevant data for the form.
         */

    }, {
        key: 'data',
        value: function data() {
            var data = {};

            for (var property in this.initial) {
                data[property] = this[property];
            }

            return data;
        }

        /**
         * Fetch specific data for the form.
         *
         * @param {array} fields
         * @return {object}
         */

    }, {
        key: 'only',
        value: function only(fields) {
            var _this = this;

            return fields.reduce(function (filtered, field) {
                filtered[field] = _this[field];
                return filtered;
            }, {});
        }

        /**
         * Reset the form fields.
         */

    }, {
        key: 'reset',
        value: function reset() {
            (0, _util.merge)(this, this.initial);

            this.errors.clear();
        }
    }, {
        key: 'setInitialValues',
        value: function setInitialValues(values) {
            this.initial = {};

            (0, _util.merge)(this.initial, values);
        }
    }, {
        key: 'populate',
        value: function populate(data) {
            var _this2 = this;

            Object.keys(data).forEach(function (field) {
                (0, _util.guardAgainstReservedFieldName)(field);

                if (_this2.hasOwnProperty(field)) {
                    (0, _util.merge)(_this2, _defineProperty({}, field, data[field]));
                }
            });

            return this;
        }

        /**
         * Clear the form fields.
         */

    }, {
        key: 'clear',
        value: function clear() {
            for (var field in this.initial) {
                this[field] = '';
            }

            this.errors.clear();
        }

        /**
         * Send a POST request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }

        /**
         * Send a PUT request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }

        /**
         * Send a PATCH request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
         * Send a DELETE request to the given URL.
         *
         * @param {string} url
         */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
         * Submit the form.
         *
         * @param {string} requestType
         * @param {string} url
         */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this3 = this;

            this.__validateRequestType(requestType);
            this.errors.clear();
            this.processing = true;
            this.successful = false;

            return new Promise(function (resolve, reject) {
                _this3.__http[requestType](url, _this3.hasFiles() ? (0, _util.objectToFormData)(_this3.data()) : _this3.data()).then(function (response) {
                    _this3.processing = false;
                    _this3.onSuccess(response.data);

                    resolve(response.data);
                }).catch(function (error) {
                    _this3.processing = false;
                    _this3.onFail(error);

                    reject(error);
                });
            });
        }

        /**
         * @returns {boolean}
         */

    }, {
        key: 'hasFiles',
        value: function hasFiles() {
            for (var property in this.initial) {
                if (this.hasFilesDeep(this[property])) {
                    return true;
                }
            }

            return false;
        }
    }, {
        key: 'hasFilesDeep',


        /**
         * @param {Object|Array} object
         * @returns {boolean}
         */
        value: function hasFilesDeep(object) {
            if (object === null) {
                return false;
            }

            if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        if (this.hasFilesDeep(object[key])) {
                            return true;
                        }
                    }
                }
            }

            if (Array.isArray(object)) {
                for (var _key in object) {
                    if (object.hasOwnProperty(_key)) {
                        return this.hasFilesDeep(object[_key]);
                    }
                }
            }

            return (0, _util.isFile)(object);
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            this.successful = true;

            if (this.__options.resetOnSuccess) {
                this.reset();
            }
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onFail',
        value: function onFail(error) {
            this.successful = false;

            if (error.response && error.response.data.errors) {
                this.errors.record(error.response.data.errors);
            }
        }

        /**
         * Get the error message(s) for the given field.
         *
         * @param field
         */

    }, {
        key: 'hasError',
        value: function hasError(field) {
            return this.errors.has(field);
        }

        /**
         * Get the first error message for the given field.
         *
         * @param {string} field
         * @return {string}
         */

    }, {
        key: 'getError',
        value: function getError(field) {
            return this.errors.first(field);
        }

        /**
         * Get the error messages for the given field.
         *
         * @param {string} field
         * @return {array}
         */

    }, {
        key: 'getErrors',
        value: function getErrors(field) {
            return this.errors.get(field);
        }
    }, {
        key: '__validateRequestType',
        value: function __validateRequestType(requestType) {
            var requestTypes = ['get', 'delete', 'head', 'post', 'put', 'patch'];

            if (requestTypes.indexOf(requestType) === -1) {
                throw new Error('`' + requestType + '` is not a valid request type, ' + ('must be one of: `' + requestTypes.join('`, `') + '`.'));
            }
        }
    }], [{
        key: 'create',
        value: function create() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return new Form().withData(data);
        }
    }]);

    return Form;
}();

exports["default"] = Form;

/***/ }),

/***/ "./node_modules/form-backend-validation/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/form-backend-validation/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _Form = __webpack_require__(/*! ./Form */ "./node_modules/form-backend-validation/dist/Form.js");

Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
}));
Object.defineProperty(exports, "Form", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Form).default;
  }
}));

var _Errors = __webpack_require__(/*! ./Errors */ "./node_modules/form-backend-validation/dist/Errors.js");

Object.defineProperty(exports, "Errors", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Errors).default;
  }
}));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/form-backend-validation/dist/util/fieldNameValidation.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/form-backend-validation/dist/util/fieldNameValidation.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.guardAgainstReservedFieldName = guardAgainstReservedFieldName;
var reservedFieldNames = exports.reservedFieldNames = ['__http', '__options', '__validateRequestType', 'clear', 'data', 'delete', 'errors', 'getError', 'getErrors', 'hasError', 'initial', 'onFail', 'only', 'onSuccess', 'patch', 'populate', 'post', 'processing', 'successful', 'put', 'reset', 'submit', 'withData', 'withErrors', 'withOptions'];

function guardAgainstReservedFieldName(fieldName) {
    if (reservedFieldNames.indexOf(fieldName) !== -1) {
        throw new Error('Field name ' + fieldName + ' isn\'t allowed to be used in a Form or Errors instance.');
    }
}

/***/ }),

/***/ "./node_modules/form-backend-validation/dist/util/formData.js":
/*!********************************************************************!*\
  !*** ./node_modules/form-backend-validation/dist/util/formData.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.objectToFormData = objectToFormData;
function objectToFormData(object) {
    var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (object === null || object === 'undefined' || object.length === 0) {
        return formData.append(parent, object);
    }

    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            appendToFormData(formData, getKey(parent, property), object[property]);
        }
    }

    return formData;
}

function getKey(parent, property) {
    return parent ? parent + '[' + property + ']' : property;
}

function appendToFormData(formData, key, value) {
    if (value instanceof Date) {
        return formData.append(key, value.toISOString());
    }

    if (value instanceof File) {
        return formData.append(key, value, value.name);
    }

    if (typeof value === "boolean") {
        return formData.append(key, value ? '1' : '0');
    }

    if (value === null) {
        return formData.append(key, '');
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
        return formData.append(key, value);
    }

    objectToFormData(value, formData, key);
}

/***/ }),

/***/ "./node_modules/form-backend-validation/dist/util/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/form-backend-validation/dist/util/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _objects = __webpack_require__(/*! ./objects */ "./node_modules/form-backend-validation/dist/util/objects.js");

Object.keys(_objects).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _objects[key];
    }
  });
});

var _formData = __webpack_require__(/*! ./formData */ "./node_modules/form-backend-validation/dist/util/formData.js");

Object.keys(_formData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _formData[key];
    }
  });
});

var _fieldNameValidation = __webpack_require__(/*! ./fieldNameValidation */ "./node_modules/form-backend-validation/dist/util/fieldNameValidation.js");

Object.keys(_fieldNameValidation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fieldNameValidation[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/form-backend-validation/dist/util/objects.js":
/*!*******************************************************************!*\
  !*** ./node_modules/form-backend-validation/dist/util/objects.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isArray = isArray;
exports.isFile = isFile;
exports.merge = merge;
exports.cloneDeep = cloneDeep;
function isArray(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
}

function isFile(object) {
    return object instanceof File || object instanceof FileList;
}

function merge(a, b) {
    for (var key in b) {
        a[key] = cloneDeep(b[key]);
    }
}

function cloneDeep(object) {
    if (object === null) {
        return null;
    }

    if (isFile(object)) {
        return object;
    }

    if (Array.isArray(object)) {
        var clone = [];

        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                clone[key] = cloneDeep(object[key]);
            }
        }

        return clone;
    }

    if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
        var _clone = {};

        for (var _key in object) {
            if (object.hasOwnProperty(_key)) {
                _clone[_key] = cloneDeep(object[_key]);
            }
        }

        return _clone;
    }

    return object;
}

/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/index.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/form-backend-validation/node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/adapters/xhr.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/adapters/xhr.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/isURLSameOrigin.js");
var transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ "./node_modules/form-backend-validation/node_modules/axios/lib/defaults/transitional.js");
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/AxiosError.js");
var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./node_modules/form-backend-validation/node_modules/axios/lib/cancel/CanceledError.js");
var parseProtocol = __webpack_require__(/*! ../helpers/parseProtocol */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/parseProtocol.js");
var platform = __webpack_require__(/*! ../platform */ "./node_modules/form-backend-validation/node_modules/axios/lib/platform/index.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var withXSRFToken = config.withXSRFToken;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      withXSRFToken && utils.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));
      if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(fullPath))) {
        // Add xsrf header
        var xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    // false, 0 (zero number), and '' (empty string) are valid JSON values
    if (!requestData && requestData !== false && requestData !== 0 && requestData !== '') {
      requestData = null;
    }

    var protocol = parseProtocol(fullPath);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/axios.js":
/*!******************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/axios.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/form-backend-validation/node_modules/axios/lib/defaults/index.js");
var formDataToJSON = __webpack_require__(/*! ./helpers/formDataToJSON */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/formDataToJSON.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = __webpack_require__(/*! ./cancel/CanceledError */ "./node_modules/form-backend-validation/node_modules/axios/lib/cancel/CanceledError.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/form-backend-validation/node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/form-backend-validation/node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/form-backend-validation/node_modules/axios/lib/env/data.js").version);
axios.toFormData = __webpack_require__(/*! ./helpers/toFormData */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/toFormData.js");

// Expose AxiosError class
axios.AxiosError = __webpack_require__(/*! ../lib/core/AxiosError */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/AxiosError.js");

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/isAxiosError.js");

axios.formToJSON = function(thing) {
  return formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
};

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/cancel/CancelToken.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/cancel/CancelToken.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var CanceledError = __webpack_require__(/*! ./CanceledError */ "./node_modules/form-backend-validation/node_modules/axios/lib/cancel/CanceledError.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i = token._listeners.length;

    while (i-- > 0) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message, config, request) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new CanceledError(message, config, request);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/cancel/CanceledError.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/cancel/CanceledError.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/AxiosError.js");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

module.exports = CanceledError;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/cancel/isCancel.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/cancel/isCancel.js ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/core/Axios.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/core/Axios.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/mergeConfig.js");
var buildFullPath = __webpack_require__(/*! ./buildFullPath */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/buildFullPath.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
 * @param {?Object} config
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  var paramsSerializer = config.paramsSerializer;

  if (paramsSerializer != null) {
    if (utils.isFunction(paramsSerializer)) {
      config.paramsSerializer = {
        serialize: paramsSerializer
      };
    } else {
      validator.assertOptions(paramsSerializer, {
        encode: validators.function,
        serialize: validators.function
      }, true);
    }
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/core/AxiosError.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/core/AxiosError.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

var prototype = AxiosError.prototype;
var descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(function(code) {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = function(error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

module.exports = AxiosError;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/core/InterceptorManager.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/core/InterceptorManager.js ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Clear all interceptors from the stack
 */
InterceptorManager.prototype.clear = function clear() {
  if (this.handlers) {
    this.handlers = [];
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/core/buildFullPath.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/core/buildFullPath.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/core/dispatchRequest.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/core/dispatchRequest.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/form-backend-validation/node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/form-backend-validation/node_modules/axios/lib/defaults/index.js");
var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./node_modules/form-backend-validation/node_modules/axios/lib/cancel/CanceledError.js");
var normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/normalizeHeaderName.js");

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    null,
    config.transformRequest
  );

  normalizeHeaderName(config.headers, 'Accept');
  normalizeHeaderName(config.headers, 'Content-Type');

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      response.status,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          reason.response.status,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/core/mergeConfig.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/core/mergeConfig.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isEmptyObject(source)) {
      return utils.merge({}, target);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'withXSRFToken': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/core/settle.js":
/*!************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/core/settle.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ./AxiosError */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/AxiosError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/core/transformData.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/core/transformData.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/form-backend-validation/node_modules/axios/lib/defaults/index.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Number} status HTTP status code
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, status, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers, status);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/defaults/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/defaults/index.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


var utils = __webpack_require__(/*! ../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/normalizeHeaderName.js");
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/AxiosError.js");
var transitionalDefaults = __webpack_require__(/*! ./transitional */ "./node_modules/form-backend-validation/node_modules/axios/lib/defaults/transitional.js");
var toFormData = __webpack_require__(/*! ../helpers/toFormData */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/toFormData.js");
var toURLEncodedForm = __webpack_require__(/*! ../helpers/toURLEncodedForm */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/toURLEncodedForm.js");
var platform = __webpack_require__(/*! ../platform */ "./node_modules/form-backend-validation/node_modules/axios/lib/platform/index.js");
var formDataToJSON = __webpack_require__(/*! ../helpers/formDataToJSON */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/formDataToJSON.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ../adapters/xhr */ "./node_modules/form-backend-validation/node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ../adapters/http */ "./node_modules/form-backend-validation/node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    var contentType = headers && headers['Content-Type'] || '';
    var hasJSONContentType = contentType.indexOf('application/json') > -1;
    var isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    var isFormData = utils.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    var isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') !== -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        var _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      var silentJSONParsing = transitional && transitional.silentJSONParsing;
      var strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/defaults/transitional.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/defaults/transitional.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/env/classes/FormData.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/env/classes/FormData.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// eslint-disable-next-line strict
module.exports = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/env/data.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/env/data.js ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {
  "version": "0.29.0"
};

/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toFormData = __webpack_require__(/*! ./toFormData */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/toFormData.js");

function encode(str) {
  var charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

var prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  var _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

module.exports = AxiosURLSearchParams;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/bind.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/bind.js ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/buildURL.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/buildURL.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");
var AxiosURLSearchParams = __webpack_require__(/*! ../helpers/AxiosURLSearchParams */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/AxiosURLSearchParams.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var hashmarkIndex = url.indexOf('#');

  if (hashmarkIndex !== -1) {
    url = url.slice(0, hashmarkIndex);
  }

  var _encode = options && options.encode || encode;

  var serializeFn = options && options.serialize;

  var serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/combineURLs.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/combineURLs.js ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/cookies.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/cookies.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/formDataToJSON.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");

function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(function(match) {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

function arrayToObject(arr) {
  var obj = {};
  var keys = Object.keys(arr);
  var i;
  var len = keys.length;
  var key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    var name = path[index++];

    if (name === '__proto__') return true;

    var isNumericKey = Number.isFinite(+name);
    var isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProperty(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    var result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    var obj = {};

    utils.forEachEntry(formData, function(name, value) {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

module.exports = formDataToJSON;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/isAxiosError.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/isAxiosError.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
      * Parse a URL to discover it's components
      *
      * @param {String} url The URL to be parsed
      * @returns {Object}
      */
      function resolveURL(url) {
        var href = url;

        if (msie) {
          // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
      * Determine if a URL shares the same origin as the current location
      *
      * @param {String} requestURL The URL to test
      * @returns {boolean} True if URL shares the same origin, otherwise false
      */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

    // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/parseHeaders.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.slice(0, i)).toLowerCase();
    val = utils.trim(line.slice(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/parseProtocol.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/parseProtocol.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/spread.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/spread.js ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/toFormData.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/toFormData.js ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];


var utils = __webpack_require__(/*! ../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/AxiosError.js");
var envFormData = __webpack_require__(/*! ../env/classes/FormData */ "./node_modules/form-backend-validation/node_modules/axios/lib/env/classes/FormData.js");

function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

var predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

function isSpecCompliant(thing) {
  return thing && utils.isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator];
}

/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 * @returns {Object}
 **/

function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (envFormData || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  var metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  var visitor = options.visitor || defaultVisitor;
  var dots = options.dots;
  var indexes = options.indexes;
  var _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  var useBlob = _Blob && isSpecCompliant(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    var arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        (utils.isFileList(value) || utils.endsWith(key, '[]') && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  var stack = [];

  var exposedHelpers = Object.assign(predicates, {
    defaultVisitor: defaultVisitor,
    convertValue: convertValue,
    isVisitable: isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      var result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

module.exports = toFormData;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js");
var toFormData = __webpack_require__(/*! ./toFormData */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/toFormData.js");
var platform = __webpack_require__(/*! ../platform/ */ "./node_modules/form-backend-validation/node_modules/axios/lib/platform/index.js");

module.exports = function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/validator.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/helpers/validator.js ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(/*! ../env/data */ "./node_modules/form-backend-validation/node_modules/axios/lib/env/data.js").version);
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/form-backend-validation/node_modules/axios/lib/core/AxiosError.js");

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \**********************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = FormData;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \*****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosURLSearchParams = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/AxiosURLSearchParams.js");

module.exports = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/platform/browser/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/platform/browser/index.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = {
  isBrowser: true,
  classes: {
    URLSearchParams: __webpack_require__(/*! ./classes/URLSearchParams */ "./node_modules/form-backend-validation/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js"),
    FormData: __webpack_require__(/*! ./classes/FormData */ "./node_modules/form-backend-validation/node_modules/axios/lib/platform/browser/classes/FormData.js"),
    Blob: Blob
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/platform/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/platform/index.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./node/ */ "./node_modules/form-backend-validation/node_modules/axios/lib/platform/browser/index.js");


/***/ }),

/***/ "./node_modules/form-backend-validation/node_modules/axios/lib/utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/form-backend-validation/node_modules/axios/lib/utils.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/form-backend-validation/node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

// eslint-disable-next-line func-names
var kindOf = (function(cache) {
  // eslint-disable-next-line func-names
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
})(Object.create(null));

function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a empty Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a empty Object, otherwise false
 */
function isEmptyObject(val) {
  return val && Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  var product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */

function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 * @returns {Object}
 */

function toFlatObject(sourceObj, destObj, filter, propFilter) {
  var props;
  var i;
  var prop;
  var merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 * @param {*} [thing]
 * @returns {?Array}
 */
function toArray(thing) {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  var i = thing.length;
  if (!isNumber(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

// eslint-disable-next-line func-names
var isTypedArray = (function(TypedArray) {
  // eslint-disable-next-line func-names
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

function forEachEntry(obj, fn) {
  var generator = obj && obj[Symbol.iterator];

  var iterator = generator.call(obj);

  var result;

  while ((result = iterator.next()) && !result.done) {
    var pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

function matchAll(regExp, str) {
  var matches;
  var arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

var isHTMLForm = kindOfTest('HTMLFormElement');

var hasOwnProperty = (function resolver(_hasOwnProperty) {
  return function(obj, prop) {
    return _hasOwnProperty.call(obj, prop);
  };
})(Object.prototype.hasOwnProperty);

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isEmptyObject: isEmptyObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray,
  isFileList: isFileList,
  forEachEntry: forEachEntry,
  matchAll: matchAll,
  isHTMLForm: isHTMLForm,
  hasOwnProperty: hasOwnProperty
};


/***/ }),

/***/ "./node_modules/form-data/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/form-data/lib/browser.js ***!
  \***********************************************/
/***/ ((module) => {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_style_index_0_id_52537621_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_style_index_0_id_52537621_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_style_index_0_id_52537621_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderField_vue_vue_type_style_index_0_id_20d77089_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderField_vue_vue_type_style_index_0_id_20d77089_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderField_vue_vue_type_style_index_0_id_20d77089_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderHeader_vue_vue_type_style_index_0_id_f388e838_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderHeader_vue_vue_type_style_index_0_id_f388e838_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderHeader_vue_vue_type_style_index_0_id_f388e838_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMenuItemModal_vue_vue_type_style_index_0_id_f5eac798_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMenuItemModal_vue_vue_type_style_index_0_id_f5eac798_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMenuItemModal_vue_vue_type_style_index_0_id_f5eac798_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Multiselect_vue_vue_type_style_index_0_id_163eabdc_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Multiselect_vue_vue_type_style_index_0_id_163eabdc_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Multiselect_vue_vue_type_style_index_0_id_163eabdc_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _multiselectMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multiselectMixin */ "./node_modules/vue-multiselect/src/multiselectMixin.js");
/* harmony import */ var _pointerMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pointerMixin */ "./node_modules/vue-multiselect/src/pointerMixin.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'vue-multiselect',
  mixins: [_multiselectMixin__WEBPACK_IMPORTED_MODULE_0__["default"], _pointerMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    /**
     * name attribute to match optional label element
     * @default ''
     * @type {String}
     */
    name: {
      type: String,
      default: ''
    },
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectLabel: {
      type: String,
      default: 'Press enter to select'
    },
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectGroupLabel: {
      type: String,
      default: 'Press enter to select group'
    },
    /**
     * String to show next to selected option
     * @default 'Selected'
     * @type {String}
     */
    selectedLabel: {
      type: String,
      default: 'Selected'
    },
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectLabel: {
      type: String,
      default: 'Press enter to remove'
    },
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectGroupLabel: {
      type: String,
      default: 'Press enter to deselect group'
    },
    /**
     * Decide whether to show pointer labels
     * @default true
     * @type {Boolean}
     */
    showLabels: {
      type: Boolean,
      default: true
    },
    /**
     * Limit the display of selected options. The rest will be hidden within the limitText string.
     * @default 99999
     * @type {Integer}
     */
    limit: {
      type: Number,
      default: 99999
    },
    /**
     * Sets maxHeight style value of the dropdown
     * @default 300
     * @type {Integer}
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Function that process the message shown when selected
     * elements pass the defined limit.
     * @default 'and * more'
     * @param {Int} count Number of elements more than limit
     * @type {Function}
     */
    limitText: {
      type: Function,
      default: count => `and ${count} more`
    },
    /**
     * Set true to trigger the loading spinner.
     * @default False
     * @type {Boolean}
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Disables the multiselect if true.
     * @default false
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Fixed opening direction
     * @default ''
     * @type {String}
     */
    openDirection: {
      type: String,
      default: ''
    },
    /**
     * Shows slot with message about empty options
     * @default true
     * @type {Boolean}
     */
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    hasOptionGroup () {
      return this.groupValues && this.groupLabel && this.groupSelect
    },
    isSingleLabelVisible () {
      return (
        (this.singleValue || this.singleValue === 0) &&
        (!this.isOpen || !this.searchable) &&
        !this.visibleValues.length
      )
    },
    isPlaceholderVisible () {
      return !this.internalValue.length && (!this.searchable || !this.isOpen)
    },
    visibleValues () {
      return this.multiple ? this.internalValue.slice(0, this.limit) : []
    },
    singleValue () {
      return this.internalValue[0]
    },
    deselectLabelText () {
      return this.showLabels ? this.deselectLabel : ''
    },
    deselectGroupLabelText () {
      return this.showLabels ? this.deselectGroupLabel : ''
    },
    selectLabelText () {
      return this.showLabels ? this.selectLabel : ''
    },
    selectGroupLabelText () {
      return this.showLabels ? this.selectGroupLabel : ''
    },
    selectedLabelText () {
      return this.showLabels ? this.selectedLabel : ''
    },
    inputStyle () {
      if (
        this.searchable ||
        (this.multiple && this.value && this.value.length)
      ) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen
          ? { width: '100%' }
          : { width: '0', position: 'absolute', padding: '0' }
      }
      return ''
    },
    contentStyle () {
      return this.options.length
        ? { display: 'inline-block' }
        : { display: 'block' }
    },
    isAbove () {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true
      } else if (
        this.openDirection === 'below' ||
        this.openDirection === 'bottom'
      ) {
        return false
      } else {
        return this.preferredOpenDirection === 'above'
      }
    },
    showSearchInput () {
      return (
        this.searchable &&
        (this.hasSingleSelectedSlot &&
        (this.visibleSingleValue || this.visibleSingleValue === 0)
          ? this.isOpen
          : true)
      )
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=template&id=163eabdc":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=template&id=163eabdc ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = ["tabindex", "aria-owns"]
const _hoisted_2 = {
  ref: "tags",
  class: "multiselect__tags"
}
const _hoisted_3 = { class: "multiselect__tags-wrap" }
const _hoisted_4 = ["textContent"]
const _hoisted_5 = ["onKeypress", "onMousedown"]
const _hoisted_6 = ["textContent"]
const _hoisted_7 = { class: "multiselect__spinner" }
const _hoisted_8 = ["name", "id", "placeholder", "value", "disabled", "tabindex", "aria-controls"]
const _hoisted_9 = ["id"]
const _hoisted_10 = { key: 0 }
const _hoisted_11 = { class: "multiselect__option" }
const _hoisted_12 = ["id", "role"]
const _hoisted_13 = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"]
const _hoisted_14 = ["data-select", "data-deselect", "onMouseenter", "onMousedown"]
const _hoisted_15 = { class: "multiselect__option" }
const _hoisted_16 = { class: "multiselect__option" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    tabindex: _ctx.searchable ? -1 : $props.tabindex,
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{ 'multiselect--active': _ctx.isOpen, 'multiselect--disabled': $props.disabled, 'multiselect--above': $options.isAbove, 'multiselect--has-options-group': $options.hasOptionGroup }, "multiselect"]),
    onFocus: _cache[13] || (_cache[13] = $event => (_ctx.activate())),
    onBlur: _cache[14] || (_cache[14] = $event => (_ctx.searchable ? false : _ctx.deactivate())),
    onKeydown: [
      _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerForward()), ["self","prevent"]), ["down"])),
      _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerBackward()), ["self","prevent"]), ["up"]))
    ],
    onKeypress: _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.addPointerElement($event)), ["stop","self"]), ["enter","tab"])),
    onKeyup: _cache[18] || (_cache[18] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => (_ctx.deactivate()), ["esc"])),
    role: "combobox",
    "aria-owns": 'listbox-'+_ctx.id
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "caret", { toggle: _ctx.toggle }, () => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        onMousedown: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.toggle()), ["prevent","stop"])),
        class: "multiselect__select"
      }, null, 32 /* NEED_HYDRATION */)
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "clear", { search: _ctx.search }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "selection", {
        search: _ctx.search,
        remove: _ctx.removeElement,
        values: $options.visibleValues,
        isOpen: _ctx.isOpen
      }, () => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
          ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.visibleValues, (option, index) => {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "tag", {
              option: option,
              search: _ctx.search,
              remove: _ctx.removeElement
            }, () => [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                class: "multiselect__tag",
                key: index
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
                  textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getOptionLabel(option))
                }, null, 8 /* PROPS */, _hoisted_4),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                  tabindex: "1",
                  onKeypress: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.removeElement(option)), ["prevent"]), ["enter"]),
                  onMousedown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.removeElement(option)), ["prevent"]),
                  class: "multiselect__tag-icon"
                }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_5)
              ]))
            ])
          }), 256 /* UNKEYED_FRAGMENT */))
        ], 512 /* NEED_PATCH */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.visibleValues.length > 0]
        ]),
        (_ctx.internalValue && _ctx.internalValue.length > $props.limit)
          ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "limit", { key: 0 }, () => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
                class: "multiselect__strong",
                textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.limitText(_ctx.internalValue.length - $props.limit))
              }, null, 8 /* PROPS */, _hoisted_6)
            ])
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: "multiselect__loading" }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "loading", {}, () => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, null, 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.loading]
            ])
          ])
        ]),
        _: 3 /* FORWARDED */
      }),
      (_ctx.searchable)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", {
            key: 0,
            ref: "search",
            name: $props.name,
            id: _ctx.id,
            type: "text",
            autocomplete: "off",
            spellcheck: "false",
            placeholder: _ctx.placeholder,
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.inputStyle),
            value: _ctx.search,
            disabled: $props.disabled,
            tabindex: $props.tabindex,
            onInput: _cache[1] || (_cache[1] = $event => (_ctx.updateSearch($event.target.value))),
            onFocus: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.activate()), ["prevent"])),
            onBlur: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.deactivate()), ["prevent"])),
            onKeyup: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($event => (_ctx.deactivate()), ["esc"])),
            onKeydown: [
              _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerForward()), ["prevent"]), ["down"])),
              _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerBackward()), ["prevent"]), ["up"])),
              _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.removeLastElement()), ["stop"]), ["delete"]))
            ],
            onKeypress: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.addPointerElement($event)), ["prevent","stop","self"]), ["enter"])),
            class: "multiselect__input",
            "aria-controls": 'listbox-'+_ctx.id
          }, null, 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_8))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($options.isSingleLabelVisible)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 1,
            class: "multiselect__single",
            onMousedown: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "singleLabel", { option: $options.singleValue }, () => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("template", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currentOptionLabel), 1 /* TEXT */)
              ])
            ])
          ], 32 /* NEED_HYDRATION */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($options.isPlaceholderVisible)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "placeholder", {}, () => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.placeholder), 1 /* TEXT */)
            ])
          ], 32 /* NEED_HYDRATION */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 512 /* NEED_PATCH */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
      name: "multiselect",
      persisted: ""
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          class: "multiselect__content-wrapper",
          onFocus: _cache[11] || (_cache[11] = (...args) => (_ctx.activate && _ctx.activate(...args))),
          tabindex: "-1",
          onMousedown: _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => {}, ["prevent"])),
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ maxHeight: _ctx.optimizedHeight + 'px' }),
          ref: "list"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
            class: "multiselect__content",
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.contentStyle),
            role: "listbox",
            id: 'listbox-'+_ctx.id
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "beforeList"),
            (_ctx.multiple && _ctx.max === _ctx.internalValue.length)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_10, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_11, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "maxElements", {}, () => [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Maximum of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.max) + " options selected. First remove a selected option to select another.", 1 /* TEXT */)
                    ])
                  ])
                ]))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (!_ctx.max || _ctx.internalValue.length < _ctx.max)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.filteredOptions, (option, index) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                    class: "multiselect__element",
                    key: index,
                    id: _ctx.id + '-' + index,
                    role: !(option && (option.$isLabel || option.$isDisabled)) ? 'option' : null
                  }, [
                    (!(option && (option.$isLabel || option.$isDisabled)))
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                          key: 0,
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.optionHighlight(index, option), "multiselect__option"]),
                          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.select(option)), ["stop"]),
                          onMouseenter: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.pointerSet(index)), ["self"]),
                          "data-select": option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText,
                          "data-selected": $options.selectedLabelText,
                          "data-deselect": $options.deselectLabelText
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "option", {
                            option: option,
                            search: _ctx.search,
                            index: index
                          }, () => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                          ])
                        ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_13))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                    (option && (option.$isLabel || option.$isDisabled))
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                          key: 1,
                          "data-select": _ctx.groupSelect && $options.selectGroupLabelText,
                          "data-deselect": _ctx.groupSelect && $options.deselectGroupLabelText,
                          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([_ctx.groupHighlight(index, option), "multiselect__option"]),
                          onMouseenter: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.groupSelect && _ctx.pointerSet(index)), ["self"]),
                          onMousedown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => (_ctx.selectGroup(option)), ["prevent"])
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "option", {
                            option: option,
                            search: _ctx.search,
                            index: index
                          }, () => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                          ])
                        ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_14))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                  ], 8 /* PROPS */, _hoisted_12))
                }), 128 /* KEYED_FRAGMENT */))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_15, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "noResult", { search: _ctx.search }, () => [
                  _cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("No elements found. Consider changing the search query."))
                ])
              ])
            ], 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.showNoResults && (_ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading)]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "noOptions", {}, () => [
                  _cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("List is empty."))
                ])
              ])
            ], 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $props.showNoOptions && ((_ctx.options.length === 0 || ($options.hasOptionGroup === true && _ctx.filteredOptions.length === 0)) && !_ctx.search && !$props.loading)]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "afterList")
          ], 12 /* STYLE, PROPS */, _hoisted_9)
        ], 36 /* STYLE, NEED_HYDRATION */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.isOpen]
        ])
      ]),
      _: 3 /* FORWARDED */
    })
  ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_1))
}

/***/ }),

/***/ "./node_modules/vue-multiselect/src/Multiselect.vue":
/*!**********************************************************!*\
  !*** ./node_modules/vue-multiselect/src/Multiselect.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Multiselect_vue_vue_type_template_id_163eabdc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Multiselect.vue?vue&type=template&id=163eabdc */ "./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=template&id=163eabdc");
/* harmony import */ var _Multiselect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Multiselect.vue?vue&type=script&lang=js */ "./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=script&lang=js");
/* harmony import */ var _Multiselect_vue_vue_type_style_index_0_id_163eabdc_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css */ "./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css");
/* harmony import */ var _home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Multiselect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Multiselect_vue_vue_type_template_id_163eabdc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"node_modules/vue-multiselect/src/Multiselect.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _vue_loader_dist_index_js_ruleSet_0_use_0_Multiselect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_index_js_ruleSet_0_use_0_Multiselect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Multiselect.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Multiselect_vue_vue_type_style_index_0_id_163eabdc_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css");


/***/ }),

/***/ "./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=template&id=163eabdc":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=template&id=163eabdc ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_Multiselect_vue_vue_type_template_id_163eabdc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_vue_loader_dist_index_js_ruleSet_0_use_0_Multiselect_vue_vue_type_template_id_163eabdc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Multiselect.vue?vue&type=template&id=163eabdc */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=template&id=163eabdc");


/***/ }),

/***/ "./node_modules/vue-multiselect/src/multiselectMixin.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-multiselect/src/multiselectMixin.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isEmpty (opt) {
  if (opt === 0) return false
  if (Array.isArray(opt) && opt.length === 0) return true
  return !opt
}

function not (fun) {
  return (...params) => !fun(...params)
}

function includes (str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined'
  if (str === null) str = 'null'
  if (str === false) str = 'false'
  const text = str.toString().toLowerCase()
  return text.indexOf(query.trim()) !== -1
}

function filterOptions (options, search, label, customLabel) {
  return options.filter(option => includes(customLabel(option, label), search))
}

function stripGroups (options) {
  return options.filter(option => !option.$isLabel)
}

function flattenOptions (values, label) {
  return (options) =>
    options.reduce((prev, curr) => {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        })
        return prev.concat(curr[values])
      }
      return prev
    }, [])
}

function filterGroups (search, label, values, groupLabel, customLabel) {
  return (groups) =>
    groups.map(group => {
      /* istanbul ignore else */
      if (!group[values]) {
        console.warn(`Options passed to vue-multiselect do not contain groups, despite the config.`)
        return []
      }
      const groupOptions = filterOptions(group[values], search, label, customLabel)

      return groupOptions.length
        ? {
          [groupLabel]: group[groupLabel],
          [values]: groupOptions
        }
        : []
    })
}

const flow = (...fns) => x => fns.reduce((v, f) => f(v), x)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data () {
    return {
      search: '',
      isOpen: false,
      preferredOpenDirection: 'below',
      optimizedHeight: this.maxHeight
    }
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Presets the selected options value.
     * @type {Object||Array||String||Integer}
     */
    value: {
      type: null,
      default () {
        return []
      }
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Select option'
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default (option, label) {
        if (isEmpty(option)) return ''
        return label ? option[label] : option
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: 'top'
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1000
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: false
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
    */
    preventAutofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    /* istanbul ignore else */
    if (!this.multiple && this.max) {
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.')
    }
    if (
      this.preselectFirst &&
      !this.internalValue.length &&
      this.options.length
    ) {
      this.select(this.filteredOptions[0])
    }
  },
  computed: {
    internalValue () {
      return this.value || this.value === 0
        ? Array.isArray(this.value) ? this.value : [this.value]
        : []
    },
    filteredOptions () {
      const search = this.search || ''
      const normalizedSearch = search.toLowerCase().trim()

      let options = this.options.concat()

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues
          ? this.filterAndFlat(options, normalizedSearch, this.label)
          : filterOptions(options, normalizedSearch, this.label, this.customLabel)
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options
      }

      options = this.hideSelected
        ? options.filter(not(this.isSelected))
        : options

      /* istanbul ignore else */
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === 'bottom') {
          options.push({ isTag: true, label: search })
        } else {
          options.unshift({ isTag: true, label: search })
        }
      }

      return options.slice(0, this.optionsLimit)
    },
    valueKeys () {
      if (this.trackBy) {
        return this.internalValue.map(element => element[this.trackBy])
      } else {
        return this.internalValue
      }
    },
    optionKeys () {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options
      return options.map(element => this.customLabel(element, this.label).toString().toLowerCase())
    },
    currentOptionLabel () {
      return this.multiple
        ? this.searchable ? '' : this.placeholder
        : this.internalValue.length
          ? this.getOptionLabel(this.internalValue[0])
          : this.searchable ? '' : this.placeholder
    }
  },
  watch: {
    internalValue () {
      /* istanbul ignore else */
      if (this.resetAfter && this.internalValue.length) {
        this.search = ''
        this.$emit('input', this.multiple ? [] : null)
      }
    },
    search () {
      this.$emit('search-change', this.search, this.id)
    }
  },
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue () {
      return this.multiple
        ? this.internalValue
        : this.internalValue.length === 0
          ? null
          : this.internalValue[0]
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @returns {Array} returns a filtered and flat options list
     */
    filterAndFlat (options, search, label) {
      return flow(
        filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options)
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @returns {Array} returns a flat options list without group labels
     */
    flatAndStrip (options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options)
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch (query) {
      this.search = query
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @returns {Boolean} returns true if element is available
     */
    isExistingOption (query) {
      return !this.options
        ? false
        : this.optionKeys.indexOf(query) > -1
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected (option) {
      const opt = this.trackBy
        ? option[this.trackBy]
        : option
      return this.valueKeys.indexOf(opt) > -1
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled (option) {
      return !!option.$isDisabled
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel (option) {
      if (isEmpty(option)) return ''
      /* istanbul ignore else */
      if (option.isTag) return option.label
      /* istanbul ignore else */
      if (option.$isLabel) return option.$groupLabel

      let label = this.customLabel(option, this.label)
      /* istanbul ignore else */
      if (isEmpty(label)) return ''
      return label
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select (option, key) {
      /* istanbul ignore else */
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option)
        return
      }
      if (this.blockKeys.indexOf(key) !== -1 ||
        this.disabled ||
        option.$isDisabled ||
        option.$isLabel
      ) return
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      /* istanbul ignore else */
      if (key === 'Tab' && !this.pointerDirty) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id)
        this.search = ''
        if (this.closeOnSelect && !this.multiple) this.deactivate()
      } else {
        const isSelected = this.isSelected(option)

        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option)
          return
        }

        if (this.multiple) {
          this.$emit('input', this.internalValue.concat([option]), this.id)
        } else {
          this.$emit('input', option, this.id)
        }

        this.$emit('select', option, this.id)

        /* istanbul ignore else */
        if (this.clearOnSelect) this.search = ''
      }
      /* istanbul ignore else */
      if (this.closeOnSelect) this.deactivate()
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup (selectedGroup) {
      const group = this.options.find(option => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      })

      if (!group) return

      if (this.wholeGroupSelected(group)) {
        this.$emit('remove', group[this.groupValues], this.id)

        const groupValues = this.trackBy ? group[this.groupValues].map(val => val[this.trackBy]) : group[this.groupValues]
        const newValue = this.internalValue.filter(
          option => groupValues.indexOf(this.trackBy ? option[this.trackBy] : option) === -1
        )

        this.$emit('input', newValue, this.id)
      } else {
        let optionsToAdd = group[this.groupValues].filter(
          option => !(this.isOptionDisabled(option) || this.isSelected(option))
        )

        // if max is defined then just select options respecting max
        if (this.max) {
          optionsToAdd.splice(this.max - this.internalValue.length)
        }

        this.$emit('select', optionsToAdd, this.id)
        this.$emit(
          'input',
          this.internalValue.concat(optionsToAdd),
          this.id
        )
      }

      if (this.closeOnSelect) this.deactivate()
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected (group) {
      return group[this.groupValues].every(option => this.isSelected(option) || this.isOptionDisabled(option)
      )
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled (group) {
      return group[this.groupValues].every(this.isOptionDisabled)
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @returns {type}        description
     */
    removeElement (option, shouldClose = true) {
      /* istanbul ignore else */
      if (this.disabled) return
      /* istanbul ignore else */
      if (option.$isDisabled) return
      /* istanbul ignore else */
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate()
        return
      }

      const index = typeof option === 'object'
        ? this.valueKeys.indexOf(option[this.trackBy])
        : this.valueKeys.indexOf(option)

      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1))
        this.$emit('input', newValue, this.id)
      } else {
        this.$emit('input', null, this.id)
      }
      this.$emit('remove', option, this.id)

      /* istanbul ignore else */
      if (this.closeOnSelect && shouldClose) this.deactivate()
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement () {
      /* istanbul ignore else */
      if (this.blockKeys.indexOf('Delete') !== -1) return
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false)
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate () {
      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return

      this.adjustPosition()
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1
      }

      this.isOpen = true
      /* istanbul ignore else  */
      if (this.searchable) {
        if (!this.preserveSearch) this.search = ''
        if (!this.preventAutofocus) this.$nextTick(() => this.$refs.search && this.$refs.search.focus())
      } else if (!this.preventAutofocus) {
        if (typeof this.$el !== 'undefined') this.$el.focus()
      }
      this.$emit('open', this.id)
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate () {
      /* istanbul ignore else */
      if (!this.isOpen) return

      this.isOpen = false
      /* istanbul ignore else  */
      if (this.searchable) {
        if (this.$refs.search !== null && typeof this.$refs.search !== 'undefined') this.$refs.search.blur()
      } else {
        if (typeof this.$el !== 'undefined') this.$el.blur()
      }
      if (!this.preserveSearch) this.search = ''
      this.$emit('close', this.getValue(), this.id)
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle () {
      this.isOpen
        ? this.deactivate()
        : this.activate()
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition () {
      if (typeof window === 'undefined') return

      const spaceAbove = this.$el.getBoundingClientRect().top
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight

      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom') {
        this.preferredOpenDirection = 'below'
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight)
      } else {
        this.preferredOpenDirection = 'above'
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight)
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-multiselect/src/pointerMixin.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-multiselect/src/pointerMixin.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data () {
    return {
      pointer: 0,
      pointerDirty: false
    }
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition () {
      return this.pointer * this.optionHeight
    },
    visibleElements () {
      return this.optimizedHeight / this.optionHeight
    }
  },
  watch: {
    filteredOptions () {
      this.pointerAdjust()
    },
    isOpen () {
      this.pointerDirty = false
    },
    pointer () {
      this.$refs.search && this.$refs.search.setAttribute('aria-activedescendant', this.id + '-' + this.pointer.toString())
    }
  },
  methods: {
    optionHighlight (index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      }
    },
    groupHighlight (index, selectedGroup) {
      if (!this.groupSelect) {
        return [
          'multiselect__option--disabled',
          { 'multiselect__option--group': selectedGroup.$isLabel }
        ]
      }

      const group = this.options.find(option => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      })

      return group && !this.wholeGroupDisabled(group) ? [
        'multiselect__option--group',
        { 'multiselect__option--highlight': index === this.pointer && this.showPointer },
        { 'multiselect__option--group-selected': this.wholeGroupSelected(group) }
      ] : 'multiselect__option--disabled'
    },
    addPointerElement ({ key } = 'Enter') {
      /* istanbul ignore else */
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key)
      }
      this.pointerReset()
    },
    pointerForward () {
      /* istanbul ignore else */
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++
        /* istanbul ignore next */
        if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerForward()
      }
      this.pointerDirty = true
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--
        /* istanbul ignore else */
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerBackward()
      } else {
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[0].$isLabel &&
          !this.groupSelect
        ) this.pointerForward()
      }
      this.pointerDirty = true
    },
    pointerReset () {
      /* istanbul ignore else */
      if (!this.closeOnSelect) return
      this.pointer = 0
      /* istanbul ignore else */
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0
      }
    },
    pointerAdjust () {
      /* istanbul ignore else */
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length
          ? this.filteredOptions.length - 1
          : 0
      }

      if (this.filteredOptions.length > 0 &&
        this.filteredOptions[this.pointer].$isLabel &&
        !this.groupSelect
      ) {
        this.pointerForward()
      }
    },
    pointerSet (index) {
      this.pointer = index
      this.pointerDirty = true
    }
  }
});


/***/ }),

/***/ "./node_modules/vue3-nestable/dist/index.umd.js":
/*!******************************************************!*\
  !*** ./node_modules/vue3-nestable/dist/index.umd.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
var mt=Object.defineProperty,gt=Object.defineProperties;var yt=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var Pt=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable;var x=(g,o,P)=>o in g?mt(g,o,{enumerable:!0,configurable:!0,writable:!0,value:P}):g[o]=P,k=(g,o)=>{for(var P in o||(o={}))Pt.call(o,P)&&x(g,P,o[P]);if(V)for(var P of V(o))Et.call(o,P)&&x(g,P,o[P]);return g},G=(g,o)=>gt(g,yt(o));(function(g,o){ true?o(exports,__webpack_require__(/*! vue */ "vue")):0})(this,function(g,o){"use strict";const P={};var S={methods:{registerNestable(t){const e=this._getByGroup(t.group);e.onDragStartListeners.push(t.onDragStart),e.onMouseEnterListeners.push(t.onMouseEnter),e.onMouseMoveListeners.push(t.onMouseMove)},notifyDragStart(t,e,s){const u=this._getByGroup(t);for(const i of u.onDragStartListeners)i(e,s)},notifyMouseEnter(t,e,s,u){const i=this._getByGroup(t);for(const l of i.onMouseEnterListeners)l(e,s,u)},notifyMouseMove(t,e){const s=this._getByGroup(t);for(const u of s.onMouseMoveListeners)u(e)},_getByGroup(t){return P[t]||(P[t]={onDragStartListeners:[],onMouseEnterListeners:[],onMouseMoveListeners:[],onDragStart:[],dragItem:null}),P[t]}}},C=(t,e)=>{const s=t.__vccOpts||t;for(const[u,i]of e)s[u]=i;return s};const Y={name:"NestableItem",mixins:[S],props:{item:{type:Object,required:!0,default:()=>({})},index:{type:Number,required:!1,default:null},isChild:{type:Boolean,required:!1,default:!1},isCopy:{type:Boolean,required:!1,default:!1},options:{type:Object,required:!0,default:()=>({})}},inject:["listId","group","keyProp"],data(){return{breakPoint:null,moveDown:!1}},computed:{isDragging(){const t=this.options.dragItem;return!this.isCopy&&t&&t[this.options.keyProp]===this.item[this.options.keyProp]},hasChildren(){return this.item[this.options.childrenProp]&&this.item[this.options.childrenProp].length>0},hasHandle(){return!!this.$scopedSlots.handler},normalizedClassProp(){const t=this.item[this.options.classProp];return t?Array.isArray(t)?t:typeof a=="object"?[t]:[t]:[]},itemClasses(){const t=this.isDragging?["is-dragging"]:[];return[`nestable-item${this.isCopy?"-copy":""}`,`nestable-item${this.isCopy?"-copy":""}-${this.item[this.options.keyProp]}`,...t,...this.normalizedClassProp]}},methods:{onMouseEnter(t){if(!!this.options.dragItem){if(!t.movementY)return this.sendNotification(t);this.moveDown=t.movementY>0,this.breakPoint=t.target.getBoundingClientRect().height/2}},onMouseLeave(){this.breakPoint=null},onMouseMove(t){if(!this.breakPoint)return;const e=t.offsetY-this.breakPoint;this.moveDown&&e<this.breakPoint/4||!this.moveDown&&e>-this.breakPoint/4||this.sendNotification(t)},sendNotification(t){this.breakPoint=null;const e=this.item||this.$parent.item;this.notifyMouseEnter(this.group,t,this.listId,e)}}},O={key:0,class:"nestable-list"};function z(t,e,s,u,i,l){const h=o.resolveComponent("NestableItem",!0);return o.openBlock(),o.createElementBlock("li",{class:o.normalizeClass(l.itemClasses)},[o.createElementVNode("div",{class:"nestable-item-content",onMouseenter:e[0]||(e[0]=(...m)=>l.onMouseEnter&&l.onMouseEnter(...m)),onMouseleave:e[1]||(e[1]=(...m)=>l.onMouseLeave&&l.onMouseLeave(...m)),onMousemove:e[2]||(e[2]=(...m)=>l.onMouseMove&&l.onMouseMove(...m))},[o.renderSlot(t.$slots,"default",{index:s.index,item:s.item,isChild:s.isChild})],32),l.hasChildren?(o.openBlock(),o.createElementBlock("ol",O,[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(s.item[s.options.childrenProp],(m,f)=>(o.openBlock(),o.createBlock(h,{key:m[l.keyProp],item:m,index:f,options:s.options,"is-copy":s.isCopy,"is-child":""},{default:o.withCtx(E=>[o.renderSlot(t.$slots,"default",o.normalizeProps(o.guardReactiveProps(E)))]),_:2},1032,["item","index","options","is-copy"]))),128))])):o.createCommentVNode("",!0)],2)}var H=C(Y,[["render",z]]);const X={name:"Placeholder",mixins:[S],props:{index:{type:Number,required:!1,default:null},options:{type:Object,required:!1,default:()=>({})}},inject:["listId","group"],computed:{isDragging(){return this.options.dragItem}},methods:{onMouseEnter(t){!this.options.dragItem||this.notifyMouseEnter(this.group,t,this.listId,null)}}};function F(t,e,s,u,i,l){return o.openBlock(),o.createElementBlock("li",null,[o.createElementVNode("div",{class:"nestable-list-empty",onMouseenter:e[0]||(e[0]=(...h)=>l.onMouseEnter&&l.onMouseEnter(...h))},[o.renderSlot(t.$slots,"default")],32)])}var W=C(X,[["render",F]]),K={methods:{getPathById(t,e=this.value){let s=[];return e.every((u,i)=>{if(u[this.keyProp]===t)s.push(i);else if(u[this.childrenProp]){const l=this.getPathById(t,u[this.childrenProp]);l.length&&(s=s.concat(i).concat(l))}return s.length===0}),s},getItemByPath(t,e=this.value){let s=null;return t.forEach(u=>{s=(s&&s[this.childrenProp]?s[this.childrenProp]:e)[u]}),s},getItemDepth(t){let e=1;if(t[this.childrenProp]&&t[this.childrenProp].length>0){const s=t[this.childrenProp].map(this.getItemDepth);e+=Math.max(...s)}return e},getSplicePath(t,e={}){const s={},u=e.numToRemove||0,i=e.itemsToInsert||[],l=t.length-1;let h=s;return t.forEach((m,f)=>{if(f===l)h.$splice=[[m,u,...i]];else{const E={};h[m]={[e.childrenProp]:E},h=E}}),s},getRealNextPath(t,e){const s=t.length-1,u=e.length-1;if(t.length<e.length){let i=!1;return e.map((l,h)=>i?h===u?l+1:l:typeof t[h]!="number"?l:e[h]>t[h]&&h===s?(i=!0,l-1):l)}else if(t.length===e.length&&e[u]>t[u]){const i=this.getItemByPath(e);if(i[this.childrenProp]&&i[this.childrenProp].length&&!this.isCollapsed(i))return e.slice(0,-1).concat(e[u]-1).concat(0)}return e}}},U={methods:{hook(t,e){if(!this.hooks[t])return!0;const s=this.hooks[t](e);return s||s===void 0}}};function J(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});function s(n){return typeof n=="object"&&!("toString"in n)?Object.prototype.toString.call(n).slice(8,-1):n}var u=typeof process=="object"&&!0;function i(n,r){if(!n)throw u?new Error("Invariant failed"):new Error(r())}e.invariant=i;var l=Object.prototype.hasOwnProperty,h=Array.prototype.splice,m=Object.prototype.toString;function f(n){return m.call(n).slice(8,-1)}var E=Object.assign||function(n,r){return v(r).forEach(function(c){l.call(r,c)&&(n[c]=r[c])}),n},v=typeof Object.getOwnPropertySymbols=="function"?function(n){return Object.keys(n).concat(Object.getOwnPropertySymbols(n))}:function(n){return Object.keys(n)};function D(n){return Array.isArray(n)?E(n.constructor(n.length),n):f(n)==="Map"?new Map(n):f(n)==="Set"?new Set(n):n&&typeof n=="object"?E(Object.create(Object.getPrototypeOf(n)),n):n}var L=function(){function n(){this.commands=E({},lt),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(r,c){return r===c},this.update.newContext=function(){return new n().update}}return Object.defineProperty(n.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(r){this.update.isEquals=r},enumerable:!0,configurable:!0}),n.prototype.extend=function(r,c){this.commands[r]=c},n.prototype.update=function(r,c){var p=this,d=typeof c=="function"?{$apply:c}:c;Array.isArray(r)&&Array.isArray(d)||i(!Array.isArray(d),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),i(typeof d=="object"&&d!==null,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the "+("following commands: "+Object.keys(p.commands).join(", ")+".")});var y=r;return v(d).forEach(function(M){if(l.call(p.commands,M)){var pt=r===y;y=p.commands[M](d[M],y,d,r),pt&&p.isEquals(y,r)&&(y=r)}else{var B=f(r)==="Map"?p.update(r.get(M),d[M]):p.update(r[M],d[M]),ft=f(y)==="Map"?y.get(M):y[M];(!p.isEquals(B,ft)||typeof B=="undefined"&&!l.call(r,M))&&(y===r&&(y=D(r)),f(y)==="Map"?y.set(M,B):y[M]=B)}}),y},n}();e.Context=L;var lt={$push:function(n,r,c){return q(r,c,"$push"),n.length?r.concat(n):r},$unshift:function(n,r,c){return q(r,c,"$unshift"),n.length?n.concat(r):r},$splice:function(n,r,c,p){return ut(r,c),n.forEach(function(d){A(d),r===p&&d.length&&(r=D(p)),h.apply(r,d)}),r},$set:function(n,r,c){return ct(c),n},$toggle:function(n,r){I(n,"$toggle");var c=n.length?D(r):r;return n.forEach(function(p){c[p]=!r[p]}),c},$unset:function(n,r,c,p){return I(n,"$unset"),n.forEach(function(d){Object.hasOwnProperty.call(r,d)&&(r===p&&(r=D(p)),delete r[d])}),r},$add:function(n,r,c,p){return R(r,"$add"),I(n,"$add"),f(r)==="Map"?n.forEach(function(d){var y=d[0],M=d[1];r===p&&r.get(y)!==M&&(r=D(p)),r.set(y,M)}):n.forEach(function(d){r===p&&!r.has(d)&&(r=D(p)),r.add(d)}),r},$remove:function(n,r,c,p){return R(r,"$remove"),I(n,"$remove"),n.forEach(function(d){r===p&&r.has(d)&&(r=D(p)),r.delete(d)}),r},$merge:function(n,r,c,p){return dt(r,n),v(n).forEach(function(d){n[d]!==r[d]&&(r===p&&(r=D(p)),r[d]=n[d])}),r},$apply:function(n,r){return ht(n),n(r)}},b=new L;e.isEquals=b.update.isEquals,e.extend=b.extend,e.default=b.update,e.default.default=t.exports=E(e.default,e);function q(n,r,c){i(Array.isArray(n),function(){return"update(): expected target of "+s(c)+" to be an array; got "+s(n)+"."}),I(r[c],c)}function I(n,r){i(Array.isArray(n),function(){return"update(): expected spec of "+s(r)+" to be an array; got "+s(n)+". Did you forget to wrap your parameter in an array?"})}function ut(n,r){i(Array.isArray(n),function(){return"Expected $splice target to be an array; got "+s(n)}),A(r.$splice)}function A(n){i(Array.isArray(n),function(){return"update(): expected spec of $splice to be an array of arrays; got "+s(n)+". Did you forget to wrap your parameters in an array?"})}function ht(n){i(typeof n=="function",function(){return"update(): expected spec of $apply to be a function; got "+s(n)+"."})}function ct(n){i(Object.keys(n).length===1,function(){return"Cannot have more than one key in an object with $set"})}function dt(n,r){i(r&&typeof r=="object",function(){return"update(): $merge expects a spec of type 'object'; got "+s(r)}),i(n&&typeof n=="object",function(){return"update(): $merge expects a target of type 'object'; got "+s(n)})}function R(n,r){var c=f(n);i(c==="Map"||c==="Set",function(){return"update(): "+s(r)+" expects a target of type Set or Map; got "+s(c)})}})(w,w.exports);var _=J(w.exports);const Q=(t,e)=>t.closest(e),Z=t=>{var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left)}},j=(t,e)=>({transform:"translate("+t+"px, "+e+"px)"}),N=(t,e)=>t.map(s=>G(k({},s),{[e]:s[e]?N(s[e],e):[]})),tt={name:"VueNestable",components:{NestableItem:H,Placeholder:W},mixins:[K,S,U],props:{value:{type:Array,required:!0,default:()=>[]},threshold:{type:Number,required:!1,default:30},maxDepth:{type:Number,required:!1,default:10},keyProp:{type:String,required:!1,default:"id"},classProp:{type:String,required:!1,default:null},group:{type:[String,Number],required:!1,default:()=>Math.random().toString(36).slice(2)},childrenProp:{type:String,required:!1,default:"children"},collapsed:{type:Boolean,required:!1,default:!1},hooks:{type:Object,required:!1,default:()=>({})},rtl:{type:Boolean,required:!1,default:!1}},provide(){return{listId:this.listId,group:this.group,keyProp:this.keyProp,onDragEnd:this.onDragEnd}},data(){return{itemsOld:null,dragItem:null,mouse:{last:{x:0},shift:{x:0}},el:null,elCopyStyles:null,isDirty:!1,collapsedGroups:[],listId:Math.random().toString(36).slice(2)}},computed:{listIsEmpty(){return this.value.length===0},itemOptions(){return{dragItem:this.dragItem,keyProp:this.keyProp,classProp:this.classProp,childrenProp:this.childrenProp}},listStyles(){const t=document.querySelector(".nestable-"+this.group+" .nestable-item-"+this.dragItem[this.keyProp]);let e={};return t&&(e.width=`${t.clientWidth}px`),this.elCopyStyles&&(e=k(k({},e),this.elCopyStyles)),e}},created(){const t=N(this.value,this.childrenProp);this.$emit("input",t),this.isDirty=!1,this.registerNestable(this)},beforeDestroy(){this.stopTrackMouse()},methods:{startTrackMouse(){document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchend",this.onDragEnd),document.addEventListener("touchcancel",this.onDragEnd),document.addEventListener("keydown",this.onKeyDown)},stopTrackMouse(){document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchend",this.onDragEnd),document.removeEventListener("touchcancel",this.onDragEnd),document.removeEventListener("keydown",this.onKeyDown),this.elCopyStyles=null},onDragStart(t,e){t&&(t.preventDefault(),t.stopPropagation()),this.el=Q(t.target,".nestable-item"),this.startTrackMouse(),this.dragItem=e,this.itemsOld=this.value,this.$nextTick(()=>{this.onMouseMove(t)})},onDragEnd(t,e){t&&t.preventDefault(),this.stopTrackMouse(),this.el=null,e?this.dragRevert():this.dragApply()},onKeyDown(t){t.which===27&&this.onDragEnd(null,!0)},getXandYFromEvent(t){let{clientX:e,clientY:s}=t;const{targetTouches:u}=t;if(u){const i=u[0];e=i.clientX,s=i.clientY;const l=new Event("mouseenter"),h=document.elementFromPoint(e,s),m=h&&(h.closest(".nestable-item-content")||h.closest(".nestable-list-empty"));m&&m.dispatchEvent(l)}return{clientX:e,clientY:s}},onMouseMove(t){t&&t.preventDefault();const{clientX:e,clientY:s}=this.getXandYFromEvent(t);this.mouse.last.x===0&&(this.mouse.last.x=e);const u=j(e,s),i=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer");if(!i)return;const{top:l,left:h}=i.getBoundingClientRect(),m=document.querySelector(".nestable-"+this.group+" .nestable-drag-layer > .nestable-list");if(this.elCopyStyles){if(this.elCopyStyles=k(k({},this.elCopyStyles),u),m)for(const E in u)Object.prototype.hasOwnProperty.call(u,E)&&(m.style[E]=u[E]);const f=this.rtl?this.mouse.last.x-e:e-this.mouse.last.x;f>=0&&this.mouse.shift.x>=0||f<=0&&this.mouse.shift.x<=0?this.mouse.shift.x+=f:this.mouse.shift.x=0,this.mouse.last.x=e,Math.abs(this.mouse.shift.x)>this.threshold&&(this.mouse.shift.x>0?this.tryIncreaseDepth(this.dragItem):this.tryDecreaseDepth(this.dragItem),this.mouse.shift.x=0)}else{const f=Z(this.el);this.elCopyStyles=k({marginTop:`${f.top-s-l}px`,marginLeft:`${f.left-e-h}px`},u)}},moveItem({dragItem:t,pathFrom:e,pathTo:s}){const u=this.getRealNextPath(e,s),i=this.getSplicePath(e,{numToRemove:1,childrenProp:this.childrenProp}),l=this.getSplicePath(u,{numToRemove:0,itemsToInsert:[t],childrenProp:this.childrenProp});if(!this.hook("beforeMove",{dragItem:t,pathFrom:e,pathTo:u}))return;let h=this.value;h=_(h,i),h=_(h,l),this.isDirty=!0,this.pathTo=u,this.$emit("input",h)},tryIncreaseDepth(t){const e=this.getPathById(t[this.keyProp]),s=e[e.length-1],u=e.length+this.getItemDepth(t);if(s>0&&u<=this.maxDepth){const i=this.getItemByPath(e.slice(0,-1).concat(s-1));if(i[this.childrenProp]&&(!i[this.childrenProp].length||!this.isCollapsed(i))){const l=e.slice(0,-1).concat(s-1).concat(i[this.childrenProp].length);this.moveItem({dragItem:t,pathFrom:e,pathTo:l})}}},tryDecreaseDepth(t){const e=this.getPathById(t[this.keyProp]),s=e[e.length-1];if(e.length>1){const u=this.getItemByPath(e.slice(0,-1));if(s+1===u[this.childrenProp].length){const i=e.slice(0,-1);i[i.length-1]+=1,this.moveItem({dragItem:t,pathFrom:e,pathTo:i})}}},onMouseEnter(t,e,s){t&&(t.preventDefault(),t.stopPropagation());const u=this.dragItem;if(!u||s!==null&&u[this.keyProp]===s[this.keyProp])return;const i=this.getPathById(u[this.keyProp]);if(e!==this.listId&&i.length===0)return;let l;if(s===null?l=i.length>0?[]:[0]:l=this.getPathById(s[this.keyProp]),this.getRealNextPath(i,l).length+(this.getItemDepth(u)-1)>this.maxDepth)return;let m={};if(this.collapsed&&i.length>1){const f=this.getItemByPath(i.slice(0,-1));f[this.childrenProp].length===1&&(m=this.onToggleCollapse(f,!0))}this.moveItem({dragItem:u,pathFrom:i,pathTo:l},m)},isCollapsed(t){return!!(this.collapsedGroups.indexOf(t[this.keyProp])>-1^this.collapsed)},dragApply(){this.$emit("change",this.dragItem,{items:this.value,pathTo:this.pathTo}),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1},dragRevert(){this.$emit("input",this.itemsOld),this.pathTo=null,this.itemsOld=null,this.dragItem=null,this.isDirty=!1}}},et={class:"nestable-list nestable-group"},nt=o.createTextVNode(" No content "),rt={key:0,class:"nestable-drag-layer"};function st(t,e,s,u,i,l){const h=o.resolveComponent("Placeholder"),m=o.resolveComponent("NestableItem");return o.openBlock(),o.createElementBlock("div",{class:o.normalizeClass(["nestable",`nestable-${s.group}`,s.rtl?"nestable-rtl":""])},[o.createElementVNode("ol",et,[l.listIsEmpty?(o.openBlock(),o.createBlock(h,{key:0,options:l.itemOptions},{default:o.withCtx(()=>[o.renderSlot(t.$slots,"placeholder",{},()=>[nt])]),_:3},8,["options"])):o.createCommentVNode("",!0),(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(s.value,(f,E)=>(o.openBlock(),o.createBlock(m,{key:f[s.keyProp],index:E,item:f,options:l.itemOptions},{default:o.withCtx(v=>[o.renderSlot(t.$slots,"default",o.normalizeProps(o.guardReactiveProps(v)))]),_:2},1032,["index","item","options"]))),128))]),i.dragItem?(o.openBlock(),o.createElementBlock("div",rt,[o.createElementVNode("ol",{style:o.normalizeStyle(l.listStyles),class:"nestable-list"},[o.createVNode(m,{item:i.dragItem,options:l.itemOptions,"is-copy":!0},{default:o.withCtx(f=>[o.renderSlot(t.$slots,"default",o.normalizeProps(o.guardReactiveProps(f)))]),_:3},8,["item","options"])],4)])):o.createCommentVNode("",!0)],2)}var T=C(tt,[["render",st]]);const ot={name:"VueNestableHandle",mixins:[S],props:{item:{type:Object,required:!1,default:()=>({})}},inject:["group","onDragEnd"],methods:{isEmpty(t){if(t==null)return!0;if(t.length>0)return!1;if(t.length===0)return!0;for(var e in t)if(hasOwnProperty.call(t,e))return!1;return!0},dragstart(t){const e=this.isEmpty(this.item)?this.$parent.item:this.item;this.notifyDragStart(this.group,t,e)},touchend(t){console.log(t),this.onDragEnd(t)},touchmove(t){console.log(t),this.notifyMouseMove(this.group,t)}}};function it(t,e,s,u,i,l){return o.openBlock(),o.createElementBlock("div",{draggable:"true",class:"nestable-handle",onDragstart:e[0]||(e[0]=(...h)=>l.dragstart&&l.dragstart(...h)),onTouchstart:e[1]||(e[1]=(...h)=>l.dragstart&&l.dragstart(...h)),onTouchend:e[2]||(e[2]=(...h)=>l.touchend&&l.touchend(...h)),onTouchmove:e[3]||(e[3]=(...h)=>l.touchmove&&l.touchmove(...h))},[o.renderSlot(t.$slots,"default")],32)}var $=C(ot,[["render",it]]),at={install:function(t){t.component("VueNestable",T),t.component("VueNestableHandle",$)}};g.VueNestable=T,g.VueNestableHandle=$,g.default=at,Object.defineProperties(g,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});


/***/ }),

/***/ "./resources/css/entry.css":
/*!*********************************!*\
  !*** ./resources/css/entry.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/api.js":
/*!*****************************!*\
  !*** ./resources/js/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getMenus: function getMenus(params) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Nova.request().get("/nova-vendor/nova-menu/menus", {
              params: params
            }));
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  getItems: function getItems(menuId, locale) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", Nova.request().get("/nova-vendor/nova-menu/menu/".concat(menuId), {
              params: {
                locale: locale
              }
            }));
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  copyItems: function copyItems(fromMenuId, fromLocale, toMenuId, toLocale) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Nova.request().post("/nova-vendor/nova-menu/menus/copy", {
              fromMenuId: fromMenuId,
              fromLocale: fromLocale,
              toMenuId: toMenuId,
              toLocale: toLocale
            }));
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  saveItems: function saveItems(menuId, menuItems) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", Nova.request().post("/nova-vendor/nova-menu/menu/".concat(menuId), {
              menuItems: menuItems
            }));
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  create: function create(menuItem) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", Nova.request().post("/nova-vendor/nova-menu/items", menuItem));
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  },
  getMenuItem: function getMenuItem(menuItemId) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", Nova.request().get("/nova-vendor/nova-menu/items/".concat(menuItemId)));
          case 1:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  },
  update: function update(menuItemId, menuItem) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", Nova.request().post("/nova-vendor/nova-menu/items/".concat(menuItemId), menuItem));
          case 1:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))();
  },
  destroy: function destroy(menuItemId) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", Nova.request()["delete"]("/nova-vendor/nova-menu/items/".concat(menuItemId)));
          case 1:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }))();
  },
  duplicate: function duplicate(menuItemId) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", Nova.request().post("/nova-vendor/nova-menu/items/".concat(menuItemId, "/duplicate")));
          case 1:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }))();
  },
  getMenuItemTypes: function getMenuItemTypes(menuId, locale) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", Nova.request().get("/nova-vendor/nova-menu/menu-item-types/".concat(menuId), {
              params: {
                locale: locale
              }
            }));
          case 1:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/components/MenuBuilder.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/MenuBuilder.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuBuilder_vue_vue_type_template_id_52537621__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBuilder.vue?vue&type=template&id=52537621 */ "./resources/js/components/MenuBuilder.vue?vue&type=template&id=52537621");
/* harmony import */ var _MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBuilder.vue?vue&type=script&lang=js */ "./resources/js/components/MenuBuilder.vue?vue&type=script&lang=js");
/* harmony import */ var _MenuBuilder_vue_vue_type_style_index_0_id_52537621_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss */ "./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss");
/* harmony import */ var _home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuBuilder_vue_vue_type_template_id_52537621__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/MenuBuilder.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/MenuBuilder.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/MenuBuilder.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_style_index_0_id_52537621_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss");


/***/ }),

/***/ "./resources/js/components/MenuBuilder.vue?vue&type=template&id=52537621":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/MenuBuilder.vue?vue&type=template&id=52537621 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_template_id_52537621__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_template_id_52537621__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilder.vue?vue&type=template&id=52537621 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=template&id=52537621");


/***/ }),

/***/ "./resources/js/components/MenuBuilderField.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/MenuBuilderField.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuBuilderField_vue_vue_type_template_id_20d77089__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBuilderField.vue?vue&type=template&id=20d77089 */ "./resources/js/components/MenuBuilderField.vue?vue&type=template&id=20d77089");
/* harmony import */ var _MenuBuilderField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBuilderField.vue?vue&type=script&lang=js */ "./resources/js/components/MenuBuilderField.vue?vue&type=script&lang=js");
/* harmony import */ var _MenuBuilderField_vue_vue_type_style_index_0_id_20d77089_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss */ "./resources/js/components/MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss");
/* harmony import */ var _home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MenuBuilderField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuBuilderField_vue_vue_type_template_id_20d77089__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/MenuBuilderField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/MenuBuilderField.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/MenuBuilderField.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilderField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderField_vue_vue_type_style_index_0_id_20d77089_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=style&index=0&id=20d77089&lang=scss");


/***/ }),

/***/ "./resources/js/components/MenuBuilderField.vue?vue&type=template&id=20d77089":
/*!************************************************************************************!*\
  !*** ./resources/js/components/MenuBuilderField.vue?vue&type=template&id=20d77089 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderField_vue_vue_type_template_id_20d77089__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderField_vue_vue_type_template_id_20d77089__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilderField.vue?vue&type=template&id=20d77089 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilderField.vue?vue&type=template&id=20d77089");


/***/ }),

/***/ "./resources/js/components/core/MenuBuilderHeader.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/core/MenuBuilderHeader.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuBuilderHeader_vue_vue_type_template_id_f388e838__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBuilderHeader.vue?vue&type=template&id=f388e838 */ "./resources/js/components/core/MenuBuilderHeader.vue?vue&type=template&id=f388e838");
/* harmony import */ var _MenuBuilderHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBuilderHeader.vue?vue&type=script&lang=js */ "./resources/js/components/core/MenuBuilderHeader.vue?vue&type=script&lang=js");
/* harmony import */ var _MenuBuilderHeader_vue_vue_type_style_index_0_id_f388e838_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss */ "./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss");
/* harmony import */ var _home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MenuBuilderHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuBuilderHeader_vue_vue_type_template_id_f388e838__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/core/MenuBuilderHeader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/core/MenuBuilderHeader.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/core/MenuBuilderHeader.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilderHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderHeader_vue_vue_type_style_index_0_id_f388e838_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss");


/***/ }),

/***/ "./resources/js/components/core/MenuBuilderHeader.vue?vue&type=template&id=f388e838":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/core/MenuBuilderHeader.vue?vue&type=template&id=f388e838 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderHeader_vue_vue_type_template_id_f388e838__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderHeader_vue_vue_type_template_id_f388e838__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilderHeader.vue?vue&type=template&id=f388e838 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=template&id=f388e838");


/***/ }),

/***/ "./resources/js/components/core/NoMenuItemsPlaceholder.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/core/NoMenuItemsPlaceholder.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NoMenuItemsPlaceholder_vue_vue_type_template_id_304e0c88__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoMenuItemsPlaceholder.vue?vue&type=template&id=304e0c88 */ "./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=template&id=304e0c88");
/* harmony import */ var _NoMenuItemsPlaceholder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoMenuItemsPlaceholder.vue?vue&type=script&lang=js */ "./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=script&lang=js");
/* harmony import */ var _home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NoMenuItemsPlaceholder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NoMenuItemsPlaceholder_vue_vue_type_template_id_304e0c88__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/core/NoMenuItemsPlaceholder.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoMenuItemsPlaceholder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoMenuItemsPlaceholder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NoMenuItemsPlaceholder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=template&id=304e0c88":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=template&id=304e0c88 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoMenuItemsPlaceholder_vue_vue_type_template_id_304e0c88__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NoMenuItemsPlaceholder_vue_vue_type_template_id_304e0c88__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NoMenuItemsPlaceholder.vue?vue&type=template&id=304e0c88 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/NoMenuItemsPlaceholder.vue?vue&type=template&id=304e0c88");


/***/ }),

/***/ "./resources/js/components/modals/CopyMenuItemsModal.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/modals/CopyMenuItemsModal.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CopyMenuItemsModal_vue_vue_type_template_id_2dac350f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CopyMenuItemsModal.vue?vue&type=template&id=2dac350f */ "./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=template&id=2dac350f");
/* harmony import */ var _CopyMenuItemsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CopyMenuItemsModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=script&lang=js");
/* harmony import */ var _home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CopyMenuItemsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CopyMenuItemsModal_vue_vue_type_template_id_2dac350f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modals/CopyMenuItemsModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CopyMenuItemsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CopyMenuItemsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CopyMenuItemsModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=template&id=2dac350f":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=template&id=2dac350f ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CopyMenuItemsModal_vue_vue_type_template_id_2dac350f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CopyMenuItemsModal_vue_vue_type_template_id_2dac350f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CopyMenuItemsModal.vue?vue&type=template&id=2dac350f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/CopyMenuItemsModal.vue?vue&type=template&id=2dac350f");


/***/ }),

/***/ "./resources/js/components/modals/DeleteMenuItemModal.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/modals/DeleteMenuItemModal.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteMenuItemModal_vue_vue_type_template_id_596120dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteMenuItemModal.vue?vue&type=template&id=596120dc */ "./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=template&id=596120dc");
/* harmony import */ var _DeleteMenuItemModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteMenuItemModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=script&lang=js");
/* harmony import */ var _home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeleteMenuItemModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeleteMenuItemModal_vue_vue_type_template_id_596120dc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modals/DeleteMenuItemModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteMenuItemModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteMenuItemModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteMenuItemModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=template&id=596120dc":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=template&id=596120dc ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteMenuItemModal_vue_vue_type_template_id_596120dc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DeleteMenuItemModal_vue_vue_type_template_id_596120dc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DeleteMenuItemModal.vue?vue&type=template&id=596120dc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/DeleteMenuItemModal.vue?vue&type=template&id=596120dc");


/***/ }),

/***/ "./resources/js/components/modals/UpdateMenuItemModal.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/modals/UpdateMenuItemModal.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UpdateMenuItemModal_vue_vue_type_template_id_f5eac798__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpdateMenuItemModal.vue?vue&type=template&id=f5eac798 */ "./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=template&id=f5eac798");
/* harmony import */ var _UpdateMenuItemModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpdateMenuItemModal.vue?vue&type=script&lang=js */ "./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=script&lang=js");
/* harmony import */ var _UpdateMenuItemModal_vue_vue_type_style_index_0_id_f5eac798_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss */ "./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss");
/* harmony import */ var _home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_UpdateMenuItemModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UpdateMenuItemModal_vue_vue_type_template_id_f5eac798__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modals/UpdateMenuItemModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMenuItemModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMenuItemModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdateMenuItemModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMenuItemModal_vue_vue_type_style_index_0_id_f5eac798_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=style&index=0&id=f5eac798&lang=scss");


/***/ }),

/***/ "./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=template&id=f5eac798":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=template&id=f5eac798 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMenuItemModal_vue_vue_type_template_id_f5eac798__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UpdateMenuItemModal_vue_vue_type_template_id_f5eac798__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UpdateMenuItemModal.vue?vue&type=template&id=f5eac798 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/modals/UpdateMenuItemModal.vue?vue&type=template&id=f5eac798");


/***/ }),

/***/ "./resources/js/entry.js":
/*!*******************************!*\
  !*** ./resources/js/entry.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Nova.booting(function (Vue, router) {
  Nova.inertia('NovaMenu', (__webpack_require__(/*! ./views/MenuIndexView */ "./resources/js/views/MenuIndexView.vue")["default"]));
  Vue.component('menu-builder', (__webpack_require__(/*! ./components/MenuBuilder */ "./resources/js/components/MenuBuilder.vue")["default"]));
  Vue.component('form-menu-builder-field', (__webpack_require__(/*! ./components/MenuBuilderField */ "./resources/js/components/MenuBuilderField.vue")["default"]));
  Vue.component('detail-menu-builder-field', (__webpack_require__(/*! ./components/MenuBuilderField */ "./resources/js/components/MenuBuilderField.vue")["default"]));
});

/***/ }),

/***/ "./resources/js/mixins/HandlesCollapsibleState.js":
/*!********************************************************!*\
  !*** ./resources/js/mixins/HandlesCollapsibleState.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    getCascadeState: function getCascadeState(menuItem) {
      var _this = this;
      return {
        id: menuItem.id,
        cascade: menuItem.classProp ? !menuItem.classProp.find(function (className) {
          return className === 'hide-cascade';
        }) : true,
        children: Array.isArray(menuItem.children) && menuItem.children.map(function (item) {
          return item && _this.getCascadeState(item);
        })
      };
    },
    saveMenuLocalState: function saveMenuLocalState() {
      var _this2 = this;
      if (!Array.isArray(this.menuItems) || this.menuItems.length === 0) return;
      var menuItemsState = this.menuItems.map(function (item) {
        return item && _this2.getCascadeState(item);
      });
      var data = localStorage.getItem('menuManagerItemsState');
      var menuStorage = data && JSON.parse(data) || {};
      menuStorage["resource-".concat(this.resourceId)] = menuItemsState;
      localStorage.setItem('menuManagerItemsState', JSON.stringify(menuStorage));
    },
    getMenuLocalState: function getMenuLocalState() {
      var menuStorage = JSON.parse(localStorage.getItem('menuManagerItemsState'));
      if (!menuStorage || !menuStorage["resource-".concat(this.resourceId)]) return null;
      return menuStorage["resource-".concat(this.resourceId)];
    },
    setMenuItemProperties: function setMenuItemProperties(menuItems) {
      var _this3 = this;
      var localItemsState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var collapsedAsDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return menuItems.map(function (item) {
        var localItemState = Array.isArray(localItemsState) ? localItemsState.find(function (localItem) {
          return +localItem.id === +item.id;
        }) : false;
        var hideCascade = item.children && item.children.length > 0 && (localItemState && !localItemState.cascade || !_this3.getMenuLocalState() && collapsedAsDefault);
        return _objectSpread(_objectSpread({}, item), {}, {
          classProp: [hideCascade ? 'hide-cascade' : ''],
          children: Array.isArray(item.children) ? _this3.setMenuItemProperties(item.children, localItemState && localItemState.children, collapsedAsDefault) : item.children
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/MenuIndexView.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/MenuIndexView.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuIndexView_vue_vue_type_template_id_3a0a4569__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuIndexView.vue?vue&type=template&id=3a0a4569 */ "./resources/js/views/MenuIndexView.vue?vue&type=template&id=3a0a4569");
/* harmony import */ var _MenuIndexView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuIndexView.vue?vue&type=script&lang=js */ "./resources/js/views/MenuIndexView.vue?vue&type=script&lang=js");
/* harmony import */ var _home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_pinchaaqui_Docker_nova_5_app_nova_components_nova_menu_builder_main_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MenuIndexView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuIndexView_vue_vue_type_template_id_3a0a4569__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/MenuIndexView.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/MenuIndexView.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/views/MenuIndexView.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuIndexView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuIndexView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuIndexView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MenuIndexView.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/MenuIndexView.vue?vue&type=template&id=3a0a4569":
/*!****************************************************************************!*\
  !*** ./resources/js/views/MenuIndexView.vue?vue&type=template&id=3a0a4569 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuIndexView_vue_vue_type_template_id_3a0a4569__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuIndexView_vue_vue_type_template_id_3a0a4569__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuIndexView.vue?vue&type=template&id=3a0a4569 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/MenuIndexView.vue?vue&type=template&id=3a0a4569");


/***/ }),

/***/ "laravel-nova":
/*!******************************!*\
  !*** external "LaravelNova" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = LaravelNova;

/***/ }),

/***/ "laravel-nova-ui":
/*!********************************!*\
  !*** external "LaravelNovaUi" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = LaravelNovaUi;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = Vue;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/entry": 0,
/******/ 			"css/entry": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkoutl1ne_nova_multiselect_field"] = self["webpackChunkoutl1ne_nova_multiselect_field"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/entry"], () => (__webpack_require__("./resources/js/entry.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/entry"], () => (__webpack_require__("./resources/css/entry.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;