function accum(s) {
  let output = ''
  s.split('').forEach((element, index) => {
    let j = -1
    let capitalize = true
    while(j !== index) {
    if(capitalize) { 
      output += element.toUpperCase()
      capitalize = false
    }
    else output += element.toLowerCase()
      ++j
    }
    output += '-'
  });
  
  return output.slice(0, -1)
}
