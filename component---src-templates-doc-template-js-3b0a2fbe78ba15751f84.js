(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/jYR":function(D,u,t){"use strict";t.r(u),t.d(u,"default",(function(){return c})),t.d(u,"pageQuery",(function(){return i}));t("hEkN");var e=t("q1tI"),n=t.n(e),a=t("Wbzz"),r=t("ZVJz"),F=t("wZee"),o=t.n(F),E=t("I/Ru");t("gAkk"),t("q/gI"),t("RX2a"),t("hL/g"),t("DQza");var c=function(D){var u,t;function e(u){var t;return(t=D.call(this,u)||this).state={},t.state.pageContent=u.data.pageContent,t.state.navBar=u.data.navBar,t}t=D,(u=e).prototype=Object.create(t.prototype),u.prototype.constructor=u,u.__proto__=t;var F=e.prototype;return F.componentDidMount=function(){o.a.highlightAll()},F.render=function(){var D=new r,u=this.state.pageContent.frontmatter,t=this.state.pageContent.html,e=this.state.navBar,F=this.state.pageContent.headings.map((function(u){return{anchor:"#"+D.slug(u.value),title:u.value}}));return n.a.createElement(E.a,{subTitle:u.title,metaDescription:u.summary,activeTrail:u.path,location:this.props.location},n.a.createElement("main",null,n.a.createElement("div",{className:"doc-content container small"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-lg-3 nav-column"},n.a.createElement("ul",{className:"nav flex-lg-column"},e.edges.map((function(D,t){return n.a.createElement("li",{className:"nav-item"+(D.node.frontmatter.path===u.path?" active":""),key:D.node.frontmatter.path},n.a.createElement(a.a,{to:D.node.frontmatter.path},D.node.frontmatter.title),F.length>0&&D.node.frontmatter.path===u.path&&n.a.createElement("ul",{className:"nav flex-column"},F.map((function(D,u){return n.a.createElement("li",{className:"nav-item",key:D.anchor},n.a.createElement("a",{href:D.anchor},D.title))}))))})))),n.a.createElement("div",{className:"col-12 col-lg-9"},n.a.createElement("h1",null,u.title),n.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:t}}))))))},e}(n.a.Component),i="1118412428"},DQza:function(D,u,t){},OGtf:function(D,u,t){var e=t("XKFU"),n=t("eeVq"),a=t("vhPU"),r=/"/g,F=function(D,u,t,e){var n=String(a(D)),F="<"+u;return""!==t&&(F+=" "+t+'="'+String(e).replace(r,"&quot;")+'"'),F+">"+n+"</"+u+">"};D.exports=function(D,u){var t={};t[D]=u(F),e(e.P+e.F*n((function(){var u=""[D]('"');return u!==u.toLowerCase()||u.split('"').length>3})),"String",t)}},RX2a:function(D,u,t){t("Oyvg"),t("pIFo"),function(D){var u=/[*&][^\s[\]{},]+/,t=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,e="(?:"+t.source+"(?:[ \t]+"+u.source+")?|"+u.source+"(?:[ \t]+"+t.source+")?)";function n(D,u){u=(u||"").replace(/m/g,"")+"m";var t=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|\s*#))/.source.replace(/<<prop>>/g,(function(){return e})).replace(/<<value>>/g,(function(){return D}));return RegExp(t,u)}D.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,(function(){return e}))),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)[^\r\n{[\]},#\s]+?(?=\s*:\s)/.source.replace(/<<prop>>/g,(function(){return e}))),lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:n(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:n(/true|false/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:n(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:n(/("|')(?:(?!\2)[^\\\r\n]|\\.)*\2/.source),lookbehind:!0,greedy:!0},number:{pattern:n(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:t,important:u,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},D.languages.yml=D.languages.yaml}(Prism)},ZVJz:function(D,u,t){t("Tze0"),t("pIFo"),t("hHhE");var e=t("uFVl");D.exports=F;var n=Object.hasOwnProperty,a=/\s/g,r=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g;function F(){if(!(this instanceof F))return new F;this.reset()}function o(D,u){return"string"!=typeof D?"":(u||(D=D.toLowerCase()),D.trim().replace(r,"").replace(e(),"").replace(a,"-"))}F.prototype.slug=function(D,u){for(var t=o(D,!0===u),e=t;n.call(this.occurrences,t);)this.occurrences[e]++,t=e+"-"+this.occurrences[e];return this.occurrences[t]=0,t},F.prototype.reset=function(){this.occurrences=Object.create(null)},F.slug=o},hEkN:function(D,u,t){"use strict";t("OGtf")("anchor",(function(D){return function(u){return D(this,"a","name",u)}}))},"hL/g":function(D,u,t){},uFVl:function(D,u){D.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}}}]);
//# sourceMappingURL=component---src-templates-doc-template-js-3b0a2fbe78ba15751f84.js.map