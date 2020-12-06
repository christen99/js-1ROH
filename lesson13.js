/* Объект (объектный тип данных) */ 

/* Объект в JS - это неупорядоченная пара свойств 
(ключ) и значений */ 

let obj = {}; // - пустой объект 
// объекты никогда нельзя приводить к boolean так как любой 
 //  объект (даже пустой) - это всегда true 
//  alt+z (opt+z)
 let capitals = {
     "Россия": "Moscow",
     "Germany": "Berlin",
     "China": "Beijing",
     "Great Britain": "London"
 };

 console.log(capitals.Россия) // Получить значение объекта по свойству 
 let country = "Great Britain";
 console.log(capitals.country); /// неправильно !!! 
 console.log(capitals[country]); /// thats correct!
 console.log(capitals.Italy);
 capitals.France = "Paris";
 capitals.Japan = "Tokyo";

 console.log(capitals);

 //  Пройтись по всем сранам и вывести информацию о столице 
 // в соотвтствующей стране

 // London is the capital of GB 

 // Пройтись по всем свойствам внутри объекта можно 
 // при помощи цикла  for in 
 for (let key in capitals) {
     console.log(`${capitals[key]} is the capital of ${key}`);
 }

 ///объект внутри объекта в юзере 
 let car = {
     colour: "black",
     model: "Lamborda Priora",
     year: 2022,
     automat: true, 
     user: {
         name: "Kris",
         document: "123P456"
     }
 };

// Vasya has a black Lamborda Priora 2022 year of birth with /
// without automat transmission; 

console.log(`${user.name} has ${colour} ${model} ${year} year of birth `);
if (automat) {
    info += "with ";
}   else {
    info += "without ";
} 
info += "automat transmission";
console.log(info);