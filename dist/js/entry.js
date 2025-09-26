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
  components: {
    VueNestable: vue3_nestable__WEBPACK_IMPORTED_MODULE_0__.VueNestable,
    VueNestableHandle: vue3_nestable__WEBPACK_IMPORTED_MODULE_0__.VueNestableHandle
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
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
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
        "class": this.linkType["class"] || '',
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
              _context7.next = 5;
              return _this7.refreshData();
            case 5:
              // Reload data from server after saving
              Nova.success(_this7.__('novaMenuBuilder.toastReorderSuccess'));
              _context7.next = 11;
              break;
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              Nova.error(_this7.__('novaMenuBuilder.serverError'));
            case 11:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 8]]);
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
    updateLinkType: function updateLinkType(linkType) {
      this.linkType = this.menuItemTypes.find(function (type) {
        return type["class"] === linkType;
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
    CopyMenuItemsModal: _modals_CopyMenuItemsModal__WEBPACK_IMPORTED_MODULE_0__["default"],
    Button: laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__.Button
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

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
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
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
              console.error('Copy failed:', _context3.t0);
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
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! laravel-nova-ui */ "laravel-nova-ui");
/* harmony import */ var laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_multiselect_src_Multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/src/Multiselect */ "./node_modules/vue-multiselect/src/Multiselect.vue");
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
      selectedType: '',
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
    Button: laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
    CancelButton: laravel_nova_ui__WEBPACK_IMPORTED_MODULE_1__.CancelButton,
    Multiselect: vue_multiselect_src_Multiselect__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  watch: {
    'linkType.class': function linkTypeClass(newClass) {
      this.selectedType = newClass || '';
    },
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
      var newerror = new laravel_nova__WEBPACK_IMPORTED_MODULE_0__.Errors(ogErrors || {});
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
    handleTypeChange: function handleTypeChange(event) {
      var value = event.target.value;
      this.$emit('onLinkTypeUpdate', value);
    },
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
      return _ctx.$emit('input', $event);
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
            type: $options.isCascadeOpen(item) ? 'chevron-down' : 'chevron-up'
          }, null, 8 /* PROPS */, ["type"])], 8 /* PROPS */, _hoisted_1)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["o1-text-90 o1-font-bold o1-whitespace-nowrap o1-overflow-hidden o1-text-ellipsis", {
              'opacity-25': !item.enabled
            }])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 3 /* TEXT, CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["o1-font-lighter o1-text-80 o1-ml-4 o1-text-sm o1-whitespace-nowrap o1-text-ellipsis o1-overflow-hidden", {
              'o1-opacity-25': !item.enabled
            }])
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.displayValue), 3 /* TEXT, CLASS */)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            title: _ctx.__('novaMenuBuilder.edit'),
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('editMenu', item);
            }, ["prevent"]),
            "class": "text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
            type: "pencil-alt"
          })], 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            title: _ctx.__('novaMenuBuilder.duplicate'),
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('duplicateMenuItem', item);
            }, ["prevent"]),
            "class": "text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
            type: "duplicate"
          })], 8 /* PROPS */, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            title: _ctx.__('novaMenuBuilder.delete'),
            onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('removeMenu', item);
            }, ["prevent"]),
            "class": "text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Icon, {
            type: "trash"
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
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
  }), 128 /* KEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.showCopyButton && $props.showDuplicate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Button, {
    key: 1,
    "class": "mr-4",
    variant: "outline",
    state: "default",
    icon: "duplicate",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.showCopyModal = true;
    }, ["prevent"]))
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
    title: _ctx.__('novaMenuBuilder.addMenuItem'),
    "class": "mr-2 flex-no-shrink whitespace-nowrap",
    variant: "solid",
    state: "default",
    label: _ctx.__('novaMenuBuilder.addMenuItem'),
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.$emit('addMenuItem');
    }, ["prevent"]))
  }, null, 8 /* PROPS */, ["title", "label"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_copy_menu_items_modal, {
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
  var _component_DefaultButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultButton");
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
  })], -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('novaMenuBuilder.noMenuItemsPlaceholder')), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DefaultButton, {
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
  var _component_CancelButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CancelButton");
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
        onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
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
            "onUpdate:selected": _cache[1] || (_cache[1] = function ($event) {
              return _ctx.selectedLocale = $event;
            })
          }, null, 8 /* PROPS */, ["options", "placeholder", "selected"])];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["field"])], 32 /* NEED_HYDRATION */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ModalFooter, {
        "class": "flex justify-end"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CancelButton, {
            component: "button",
            type: "button",
            dusk: "cancel-action-button",
            onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('closeModal');
            }, ["prevent"])),
            "class": "mr-3"
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
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
  var _component_CancelButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CancelButton");
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
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CancelButton, {
            component: "button",
            type: "button",
            dusk: "cancel-action-button",
            onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('closeModal');
            }, ["prevent"])),
            "class": "mr-3"
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
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
  value: "",
  disabled: ""
};
var _hoisted_6 = ["value"];
var _hoisted_7 = ["placeholder"];
var _hoisted_8 = {
  "class": "ml-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;
  var _component_CheckboxWithLabel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CheckboxWithLabel");
  var _component_ModalHeader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ModalHeader");
  var _component_DefaultField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DefaultField");
  var _component_multiselect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("multiselect");
  var _component_SelectControl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SelectControl");
  var _component_CancelButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CancelButton");
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
        onSubmit: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
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
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return _ctx.selectedType = $event;
            }),
            onChange: _cache[4] || (_cache[4] = function () {
              return $options.handleTypeChange && $options.handleTypeChange.apply($options, arguments);
            }),
            "class": "w-full form-control form-input form-control-bordered"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('novaMenuBuilder.chooseMenuItemType')), 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.menuItemTypes, function (menuType) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
              key: menuType["class"],
              value: menuType["class"]
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__(menuType.name)), 9 /* TEXT, PROPS */, _hoisted_6);
          }), 128 /* KEYED_FRAGMENT */))], 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.selectedType]])];
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
          }, null, 10 /* CLASS, PROPS */, _hoisted_7), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $props.newItem.value]])];
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
              return _cache[11] || (_cache[11] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "No options", -1 /* HOISTED */)]);
            }),
            noResult: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return _cache[12] || (_cache[12] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "No results", -1 /* HOISTED */)]);
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
            onChange: _cache[7] || (_cache[7] = function ($event) {
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
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CancelButton, {
            component: "button",
            type: "button",
            dusk: "cancel-action-button",
            onClick: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
              return _ctx.$emit('closeModal');
            }, ["prevent"])),
            "class": "mr-3"
          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
            type: "button",
            dusk: "confirm-action-button",
            state: "default",
            variant: "solid",
            disabled: $props.isMenuItemUpdating,
            loading: $props.isMenuItemUpdating,
            label: _ctx.__($props.update ? 'novaMenuBuilder.updatebuttonTitle' : 'novaMenuBuilder.createButtonTitle'),
            onClick: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
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
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
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
___CSS_LOADER_EXPORT___.push([module.id, "#menu-builder-header {\n  position: absolute;\n  right: 0;\n  top: -46px;\n  display: flex;\n  max-width: 80%;\n  place-content: end;\n}\n#menu-builder-header .locale-selection {\n  display: flex;\n  align-items: center;\n}\n#menu-builder-header .locale-selection::-webkit-scrollbar {\n  height: 5px;\n}\n#menu-builder-header .locale-selection::-webkit-scrollbar-thumb {\n  background: #C1C1C1;\n  border-radius: 5px;\n}\ndiv.relative.overflow-hidden:has(> #menu-builder-field) {\n  overflow: visible;\n}", ""]);
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

