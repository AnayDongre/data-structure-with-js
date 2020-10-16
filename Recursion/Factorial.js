// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  answer = number * findFactorialRecursive(number - 1);
  console.log(answer);
  return answer;
}

function findFactorialIterative(number) {
  let answer = 1;
  for (i = 2; i <= number; i++) {
    answer = answer * i;
  }
  console.log(answer);
  return answer;
}

findFactorialIterative(5);
findFactorialRecursive(5);
