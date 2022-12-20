(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{317:function(t,a,e){"use strict";e.r(a);var r=e(13),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"回调端点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回调端点"}},[t._v("#")]),t._v(" 回调端点")]),t._v(" "),a("p",[t._v("为了处理 web 应用程序的认证，需要回调端点来接收来自认证服务器的回调调用并完成登录过程。")]),t._v(" "),a("p",[t._v("对于间接客户端（如 Facebook），用户将被重定向到外部认证提供者进行登录，然后返回回调端点上的应用程序。")]),t._v(" "),a("h2",{attrs:{id:"_1-行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-行为"}},[t._v("#")]),t._v(" 1）行为")]),t._v(" "),a("p",[t._v("默认情况下，它依赖于具有以下行为的 "),a("code",[t._v("DefaultCallbackLogic")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("从当前请求中提取凭据以获取用户配置文件（从认证提供者），然后将其保存（或不保存）在 web 会话中")]),t._v(" "),a("li",[t._v("最后，用户被重定向回最初请求的 URL（或 "),a("code",[t._v("defaultUrl")]),t._v("）。")])]),t._v(" "),a("h2",{attrs:{id:"_2-选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-选项"}},[t._v("#")]),t._v(" 2）选项")]),t._v(" "),a("p",[t._v("以下选项可用于回调端点。它们可以通过 "),a("code",[t._v("setter")]),t._v("、构造函数、"),a("code",[t._v("servlet")]),t._v(" 参数等来定义，具体取决于 "),a("em",[t._v("pac4j")]),t._v(" 的实现：")]),t._v(" "),a("h3",{attrs:{id:"a-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-config"}},[t._v("#")]),t._v(" a）config")]),t._v(" "),a("p",[t._v("参阅"),a("RouterLink",{attrs:{to:"/config.html"}},[t._v("安全配置")])],1),t._v(" "),a("h3",{attrs:{id:"b-defaulturl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-defaulturl"}},[t._v("#")]),t._v(" b）defaultUrl")]),t._v(" "),a("p",[t._v("如果没有原始请求的URL，则登录后是默认 URL。它是一个可选参数，默认情况下等于 "),a("code",[t._v("/")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"c-renewsession"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-renewsession"}},[t._v("#")]),t._v(" c）renewSession")]),t._v(" "),a("p",[t._v("它指示登录后是否必须刷新 web 会话，以避免会话劫持。它是一个可选参数，默认为 "),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"d-defaultclient"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d-defaultclient"}},[t._v("#")]),t._v(" d）defaultClient")]),t._v(" "),a("p",[t._v("它定义了如果 URL 上没有提供客户端，用于完成登录流程的默认客户端。它是一个可选参数，默认情况下未定义。")]),t._v(" "),a("h2",{attrs:{id:"_3-注销"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-注销"}},[t._v("#")]),t._v(" 3）注销")]),t._v(" "),a("p",[t._v("使用"),a("RouterLink",{attrs:{to:"/logout-endpoint.html"}},[t._v("注销端点")]),t._v("，你可以触发本地和中央注销过程。然而，如果在认证提供程者中发生了“单点注销”过程，则该回调端点将接收注销请求（带有某些会话密钥）以销毁应用程序会话。")],1),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.pac4j.org/docs/callback-endpoint.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=_.exports}}]);