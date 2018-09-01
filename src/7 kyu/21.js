function longest(s1, s2) {
  const set1 = new Set((s1.split('').concat(s2.split(''))).sort())
  let output = ''
   set1.forEach(e => output += e)
   
   return output
}