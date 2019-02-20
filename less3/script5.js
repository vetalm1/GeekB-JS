'use strict'
var p='x';
for (let i=0; i<20; i++) {
	for (let j=0; j<i; j++) {
		p=p+'x';
	}
	console.log(p);
	p='x';
}