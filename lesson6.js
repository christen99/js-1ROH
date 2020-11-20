/* 
Если ты помоешь посуду -  я дам тебе шоколадку 
if - условие 
*/

let clearDish = true; 
let cleanRoom = true;
let choco = 0;

if (clearDish && cleanRoom) { 
    choco += 2;  /* haveChoco = haveChoco + 1 */ 
} else if (clearDish || cleanRoom){choco++; /* choco = choco + 1 */ 
}else { 
    choco--; /* choco = choco - 1 */ 

}

console.log(choco);

let age = 20; 

/*

В зависмости от перменной age 
выводить одну из фраз:
при возрасте от 0 до 17 - "Вы еще пока не работаете"
при возрасте от 18 до 40 -  "Ваш рабочий путь только начался!"
при возрасте от 40 до 63 - "Вам осталось поработать еще чуть-чуть"
при возрасте больше 63 - "Отдыхайте! Вы на пенсии"

*/

if (age < 18) {
    console.log("Вы еще пока не работаете");
} else if (age < 40) {
    console.log("Ваш рабочий путь только начался");
} else if (age <= 63 ) { 
    console.log("Вам осталось поработать еще чуть-чуть");
} else { 
    console.log("Отдыхайте! Вы на пенсии");
}

/*
    Альтернативый код 

*/ 

if (age < 63) {
    console.log("Пенсионер");
} else if (age < 18) {
    console.log("Школьник");
} else if (age >= 18 && age < 40) {
    console.log("Молодой");
} else if (age >= 40 && age <= 63) {
    console.log("Зрелый");
} else {
    console.log("Не человек!");
}

/* 
   Правильно написать фразу "Вам 20 лет" в зависимости от возраста (перменная 
      age)
   20 лет 
   3 года 
   41 год
   */

     age = 20;
   if (age == 20) {
       console.log("Вам 20 лет");
   } else if (age > 3){
       console.log("Вам больше чем 3 года");
   }
   else if (age < 41) {
       console.log("Вам меньше чем 41 год");
   }