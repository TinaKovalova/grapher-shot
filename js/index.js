"use strict";
window.addEventListener("load", () => { 
    const header = document.querySelector(".header");
    header?.addEventListener("click", (e) => {
        const targetElement = e.target;
        if (targetElement.closest(".burger-button")) {
            e.currentTarget.classList.toggle("active-menu");
        }
       
        if (targetElement.tagName === "A" && e.currentTarget.classList.contains("active-menu")) {
            e.currentTarget.classList.remove("active-menu");
        }
          
    });
    const portfolioContent = document.querySelectorAll(".portfolio__collection-item");

    portfolioContent.forEach((photo) =>
      adjustToCellSize(photo, 238,178)
    );
});

function adjustToCellSize(image, adjustWidth, adjustHeight) {
    const itemWidth = image.naturalWidth;
    const itemHeight = image.naturalHeight;
    const widthDifference = Math.trunc(itemWidth / adjustWidth);
    const heightDifference = Math.trunc(itemHeight / adjustHeight);
    image.style.setProperty("grid-column", `span ${widthDifference}`);
    image.style.setProperty("grid-row", `span ${heightDifference}`);
}