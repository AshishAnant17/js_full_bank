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



