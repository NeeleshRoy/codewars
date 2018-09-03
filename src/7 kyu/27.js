function calculateYears(principal, interest, tax, desired) {
  let calculated = principal, time = 0
  while(desired > calculated) {
    calculated = principal + (principal * interest - principal * interest * tax)
    principal = calculated
    ++time
  }
  return time
}