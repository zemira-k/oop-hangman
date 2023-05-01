// // Create a Hangman class that represents the game logic
// Create a Hangman class that represents the game logic
class Hangman {
  // The constructor should take two parameters: word and remainingGuesses
  constructor(word, remainingGuesses) {
    // The word is a string that represents the secret word to guess
    // The word should be converted to an array of lowercase letters
    this.word = word.toLowerCase().split("");
    // The remainingGuesses is a number that indicates how many wrong guesses are allowed before the game is over
    this.remainingGuesses = remainingGuesses;
    // The guessedLetters is a set that stores the letters that have been guessed by the player
    this.guessedLetters = new Set();
    // The status is a string that indicates the current status of the game
    // It can be one of the following values: "playing", "failed", or "finished"
    this.status = "playing";
  }

  // getPuzzle() is a method that returns a string that represents the current state of the puzzle
  getPuzzle() {
    // It should replace the unguessed letters with asterisks (*), and keep the guessed letters and spaces as they are
    let puzzle = "";
    // Use the forEach method to iterate over the word array
    this.word.forEach((letter) => {
      if (letter === " " || this.guessedLetters.has(letter)) {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }

  // getStatusMessage() is a method that returns a string that represents the current status message of the game
  getStatusMessage() {
    // It should display different messages depending on the status of the game
    // Use a switch statement to check the value of the status property
    switch (this.status) {
      case "playing":
        return `Remaining guesses: ${this.remainingGuesses}`;
      case "failed":
        return `Nice try! The word was "${this.word.join("")}"`;
      case "finished":
        return "Great work! You guessed the word!";
      default:
        return "Invalid status";
    }
  }

  // makeGuess(guess) is a method that takes a single letter as a parameter and updates the game state accordingly
  makeGuess(guess) {
    // It should check if the guess is unique and valid (a single lowercase letter), and if so, add it to the guessedLetters set
    guess = guess.toLowerCase();
    if (
      this.status === "playing" &&
      guess.length === 1 &&
      /[a-z]/.test(guess)
    ) {
      this.guessedLetters.add(guess);
      // It should decrement the remainingGuesses by one for every guess
      this.remainingGuesses--;
      // Finally, it should call another method called calculateStatus() to update the status property based on the current state of the game
      this.calculateStatus();
    }
  }

  // calculateStatus() is a method that updates the status property based on the current state of the game
  calculateStatus() {
    // It should check if the player has guessed all the letters in the word, in which case it should set the status to "finished"
    // Use the every method to check if every letter in the word is either a space or a guessed letter
    let finished = this.word.every(
      (letter) => letter === " " || this.guessedLetters.has(letter)
    );
    if (finished) {
      this.status = "finished";
      return;
    }
    // It should also check if the player has run out of guesses, in which case it should set the status to "failed"
    if (this.remainingGuesses === 0) {
      this.status = "failed";
      return;
    }
  }
}

// Define a global variable called hangman and assign it to a new instance of Hangman with a random word and a fixed number of guesses
// You can use any words you like, but make sure they are lowercase and have no special characters or numbers
// You can also use any number of guesses you like, but make sure it is reasonable for the difficulty level of your words
let hangman = new Hangman("elephant", 8);

// Define a function called render() that updates the puzzle and status paragraphs with their respective values from hangman.getPuzzle() and hangman.getStatusMessage()
function render() {
  // Get the puzzle and status elements by their ids
  let puzzleEl = document.getElementById("puzzle");
  let statusEl = document.getElementById("status");
  // Set their text content to the corresponding values from hangman
  puzzleEl.textContent = hangman.getPuzzle();
  statusEl.textContent = hangman.getStatusMessage();
}

// Call render() once at the beginning of your script to display the initial state of the game to the player
render();

// Add an event listener to the window object that listens for the "keypress" event
window.addEventListener("keypress", function (e) {
  // Get the pressed key from the event object and store it in a variable called guess
  let guess = e.key;
  // Call hangman.makeGuess(guess) to update the game state with the player's guess
  hangman.makeGuess(guess);
  // Call render() again to display the updated state of the game to the player
  render();
});
