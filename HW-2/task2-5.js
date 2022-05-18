let userCard = prompt("Введите номер Вашей кредитной карты? (номер из 16 чисел)", "");

let cardNumber = userCard.slice(12);
let symbol = "*".repeat(12);

alert(`Номер вашей карты: ${symbol}${cardNumber}`);