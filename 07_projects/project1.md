//projects related to dom

//project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

solution code

```javaScript
console.log("hitesh")

const buttons = document.querySelectorAll('.button');
//To check you can do like this
//console.log(buttons);

const body = document.querySelector('body');

//for loop on buttons

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    }

    if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }

    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }

    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }
  });
});


```

solution code 2 bmi calculator
```javaScript
const form = document.querySelector('form');
//this use case will give you empty results
//const height=parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  height = parseInt(document.querySelector('#height').value);
  weight = parseInt(document.querySelector('#weight').value);
  results = document.querySelector('#results');

  //check the validity of height and weight

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter valid height ${height}`;
  }else
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter valid weight ${weight}`;
  }else{
    const bmi=(weight)/((height*height)/10000).toFixed(2);
    results.innerHTML=`<span> ${bmi} </span>`;
  }
});
```
solution code 3 Time
``` javaScript
const clock=document.querySelector('#clock')
//pahle to hum directly current time ko print kar skte hai 
//let date=new Date();
//console.log(date.toLocaleTimeString()); iska output console me aayega 

//current time lagatar dikhta rhega but we need to set interval taki set ho jaye arr ekk time ke baad hh time dikhe 


setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000);
```
``` solution 4th guess a number
```javaScript
//first thing is we will generate random number that will stay with my game to match and give result
let randomnumber = parseInt(Math.random() * 100 + 1);

//second,we will go for button and input from user

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
//for previous guess

const guessslot = document.querySelector('.guesses');

//attempts left

const remaining = document.querySelector('.lastResult');

//now to check whether input is low or high

const lowOrHigh = document.querySelector('.lowOrHi');

//to startover
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];

let numguess = 1;

let playgame = true;

//now functions
//First thing we will check whether he is ready to play or not

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
//1st function validateGuess

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevguess.push(guess);
    //abb check karenge kya iska limit pura ho gya hai yaa bach hua hai
    if (numguess == 11) {
      displayGuess(guess);
      displayMessage(`Game Over,Correct Guess Was ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnumber) {
    displayMessage('Hurrah,correct guess');
    endGame();
  } else if (guess < randomnumber) {
    displayMessage(`Number is too low`);
  } else {
    displayMessage(`Number is too high`);
  }
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  //ye tin chz karega pahle user input wala boc ko khali kar dega taki user input daal sake
  //2.guess array me number ko daal dega taki check
  //3.remaining attemps ko update karega
  userinput.value = '';
  guessslot.innerHTML += `${guess} ,`;

  numguess++;

  remaining.innerHTML = `${11 - numguess}`;
}

function endGame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  //ab hamko ekk naya button banana hai jisse ham kuch vv add kar pay e

  p.classList.add('button');
  p.innerHTML = `<h2 id="NewGame">Start a New Game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newGame();
}

function newGame() {
  //first thing is kk newgame wala button jo add kiya hai css ss usko activate karo

  const newGameButton = document.querySelector('#NewGame');
  newGameButton.addEventListener('click', function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;

    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
  });
}
```



