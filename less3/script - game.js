'use strict'


var effort = 0;

function generateNumber() {
	let numberArray =[];
	while (numberArray.length < 4) {
		let generatedNumber = Math.floor(Math.random()*10);
		if (!numberArray.includes(generatedNumber.toString())) {
			numberArray.push(generatedNumber.toString());
		}
	}
	//console.log(numberArray);
	return numberArray;
}

function askNumber() {
	return parseInt(prompt("Угадайте число"));
}
function checkCow(bulls, generatedNumber,userNumber) {
	let count = 0;
	for (var i=0; i < generatedNumber.length; i++) {
		if (generatedNumber.includes(userNumber[i])) {
			count++;
		}
	}
	//if (bulls>count) { 
	//	return 0;
	//} else { return count;}
}

function checkBullsw(generatedNumber,userNumber) {
	let count = 0;
	for (let i=0; i<generatedNumber.length; i++) {
		if (generatedNumber[i]===userNumber[i]) {
			count++;
		}
	}
	return count;
}

function check(generatedNumber) {
	let userNumber = askNumber()
	.toString()
	.split(""); //преобразует в массив
	console.log("un - "+userNumber);
	if (generatedNumber.join() === userNumber.join()) {
		console.log('Ты угадал ' + effort);
		return true;
	} else {
		console.log("Кол-во попыток: " + effort + " , Кол-во быков: "+checkBullsw(generatedNumber,userNumber) + ", кол-во коров:" +checkCow(checkBullsw(generatedNumber,userNumber),generatedNumber,userNumber));
		console.log("Попробый еще раз");
		effort++;
		return false;

	}
}
//check(['1','2','3','4']);

function work() {
	var generatedNumber = generateNumber();
	console.log("Загадано число", generatedNumber);
	check(generatedNumber);
	while (check(generatedNumber)===false) {
		check(generatedNumber);
	}
}
work();