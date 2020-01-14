/*let x = 6;
let y = 14;
let z = 4; 
x += y - x++ * z; //x++ буде дорівнювати 6, відповідно 6*4=24, 14-24=-10 і 6+(-10) відповідь -4; x=-4;
document.write(`x: ${x} </br>`);
z = --x - y * 5; // --x буде дорівнювати -5, відповідно спочатку по пріоритетності 14*5=70, -5-70=-75; z=-75;
document.write(`z: ${z} </br>`);
y /= x + 5 % z; // x = -5(з попереднього виразу), 5 % -75 = 5, -5+5=0, а y = y/0 --- безкінечнісь --- Infinity;
document.write(`y: ${y} </br>`);
z - x++ + y * 5;
document.write(`z: ${z}`)
x = y - x++ * z;
*/

let x = 6;
let y = 14;
let z = 4; 
x += y - x++ * z; //x++ буде дорівнювати 6, відповідно 6*4=24, 14-24=-10 і 6+(-10) відповідь -4; x=-4;
document.write(`x: ${x} </br>`);
x = 6;
y = 14;
z = 4; 
z = --x - y * 5; // --x буде дорівнювати 5, відповідно спочатку по пріоритетності 14*5=70, 5-70=-65; z=-65;
document.write(`z: ${z} </br>`);
x = 6;
y = 14;
z = 4; 
y /= x + 5 % z; // x = 6;  5 % 4 = 1; 6+1=7; 14/7=2 у=2;
document.write(`y: ${y} </br>`);
x = 6;
y = 14;
z = 4; 
z - x++ + y * 5;  //14*5=70; 4 - 6 + 70 = 68;
x = 6;
y = 14;
z = 4; 
x = y - x++ * z; // 6 * 4=24; 14-24=-10; x=-10;
document.write(`x: ${x}</br>`);


const height = 23;
const width = 10;
let s;
s = height * width;
document.write(`s: ${s} </br>`);

s = 2000000;
const p = 0.1;
const years = 5;
let perepl;
perepl = s * p * years;
document.write(`perepl: ${perepl}`);