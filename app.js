/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game numbers:

let 
  min = 1,
  max = 10,
  winningNum = Math.floor(Math.random() * 10) +1 ;
  guessesLeft = 3;

  console.log(`Answer of Correct Number:`, winningNum);
  

// UI
const form = document.querySelector('form'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message')

//Assign
minNum.textContent = min;
maxNum.textContent = max;



form.addEventListener('submit', function(e) {

    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess > max || guess < min){
      setMessage(`Please Enter Number between ${min} and ${max}!`, 'red')
    }
    
    //Check If Won
    else if(guess === winningNum){
      guessInput.disabled = true;
      setMessage(`Congrats, You Won, Correct Number ~ ${winningNum}`, 'green')
    }

    else{
      guessesLeft -= 1;
      if(guessesLeft <= 0){
        setMessage(`Game Over, LOSER! | Correct Number ~ ${winningNum}`, 'red')
        guessInput.disabled = true;
        
        guessBtn.value = 'Play Again';
        guessBtn.className += 'again';

        guessBtn.addEventListener('click', reload);

        function reload()  {
        
          if(guessBtn.value = 'Play Again'){
            window.location.reload();            
          }
        
        }
      
        
      }

      else{
        setMessage(`${guess} ~ Wrong Number | Guesses Left: ${guessesLeft}`, 'red')
      }
    }

    e.preventDefault()
});



function setMessage(msg, color){

  message.textContent = msg;
  message.style.color = color;
  guessInput.style.borderColor = color;
}


