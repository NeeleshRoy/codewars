// Return the nth triangular number
function triangular(n) {
  if (n <= 0) return 0;
  let sum = 0;
  while (n !== 0) {
    sum = sum + n;
    --n;
  }
  return sum;
}

triangular();
