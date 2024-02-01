// Code your solutions in this file
function writeCards(array, event) {
    const newArray = []
    for(let name of array) {
        newArray.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown(int) {
    while(int >= 0) {
        console.log(int);
        int--;
    }
}