const img = document.getElementById('retro-ify');

applyFilter = () => {
    if (img.className == "") {
        img.className = "grayscale";
    } else if (img.className == "grayscale") {
        img.className = "sepia";
    } else {
        img.className = "";
    }
}
