import gameLogic from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const gameTask = 'Find the greatest common divisor of given numbers.';

const getStartGame = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = `${number1} ${number2}`;
  let answer = 0;
  for (let i = 0; i <= number1; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      answer = i;
    }
  }
  return [question, answer];
};

export default () => {
  gameLogic(gameTask, getStartGame);
};
