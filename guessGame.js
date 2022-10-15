//A Guessing Game

function guessingGame () {
    let name = prompt('Enter your name: ');
    let randomNum = Math.floor(Math.random() * 2) + 1;
    //console.log(name);
    let totalPoint = 0;
    let counter = 2;
    let guessNum = parseInt(prompt(`Hello ${name}, guess any number btw 1 & ${counter}:` ));
  
    while (guessNum === randomNum) {
      counter++;
      totalPoint++;
      console.log(`Great Job ${name}, lets see how far you can go!`);
      console.log(`Your total score is ${totalPoint}, please guess again!`)
      randomNum = Math.floor(Math.random() * counter) + 1
      guessNum = parseInt(prompt(`Guess any number btw 1 & ${counter}:` ));
    
    }
    
    if (guessNum !== randomNum) {
      console.log(`Oops! ${name}, your guess is wrong!`);
      console.log(`The secret number is: ${randomNum}`);
    }
  }
  guessingGame();
  