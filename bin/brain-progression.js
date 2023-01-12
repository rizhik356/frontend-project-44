#!/usr/bin/env node
import gameLogic from '../src/index.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const gameTask = 'What number is missing in the progression?';

const getStartGame = () => {
  const randomStringLength = getRandomInt(5, 10);
  const randomQuestion = getRandomInt(0, randomStringLength);
  let firstRandomNumber = getRandomInt(1, 50);
  const progressionLength = getRandomInt(1, 10);
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

gameLogic(gameTask, getStartGame);
