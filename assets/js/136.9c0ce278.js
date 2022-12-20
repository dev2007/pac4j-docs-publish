(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{426:function(t,a,s){"use strict";s.r(a);var n=s(13),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),a("p",[a("em",[t._v("pac4j")]),t._v(" 允许你通过 HTTP 机制登录（如基本认证或表单传递）。")]),t._v(" "),a("p",[t._v("HTTP  客户端需要定义一个"),a("RouterLink",{attrs:{to:"/v5.7/authenticators.html"}},[t._v("认证器")]),t._v("来处理凭据验证。")],1),t._v(" "),a("p",[t._v("除了具有默认 "),a("code",[t._v("X509Authenticator")]),t._v(" 的 "),a("code",[t._v("X509Client")]),t._v("，它从 X509 证书的 "),a("code",[t._v("subjectDN")]),t._v(" 中提取标识符。")]),t._v(" "),a("h2",{attrs:{id:"_1-依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-依赖"}},[t._v("#")]),t._v(" 1）依赖")]),t._v(" "),a("p",[t._v("你需要使用以下模块："),a("code",[t._v("pac4j-http")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.pac4j"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pac4j-http"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${pac4j.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"_2-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-客户端"}},[t._v("#")]),t._v(" 2）客户端")]),t._v(" "),a("p",[t._v("你可以使用以下客户端，具体取决于凭据是什么以及它们在 HTTP 请求中的传递方式：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("凭据")]),t._v(" "),a("th",[t._v("客户端")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("通过表单发送用户名/密码")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-http/src/main/java/org/pac4j/http/client/indirect/FormClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("FormClient"),a("OutboundLink")],1),t._v("（间接客户端）"),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-http/src/main/java/org/pac4j/http/client/direct/DirectFormClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("DirectFormClient"),a("OutboundLink")],1),t._v("（直接客户端）")])]),t._v(" "),a("tr",[a("td",[t._v("通过基本认证发送用户名/密码")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-http/src/main/java/org/pac4j/http/client/indirect/IndirectBasicAuthClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("IndirectBasicAuthClient"),a("OutboundLink")],1),t._v("（间接客户端）"),a("br"),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-http/src/main/java/org/pac4j/http/client/direct/DirectBasicAuthClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("DirectBasicAuthClient"),a("OutboundLink")],1),t._v("（直接客户端）")])]),t._v(" "),a("tr",[a("td",[t._v("作为 cookie 值发送")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-http/src/main/java/org/pac4j/http/client/direct/CookieClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("CookieClient"),a("OutboundLink")],1),t._v("（直接客户端）")])]),t._v(" "),a("tr",[a("td",[t._v("作为 HTTP 头的值发送")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-http/src/main/java/org/pac4j/http/client/direct/HeaderClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("HeaderClient"),a("OutboundLink")],1),t._v("（直接客户端）")])]),t._v(" "),a("tr",[a("td",[t._v("作为 Authorization 头的值发送，值以 “Bearer ” 开头")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-http/src/main/java/org/pac4j/http/client/direct/DirectBearerAuthClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("DirectBearerAuthClient"),a("OutboundLink")],1),t._v("（直接客户端）")])]),t._v(" "),a("tr",[a("td",[t._v("作为 HTTP 参数值发送")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-http/src/main/java/org/pac4j/http/client/direct/ParameterClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("ParameterClient"),a("OutboundLink")],1),t._v("（直接客户端）")])]),t._v(" "),a("tr",[a("td",[t._v("IP 地址")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-http/src/main/java/org/pac4j/http/client/direct/IpClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("IpClient"),a("OutboundLink")],1),t._v("（直接客户端）")])]),t._v(" "),a("tr",[a("td",[t._v("X509 证书")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-http/src/main/java/org/pac4j/http/client/direct/IpClient.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("X509Client"),a("OutboundLink")],1),t._v("（直接客户端）")])])])]),t._v(" "),a("p",[a("strong",[t._v("示例")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// REST authentication with JWT token passed in the url as the "token" parameter')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParameterClient")]),t._v(" parameterClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ParameterClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JwtAuthenticator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nparameterClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSupportGetRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nparameterClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSupportPostRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if the 'Authorization' header is passed with the 'Basic token' value")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeaderClient")]),t._v(" client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeaderClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Basic "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TokenCredentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// check the token and create a profile")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"goodToken"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommonProfile")]),t._v(" profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommonProfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// save in the credentials to be passed to the default AuthenticatorProfileCreator")]),t._v("\n        credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUserProfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("profile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.pac4j.org/5.0.x/docs/clients/http.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);