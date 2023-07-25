
const nav = document.getElementById("nav");
const menuButton = document.querySelector(".screen button");

showHideMenu = () => {
    if (nav.style.display === "block") {
        nav.style.display = "none";
        menuButton.innerHTML = "|||";
    } else {
        nav.style.display = "block";
        menuButton.innerHTML = "X";
    }
}