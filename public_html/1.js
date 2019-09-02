webpackJsonp([1],{

/***/ "./main/app/Modules/Admin/Resources/assets/js/components/pages recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Clients": "./main/app/Modules/Admin/Resources/assets/js/components/pages/Clients.vue",
	"./Clients.vue": "./main/app/Modules/Admin/Resources/assets/js/components/pages/Clients.vue",
	"./Dashboard": "./main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue",
	"./Dashboard.vue": "./main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue",
	"./Login": "./main/app/Modules/Admin/Resources/assets/js/components/pages/Login.vue",
	"./Login.vue": "./main/app/Modules/Admin/Resources/assets/js/components/pages/Login.vue",
	"./Projects": "./main/app/Modules/Admin/Resources/assets/js/components/pages/Projects.vue",
	"./Projects.vue": "./main/app/Modules/Admin/Resources/assets/js/components/pages/Projects.vue",
	"./Sliders": "./main/app/Modules/Admin/Resources/assets/js/components/pages/Sliders.vue",
	"./Sliders.vue": "./main/app/Modules/Admin/Resources/assets/js/components/pages/Sliders.vue",
	"./TeamMembers": "./main/app/Modules/Admin/Resources/assets/js/components/pages/TeamMembers.vue",
	"./TeamMembers.vue": "./main/app/Modules/Admin/Resources/assets/js/components/pages/TeamMembers.vue"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./main/app/Modules/Admin/Resources/assets/js/components/pages recursive ^\\.\\/.*$";

/***/ }),

