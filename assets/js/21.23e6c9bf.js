(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{475:function(e,n,s){"use strict";s.r(n);var a=s(8),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("RouterLink",{attrs:{to:"/en/2020/07/06/blog/"}},[e._v("English")]),e._v(" | Deutsch")],1),e._v(" "),s("h2",{attrs:{id:"was-ist-neu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#was-ist-neu"}},[e._v("#")]),e._v(" Was ist neu?")]),e._v(" "),s("p",[e._v("Eine ganze Zeit lang hatte ich eine Blog-Sektion auf meiner persönlichen Website, aber mit der Zeit wurde ich immer unzufriedener mit dem Design und der Struktur auf der Seite, außerdem habe ich nur selten neue Inhalte hinzugefügt. Nach einigen Umbauten habe ich nun also entschieden, dass der ganze Blog neu gebaut werden muss. Schon länger wollte ich ein Projekt mit Vuepress beginnen, einem Static-Site-Generator, der auf Vue aufbaut. Also habe ich mir zum Ziel gesetzt, den Blog mit Vuepress neu zu bauen, die alten Einträge zu überführen und das ganze auf "),s("em",[e._v("blog.yannickspoerl.de")]),e._v(" zu hosten. Außerdem habe ich ein neues Logo entworfen und eine "),s("em",[e._v("About")]),e._v("-Sektion eingebaut.")]),e._v(" "),s("h2",{attrs:{id:"was-ist-vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#was-ist-vuepress"}},[e._v("#")]),e._v(" Was ist Vuepress?")]),e._v(" "),s("p",[e._v("Vuepress ist ein Static-Site-Generator, der einfaches Blogging mit eigenem Look ermöglicht. Ein neues Theme (bestehend aus Vue-Komponenten und Styles) zu bauen ist sehr aufwändig, daher probierte ich vorerst einige verfügbare Themes durch, war aber vom Interface wenig begeistert. Meiner Meinung nach hatte das Default-Blog-Theme das beste und minimalistischste Interface, also modifizierte ich das ein wenig nach meiner Vorstellung und publishe es als npm-package, verfügbar unter "),s("a",{attrs:{href:"https://www.npmjs.com/package/@yannickspoerl/vuepress-theme-yannickspoerl",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"kann-ich-das-auch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kann-ich-das-auch"}},[e._v("#")]),e._v(" Kann ich das auch?")]),e._v(" "),s("p",[e._v("Ja, kannst du! Es ist sehr einfach deinen eigenen Blog zu starten, werfe gerne einen Blick in die "),s("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress-Docs"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("ol",[s("li",[e._v("Installiere npm")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" npm@latest -g\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Starte den vuepress-blog")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx create-vuepress my-blog\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("Installiere NPM packages")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --save\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("Installiere theme")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @yannickspoerl/vuepress-theme-yannickspoerl --save\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[e._v("Setze Theme in "),s("code",[e._v("my-blog/.vuepress/config.js")])])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("module.exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  title: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'My-Blog'")]),e._v(",\n  description: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'My awesome new blog'")]),e._v(",\n  theme: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@yannickspoerl/yannickspoerl'")]),e._v("\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[e._v("Starte das Blogging!")])]),e._v(" "),s("h3",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),s("p",[e._v("Etwas aufwändiger gestaltet sich das Deployment. Je nach Bedürfnissen und Anforderungen kann das bei dir völlig anders aussehen, aber bei mir läuft das folgendermaßen: Ich besitze die Domain "),s("em",[e._v("yannickspoerl.de")]),e._v(" und hoste alle Inhalte auf Github-Pages und pointe die DNS auf "),s("em",[e._v("my-app.yannickspoerl.de")]),e._v(". Nachdem ich also das Projekt entwickelt habe, pushe ich den Code auf Github, wo eine Github-Actions-Pipeline eingerichtet ist, die die App baut und nach Github-Pages deployed. Oft dauert es etwas, das einzurichten, aber wenn das einmal getan ist, muss man nur noch nach jeder Änderung pushen und die neue App wird automatisch deployed.")]),e._v(" "),s("h2",{attrs:{id:"und-als-nachstes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#und-als-nachstes"}},[e._v("#")]),e._v(" Und als nächstes?")]),e._v(" "),s("p",[e._v("Jetztm da ich mich auf Struktur und Design festgelegt habe, werde ich "),s("em",[e._v("yannickspoerl.de")]),e._v(" entsprechen anpassen und dort allgemeine Informationen und Links zu meinen Sub-Domains, wie beispielsweise dieser Blog, bereitstellen.\nVielleicht werde ich auch das Design meiner anderen Web-Apps anpassen, dessen bin ich mir aber noch nicht sicher, da das ohnehin noch weit in der Zukunft liegt.")]),e._v(" "),s("p",[e._v("Werfe gerne ein Auge auf den Code "),s("a",{attrs:{href:"https://github.com/YannickSpoerl/blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("auf Github"),s("OutboundLink")],1),e._v(", wenn dich die Details zu diesem Projekt interessieren!")])])}),[],!1,null,null,null);n.default=t.exports}}]);