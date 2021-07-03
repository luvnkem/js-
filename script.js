var person = 'Nkem';
var age = 20;
var rightWrong = false;
var numberChildren = null;
var definition = undefined;


console.log(person);
console.log(age);
console.log(rightWrong);
console.log(numberChildren);
console.log(definition);


//.innerHTML

document.getElementById('name') .innerHTML = person;
document.getElementById('number') .innerHTML = age;
document.getElementById('boolean') .innerHTML = rightWrong;
document.getElementById('null') .innerHTML = numberChildren;
document.getElementById('undefined') .innerHTML = definition;




//addition operators
var number1 = 10;
var number2 = 20;
var sum =number1 + number2;
console.log(sum);


//multiplication operators
var a = 5;
var b = 6;
var multiple = a * b;
console.log(multiple);

//subtraction operators
var c = 30;
var d = 10;
var subtraction = c - d;
console.log(subtraction);


//division operators
var e = 30;
var f = 10;
var division = e/f;
console.log(division);


//increment operators
var g = 30;
g++;
console.log('increment operators', g);


//decrement operators
var h= 50;
h--;
console.log('increment operator', h);

