(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{260:function(e,t,o){},284:function(e,t,o){"use strict";o(260)},295:function(e,t,o){"use strict";o.r(t);var s={mounted(){this.checkUserPreference()},methods:{toggleDarkTheme(){const e=document.body;e.classList.toggle("dark-mode"),e.classList.contains("dark-mode")?localStorage.setItem("dark-theme","true"):(e.classList.remove("dark-mode"),setTimeout((function(){localStorage.removeItem("dark-theme")}),100))},checkUserPreference(){localStorage.getItem("dark-theme")&&(document.body.classList.add("dark-mode"),document.getElementById("theme-toggle").checked=!0)}}},c=(o(284),o(7)),r=Object(c.a)(s,(function(){var e=this._self._c;return e("div",{staticClass:"dark-mode-widget"},[e("input",{attrs:{type:"checkbox",id:"theme-toggle"},on:{click:this.toggleDarkTheme}}),this._v(" "),this._m(0)])}),[function(){var e=this._self._c;return e("label",{attrs:{for:"theme-toggle"}},[e("span")])}],!1,null,null,null);t.default=r.exports}}]);