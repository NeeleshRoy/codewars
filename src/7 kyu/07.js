function divisors(integer) {
  const output = [];
  for (let i = 2; i <= integer; i++) {
		    if (integer % i === 0 && !output.includes(i) && i !== integer) {
  	  output.push(i);
		}
  }
  if (!output.length) return `${integer} is prime`;
  return output;
}
