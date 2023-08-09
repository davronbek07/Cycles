// let num1 = +prompt(' Введите 1 число')
// let num2 = +prompt(' Введите 2 число')
// let result = num1 * num2

// console.log(result);

// //Циклы

let a = +prompt('1 число'); //2
let b = +prompt('2 число'); //4
let result = 0;

for (let i = 0; i < b; i++) {
  result = a + result; // 1)2 + 0 == 2 2) 2 + 2 = 4 3) 2 + 4 = 6 4) 2 + 6 = 8

}

console.log(result);


let balls = +prompt("Введите число мячей в зале");

// if(balls == 1){
//   console.log('мяч');
// }else if(balls > 1 && balls < 5){
//   console.log('мяча');
// }else if(balls >= 5){
//   console.log('мячей');
// }
let mod10 = 10
let mod100 = 100
let ending;

// if (balls % mod10 === 1 && balls % mod100 !== 11) {
//   ending = "мяч";
// } else if(balls >= 2 && balls <= 4) {
//   ending = "мячa";
// } else {
//   ending = "мячей";
/* } */
  // if (balls % mod10 === 1 && balls % mod100 !== 11) {
  //   ending = "мяч";
  // } else if (balls % 10 >= 2 && balls % 10 <= 4 && (balls % 100 < 10 || balls % 100 > 20)) {
  //   ending = "мяча";
  // } else {
  //   ending = "мячей";
  // }
  // console.log(`В зале находится ${balls} ${ending}`);
