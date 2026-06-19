export function initLoginPopup() {
const loginBtn = document.getElementById("loginBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

loginBtn.onclick = () => popup.style.display = "flex";
closeBtn.onclick = () => popup.style.display = "none";

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
}