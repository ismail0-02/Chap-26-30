console.log("Hello world!");

console.log("-----------Chap(25-30)------------");

// ques 1 //
// ans 1 //

// let userNum = prompt("Enter a positive integer:");
//  let con=String(userNum);
//  console.log(con);
//  let roundOff = Math.round(con)
//  console.log("Value after roundoff :",roundOff);
//  let floorValue = Math.floor(con)

//  console.log("Floor Value :",floorValue);
//  let ceilValue = Math.ceil(con)

//  console.log("Ceil Value  :",ceilValue);
 
 // ques 2 //
// ans 2 //

//  let userNum = prompt("Enter a negative integer:");
//  let con=String(userNum);
//  console.log(con);
//  let roundOff = Math.round(con)
//  console.log("Value after roundoff :",roundOff);
//  let floorValue = Math.floor(con)

//  console.log("Floor Value :",floorValue);
//  let ceilValue = Math.ceil(con)

//  console.log("Ceil Value  :",ceilValue);

 // ques 3 //
// ans 3 //

let num = -5
let absoluteValue=Math.abs(num);
console.log("Value ----->",num);

console.log("The absolute value of",num,"is :",absoluteValue);
 

 // ques 4 //
// ans 4//
let randomNum = Math.random();
let diceRoll = Math.round(randomNum * 9) + 1; // Scale to 1-6
console.log("Random dice value is :",diceRoll);


// ques 5 //
// ans 5 //

let randomNum1 = Math.random();
randomNum1 = Math.round(randomNum1 *1)+1;
if (randomNum1 == 1){
    console.log("Random coin value is Head :",randomNum1);
    
}else{
    console.log("Random coin value is Tail :",randomNum1);
}

// ques 6 //
// ans 6 //
let randomNum2 = Math.random();
let int100 = Math.round(randomNum2 *99)+1;
console.log("Random number between 1 till 100 :",int100);


// ques 7 //
// ans 7 //


// ques 8 //
// ans 8 //
// let secretNum = Math.round(Math.random()*9)+1;
// console.log(secretNum);
// let userGuess = prompt("Enter a number between 1 to 10 to guess the secret number ")
// userGuess = Number(userGuess);
// if (userGuess === secretNum){
// alert("Congratulation ! You guessed the secret number");
// }
// else{
//     alert("Try again ! ");
// }







