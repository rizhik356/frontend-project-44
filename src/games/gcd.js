import gameLogic from '../index.js';

import getRandomNumber from '../getRandom.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const getGameRules = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);
  return [question, answer];
};

export default () => {
  gameLogic(gameTask, getGameRules);
};
