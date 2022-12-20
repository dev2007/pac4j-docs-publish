(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{497:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"关系型数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关系型数据库"}},[s._v("#")]),s._v(" 关系型数据库")]),s._v(" "),t("p",[t("em",[s._v("pac4j")]),s._v(" 允许你验证用户名/密码，并在 SQL 数据库上创建、更新和删除用户。")]),s._v(" "),t("h2",{attrs:{id:"_1-依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-依赖"}},[s._v("#")]),s._v(" 1）依赖")]),s._v(" "),t("p",[s._v("你需要使用以下组件："),t("code",[s._v("pac4j-sql")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("示例（Maven依赖项）")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.pac4j"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("pac4j-sql"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("${pac4j.version}"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"_2-dbprofileservice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-dbprofileservice"}},[s._v("#")]),s._v(" 2）"),t("code",[s._v("DbProfileService")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-sql/src/main/java/org/pac4j/sql/profile/service/DbProfileService.java",target:"_blank",rel:"noopener noreferrer"}},[s._v("DbProfileService"),t("OutboundLink")],1),s._v(" 允许你用于：")]),s._v(" "),t("ul",[t("li",[s._v("验证关系数据库上的用户名/密码（可以为处理 "),t("code",[s._v("UsernamePasswordCredentials")]),s._v(" 的 HTTP 客户端定义）")]),s._v(" "),t("li",[s._v("在数据库中创建、更新或删除用户。")])]),s._v(" "),t("p",[s._v("它与 "),t("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-sql/src/main/java/org/pac4j/sql/profile/DbProfile.java",target:"_blank",rel:"noopener noreferrer"}},[s._v("DbProfile"),t("OutboundLink")],1),s._v(" 一同工作。")]),s._v(" "),t("p",[s._v("它从 "),t("code",[s._v("javax.sql.DataSource")]),s._v(" 中构建。")]),s._v(" "),t("p",[t("strong",[s._v("示例")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DataSource")]),s._v(" dataSource "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JdbcConnectionPool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jdbc:h2:mem:test"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dbuser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dbpwd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DbProfileService")]),s._v(" dbProfileService "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DbProfileService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dataSource"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("必须使用以下脚本创建数据库中的用户表：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" users\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  username "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  linkedid "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  serializedprofile "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" users\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" linkedid "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("linkedid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("可以通过 "),t("code",[s._v("setUsersTable")]),s._v(" 方法更改数据库中表的名称。也可以使用 "),t("code",[s._v("setIdAttribute")]),s._v("、"),t("code",[s._v("setUsernameAttribute")]),s._v(" 和 "),t("code",[s._v("setPasswordAttribute")]),s._v(" 方法设置 id、用户名和密码列。")]),s._v(" "),t("p",[s._v("可以通过两种方式在数据库中管理用户配置文件的属性：")]),s._v(" "),t("ul",[t("li",[s._v("或者每个属性都显式保存在特定列中，并且所有这些列都通过 "),t("code",[s._v("setAttributes")]),s._v(" 方法定义为用逗号分隔的列名列表（这是自 1.9 版以来存在的传统模式）")]),s._v(" "),t("li",[s._v("或者将整个用户配置文件序列化并保存在 "),t("code",[s._v("serializedprofile")]),s._v(" 列中。")])]),s._v(" "),t("p",[s._v("此 "),t("code",[s._v("DbProfileService")]),s._v(" 支持使用特定的 "),t("RouterLink",{attrs:{to:"/authenticators.html#_2-PasswordEncoder"}},[s._v("PasswordEncoder")]),s._v(" 对数据库中的密码进行编码。")],1),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("从 3.x 系列中的 v3.9.0、4.x 系列中的 v4.2.0 和 v5.0 开始，"),t("code",[s._v("serializedprofile")]),s._v(" 是用 JSON 编写的，而不是使用 Java 序列化。")])]),s._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://www.pac4j.org/5.7.x/docs/authenticators/sql.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文链接"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);