webpackJsonp([1],{

/***/ "./main/app/Modules/AppUser/Resources/assets/js/components/pages recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404": "./main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue",
	"./404.vue": "./main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue",
	"./UserDashboard": "./main/app/Modules/AppUser/Resources/assets/js/components/pages/UserDashboard.vue",
	"./UserDashboard.vue": "./main/app/Modules/AppUser/Resources/assets/js/components/pages/UserDashboard.vue",
	"./UserProfile": "./main/app/Modules/AppUser/Resources/assets/js/components/pages/UserProfile.vue",
	"./UserProfile.vue": "./main/app/Modules/AppUser/Resources/assets/js/components/pages/UserProfile.vue"
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
webpackContext.id = "./main/app/Modules/AppUser/Resources/assets/js/components/pages recursive ^\\.\\/.*$";

/***/ }),

/***/ "./main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bd39d09\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7bd39d09\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7bd39d09"
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
Component.options.__file = "main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bd39d09", Component.options)
  } else {
    hotAPI.reload("data-v-7bd39d09", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mdbvue__ = __webpack_require__("./node_modules/mdbvue/src/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "PageNotFound",
  components: {
    mdbRow: __WEBPACK_IMPORTED_MODULE_0_mdbvue__["I" /* Row */],
    mdbCol: __WEBPACK_IMPORTED_MODULE_0_mdbvue__["j" /* Column */]
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bd39d09\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.full[data-v-7bd39d09] {\n  height: 70vh;\n}\n.bad-gateway-row[data-v-7bd39d09] {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n", "", {"version":3,"sources":["/Volumes/MacBook Pro/Users/user/Desktop/Mac Old/WebFolder/htdocs/L5.8/main/app/Modules/AppUser/Resources/assets/js/components/pages/main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue"],"names":[],"mappings":";AA2CA;EACA,aAAA;CACA;AACA;EACA,UAAA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;EACA,yCAAA;EACA,iCAAA;CACA","file":"404.vue","sourcesContent":["<template>\n  <section id=\"bad-gateway\">\n    <div class=\"full\">\n      <mdb-row class=\"bad-gateway-row\">\n        <mdb-col md=\"8\">\n          <img\n            alt=\"Error 404\"\n            class=\"img-fluid\"\n            hieght=\"20px\"\n            src=\"@dashboardAssets/images/logo-mdb-vue-small.png\"\n          >\n          <h2 class=\"h2-responsive mt-3 mb-2\">404. That's an error.</h2>\n          <h4>The requested URL was not found on this server.</h4>\n        </mdb-col>\n        <mdb-col md=\"4\">\n          <img\n            alt=\"Error 404\"\n            class=\"img-fluid\"\n            src=\"https://mdbootstrap.com/img/Others/grafika404-bf.png\"\n          >\n        </mdb-col>\n      </mdb-row>\n    </div>\n  </section>\n</template>\n\n<script>\n  import { Row as mdbRow, Column as mdbCol } from \"mdbvue\";\n\n  export default {\n    name: \"PageNotFound\",\n    components: {\n      mdbRow,\n      mdbCol\n    },\n    data() {\n      return {};\n    }\n  };\n</script>\n\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\n<style scoped>\n  .full {\n    height: 70vh;\n  }\n  .bad-gateway-row {\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 55%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7bd39d09\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { attrs: { id: "bad-gateway" } }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c(
          "mdb-row",
          { staticClass: "bad-gateway-row" },
          [
            _c("mdb-col", { attrs: { md: "8" } }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  alt: "Error 404",
                  hieght: "20px",
                  src: __webpack_require__("./main/app/Modules/AppUser/Resources/assets/images/logo-mdb-vue-small.png")
                }
              }),
              _vm._v(" "),
              _c("h2", { staticClass: "h2-responsive mt-3 mb-2" }, [
                _vm._v("404. That's an error.")
              ]),
              _vm._v(" "),
              _c("h4", [
                _vm._v("The requested URL was not found on this server.")
              ])
            ]),
            _vm._v(" "),
            _c("mdb-col", { attrs: { md: "4" } }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  alt: "Error 404",
                  src: "https://mdbootstrap.com/img/Others/grafika404-bf.png"
                }
              })
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7bd39d09", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bd39d09\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bd39d09\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main/app/Modules/AppUser/Resources/assets/js/components/pages/404.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("67d069d9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bd39d09\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue", function() {
     var newContent = require("!!../../../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bd39d09\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue");
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