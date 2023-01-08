#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const game = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i <= 2; i += 1) {
    const number = getRandomInt(1, 100);
    const isEven = ((number % 2 === 0) ? 'yes' : 'no');
    console.log(`Question: ${number}`);
    const userAnswer1 = readlineSync.question('Your answer: ');
    if (userAnswer1 === isEven) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer1}' is wrong answer ;(. Correct answer was '${isEven}'.\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
game();
