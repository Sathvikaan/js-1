// quesn-1
var someFunctionname = (a,b)=>{
    return a+b;
}
console.log(someFunctionname(3,4))

// quesn-2
var add = (a, b) => { 
   return a + b; 
    }
console.log(add(2,3))

// quesn-3
var square=(n)=>n * n;
console.log(square(3)) 

// quesn-4
// How does the syntax change for an arrow function when it takes exactly one parameter?
// Explain why parentheses might be omitted in this case.
var singleParameter = x=>{
    return x+5;
}
console.log(singleParameter(4))

// quesn-5
// Concise Body vs. Block Body:
// Write two versions of an arrow function that calculates the cube of a number. One
// version should use a concise body with an implicit return, and the other should use a
// block body with an explicit return. Compare the two syntaxes in your code.

var concisebody=x=>x**3;
console.log(concisebody(3))

var blockbody = x=>{
    return x**3;
}
console.log(blockbody(3))

// quesn-6
// Multiple Parameters and Parentheses:
// Create an arrow function that takes two parameters (
// of subtracting 
// a and b) and returns the result
// b from a. Emphasize the syntax with parentheses around the
// parameters.

var subtract=(a,b)=>console.log(b-a);
subtract(5,14)

// quesn-7
// Write an arrow function that takes no parameters and returns a fixed message, such as
//  "Hello, World!" . Demonstrate the proper syntax for an arrow function with no
//  parameters.
var noPara=()=>console.log("Hello, "+"World!")
noPara()