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

