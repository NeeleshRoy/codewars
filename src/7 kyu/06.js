function GetSum(a, b) {
	let c = a;
	let d = b;
	let sum = 0;

	if (c > d) {
		c = b;
		d = a;
	}

	while (c <= d) {
		sum += c;
		++c;
	}

	return sum;
}
