'use strict';

//1. 

//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2 - возвращается значение уже измененной переменной 
//d = b++; alert(d);           // 1 - возвращается значение переменной до выполнения этого инкремента
//c = (2+ ++a); alert(c);      // 5 - т.к. а=2: 2+2+1 =5
//d = (2+ b++); alert(d);      // 4 - т.к. b=2: 2+2=4 (т.к. б не увеличился а возвратил текущее значение, а увеличится он после операции сложения)
//alert(a);                    // 3 переменная а=1 увеличиласть на 1-цу 2 раза
//alert(b);                    // 3 переменная b=1 увеличиласть на 1-цу 2 раза

//2. Чему будет равен x в примере ниже?
//var a = 2;
//var x = 1 + (a *= 2);  //  1+(2*2)=5

//3.

var a = +prompt("Задание-3      Введите число a ");
var b = +prompt("Введите число b");
if (a>=0 && b>=0 ) {
    alert(a-b);
} else if (a<0 && b<0) {
    alert(a*b);
}

//4.

var a = +prompt("Задание-4     Введите число a ");

switch (a) {
  case 1:
    alert( '1-10' ); break;
  case 2:
    alert( '2-10' ); break;
  case 3:
    alert( '3-10' ); break;
  case 4:
    alert( '4-10' ); break;
  case 5:
    alert( '5-10' ); break;
  case 6:
    alert( '6-10' ); break;
  case 7:
    alert( '7-10' ); break;
  case 8:
    alert( '8-10' ); break;
  case 9:
    alert( '9-10' ); break;  
  case 10:
      alert( '10' );
}

//5.
var arg1 = +prompt("Задание-5      Введите 1-e число");
var arg2 = +prompt("Введите 2-e число");
function plus(arg1,arg2) { return arg1+arg2; }
function minus(arg1,arg2) { return arg1-arg2; }    
function mult(arg1,arg2) { return arg1*arg2; }
function dev(arg1,arg2) { return arg1/arg2; }
alert(plus(arg1,arg2));
alert(minus(arg1,arg2));
alert(mult(arg1,arg2));
alert(dev(arg1,arg2));

//6.

var arg1 = +prompt("Задание-6      Введите 1-e число");
var arg2 = +prompt("Введите 2-e число");
var operation = prompt("Ведите операцию (plus,minus,mult,dev)");
function mathOperation(arg1,arg2,operation) { 
    switch (operation) {
        case 'plus':
            return arg1+arg2; break;
        case 'minus':
            return arg1-arg2; break;
        case 'mult':
            return arg1*arg2; break;
        case 'dev':
            return arg1/arg2; break;
  
    }
}
alert(arg1 + ' ' + operation + ' ' + arg2 + ' = ' + mathOperation(arg1,arg2,operation));

//7.

alert(0==null); false  //т.к. 0 это число а null это ключевое слово обозначающее отсутвие значения

//8.
function power(val,pow) {
    if (pow !=1) {
        return val*power(val,pow-1);
    } else {return val}
}
alert (power(2,3));
///