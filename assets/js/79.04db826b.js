(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{368:function(v,e,_){"use strict";_.r(e);var t=_(13),o=Object(t.a)({},(function(){var v=this,e=v._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"发行说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发行说明"}},[v._v("#")]),v._v(" 发行说明")]),v._v(" "),e("h2",{attrs:{id:"v4-0-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v4-0-3"}},[v._v("#")]),v._v(" v4.0.3:")]),v._v(" "),e("ul",[e("li",[v._v("修复 SAML 生成的证书的到期日期")]),v._v(" "),e("li",[v._v("为 OpenID Connect 协议添加了新的 "),e("code",[v._v("ValueRetriever")]),v._v(" 接口及其实现 "),e("code",[v._v("SessionStoreValueRetrieve")])]),v._v(" "),e("li",[v._v("为 OpenID Connect 协议 "),e("a",{attrs:{href:"https://tools.ietf.org/html/rfc7636",target:"_blank",rel:"noopener noreferrer"}},[v._v("RFC-7636"),e("OutboundLink")],1),v._v(" 添加了对 PKCE 的支持")]),v._v(" "),e("li",[v._v("改进了 "),e("code",[v._v("OidcProfile")]),v._v(" 中过期令牌的处理")])]),v._v(" "),e("h2",{attrs:{id:"v4-0-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v4-0-2"}},[v._v("#")]),v._v(" v4.0.2:")]),v._v(" "),e("ul",[e("li",[v._v("修复收到 SAML 注销响应时的 "),e("code",[v._v("ClassCastException")])]),v._v(" "),e("li",[v._v("将访问令牌作为 "),e("code",[v._v("GithubClient")]),v._v(" 的头发送")]),v._v(" "),e("li",[v._v("CAS 前通道注销：修复注销后的401错误")]),v._v(" "),e("li",[v._v("修复 "),e("code",[v._v("CasClient")]),v._v(" 中的默认 "),e("code",[v._v("CallbackUrlResolver")])])]),v._v(" "),e("h2",{attrs:{id:"v4-0-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v4-0-1"}},[v._v("#")]),v._v(" v4.0.1:")]),v._v(" "),e("ul",[e("li",[v._v("类型参数："),e("code",[v._v("ClientFinder")]),v._v(" 的 "),e("code",[v._v("find")]),v._v(" 方法的返回值中添加 "),e("code",[v._v("? extends Credentials")]),v._v(" 类型参数，and "),e("code",[v._v("ProfileManagerFactoryAware*")]),v._v(" 的 "),e("code",[v._v("getProfileManager")]),v._v(" 方法的返回类型中为 "),e("code",[v._v("ProfileManager")]),v._v(" 添加 "),e("code",[v._v("UserProfile")]),v._v(" 类型参数")]),v._v(" "),e("li",[v._v("为 "),e("code",[v._v("Color")]),v._v(" 添加 "),e("code",[v._v("setter")])]),v._v(" "),e("li",[v._v("拉取 "),e("code",[v._v("pac4j-saml-opensamlv3")]),v._v(" 依赖，而不是 "),e("code",[v._v("pac4j-saml")]),v._v(" 依赖")]),v._v(" "),e("li",[v._v("删除废弃的行为：通过 "),e("code",[v._v("ProfileManager")]),v._v(" 在请求或会话中检索一个 "),e("code",[v._v("CommonProfile")]),v._v("，并检索字符串作为请求的 URL")]),v._v(" "),e("li",[v._v("用于安全性的默认客户端名称参数具有一个新值（"),e("code",[v._v("force_client")]),v._v("），以避免与回调中使用的默认客户端名参数（"),e("code",[v._v("client_name")]),v._v("）冲突（旧值仍用作回退，但将被删除）")]),v._v(" "),e("li",[v._v("允许 "),e("code",[v._v("pac4j-saml")]),v._v(" 使用 REST API 存储和生成 SAML 元数据和密钥库，并提供可扩展性选项，以便可以设计和注入自定义组件以从外部管理元数据工件。- 可以控制/覆盖 SAML2 认证提供者元数据的解析。")]),v._v(" "),e("li",[v._v("处理请求所在的 "),e("code",[v._v("JEEContext")]),v._v(" 的一个奇怪用例： "),e("code",[v._v("request.getRequestURI()")]),v._v(" 返回以双斜杠开头的路径")]),v._v(" "),e("li",[v._v("当认证失败或被取消时，可以返回自定义配置文件（“静默登录”）")]),v._v(" "),e("li",[v._v("修复 CAS 注销 URL 计算（用于不带前缀的中央注销）")]),v._v(" "),e("li",[v._v("介绍 "),e("code",[v._v("WebContextFactory")]),v._v(" 概念和 "),e("code",[v._v("JEEContextFactory")]),v._v(" 实现")])]),v._v(" "),e("h2",{attrs:{id:"v4-0-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v4-0-0"}},[v._v("#")]),v._v(" v4.0.0:")]),v._v(" "),e("ul",[e("li",[v._v("改进了配置文件管理器配置")]),v._v(" "),e("li",[v._v("将 J2E 组件重命名为 JEE")]),v._v(" "),e("li",[v._v("已开始通过 Renovate 更新依赖")]),v._v(" "),e("li",[v._v("客户端可以返回任何类型的配置文件（使用自定义 "),e("code",[v._v("AuthorizationGenerator")]),v._v(" 或 "),e("code",[v._v("ProfileCreator")]),v._v("），甚至可以返回最小的用户配置文件（"),e("code",[v._v("UserProfile")]),v._v("）")]),v._v(" "),e("li",[v._v("HTTP 操作不再自动应用于 web 上下文（"),e("code",[v._v("setResponseStatus")]),v._v(" 和 "),e("code",[v._v("writeResponseContent")]),v._v(" 方法已从 WebContext 接口中删除），必须为此使用 "),e("code",[v._v("HttpActionAdapter")]),v._v("。创建多个 HTTP 操作（继承自 "),e("code",[v._v("HttpAction")]),v._v("）来处理必要的 HTTP 操作。"),e("code",[v._v("RedirectAction")]),v._v(" 被继承自 "),e("code",[v._v("RedirectionAction")]),v._v(" 的新 HTTP 操作替换。"),e("code",[v._v("redirect")]),v._v(" 方法重命名为 "),e("code",[v._v("getRedirectionAction")])]),v._v(" "),e("li",[v._v("默认情况下，除了 POST 请求外，CSRF 检查还应用于 PUT、PATCH 和 DELETE 请求")]),v._v(" "),e("li",[v._v("将 "),e("code",[v._v("SAMLMessageStorage*")]),v._v(" 类重命名为 "),e("code",[v._v("SAMLMessageStore*")]),v._v("（基于 "),e("code",[v._v("Store")]),v._v("）")]),v._v(" "),e("li",[v._v("对于 "),e("code",[v._v("Google2Client")]),v._v("，更改配置文件 URL "),e("code",[v._v("https://www.googleapis.com/plus/v1/people/me")]),v._v(" 到 "),e("code",[v._v("https://www.googleapis.com/oauth2/v3/userinfo")]),v._v("。这一变化是为关闭 Google Plus API 做准备。此更改将删除 "),e("code",[v._v("Google2Client")]),v._v(" 的 "),e("code",[v._v("birthday")]),v._v(" 和 "),e("code",[v._v("emails")]),v._v(" 属性。")]),v._v(" "),e("li",[v._v("对于 AJAX 请求，仅在请求时生成重定向URL（"),e("code",[v._v("DefaultAjaxRequestResolver")]),v._v(" 的 "),e("code",[v._v("addRedirectionUrlAsHeader")]),v._v(" 属性）")]),v._v(" "),e("li",[v._v("更新了 API 以使用 "),e("code",[v._v("Optional")]),v._v(" 替代 "),e("code",[v._v("null")])]),v._v(" "),e("li",[v._v("在 POST 请求后使用 "),e("code",[v._v('303 "See Other"')]),v._v(" 和 "),e("code",[v._v('307 "Temporary Redirect"')]),v._v(" HTTP 操作（"),e("code",[v._v("RedirectionActionHelper")]),v._v("）")]),v._v(" "),e("li",[v._v("使用 POST 方法处理原始请求的 URL")]),v._v(" "),e("li",[v._v("添加 HTTP POST 简单签名协议实现")]),v._v(" "),e("li",[v._v("正确处理多个 OIDC 客户端的状态和随机数")]),v._v(" "),e("li",[v._v("配置文件过期时，其客户端可以续订该配置文件")]),v._v(" "),e("li",[v._v("大多数 web 授权器现在都是匹配者。默认匹配器是 “securityHeaders，csrfToken”，默认授权器是 “csrfCheck”。使用 “none” 表示没有匹配者或授权者")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("FindBest")]),v._v(" 实用程序类查找最佳适配器、逻辑……")]),v._v(" "),e("li",[v._v("支持 OIDC 后通道和前通道注销")]),v._v(" "),e("li",[v._v("通过 "),e("code",[v._v("getLikeDefaultSecurityLogic")]),v._v(" 和 "),e("code",[v._v("getAllLikeDefaultSecurityLogic")]),v._v(" 方法在 "),e("code",[v._v("ProfileManager")]),v._v("（无论是否从会话）中加载配置文件，就像在 "),e("code",[v._v("DefaultSecurityLogic")]),v._v(" 中一样")]),v._v(" "),e("li",[v._v("REVERT：移除 "),e("code",[v._v("removeLogData")]),v._v(" 方法中的 ID 令牌（以前为 "),e("code",[v._v("clearSentiveData")]),v._v("）")]),v._v(" "),e("li",[e("code",[v._v("pac4j-saml")]),v._v(" 模块保存为传统的 "),e("code",[v._v("pac4j-saml-opensamlv3")]),v._v(" 模块，并升级到 JDK 11 和 OpenSAML v4")])]),v._v(" "),e("h2",{attrs:{id:"v3-9-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-9-0"}},[v._v("#")]),v._v(" v3.9.0：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("ProfileService")]),v._v(" 支持为 MongoDB、SQL、LDAP 和 CouchDB 的 JSON 序列化配置文件（而不是使用 Java 序列化）")])]),v._v(" "),e("h2",{attrs:{id:"v3-8-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-8-3"}},[v._v("#")]),v._v(" v3.8.3：")]),v._v(" "),e("ul",[e("li",[v._v("由于 "),e("a",{attrs:{href:"https://connect2id.com/blog/nimbus-jose-jwt-7-9",target:"_blank",rel:"noopener noreferrer"}},[v._v("CVE-2019-17195"),e("OutboundLink")],1),v._v("，将 "),e("code",[v._v("nimbus-jose-jwt")]),v._v(" 库升级至 7.9 版")])]),v._v(" "),e("h2",{attrs:{id:"v3-8-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-8-2"}},[v._v("#")]),v._v(" v3.8.2：")]),v._v(" "),e("ul",[e("li",[v._v("添加可自定义的 SAML 注销后 URL")]),v._v(" "),e("li",[v._v("默认情况下，SAML身份验证请求中不能包含QualifiedName")]),v._v(" "),e("li",[v._v("向 SAML 客户端添加了重放保护。")]),v._v(" "),e("li",[v._v("修复 SAML 签名验证 w.r.t WantAssertionsSigned 处理。现在始终需要签名，即使禁用了 WantAssertionsSigned。WantAssertionsSigned 现在要求对断言进行显式签名，而不是对响应进行显式签署。")]),v._v(" "),e("li",[v._v("为认证响应添加了对 SAML 制品绑定的支持。")]),v._v(" "),e("li",[v._v("在配置元数据时签名，并打开元数据生成 API 进行自定义。")]),v._v(" "),e("li",[v._v("使用 REDIRECT 绑定时，切勿使用 XMLSig对AuthnRequest 进行签名，签名是通过 Signature 查询参数完成的。")]),v._v(" "),e("li",[v._v("增加了对 LinkedIn v2 API 的支持")]),v._v(" "),e("li",[v._v("增加了对 FigShare 的支持")])]),v._v(" "),e("h2",{attrs:{id:"v3-7-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-7-0"}},[v._v("#")]),v._v(" v3.7.0：")]),v._v(" "),e("ul",[e("li",[v._v("修复 SAML SP 元数据签名")]),v._v(" "),e("li",[v._v("CAS 改进：更好的服务请求检测，支持 CAS 服务器方法参数")]),v._v(" "),e("li",[v._v("修复使用 JWT 的 CasRestProfile")]),v._v(" "),e("li",[v._v("添加 HTTP POST 简单签名协议实现")]),v._v(" "),e("li",[v._v("未定义时，基于 "),e("code",[v._v("HttpMethodMatcher")]),v._v(" 添加 "),e("code",[v._v("get")]),v._v("、"),e("code",[v._v("post")]),v._v("、"),e("code",[v._v("put")]),v._v(" 和 "),e("code",[v._v("delete")]),v._v(" 匹配器")])]),v._v(" "),e("h2",{attrs:{id:"v3-6-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-6-1"}},[v._v("#")]),v._v(" v3.6.1:")]),v._v(" "),e("ul",[e("li",[v._v("修复 Google OAuth 支持")])]),v._v(" "),e("h2",{attrs:{id:"v3-6-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-6-0"}},[v._v("#")]),v._v(" v3.6.0：")]),v._v(" "),e("ul",[e("li",[v._v("可以在SAML协议支持中设置多个authn上下文类引用")]),v._v(" "),e("li",[v._v("对于 Google2Client，从 "),e("code",[v._v("https://www.googleapis.com/plus/v1/people/me")]),v._v(" 到 "),e("code",[v._v("https://www.googleapis.com/oauth2/v3/userinfo")]),v._v("。这一变化是为关闭 Google Plus API 做准备。此更改将使 "),e("code",[v._v("birthday")]),v._v(" 属性返回 "),e("code",[v._v("null")]),v._v("，而 "),e("code",[v._v("emails")]),v._v(" 属性将解析 "),e("code",[v._v("Google2Client")]),v._v(" 的单个 "),e("code",[v._v("email")]),v._v(" 属性。")]),v._v(" "),e("li",[v._v("通过 "),e("code",[v._v("destroy")]),v._v(" 方法彻底关闭 "),e("code",[v._v("SAML2Client")])]),v._v(" "),e("li",[v._v("不清除 "),e("code",[v._v("OidcProfile")]),v._v(" 中作为敏感数据的 ID 令牌")]),v._v(" "),e("li",[v._v("改进 SAML 元数据的签名和摘要方法")]),v._v(" "),e("li",[v._v("增强 OAuth 2 通用支持")]),v._v(" "),e("li",[v._v("使用 NameID 作为 SAML SLO 支持的 SessionIndex 的回退")])]),v._v(" "),e("h2",{attrs:{id:"v3-5-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-5-0"}},[v._v("#")]),v._v(" v3.5.0：")]),v._v(" "),e("ul",[e("li",[v._v("添加了 "),e("code",[v._v("UserInfoOidcAuthenticator")]),v._v("，以根据从 OpenID Connect 登录过程接收的访问令牌对用户进行认证")]),v._v(" "),e("li",[v._v("更新了 OpenID Connect/JWT 依赖（v6）")]),v._v(" "),e("li",[v._v("已添加 "),e("code",[v._v("DirectBearerAuthClient")])]),v._v(" "),e("li",[v._v("处理了注销响应（SAML）中的 "),e("code",[v._v("inResponseTo")]),v._v(" 和 "),e("code",[v._v("RelayState")])]),v._v(" "),e("li",[v._v("将 "),e("code",[v._v("trustedClasses")]),v._v(" 添加到 "),e("code",[v._v("JavaSerializationHelper")])])]),v._v(" "),e("h2",{attrs:{id:"v3-4-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-4-0"}},[v._v("#")]),v._v(" v3.4.0：")]),v._v(" "),e("ul",[e("li",[v._v("增加了授权器组合的能力（连接或分离）")]),v._v(" "),e("li",[v._v("SAML SLO 支持 SOAP（仅限入站）、HTTP-POST 和 HTTP-Redirect 绑定")]),v._v(" "),e("li",[v._v("OpenID Connect 的改进：从认证服务器支持多种 JWS 算法，检索 Keyclock 角色")])]),v._v(" "),e("h2",{attrs:{id:"v3-3-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-3-0"}},[v._v("#")]),v._v(" v3.3.0：")]),v._v(" "),e("ul",[e("li",[v._v("改进 SAML 支持：始终返回一个默认密钥，该密钥为私有密钥，在 SP 元数据中添加 SingleLogoutService URL，使本地和中央注销协同工作，允许将属性映射到新名称")]),v._v(" "),e("li",[v._v("对于 OAuth、OpenID Connect 和 SAML 协议，你自己的 "),e("code",[v._v("StateGenerator")]),v._v(" 可以覆盖默认状态生成")]),v._v(" "),e("li",[v._v("SAML 认证模块中的自定义 OpenSAML 引导")]),v._v(" "),e("li",[v._v("X509 证书支持")])]),v._v(" "),e("h2",{attrs:{id:"v3-2-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-2-0"}},[v._v("#")]),v._v(" v3.2.0：")]),v._v(" "),e("ul",[e("li",[v._v("允许设置 "),e("code",[v._v("GenericOAuth20Client")]),v._v(" 的 "),e("code",[v._v("profileId")])]),v._v(" "),e("li",[v._v("修复了 OAuth v2.0 支持中的 "),e("code",[v._v("setConfiguration")]),v._v(" 方法名称")]),v._v(" "),e("li",[v._v("在SAML SP 元数据中可选签名或指定请求的属性")]),v._v(" "),e("li",[v._v("更新至 Scribejava v5.6.0")]),v._v(" "),e("li",[v._v("添加了对 HiOrg-Server（OAuth）的支持")]),v._v(" "),e("li",[v._v("修改了用于提取用户配置文件的 OAuth 错误处理。现在，将引发异常，而不是返回空配置文件")]),v._v(" "),e("li",[v._v("修复A "),e("code",[v._v("HiOrg-Server")]),v._v(" 名称和 "),e("code",[v._v("Access-Control-Allow-Credentials")]),v._v(" 头验证")])]),v._v(" "),e("h2",{attrs:{id:"v3-1-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-1-0"}},[v._v("#")]),v._v(" v3.1.0：")]),v._v(" "),e("ul",[e("li",[v._v("为用户配置文件添加了属性合并功能：具有相同名称和集合类型值的多个属性可以合并为一个属性")]),v._v(" "),e("li",[v._v("增加了微博、QQ和微信（OAuth）支持")])]),v._v(" "),e("h2",{attrs:{id:"v3-0-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-0-3"}},[v._v("#")]),v._v(" v3.0.3：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("AzureAdClient")]),v._v(" 默认使用 "),e("code",[v._v("PathParameterCallbackUrlResolver")])])]),v._v(" "),e("h2",{attrs:{id:"v3-0-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-0-2"}},[v._v("#")]),v._v(" v3.0.2：")]),v._v(" "),e("ul",[e("li",[v._v("正确处理 J2EContext 的 "),e("code",[v._v("setResponseStatus")]),v._v(" 方法中的所有 HTTP 代码")]),v._v(" "),e("li",[v._v("将 "),e("code",[v._v("setExcludedPath")]),v._v("和 "),e("code",[v._v("setExcludedPattern")]),v._v(" 方法添加到 "),e("code",[v._v("PathMatcher")]),v._v(" 类（用于 Shiro）")])]),v._v(" "),e("h2",{attrs:{id:"v3-0-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-0-1"}},[v._v("#")]),v._v(" v3.0.1：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("ProfileHelper.flatIntoOneProfile")]),v._v(" 方法返回 "),e("code",[v._v("AnonymousProfile")]),v._v("（而不是空），如果它是唯一的配置文件")])]),v._v(" "),e("h2",{attrs:{id:"v3-0-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v3-0-0"}},[v._v("#")]),v._v(" v3.0.0：")]),v._v(" "),e("ul",[e("li",[v._v("在 OpenID Connect 注销中处理 AJAX 请求")]),v._v(" "),e("li",[v._v("所有会话交互都通过SessionStore完成（从WebContext中检索）")]),v._v(" "),e("li",[v._v("所有异常（特别是 HttpAction）都是 "),e("code",[v._v("unchecked")])]),v._v(" "),e("li",[v._v("升级依赖")]),v._v(" "),e("li",[v._v("增加了“多租户”功能：你可以为同一个客户端动态定义多个回调 URL，除了 SAML，你需要的 "),e("code",[v._v("SAML2Client")]),v._v(" 数量与所需的不同回调 URL 数量一样多")]),v._v(" "),e("li",[e("code",[v._v("CallbackUrlResolver")]),v._v(" 基于计算 URL 的 "),e("code",[v._v("UrlResolver")]),v._v(" 计算回调 URL（使用查询参数或路径参数定义客户端）")]),v._v(" "),e("li",[v._v("你可以在逻辑级别定义错误（页面）URL 以处理不期待的异常")]),v._v(" "),e("li",[v._v("SAML Keystore 别名可以通过属性定义；SAML 日期比较现在基于 UTC")]),v._v(" "),e("li",[v._v("未在凭据级别设置客户端名称")]),v._v(" "),e("li",[e("code",[v._v("AzureAdProfile")]),v._v(" 的用户名是 UPN")]),v._v(" "),e("li",[v._v("生成发布时间，JWT 可以使用到期日期")]),v._v(" "),e("li",[v._v("OpenID Connect 用户配置文件可能已过期")]),v._v(" "),e("li",[v._v("在 J2EContext 中，以不区分大小写的方式检查头名称")]),v._v(" "),e("li",[v._v("支持 "),e("code",[v._v("javax.faces.partial.ajax")]),v._v(" 请求的 AJAX 参数")]),v._v(" "),e("li",[v._v("如果配置中仅定义了一个客户端，则将其用作安全和回调端点上的回退")])]),v._v(" "),e("p",[e("em",[v._v("较老的发行说明已删除。")])]),v._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://www.pac4j.org/4.0.x/docs/release-notes.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("原文链接"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);