/*
    This one can be a little complex for where we are in this course!
    Consider it a snapshot of what you will be able to do very soon.
    Please reach out to your mentors if you have any questions!
*/

const pikminArmy = document.getElementById("army");
let pikCount = 0;
const pikmin = [
    "../../img/pikmin/red-pikmin.png",
    "../../img/pikmin/yellow-pikmin.png",
    "../../img/pikmin/blue-pikmin.png",
    "../../img/pikmin/white-pikmin.png",
    "../../img/pikmin/purple-pikmin.png",
    "../../img/pikmin/winged-pikmin.png",
    "../../img/pikmin/rock-pikmin.png",
    "../../img/pikmin/ice-pikmin.png",
    "../../img/pikmin/glow-pikmin.png",
];

generatePikmin = () => {
    const pikmin = document.createElement("img");
    const pikminImage = pickRandomPikmin();

    pikmin.id = "pikmin" + pikCount++; //or: pikmin.id = `pikmin${pikCount++}`;
    pikmin.className = "pikmin active";
    pikmin.src = pikminImage;
    pikmin.setAttribute("onclick", "removePikmin(this.id)")

    pikminArmy.appendChild(pikmin);
}

pickRandomPikmin = () => {
    const random = Math.floor(Math.random() * 9)
    return pikmin[random];
}

// There's a way to do this with event bubbling too! 
// When you get to that point, come back to this and try it out.
removePikmin = (id) => {
    const selectedPikmin = document.getElementById(id);
    selectedPikmin.src = "../../img/pikmin/removed-pikmin.png";
    selectedPikmin.className = "pikmin remove";

    setTimeout(() => {
        selectedPikmin.remove();
    }, 1500);
}
/*
    TODO: raise an army of pikmin

    click to "kill" the pikmin...
        need their ghost imgs...
        Maybe can use the single ghost image and color it with CSS?
*/