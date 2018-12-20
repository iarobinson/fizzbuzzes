// JavaScript

function fizzBuzz(n) {
  for (var i = 1; i <= n; i += 1) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log('fizzBuzz');
    } else if (i % 5 == 0) {
      console.log('fizz');
    } else if (i % 3 == 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(16)
