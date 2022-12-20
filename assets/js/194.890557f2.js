(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{487:function(t,e,o){"use strict";o.r(e);var a=o(13),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"web-上下文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-上下文"}},[t._v("#")]),t._v(" Web 上下文")]),t._v(" "),e("h2",{attrs:{id:"_1-webcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-webcontext"}},[t._v("#")]),t._v(" 1）"),e("code",[t._v("WebContext")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/context/WebContext.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebContext"),e("OutboundLink")],1),t._v(" 是处理任何框架的 HTTP 请求和响应的抽象。")]),t._v(" "),e("p",[t._v("它用于处理：")]),t._v(" "),e("ul",[e("li",[t._v("通过检索参数、属性、头、方法、远程地址、服务器名称、服务器端口、服务器体系、路径、协议、cookie、完整 URL、内容来发送 HTTP 请求")]),t._v(" "),e("li",[t._v("通过设置内容类型、头和 cookie 来控制 HTTP 响应。")])]),t._v(" "),e("p",[t._v("它的实现因 "),e("em",[t._v("pac4j")]),t._v(" 的实现而异。")]),t._v(" "),e("p",[t._v("例如，JEE 应用程序有 "),e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/context/JEEContext.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("JEEContext"),e("OutboundLink")],1),t._v("，Play 应用程序有 "),e("code",[t._v("PlayWebContext")]),t._v(" 等。")]),t._v(" "),e("h2",{attrs:{id:"_2-webcontextfactory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-webcontextfactory"}},[t._v("#")]),t._v(" 2）"),e("code",[t._v("WebContextFactory")])]),t._v(" "),e("p",[t._v("对于给定的 framework/"),e("em",[t._v("pac4j")]),t._v(" 实现，通常会反复实例化相同类型的 web 上下文。不过，当你想要实例化另一个 "),e("code",[t._v("WebContext")]),t._v(" 时，也存在一些边缘情况。")]),t._v(" "),e("p",[t._v("这由 "),e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/context/WebContextFactory.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebContextFactory"),e("OutboundLink")],1),t._v(" 控制。")]),t._v(" "),e("p",[t._v("与 "),e("code",[t._v("WebContext")]),t._v(" 一样，它的实现也因 "),e("em",[t._v("pac4j")]),t._v(" 的实现而不同。")]),t._v(" "),e("p",[t._v("例如，有一个 "),e("code",[t._v("JEEContextFactory.INSTANCE")]),t._v(" 为 JEE 应用程序实例化 "),e("code",[t._v("JEEContext")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://www.pac4j.org/5.6.x/docs/web-context.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);