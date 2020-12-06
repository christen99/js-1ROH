const week = [" Monday", " Tuesday" , "Wednesday", "Thursday",
 "Friday", "Saturday" , "Sunday"]; 

let fruits = ["apple", "orange", "banana"];

/* 
 
.push(val)  - добвить значение в конец массива
.unshift(val) - добавить значение в начало массива

.pop() -  забрать элемент из конца массива 
.shift() - забрать элемент из начала массива 

.sort() -   сортировка массива в "альфавитном порядке" ( по номеру символа
    в таблице символа)

*/ 
let fr = fruits.pop();
console.log(`we ate everything ${fr} =(`);

fruits.push('plums');
fruits.push("avocado")

fruits.unshift("pineaaple");

fruits.push(fruits.shift());

fruits.sort();

console.log(fruits);
console.log("in this backet - " + fruits.length + "fruits");

let numbers = [];
function getNumber (max = 11, min = 0) {
      return Math.floor(Math.random() * (max - min) + min);
}

for (let i = 0; i < 100; i++){
    numbers.push(getNumber(101));
}
numbers.sort(function(a, b ) {
    if (a < b) {
        return -1;
    } else {
        return 1;
    }

    

});


// console.log(numbers);

/* 

    Дата / время 

*/ 
 let mnth = ["jan", "feb","mar", 
 "apr", "may", "jun", "jul", "aug", 
 "sep", "oct", "nov", "dec"];

let today = new Date();
let start = new Date(0); // начало времени - старт системы unix 

let m = today.getMonth();
let year = today.getYear();
let hour = today.getHours(); // часы в местном времени 

console.log(  m, mnth[m] ); 
console.log(start);
console.log(new Date(47865738)); // один из способов формирование даты 
console.log(today.getTime()); 

let nyDay = new Date(2021, 0);
console.log(nyDay);

function timeBefore(day) {
    let now = new Date();
    let remainder = day - now;
    let seconds, minutes, hours , days;
    seconds = Math.floor(remainder / 1000);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60); 
    days = Math.floor (hours / 24);

    seconds -= minutes * 60;
    minutes -= hours * 60;
    hours -= days * 24;
    
    
    
    return `${days} days ${hours} hours ${minutes} mins ${seconds} second`;
}
console.log("осталось:" + timeBefore(new Date(2021,5,2)));

setInterval(function(){
    console.log("До нового года: " + timeBefore(nyDay));
} , 1000); 

console.log("До нового года:\n" + timeBefore(nyDay));