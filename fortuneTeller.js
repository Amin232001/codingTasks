let mumsName = String(prompt("What's your mum's first name?"));
let street = String(prompt("What was the name of the street you grew up in?"));
let favColor = String(prompt("What was your favourite color as a child?"));
let age = Number(prompt("What is your age?"));
let num = Number(prompt("Choose a number between 1 and 10"));
console.log(`In ${num} years you are going to meet your best friend ${mumsName} ${street}.
You will get married in ${age + num} years and have ${age % num} children.
In ${Math.round(age / num)} years you are going to dye your hair ${favColor}.`);