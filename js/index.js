"use strict";
window.addEventListener("load", () => { 
    const header = document.querySelector(".header");
    header?.addEventListener("click", (e) => {
        const targetElement = e.target;
        if (targetElement.closest(".burger-button")) {
            e.currentTarget.classList.toggle("active-menu");
        }
          
    });
});