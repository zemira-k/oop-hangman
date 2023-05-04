//Create a Hangman class that represents the game logic

class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word; //the secret word
    this.remainingGuesses = remainingGuesses; //how many wrong guesses are left
    this.guessedLetters = []; //the letters that have been guessed
    this.status = "playing"; //current status: “playing”, “failed”, or “finished”    
  }

  // getPuzzle() is a method that returns a string that represents the current state of the puzzle
  getPuzzle() {
    let result = "";
    for (let i = 0; i < this.word.length; i++) {
      if (this.guessedLetters.includes(this.word[i])) {
        result += this.word[i];
      } else {
        result += "*";
      }
    }
    return result;
  }

  isValid(guess) {
    const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    if (guess.length !== 1) {
      return false;
    }
    return lowercaseAlphabet.includes(guess);
  }

  // calculateStatus() is a method that updates the status property based on the current state of the game
  calculateStatus() {
    let result = this.getPuzzle();
    if (result === this.word) {
      this.status = 'finished'
    } else {
      if (this.remainingGuesses === 0) {
        this.status = 'failed'
      } else this.status = 'playing'
    }
  }

  // makeGuess(guess) is a method that takes a single letter as a parameter and updates the game state accordingly
  makeGuess(guess) {
    const isUnique = !this.guessedLetters.includes(guess);
    if (this.isValid(guess) && isUnique) {
      this.guessedLetters.push(guess);
      this.remainingGuesses--;
      this.calculateStatus()
    }
  }

  // getStatusMessage() is a method that returns a string that represents the current status message of the game
  getStatusMessage() {

    if (this.status === "playing") { return `remaining Guesses: ${this.remainingGuesses}` } else
      if (this.status === "failed") { return `Nice try! The word was ${this.word}` } else
        return "Great work! You guessed the word!";


  }
}



const puzzleEl = document.getElementById("puzzle");
const statusEl = document.getElementById("status");
const guessedLettersEl = document.getElementById("guessed-letters");

// Define a function called render() that updates the puzzle and status paragraphs with their respective values from hangman.getPuzzle() and hangman.getStatusMessage()
function render() {
  puzzleEl.textContent = hangman.getPuzzle(); //a string that represents the current state of the puzzle
  statusEl.textContent = hangman.getStatusMessage();
  guessedLettersEl.textContent = '';

  hangman.guessedLetters.forEach((letter) => {
    if (!guessedLettersEl.textContent.includes(letter)) {
      guessedLettersEl.textContent += letter + ', ';
    }
  });
}



// Add an event listener to the window object that listens for the "keypress" event
window.addEventListener("keypress", (e) => {
  if (hangman.status === 'playing') {
    let guess = e.key;
    hangman.makeGuess(guess);
    render();
  }
})

// Define a global variable called hangman and assign it to a new instance of Hangman with a random word and a fixed number of guesses
// You can use any words you like, but make sure they are lowercase and have no special characters or numbers
// You can also use any number of guesses you like, but make sure it is reasonable for the difficulty level of your words
const hangman = new Hangman("htrlpog", 20);

// Call render() once at the beginning of your script to display the initial state of the game to the player
render();