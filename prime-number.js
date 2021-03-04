const primeNumber = number => {
  const isInvalidNumber = !Number.isInteger(number) || number < 2;
  if (isInvalidNumber) {
    return 'Insira um número válido, sendo ele inteiro, maior ou igual a dois.';
  }
  const primes = [];
  const numbers = Array(parseInt(number))
    .fill(null)
    .map((element, index) => ++index);
  for (const number of numbers) {
    const dividers = Array(number)
      .fill(null)
      .map((element, index) => ++index);
    const divisibles = dividers.filter(divider => number % divider === 0);
    const isPrime = divisibles.length === 2;
    if (isPrime) {
      primes.push(number);
    }
  }
  return primes.join('-');
};

const result = primeNumber(100);
console.log(result);
// 2-3-5-7-11-13-17-19-23-29-31-37-41-43-47-53-59-61-67-71-73-79-83-89-97