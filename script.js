const quote = "the quick brown fox jumps over the lazy dog".split(" ");

function newGame() {
  const quoteDisplayElement = document.getElementById("words");
  quoteDisplayElement.innerText = quote.join(" ");
}
// newGame();

const random_quote_api_url = "http://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("words");

function getRandomQuote() {
  return fetch(random_quote_api_url)
    .then((response) => response.json())
    .then((data) => data.content);
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  quoteDisplayElement.innerText = quote;
}
// renderNewQuote();

function fetchRandomWords() {
  const wordCount = 50; // Change this to the desired number of random words
  const apiUrl = `https://random-word-api.herokuapp.com/word?number=${wordCount}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((words) => {
      // Filter words less than 8 characters
      const filteredWords = words.filter((word) => word.length < 8);
      // Process the fetched words
      displayRandomWords(filteredWords);
    })
    .catch((error) => {
      console.error("Error fetching random words:", error);
    });
}

// Function to display the fetched random words
function displayRandomWords(words) {
  const randomWordsElement = document.getElementById("words");
  randomWordsElement.innerHTML = words.map((word) => `${word}`).join(" ");
}

// Call the fetchRandomWords function to get random words on page load
// fetchRandomWords();

const words = [
  "apple",
  "banana",
  "car",
  "dog",
  "moon",
  "train",
  "bird",
  "cat",
  "book",
  "sun",
  "fish",
  "tree",
  "ship",
  "rose",
  "mouse",
  "rain",
  "duck",
  "frog",
  "cake",
  "kite",
  "lamp",
  "nest",
  "ocean",
  "pear",
  "quilt",
  "robot",
  "snail",
  "tiger",
  "umbrella",
  "violin",
  "whale",
  "xylophone",
  "yogurt",
  "zebra",
  // Add more simple words as needed
];

// Function to fetch random words from the words array
function fetchRandomWords() {
  const wordCount = 10; // Change this to the desired number of random words
  const randomWords = [];

  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(words[randomIndex]);
  }

  // Process the fetched words
  displayRandomWords(randomWords);
}

// Function to display the fetched random words
function displayRandomWords(words) {
  const randomWordsElement = document.getElementById("words");
  randomWordsElement.innerHTML = words.map((word) => `${word}`).join(" ");
}

// Add event listener to the "Restart" button
// document.getElementById('restart-button').addEventListener('click', function () {
//   fetchRandomWords(); // Call fetchRandomWords() when the button is clicked
// });

// Add event listener for Enter key press on the button
// document.getElementById('restart-button').addEventListener('keypress', function () {
//   fetchRandomWords(); // Call fetchRandomWords() when the button is clicked
// });

// Call the fetchRandomWords function to get random words on page load
// fetchRandomWords();

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function randomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function formatWord(word) {
  return `<div class="word"><span class="letter">${word
    .split("")
    .join('</span><span class="letter">')}</span></div>`;
}

function addClass(element, name) {
  element.className += " " + name;
}

function removeClass(element, name) {
  element.className = element.className.replace(name, " ");
}

function newGame() {
  document.getElementById("words").innerHTML = "";
  for (let i = 0; i < 100; i++) {
    document.getElementById("words").innerHTML += formatWord(randomWord());
  }
  addClass(document.querySelector(".word"), "current");
  addClass(document.querySelector(".letter"), "current");
}
newGame();

document.getElementById("game").addEventListener("keyup", (event) => {
  // console.log(event);
  const key = event.key;
  const currentWord = document.querySelector(".word.current");
  const currentLetter = document.querySelector(".letter.current");
  const expectedLetter = currentLetter?.innerHTML || " ";
  console.log({key, expectedLetter});

  const isLetter = key.length === 1 && key !== " ";
  const isSpace = key === " ";
  const isBackspace = key === 'Backspace';
  const isFirstLetter = currentLetter === currentWord.firstChild;

  if (isLetter) {
    if (currentLetter) {
      addClass(currentLetter, key === expectedLetter ? "correct" : "incorrect");
      removeClass(currentLetter, "current");
      if (currentLetter.nextSibling) {
        addClass(currentLetter.nextSibling, "current");
      }
    } else {
      const incorrectLetter = document.createElement("span");
      incorrectLetter.innerHTML = key;
      incorrectLetter.className = "letter incorrect extra";
      currentWord.appendChild(incorrectLetter);
    }
  }

  if (isSpace) {
    if (expectedLetter !== " ") {
      const lettersToInvalidate = [...document.querySelectorAll(".word.current .letter:not(.correct)"),];
      lettersToInvalidate.forEach((letter) => {
        addClass(letter, "incorrect");
      });
    }
    removeClass(currentWord, "current");
    addClass(currentWord.nextSibling, "current");
    if (currentLetter) {
      removeClass(currentLetter, "current");
    }
    addClass(currentWord.nextSibling.firstChild, "current");
  }

  if (isBackspace) {
    if (currentLetter && isFirstLetter) {
      // make previous word current, last letter current
      if (currentWord.previousSibling) {
        removeClass(currentWord, "current");
        addClass(currentWord.previousSibling, "current");
        removeClass(currentLetter, "current");
        addClass(currentWord.previousSibling.lastChild, "current");
        removeClass(currentWord.previousSibling.lastChild, "incorrect");
        removeClass(currentWord.previousSibling.lastChild, "correct");
      }
    }
    if (currentLetter && !isFirstLetter) {
      // move back one letter, invalidate letter
      removeClass(currentLetter, "current");
      addClass(currentLetter.previousSibling, "current");
      removeClass(currentLetter.previousSibling, "incorrect");
      removeClass(currentLetter.previousSibling, "correct");
      }
    if (!currentLetter) {
      addClass(currentWord.lastChild, "current");
      removeClass(currentWord.lastChild, "incorrect");
      removeClass(currentWord.lastChild, "correct");
    }
  }

  // move lines/words
  if (currentWord.getBoundingClientRect().top > 240) {
    const words = document.getElementById("words");
    const margin = parseInt(words.style.marginTop || "0px");
    words.style.marginTop = (margin - 50) + "px";
  }

  // move cursor
  const nextLetter = document.querySelector(".letter.current");
  const nextWord = document.querySelector(".word.current");
  const cursor = document.getElementById("cursor");
  cursor.style.top = nextWord.getBoundingClientRect().top + -2 + 'px';
  cursor.style.left = (nextLetter || nextWord).getBoundingClientRect()[nextLetter ? 'left' : 'right'] + -7 + "px";
});

document
  .getElementById("restart-button")
  .addEventListener("click", function () {
    newGame();
  });
