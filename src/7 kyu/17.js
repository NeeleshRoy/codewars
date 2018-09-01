function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  const sqrt = Math.sqrt(sq);
  
  if (sqrt % 1 === 0) {
    return (sqrt + 1) * (sqrt + 1);
  }

  return -1;
}