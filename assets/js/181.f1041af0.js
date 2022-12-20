(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{473:function(t,a,e){"use strict";e.r(a);var r=e(13),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自定义设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义设置"}},[t._v("#")]),t._v(" 自定义设置")]),t._v(" "),a("p",[a("em",[t._v("pac4j")]),t._v(" 附带了一组满足各种需求的庞大组件，因此在进行任何定制之前，你应该仔细阅读"),a("RouterLink",{attrs:{to:"/v5.6/clients.html"}},[t._v("客户端")]),t._v("、"),a("RouterLink",{attrs:{to:"/v5.6/authenticators.html"}},[t._v("认证器")]),t._v("和"),a("RouterLink",{attrs:{to:"/v5.6/authorizers.html"}},[t._v("授权者")]),t._v("页面，以检查已经提供的内容。")],1),t._v(" "),a("h2",{attrs:{id:"_1-自定义认证-授权组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-自定义认证-授权组件"}},[t._v("#")]),t._v(" 1）自定义认证/授权组件：")]),t._v(" "),a("p",[t._v("确保清楚了解不同组件的作用：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/client/Client.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Client"),a("OutboundLink")],1),t._v(" 是一个完整的登录过程：它对界面是间接的（"),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/client/IndirectClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("IndirectClient"),a("OutboundLink")],1),t._v("），对 web服 务是直接的（"),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/client/DirectClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("DirectClient"),a("OutboundLink")],1),t._v("）。它重定向到认证提供者（仅限间接客户端），提取用户凭据，验证用户凭据，并为经过认证的用户创建用户配置文件")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/redirect/RedirectionActionBuilder.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("RedirectionActionBuilder"),a("OutboundLink")],1),t._v(" 将用户重定向到认证提供者进行登录（间接客户端）")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/extractor/CredentialsExtractor.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("CredentialsExtractor"),a("OutboundLink")],1),t._v(" 从 HTTP 请求（间接和直接客户端）中提取用户凭据")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/authenticator/Authenticator.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Authenticator"),a("OutboundLink")],1),t._v(" 验证用户凭据（间接和直接客户端）")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/creator/ProfileCreator.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProfileCreator"),a("OutboundLink")],1),t._v(" 为经过认证的用户（间接和直接客户端）创建用户配置文件")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/authorizer/Authorizer.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Authorizer"),a("OutboundLink")],1),t._v(" 允许基于用户配置文件或 web 上下文进行访问")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/matching/Matcher.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Matcher"),a("OutboundLink")],1),t._v(" 定义安全性是否必须应用于 web 上下文")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/generator/AuthorizationGenerator.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("AuthorizationGenerator"),a("OutboundLink")],1),t._v(" 为给定的用户配置文件生成适当的角色和权限。")])]),t._v(" "),a("p",[t._v("覆盖或创建新组件应该很简单。")]),t._v(" "),a("p",[t._v("然而，构建 "),a("code",[t._v("Client")]),t._v(" 需要额外的努力。注意：")]),t._v(" "),a("ul",[a("li",[t._v("你确实需要了解你希望支持哪种身份验证机制：是针对界面（凭据只提供一次，认证几乎总是在外部认证提供者处进行）还是针对 web 服务（每个请求都会传递凭据）")]),t._v(" "),a("li",[t._v("所有客户端都应实现 "),a("code",[t._v("IndirectClient")]),t._v(" 或 "),a("code",[t._v("DirectClient")]),t._v(" 基类，并定义适当的 "),a("code",[t._v("RedirectionActionBuilder")]),t._v("、"),a("code",[t._v("CredentialExtractor")]),t._v("、"),a("code",[t._v("Authenticator")]),t._v(" 和 "),a("code",[t._v("ProfileCreator")]),t._v("（以及可选的 "),a("code",[t._v("LogoutActionBuilder")]),t._v("）")]),t._v(" "),a("li",[t._v("可能需要创建新的 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/Credentials.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Credentials"),a("OutboundLink")],1),t._v(" 类型（如果它不是由 "),a("code",[t._v("TokenCredentials")]),t._v(" 设计的简单字符串或由 "),a("code",[t._v("UsernamePasswordCredentials")]),t._v(" 指定的用户名/密码）。这些新凭据可能继承自受支持协议的基本凭据（如 "),a("code",[t._v("OAuthCredentials")]),t._v("）")]),t._v(" "),a("li",[t._v("通常，为新客户端创建新的配置文件（无论该配置文件是否具有特定数据）以能够区分所有用户配置文件是一种良好的做法。新的用户配置文件当然应该继承自协议支持的基本配置文件，如 "),a("code",[t._v("OAuth20Profile")]),t._v("。至少，它必须继承自 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/CommonProfile.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("CommonProfile"),a("OutboundLink")],1),t._v("。认证提供者返回的数据可能需要转换（例如，将单个字符串转换为Java枚举），为此，需要转换器（扩展 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/converter/AttributeConverter.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("AttributeConverter"),a("OutboundLink")],1),t._v(" 的类）。转换器和返回的用户配置文件类都必须在 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/definition/ProfileDefinition.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProfileDefinition"),a("OutboundLink")],1),t._v(" 中定义。")])]),t._v(" "),a("h2",{attrs:{id:"_2-改变核心流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-改变核心流程"}},[t._v("#")]),t._v(" 2）改变核心流程：")]),t._v(" "),a("p",[t._v("更改核心流覆盖或创建新组件允许您在常规 "),a("em",[t._v("pac4j")]),t._v(" web 组件的定义逻辑边界内实现新行为。不过，在某些情况下，这可能还不够。因此，你可以决定中断流程，并通过请求一些额外的操作来更改所提供的行为。这可以通过抛出 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/exception/http/HttpAction.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("HttpAction"),a("OutboundLink")],1),t._v("（像任何异常一样）来实现，因为大多数组件都允许这样做。")]),t._v(" "),a("p",[a("strong",[t._v("示例")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExampleAuthorizer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Authorizer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAuthorized")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SessionStore")]),t._v(" sessionStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserProfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" profiles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"specificValue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRequestHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"specificHeader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FoundAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/message.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h2",{attrs:{id:"_3-自定义-web-集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-自定义-web-集成"}},[t._v("#")]),t._v(" 3）自定义 web 集成：")]),t._v(" "),a("p",[a("em",[t._v("pac4j")]),t._v(" 实现严重依赖 "),a("code",[t._v("WebContext")]),t._v(" 和 "),a("code",[t._v("SessionStore")]),t._v(" 来处理 HTTP 请求、响应和会话。这些组件的默认实现可以被覆盖或替换。")]),t._v(" "),a("p",[t._v("以及默认的 "),a("code",[t._v("ProfileManager")]),t._v("（用于保存/恢复配置文件）或 "),a("code",[t._v("GuavaStore")]),t._v("（用于在缓存中保存数据）。")]),t._v(" "),a("p",[t._v("在所有情况下，没有什么比以现有组件为例更好的了。不要犹豫，在 "),a("a",{attrs:{href:"https://groups.google.com/forum/?fromgroups#!forum/pac4j-dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("pac4j 开发邮件列表"),a("OutboundLink")],1),t._v("中提出任何问题。")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.pac4j.org/5.6.x/docs/customizations.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);