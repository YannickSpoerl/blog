(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{493:function(e,t,s){"use strict";s.r(t);var a=s(8),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("English | "),s("RouterLink",{attrs:{to:"/2020/07/06/blog/"}},[e._v("Deutsch")])],1),e._v(" "),s("p",[e._v("It is here! The new blog-design! Finally!")]),e._v(" "),s("h2",{attrs:{id:"what-is-new"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-new"}},[e._v("#")]),e._v(" What is new?")]),e._v(" "),s("p",[e._v("I had a blog section sitting on my personal website for a while now, but with the time I became more and more unsatisfied by the look and the structure of the website, also I rarely added new content. But after I did some restructuring I decided to rebuild the blog. I was interested in trying VuePress for some time now, a static-site-generator built on top of Vue, so I decided to build a new blog with VuePress, migrate the old entries and host it on "),s("em",[e._v("blog.yannickspoerl.de")]),e._v(". I also designed a new logo, which I find to look really nice and professional and I also added a new "),s("em",[e._v("About")]),e._v(" section.")]),e._v(" "),s("h2",{attrs:{id:"what-is-vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-vuepress"}},[e._v("#")]),e._v(" What is VuePress")]),e._v(" "),s("p",[e._v("VuePress is a static-site-generator, that allows simple blogging or documentation with a customized look. As building a new theme (consisting of Vue-Components and styles) is very tedious I tried some prebuilt themes first, but was not really satisfied by the interface. In my opinion the best interface was provided by the default-blog-theme so I took this, customized it a bit to my needs and published it as my own theme as a npm-package, which is available at "),s("a",{attrs:{href:"https://www.npmjs.com/package/@yannickspoerl/vuepress-theme-yannickspoerl",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"can-i-do-the-same"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can-i-do-the-same"}},[e._v("#")]),e._v(" Can I do the same?")]),e._v(" "),s("p",[e._v("Yes, you can! The steps to starting your own blog are really easy. You might also take a look at the "),s("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress-docs"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("ol",[s("li",[e._v("Install npm")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" npm@latest -g\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Start your vuepress-blog")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx create-vuepress my-blog\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[e._v("Install NPM packages")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --save\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[e._v("Install theme")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @yannickspoerl/vuepress-theme-yannickspoerl --save\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[e._v("Set Theme in "),s("code",[e._v("my-blog/.vuepress/config.js")])])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("module.exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  title: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'My-Blog'")]),e._v(",\n  description: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'My awesome new blog'")]),e._v(",\n  theme: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@yannickspoerl/yannickspoerl'")]),e._v("\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[e._v("Start blogging!")])]),e._v(" "),s("h3",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),s("p",[e._v("What is a bit more tedious is the deployment of the blog. Depending on your whishes and needs, this might be completely different for you, but for me it is the following case: I own the domain "),s("em",[e._v("yannickspoerl.de")]),e._v(" and I host everything on Github-Pages and point it to "),s("em",[e._v("my-app.yannickspoerl.de")]),e._v(". So after developing a project, I push the code to GitHub, where I have a pipeline on GitHub Actions set up, that rebuilds the app and deploys it to GitHub Pages. That always takes some time to set up, but once its done, I only need to do a push after a change, and the new app is automatically deployed.")]),e._v(" "),s("h2",{attrs:{id:"whats-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whats-next"}},[e._v("#")]),e._v(" Whats next?")]),e._v(" "),s("p",[e._v("Now, that I've settled on a structure and design, I will rebuilt "),s("em",[e._v("yannickspoerl.de")]),e._v(" according to the new look, where I provide some general information and point to my subdomains, such as this blog. Maybe I will also adjust the design of my other web-apps, but Im not sure about this and it lies far in the future anyway.")]),e._v(" "),s("p",[e._v("Feel free to check out the code "),s("a",{attrs:{href:"https://github.com/YannickSpoerl/blog",target:"_blank",rel:"noopener noreferrer"}},[e._v("on Github"),s("OutboundLink")],1),e._v(" if you are interested in the details of this project!")])])}),[],!1,null,null,null);t.default=n.exports}}]);