!function(){const e={displayValue:"0",firstOperand:null,waitingForSecondOperand:!1,operator:null},t=function(){return localStorage.getItem("theme")&&(initialTheme=localStorage.getItem("theme")),localStorage.getItem("theme")||(initialTheme=1),initialTheme},n=function(e,t,n){return"plus"===n?parseFloat(e)+parseFloat(t):"minus"===n?parseFloat(e)-parseFloat(t):"times"===n?parseFloat(e)*parseFloat(t):"divide"===n?parseFloat(e)/parseFloat(t):t},o=function(){e.displayValue="0",e.waitingForSecondOperand=!1,e.operator=null,e.firstOperand=null},a=function(e){const t=document.querySelector("body"),n=t.querySelectorAll("*");document.querySelectorAll(".theme-selector__toggle input").forEach((function(t){t.dataset.theme===e&&(t.checked=!0)}));[t,...n].forEach((function(t){t.classList.remove("theme1","theme2","theme3"),t.classList.toggle(`theme${e}`)}))},i=function(e){document.querySelector(".screen__result").textContent=e},r=function(e){!function(e){localStorage.setItem("theme",e)}(e),a(e)},c=function(t){!function(t){const{displayValue:n,waitingForSecondOperand:o}=e;!0===o?(e.displayValue=t,e.waitingForSecondOperand=!1):e.displayValue="0"===n?t:n+t}(t),i(e.displayValue)},l=function(t){!function(t){const{firstOperand:a,displayValue:i,operator:r}=e,c=i;if(r&&e.waitingForSecondOperand)e.operator=t;else{if(null!==a||isNaN(c)){if(r){const t=n(a,c,r);if(!isFinite(t))return void o();e.displayValue=parseFloat(t),e.firstOperand=t}}else e.firstOperand=parseFloat(c);e.waitingForSecondOperand=!0,e.operator=t}}(t),i(e.displayValue)},s=function(t){!function(t){e.displayValue=t}(t),i(e.displayValue)},u=function(){o(),i(e.displayValue)};var d;(function(e){const n=t();a(n)})(document.querySelectorAll(".theme-selector__toggle input")),d=r,document.querySelector(".theme-selector__toggle").addEventListener("click",(function(e){"radio"===e.target.type&&d(e.target.dataset.theme)})),i(e.displayValue),function(e){document.querySelector(".numpad").addEventListener("click",(function(t){const{target:n}=t;n.matches("button")&&n.classList.contains("operand")&&e(n.textContent)}))}(c),function(e){document.querySelector(".numpad").addEventListener("click",(function(t){const{target:n}=t;n.matches("button")&&n.classList.contains("operator")&&(operation=n.classList[0],e(operation))}))}(l),function(e){const t=document.querySelector(".numpad"),n=document.querySelector(".screen__result");t.addEventListener("click",(function(t){const{target:o}=t;if(!o.classList.contains("numpad__del"))return;const a=n.textContent;e(a.substring(0,a.length-1))}))}(s),function(e){document.querySelector(".numpad").addEventListener("click",(function(t){const{target:n}=t;n.classList.contains("numpad__reset")&&e()}))}(u)}();
//# sourceMappingURL=index.df252b26.js.map
