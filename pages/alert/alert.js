const badge = document.getElementById('button_badge');
let count = 0;

incrementAlert = () => {
    badge.style.display = 'flex';

    count++;

    if (count < 100) {
        badge.innerHTML = count;
    } else {
        badge.innerHTML = '!';
    }
}

/*========Here's another way to write it!========*/
// incrementAlert = () => {
//     badge.style.display = 'flex';
//     count < 100 ? badge.innerHTML = count++ : badge.innerHTML = '!';
// }