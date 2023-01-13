import gameLogic from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getStartGame = () => {
  const question = getRandomInt(1, 50);
  let answer = 'no';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      answer = 'no';
      break;
    } else {
      answer = 'yes';
    }
  }
  return [question, answer];
};

export default () => {
  gameLogic(gameTask, getStartGame);
};
