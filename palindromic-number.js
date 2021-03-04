const palindromicNumber = (min, max) => {
  const isInvalidMin = !Number.isInteger(min) || min < 0;
  const isInvalidMax = !Number.isInteger(max) || max < min || max === min;
  if (isInvalidMin || isInvalidMax) {
    return 'Insira dois números válidos, sendo eles inteiros, o primeiro maior'
    + ' ou igual a zero e o segundo maior que o primeiro.';
  }
  const range = Array((max - min) + 1)
    .fill(null)
    .map((element, index) => min + index);
  const palindromes = [];
  for (const number of range) {
    const reverseNumber = parseInt(
      String(number).split("").reverse().join(""));
    const isPalindromic = reverseNumber === number;
    if (isPalindromic) {
      palindromes.push(number);
    }
  }
  return palindromes.join('-');
};

const result = palindromicNumber(0, 100);
console.log(result);
// 0-1-2-3-4-5-6-7-8-9-11-22-33-44-55-66-77-88-99