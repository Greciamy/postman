var getRandomNumber = Math.random(20,565);

console.log(getRandomNumber);

function getRandomNumber(length) {
    return Math.floor(Math.random()*length);
}

var items = ["a1", "a2", "a3", "a4", "a5"];

console.log(getRandomNumber(items.length-1));
