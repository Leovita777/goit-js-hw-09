import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as t}from"./assets/vendor-07f89283.js";function m(){const e=document.querySelector("input[name='email']").value,a=document.querySelector("textarea[name='message']").value,o={email:e,message:a};t.localStorage.setItem("feedback-form-state",JSON.stringify(o))}function r(){const e=JSON.parse(t.localStorage.getItem("feedback-form-state"));e&&(document.querySelector("input[name='email']").value=e.email,document.querySelector("textarea[name='message']").value=e.message)}function n(){t.localStorage.removeItem("feedback-form-state"),document.querySelector("input[name='email']").value="",document.querySelector("textarea[name='message']").value=""}document.querySelector(".feedback-form").addEventListener("input",m);r();document.querySelector("form").addEventListener("submit",()=>{n(),console.log({email:document.querySelector("input[name='email']").value,message:document.querySelector("textarea[name='message']").value})});
//# sourceMappingURL=commonHelpers2.js.map