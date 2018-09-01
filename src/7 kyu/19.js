function isIsogram(str){
  const letters = []
  str.toLowerCase().split('').forEach((l) => {
    if(!letters.includes(l)) letters.push(l)
  })
  return letters.length === str.length
}