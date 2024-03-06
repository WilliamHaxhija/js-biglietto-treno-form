const priceButton = document.querySelector('#price-calc');
priceButton.addEventListener('click', function () {
    const userKm = document.querySelector('#km').value;
    const userAge = document.querySelector('#age').value;
    let ticketPrice = userKm * 0.21;
    if (userAge < 18) {
    ticketPrice = ticketPrice - ticketPrice * 20 / 100;
    } else if (userAge > 64) {
        ticketPrice = ticketPrice - ticketPrice * 40 / 100;
    }
    const userMessage = document.querySelector('#user-message').innerHTML = 'Il prezzo totale è: ' + ticketPrice.toFixed(2) + '€';
});
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function () {
    const userName = document.querySelector('#name').value = '';
    const userKm = document.querySelector('#km').value = '';
    const userAge = document.querySelector('#age').value = '';
    const userMessage = document.querySelector('#user-message').innerHTML = '';
});