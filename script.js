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

//const words = "in one good real one not school set they state high life consider on and not come what also for set point can want as while with of order child about school thing never hold find order each too between program work end you home place around while place problem end begin interest while public or where see time those increase interest be give end think seem small as both another a child same eye you between way do who into again good fact than under very head become real possible some write know however late each that with because that place nation only for each change form consider we would interest with world so order or run more open that large write turn never over open each over change still old take hold need give by consider line only leave while what set up number part form want against great problem can because head so first this here would course become help year first end want both fact public long word down also long for without new turn against the because write seem line interest call not if line thing what work people way may old consider leave hold want life between most place may if go who need fact such program where which end off child down change to from people high during people find to however into small new general it do that could old for last get another hand much eye great no work and with but good there last think can around use like number never since world need what we around part show new come seem while some and since still small these you general which seem will place come order form how about just also they with state late use both early too lead general seem there point take general seem few out like might under if ask while such interest feel word right again how about system such between late want fact up problem stand new say move a lead small however large public out by eye here over so be way use like say people work for since interest so face order school good not most run problem group run she late other problem real form what just high no man do under would to each too end point give number child through so this large see get form also all those course to work during about he plan still so like down he look down where course at who plan way so since come against he all who at world because while so few last these mean take house who old way large no first too now off would in this course present order home public school back own little about he develop of do over help day house stand present another by few come that down last or use say take would each even govern play around back under some line think she even when from do real problem between long as there school do as mean to all on other good may from might call world thing life turn of he look last problem after get show want need thing old other during be again develop come from consider the now number say life interest to system only group world same state school one problem between for turn run at very against eye must go both still all a as so after play eye little be those should out after which these both much house become both school this he real and may mean time by real number other as feel at end ask plan come turn by all head increase he present increase use stand after see order lead than system here ask in of look point little too without each for both but right we come world much own set we right off long those stand go both but under now must real general then before with much those at no of we only back these person plan from run new as own take early just increase only look open follow get that on system the mean plan man over it possible if most late line would first without real hand say turn point small set at in system however to be home show new again come under because about show face child know person large program how over could thing from out world while nation stand part run have look what many system order some one program you great could write day do he any also where child late face eye run still again on by as call high the must by late little mean never another seem to leave because for day against public long number word about after much need open change also".split(" ");
const words = [
  "the",
  "be",
  "of",
  "and",
  "a",
  "to",
  "in",
  "he",
  "have",
  "it",
  "that",
  "for",
  "they",
  "I",
  "with",
  "as",
  "not",
  "on",
  "she",
  "at",
  "by",
  "this",
  "we",
  "you",
  "do",
  "but",
  "from",
  "or",
  "which",
  "one",
  "would",
  "all",
  "will",
  "there",
  "say",
  "who",
  "make",
  "when",
  "can",
  "more",
  "if",
  "no",
  "man",
  "out",
  "other",
  "so",
  "what",
  "time",
  "up",
  "go",
  "about",
  "than",
  "into",
  "could",
  "state",
  "only",
  "new",
  "year",
  "some",
  "take",
  "come",
  "these",
  "know",
  "see",
  "use",
  "get",
  "like",
  "then",
  "first",
  "any",
  "work",
  "now",
  "may",
  "such",
  "give",
  "over",
  "think",
  "most",
  "even",
  "find",
  "day",
  "also",
  "after",
  "way",
  "many",
  "must",
  "look",
  "before",
  "great",
  "back",
  "through",
  "long",
  "where",
  "much",
  "should",
  "well",
  "people",
  "down",
  "own",
  "just",
  "because",
  "good",
  "each",
  "those",
  "feel",
  "seem",
  "how",
  "high",
  "too",
  "place",
  "little",
  "world",
  "very",
  "still",
  "nation",
  "hand",
  "old",
  "life",
  "tell",
  "write",
  "become",
  "here",
  "show",
  "house",
  "both",
  "between",
  "need",
  "mean",
  "call",
  "develop",
  "under",
  "last",
  "right",
  "move",
  "thing",
  "general",
  "school",
  "never",
  "same",
  "another",
  "begin",
  "while",
  "number",
  "part",
  "turn",
  "real",
  "leave",
  "might",
  "want",
  "point",
  "form",
  "off",
  "child",
  "few",
  "small",
  "since",
  "against",
  "ask",
  "late",
  "home",
  "interest",
  "large",
  "person",
  "end",
  "open",
  "public",
  "follow",
  "during",
  "present",
  "without",
  "again",
  "hold",
  "govern",
  "around",
  "possible",
  "head",
  "consider",
  "word",
  "program",
  "problem",
  "however",
  "lead",
  "system",
  "set",
  "order",
  "eye",
  "plan",
  "run",
  "keep",
  "face",
  "fact",
  "group",
  "play",
  "stand",
  "increase",
  "early",
  "course",
  "change",
  "help",
  "line"
];
let gameTime = 30 * 1000;
// window.timer = null;
// window.gameStart = null;

function addClass(element, name) {
  element.className += " " + name;
}

function removeClass(element, name) {
  element.className = element.className.replace(name, " ");
}

function randomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function formatWord(word) {
  return `<div class="word"><span class="letter">${word
    .split("")
    .join('</span><span class="letter">')}</span></div>`;
}

function newGame() {
  window.timer = null;
  window.gameStart = null;
  document.getElementById("words").innerHTML = "";
  for (let i = 0; i < 200; i++) {
    document.getElementById("words").innerHTML += formatWord(randomWord());
  }
  addClass(document.querySelector(".word"), "current");
  addClass(document.querySelector(".letter"), "current");
  document.getElementById("timer").innerHTML = gameTime / 1000;
  // window.timer = null;

  const gameElement = document.getElementById("game");
  gameElement.focus();
}

function setTimer(selectedTime) {
  gameTime = selectedTime * 1000;
  document.getElementById("timer").innerHTML = gameTime / 1000;
  restartGame();
}

function getWPM() {
  const words = [...document.querySelectorAll(".word")];
  const lastTypedWord = document.querySelector(".word.current");
  const lastTypedWordIndex = words.indexOf(lastTypedWord) + 1;
  const typedWords = words.slice(0, lastTypedWordIndex);
  const correctWords = typedWords.filter(word => {
    const letters = [...word.children];
    const incorrectLetters = letters.filter(letter => letter.className.includes("incorrect"));
    const correctLetters = letters.filter(letter => letter.className.includes("correct"));
    return incorrectLetters.length === 0 && correctLetters.length === letters.length;
  });
  return correctWords.length / gameTime * 60000;
}

function resetCursor() {
  const firstWord = document.querySelector(".word");
  const firstLetter = firstWord.querySelector(".letter");
  const cursor = document.getElementById("cursor");
  cursor.style.top = "207px";
  cursor.style.left = "28px";
}

function restartGame() {
  clearInterval(window.timer);
  window.gameStart = null;
  removeClass(document.getElementById("game"), "over");
  resetCursor();
  newGame();
}

function gameOver() {
  clearInterval(window.timer);
  // console.log(window.timer);
  addClass(document.getElementById('game'), 'over');
  const result = getWPM();
  document.getElementById('timer').innerHTML = `WPM: ${result} (press enter to start new game)`;
  resetCursor();
  // document.getElementById("restart-button").addEventListener("click", () => {
  //   // gameOver();
  //   removeClass(document.getElementById("game"), "over");
  //   newGame();
  // });
  // document.getElementById("restart-button").addEventListener("click", restartGame); // Add the click event listener here
  document.getElementById("game").addEventListener("keyup", (event) => {
    if (event.key === "Enter") { // Check for Enter key (key code 13)
      restartGame();
    }
  });
  // clearInterval(window.timer);
  // addClass(document.getElementById("game"), "over");
  // document.getElementById("timer").innerHTML = `WPM: ${getWPM()}`;

  // window.timer = null;
  // window.gameStart = null;

  // resetCursor();

  // setTimeout(() => {
  //   removeClass(document.getElementById("game"), "over");
  //   const gameElement = document.getElementById("game");
  //   gameElement.focus(); // Set focus back to the game area after removing "over" class
  // }, 0);
}

document.getElementById("game").addEventListener("keyup", (event) => {
  // console.log(event);
  const key = event.key;
  const currentWord = document.querySelector(".word.current");
  const currentLetter = document.querySelector(".letter.current");
  const expectedLetter = currentLetter?.innerHTML || " ";
  const isLetter = key.length === 1 && key !== " ";
  const isSpace = key === " ";
  const isBackspace = key === 'Backspace';
  const isFirstLetter = currentLetter === currentWord.firstChild;
  console.log({key, expectedLetter});

  if (document.querySelector("#game.over")) {
    return;
  }

  if (!window.timer && isLetter) {
    window.timer = setInterval(() => {
      if (!window.gameStart) {
        window.gameStart = (new Date()).getTime();
      }
      const currentTime = (new Date()).getTime();
      const msPassed = currentTime - window.gameStart;
      const sPassed = Math.round(msPassed / 1000);
      const sLeft = (gameTime / 1000) - sPassed;
      if (sLeft <= 0) {
        gameOver();
        return;
      }
      document.getElementById("timer").innerHTML = sLeft;
    }, 0);
  }

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
  if (currentWord.getBoundingClientRect().top > 270) {
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

// Add event listener to the restart button for clicks
// document.getElementById("restart-button").addEventListener("click", () => {
//   gameOver();
//   newGame();

//   const gameElement = document.getElementById("game");
//   gameElement.focus();
// });

// Add event listener to the game element for Enter key press
// document.getElementById("game").addEventListener("keyup", (event) => {
//   if (event.key === "Enter") { // Check for Enter key (key code 13)
//     gameOver();
//     newGame();
//   }
// });

// window.onload = function () {
//   const gameElement = document.getElementById("game");
//   gameElement.focus();
// };

document.getElementById("15").addEventListener("click", () => setTimer(15));
document.getElementById("30").addEventListener("click", () => setTimer(30));
document.getElementById("60").addEventListener("click", () => setTimer(60));
document.getElementById("restart-button").addEventListener("click", restartGame);

newGame();
