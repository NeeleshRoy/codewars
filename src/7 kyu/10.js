function disemvowel(str) {
  return str.split('').filter((char) => !/[aeiouAEIOU]/g.test(char)).join('')
}