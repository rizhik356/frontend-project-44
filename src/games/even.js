import gameLogic from '../index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const getStartGame = () => {
  const question = getRandomInt(1, 100);
  const answer = ((question % 2 === 0) ? 'yes' : 'no');
  return [question, answer];
};

export default () => {
  gameLogic(gameTask, getStartGame);
};
