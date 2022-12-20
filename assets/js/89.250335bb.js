(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{379:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[t._v("#")]),t._v(" MongoDB")]),t._v(" "),a("p",[a("em",[t._v("pac4j")]),t._v(" 允许你验证用户名/密码，并在 MongoDB 数据库上创建、更新和删除用户。")]),t._v(" "),a("h2",{attrs:{id:"_1-依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-依赖"}},[t._v("#")]),t._v(" 1）依赖")]),t._v(" "),a("p",[t._v("你需要使用以下模块："),a("code",[t._v("pac4j-mongo")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("示例（Maven依赖项）")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.pac4j"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pac4j-mongo"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${pac4j.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"_2-mongoprofileservice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mongoprofileservice"}},[t._v("#")]),t._v(" 2）"),a("code",[t._v("MongoProfileService")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-mongo/src/main/java/org/pac4j/mongo/profile/service/MongoProfileService.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoProfileService"),a("OutboundLink")],1),t._v(" 能允许你用于：")]),t._v(" "),a("ul",[a("li",[t._v("验证 MongoDB 数据库上的用户名/密码（可以将其定义为处理 "),a("code",[t._v("UsernamePasswordCredentials")]),t._v(" 的 HTTP 客户端的认证器）")]),t._v(" "),a("li",[t._v("在 MongoDB 数据库中创建、更新或删除用户。")])]),t._v(" "),a("p",[t._v("它与 "),a("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-mongo/src/main/java/org/pac4j/mongo/profile/MongoProfile.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoProfile"),a("OutboundLink")],1),t._v(" 一同工作。")]),t._v(" "),a("p",[t._v("它从 "),a("code",[t._v("com.mongodb.MongoClient")]),t._v(" 构建。")]),t._v(" "),a("p",[a("strong",[t._v("示例")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MongoClient")]),t._v(" mongoClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MongoClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MongoProfileService")]),t._v(" mongoProfileService "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MongoProfileService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mongoClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("用户在 "),a("code",[t._v("users")]),t._v(" 集合中的 "),a("code",[t._v("users")]),t._v(" 数据库中进行管理，但两者都可以通过 "),a("code",[t._v("setUsersDatabase(String)")]),t._v(" 和 "),a("code",[t._v("setUsersCollection(String)")]),t._v(" 方法进行更改。以及使用 "),a("code",[t._v("setIdAttribute")]),t._v("、"),a("code",[t._v("setUsernameAttribute")]),t._v(" 和 "),a("code",[t._v("setPasswordAttribute")]),t._v(" 方法设置 id、用户名和密码属性名称。")]),t._v(" "),a("ul",[a("li",[t._v("每个属性都显式保存在特定属性中，并且所有这些属性都通过 "),a("code",[t._v("setAttributes")]),t._v(" 方法定义为用逗号分隔的名称列表（这是自 1.9 版以来存在的传统模式）")]),t._v(" "),a("li",[t._v("或者将整个用户配置文件序列化并保存在 "),a("code",[t._v("serializedprofile")]),t._v(" 属性中。")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("从 3.x 系列中的 v3.9.0、4.x 系列中的 v4.2.0 和 v5.0 开始，"),a("code",[t._v("serializedprofile")]),t._v(" 是用 JSON 编写的，而不是使用 Java 序列化。")])]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.pac4j.org/4.5.x/docs/authenticators/mongodb.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);