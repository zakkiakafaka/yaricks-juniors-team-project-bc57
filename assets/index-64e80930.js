(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();(()=>{const s=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".mobile-menu-link"),t=()=>{const n=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!n),s.classList.toggle("is-open");const a=n?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[a](document.body)};e.addEventListener("click",t),i.addEventListener("click",t),o.forEach(n=>n.addEventListener("click",t)),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(s.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();var h=function(){return h=Object.assign||function(s){for(var e,i=1,o=arguments.length;i<o;i++)for(var t in e=arguments[i])Object.prototype.hasOwnProperty.call(e,t)&&(s[t]=e[t]);return s},h.apply(this,arguments)},y=function(){function s(e,i,o){var t=this;this.endVal=i,this.options=o,this.version="2.6.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(n){t.startTime||(t.startTime=n);var a=n-t.startTime;t.remaining=t.duration-a,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(a,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(a,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(a/t.duration);var r=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=r?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),a<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.options.onCompleteCallback&&t.options.onCompleteCallback()},this.formatNumber=function(n){var a,r,l,u,V=n<0?"-":"";a=Math.abs(n).toFixed(t.options.decimalPlaces);var d=(a+="").split(".");if(r=d[0],l=d.length>1?t.options.decimal+d[1]:"",t.options.useGrouping){u="";for(var f=3,p=0,c=0,g=r.length;c<g;++c)t.options.useIndianSeparators&&c===4&&(f=2,p=1),c!==0&&p%f==0&&(u=t.options.separator+u),p++,u=r[g-c-1]+u;r=u}return t.options.numerals&&t.options.numerals.length&&(r=r.replace(/[0-9]/g,function(m){return t.options.numerals[+m]}),l=l.replace(/[0-9]/g,function(m){return t.options.numerals[+m]})),V+t.options.prefix+r+l+t.options.suffix},this.easeOutExpo=function(n,a,r,l){return r*(1-Math.pow(2,-10*n/l))*1024/1023+a},this.options=h(h({},this.defaults),o),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(n){return n()})},this.handleScroll(this)))}return s.prototype.handleScroll=function(e){if(e&&window&&!e.once){var i=window.innerHeight+window.scrollY,o=e.el.getBoundingClientRect(),t=o.top+window.pageYOffset,n=o.top+o.height+window.pageYOffset;n<i&&n>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>n||t>i)&&!e.paused&&e.reset()}},s.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var i=e-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var o=this.countDown?1:-1;this.endVal=e+o*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},s.prototype.start=function(e){this.error||(e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},s.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},s.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},s.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},s.prototype.printValue=function(e){var i;if(this.el){var o=this.formattingFn(e);!((i=this.options.plugin)===null||i===void 0)&&i.render?this.options.plugin.render(this.el,o):this.el.tagName==="INPUT"?this.el.value=o:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=o:this.el.innerHTML=o}},s.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},s.prototype.validateValue=function(e){var i=Number(e);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},s.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},s}();const E=document.querySelectorAll("[data-counter]");E.forEach(s=>{const e=s.dataset.counter;new y(s,e,{enableScrollSpy:!0,scrollSpyOnce:!0}).start()});