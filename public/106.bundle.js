(self.webpackChunkbreaking_bad_app=self.webpackChunkbreaking_bad_app||[]).push([[106],{106:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return s}});var o=e(7294),t=e(2912),A=e(5697),i=e.n(A),l=e(3379),a=e.n(l),C=e(8826),c=(a()(C.Z,{insert:"head",singleton:!1}),C.Z.locals,function(n){var r=n.quote,e=n.author;return o.createElement(o.Fragment,null,o.createElement("div",{className:"bubble box"},o.createElement("blockquote",null,r),o.createElement("div",null),o.createElement("cite",null,e)," "))});c.propTypes={quote:i().string.isRequired,author:i().string.isRequired};var p=c,b=e(6571),s=function(){var n=(0,o.useContext)(t.U),r=n.quoteRandom,e=n.doneFetchQuoteRandom,A=n.getQuoteRandom;return o.createElement(o.Fragment,null,o.createElement("h1",null,"Random Quotes"),o.createElement("div",{id:"buttons",onClick:function(){return A()}},o.createElement("a",{className:"btn yellow"},"Random Quotes")),e?r.map((function(n){var r=n.quote_id,e=n.quote,t=n.author;return o.createElement(p,{key:r,quote:e,author:t})})):o.createElement(b.Z,null))}},8826:function(n,r,e){"use strict";var o=e(4015),t=e.n(o),A=e(3645),i=e.n(A)()(t());i.push([n.id,'.box{width:60%;margin:70px auto}.white-back{box-shadow:0 2px 5px rgba(0,0,0,0.2);background:#fff}.simple p{border-top:1px solid #ccc;border-bottom:1px solid #ccc;color:#636363;padding:25px;font-size:1.25em;font-style:italic;text-align:center}.simple cite{font-size:1em;float:right;font-style:normal;color:#636363}.simple cite a{color:#636363;font-style:italic;text-decoration:none;font-size:0.85em}.simple cite a:hover{color:#00b4cc}.bubble blockquote{margin:10px 10px 0;background:#fff;padding:60px;position:relative;border:none;border-radius:8px;font-size:1.25em;color:#000000}.bubble blockquote:before,.bubble blockquote:after{content:"\\201C";position:absolute;font-size:80px;padding:10px;line-height:1;color:#636363}.bubble blockquote:before{top:0;left:10px}.bubble blockquote:after{content:"\\201D";right:10px;bottom:-0.5em}.bubble div{width:0;height:0;border-left:0 solid transparent;border-right:20px solid transparent;border-top:20px solid #fff;margin:0 0 0 60px;margin-bottom:10px}.bubble cite{padding-left:20px;font-size:1.25em;color:#f7f7f7}#buttons{padding-top:50px;text-align:center}.btn{border-radius:5px;padding:15px 25px;font-size:22px;text-decoration:none;margin:20px;color:#000000;position:relative;display:inline-block}.btn:active{transform:translate(0px, 5px);-webkit-transform:translate(0px, 5px);box-shadow:0px 1px 0px 0px}.yellow{background-color:#f1c40f;box-shadow:0px 5px 0px 0px #d8ab00}.yellow:hover{background-color:#ffde29}\n',"",{version:3,sources:["webpack://./src/assets/scss/quotes.scss"],names:[],mappings:"AAEA,KACE,SAAU,CACV,gBAAiB,CAClB,YAIC,oCAAwC,CACxC,eAAgB,CACjB,UAEC,yBAA0B,CAC1B,4BAA6B,CAC7B,aAAc,CACd,YAAa,CACb,gBAAiB,CACjB,iBAAkB,CAClB,iBAAkB,CACnB,aAEC,aAAc,CACd,WAAY,CACZ,iBAAkB,CAClB,aAAc,CACf,eAEC,aAAc,CACd,iBAAkB,CAClB,oBAAqB,CACrB,gBAAiB,CAClB,qBAEC,aAAc,CACf,mBAKC,kBAAmB,CACnB,eAAgB,CAChB,YAAa,CACb,iBAAkB,CAClB,WAAY,CACZ,iBAAkB,CAClB,gBAAiB,CACjB,aAAc,CACf,mDAGC,eAAgB,CAChB,iBAAkB,CAClB,cAAe,CACf,YAAa,CACb,aAAc,CACd,aAAc,CACf,0BAEC,KAAM,CACN,SAAU,CACX,yBAEC,eAAgB,CAChB,UAAW,CACX,aAAc,CACf,YAEC,OAAQ,CACR,QAAS,CACT,+BAAgC,CAChC,mCAAoC,CACpC,0BAA2B,CAC3B,iBAAkB,CAClB,kBAAmB,CACpB,aAEC,iBAAkB,CAClB,gBAAiB,CACjB,aAAc,CACf,SAGC,gBAAiB,CACjB,iBAAkB,CACnB,KAGC,iBAAkB,CAClB,iBAAkB,CAClB,cAAe,CACf,oBAAqB,CACrB,WAAY,CACZ,aAAc,CACd,iBAAkB,CAClB,oBAAqB,CACtB,YAGC,6BAA8B,CAC9B,qCAAsC,CACtC,0BAA2B,CAC5B,QAGC,wBAAyB,CACzB,kCAAmC,CACpC,cAGC,wBAAyB",sourcesContent:['/* Slick Slider */\r\n\r\n.box {\r\n  width: 60%;\r\n  margin: 70px auto;\r\n}\r\n\r\n/* Simple Slider */\r\n.white-back {\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n  background: #fff;\r\n}\r\n.simple p {\r\n  border-top: 1px solid #ccc;\r\n  border-bottom: 1px solid #ccc;\r\n  color: #636363;\r\n  padding: 25px;\r\n  font-size: 1.25em;\r\n  font-style: italic;\r\n  text-align: center;\r\n}\r\n.simple cite {\r\n  font-size: 1em;\r\n  float: right;\r\n  font-style: normal;\r\n  color: #636363;\r\n}\r\n.simple cite a {\r\n  color: #636363;\r\n  font-style: italic;\r\n  text-decoration: none;\r\n  font-size: 0.85em;\r\n}\r\n.simple cite a:hover {\r\n  color: #00b4cc;\r\n}\r\n\r\n/* Bubble Slider */\r\n\r\n.bubble blockquote {\r\n  margin: 10px 10px 0;\r\n  background: #fff;\r\n  padding: 60px;\r\n  position: relative;\r\n  border: none;\r\n  border-radius: 8px;\r\n  font-size: 1.25em;\r\n  color: #000000;\r\n}\r\n.bubble blockquote:before,\r\n.bubble blockquote:after {\r\n  content: "\\201C";\r\n  position: absolute;\r\n  font-size: 80px;\r\n  padding: 10px;\r\n  line-height: 1;\r\n  color: #636363;\r\n}\r\n.bubble blockquote:before {\r\n  top: 0;\r\n  left: 10px;\r\n}\r\n.bubble blockquote:after {\r\n  content: "\\201D";\r\n  right: 10px;\r\n  bottom: -0.5em;\r\n}\r\n.bubble div {\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 0 solid transparent;\r\n  border-right: 20px solid transparent;\r\n  border-top: 20px solid #fff;\r\n  margin: 0 0 0 60px;\r\n  margin-bottom: 10px;\r\n}\r\n.bubble cite {\r\n  padding-left: 20px;\r\n  font-size: 1.25em;\r\n  color: #f7f7f7;\r\n}\r\n\r\n#buttons {\r\n  padding-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.btn {\r\n  border-radius: 5px;\r\n  padding: 15px 25px;\r\n  font-size: 22px;\r\n  text-decoration: none;\r\n  margin: 20px;\r\n  color: #000000;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.btn:active {\r\n  transform: translate(0px, 5px);\r\n  -webkit-transform: translate(0px, 5px);\r\n  box-shadow: 0px 1px 0px 0px;\r\n}\r\n\r\n.yellow {\r\n  background-color: #f1c40f;\r\n  box-shadow: 0px 5px 0px 0px #d8ab00;\r\n}\r\n\r\n.yellow:hover {\r\n  background-color: #ffde29;\r\n}\r\n'],sourceRoot:""}]),r.Z=i}}]);
//# sourceMappingURL=106.bundle.js.map