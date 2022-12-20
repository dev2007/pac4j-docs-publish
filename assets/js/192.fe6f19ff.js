(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{484:function(e,t,r){"use strict";r.r(t);var _=r(13),v=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"用户配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户配置文件"}},[e._v("#")]),e._v(" 用户配置文件")]),e._v(" "),t("p",[e._v("当 "),t("em",[e._v("pac4j")]),e._v(" 成功认证用户时，将从认证提供者检索其数据，并构建用户配置文件。他的配置文件包括：")]),e._v(" "),t("ul",[t("li",[e._v("一个标识符 （"),t("code",[e._v("getId()")]),e._v("）")]),e._v(" "),t("li",[e._v("属性（"),t("code",[e._v("getAttributes()")]),e._v("、 "),t("code",[e._v("getAttribute(name)")]),e._v("）")]),e._v(" "),t("li",[e._v("认证相关属性 （"),t("code",[e._v("getAuthenticationAttributes()")]),e._v("、"),t("code",[e._v("getAuthenticationAttribute(name)")]),e._v("）")]),e._v(" "),t("li",[e._v("角色 （"),t("code",[e._v("getRoles()")]),e._v("）")]),e._v(" "),t("li",[e._v("权限 （"),t("code",[e._v("getPermissions()")]),e._v("）")]),e._v(" "),t("li",[e._v("客户端名称（"),t("code",[e._v("getClientName()")]),e._v("）")]),e._v(" "),t("li",[e._v("记住我 （"),t("code",[e._v("isRemembered()")]),e._v("）")]),e._v(" "),t("li",[e._v("一个关联标识符（"),t("code",[e._v("getLinkedId()")]),e._v("）")])]),e._v(" "),t("p",[e._v("事实上，配置文件层次结构的根类是 "),t("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/BasicUserProfile.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("BasicUserProfile"),t("OutboundLink")],1),e._v("。它实现 "),t("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/UserProfile.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("UserProfile"),t("OutboundLink")],1),e._v(" 接口。")]),e._v(" "),t("p",[e._v("这适用于需要最小用户配置文件的特定用例。")]),e._v(" "),t("p",[e._v("在 "),t("em",[e._v("pac4j")]),e._v(" 环境中，必须考虑的第一个用户配置文件是 "),t("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/CommonProfile.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("CommonProfile"),t("OutboundLink")],1),e._v("，它定义了大多数配置文件中最常用的方法。")]),e._v(" "),t("p",[e._v("用户配置文件通过 "),t("RouterLink",{attrs:{to:"/v5.6/profile-manager.html"}},[e._v("配置文件管理器")]),e._v("进行管理。")],1),e._v(" "),t("h2",{attrs:{id:"_1-标识符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-标识符"}},[e._v("#")]),e._v(" 1）标识符")]),e._v(" "),t("p",[e._v("每个用户配置文件必须具有唯一标识符。因此，当构建用户配置文件时，"),t("em",[e._v("pac4j")]),e._v(" 客户端使用一个值作为配置文件标识符，该值强制来自认证提供者的唯一性。")]),e._v(" "),t("p",[e._v("这在同一认证提供者提供的配置文件中运行良好，但在使用多个认证提供者时可能会出现问题。我们可能会在从认证提供者中选择的标识符之间发生冲突。为了避免这个问题，在配置文件标识符之前添加了一个“类型化标识符”来添加配置文件类名。")]),e._v(" "),t("p",[t("strong",[e._v("示例")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[e._v("profile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 00001")]),e._v("\nprofile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getTypedId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// org.pac4j.oauth.profile.facebook.FacebookProfile#00001")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("由于标识符必须是 "),t("code",[e._v("String")]),e._v("，因此可以使用 "),t("code",[e._v("ProfileHelper.sanitizeIdentifier")]),e._v(" 方法转换其他 Java 类型并删除标识符的“类型化”部分。")]),e._v(" "),t("h2",{attrs:{id:"_2-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-属性"}},[e._v("#")]),e._v(" 2）属性")]),e._v(" "),t("p",[e._v("用户配置文件具有从认证提供者检索的数据（转换后）填充的属性。具有相同名称和集合类型值的多个属性可以（可选）合并为一个属性。特别是，它对于在不同的单个元素集合中返回角色的认证提供者非常有用。")]),e._v(" "),t("h2",{attrs:{id:"_3-认证相关属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-认证相关属性"}},[e._v("#")]),e._v(" 3）认证相关属性")]),e._v(" "),t("p",[e._v("某些认证提供者将包含与认证本身相关的属性，例如认证方法、认证有效的时间段或认证提供者的元数据。这些属性与用户的属性分开存储。")]),e._v(" "),t("h2",{attrs:{id:"_4-角色和权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-角色和权限"}},[e._v("#")]),e._v(" 4）角色和权限")]),e._v(" "),t("p",[e._v("可以通过 "),t("code",[e._v("addRole(role)")]),e._v("、"),t("code",[e._v("addRoles(Roles)")]),e._v("、"),t("code",[e._v("addPermission(permission)")]),e._v("和 "),t("code",[e._v("addPermissions(permissions)")]),e._v(" 方法将角色和权限添加到用户配置文件中。")]),e._v(" "),t("p",[e._v("它们通常在 "),t("RouterLink",{attrs:{to:"/v5.6/clients.html#_2-计算角色和权限"}},[e._v("AuthorizationGenerator")]),e._v(" 中计算。")],1),e._v(" "),t("h2",{attrs:{id:"_5-客户端名字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-客户端名字"}},[e._v("#")]),e._v(" 5）客户端名字")]),e._v(" "),t("p",[e._v("在登录过程中，客户端的名称通过 "),t("code",[e._v("setClientName(name)")]),e._v(" 方法保存到用户配置文件中，稍后可以通过 "),t("code",[e._v("getClientName()")]),e._v(" 方法检索。")]),e._v(" "),t("h2",{attrs:{id:"_6-记住我"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-记住我"}},[e._v("#")]),e._v(" 6）记住我")]),e._v(" "),t("p",[e._v("用户配置文件可以定义为记住我，而不是通过 "),t("code",[e._v("setRemembered(boolean)")]),e._v(" 方法进行完全认证。如果记住了用户配置文件，"),t("code",[e._v("isRemembered()")]),e._v(" 方法将返回。")]),e._v(" "),t("h2",{attrs:{id:"_7-commonprofile-的常用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-commonprofile-的常用方法"}},[e._v("#")]),e._v(" 7） "),t("code",[e._v("CommonProfile")]),e._v(" 的常用方法")]),e._v(" "),t("p",[t("code",[e._v("CommonProfile")]),e._v(" 有以下方法：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("方法")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("返回")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("getEmail()")]),e._v(" "),t("td",[t("code",[e._v("String")])]),e._v(" "),t("td",[t("code",[e._v("email")]),e._v(" 属性")])]),e._v(" "),t("tr",[t("td",[e._v("getFirstName()")]),e._v(" "),t("td",[t("code",[e._v("String")])]),e._v(" "),t("td",[t("code",[e._v("first_name")]),e._v(" 属性")])]),e._v(" "),t("tr",[t("td",[e._v("getFamilyName()")]),e._v(" "),t("td",[t("code",[e._v("String")])]),e._v(" "),t("td",[t("code",[e._v("family_name")]),e._v(" 属性")])]),e._v(" "),t("tr",[t("td",[e._v("getDisplayName()")]),e._v(" "),t("td",[t("code",[e._v("String")])]),e._v(" "),t("td",[t("code",[e._v("display_name")]),e._v(" 属性")])]),e._v(" "),t("tr",[t("td",[e._v("getUsername()")]),e._v(" "),t("td",[t("code",[e._v("String")])]),e._v(" "),t("td",[t("code",[e._v("username")]),e._v(" 属性")])]),e._v(" "),t("tr",[t("td",[e._v("getGender()")]),e._v(" "),t("td",[e._v("Gender")]),e._v(" "),t("td",[t("code",[e._v("gender")]),e._v(" 属性")])]),e._v(" "),t("tr",[t("td",[e._v("getLocale()")]),e._v(" "),t("td",[t("code",[e._v("Locale")])]),e._v(" "),t("td",[t("code",[e._v("locale")]),e._v(" 属性")])]),e._v(" "),t("tr",[t("td",[e._v("getPictureUrl()")]),e._v(" "),t("td",[t("code",[e._v("URI")])]),e._v(" "),t("td",[t("code",[e._v("picture_url")]),e._v(" 属性")])]),e._v(" "),t("tr",[t("td",[e._v("getProfileUrl()")]),e._v(" "),t("td",[t("code",[e._v("URI")])]),e._v(" "),t("td",[t("code",[e._v("profile_url")]),e._v(" 属性")])]),e._v(" "),t("tr",[t("td",[e._v("getLocation()")]),e._v(" "),t("td",[t("code",[e._v("String")])]),e._v(" "),t("td",[t("code",[e._v("location")]),e._v(" 属性")])]),e._v(" "),t("tr",[t("td",[e._v("asPrincipal()")]),e._v(" "),t("td",[t("code",[e._v("Principal")])]),e._v(" "),t("td",[e._v("包含当前认证用户的名字的一个对象")])]),e._v(" "),t("tr",[t("td",[e._v("isExpired()")]),e._v(" "),t("td",[t("code",[e._v("boolean")])]),e._v(" "),t("td",[e._v("如果当前配置文件过期，为 "),t("code",[e._v("false")])])])])]),e._v(" "),t("h2",{attrs:{id:"_8-数据定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-数据定义"}},[e._v("#")]),e._v(" 8）数据定义")]),e._v(" "),t("p",[e._v("配置文件类和属性是通过 "),t("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/definition/ProfileDefinition.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProfileDefinition"),t("OutboundLink")],1),e._v(" 实现定义的。")]),e._v(" "),t("p",[t("code",[e._v("setProfileFactory")]),e._v(" 方法允许你定义要为用户配置文件返回的实例类，而 "),t("code",[e._v("primary")]),e._v(" 和 "),t("code",[e._v("secondary")]),e._v(" 方法允许你使用其特定的转换器定义属性。")]),e._v(" "),t("p",[e._v("许多属性转换器已经存在："),t("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/converter/BooleanConverter.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("BooleanConverter"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/profile/converter/ColorConverter.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("ColorConverter"),t("OutboundLink")],1),e._v(" ……请查看 "),t("a",{attrs:{href:"https://github.com/pac4j/pac4j/tree/master/pac4j-core/src/main/java/org/pac4j/core/profile/converter",target:"_blank",rel:"noopener noreferrer"}},[e._v("org.pc4j.core.profile.converter"),t("OutboundLink")],1),e._v(" 包。")]),e._v(" "),t("p",[e._v("因此，"),t("code",[e._v("newProfile")]),e._v(" 方法返回一个新的类实例，而 "),t("code",[e._v("convertAndAdd")]),e._v(" 方法会转换属性（如果有关联的转换器）并将其添加到配置文件中。")]),e._v(" "),t("p",[e._v("如果将 "),t("code",[e._v("typedId")]),e._v(" 指定为第一个参数，并且已调用 "),t("code",[e._v("setRestoreProfileFromTypedId(true)")]),e._v(" 方法，则 "),t("code",[e._v("newProfile")]),e._v(" 方法还可以返回 "),t("code",[e._v("typedId")]),e._v(" 的相关配置文件。")]),e._v(" "),t("h2",{attrs:{id:"_9-数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-数据结构"}},[e._v("#")]),e._v(" 9）数据结构")]),e._v(" "),t("p",[e._v("事实上，大多数客户端都不会返回 "),t("code",[e._v("CommonProfile")]),e._v("，但会返回特定的配置文件，如 "),t("code",[e._v("FacebookProfile")]),e._v("、"),t("code",[e._v("OidcProfile")]),e._v(" ……")]),e._v(" "),t("ul",[t("li",[e._v("（部分）使用特定实现覆盖 "),t("code",[e._v("CommonProfile")]),e._v(" 的通用方法")]),e._v(" "),t("li",[e._v("为其特定属性添加特定的 "),t("code",[e._v("getter")]),e._v("。")])]),e._v(" "),t("h2",{attrs:{id:"_10-关联标识符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-关联标识符"}},[e._v("#")]),e._v(" 10）关联标识符")]),e._v(" "),t("p",[e._v("每个用户配置文件可能有一个关联标识符，它是另一个用户配置文件的标识符。这样，两个用户配置文件都被关联起来，它允许你通过用户的帐户进行认证，并加载在第一个用户中定义的关联用户，特别是通过使用 "),t("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/generator/LoadLinkedUserAuthorizationGenerator.java",target:"_blank",rel:"noopener noreferrer"}},[e._v("LoadLinkedUserAuthorizationGenerator"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://www.pac4j.org/5.6.x/docs/user-profile.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文链接"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=v.exports}}]);