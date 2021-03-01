//function declaration
//has parameters
function math(a, b, opperator) {
  switch (opperator) {
    case "+":
      return dustin(a, b);
      break;
    case "-":
      return ben(a, b);
      break;
    default:
      return;
  }
}
function dustin(a, b) {
  return a + b;
}
function ben(a, b) {
  return a - b;
}
//TWO BIGGEST RULES OF FUNCTIONS
//1. They need to be called.
//2. They need to return a value.

function addAgain(a, b) {
  return a + b + a + b;
}

//function call
//as arguments
let answer = math(9001, Math.PI, "+");

console.log(answer);

// JS reads from the top down then resolves bottom most nested-functions first
// "Call Stack"
// //  function a() {
//         function b () {
//             function c() {
//                 return(5 + 4);
//             }
//         }
// }

// Use correct terminology and cite line numbers
// be symantic with naming things
// math.pi is a thing
