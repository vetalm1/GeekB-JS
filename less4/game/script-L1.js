'use strict'

var car = {
	name: "Audi",
	modele: "a3",
	year: 2015,
	power: 200
};

car.type = "Jeep" // добавляет свойство
console.log(car);
console.log(car.year);
car.modele = "A4"; // поментяь значение с А3 на А4
console.log(car);
delete car.name; // удалить свойство
console.log(car);

var factory = {
	people: 145,
	production: "Tank",
	value: 300,
	done: 450,
	hire: function hire(peoplenumber) {
		this.people +=peoplenumber;
		},
	work: function(){
		if (this.done < this.value) {
			console.log("Производить больше");
		} else {console.log("Мы все сделали");}
	}
	
};
console.log(factory);
factory.hire(30);
console.log(factory);
factory.work();
for(var key in factory){
	console.log(key);
}