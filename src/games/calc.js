import gameLogic from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameTask = 'What is the result of the expression?';
const symbols = ['*', '-', '+'];

const calc = (number1, number2, randomSymbol) => {
  switch (randomSymbol) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      return false;
  }
};

const getStartGame = () => {
  const randomSymbolInArr = Math.floor(Math.random() * symbols.length);
  const randomSymbol = symbols[randomSymbolInArr];
  const number1 = getRandomInt(1, 10);
  const number2 = getRandomInt(1, 10);
  const question = `${number1} ${randomSymbol} ${number2}`;
  const answer = calc(number1, number2, randomSymbol);
  return [question, answer];
};

export default () => {
  gameLogic(gameTask, getStartGame);
};
