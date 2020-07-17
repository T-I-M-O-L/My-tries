var guess;
var number = Math.floor(Math.random() * 100) + 1;
var limit = 20;
var won = false;
var guesses = [];
for (numberOfGuesses = 0; numberOfGuesses <= limit; numberOfGuesses++){
  guess = prompt("Enter your guess here, it's a number between 1 and 100");
  if (guesses.includes(guess))
  {
    while (guesses.includes(guess))
    {
      guess = prompt("You've entered this guess before. Try another number.")
    }
  }
  if (isNaN(parseInt(guess)) == true)
  {
    while (isNaN(parseInt(guess)) == true)
    {
      guess = prompt("Your input was invalid. Please enter a number")
    }
  }
  if (guess == number) {
    won = true;
    break;
  }
  else{
    guesses.push(guess);
    alert('Incorrect guess Tries left: ' + String(Number(limit) - Number(numberOfGuesses)));
  }
}
if (won == true) {
  document.getElementById('nuggets').innerHTML = "Correct Guess, You've won! The number was " + number;
}
else{
  document.getElementById('not_nuggets').innerHTML = limit + " Incorrect tries, You've Lost! The number was " + number;
}
