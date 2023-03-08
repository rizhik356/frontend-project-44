import gameLogic from '../index.js';

import getRandomNumber from '../getRandom.js';

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
      throw new Error('error');
  }
};

const getGameRules = () => {
  const randomSymbolInArr = Math.floor(Math.random() * symbols.length);
  const randomSymbol = symbols[randomSymbolInArr];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${randomSymbol} ${number2}`;
  const answer = calc(number1, number2, randomSymbol);
  return [question, answer];
};

export default () => {
  gameLogic(gameTask, getGameRules);
};
