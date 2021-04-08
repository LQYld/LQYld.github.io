(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{378:function(e,o,a){"use strict";a.r(o);var c=a(42),t=Object(c.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"为什么-react-源码不用-typescript-来写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么-react-源码不用-typescript-来写"}},[e._v("#")]),e._v(" 为什么 React 源码不用 TypeScript 来写？")]),e._v(" "),a("p",[e._v("从 Facebook 内部的角度告诉你为什么现在 React 的源代码用了 Flow 但没有用 TypeScript 吧。")]),e._v(" "),a("p",[e._v("Facebook 是一家技术很厉害的公司，能够超前做一些外界没有的东西，但等外界把这个东西做出来了，Facebook 就发现自己迁移不过去了，被自己过去超前做的技术锁定了，因为迁移成本太高。举个例子，在还没有 webpack 的时候 Facebook 就有自己很好的前端构建流水线，但 webpack 出来后 Facebook 无法迁移到 webpack，甚至无法轻易把 transpiler 迁移到 Babel。")]),e._v(" "),a("p",[e._v("如果我没记错的话，Babel 作者 Sebastian McKenzie 进入 Facebook 后做过一个项目，就是帮助 Facebook 迁移到 Babel。为什么呢？因为在外界还没有 Babel 的时候，甚至在 Babel 前身 6to5 还没出现的时候，Facebook 内部的流水线已经有自己的 transpiler，能够把一部分 ES6 语法转译为 ES5。当时我们可爽了，在外部根本还没意识到能这样做事情的时候，我们已经可以随手写 ES6 了。但有了 Babel 后，内部流水线根本不兼容中间插入 Babel 这一步，所以就需要专门改造这个流水线才能迁移到 Babel。而且 Facebook 已有的大量代码的 ES6 写法是基于内部 transpiler 写的，谁能保证迁移到 Babel 后 100% 兼容？迁移到 Babel 后如果编译出错了，那还能找出来修复。如果不出错，但实际执行结果略微不一样，导致出现线上事故，那怎么办？")]),e._v(" "),a("p",[e._v("React 在写的时候，是基于上述 Facebook 内部流水线写的，所以自然是内部有什么工具就依赖什么工具。React 一开始写的时候，其实是没有 Babel、TypeScript 和 Flow 的，但有上述内部 transpiler，所以就这样写了。到后来有了 Flow，而且要保证依赖于 React 的代码能够得到正确的 Flow 类型推断，自然就加上了 Flow 注释。此外，内部流水线应该是从来没做过 TypeScript 支持的，所以估计就算想用 TypeScript 来写也做不到，因为这不是加个 webpack 插件就能支持的。")]),e._v(" "),a("p",[e._v("为什么 Facebook 要做 Flow 而不用 TypeScript？这是一个规模的问题，对于大多数一般人来说没有这个规模是不可能理解的。我可以举若干个故事来解释一下什么是规模，以及为什么大多数人都没有机会解决这类问题，但非常少数的超大规模型公司需要请非常资深的工程师来解决。")]),e._v(" "),a("p",[e._v("第一个例子是为什么 Facebook 不能用 TypeScript，因为 TypeScript 会把所有源代码加载到内存里进行处理。Facebook 用的是 monorepo，也就是一个单体源代码库，不按项目分多个代码库，这使得互相引用的 JavaScript 非常庞大。如果让 TypeScript 直接跑，TypeScript 的内存开销会大到连 Facebook 的服务器都 hold 不住，然后崩溃掉。为此 Facebook 坚持做自己的 Flow，Flow 能够分拆要处理的 JavaScript 然后一部分一部分地处理，解决 Facebook 内部的独家问题。Facebook Flow 团队的态度很明确：「这是做给我们自己用的，我们顺手开源而已，你们爱用就用，没人逼你们用。我们会优先做内部需求，社区需求不着急做，如果社区需求跟内部需求冲突的必然让路给内部需求。」")]),e._v(" "),a("p",[e._v("第二个例子是为什么 Facebook 用 Mercurial (hg) 而不用 Git，因为 Facebook 几年前每周的 commit 数量就高达五位数，现在可能已经六位数了。这导致每天上班跑一次 git pull --rebase 搞不好就 30 分钟，非常影响生产力，而且一天还可能要跑几次。既然 Git 是开源的，Facebook 就想要去改 Git 源代码，改善自己工作流程的生产力。Facebook 主动去撩 Git，说「我们愿意贡献源代码啊，我们可以优化我们在乎的工作流程的性能，你们愿意接受我们的 Pull Request 吗？」Git 说「滚！这是你们特有的问题，正常的 Git 用户根本没有这么高的 commit 流量，不要引入非必要的复杂度到我们的源代码里。」于是 Facebook 跑去撩 Mercurial，人家说「欢迎来贡献代码」，于是 Facebook 就切换到 Mercurial 了。")]),e._v(" "),a("p",[e._v("第三个例子是 Facebook 特有的 iOS 开发环境优化。跟上面的例子相似，如果当作一个普通的 Xcode 项目打开 Facebook 主应用的源代码，编译一下就 60 分钟，根本无法干活。所以 Facebook 做了一些非常专门的优化，保证大家如果只是改动一两个模块里的代码时，编译速度非常快，一下子就能把 Facebook 主应用编译出来，能看到改动的效果。Facebook 跟 Apple 的关系不错，就问 Apple 有没有兴趣对 Xcode 做一些相关的优化，Apple 当然表示没兴趣。Apple 说他们真正看重的是那些一两个程序员组成的小开发者，因为这种类型开发者写了绝大部分 App Store 上面的应用，包括大部分的高质量应用。Apple 要优先满足这种类型开发者的需求，而不是 Facebook 这种「仅此一家」的需求。")]),e._v(" "),a("p",[e._v("举这三个例子是为了说明这样一个事情：Facebook 的很多问题是独家的，并不是外部看到的那么简单的问题。有些很多问题是因为规模导致的，做不到 Facebook 这样的规模根本遇不到这样的问题。你可以想象你自己做项目会怎么做，但你把这应用到 Facebook 这样的规模就很可能行不通。")]),e._v(" "),a("p",[e._v("作者：Cat Chen"),a("br"),e._v("\n链接：https://www.zhihu.com/question/378470381/answer/1079675543"),a("br"),e._v("\n来源：知乎"),a("br"),e._v("\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])])}),[],!1,null,null,null);o.default=t.exports}}]);