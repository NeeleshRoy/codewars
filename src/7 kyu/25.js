function removeSmallest(numbers) {
  let input = numbers.slice()
  const min = Math.min.apply(null, input)
  input.splice(input.indexOf(min), 1)
  return input
}