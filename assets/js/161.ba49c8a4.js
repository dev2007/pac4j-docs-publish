(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{452:function(t,a,n){"use strict";n.r(a);var s=n(13),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[t._v("#")]),t._v(" JWT")]),t._v(" "),a("p",[a("em",[t._v("pac4j")]),t._v(" 允许你验证 JSON web 令牌。")]),t._v(" "),a("p",[t._v("JWT 支持基于出色的 "),a("a",{attrs:{href:"http://connect2id.com/products/nimbus-jose-jwt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nimbus JOSE JWT"),a("OutboundLink")],1),t._v(" 库，你应该考虑阅读"),a("a",{attrs:{href:"http://connect2id.com/products/nimbus-jose-jwt/algorithm-selection-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("算法选择指南"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_1-依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-依赖"}},[t._v("#")]),t._v(" 1）依赖")]),t._v(" "),a("p",[t._v("你需要使用以下模块："),a("code",[t._v("pac4j-jwt")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("示例（Maven依赖项）")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.pac4j"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pac4j-jwt"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${pac4j.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"_2-jwtauthenticator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-jwtauthenticator"}},[t._v("#")]),t._v(" 2）"),a("code",[t._v("JwtAuthenticator")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-jwt/src/main/java/org/pac4j/jwt/credentials/authenticator/JwtAuthenticator.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("JwtAuthenticator"),a("OutboundLink")],1),t._v(" 验证 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-jwt/src/main/java/org/pac4j/jwt/profile/JwtGenerator.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("JwtGenerator"),a("OutboundLink")],1),t._v(" 或其他系统生成的 JWT 令牌。")]),t._v(" "),a("p",[t._v("它可以处理 "),a("code",[t._v("TokenCredentials")]),t._v("，能为 HTTP 客户端定义。")]),t._v(" "),a("p",[t._v("它支持纯文本、签名和/或加密 JWT 令牌。")]),t._v(" "),a("p",[t._v("在所有情况下，"),a("code",[t._v("JwtAuthenticator")]),t._v(" 都要求 JWT 具有主题（子声明），除非你定义了 "),a("code",[t._v("identifierGenerator")]),t._v("（类型为 "),a("code",[t._v("ValueGenerator")]),t._v("）以生成标识符。否则将抛出异常。")]),t._v(" "),a("p",[t._v("如果所提供的 JWT 具有到期日期，则 "),a("code",[t._v("JwtAuthenticator")]),t._v(" 还可以配置为仅接受通过日期约束的 JWT，该标准通过 "),a("code",[t._v("JwtAuthenticator#setExpirationTime()")]),t._v(" 与 JWT 到期日期进行比较。")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("注意，出于安全原因，只有在未定义签名配置的情况下，才会接受纯文本 JWT 令牌。如果定义了一个或多个签名配置，则预期将相应地对 JWT 令牌进行签名。")])]),t._v(" "),a("h3",{attrs:{id:"a-签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-签名"}},[t._v("#")]),t._v(" a）签名")]),t._v(" "),a("p",[t._v("要处理已签名的 JWT，必须使用 "),a("code",[t._v("addSignatureConfiguration")]),t._v(" 方法定义一个或多个 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-jwt/src/main/java/org/pac4j/jwt/config/signature/SignatureConfiguration.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("SignatureConfiguration"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("有三种签名配置可供选择：使用密钥（"),a("code",[t._v("SecretSignatureConfiguration")]),t._v("）、使用 RSA 密钥对（"),a("code",[t._v("RSASignatureConfiguration")]),t._v("）或使用椭圆曲线密钥对（"),a("code",[t._v("ECSignatureConfiguration")]),t._v("）。")]),t._v(" "),a("p",[t._v("要验证已签名的 JWT，将成功尝试定义的签名配置（如果 JWT 的算法与签名配置支持的算法匹配）。")]),t._v(" "),a("h3",{attrs:{id:"b-加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-加密"}},[t._v("#")]),t._v(" b）加密")]),t._v(" "),a("p",[t._v("要处理加密的 JWT，必须使用 "),a("code",[t._v("addEncryptionConfiguration")]),t._v(" 方法定义一个或多个 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-jwt/src/main/java/org/pac4j/jwt/config/encryption/EncryptionConfiguration.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("EncryptionConfiguration"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("与签名配置一样，有三种加密配置可用：使用密钥（"),a("code",[t._v("SecretEncryptionConfiguration")]),t._v("）、使用 RSA 密钥对（"),a("code",[t._v("RSAEncryptionConfiguration")]),t._v("）或使用椭圆曲线密钥对（"),a("code",[t._v("ECEncryptionConfiguration")]),t._v("）。")]),t._v(" "),a("p",[t._v("要解密加密的 JWT，将成功尝试定义的加密配置（如果 JWT 的算法与加密配置支持的算法匹配）。")]),t._v(" "),a("p",[a("strong",[t._v("示例")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JwtAuthenticator")]),t._v(" jwtAuthenticator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JwtAuthenticator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n# define two signature configurations "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("one based on the "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("KEY2")]),t._v(" secret and the other one based on a generated "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RSA")]),t._v(" key pair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njwtAuthenticator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSignatureConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecretSignatureConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("KEY2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyPairGenerator")]),t._v(" keyGen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyPairGenerator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RSA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyPair")]),t._v(" rsaKeyPair "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keyGen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateKeyPair")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\njwtAuthenticator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSignatureConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RSASignatureConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rsaKeyPair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n# define two encryption configurations "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("one based on the "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SECRET")]),t._v(" secret and the other one based on a generated elliptic curve key pair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njwtAuthenticator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEncryptionConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecretEncryptionConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SECRET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyPairGenerator")]),t._v(" keyGen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyPairGenerator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyPair")]),t._v(" ecKeyPair "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keyGen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateKeyPair")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ECEncryptionConfiguration")]),t._v(" encConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ECEncryptionConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ecKeyPair"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nencConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAlgorithm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JWEAlgorithm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ECDH_ES_A128KW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nencConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EncryptionMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A192CBC_HS384")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\njwtAuthenticator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEncryptionConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\njwtAuthenticator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("validate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TokenCredentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myclient"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[a("code",[t._v("JwtAuthenticator")]),t._v(" 还提供两种方便的方法来处理 JWT：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("CommonProfile validateToken(final String token)")]),t._v(" 校验令牌并直接返回一个 "),a("em",[t._v("pac4j")]),t._v(" 用户配置文件。")]),t._v(" "),a("li",[a("code",[t._v("Map<String, Object> validateTokenAndGetClaims(final String token)")]),t._v(" 校验令牌并直接返回一组声明/属性，该方法与 "),a("em",[t._v("pac4j")]),t._v(" 配置文件完全无关。")])]),t._v(" "),a("h2",{attrs:{id:"c-用户配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-用户配置文件"}},[t._v("#")]),t._v(" c）用户配置文件")]),t._v(" "),a("ul",[a("li",[t._v("如果所提供的 JWT 是使用 "),a("code",[t._v("JwtGenerator")]),t._v(" 从 "),a("em",[t._v("pac4j")]),t._v(" profile（例如 "),a("code",[t._v("FacebookProfile")]),t._v("）生成的，"),a("code",[t._v("JwtAuthenticator")]),t._v(" 将重新创建相同的 profile")]),t._v(" "),a("li",[t._v("如果所提供的 JWT 是用任何其他方式创建的，"),a("code",[t._v("JwtAuthenticator")]),t._v(" 将创建 "),a("code",[t._v("JwtProfile")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"_3-jwtgenerator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-jwtgenerator"}},[t._v("#")]),t._v(" 3）"),a("code",[t._v("JwtGenerator")])]),t._v(" "),a("p",[t._v("要生成纯文本、签名和/或加密 JWT，可以使用 "),a("code",[t._v("SignatureConfiguration")]),t._v(" 或/和 "),a("code",[t._v("EncryptionConfiguration")]),t._v(" 定义的 "),a("code",[t._v("JwtGenerator")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("示例")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JwtGenerator")]),t._v(" generator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JwtGenerator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecretSignatureConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SECRET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SecretEncryptionConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SECRET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" generator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("facebookProfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("JWT 也可以使用指定的到期时间生成：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("generator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setExpirationTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-jwk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-jwk"}},[t._v("#")]),t._v(" 4）JWK")]),t._v(" "),a("p",[t._v("如果你的配置是 JSON JWK，则可以使用 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/tree/master/pac4j-jwt/src/main/java/org/pac4j/jwt/util/JWKHelper.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWKHelper"),a("OutboundLink")],1),t._v(" 的方法：")]),t._v(" "),a("ul",[a("li",[t._v("使用 "),a("code",[t._v("buildSecretFromJwk")]),t._v(" 方法从 JSON 中检索密钥")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("buildRSAKeyPairFromJwk")]),t._v(" 方法从 JSON 生成 RSA 密钥")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("buildECKeyPairFromJwk")]),t._v(" 方法从 JSON 构建椭圆曲线密钥。")])]),t._v(" "),a("p",[t._v("然后，你将能够构建适当的签名或加密配置。")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.pac4j.org/5.6.x/docs/authenticators/jwt.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);