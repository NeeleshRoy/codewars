var countBits = function(n) {
	return parseInt(n, 10).toString(2).split('').sort((a, b) => b - a).lastIndexOf('1') + 1;
};
