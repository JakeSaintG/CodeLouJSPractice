const amountLoaded = document.getElementById('amount-loaded');

load = (amount) => {

    if (amount == 0) {
        amountLoaded.style.display = 'none';
    } else {
        amountLoaded.style.display = 'block';
    }

    amountLoaded.style.width = `${amount}%`;
}
