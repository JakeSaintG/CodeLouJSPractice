function updateText (text) {
    document.getElementById("text-output").innerHTML = text;

    /*
        Note! onkeyup allows the function to run when a key released.
        This means that the text won't "dynamically" update if you press and hold a key.
        It's way more noticable if you press and hold backspace...
        Play around and try to make it more dyanmic if you want!
            Hint: Check the other input elements!
    */
}