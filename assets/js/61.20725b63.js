(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{364:function(r,e,t){"use strict";t.r(e);var a=t(13),o=Object(a.a)({},(function(){var r=this,e=r._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h1",{attrs:{id:"用户配置文件授权器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户配置文件授权器"}},[r._v("#")]),r._v(" 用户配置文件授权器")]),r._v(" "),e("p",[r._v("某些授权器仅适用于用户配置文件：")]),r._v(" "),e("h2",{attrs:{id:"_1-角色-权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-角色-权限"}},[r._v("#")]),r._v(" 1）角色/权限")]),r._v(" "),e("p",[r._v("要检查用户配置文件上的角色和权限，首先需要使用 "),e("RouterLink",{attrs:{to:"/v4.0/clients.html#_2-计算角色和权限"}},[r._v("AuthorizationGenerator")]),r._v(" 计算它们。")],1),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/authorizer/RequireAnyRoleAuthorizer.java",target:"_blank",rel:"noopener noreferrer"}},[r._v("RequireAnyRoleAuthorizer"),e("OutboundLink")],1),r._v(" 检查用户配置文件是否至少具有一个预期角色")]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/authorizer/RequireAllRolesAuthorizer.java",target:"_blank",rel:"noopener noreferrer"}},[r._v("RequireAllRolesAuthorizer"),e("OutboundLink")],1),r._v(" 检查用户配置文件是否具有所有预期角色")]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/authorizer/RequireAnyPermissionAuthorizer.java",target:"_blank",rel:"noopener noreferrer"}},[r._v("RequireAnyPermissionAuthorizer"),e("OutboundLink")],1),r._v(" 检查用户配置文件是否具有至少一个预期权限")]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/authorizer/RequireAllPermissionsAuthorizer.java",target:"_blank",rel:"noopener noreferrer"}},[r._v("RequireAllPermissionsAuthorizer"),e("OutboundLink")],1),r._v(" 检查用户配置文件是否具有所有预期权限")])]),r._v(" "),e("h2",{attrs:{id:"_2-授权级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-授权级别"}},[r._v("#")]),r._v(" 2）授权级别")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/authorizer/IsAnonymousAuthorizer.java",target:"_blank",rel:"noopener noreferrer"}},[r._v("IsAnonymousAuthorizer"),e("OutboundLink")],1),r._v(" 检查用户是否匿名（无 profile 或 "),e("code",[r._v("AnonymousProfile")]),r._v("）")]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/authorizer/IsAuthenticatedAuthorizer.java",target:"_blank",rel:"noopener noreferrer"}},[r._v("IsAuthenticatedAuthorizer"),e("OutboundLink")],1),r._v(" 检查用户是否具有非 "),e("code",[r._v("AnonymousProfile")]),r._v(" 的 profile")]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/authorizer/IsFullyAuthenticatedAuthorizer.java",target:"_blank",rel:"noopener noreferrer"}},[r._v("IsFullyAuthenticatedAuthorizer"),e("OutboundLink")],1),r._v(" 检查用户是否经过认证，但未记住（"),e("code",[r._v("isRemembered")]),r._v(" 方法）")]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/authorizer/IsRememberedAuthorizer.java",target:"_blank",rel:"noopener noreferrer"}},[r._v("IsRememberedAuthorizer"),e("OutboundLink")],1),r._v(" 检查用户是否经过身份验证且仅被记住（"),e("code",[r._v("isRemembered")]),r._v(" 方法）")])]),r._v(" "),e("h2",{attrs:{id:"_3-其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-其他"}},[r._v("#")]),r._v(" 3）其他")]),r._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/authorizer/CheckProfileTypeAuthorizer.java",target:"_blank",rel:"noopener noreferrer"}},[r._v("CheckProfileTypeAuthorizer"),e("OutboundLink")],1),r._v(" 检查已认证用户的当前 profile 类型")]),r._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/pac4j/pac4j/blob/master/pac4j-core/src/main/java/org/pac4j/core/authorization/authorizer/RequireAnyAttributeAuthorizer.java",target:"_blank",rel:"noopener noreferrer"}},[r._v("RequireAnyAttributeAuthorizer"),e("OutboundLink")],1),r._v(" 检查当前 profile 是否具有合适的属性")])]),r._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://www.pac4j.org/4.0.x/docs/authorizers/profile-authorizers.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("原文链接"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);