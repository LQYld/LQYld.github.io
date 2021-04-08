(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{500:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[t._v("#")]),t._v(" 模块")]),t._v(" "),a("p",[t._v("模块是 Nuxt.js 扩展，可以扩展其核心功能并添加无限的集成。")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("在使用 Nuxt 开发应用程序时，您很快就会发现框架的核心功能还不够。 Nuxt 可以使用配置选项和插件进行扩展，但是在多个项目中维护这些自定义是繁琐、重复和耗时的。 另一方面，开箱即用支持每个项目的需求将使 Nuxt 非常复杂且难以使用。")]),t._v(" "),a("p",[t._v("这就是 Nuxt 提供更高阶模块系统的原因，可以轻松扩展核心。 模块只是在引导 Nuxt 时按顺序调用的函数。 框架在加载之前等待每个模块完成。 如此，模块几乎可以自定义 Nuxt 的任何地方。 我们可以使用功能强大的 Hookable Nuxt.js 系统来完成特定事件的任务。")]),t._v(" "),a("p",[t._v("最重要的是, Nuxt 模块可以合并到 npm 包中。 这使得它们易于跨项目开发重用并与 Nuxt 社区共享, 我们可以创建一个高质量的 Nuxt 附加组件生态系统。")]),t._v(" "),a("p",[t._v("如果你：")]),t._v(" "),a("ul",[a("li",[t._v("是优秀团队的成员，需要快速引导新项目。")]),t._v(" "),a("li",[t._v("厌倦了为集成 Google Analytics 等常见任务重新造轮子。")]),t._v(" "),a("li",[t._v("是一个优秀的开源爱好者，希望轻松与社区分享您的工作。")]),t._v(" "),a("li",[t._v("是一家重视质量和可重用性的企业公司的成员。")]),t._v(" "),a("li",[t._v("通常是在短期限内完成，没有时间深入了解每个新库或集成的细节。")]),t._v(" "),a("li",[t._v("厌倦了处理对低级接口的重大改变，并且需要能够正常工作的东西。")])]),t._v(" "),a("h2",{attrs:{id:"nuxt-js-模块列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-js-模块列表"}},[t._v("#")]),t._v(" Nuxt.js 模块列表")]),t._v(" "),a("p",[t._v("Nuxt.js 团队提供 官方 模块:")]),t._v(" "),a("ul",[a("li",[t._v("@nuxt/http: 基于 ky-universal 的轻量级和通用的 HTTP 请求")]),t._v(" "),a("li",[t._v("@nuxtjs/axios: 安全和使用简单 Axios 与 Nuxt.js 集成用来请求 HTTP")]),t._v(" "),a("li",[t._v("@nuxtjs/pwa: 使用经过严格测试，更新且稳定的 PWA 解决方案来增强 Nuxt")]),t._v(" "),a("li",[t._v("@nuxtjs/auth: Nuxt.js 的身份验证模块，提供不同的方案和验证策略")])]),t._v(" "),a("p",[t._v("Nuxt.js 社区制作的模块列表可在 https://github.com/topics/nuxt-module 中查询")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("扩展（什么是 PWA）")]),t._v(" "),a("p",[t._v("Progressive Web Application，全称“渐进式网页应用”，是谷歌主导的一种新时代网页（应用）。"),a("br"),t._v("\n简单的理解，就是你的网页，可以通过某种方式达到离线使用。")])]),t._v(" "),a("h2",{attrs:{id:"基本模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本模块"}},[t._v("#")]),t._v(" 基本模块")]),t._v(" "),a("p",[t._v("如上所述，模块只是简单的功能。它们可以打包为 npm 模块或直接包含在项目源代码中。")]),t._v(" "),a("p",[t._v("modules/simple.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SimpleModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("moduleOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这里编写你的代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果作为npm包发布，则是必需的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// module.exports.meta = require('./package.json')")]),t._v("\n")])])]),a("p",[t._v("moduleOptions")]),t._v(" "),a("p",[t._v("这是用户使用 modules 数组传递对象，我们可以使用它来定制它的行为。")]),t._v(" "),a("p",[t._v("this.options")]),t._v(" "),a("p",[t._v("您可以使用此属性直接访问 Nuxt 选项。这是 nuxt.config.js，其中包含所有默认选项，可用于模块之间的共享选项。")]),t._v(" "),a("p",[t._v("this.nuxt")]),t._v(" "),a("p",[t._v("这是对当前 Nuxt 实例的引用。")]),t._v(" "),a("p",[t._v("this")]),t._v(" "),a("p",[t._v("modules 中的 context。")]),t._v(" "),a("p",[t._v("module.exports.meta")]),t._v(" "),a("p",[t._v("如果要将模块发布为 npm 包，则需要配置此选项。Nuxt 内部使用 meta 来更好地处理您的包。")]),t._v(" "),a("p",[t._v("nuxt.config.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Simple usage")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~/modules/simple"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Passing options directly")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~/modules/simple"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("然后，我们告诉 Nuxt 为项目加载一些特定模块，并将可选参数作为选项。")]),t._v(" "),a("h2",{attrs:{id:"异步模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步模块"}},[t._v("#")]),t._v(" 异步模块")]),t._v(" "),a("p",[t._v("并非所有模块都会同步完成所有操作，例如：您可能希望开发一个需要获取某些 API 或执行异步 IO 的模块。为此，Nuxt 支持在异步模块中返回 Promise 或调用回调。")]),t._v(" "),a("h3",{attrs:{id:"使用-async-await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-async-await"}},[t._v("#")]),t._v(" 使用 async/await")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("仅在 Node.js > 7.2 中支持使用 async / await。 因此，如果您是模块开发人员，至少要警告用户使用它们时 Node.js 版本不能低于 7.2。 对于大量异步模块或更好的传统支持，您可以使用 bundler 将其转换为兼容较旧的 Node.js 版本或 Promise 方法。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fse "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs-extra"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asyncModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can do async works here using `async`/`await`")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pages "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" fse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readJson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./pages.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"返回-promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回-promise"}},[t._v("#")]),t._v(" 返回 Promise")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"axios"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asyncModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" axios\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://jsonplaceholder.typicode.com/users"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过扩展Nuxt路由做些什么")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"使用回调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用回调"}},[t._v("#")]),t._v(" 使用回调")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"axios"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asyncModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  axios\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://jsonplaceholder.typicode.com/users"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/users/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);