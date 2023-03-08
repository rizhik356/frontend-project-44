import gameLogic from '../index.js';

import getRandomNumber from '../getRandom.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getGameRules = () => {
  const question = getRandomNumber(1, 50);
  let answer = 'no';
  if (question === 2) {
    answer = 'yes';
  }
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
  gameLogic(gameTask, getGameRules);
};
