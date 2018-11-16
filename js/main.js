'use strict' 
// use strict enable switching to the new modern mode. if not used strict program would be in the default mode. 

// ===================================variables========================

// used to store data or information
// to create variables we use var or let


// Example
// var message

// assignment operator = (not math operator)

// ==========================string========================================
// set of characters surrounded by quotation marks
// Example

// var message= "hello world" ;

// alert(message);

// var name='nate';
// var age=43;
// var gender='female'

// console.log(name);
// console.log(age);
// console.log(gender);
// note: always remember to close string with the same quotation marks

// operators: + - * /

// the + operator is used for concatination

// var name = prompt('enter your first name:');

// choose meaningful names
// do not used reserved words
// follow conventions

// execise
// My name is jayson. I am 23 years old. my favourite food is nandoos. I live at 26 tritonia street lentegeur mitchells plain
// possible variables
// var name = 'jayson', age = 23,  favFood= 'nandoos', address='26 tritonia street lentegeur mitchells plain';


// console.log('My name is '+name+ '.I am ' +age+ ' years old. my favourite food is '+ favFood+ '. I live at '+ address);

// =====================conditional statements================================
// condition: the state of something with regard to its appearance, quality, or working order.
// what is a condition?
// state
// circumstances
// factors
// appearance
// problem
// suppose we want to write a program that makes the user enter a number and then displays a message
// if the number is positive. here is the corresponding algorithm.

//////////////enter a number if the number is positive display message/////////////////

// the message should display only if the number is positive:this means it is subject to a condition

// the if statement

// var number = Number(prompt("enter a positive number:"));
// if(number>0){
//     console.log(number+' is positive')
// }else{
//     console.log(alert("don't lie to yourself"))
// }

// syntax?
// if(condition){
    // statement executed when the condition is met
// }
// boolean values= true or false
// boolean expressions can be created using the camparison operators
// ===equal to
// !== not equal to
/* < less than */
// <= less than or equal to
// > greater than
// >=greater or equal to

// alternative conditions
// less than or equal to 12
// display message in console

// var age= Number(prompt('enter your age'))

// if(age<=12 ){
//     console.log('you may not enter')
// }else{
//     console.log('rock on')
// }

// // nesting conditions
// var y=Number(prompt('enter a number:'));
// if(y>0){
//     console.log(y+' is positive');
// }else if (y<0) {
//     console.log(y+' is negative');
// } else {
//     console.log(y+' is zero')
// }

// write a program that helps people/community actually students decide what to wear based on the weather using the if/else/else if statement:
// sunny- shorts tshirt flipflops
//  cloudy- pullover
//  rainy- coat
//  windy- wind breaker
//  snowy- naked
// var x=0;
// while(x===0){
//     var weather=(prompt('what is the weather like today?:'))
//     if(weather==='cloudy'){
//     console.log(' pullover');
//     x++;
//     }else if (weather==='rainy') {
//         console.log('coat')
//         x++;
//     }
//     else if (weather==='sunny') {
//         console.log(' shorts and tshirt');
//         x++;
//     }
//     else if (weather==='windy') {
//         console.log('wind breaker ');
//         x++;
//     }
//     else if (weather==='snowy') {
//         console.log(' naked');
//         x++;
//     } else {
//         alert('please enter: sunny,rainy,windy,snowy or cloudy')
        
//     }

// }
// ========================loops================================
// repetition of something until goal is met
// execute a block of code infinite amount of times
// example:
// for(x=0; x<101;x++){
    // block of code here
// console.log(x);
// }

// a while loop: lets you repeat code while a certain condition is true.

// console.log('start program')
// let number =1;
// while(number<=10){
//     console.log(document.write('yelp !'))
//     number++
// }
// console.log('program end')
//////////// basic syntax////////////////
// if the condition is false, the code in the loop stops running or doesn't run
//////////for loop////////////
// for(initialization; condition; final-expression){
    // code
// }

// for(var counter=1; counter<=10; counter++){
// console.log(document.write('yelp'))
// var t = '2'
// var d='20'
// console.log(eval(d/t))
// }

// let letter=''
// while(letter !=='x'){
//     letter=prompt('type any letter or x to exit');
//     console.log(letter);
// }
// do {
//     var x=0
//     console.log('some more yelp! ')
// } while (x=0);

// =============functions==============
// block of code used to perform a specific task
// when creating a function = declaring a function
// give it a function name
// group of instructions that perform a particular task
// function sayHello(){
//     console.log('hello')
// }
// console.log('start of program')
// call function
// sayHello()
// console.log('end of program')

// function yelp(){
  
//     var name = prompt('who are you')
    
//     console.log(alert('hello '+ name))
// }
// yelp()
////////////the return property///////////
function sayHello(){
    return "hello";
}
console.log('start of program')
let result= sayHello()
// call function
console.log(result)
console.log('end of program')

// function myFuntion(){
    // calculate return value
    // ...

    // return returnValue;
// }

// get return value from myFunction
// var value= myFuntion();

var i =0
while(i<=4){
    console.log("hi")
    i++
}
  
