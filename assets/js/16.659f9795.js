(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{469:function(t,s,n){"use strict";n.r(s);var a=n(8),p=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v('A little python script I wrote in a quiet minute, that replaces every noun with\n"chicken", which results in hilarious texts!')]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# call script with $python3 "Path/To/File/To/Chickify.txt"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n  \n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("chicken")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          path "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sys"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No path to file given!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('".txt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"File not .txt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n      rel_path "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("relpath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getcwd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exists"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rel_path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"File doesn\'t exist or path is wrong"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rel_path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" text_file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" text_file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          all_words "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sub"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[^\\w]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      upper_case_words "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" word "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" all_words"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" word"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isupper"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              upper_case_words"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" word "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" upper_case_words"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chicken"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      write_file "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/chicken.txt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      write_file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  \n  chicken"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);