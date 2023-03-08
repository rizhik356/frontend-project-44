import gameLogic from '../index.js';

import getRandomNumber from '../getRandom.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameRules = () => {
  const question = getRandomNumber(1, 100);
  const answer = ((question % 2 === 0) ? 'yes' : 'no');
  return [question, answer];
};

export default () => {
  gameLogic(gameTask, getGameRules);
};
