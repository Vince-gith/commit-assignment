//Differnces between var, let and const

//var
//var declarations are globally scoped or function scoped, their variables can be updated and re-declared within its scope and var variables are initialized with undefined.

//let
//let is a blocked scoped, variables can be updated but not re-declared and variables are not initialized and let can be declared without being initialized.

//const is block scoped, variables can neither be updated nor re-declared, variables are not initialized but must be initialized during declaration.

//Data Types 
// 5 major Data types 

//1. Strings: these are collection of alphanumeric characters and symbols. we store lettrs and words with double quote (""), single quote ('') or a back tick (``). examples are ("Vincent"), ('vincemonerow12@gmail.com') and (`September43`).

//2. Number: These includes decimals and integers for mathematical calculations. Eg. (1247), (12.227).

//3. Booleans: these are data with only two states. eg. true or false, On and off

//4. Undefined: these are variables that has been created but has not been given a value. eg (let rhyme)-We are uncertain about what ryhme is because a value whether a number or string is not decelared.

// 5. Null: This is set intentionally as nothing. it means empty or nothing. Eg. 
//const rhyme2
// rhyme2 = null;



// let age = 23;
// console.log(age);

// //Assignmet 1
// function mul(a , b){
//     console.log(a + " * " + b + " = " , a*b)
// }

// mul (7,5);

// //Assignment 2
// function sub(a , b){
// console.log(a + " - " + b + " = " , a-b)
// }



//voter eligibiility 

// let age = 18;
// let citizen = true;





const age = prompt("Enter your age");

const citizen = prompt("Are you a citizen: Yes or No");

if (age < 18 && citizen === "no"){
    console.log("Not eligible at all")
}else if (age <= 18 && citizen === "yes"){
    console.log("You are not eligible because of your age")
}else if (age >= 18 && citizen ==="yes"){
    console.log("You are eligible to vote")
}else if (age >= 18 && citizen ==="no"){
    console.log("You are not eligible because you are not a citizen")
}

