/* 

есть пачка со свечами 

*/ 

function getNumber (max = 100, min = 0) {
    let n = Math.random() * (max - min) + min;
     n = Math.floor(n);
     return n;
}

/*
let name = cute; 
function getNumber(name = cute ) {
    console.log("hello " + name + " ! ");
}

getNumber();

*/ 

function chris(count, age = 0) {
   //  let age = 0;
    // Пока в пачке есть свечки, мы празднуем др!
    while (count > 0) {
        console.log(`существу исполнилось ${age}`);
        count = count - age;
        console.log(` в упакове осталось ${count}`);
        age++;
        if (count <= age) {
            return age;
        }
    }
   // return age - 1;
}

console.time("candles");
let candles = getNumber(1001, 100);
let finalAge = chris(candles, 99);
console.log(candles + " свечек хватило на " +  finalAge + "лет");
console.timeEnd("candles");

/*
 создать функцию simple ()
в функцию передается число от 50 до 200
функция выводит 