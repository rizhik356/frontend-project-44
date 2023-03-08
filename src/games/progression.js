import gameLogic from '../index.js';

import getRandomNumber from '../getRandom.js';

const gameTask = 'What number is missing in the progression?';

const getGameRules = () => {
  const randomStringLength = getRandomNumber(5, 10);
  const randomQuestion = getRandomNumber(0, randomStringLength);
  let firstRandomNumber = getRandomNumber(1, 50);
  const progressionLength = getRandomNumber(1, 10);
  const questionArr = [];
  let answer = 0;
  for (let i = 0; i <= randomStringLength; i += 1) {
    if (randomQuestion === i) {
      firstRandomNumber += progressionLength;
      answer = firstRandomNumber;
      questionArr.push('..');
    } else if (questionArr.length !== 0) {
      firstRandomNumber += progressionLength;
      questionArr.push(firstRandomNumber);
    } else {
      questionArr.push(firstRandomNumber);
    }
  }
  const question = questionArr.join(' ');
  return [question, answer];
};

export default () => {
  gameLogic(gameTask, getGameRules);
};
