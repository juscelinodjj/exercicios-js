const factorial = number => {
  const isInvalidNumber = !Number.isInteger(number) || number < 0;
  if (isInvalidNumber) {
    return 'Insira um número válido, sendo ele inteiro, maior ou igual a zero.';
  }
  return !number ? 1 : number * factorial(--number);
};

const result = factorial(10);
console.log(result);
// 3628800