(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{423:function(t,a,i){"use strict";i.r(a);var e=i(42),l=Object(e.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"缓存"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),i("h2",{attrs:{id:"缓存理解"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#缓存理解"}},[t._v("#")]),t._v(" 缓存理解")]),t._v(" "),i("ul",[i("li",[i("ol",[i("li",[t._v("缓存定义：")])]),t._v(" "),i("ul",[i("li",[t._v("浏览器再本地磁盘上将用户之前请求的数据存储起来，当访问者再次需要改数据的时候无需再次发送请求，直接冲磁盘中获取。")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"2"}},[i("li",[t._v("缓存的好处：")])]),t._v(" "),i("ul",[i("li",[i("ol",[i("li",[t._v("减少请求的个数")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"2"}},[i("li",[t._v("节省带宽，避免浪费不必要的网络资源")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"3"}},[i("li",[t._v("减轻服务器压力")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"4"}},[i("li",[t._v("提高浏览器网页的加载速度，提高用户体验")])])])])])]),t._v(" "),i("h2",{attrs:{id:"缓存分类"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#缓存分类"}},[t._v("#")]),t._v(" 缓存分类")]),t._v(" "),i("ul",[i("li",[i("ol",[i("li",[t._v("强缓存")])]),t._v(" "),i("ul",[i("li",[t._v("不会向服务器发送请求，直接从本地缓存中获取数据")]),t._v(" "),i("li",[t._v("请求资源的状态码为：200 ok(from memory cache)")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"2"}},[i("li",[t._v("协商缓存")])]),t._v(" "),i("ul",[i("li",[t._v("向服务器发送请求，服务器会根据请求头的资源判断是否命中协商缓存")]),t._v(" "),i("li",[t._v("如果命中，则返回 304 状态码通知浏览器从缓存中读取资源")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"3"}},[i("li",[t._v("强缓存 & 协商缓存的共同点")])]),t._v(" "),i("ul",[i("li",[t._v("都是从浏览器端读取资源")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"4"}},[i("li",[t._v("强缓存 VS 协商缓存的不同点")])]),t._v(" "),i("ul",[i("li",[t._v("强缓存不发请求给服务器")]),t._v(" "),i("li",[t._v("协商缓存发请求给服务器，根据服务器返回的信息决定是否使用缓存")])])])]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("扩展")]),t._v(" "),i("p",[t._v("200 ok(from memory cache) 与 200 ok(from disk cache)的区别"),i("br"),t._v("\nmemory 表示从 内存中。关闭电脑后会消失。"),i("br"),t._v("\ndisk 表示从 磁盘中。关闭电脑后才存在。")])]),t._v(" "),i("h2",{attrs:{id:"缓存中的-header-参数"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#缓存中的-header-参数"}},[t._v("#")]),t._v(" 缓存中的 header 参数")]),t._v(" "),i("h3",{attrs:{id:"强缓存的-header-参数-响应头"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#强缓存的-header-参数-响应头"}},[t._v("#")]),t._v(" 强缓存的 header 参数（响应头）")]),t._v(" "),i("h4",{attrs:{id:"_1-expires"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-expires"}},[t._v("#")]),t._v(" 1. expires")]),t._v(" "),i("p",[t._v("这是 http1.0 时的规范，它的值为一个绝对时间的 GMT 格式的时间字符串，如 Mon, 10 Jun 2015 21:31:12 GMT ,如果发送请求的时间在 expires 之前，那么本地缓存终有效，否则就会发送请求到服务器来获取资源。")]),t._v(" "),i("h4",{attrs:{id:"_2-cache-control-max-age-number"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-cache-control-max-age-number"}},[t._v("#")]),t._v(" 2. cache-control：max-age=number")]),t._v(" "),i("ul",[i("li",[i("ol",[i("li",[t._v("这是 http1.1 时出现的 header 信息，主要是利用该字段的 max-age 值来进行判断，它是一个相对值；资源第一次的请求时间和 Cache-Control 设定的有效期，计算出一个资源过期时间，再拿这个过期时间跟当前的请求时间比较，如果请求时间在过期时间之前，就能命中缓存，否则就不行；")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"2"}},[i("li",[t._v("cache-control 常用的值（做一个简单了解即可）：")])]),t._v(" "),i("ul",[i("li",[i("ol",[i("li",[t._v("no-cache：不使用本地缓存，需要使用协商缓存。先与服务器确认返回的响应是否被更改，如果之前的响应中存在 Etag，那么请求的时候会与服务器端进行验证，如果资源为被更改则使用缓存。")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"2"}},[i("li",[t._v("no-store：直接禁止浏览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"3"}},[i("li",[t._v("public：可以被所有的用户缓存，包括终端用户和 CDN 等中间代理服务器。")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"4"}},[i("li",[t._v("private：只能被终端用户的浏览器缓存，不允许 CDN 等中继缓存服务器对其缓存。")])])])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"3"}},[i("li",[t._v("注意：当 cache-control 与 Expires 共存的时候 cache-control 的优先级高")])])])]),t._v(" "),i("h3",{attrs:{id:"协商缓存的-header-参数-响应头"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存的-header-参数-响应头"}},[t._v("#")]),t._v(" 协商缓存的 header 参数（响应头）")]),t._v(" "),i("div",{staticClass:"custom-block danger"},[i("p",{staticClass:"custom-block-title"},[t._v("重点")]),t._v(" "),i("p",[t._v("协商缓存都是由服务器来确定缓存资源是否可用的，所以客户端与服务器端要通过某种标识来进行通信，从而让服务器判断请求资源是否可以缓存访问。")])]),t._v(" "),i("ul",[i("li",[i("p",[t._v("Last-Modified/If-Modified-Since：二者的值都是 GMT 格式的时间字符串")]),t._v(" "),i("ul",[i("li",[i("ol",[i("li",[t._v("浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，在 respone 的 header 加上 Last-Modified 的 header，这个 header 表示这个资源在服务器上的最后修改时间")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"2"}},[i("li",[t._v("浏览器再次跟服务器请求这个资源时，在 request 的 header 上加上 If-Modified-Since 的 header，这个 header 的值就是上一次请求时返回的 Last-Modified 的值。")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"3"}},[i("li",[t._v("服务器再次收到资源请求时，根据浏览器传过来 If-Modified-Since 和资源在服务器上的最后修改时间判断资源是否有变化，如果没有变化则返回 304 Not Modified，但是不会返回资源内容；如果有变化，就正常返回资源内容。当服务器返回 304 Not Modified 的响应时，response header 中不会再添加 Last-Modified 的 header,因为既然资源没有变化，那么 Last-Modified 也就不会改变，这是服务器返回 304 时的 response header。")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"4"}},[i("li",[t._v("浏览器收到 304 的响应后，就会从缓存中加载资源。")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"5"}},[i("li",[t._v("如果协商缓存没有命中，浏览器直接从服务器加载资源时，Last-Modified 的 Header 在重新加载的时候会被更新，下次请求时，If-Modified-Since 会启用上次返回的 Last-Modified 值。")])])])])]),t._v(" "),i("li",[i("p",[t._v("Etag/If-None-Match")]),t._v(" "),i("ul",[i("li",[t._v("这两个值是由服务器生成的每个资源的唯一标识字符串，只要资源有变化就这个值就会改变。")]),t._v(" "),i("li",[t._v("其判断过程与 Last-Modified/If-Modified-Since 类似。")])])]),t._v(" "),i("li",[i("p",[t._v("既生 Last-Modified 何生 Etag")]),t._v(" "),i("ul",[i("li",[i("ol",[i("li",[t._v("HTTP1.1 中 Etag 的出现主要是为了解决几个 Last-Modified 比较难解决的问题。")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"2"}},[i("li",[t._v("一些文件也许会周期性的更改，但是他的内容并不改变（仅仅改变的修改时间），这个时候我们并不希望客户端认为这个文件被修改了，而重新 GET。")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"3"}},[i("li",[t._v("某些文件修改非常频繁，比如在秒以下的时间内进行修改，（比方说 1s 内修改了 N 次），If-Modified-Since 能检测到的粒度是 S 级的，这种修改无法判断（或者说 UNIX 记录 MTIME 只能精确到秒）；")])])]),t._v(" "),i("li",[i("ol",{attrs:{start:"4"}},[i("li",[t._v("某些服务器不能精确的得到文件的最后修改时间。")])])])])]),t._v(" "),i("li",[i("p",[t._v("小结：")]),t._v(" "),i("ul",[i("li",[t._v("利用 Etag 能够更加准确的控制缓存，因为 Etag 是服务器自动生成或者由开发者生成的对应资源在服务器端的唯一标识符。")])])])])])}),[],!1,null,null,null);a.default=l.exports}}]);