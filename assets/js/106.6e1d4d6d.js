(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{396:function(t,a,e){"use strict";e.r(a);var s=e(13),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安全配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全配置"}},[t._v("#")]),t._v(" 安全配置")]),t._v(" "),a("h2",{attrs:{id:"_1-config-组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-config-组件"}},[t._v("#")]),t._v(" 1）"),a("code",[t._v("Config")]),t._v(" 组件")]),t._v(" "),a("p",[t._v("在大多数 "),a("code",[t._v("pac4j")]),t._v(" 实现中，可以通过 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/config/Config.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Config"),a("OutboundLink")],1),t._v(" 对象定义安全配置。")]),t._v(" "),a("p",[t._v("它收集了所需的：")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/v4.5/clients.html"}},[t._v("客户端")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/v4.5/authenticators.html"}},[t._v("认证器")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/v4.5/authorizers.html"}},[t._v("授权器")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/v4.5/matchers.html"}},[t._v("匹配器")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/v4.5/authenticators.html#_2-PasswordEncoder"}},[t._v("密码编码")])],1)]),t._v(" "),a("p",[a("strong",[t._v("示例")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FacebookClient")]),t._v(" facebookClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FacebookClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"145278422258960"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"be21409ba8f39b5dae2a7de525484da8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TwitterClient")]),t._v(" twitterClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TwitterClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CoxUiYwQOSFDReZYdjigBA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2kAzunH5Btc4gRSaMr7D7MkyoJ5u1VzbOOzE8rBofs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParameterClient")]),t._v(" parameterClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParameterClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JwtAuthenticator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/callback"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" facebookClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" twitterClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parameterClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAuthorizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequireAnyRoleAuthorizer")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROLE_ADMIN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAuthorizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"custom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomAuthorizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addMatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"excludedPath"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExcludedPathMatcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^/facebook/notprotected\\\\.jsp$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("你也可以使用中间 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/client/Clients.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clients"),a("OutboundLink")],1),t._v(" 对象来构建 "),a("code",[t._v("Config")]),t._v(" 对象。")]),t._v(" "),a("p",[a("strong",[t._v("示例")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Clients")]),t._v(" clients "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Clients")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/callback"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" facebookClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" twitterClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parameterClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clients"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("在这个例子中，你可以为所有客户端定义：")]),t._v(" "),a("ul",[a("li",[t._v("相同的回调 URL、"),a("code",[t._v("UrlResolver")]),t._v(" 和 "),a("code",[t._v("CallbackUrlResolver")]),t._v("："),a("code",[t._v("clients.setCallbackUrl(callbackUrl)")]),t._v("、"),a("code",[t._v("clients.setUrlResolver(urlResolver)")]),t._v(" and "),a("code",[t._v("clients.setCallbackUrlResolver(callbackUrlResolver)")])]),t._v(" "),a("li",[t._v("相同的 "),a("code",[t._v("AjaxRequestResolver")]),t._v("："),a("code",[t._v("clients.setAjaxRequestResolver(ajaxRequestResolver)")])]),t._v(" "),a("li",[t._v("相同的 "),a("code",[t._v("AuthorizationGenerator")]),t._v("："),a("code",[t._v("clients.addAuthorizationGenerator(authorizationGenerator)")])])]),t._v(" "),a("h2",{attrs:{id:"_2-pac4j-config-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-pac4j-config-模块"}},[t._v("#")]),t._v(" 2）"),a("code",[t._v("pac4j-config")]),t._v(" 模块")]),t._v(" "),a("p",[a("code",[t._v("pac4j-config")]),t._v(" 模块：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.pac4j"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pac4j-config"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${pac4j.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("收集所有 "),a("em",[t._v("pac4j")]),t._v(" 设施以定义此 "),a("code",[t._v("Config")]),t._v(" 对象。目前，只有一个组件允许你从一组属性构建客户端："),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-config/src/main/java/org/pac4j/config/client/PropertiesConfigFactory.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("PropertiesConfigFactory"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("注意，在必要时必须显式声明依赖项（如果要使用 SAML，请使用 "),a("code",[t._v("pac4j-saml")]),t._v(" 模块，如果要使用 OAuth，请使用 "),a("code",[t._v("pac4j-oauth")]),t._v("模块……）")])]),t._v(" "),a("p",[a("strong",[t._v("示例（YAML dropwizard配置文件）")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pac4j")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("callbackUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /callback\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clientsProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("facebook.id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("145278422258960")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("facebook.secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" be21409ba8f39b5dae2a7de525484da8\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("saml.keystorePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("samlKeystore.jks\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("saml.keystorePassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pac4j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("passwd\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("saml.privateKeyPassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pac4j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("passwd\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("saml.identityProviderMetadataPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("metadata"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("okta.xml\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("saml.maximumAuthenticationLifetime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("saml.serviceProviderEntityId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8080/callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("client_name=SAML2Client\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("saml.serviceProviderMetadataPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("metadata.xml\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("anonymous")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fakevalue\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ldap.type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" direct\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ldap.url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ldap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//ldap.jumpcloud.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("389")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ldap.useStartTls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ldap.useSsl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ldap.dnFormat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" uid=%s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ou=Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("o=58e69adc0914b437324e7632"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dc=jumpcloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dc=com\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ldap.usersDn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ou=Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("o=58e69adc0914b437324e7632"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dc=jumpcloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dc=com\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ldap.principalAttributeId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" uid\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ldap.principalAttributes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" firstName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("lastName\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ldap.enhanceWithEntryResolver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("formClient.loginUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /login.html\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("formClient.authenticator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ldap\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("p",[t._v("以下是可用于定义客户端的属性（认证器和密码编码器）：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("可用属性")]),t._v(" "),a("th",[t._v("用途")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("encoder.spring.type")]),t._v(" ("),a("code",[t._v("bcrypt")]),t._v("、"),a("code",[t._v("noop")]),t._v("、"),a("code",[t._v("pbkdf2")]),t._v("、"),a("code",[t._v("scrypt")]),t._v(" 或 "),a("code",[t._v("standard")]),t._v(")、"),a("code",[t._v("encoder.spring.bcrypt.length")]),t._v("、"),a("code",[t._v("encoder.spring.pbkdf2.secret")]),t._v("、"),a("code",[t._v("encoder.spring.pbkdf2.iterations")]),t._v("、"),a("code",[t._v("encoder.spring.pbkdf2.hashWidth")]),t._v("、"),a("code",[t._v("encoder.spring.scrypt.cpuCost")]),t._v("、"),a("code",[t._v("encoder.spring.scrypt.memoryCost")]),t._v("、"),a("code",[t._v("encoder.spring.scrypt.parallelization")]),t._v("、"),a("code",[t._v("encoder.spring.scrypt.keyLength")]),t._v("、"),a("code",[t._v("encoder.spring.scrypt.saltLength")]),t._v(" 和 "),a("code",[t._v("encoder.spring.standard.secret")])]),t._v(" "),a("td",[t._v("根据提供的属性和命名为 "),a("code",[t._v("encoder.spring")]),t._v(" 或 "),a("code",[t._v("encoder.spring.N")]),t._v(" 的属性定义 "),a("code",[t._v("SpringPasswordEncoder")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("encoder.shiro")]),t._v("（如果不需要特定属性）、"),a("code",[t._v("encoder.shiro.generatePublicSalt")]),t._v("、"),a("code",[t._v("encoder.shiro.hashAlgorithmName")]),t._v("、"),a("code",[t._v("encoder.shiro.hashIterations")]),t._v(" 和 "),a("code",[t._v("encoder.shiro.privateSalt")])]),t._v(" "),a("td",[t._v("根据提供的属性和命名为 "),a("code",[t._v("encoder.shiro")]),t._v(" 或 "),a("code",[t._v("encoder.shiro.N")]),t._v(" 定义 "),a("code",[t._v("ShiroPasswordEncoder")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ldap.type")]),t._v("、"),a("code",[t._v("ldap.dnFormat")]),t._v("、"),a("code",[t._v("ldap.principalAttributes")]),t._v("、"),a("code",[t._v("ldap.principalAttributeId")]),t._v("、"),a("code",[t._v("ldap.principalAttributePassword")]),t._v("、"),a("code",[t._v("ldap.subtreeSearch")]),t._v("、"),a("code",[t._v("ldap.usersDn")]),t._v("、"),a("code",[t._v("ldap.userFilter")]),t._v("、"),a("code",[t._v("ldap.enhanceWithEntryResolver")]),t._v("、"),a("code",[t._v("ldap.trustCertificates")]),t._v("、"),a("code",[t._v("ldap.keystore")]),t._v("、"),a("code",[t._v("ldap.keystorePassword")]),t._v("、"),a("code",[t._v("ldap.keystoreType")]),t._v("、"),a("code",[t._v("ldap.minPoolSize")]),t._v("、"),a("code",[t._v("ldap.maxPoolSize")]),t._v("、"),a("code",[t._v("ldap.poolPassivator")]),t._v("、"),a("code",[t._v("ldap.validateOnCheckout")]),t._v("、"),a("code",[t._v("ldap.validatePeriodically")]),t._v("、"),a("code",[t._v("ldap.validatePeriod")]),t._v("、"),a("code",[t._v("ldap.failFast")]),t._v("、"),a("code",[t._v("ldap.idleTime")]),t._v("、"),a("code",[t._v("ldap.prunePeriod")]),t._v("、"),a("code",[t._v("ldap.blockWaitTime")]),t._v("、"),a("code",[t._v("ldap.url")]),t._v("、"),a("code",[t._v("ldap.useStartTls")]),t._v("、"),a("code",[t._v("ldap.connectTimeout")]),t._v("、"),a("code",[t._v("ldap.providerClass")]),t._v("、"),a("code",[t._v("ldap.allowMultipleDns")]),t._v("、"),a("code",[t._v("ldap.bindDn")]),t._v("、"),a("code",[t._v("ldap.bindCredential")]),t._v("、"),a("code",[t._v("ldap.saslRealm")]),t._v("、"),a("code",[t._v("ldap.saslMechanism")]),t._v("、"),a("code",[t._v("ldap.saslAuthorizationId")]),t._v("、"),a("code",[t._v("ldap.saslSecurityStrength")]),t._v(" 和 "),a("code",[t._v("ldap.saslQualityOfProtection")])]),t._v(" "),a("td",[t._v("基于提供的属性和名为 "),a("code",[t._v("ldap")]),t._v(" 或 "),a("code",[t._v("ldap.N")]),t._v(" 的 "),a("code",[t._v("LdapAuthenticator")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("db.dataSourceClassName")]),t._v("、"),a("code",[t._v("db.jdbcUrl")]),t._v("、"),a("code",[t._v("db.userAttributes")]),t._v("、"),a("code",[t._v("db.userIdAttribute")]),t._v("、"),a("code",[t._v("db.usernameAttribute")]),t._v("、"),a("code",[t._v("db.userPasswordAttribute")]),t._v("、"),a("code",[t._v("db.usersTable")]),t._v("、"),a("code",[t._v("db.username")]),t._v("、"),a("code",[t._v("db.password")]),t._v("、"),a("code",[t._v("db.autoCommit")]),t._v("、"),a("code",[t._v("db.connectionTimeout")]),t._v("、"),a("code",[t._v("db.idleTimeout")]),t._v("、"),a("code",[t._v("db.maxLifetime")]),t._v("、"),a("code",[t._v("db.connectionTestQuery")]),t._v("、"),a("code",[t._v("db.minimumIdle")]),t._v("、"),a("code",[t._v("db.maximumPoolSize")]),t._v("、"),a("code",[t._v("db.poolName")]),t._v("、"),a("code",[t._v("db.initializationFailTimeout")]),t._v("、"),a("code",[t._v("db.isolateInternalQueries")]),t._v("、"),a("code",[t._v("db.allowPoolSuspension")]),t._v("、"),a("code",[t._v("db.readOnly")]),t._v("、"),a("code",[t._v("db.registerMbeans")]),t._v("、"),a("code",[t._v("db.catalog")]),t._v("、"),a("code",[t._v("db.connectionInitSql")]),t._v("、"),a("code",[t._v("db.driverClassName")]),t._v("、"),a("code",[t._v("db.transactionIsolation")]),t._v("、"),a("code",[t._v("db.validationTimeout")]),t._v("、"),a("code",[t._v("db.leakDetectionThreshold")]),t._v("、"),a("code",[t._v("db.customParamKey")]),t._v("、"),a("code",[t._v("db.customParamValue")]),t._v("、"),a("code",[t._v("db.loginTimeout")]),t._v("、"),a("code",[t._v("db.dataSourceJndi")]),t._v(" 和 "),a("code",[t._v("db.passwordEncoder")])]),t._v(" "),a("td",[t._v("根据提供的属性和命名为 "),a("code",[t._v("db")]),t._v(" 或 "),a("code",[t._v("db.N")]),t._v(" 的属性定义 "),a("code",[t._v("DbAuthenticator")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("rest.url")])]),t._v(" "),a("td",[t._v("根据提供的属性和命名的 "),a("code",[t._v("rest")]),t._v(" 或 "),a("code",[t._v("rest.N")]),t._v(" 定义 "),a("code",[t._v("RestAuthenticator")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("anonymous")])]),t._v(" "),a("td",[t._v("要定义 "),a("code",[t._v("AnonymousClient")]),t._v("，将忽略该值")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("directBasicAuth.authenticator")])]),t._v(" "),a("td",[t._v("基于提供的属性定义 "),a("code",[t._v("DirectBasicAuthClient")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("saml.keystorePassword")]),t._v("、"),a("code",[t._v("saml.privateKeyPassword")]),t._v("、"),a("code",[t._v("saml.keystorePath")]),t._v("、"),a("code",[t._v("saml.identityProviderMetadataPath")]),t._v("、"),a("code",[t._v("saml.maximumAuthenticationLifetime")]),t._v("、"),a("code",[t._v("saml.serviceProviderEntityId")]),t._v("、"),a("code",[t._v("saml.serviceProviderMetadataPath")]),t._v("、"),a("code",[t._v("saml.destinationBindingType")]),t._v("、")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("saml.keystoreAlias")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("SAML2Client")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("cas.loginUrl")]),t._v("、"),a("code",[t._v("cas.protocol")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("CasClient")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oidc.type")]),t._v("（"),a("code",[t._v("google")]),t._v(" 或 "),a("code",[t._v("azure")]),t._v("）、"),a("code",[t._v("oidc.azure.tenant")]),t._v(" （用于 AzureAD tenant)、")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oidc.id, oidc.secret")]),t._v("、"),a("code",[t._v("oidc.scope")]),t._v("、"),a("code",[t._v("oidc.discoveryUri")]),t._v("、"),a("code",[t._v("oidc.useNonce")]),t._v("、"),a("code",[t._v("oidc.preferredJwsAlgorithm")]),t._v("、"),a("code",[t._v("oidc.maxClockSkew")]),t._v("、"),a("code",[t._v("oidc.clientAuthenticationMethod")]),t._v("、"),a("code",[t._v("oidc.customParamKey1")]),t._v("、"),a("code",[t._v("oidc.customParamValue1")]),t._v("、"),a("code",[t._v("oidc.customParamKey2")]),t._v("、"),a("code",[t._v("oidc.customParamValue2")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("OpenID connect")]),t._v(" 客户端")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("formClient.authenticator")]),t._v("、"),a("code",[t._v("formClient.loginUrl")]),t._v("、"),a("code",[t._v("formClient.usernameParametet")]),t._v("、"),a("code",[t._v("formClient.passwordParameter")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("FormClient")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("indirectBasicAuth.authenticator")]),t._v("、"),a("code",[t._v("indirectBasicAuth.realName")])]),t._v(" "),a("td",[t._v("基于提供的属性定义 "),a("code",[t._v("IndirectBasicAuthClient")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("facebook.id")]),t._v("、"),a("code",[t._v("facebook.secret")]),t._v("、"),a("code",[t._v("facebook.scope")]),t._v("、"),a("code",[t._v("facebook.field")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("FacebookClient")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("twitter.id")]),t._v("、"),a("code",[t._v("twitter.secret")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("TwitterClient")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("github.id")]),t._v("、"),a("code",[t._v("github.secret")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("GitHubClient")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("dropbox.id")]),t._v("、"),a("code",[t._v("dropbox.secret")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("DropBoxClient")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("windowslive.id")]),t._v("、"),a("code",[t._v("windowslive.secret")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("WindowsLiveClient")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("yahoo.id")]),t._v("、"),a("code",[t._v("yahoo.secret")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("YahooClient")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("linkedin.id")]),t._v("、"),a("code",[t._v("linkedin.secret")]),t._v("、"),a("code",[t._v("linkedin.fields")]),t._v("、"),a("code",[t._v("linkedin.scope")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("LinkedIn2Client")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("foursquare.id")]),t._v("、"),a("code",[t._v("foursquare.secret")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("FoursquareClient")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("google.id")]),t._v("、"),a("code",[t._v("google.secret")]),t._v("、"),a("code",[t._v("google.scope")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("Google2Client")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oauth2.id")]),t._v("、"),a("code",[t._v("oauth2.secret")]),t._v("、"),a("code",[t._v("oauth2.authUrl")]),t._v("、"),a("code",[t._v("oauth2.tokenUrl")]),t._v("、"),a("code",[t._v("oauth2.profileUrl")]),t._v("、"),a("code",[t._v("oauth2.profilePath")]),t._v("、"),a("code",[t._v("oauth2.profileId")]),t._v("、"),a("code",[t._v("oauth2.scope")]),t._v("、"),a("code",[t._v("oauth2.withState")]),t._v("、"),a("code",[t._v("oauth2.clientAuthenticationMethod")])]),t._v(" "),a("td",[t._v("根据提供的属性定义 "),a("code",[t._v("GenericOAuth20Client")])])])])]),t._v(" "),a("p",[t._v("注意：")]),t._v(" "),a("ul",[a("li",[t._v("你可以通过在属性末尾添加一个数字来定义同一类型的多个客户端："),a("code",[t._v("cas.loginUrl.2")]),t._v("、"),a("code",[t._v("oidc.type.5")]),t._v(" ……")]),t._v(" "),a("li",[a("code",[t._v(".passwordEncoder")]),t._v(" 属性必须设置为已定义在 "),a("code",[t._v("PasswordEncoder")]),t._v(" 中的名字，比如 "),a("code",[t._v("encoder.spring")]),t._v(" 或 "),a("code",[t._v("encoder.shiro.3")])]),t._v(" "),a("li",[a("code",[t._v(".authenticator")]),t._v(" 属性必须设置为已定义在 "),a("code",[t._v("Authenticator")]),t._v(" 中的名字，比如 "),a("code",[t._v("ldap")]),t._v(" 或 "),a("code",[t._v("db.1")]),t._v(" 或隐式值："),a("code",[t._v("testUsernamePassword")]),t._v(" 或 "),a("code",[t._v("testToken")]),t._v("（用于测试认证器）。")])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.pac4j.org/4.5.x/docs/config.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);