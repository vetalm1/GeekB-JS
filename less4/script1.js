'use strict'
var num = prompt("Ведите число от 0 до 999");
var convert = {
	единицы: 0,
	десятки: 0,
	сотни: 0,
	convertNumber: function(num){
		if (parseInt(num) <= 999) {
			if (parseInt(num) < 100) {
				this.единицы = parseInt(num.charAt(1));
				this.десятки = parseInt(num.charAt(0));
			} else {
				this.единицы = parseInt(num.charAt(2));
				this.десятки = parseInt(num.charAt(1));
				this.сотни = parseInt(num.charAt(0));
			}
		} else { console.log("Вы ввели число больше 999")}
	}
}

convert.convertNumber(num);
console.log(convert);