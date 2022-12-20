(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{432:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"安全配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全配置"}},[t._v("#")]),t._v(" 安全配置")]),t._v(" "),s("p",[t._v("必须通过 "),s("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/config/Config.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Config"),s("OutboundLink")],1),t._v(" 对象定义安全配置。")]),t._v(" "),s("h2",{attrs:{id:"_1-基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础"}},[t._v("#")]),t._v(" 1）基础")]),t._v(" "),s("p",[t._v("它收集了所需的：")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/v5.0/clients.html"}},[t._v("客户端")]),t._v("（认证机制）")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/v5.0/authenticators.html"}},[t._v("认证器")]),t._v("（凭证校验）")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/v5.0/authorizers.html"}},[t._v("授权器")]),t._v("（授权检查）")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/v5.0/matchers.html"}},[t._v("匹配器")])],1)]),t._v(" "),s("p",[s("strong",[t._v("示例")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FacebookClient")]),t._v(" facebookClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FacebookClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"145278422258960"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"be21409ba8f39b5dae2a7de525484da8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TwitterClient")]),t._v(" twitterClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TwitterClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CoxUiYwQOSFDReZYdjigBA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2kAzunH5Btc4gRSaMr7D7MkyoJ5u1VzbOOzE8rBofs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/callback"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" facebookClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" twitterClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAuthorizer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequireAnyRoleAuthorizer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROLE_ADMIN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAuthorizer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomAuthorizer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMatcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"excludedPath"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExcludedPathMatcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^/facebook/notprotected\\\\.jsp$"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[s("code",[t._v("http://localhost:8080/callback")]),t._v(" 是回调端点的 URL。这仅对间接客户端是必需的，并且可以对 web 服务删除：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParameterClient")]),t._v(" parameterClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParameterClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JwtAuthenticator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parameterClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"_2-客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-客户端"}},[t._v("#")]),t._v(" 2）客户端")]),t._v(" "),s("p",[t._v("你还可以使用中间 "),s("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/client/Clients.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clients"),s("OutboundLink")],1),t._v(" 对象来构建 "),s("code",[t._v("Config")]),t._v(" 对象。")]),t._v(" "),s("p",[s("strong",[t._v("示例")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Clients")]),t._v(" clients "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Clients")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/callback"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" facebookClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" twitterClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parameterClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clients"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("在这种情况下，你可以为"),s("strong",[t._v("所有")]),t._v("客户端定义：")]),t._v(" "),s("ul",[s("li",[t._v("相同的回调 URL、"),s("code",[t._v("UrlResolver")]),t._v(" 和 "),s("RouterLink",{attrs:{to:"/v5.0/clients.html#_3-回调-URL"}},[t._v("CallbackUrlResolver")]),t._v(":"),s("code",[t._v("clients.setCallbackUrl(callbackUrl)")]),t._v("，"),s("code",[t._v("clients.setUrlResolver(urlResolver)")]),t._v(" 和 "),s("code",[t._v("clients.setCallbackUrlResolver(callbackUrlResolver)")])],1),t._v(" "),s("li",[t._v("相同的 "),s("RouterLink",{attrs:{to:"/v5.0/clients.html#_5-AJAX-请求"}},[t._v("AjaxRequestResolver")]),t._v("："),s("code",[t._v("clients.setAjaxRequestResolver(ajaxRequestResolver)")])],1),t._v(" "),s("li",[t._v("相同的 "),s("RouterLink",{attrs:{to:"/v5.0/clients.html#_2-计算角色和权限"}},[t._v("AuthorizationGenerator")]),t._v(": "),s("code",[t._v("clients.addAuthorizationGenerator(authorizationGenerator)")])],1)]),t._v(" "),s("h2",{attrs:{id:"_3-高级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-高级"}},[t._v("#")]),t._v(" 3）高级")]),t._v(" "),s("p",[t._v("你可以在 Config 级别定义安全过滤器和回调/注销端点将使用的几个组件：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("config.setProfileManagerFactory(x)")]),t._v(" 用于从 "),s("code",[t._v("WebContext")]),t._v(" 构建 "),s("RouterLink",{attrs:{to:"/v5.0/profile-manager.html"}},[t._v("ProfileManager")])],1),t._v(" "),s("li",[s("code",[t._v("config.setSessionStore(x)")]),t._v(" 用于设置一个指定的 "),s("RouterLink",{attrs:{to:"/v5.0/session-store.html"}},[t._v("SessionStore")])],1),t._v(" "),s("li",[s("code",[t._v("config.setHttpActionAdapter(x)")]),t._v(" 用于设置一个指定的 "),s("RouterLink",{attrs:{to:"/v5.0/http-action-adapter.html"}},[t._v("HttpActionAdapter")])],1),t._v(" "),s("li",[s("code",[t._v("config.setSecurityLogic(x)")]),t._v(" 用于设置一个指定的 "),s("code",[t._v("SecurityLogic")])]),t._v(" "),s("li",[s("code",[t._v("config.setCallbackLogic(x)")]),t._v(" 用于设置一个指定的 "),s("code",[t._v("CallbackLogic")])]),t._v(" "),s("li",[s("code",[t._v("config.setLogoutLogic(x)")]),t._v(" 用于设置一个指定的 "),s("code",[t._v("LogoutLogic")])]),t._v(" "),s("li",[s("code",[t._v("config.setWebContextFactory(x)")]),t._v(" 用于设置一个指定的 "),s("RouterLink",{attrs:{to:"/v5.0/web-context.html"}},[t._v("WebContextFactory")]),t._v("。")],1)]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.pac4j.org/5.0.x/docs/config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);