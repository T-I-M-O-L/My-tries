var guess;
var number = 3;
var limit = 7;
var won = false;
for (numberOfGuesses = 0; numberOfGuesses <= limit; numberOfGuesses++){
  guess = prompt("Enter your guess here, it's a number between 1 and 20");
  if (guess == number) {
    won = true;
    break;
  }
  else{
    alert('Incorrect guess Tries left: ' + String(Number(limit) - Number(numberOfGuesses)));
  }
}
if (won == true) {
  document.getElementById('nuggets').innerHTML = "Correct Guess, You've won!";
}
else{
  document.getElementById('not_nuggets').innerHTML = "7 Incorrect tries, You've Lost!";
}
