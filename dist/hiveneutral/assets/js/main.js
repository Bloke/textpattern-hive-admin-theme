/** global: localStorage */
!function(){"use strict";var t=document.body.classList,e=document.getElementById("lightswitch");null!==e&&e.addEventListener("click",function(e){t.contains("darkmode")?(t.remove("darkmode"),localStorage.setItem("prefers-color-scheme","light")):(t.add("darkmode"),localStorage.setItem("prefers-color-scheme","dark")),e.preventDefault()})}();