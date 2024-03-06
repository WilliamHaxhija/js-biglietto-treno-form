const ticket = document.querySelector('.ticket');
ticket.style.display = 'none';
const ticketHeading = document.querySelector('#tuo-ticket');
ticketHeading.style.display = 'none';
const priceButton = document.querySelector('#price-calc');
priceButton.addEventListener('click', function () {
    const userName = document.querySelector('#name').value;
    console.log(userName);
    const userKm = document.querySelector('#km').value;
    const userAge = document.querySelector('#age').value;
    let ticketPrice = userKm * 0.21;
    if (userAge < 18) {
    ticketPrice = ticketPrice - ticketPrice * 20 / 100;
    } else if (userAge > 64) {
        ticketPrice = ticketPrice - ticketPrice * 40 / 100;
    }
    const userMessage = document.querySelector('#user-message').innerHTML = ticketPrice.toFixed(2) + '€';
    ticket.style.display = 'flex';
    const ticketName = document.querySelector('#ticket-name').innerHTML = userName;
    const ticketHeading = document.querySelector('#tuo-ticket');
    ticketHeading.style.display = 'block';
});
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function () {
    const userName = document.querySelector('#name').value = '';
    const userKm = document.querySelector('#km').value = '';
    const userAge = document.querySelector('#age').value = '';
    const userMessage = document.querySelector('#user-message').innerHTML = '';
    const ticket = document.querySelector('.ticket');
    ticket.style.display = 'none';
    const ticketHeading = document.querySelector('#tuo-ticket');
    ticketHeading.style.display = 'none';
});