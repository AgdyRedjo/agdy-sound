import { initLoginPopup } from "./popup/loginPopup.js";
import { initLoginCarousel } from "./carousel/welcome.js";
document.addEventListener("DOMContentLoaded", () => {
    initLoginPopup();
    initLoginCarousel();
});