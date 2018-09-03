function breakChocolate(n,m) {
  return (!n || !m ) ? 0 : (n - 1) + (n * (m - 1))
}