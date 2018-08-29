function spinWords(text){
  const words = text.split(' ').map((word) => { return word.length >= 5 ? word.split('').reverse().join('') : word })
  return words.join(' ')
}