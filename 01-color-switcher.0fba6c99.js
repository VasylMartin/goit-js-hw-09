const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let d=null;e.setAttribute("disabled",!0),t.addEventListener("click",(()=>{d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled",!0)})),e.addEventListener("click",(()=>{clearInterval(d),t.removeAttribute("disabled",!0),e.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.0fba6c99.js.map
