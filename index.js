// Code your solutions in this file
const cardMessages = [""];
function writeCards(name, occasion = "surprise") {
    for (let i = 0; i < name.length; i++) {
        cardMessages[i] = `Thank you, ${name[i]}, for the wonderful ${occasion} gift!`;
    }
    return cardMessages;
    console.log(cardMessages);
}   
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}