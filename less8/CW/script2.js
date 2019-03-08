myF (); 
function myF () {  // Тако формат создается до выполнения кода
    console.log("123");
}

let mf = function() { //А в таком создается в момент присваивания, т.е. когда дойдет программа
    console.log("123");
};
mf();

(function (a) {console.log(a);}) ("HI"); //анонимная функция вызывает сама себя

let user = {
    name: 'John',
    sayHi(){
console.log(this);
console.log(this.name);
    }
};
setTimeout(user.sayHi(), 1000);

if (!("aa" in window)) {
    var aa = 1;
}
alert(aa);