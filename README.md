# Hangman Game

This is a simple web-based version of the classic word guessing game Hangman.
The game will randomly select a word from a list of words and display it as a
series of asterisks on the web page. The player will have a fixed number of
guesses to try to reveal the word by typing letters on the keyboard. The game
will keep track of the guessed letters and update the displayed word
accordingly. The game will also display the number of remaining guesses and a
status message that indicates whether the player is still playing, has won, or
has lost. The game will use HTML, CSS, and JavaScript to create the user
interface and the game logic.

## Getting Started

To get started with this project, you need to fork and clone this repository to
your local machine. To do this, follow these steps:

Click on the Fork button at the top right corner of this page. This will create
a copy of this repository in your GitHub account.

Go to your GitHub profile and find the forked repository. Click on the Code
button and copy the URL that appears.

Open your terminal and navigate to the folder where you want to clone the
repository. Then, run the following command:

`git clone <URL>`

Replace `<URL>` with the URL that you copied in the previous step.

Now you have a local copy of the project that you can work on.

## Project Instructions

To complete this project, you need to follow these instructions:

Create a **`Hangman`** class that represents the game logic. The constructor
should take two parameters: **`word`** and **`remainingGuesses`**. The `word` is
a string that represents the secret word to guess, and the `remainingGuesses` is
a number that indicates how many wrong guesses are allowed before the game is
over. The class should also have the following properties and methods:

- **`word`**: an array of lowercase letters that represents the secret word.
- **`remainingGuesses`**: a number that indicates how many wrong guesses are
  left.
- **`guessedLetters`**: an array that stores the letters that have been guessed
  by the player.
- **`status`**: a string that indicates the current status of the game. It can
  be one of the following values: “playing”, “failed”, or “finished”.
- **`getPuzzle()`**: a method that returns a string that represents the current
  state of the puzzle.
  - It should replace the unguessed letters with asterisks (*), and keep the
    guessed letters and spaces as they are. For example, if the word is “cat”
    and the guessed letters are “a” and “t”, it should return “*at”.
- **`makeGuess(guess)`**: a method that takes a single letter as a parameter and
  updates the game state accordingly.
  - It should check if the guess is unique and valid (a single lowercase
    letter), and if so add it to the `guessedLetters` array.
  - It should also decrement the `remainingGuesses` by one, but only if the
    letter has not been guessed previously. Finally, it should call another
    method called **calculateStatus()** to update the `status` property based on
    the current state of the game.
- **`calculateStatus()`**: a method that updates the `status` property based on
  the current state of the game.
  - It should check if the player has guessed all the letters in the word, in
    which case it should set the `status` to `“finished”`.
  - It should also check if the player has run out of guesses, in which case it
    should set the `status` to `“failed”`. Otherwise, it should set the `status`
    to `“playing”`.
- **`getStatusMessage()`**: a method that returns a string that represents a
  message to display to the player based on the status of the game.
  - It should use different messages for each possible status value. For
    example, if the `status` is `“playing”`, it should return something like
    `“Remaining Guesses: 5”`.
  - If the `status` is `“failed”`, it should return something like
    `“Nice try! The word was cat”`.
  - If the `status` is `“finished”`, it should return something like
    `“Great work! You guessed the word!”`.

The **`script.js`** file should contain the code for interacting with the DOM
and creating an instance of the `Hangman` class. It should do the following:

- Define a global variable called **`hangman`** and assign it to a new instance
  of `Hangman` with a random word and a fixed number of guesses.
  - You can use any words you like, but make sure they are lowercase and have no
    special characters or numbers.
    - You can also use any number of guesses you like, but make sure it is
      reasonable for the difficulty level of your words.
- Define a function called **`render()`** that updates the `puzzle` and `status`
  paragraphs with their respective values from `hangman.getPuzzle()` and
  `hangman.getStatusMessage()`.
  - The function should display the `puzzle`, `status`, and guessed letter
    values in the appropriate HTML elements.
  - The function should NOT display any duplicate letters from the guessed
    letter array.
  - The function should use the methods and properties of the `hangman` object
    to get the values.
- Call `render()` once at the beginning of your script to display the initial
  state of the game to the player.
- Add an event listener to the `window` object that listens for the `“keypress”`
  event.
  - The callback function should do the following:
    - Get the pressed key from the event object and store it in a variable
      called **`guess`**.
- Call `hangman.makeGuess(guess)` to update the game state with the player’s
  guess.
- Call `render()` again to display the updated state of the game to the player.

Save your files and open `index.html` in your browser. You should see a web page
with a puzzle and a status message. You should be able to play the hangman game
by typing letters on your keyboard. You should see the puzzle and status message
change accordingly as you make guesses. You should also see a message when you
win or lose the game.
