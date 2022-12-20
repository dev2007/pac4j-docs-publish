(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{343:function(t,r,a){"use strict";a.r(r);var e=a(13),o=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"认证器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#认证器"}},[t._v("#")]),t._v(" 认证器")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/v4.0/clients/http.html"}},[t._v("HTTP 客户端")]),t._v("需要"),r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/authenticator/Authenticator.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("认证器"),r("OutboundLink")],1),t._v("来验证凭据。")],1),t._v(" "),r("p",[t._v("此 "),r("code",[t._v("Authenticator")]),t._v(" 接口只有一个方法："),r("code",[t._v("void validate(C credentials, WebContext context) throws HttpAction, CredentialsException")]),t._v("。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/Credentials.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("凭据"),r("OutboundLink")],1),t._v("可以有两种：")]),t._v(" "),r("ul",[r("li",[t._v("用户名/密码的是 "),r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/UsernamePasswordCredentials.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("UsernamePasswordCredentials"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("令牌或标识符的是 "),r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/TokenCredentials.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("TokenCredentials"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/exception/http/HttpAction.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("HttpAction"),r("OutboundLink")],1),t._v(" 允许你中断凭据验证并触发特定的 HTTP 操作（如临时重定向）。")]),t._v(" "),r("p",[t._v("你可以为许多身份机制使用各种 "),r("code",[t._v("Authenticator")]),t._v("：")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/v4.0/authenticators/ldap.html"}},[t._v("LDAP")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/v4.0/authenticators/sql.html"}},[t._v("SQL")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/v4.0/authenticators/jwt.html"}},[t._v("JWT")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/v4.0/authenticators/mongodb.html"}},[t._v("MongoDB")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/v4.0/authenticators/couchdb.html"}},[t._v("CouchDB")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/v4.0/authenticators/ip.html"}},[t._v("IP address")])],1),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/v4.0/authenticators/rest.html"}},[t._v("REST API")])],1)]),t._v(" "),r("h2",{attrs:{id:"_1-处理性能问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-处理性能问题"}},[t._v("#")]),t._v(" 1）处理性能问题")]),t._v(" "),r("p",[t._v("对于直接 HTTP 客户端，每个请求都会传递和验证凭据，这可能会导致性能问题（对底层认证系统的调用过多）。因此，强烈建议使用缓存。")]),t._v(" "),r("p",[t._v("这可以使用 "),r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/authenticator/LocalCachingAuthenticator.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("LocalCachingAuthenticator"),r("OutboundLink")],1),t._v(" 类（在 "),r("code",[t._v("pac4j")]),t._v(" 核心模块中可用）来完成，该类根据提供的凭据缓存生成的用户配置文件，从而可以在认证系统上进行备用凭据验证。")]),t._v(" "),r("p",[r("strong",[t._v("示例")]),t._v("：")]),t._v(" "),r("div",{staticClass:"language-java line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalCachingAuthenticator")]),t._v(" authent "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LocalCachingAuthenticator")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JwtAuthenticator")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("secret"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MINUTES")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[t._v("默认情况下，"),r("code",[t._v("LocalCachingAuthenticator")]),t._v(" 使用 Guava 作为其内部"),r("RouterLink",{attrs:{to:"/v4.0/store.html"}},[t._v("存储")]),t._v("，但你可以通过 "),r("code",[t._v("setStore")]),t._v(" 方法提供自己的存储。")],1),t._v(" "),r("div",{staticClass:"custom-block danger"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("请注意，此 "),r("code",[t._v("LocalCachingAuthenticator")]),t._v(" 需要额外的 "),r("code",[t._v("guava")]),t._v(" 依赖。")])]),t._v(" "),r("h2",{attrs:{id:"_2-passwordencoder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-passwordencoder"}},[t._v("#")]),t._v(" 2）"),r("code",[t._v("PasswordEncoder")])]),t._v(" "),r("p",[t._v("关于 IP 地址认证器，不需要密码保护。关于 LDAP 认证器，密码保护由系统本身处理。")]),t._v(" "),r("p",[t._v("但对于 MongoDB 和 SQL 认证器，密码保护必须由 "),r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/password/PasswordEncoder.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("PasswordEncoder"),r("OutboundLink")],1),t._v(" 显示处理，它可以将明文密码编码为加密密码，并检查明文密码是否与已编码的密码匹配。")]),t._v(" "),r("p",[t._v("必须通过构造函数或 "),r("code",[t._v("setPasswordEncoder(passwordEncoder)")]),t._v(" 方法为这两个认证器定义密码编码器。")]),t._v(" "),r("p",[t._v("有三种 "),r("code",[t._v("PasswordEncoder")]),t._v(" 实现：")]),t._v(" "),r("ul",[r("li",[t._v("Spring Security Crypto "),r("a",{attrs:{href:"https://github.com/spring-projects/spring-security/blob/master/crypto/src/main/java/org/springframework/security/crypto/password/PasswordEncoder.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("PasswordEncoder"),r("OutboundLink")],1),t._v(" 的包装器："),r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/password/SpringSecurityPasswordEncoder.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("SpringSecurityPasswordEncode"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Apache Shiro "),r("a",{attrs:{href:"https://shiro.apache.org/static/1.4.0/apidocs/org/apache/shiro/authc/credential/PasswordService.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PasswordService"),r("OutboundLink")],1),t._v(" 的包装器："),r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/password/ShiroPasswordEncoder.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("ShiroPasswordEncoder"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("一个基于 jBCrypt 库："),r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/credentials/password/JBCryptPasswordEncoder.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("JBCryptPasswordEncoder"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("div",{staticClass:"custom-block danger"},[r("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),r("p",[t._v("请注意，"),r("code",[t._v("SpringSecurityPasswordEncoder")]),t._v(" 需要额外的 "),r("code",[t._v("spring-security-crypto")]),t._v(" 依赖，"),r("code",[t._v("ShiroPasswordEncode")]),t._v(" 需要 "),r("code",[t._v("shiro-core")]),t._v(" 依赖项，"),r("code",[t._v("JBCryptPasswordEncoder")]),t._v(" 需要 "),r("code",[t._v("jBCrypt")]),t._v(" 依赖项。")])]),t._v(" "),r("h2",{attrs:{id:"_3-profilecreator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-profilecreator"}},[t._v("#")]),t._v(" 3）"),r("code",[t._v("ProfileCreator")])]),t._v(" "),r("p",[t._v("事实上，在 HTTP 客户端中，除了验证凭据（"),r("code",[t._v("Authenticator")]),t._v("）的方式之外，还可以定义通过 "),r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/creator/ProfileCreator.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("ProfileCreator"),r("OutboundLink")],1),t._v(" 创建用户配置文件的方式。")]),t._v(" "),r("p",[t._v("在实践中：")]),t._v(" "),r("ul",[r("li",[t._v("所有可用的认证器在验证凭据时创建特定的用户配置文件，并将其保存在当前凭据中")]),t._v(" "),r("li",[t._v("默认情况下，所有客户端都配置了 "),r("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/creator/AuthenticatorProfileCreator.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("AuthenticatorProfileCreator"),r("OutboundLink")],1),t._v("，后者从当前凭据中检索用户配置文件并将其返回。")])]),t._v(" "),r("p",[t._v("因此，即使提供特定的 "),r("code",[t._v("ProfileCreator")]),t._v(" 是完全可行的，它也可以开箱即用。")]),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://www.pac4j.org/4.0.x/docs/authenticators.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=o.exports}}]);