/***/ "./main/app/Modules/Admin/Resources/assets/js/components/pages/Clients.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Clients.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48be3b56\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Clients.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "main/app/Modules/Admin/Resources/assets/js/components/pages/Clients.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48be3b56", Component.options)
  } else {
    hotAPI.reload("data-v-48be3b56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19e9a462\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-19e9a462\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-19e9a462"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19e9a462", Component.options)
  } else {
    hotAPI.reload("data-v-19e9a462", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./main/app/Modules/Admin/Resources/assets/js/components/pages/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e67d7c92\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Login.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "main/app/Modules/Admin/Resources/assets/js/components/pages/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e67d7c92", Component.options)
  } else {
    hotAPI.reload("data-v-e67d7c92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./main/app/Modules/Admin/Resources/assets/js/components/pages/Projects.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Projects.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2aa58e1c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Projects.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "main/app/Modules/Admin/Resources/assets/js/components/pages/Projects.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2aa58e1c", Component.options)
  } else {
    hotAPI.reload("data-v-2aa58e1c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./main/app/Modules/Admin/Resources/assets/js/components/pages/Sliders.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Sliders.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4fa67400\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Sliders.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "main/app/Modules/Admin/Resources/assets/js/components/pages/Sliders.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fa67400", Component.options)
  } else {
    hotAPI.reload("data-v-4fa67400", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./main/app/Modules/Admin/Resources/assets/js/components/pages/TeamMembers.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/TeamMembers.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-28a87c4a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/TeamMembers.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "main/app/Modules/Admin/Resources/assets/js/components/pages/TeamMembers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28a87c4a", Component.options)
  } else {
    hotAPI.reload("data-v-28a87c4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Clients.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__ = __webpack_require__("./main/app/Modules/Admin/Resources/assets/js/config/endpoints.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      details: {
        imageUrl: ""
      },
      headers: [],
      rows: []
    };
    "";
  },
  created: function created() {
    this.getClients();
  },

  methods: {
    pickFile: function pickFile() {
      this.$refs.image.click();
    },
    onFilePicked: function onFilePicked(e) {
      var _this = this;

      var files = e.target.files;
      if (files[0] !== undefined) {
        this.details.imageName = files[0].name;
        if (this.details.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        var fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", function () {
          _this.details.imageUrl = fr.result;
        });
      } else {
        this.details.imageName = "";
        this.details.imageUrl = "";
      }
    },
    getClients: function getClients() {
      var _this2 = this;

      BlockToast.fire({
        title: "Fetching client list..."
      });
      axios.get(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["i" /* getClients */], _extends({}, this.details)).then(function (rsp) {
        if (rsp.status == 200) {
          _this2.headers = rsp.data.clients.headers;
          _this2.rows = rsp.data.clients.rows;

          swal.close();
        }
      });
    },
    createClient: function createClient() {
      var _this3 = this;

      BlockToast.fire({
        title: "Creating..."
      });

      axios.post(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["a" /* createClient */], _extends({}, this.details)).then(function (rsp) {
        if (rsp.status == 201) {
          swal.fire({
            title: "Created",
            type: "success"
          });
          _this3.rows.push(rsp.data.client);
          _this3.details = {};
          _this3.dialog = false;
        }
      });
    },
    deleteClient: function deleteClient(client) {
      var _this4 = this;

      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        focusCancel: true
        // showLoaderOnConfirm: true,
        // preConfirm:
      }).then(function (result) {
        if (result.value) {
          BlockToast.fire({
            title: "Deleting..."
          });
          axios.delete(Object(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["e" /* deleteClient */])(client.id)).then(function (rsp) {
            if (rsp.status == 204) {
              swal.fire({
                title: "Deleted",
                type: "success"
              });

              var removed = _this4.rows.indexOf(client);
              if (removed != -1) {
                _this4.rows.splice(removed, 1);
              }
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      drawer: null,
      details: {}
    };
  },

  props: {
    source: String
  },
  methods: {
    loginAdmin: function loginAdmin() {
      BlockToast.fire({
        text: "Verifying credentials...."
      });

      axios.post("/admin/login", _extends({}, this.details)).then(function (rsp) {
        if (rsp.status == 200) {
          location.reload();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Projects.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__ = __webpack_require__("./main/app/Modules/Admin/Resources/assets/js/config/endpoints.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      details: {
        imageUrl: ""
      },
      headers: [],
      rows: []
    };
    "";
  },
  created: function created() {
    this.getProjects();
  },

  methods: {
    pickFile: function pickFile() {
      this.$refs.image.click();
    },
    onFilePicked: function onFilePicked(e) {
      var _this = this;

      var files = e.target.files;
      if (files[0] !== undefined) {
        this.details.imageName = files[0].name;
        if (this.details.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        var fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", function () {
          _this.details.imageUrl = fr.result;
          _this.details.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.details.imageName = "";
        this.details.imageFile = "";
        this.details.imageUrl = "";
      }
    },
    getProjects: function getProjects() {
      var _this2 = this;

      BlockToast.fire({
        title: "Fetching projects..."
      });
      axios.get(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["j" /* getProjects */], _extends({}, this.details)).then(function (rsp) {
        if (rsp.status == 200) {
          _this2.headers = rsp.data.projects.headers;
          _this2.rows = rsp.data.projects.rows;

          swal.close();
        }
      });
    },
    createProject: function createProject() {
      var _this3 = this;

      BlockToast.fire({
        title: "Creating..."
      });

      axios.post(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["b" /* createProject */], _extends({}, this.details)).then(function (rsp) {
        if (rsp.status == 201) {
          swal.fire({
            title: "Created",
            type: "success"
          });
          _this3.rows.push(rsp.data.project);
          _this3.details = {};
          _this3.dialog = false;
        }
      }).catch(function (err) {
        swal.fire({
          title: "Something went wrong",
          type: "error"
        });
      });
    },
    deleteProject: function deleteProject(project) {
      var _this4 = this;

      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        focusCancel: true
        // showLoaderOnConfirm: true,
        // preConfirm:
      }).then(function (result) {
        if (result.value) {
          BlockToast.fire({
            title: "Deleting..."
          });
          axios.delete(Object(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["f" /* deleteProject */])(project.id)).then(function (rsp) {
            if (rsp.status == 204) {
              swal.fire({
                title: "Deleted",
                type: "success"
              });

              var removed = _this4.rows.indexOf(project);
              if (removed != -1) {
                _this4.rows.splice(removed, 1);
              }
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Sliders.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__ = __webpack_require__("./main/app/Modules/Admin/Resources/assets/js/config/endpoints.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      details: {},
      headers: [],
      rows: []
    };
  },
  created: function created() {
    this.getSlides();
  },

  methods: {
    getSlides: function getSlides() {
      var _this = this;

      BlockToast.fire({
        title: "Fetching sliders..."
      });
      axios.get(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["k" /* getSliders */], _extends({}, this.details)).then(function (rsp) {
        if (rsp.status == 200) {
          _this.headers = rsp.data.slides.headers;
          _this.rows = rsp.data.slides.rows;

          swal.close();
        }
      });
    },
    pickFile: function pickFile() {
      this.$refs.image.click();
    },
    onFilePicked: function onFilePicked(e) {
      var _this2 = this;

      var files = e.target.files;
      if (files[0] !== undefined) {
        this.details.imageName = files[0].name;
        if (this.details.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        var fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", function () {
          _this2.details.imageUrl = fr.result;
        });
      } else {
        this.details.imageName = "";
        this.details.imageUrl = "";
      }
    },
    createSlider: function createSlider() {
      var _this3 = this;

      BlockToast.fire({
        title: "Creating..."
      });

      axios.post(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["c" /* createSlider */], _extends({}, this.details)).then(function (rsp) {
        if (undefined !== rsp && rsp.status == 201) {
          swal.fire({
            title: "Created",
            type: "success"
          });

          _this3.details = {};
          _this3.dialog = false;
        }
      }).catch(function (err) {
        console.log(err.response);
        if (err.response.status == 520) {
          swal.fire({
            title: "Error",
            html: err.response.data.message,
            type: "error"
          });
        }
      });
    },
    deleteSlider: function deleteSlider(slider) {
      var _this4 = this;

      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        focusCancel: true
        // showLoaderOnConfirm: true,
        // preConfirm:
      }).then(function (result) {
        if (result.value) {
          BlockToast.fire({
            title: "Deleting..."
          });
          axios.delete(Object(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["g" /* deleteSlider */])(slider.id)).then(function (rsp) {
            if (rsp.status == 204) {
              swal.fire({
                title: "Deleted",
                type: "success"
              });

              var removed = _this4.rows.indexOf(slider);
              if (removed != -1) {
                _this4.rows.splice(removed, 1);
              }
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/TeamMembers.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__ = __webpack_require__("./main/app/Modules/Admin/Resources/assets/js/config/endpoints.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      details: {
        imageUrl: ""
      },
      headers: [],
      rows: []
    };
    "";
  },
  created: function created() {
    this.getTeamMembers();
  },

  methods: {
    pickFile: function pickFile() {
      this.$refs.image.click();
    },
    onFilePicked: function onFilePicked(e) {
      var _this = this;

      var files = e.target.files;
      if (files[0] !== undefined) {
        this.details.imageName = files[0].name;
        if (this.details.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        var fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", function () {
          _this.details.imageUrl = fr.result;
          // this.details.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.details.imageName = "";
        // this.details.imageFile = "";
        this.details.imageUrl = "";
      }
    },
    getTeamMembers: function getTeamMembers() {
      var _this2 = this;

      BlockToast.fire({
        title: "Fetching team members..."
      });
      axios.get(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["l" /* getTeamMembers */], _extends({}, this.details)).then(function (rsp) {
        if (rsp.status == 200) {
          _this2.headers = rsp.data.team_members.headers;
          _this2.rows = rsp.data.team_members.rows;

          swal.close();
        }
      });
    },
    createTeamMember: function createTeamMember() {
      var _this3 = this;

      BlockToast.fire({
        title: "Creating..."
      });

      axios.post(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["d" /* createTeamMember */], _extends({}, this.details)).then(function (rsp) {
        if (rsp.status == 201) {
          swal.fire({
            title: "Created",
            type: "success"
          });
          _this3.rows.push(rsp.data.team_member);
          _this3.details = {};
          _this3.dialog = false;
        }
      });
    },
    deleteTeamMember: function deleteTeamMember(team_member) {
      var _this4 = this;

      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        focusCancel: true
        // showLoaderOnConfirm: true,
        // preConfirm:
      }).then(function (result) {
        if (result.value) {
          BlockToast.fire({
            title: "Deleting..."
          });
          axios.delete(Object(__WEBPACK_IMPORTED_MODULE_0__adminAssets_js_config_endpoints__["h" /* deleteTeamMember */])(team_member.id)).then(function (rsp) {
            if (rsp.status == 204) {
              swal.fire({
                title: "Deleted",
                type: "success"
              });

              var removed = _this4.rows.indexOf(team_member);
              if (removed != -1) {
                _this4.rows.splice(removed, 1);
              }
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19e9a462\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Dashboard.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-19e9a462\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { fluid: "", "fill-height": "" } },
        [
          _c(
            "v-layout",
            { attrs: { "justify-center": "", "align-center": "" } },
            [
              _c("v-parallax", {
                staticClass: "w-100",
                attrs: {
                  src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-19e9a462", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-28a87c4a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/TeamMembers.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "", "grid-list-md": "", "text-xs-center": "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c("v-data-table", {
                staticClass: "elevation-2",
                attrs: { headers: _vm.headers, items: _vm.rows },
                scopedSlots: _vm._u([
                  {
                    key: "items",
                    fn: function(props) {
                      return [
                        _c("td", [_vm._v(_vm._s(props.item.id))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-xs-left" },
                          [
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm6: "",
                                  md8: "",
                                  "align-center": "",
                                  "justify-center": "",
                                  layout: "",
                                  "text-xs-center": ""
                                }
                              },
                              [
                                _c(
                                  "v-avatar",
                                  {
                                    attrs: {
                                      tile: false,
                                      size: "56px",
                                      color: "grey lighten-4 my-2 elevation-5"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: props.item.img,
                                        alt: "avatar"
                                      }
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.name))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.job_title))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.phone))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.email))
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  right: "",
                                  small: "",
                                  outline: "",
                                  color: "red"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteTeamMember(props.item)
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    absolute: "",
                    dark: "",
                    fab: "",
                    bottom: "",
                    right: "",
                    color: "pink"
                  },
                  on: {
                    click: function($event) {
                      _vm.dialog = !_vm.dialog
                    }
                  }
                },
                [_c("v-icon", [_vm._v("add")])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { label: "TeamMember Name", name: "user_name" },
                    model: {
                      value: _vm.details.name,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "name", $$v)
                      },
                      expression: "details.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Job Title" },
                    model: {
                      value: _vm.details.job_title,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "job_title", $$v)
                      },
                      expression: "details.job_title"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Email" },
                    model: {
                      value: _vm.details.email,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "email", $$v)
                      },
                      expression: "details.email"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Phone" },
                    model: {
                      value: _vm.details.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "phone", $$v)
                      },
                      expression: "details.phone"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    {
                      staticClass:
                        "text-xs-center text-sm-center text-md-center text-lg-center",
                      attrs: { xs12: "" }
                    },
                    [
                      _vm.details.imageUrl
                        ? _c("img", {
                            attrs: { src: _vm.details.imageUrl, height: "150" }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          label: "Select Image",
                          "prepend-icon": "attach_file"
                        },
                        on: { click: _vm.pickFile },
                        model: {
                          value: _vm.details.imageName,
                          callback: function($$v) {
                            _vm.$set(_vm.details, "imageName", $$v)
                          },
                          expression: "details.imageName"
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        ref: "image",
                        staticStyle: { display: "none" },
                        attrs: { type: "file", accept: "image/*" },
                        on: { change: _vm.onFilePicked }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "", color: "red" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        flat: "",
                        color: "primary",
                        disabled:
                          !_vm.details.name ||
                          !_vm.details.phone ||
                          !_vm.details.email ||
                          !_vm.details.job_title ||
                          !_vm.details.imageName
                      },
                      on: { click: _vm.createTeamMember }
                    },
                    [_vm._v("Submit")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-28a87c4a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2aa58e1c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Projects.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "", "grid-list-md": "", "text-xs-center": "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c("v-data-table", {
                staticClass: "elevation-2",
                attrs: { headers: _vm.headers, items: _vm.rows },
                scopedSlots: _vm._u([
                  {
                    key: "items",
                    fn: function(props) {
                      return [
                        _c("td", [_vm._v(_vm._s(props.item.id))]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.name))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.desc))
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-xs-left" },
                          [
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm6: "",
                                  md8: "",
                                  "align-center": "",
                                  "justify-center": "",
                                  layout: "",
                                  "text-xs-center": ""
                                }
                              },
                              [
                                _c(
                                  "v-avatar",
                                  {
                                    attrs: {
                                      tile: false,
                                      size: "56px",
                                      color: "grey lighten-4 my-2 elevation-5"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: props.item.img,
                                        alt: "avatar"
                                      }
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  right: "",
                                  small: "",
                                  outline: "",
                                  color: "red"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteProject(props.item)
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    absolute: "",
                    dark: "",
                    fab: "",
                    bottom: "",
                    right: "",
                    color: "pink"
                  },
                  on: {
                    click: function($event) {
                      _vm.dialog = !_vm.dialog
                    }
                  }
                },
                [_c("v-icon", [_vm._v("add")])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { label: "Project Name" },
                    model: {
                      value: _vm.details.name,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "name", $$v)
                      },
                      expression: "details.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Short Description" },
                    model: {
                      value: _vm.details.desc,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "desc", $$v)
                      },
                      expression: "details.desc"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Project location" },
                    model: {
                      value: _vm.details.location,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "location", $$v)
                      },
                      expression: "details.location"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    {
                      staticClass:
                        "text-xs-center text-sm-center text-md-center text-lg-center",
                      attrs: { xs12: "" }
                    },
                    [
                      _vm.details.imageUrl
                        ? _c("img", {
                            attrs: { src: _vm.details.imageUrl, height: "150" }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          label: "Select Image",
                          "prepend-icon": "attach_file"
                        },
                        on: { click: _vm.pickFile },
                        model: {
                          value: _vm.details.imageName,
                          callback: function($$v) {
                            _vm.$set(_vm.details, "imageName", $$v)
                          },
                          expression: "details.imageName"
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        ref: "image",
                        staticStyle: { display: "none" },
                        attrs: { type: "file", accept: "image/*" },
                        on: { change: _vm.onFilePicked }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "", color: "red" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        flat: "",
                        color: "primary",
                        disabled:
                          !_vm.details.name ||
                          !_vm.details.desc ||
                          !_vm.details.imageName ||
                          !_vm.details.location
                      },
                      on: { click: _vm.createProject }
                    },
                    [_vm._v("Submit")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2aa58e1c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-48be3b56\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Clients.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "", "grid-list-md": "", "text-xs-center": "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c("v-data-table", {
                staticClass: "elevation-2",
                attrs: { headers: _vm.headers, items: _vm.rows },
                scopedSlots: _vm._u([
                  {
                    key: "items",
                    fn: function(props) {
                      return [
                        _c("td", [_vm._v(_vm._s(props.item.id))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-xs-left" },
                          [
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm6: "",
                                  md8: "",
                                  "align-center": "",
                                  "justify-center": "",
                                  layout: "",
                                  "text-xs-center": ""
                                }
                              },
                              [
                                _c(
                                  "v-avatar",
                                  {
                                    attrs: {
                                      tile: false,
                                      size: "56px",
                                      color: "grey lighten-4 my-2 elevation-5"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: props.item.img,
                                        alt: "avatar"
                                      }
                                    })
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.name))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.job_title))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.phone))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.email))
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  right: "",
                                  small: "",
                                  outline: "",
                                  color: "red"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteClient(props.item)
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    absolute: "",
                    dark: "",
                    fab: "",
                    bottom: "",
                    right: "",
                    color: "pink"
                  },
                  on: {
                    click: function($event) {
                      _vm.dialog = !_vm.dialog
                    }
                  }
                },
                [_c("v-icon", [_vm._v("add")])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-flex",
                    {
                      staticClass:
                        "text-xs-center text-sm-center text-md-center text-lg-center",
                      attrs: { xs12: "" }
                    },
                    [
                      _vm.details.imageUrl
                        ? _c("img", {
                            attrs: { src: _vm.details.imageUrl, height: "150" }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          label: "Select Image",
                          "prepend-icon": "attach_file"
                        },
                        on: { click: _vm.pickFile },
                        model: {
                          value: _vm.details.imageName,
                          callback: function($$v) {
                            _vm.$set(_vm.details, "imageName", $$v)
                          },
                          expression: "details.imageName"
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        ref: "image",
                        staticStyle: { display: "none" },
                        attrs: { type: "file", accept: "image/*" },
                        on: { change: _vm.onFilePicked }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Client Name" },
                    model: {
                      value: _vm.details.name,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "name", $$v)
                      },
                      expression: "details.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "", color: "red" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        flat: "",
                        color: "primary",
                        disabled: !_vm.details.name || !_vm.details.imageName
                      },
                      on: { click: _vm.createClient }
                    },
                    [_vm._v("Submit")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-48be3b56", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4fa67400\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Sliders.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "", "grid-list-md": "", "text-xs-center": "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c("v-data-table", {
                staticClass: "elevation-2",
                attrs: { headers: _vm.headers, items: _vm.rows },
                scopedSlots: _vm._u([
                  {
                    key: "items",
                    fn: function(props) {
                      return [
                        _c("td", [_vm._v(_vm._s(props.item.id))]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.small_title))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.big_title))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.desc))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _vm._v(_vm._s(props.item.position))
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-xs-left" }, [
                          _c("img", {
                            staticClass: "img-responsive",
                            attrs: {
                              src: props.item.img,
                              alt: "",
                              width: "200"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  right: "",
                                  small: "",
                                  outline: "",
                                  color: "red"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteSlider(props.item)
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: {
                    absolute: "",
                    dark: "",
                    fab: "",
                    bottom: "",
                    right: "",
                    color: "pink"
                  },
                  on: {
                    click: function($event) {
                      _vm.dialog = !_vm.dialog
                    }
                  }
                },
                [_c("v-icon", [_vm._v("add")])],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                [
                  _c(
                    "v-flex",
                    {
                      staticClass:
                        "text-xs-center text-sm-center text-md-center text-lg-center",
                      attrs: { xs12: "" }
                    },
                    [
                      _vm.details.imageUrl
                        ? _c("img", {
                            attrs: { src: _vm.details.imageUrl, height: "150" }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          label: "Select Image",
                          "prepend-icon": "attach_file"
                        },
                        on: { click: _vm.pickFile },
                        model: {
                          value: _vm.details.imageName,
                          callback: function($$v) {
                            _vm.$set(_vm.details, "imageName", $$v)
                          },
                          expression: "details.imageName"
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        ref: "image",
                        staticStyle: { display: "none" },
                        attrs: { type: "file", accept: "image/*" },
                        on: { change: _vm.onFilePicked }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Small Title" },
                    model: {
                      value: _vm.details.small_title,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "small_title", $$v)
                      },
                      expression: "details.small_title"
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "grey--text" }, [
                    _vm._v("* The smaller title text.")
                  ]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Big Title" },
                    model: {
                      value: _vm.details.big_title,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "big_title", $$v)
                      },
                      expression: "details.big_title"
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "grey--text" }, [
                    _vm._v("* The larger title text.")
                  ]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Short Description" },
                    model: {
                      value: _vm.details.desc,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "desc", $$v)
                      },
                      expression: "details.desc"
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "grey--text" }, [
                    _vm._v("* The larger title text.")
                  ]),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Text Position" },
                    model: {
                      value: _vm.details.position,
                      callback: function($$v) {
                        _vm.$set(_vm.details, "position", $$v)
                      },
                      expression: "details.position"
                    }
                  }),
                  _vm._v(" "),
                  _c("small", { staticClass: "grey--text" }, [
                    _vm._v("* left, right. center.")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "", color: "red" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "", color: "primary" },
                      on: { click: _vm.createSlider }
                    },
                    [_vm._v("Submit")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4fa67400", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e67d7c92\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-content",
        [
          _c(
            "v-container",
            { attrs: { fluid: "", "fill-height": "" } },
            [
              _c(
                "v-layout",
                { attrs: { "align-center": "", "justify-center": "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "", sm8: "", md4: "" } },
                    [
                      _c(
                        "v-card",
                        { staticClass: "elevation-12" },
                        [
                          _c(
                            "v-toolbar",
                            { attrs: { dark: "", color: "primary" } },
                            [
                              _c(
                                "v-toolbar-title",
                                { staticClass: "text-bold" },
                                [_vm._v("Admin Login")]
                              ),
                              _vm._v(" "),
                              _c("v-spacer")
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-form",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "prepend-icon": "person",
                                      name: "user_name",
                                      label: "User Name",
                                      type: "user_name"
                                    },
                                    model: {
                                      value: _vm.details.user_name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.details, "user_name", $$v)
                                      },
                                      expression: "details.user_name"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      id: "password",
                                      "prepend-icon": "lock",
                                      name: "password",
                                      label: "Password",
                                      type: "password"
                                    },
                                    model: {
                                      value: _vm.details.password,
                                      callback: function($$v) {
                                        _vm.$set(_vm.details, "password", $$v)
                                      },
                                      expression: "details.password"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary" },
                                  on: { click: _vm.loginAdmin }
                                },
                                [_vm._v("Login")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e67d7c92", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19e9a462\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19e9a462\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/Admin/Resources/assets/js/components/pages/Dashboard.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("33128ccb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19e9a462\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue", function() {
     var newContent = require("!!../../../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-19e9a462\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=1.js.map