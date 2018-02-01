!function e(t,r,n){function a(o,u){if(!r[o]){if(!t[o]){var s="function"==typeof require&&require;if(!u&&s)return s(o,!0);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var f=r[o]={exports:{}};t[o][0].call(f.exports,function(e){var r=t[o][1][e];return a(r||e)},f,f.exports,e,t,r,n)}return r[o].exports}for(var i="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(e,t,r){"use strict";e("./helpers/htmlToText")(),e("./helpers/data/prettyNumber")(),e("./helpers/data/swapText")(),e("./helpers/data/incrementAnimation")();var n=e("./helpers/data/toggleClasses"),a=n.dataToggleClassesSelf,i=n.dataToggleClassesTarget;a(),i()},{"./helpers/data/incrementAnimation":3,"./helpers/data/prettyNumber":4,"./helpers/data/swapText":5,"./helpers/data/toggleClasses":6,"./helpers/htmlToText":7}],7:[function(e,t,r){"use strict";t.exports=function(){document.querySelectorAll(".js-html").forEach(function(e){var t=document.createElement("pre"),r=document.createElement("code");r.innerText=e.innerHTML,t.appendChild(r),e.insertBefore(t,e.childNodes[0])})}},{}],6:[function(e,t,r){"use strict";var n=function(e){var t=(e.target.attributes.href.value||"").trim();return t&&"#"!==t},a=function(e,t){return e.getAttribute(t).split(" ")};t.exports={dataToggleClassesSelf:function(){return document.querySelectorAll("[data-toggle-classes-self]").forEach(function(e){e.addEventListener("click",function(t){n(t)||(t.preventDefault(),a(e,"data-toggle-classes-self").forEach(function(t){e.classList.toggle(t.trim())}))})})},dataToggleClassesTarget:function(){return document.querySelectorAll("[data-toggle-classes-target]").forEach(function(e){e.addEventListener("click",function(t){if(!n(t)){t.preventDefault();var r=function(e){return Array.isArray(e)?e:Array.from(e)}(a(e,"data-toggle-classes-target")),i=r[0],o=r.slice(1),u=document.querySelectorAll(i);o.forEach(function(e,t){u.forEach(function(t){t.classList.toggle(e.trim())})})}})})}}},{}],5:[function(e,t,r){"use strict";var n=e("../style"),a=function(e,t){var r=document.createElement("div");r.innerText=e,n(r,{position:"absolute",left:0,top:0}),r.className="js-swap-text-child";var a=t.querySelector(".js-swap-text-child");a&&a.remove(),t.appendChild(r)};t.exports=function(){var e=document.querySelectorAll("[data-swap-text]"),t=document.querySelectorAll("[data-swap-text-timeout]")[0],r=t?t.getAttribute("data-swap-text-timeout"):2e3;e.forEach(function(e){var t=0,n=(e.getAttribute("data-swap-text")||"").split(/\.|,/).filter(Boolean).map(function(e){return e.trim()}),i=n.reduce(function(e,t){return t.length>=e.length?t:e},"");e.style.position="relative";var o=document.createElement("div");o.innerText=i,o.style.visibility="hidden",e.appendChild(o),a(n[0],e);var u=n.length;window.setTimeout(function(){e.querySelector(".js-swap-text-child").classList.add("fade-out")},r-300),function e(t,r,n,i,o){window.setTimeout(function(){a(t[i],n);var u=n.querySelector(".js-swap-text-child");u.classList.add("fade-in"),u.classList.remove("fade-out"),window.setTimeout(function(){u.classList.add("fade-out"),u.classList.remove("fade-in")},o-300),e(t,r,n,++i%r,o)},o)}(n,u,e,++t,r)})}},{"../style":9}],4:[function(e,t,r){"use strict";var n=e("../prettyNumber"),a=function(e,t){return(e.getAttribute(t)||"").trim()};t.exports=function(){return document.querySelectorAll("[data-pretty-number]").forEach(function(e){var t=a(e,"data-pretty-number"),r=a(e,"data-pretty-number-prefix"),i=a(e,"data-pretty-number-suffix");e.innerHTML=""+(r||"")+n(t)+(i||"")})}},{"../prettyNumber":8}],3:[function(e,t,r){"use strict";var n=e("format-number")(),a=e("../addScrollEvents"),i=e("../toggleInView"),o="data-increment",u=function(e,t){return(e.getAttribute(o+"-"+t)||"").trim()},s=function(e,t,r){var a="increment_animation_running_"+r;if(window.ENV=window.ENV?window.ENV:{},t){if(!window.ENV[a]){window.ENV[a]=!0;var i=Number(e.getAttribute(""+o)||0);if(!Number.isInteger(i))return console.warn("the "+o+" attribute must be an integer");!function e(t,r,a,i,o){window.setTimeout(function(){var s=o+a,c=s>=r?r:s,f=u(i,"suffix"),l=u(i,"prefix");i.innerText=""+(l||"")+n(c)+(f||""),c<r&&e(o<r/1.75?t:1.15*t,r,a,i,c)},t)}(60,i,Math.ceil(i/30),e,0)}}else window.ENV[a]=!1};t.exports=function(){return a([function(){return i("["+o+"]",s)}])}},{"../addScrollEvents":2,"../toggleInView":10,"format-number":11}],2:[function(e,t,r){"use strict";t.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=0;window.document.addEventListener("scroll",function(){(r+=1)%(t=(t=t>10?10:t)<1?1:t)!=0&&e.forEach(function(e){return e()})})}},{}],10:[function(e,t,r){"use strict";var n=function e(t){return t.offsetTop?t.offsetTop:e(t.offsetParent)};t.exports=function(e,t){document.querySelectorAll(e).forEach(function(e,r){var a=window.document.body.scrollTop+window.innerHeight,i=n(e);t(e,a>=i,r)})}},{}],11:[function(e,t,r){function n(e){function t(t,r){if(r=r||{},!t&&0!==t)return"";var n=[],a="-"===(t=""+t).charAt(0);return t=t.replace(/^\-/g,""),e.negativeLeftOut||r.noUnits||n.push(e.prefix),a&&n.push(e.negativeLeftSymbol),e.negativeLeftOut&&!r.noUnits&&n.push(e.prefix),t=t.split("."),null!=e.round&&function(e,t){if(e[1]&&t>=0&&e[1].length>t){var r=e[1].slice(0,t);if(+e[1].substr(t,1)>=5){for(var n="";"0"===r.charAt(0);)n+="0",r=r.substr(1);(r=n+(r=+r+1+"")).length>t&&(e[0]=+e[0]+ +r.charAt(0)+"",r=r.substring(1))}e[1]=r}}(t,e.round),null!=e.truncate&&(t[1]=function(e,t){e&&(e+="");return e&&e.length>t?e.substr(0,t):e}(t[1],e.truncate)),e.padLeft>0&&(t[0]=function(e,t){e+="";var r=[];for(;r.length+e.length<t;)r.push("0");return r.join("")+e}(t[0],e.padLeft)),e.padRight>0&&(t[1]=function(e,t){e?e+="":e="";var r=[];for(;r.length+e.length<t;)r.push("0");return e+r.join("")}(t[1],e.padRight)),!r.noSeparator&&t[1]&&(t[1]=function(e,t){if(e+="",!t)return e;var r=/(\d{3})(\d+)/;for(;r.test(e);)e=e.replace(r,"$1"+t+"$2");return e}(t[1],e.decimalsSeparator)),!r.noSeparator&&t[0]&&(t[0]=function(e,t){if(e+="",!t)return e;var r=/(\d+)(\d{3})/;for(;r.test(e);)e=e.replace(r,"$1"+t+"$2");return e}(t[0],e.integerSeparator)),n.push(t[0]),t[1]&&(n.push(e.decimal),n.push(t[1])),e.negativeRightOut&&!r.noUnits&&n.push(e.suffix),a&&n.push(e.negativeRightSymbol),e.negativeRightOut||r.noUnits||n.push(e.suffix),n.join("")}function r(t,r){r=r||[],e.allowedSeparators&&e.allowedSeparators.forEach(function(e){r.push(e)}),r.push(e.integerSeparator),r.push(e.decimalsSeparator);var n=t=(t=t.replace(e.prefix,"")).replace(e.suffix,"");do{t=n;for(var a=0;a<r.length;a++)n=n.replace(r[a],"")}while(n!=t);return t}if(e=e||{},e.negativeType=e.negativeType||("R"===e.negative?"right":"left"),"string"!=typeof e.negativeLeftSymbol)switch(e.negativeType){case"left":e.negativeLeftSymbol="-";break;case"brackets":e.negativeLeftSymbol="(";break;default:e.negativeLeftSymbol=""}if("string"!=typeof e.negativeRightSymbol)switch(e.negativeType){case"right":e.negativeRightSymbol="-";break;case"brackets":e.negativeRightSymbol=")";break;default:e.negativeRightSymbol=""}return"boolean"!=typeof e.negativeLeftOut&&(e.negativeLeftOut=!1!==e.negativeOut),"boolean"!=typeof e.negativeRightOut&&(e.negativeRightOut=!1!==e.negativeOut),e.prefix=e.prefix||"",e.suffix=e.suffix||"","string"!=typeof e.integerSeparator&&(e.integerSeparator="string"==typeof e.separator?e.separator:","),e.decimalsSeparator="string"==typeof e.decimalsSeparator?e.decimalsSeparator:"",e.decimal=e.decimal||".",e.padLeft=e.padLeft||-1,e.padRight=e.padRight||-1,t.negative=e.negative,t.negativeOut=e.negativeOut,t.negativeType=e.negativeType,t.negativeLeftOut=e.negativeLeftOut,t.negativeLeftSymbol=e.negativeLeftSymbol,t.negativeRightOut=e.negativeRightOut,t.negativeRightSymbol=e.negativeRightSymbol,t.prefix=e.prefix,t.suffix=e.suffix,t.separate=e.separate,t.integerSeparator=e.integerSeparator,t.decimalsSeparator=e.decimalsSeparator,t.decimal=e.decimal,t.padLeft=e.padLeft,t.padRight=e.padRight,t.truncate=e.truncate,t.round=e.round,t.unformat=r,t}t.exports=n,t.exports.default=n},{}],8:[function(e,t,r){"use strict";var n=e("format-number")(),a=function(e){return Math.round(10*e)/10};t.exports=function(e){return e?e<=9999?n(e):e<=999999?a(.001*e)+"K":n(a(1e-6*e))+"M":"0"}},{"format-number":11}],9:[function(e,t,r){"use strict";t.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).map(function(r){e&&e.style&&(e.style[r]=t[r])})}},{}]},{},[1]);
