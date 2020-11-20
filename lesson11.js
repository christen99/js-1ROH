

/*   
    создать функцию  getRGB();
     RGB ????
     px - минимальный квадратик на экране, корторый зполнен одним цветом 
     rgb - цветопередача на экранах мониторов 


     rgb(0-255,0-255, 0-255);
     rgb(255,0,0) = red;
     rgb(0,128,0) = lime
     rgb(0,0,255) = 



*/ 

function getRGB() {
    let red = getNumber(256); // любое число от 0 до 255 (включительно)
    let green = getNumber(256); // любое число от 0 до 255 (включительно)
    let blue = getNumber(256); // любое число от 0 до 255 (включительно) 
    let str = `rgb(${red},${green},${blue})`;
    return str; 
}

let color = `background-color: ${getRGB()};`;
console.log(color);

document.body.style = color; 

