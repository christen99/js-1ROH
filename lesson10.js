/*

Дано  n мс
Написать сколько дней, часов, минут и секунд в
этом числе n 

*/
/* 
let ms = Math.floor(Math.random() * (10000000 - 10000) + 10000);
let sec = Math.floor(ms / 1000);
let min = Math.floor(sec / 60);
sec = sec - (min * 60);
let hours = Math.floor(min/ 60);
min = min - (hours * 60);
let days = Math.floor(hours / 24);
hours -= days * 24;
console.log("Милисекунд: " + ms);
console.log(`${hours} часов ${min} минтут ${sec} секунд`);

*/

/* 
     Функции 
     Математические функции  f(x) = x + 2;
*/

/* let name = "Вася"
console.log(` Hello ${Joe}`);

name = 
*/ 

function sayHello(name = "Damon" , age = 23) { // name - аргумент функции 
        console.log(`Привет, ${name}, тебе - ${age}`);
}

sayHello("Oliver", 20); // Вызов функции 
sayHello("Caroline", 24);
sayHello("Stefan", 12);
sayHello();  

function parabola (x) {
    let y = x ** 2;
   return y;
   console.log(x, y);
}
for (let i = -5; i <= 5; i++) {
    let result = parabola(i);
    console.log(i, result);
}

/* 
Главные правила 00П: 
 Полимофизм - переиспользование кода
 Наследование -
       Животное ; 4 лапы, хвост, есть корм
       Собака : животное + лает, любит человека
       Ретривер : собака + ласковая, любит детей 
 Инкапсуляция 
    Кусок кода (внутри функции) 
*/

