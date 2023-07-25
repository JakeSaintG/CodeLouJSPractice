const amountLoaded = document.getElementById('amount-loaded');
const progress = document.getElementById('progress');

load = (amount) => {

    if (amount == 0) {
        amountLoaded.style.display = 'none';
    } else {
        amountLoaded.style.display = 'block';
    }

    amountLoaded.style.width = `${amount}%`;

    progress.innerHTML = `${amount} MB of 100 MB`;
}
