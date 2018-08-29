function XO(str) {
	let x = 0;
	let y = 0;
	str.toLowerCase().split('').forEach((el) => {
		if (el === 'x') ++x;
		if (el === 'o') ++y;
	});

	return x === y;
}
