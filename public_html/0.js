webpackJsonp([0],{

/***/ "./main/app/Modules/BasicSite/Resources/assets/js/components recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AppComponent": "./main/app/Modules/BasicSite/Resources/assets/js/components/AppComponent.vue",
	"./AppComponent.vue": "./main/app/Modules/BasicSite/Resources/assets/js/components/AppComponent.vue",
	"./misc/LoaderComponent": "./main/app/Modules/BasicSite/Resources/assets/js/components/misc/LoaderComponent.vue",
	"./misc/LoaderComponent.vue": "./main/app/Modules/BasicSite/Resources/assets/js/components/misc/LoaderComponent.vue",
	"./misc/PaginationComponent": "./main/app/Modules/BasicSite/Resources/assets/js/components/misc/PaginationComponent.vue",
	"./misc/PaginationComponent.vue": "./main/app/Modules/BasicSite/Resources/assets/js/components/misc/PaginationComponent.vue",
	"./pages/HomePage": "./main/app/Modules/BasicSite/Resources/assets/js/components/pages/HomePage.vue",
	"./pages/HomePage.vue": "./main/app/Modules/BasicSite/Resources/assets/js/components/pages/HomePage.vue",
	"./partials/FooterComponent": "./main/app/Modules/BasicSite/Resources/assets/js/components/partials/FooterComponent.vue",
	"./partials/FooterComponent.vue": "./main/app/Modules/BasicSite/Resources/assets/js/components/partials/FooterComponent.vue",
	"./partials/HeaderComponent": "./main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue",
	"./partials/HeaderComponent.vue": "./main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue",
	"./partials/NavComponent": "./main/app/Modules/BasicSite/Resources/assets/js/components/partials/NavComponent.vue",
	"./partials/NavComponent.vue": "./main/app/Modules/BasicSite/Resources/assets/js/components/partials/NavComponent.vue"
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
webpackContext.id = "./main/app/Modules/BasicSite/Resources/assets/js/components recursive ^\\.\\/.*$";

/***/ }),

/***/ "./main/app/Modules/BasicSite/Resources/assets/js/components/misc/PaginationComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/misc/PaginationComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cbb9f946\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/misc/PaginationComponent.vue")
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
Component.options.__file = "main/app/Modules/BasicSite/Resources/assets/js/components/misc/PaginationComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cbb9f946", Component.options)
  } else {
    hotAPI.reload("data-v-cbb9f946", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7cbc14f0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7cbc14f0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7cbc14f0", Component.options)
  } else {
    hotAPI.reload("data-v-7cbc14f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/misc/PaginationComponent.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'pagination',
    props: ['pagination', 'offset'],
    methods: {
        isCurrentPage: function isCurrentPage(page) {
            return this.pagination.current_page == page;
        },
        changePage: function changePage() {
            if (page > this.pagination.last_page) {
                page = this.pagination.last_page;
            }
            this.pagination.current_page = page;
            this.$emit('paginate');
        }
    },
    computed: {
        pages: function pages() {
            var pages = [];

            var from = this.pagination.current_page - Math.floor(this.offset / 2);

            if (from < 1) {
                from = 1;
            }
            var to = from + this.offset - 1;

            if (to > this.pagination.last_page) {
                to = this.pagination.last_page;
            }

            while (from <= to) {
                pages.push(from);
                from++;
            }

            return pages;
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Header",
  props: ["total_earnings"],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7cbc14f0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\nheader {\n  color: aliceblue;\n}\n", "", {"version":3,"sources":["/Volumes/MacBook Pro/Users/user/Desktop/Mac Old/WebFolder/htdocs/L5.8/main/app/Modules/BasicSite/Resources/assets/js/components/partials/main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue"],"names":[],"mappings":";AAeA;EACA,iBAAA;CACA","file":"HeaderComponent.vue","sourcesContent":["<template>\n  <header>Header</header>\n</template>\n\n<script>\n  export default {\n    name: \"Header\",\n    props: [\"total_earnings\"],\n    data() {\n      return {};\n    }\n  };\n</script>\n\n<style lang=\"css\">\n  header {\n    color: aliceblue;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7cbc14f0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", [_vm._v("Header")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7cbc14f0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cbb9f946\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/misc/PaginationComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("nav", [
      _c(
        "ul",
        { staticClass: "pagination" },
        [
          _c("li", [
            _c(
              "a",
              {
                attrs: {
                  disabled: _vm.pagination.current_page,
                  "aria-label": "Previous"
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.changePage(_vm.pagination.current_page - 1)
                  }
                }
              },
              [
                _c("span", { attrs: { "aria-hidden": "true" } }, [
                  _vm._v("Previous")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _vm._l(_vm.pages, function(page) {
            return _c("li", { key: page }, [
              _c(
                "a",
                {
                  class: _vm.isCurrentPage(page) ? "active" : "",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.changePage(page)
                    }
                  }
                },
                [_vm._v(_vm._s(page))]
              )
            ])
          }),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                attrs: {
                  disabled:
                    _vm.pagination.current_page >= _vm.pagination.last_page,
                  "aria-label": "Next"
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.changePage(_vm.pagination.current_page + 1)
                  }
                }
              },
              [
                _c("span", { attrs: { "aria-hidden": "true" } }, [
                  _vm._v("Next")
                ])
              ]
            )
          ])
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-cbb9f946", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7cbc14f0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7cbc14f0\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/BasicSite/Resources/assets/js/components/partials/HeaderComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("baa0660a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7cbc14f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HeaderComponent.vue", function() {
     var newContent = require("!!../../../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7cbc14f0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HeaderComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=0.js.map