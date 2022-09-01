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
