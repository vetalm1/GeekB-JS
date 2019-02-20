'use strict'
var summ=0;
var arr = prompt("Введите товар и цену через запятую (ручка,120,ластик,20)")
	.toString()
	.split(","); //преобразует в массив элементы через запятую
var i=0;
var j=0;
function countBasketPrice() {
	while (j<arr.length) {
	summ=summ+parseInt(arr[j+1]);
	j=j+2;
	}
	return summ;
}

while (i<arr.length) {
	console.log("Товар:  "+arr[i]+" - "+arr[i+1]+"р.");
	//summ=summ+parseInt(arr[i+1]);
	i=i+2;
}


console.log("Сумма корзины: "+countBasketPrice()+"р.");	
console.log(arr);

