!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);function r(t,e){$(".products .product-item").hide().filter((function(){console.log(this,t,e);var n=parseInt($(this).find(" .finalprice").html(),10);return n>=t&&n<=e})).show()}$((function(){var t,e,n={range:!0,min:0,max:5e3,values:[500,3e3],animate:"slow",create:function(){$("#min").appendTo($("#slider-range > span:eq(0)")),$("#max").appendTo($("#slider-range > span:eq(1)"))},slide:function(t,e){var n=e.values[0],a=e.values[1];$(e.handle).find("span").html("$"+e.value),r(n,a)}};$("#slider-range").slider(n),t=$("#slider-range").slider("values",0),e=$("#slider-range").slider("values",1),$("#max").html("$"+$("#slider-range").slider("values",1)).position({my:"center top",at:"center bottom",of:$("#slider-range > span:eq(1)"),offset:"0, 10"}),$("#min").html("$"+$("#slider-range").slider("values",0)).position({my:"center top",at:"center bottom",of:$("#slider-range > span:eq(0)"),offset:"0, 10"}),r(t,e),fetch("../../Apparals.json").then(t=>t.json()).then(t=>{console.log(t),t.forEach(t=>{$(".products").append(`\n          <div class="card product-item">\n              <img\n              class="card-img-top"\n              src="${t.medium_image_url}"\n              alt=${t.title}\n              />\n              <div class="card-block">\n              <div class="card-title">${t.product_type_name}</div>\n              <div class="price-details">\n              <span class="finalprice">${t.Final_Price.toFixed(2)}</span>\n              <span class="originalprice">${t.Original_Price.toFixed(2)}</span>\n              <span class="discountpercentage">${t.Discount_Percent}%</span>\n              </div>\n              <a\n                  href="#"\n                  data-name="${t.title}"\n                  data-price=${t.Final_Price}\n                  class="add-to-cart btn btn-primary"\n                  >Add to cart</a\n              >\n              </div>\n          </div>\n          `)}),$(".product-item a.add-to-cart").on("click",(function(t){t.preventDefault();var e=$(this).data("name"),n=Number($(this).data("price"));a.addItemToCart(e,n,1),o()}))})}));var a=function(){let t=[];function e(t,e,n){this.name=t,this.price=e,this.count=n}function n(){sessionStorage.setItem("shoppingCart",JSON.stringify(t))}null!=sessionStorage.getItem("shoppingCart")&&(t=JSON.parse(sessionStorage.getItem("shoppingCart")));var r={addItemToCart:function(r,a,o){for(var i in t)if(t[i].name===r)return t[i].count++,void n();i=new e(r,a,o);t.push(i),n()},setCountForItem:function(e,n){for(var r in t)if(t[r].name===e){t[r].count=n;break}},removeItemFromCart:function(e){for(var r in t)if(t[r].name===e){t[r].count--,0===t[r].count&&t.splice(r,1);break}n()},removeItemFromCartAll:function(e){for(var r in t)if(t[r].name===e){t.splice(r,1);break}n()},clearCart:function(){t=[],n()},totalCount:function(){var e=0;for(var n in t)e+=t[n].count;return e},totalCart:function(){var e=0;for(var n in t)e+=t[n].price*t[n].count;return Number(e.toFixed(2))},listCart:function(){var e=[];for(let n in t){let r=t[n],a={};for(let t in r)a[t]=r[t];a.total=Number(r.price*r.count).toFixed(2),e.push(a)}return e}};return r}();function o(){var t=a.listCart(),e="";for(var n in t)e+="<tr><td>"+t[n].name+"</td><td>("+t[n].price+")</td><td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name="+t[n].name+">-</button><input type='number' class='item-count form-control' data-name='"+t[n].name+"' value='"+t[n].count+"'><button class='plus-item btn btn-primary input-group-addon' data-name="+t[n].name+">+</button></div></td><td><button class='delete-item btn btn-danger' data-name="+t[n].name+">X</button></td> = <td>"+t[n].total+"</td></tr>";$(".show-cart").html(e),$(".total-cart").html(a.totalCart()),$(".total-count").html(a.totalCount())}$(".clear-cart").click((function(){a.clearCart(),o()})),$(".show-cart").on("click",".delete-item",(function(t){var e=$(this).data("name");a.removeItemFromCartAll(e),o()})),$(".show-cart").on("click",".minus-item",(function(t){var e=$(this).data("name");a.removeItemFromCart(e),o()})),$(".show-cart").on("click",".plus-item",(function(t){var e=$(this).data("name");a.addItemToCart(e),o()})),$(".show-cart").on("change",".item-count",(function(t){var e=$(this).data("name"),n=Number($(this).val());a.setCountForItem(e,n),o()})),o(),$(".cart-items").on("click",(function(){alert()}))},function(t,e,n){var r=n(2),a=n(3);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);t.exports=a.locals||{}},function(t,e,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function c(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},r=[],a=0;a<t.length;a++){var o=t[a],l=e.base?o[0]+e.base:o[0],d=n[l]||0,s="".concat(l," ").concat(d);n[l]=d+1;var u=c(s),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:s,updater:g(f,e),references:1}),r.push(s)}return r}function d(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,u=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function f(t,e,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function p(t,e,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(t,e){var n,r,a;if(e.singleton){var o=h++;n=m||(m=d(e)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=d(e),r=p.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var a=c(n[r]);i[a].references--}for(var o=l(t,e),d=0;d<n.length;d++){var s=c(n[d]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=o}}}},function(t,e,n){(e=n(4)(!1)).push([t.i,'::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{background:rgba(0,0,0,.1);border-radius:10px}::-webkit-scrollbar-thumb{background:rgba(0,0,0,.5);border-radius:10px}*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;background-color:#f1f3f6}header{overflow:hidden;background-color:#4269ea;padding:20px 10px}header a{float:left;color:#000}header a,header a.cartLink{text-align:center;text-decoration:none}header a.cartLink{float:right;color:#fff}header a.logo{font-weight:700;color:#f7cd22}header a.active{background-color:#4269ea;color:#fff}.header-right{float:right;color:#fff}@media screen and (max-width:500px){header a{display:block;text-align:left}.header-right,header a{float:none}}.products{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-gap:1rem;padding:20px;border-left:1px solid #c2c3c6}.product-item{padding:1rem;display:flex;flex-direction:column}.discountpercentage{color:#23a723}.originalprice{text-decoration:line-through;color:#959696}.finalprice{color:#434344}.price-details{text-align:left;font-weight:700}.card-title{margin:1rem 0}.card-block{display:flex;flex-direction:column}img.card-img-top{height:200px;width:100%;object-fit:fill}.add-to-cart{padding:.5rem;margin:1rem;background:#f7ad22;border-radius:2rem;font-size:12px;text-decoration:none;color:#000;font-weight:800;text-align:center}.badge{padding-left:9px;padding-right:9px;-webkit-border-radius:9px;-moz-border-radius:9px;border-radius:9px}.badge-info{background-color:#c67605}.total-count{font-size:12px;background:#e82b2b;color:#fff;padding:0 5px;vertical-align:top;margin-left:-10px;overflow:hidden;min-width:24px;height:24px;font-weight:700;border-radius:100%;border:3px solid #fff;text-align:center;background-clip:padding-box}.filter{float:left;width:20%;height:300px;padding:20px}.ui-slider-horizontal .ui-slider-range{background:#4269ea}.ui-slider-handle{border-radius:100%}article{float:left;padding:20px;width:80%;height:300px}section:after{content:"";display:table;clear:both}footer{background-color:#4269ea;padding:10px;text-align:center;color:#e4eafc;bottom:0}@media (max-width:600px){article,nav{width:100%;height:auto}}',""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([a]).join("\n")}var i,c,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}}]);