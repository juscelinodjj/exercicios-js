var letterList = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];
var letterUCList = letterList.map(function (letter) {
  return letter.toUpperCase();
});
var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbolList = ['@', '#', '$', '&', '*', '?', '!', '+', '<', '>'];

var randomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var getFrom = function (list, amount) {
  var max = list.length - 1;
  var newList = [];
  while (amount) {
    var element = list[randomNumber(0, max)];
    newList.push(element);
    amount --;
  }
  return newList;
};

// https://javascript.info/task/shuffle
var shuffle = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    // random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1));
    // swap elements array[i] and array[j]
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

var genPassword = function (amount1, amount2, amount3, amount4) {
  var numbers = getFrom(numberList, amount1);
  var letters = getFrom(letterList, amount2);
  var lettersUC = getFrom(letterUCList, amount3);
  var symbols = getFrom(symbolList, amount4);
  var array = numbers.concat(letters, lettersUC, symbols);
  var password = shuffle(array).join('');
  return password;
};

// number, letter, letterUC, symbol
var password = genPassword(4, 4, 4, 3);
console.log(password);