/***/ "./resources/css/entry.css":
/*!*********************************!*\
  !*** ./resources/css/entry.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Multiselect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Multiselect_vue_vue_type_template_id_163eabdc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"node_modules/vue-multiselect/src/Multiselect.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuBuilder_vue_vue_type_template_id_52537621__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/MenuBuilder.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MenuBuilderField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuBuilderField_vue_vue_type_template_id_20d77089__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/MenuBuilderField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MenuBuilderHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuBuilderHeader_vue_vue_type_template_id_f388e838__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/core/MenuBuilderHeader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NoMenuItemsPlaceholder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NoMenuItemsPlaceholder_vue_vue_type_template_id_304e0c88__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/core/NoMenuItemsPlaceholder.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CopyMenuItemsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CopyMenuItemsModal_vue_vue_type_template_id_2dac350f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modals/CopyMenuItemsModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeleteMenuItemModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeleteMenuItemModal_vue_vue_type_template_id_596120dc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modals/DeleteMenuItemModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_UpdateMenuItemModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UpdateMenuItemModal_vue_vue_type_template_id_f5eac798__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/modals/UpdateMenuItemModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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
/* harmony import */ var _Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_carolinkaring_Documents_testing_vendor_outl1ne_nova_menu_builder_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MenuIndexView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MenuIndexView_vue_vue_type_template_id_3a0a4569__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/MenuIndexView.vue"]])
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

/***/ "./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_style_index_0_id_52537621_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MenuBuilder.vue?vue&type=style&index=0&id=52537621&lang=scss");


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

/***/ "./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilderHeader_vue_vue_type_style_index_0_id_f388e838_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/core/MenuBuilderHeader.vue?vue&type=style&index=0&id=f388e838&lang=scss");


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

/***/ "./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_dist_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_loader_dist_index_js_ruleSet_0_use_0_Multiselect_vue_vue_type_style_index_0_id_163eabdc_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../vue-loader/dist/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../vue-loader/dist/index.js??ruleSet[0].use[0]!./Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./node_modules/vue-multiselect/src/Multiselect.vue?vue&type=style&index=0&id=163eabdc&lang=css");


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