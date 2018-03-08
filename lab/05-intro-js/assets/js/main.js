// console

console.log('hello world!');
console.log ('');

console.log ('');

// Strings

console.log('Strings -');
console.log('I want a smoothie');
console.log(':P' + ':0');

console.log ('');

//Numbers

console.log('Numbers -')
console.log(8);
console.log(8+8);
console.log(8-8);
console.log(8*8);
console.log(8%33);


console.log ('');

// Strings + Numbers
console.log('strings & numbers -');

console.log('8 * 8');
console.log('cheese' + 8);
console.log('I am' + (8 * 8) + 'yrs old');
console.log ('8*8', 8 * 8);

console.log ('');

// Booleans
console.log('Booleans -');
console.log(true,false);
console.log('3 > 4', 3 > 4); // comparaisons
console.log(2 <= 2);
console.log ('2 <= 2',2 <= 2);
console.log ('2 > 1 && 2 < 12',2 > 1 && 2 < 12) // And operation
console.log(5 > 12 || 6<18); //OR operator


console.log ('');

// Three basic types
console.log('Basic Types -');

console.log(typeof 'hello', typeof(8-7), typeof (2>1));


// Variables

console.log('Variables -')

var five = 5;
console.log ('five', five);
var ten = 10;
console.log('five + ten', five + ten);
console.log('five * ten', five * ten);


// Altering variables
console.log('Variables -');

var mystudentdebt= 800;
console.log('mystudentdebt', mystudentdebt)
mystudentdebt = mystudentdebt - 100;
console.log('mystudentdebt', mystudentdebt)
mystudentdebt -= 100;
console.log('mystudentdebt', mystudentdebt);
mystudentdebt += 100;
console.log('mystudentdebt', mystudentdebt);
mystudentdebt++; 100; //+1
console.log('mystudentdebt', mystudentdebt);
mystudentdebt--; 100; //+1
console.log('mystudentdebt', mystudentdebt);

//Arrays

console.log('arrays -')

var myluckynumbers = [3, 7, 'eight', (12+2), 21];
console.log('myluckynumbers', myluckynumbers); //[val,val, etc]
console.log(myluckynumbers[1])


//Objects
console.log('Objects -')

var me = {
name: 'Bryant',
age: 27,
nativeNewYorker: false
};

console.log('me', me);
console.log("me['name']:", me['name']);

//functions

console.log('Functions -');

var sayhi = function() {
console.log('hi')
console.log('hello')
console.log('hi')
};

sayhi()
sayhi()
sayhi()
sayhi()
sayhi()

var saysomemessage =  function(message) { //message is the name of the argument
console.log (message);
}

console.log("saysomemessage'('hello'):");
saysomemessage('hello');
saysomemessage('goodbye');

var addNumbers = function(num1, num2) {
return num1 + num2
}
console.log(addNumbers(8,12));
