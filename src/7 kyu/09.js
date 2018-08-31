function getCount(str) {
	const match = str.match(/[aeiou]/g);
	return match ? match.length : 0;
}
