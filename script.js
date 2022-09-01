// I wrote this from memory, after reading about fizzbuzz months ago while doing research. it was wrong, but it worked.
/*
function fizzBuzz(iterations) {
  let lastWord = "buzz";
  let fizz = "fizz";
  let buzz = "buzz";
  for (let i = 0; i < iterations * 2; i++) {
    if (lastWord === buzz) {
      console.log(fizz);
      lastWord = fizz;
    } else {
      console.log(buzz);
      lastWord = buzz;
    }
  }
}
*/

//I wrote this after reading page 37 reminded me what the FizzBuzz challenge actually is
function fizzBuzz(iterations) {
  for (let i = 0; i < iterations; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
