'use strict'

var arr = [];
var num=2;
var count=0;

	while (num <= 100) {
		count = 0;
		for (let i=2; i<num; i++) {
			if (num % i == 0 ) {
				count++;
			}
		}
			if (count===0) {
				arr.push(num);
			}
			num++;
	}
	alert(arr);
