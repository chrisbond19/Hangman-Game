// Creates a random word used from the array.
  var randomWordArray = ["zombie", "michael", "jackson", "thiller", "monster"]
  var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
  //Test random word
  console.log(randomWord);
//Splits the choosen word into individual letters


var wins = 0;
var losses = 0;
var guessesLeft = 10;
var rightWord = [];
var wrongWord = [];
var doubleWord = ['a','b','c',
                  'd','e','f',
                  'g','h','i',
                  'j','k','l',
                  'm','n','o',
                  'p','q','r',
                  's','t','u',
                  'v','w','x',
                  'y','z'];


// Creates underscores for the amount of letters in a word.
var underScores = [];

for(var i = 0; i < randomWord.length; i++){
      // underScores.push("_");
      underScores[i]="_";  
}


var lettersLeft = randomWord.length;

if (lettersLeft > 0){
  underScores.join(" ");
  lettersLeft--;
}




// Create user guess
document.onkeyup = function(event) {
  var userKey = event.key;
  console.log(userKey);
  // If the user chooses correct letter
  if (randomWord.indexOf(userKey) > -1){
    // Push letters to right word array
    rightWord.push(userKey);
    //Function which detects if the string contains duplicate characters
    //If it does, then you want to find the FIRST unfilled index
    //If it does not, then you can simply push the letter 
    underScores[randomWord.indexOf(userKey)] = userKey;
    // Detects which underscore should be replaced
    if (underScores.join(' ') == randomWord) {
      alert("You win!");
    }

    console.log(rightWord);
  }
  if (guessesLeft === 0){
    alert("You lose! Prepare for Thiller!");
    losses++;
  }
  else{
    // Push letters to wrong word array
    wrongWord.push(userKey);
    guessesLeft--;
    console.log(wrongWord);
  }

          var html =
          "<h1>The Hangman Game</h1>" +
          "<p><h2>Guess what letter I'm thinking of..</h2></p>" +
          "<br>" +
          "<br>" +
          "<p>" + underScores.join(" ") + "</p>" +
          "<br>" +
          "<br>" +
          "<p>You have " + lettersLeft + " letters left</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

};

