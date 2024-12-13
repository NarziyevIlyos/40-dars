// function displayNumbers(n, current = 1) {
//     /**
//      * o'z-o'zini chaqiruvchi funksiya (= recursive function)
//      * Rekursiv ravishda 1 dan n gacha bo'lgan raqamlarni ko'rsatadi.
//      * 
//      * @param {number} n - Qaysi raqamlar ko'rsatilishini belgilovchi raqam.
//      * @param {number} current - Joriy raqam ko'rsatiladi (standart 1).
//      */
//     if (current > n) {
//         return; // Asosiy holat: oqim n dan oshganda rekursiyani to'xtatadi
//     }
//     console.log(current);
//     displayNumbers(n, current + 1); // Oshirib borilgan current (= joriy) raqam bilan rekursiv chaqiriladi
// }

// // Example usage
// // const n = parseInt(prompt("Enter a number: "), 10); //Foydalanuvchidan kirish raqamini oling

// n = 12;

// if (n > 0) {
//     displayNumbers(n);
// } else {
//     console.log("Please enter a positive number.");
// }

// // zinadan ko'tarilish
// function climbStairs(steps) {
//     if (steps === 0) {  // Base case
//         console.log("You’ve reached the top!");
//         return;
//     }
//     console.log(`Climbing step ${steps}`);  // Action
//     climbStairs(steps - 1);  // Repeat
// }

// climbStairs(5);



console.log("===================");

// for yordamida 1 dan 10 gacha ekranga chiqarish

console.log("for yordamida 1 dan 10 gacha ekranga chiqarish");

let n = 10; // berilgan qiymat

// 1-ifoda => i ning dastlabki qiymatini belgilovchi ifoda
// 2-ifoda => takrorlanishlar sonini belgilovchi shart
// 3-ifoda => i'ning qiymatini yangilovchi ifoda
for(let i=1; i<=n; i++){
    console.log(i);
}

console.log("===================");

// while yordamida 1 dan 10 gacha ekranga chiqarish

console.log("while yordamida 1 dan 10 gacha ekranga chiqarish");

n=10; // berilgan qiymat
let i=1; // i ning dastlabki qiymatini belgilovchi ifoda

// takrorlanishlar sonini belgilovchi shart
while(i<=n){
    console.log(i);

    i++; // i'ning qiymatini yangilovchi ifoda
}

console.log("===================");

// oddiy funksiya yordamida 1 dan 10 gacha ekranga chiqarish

console.log("oddiy funksiya yordamida 1 dan 10 gacha ekranga chiqarish");

function counter10(n){
  // 1-ifoda => i ning dastlabki qiymatini belgilovchi ifoda
  // 2-ifoda => takrorlanishlar sonini belgilovchi shart
  // 3-ifoda => i'ning qiymatini yangilovchi ifoda
  for(let i=1; i<=n; i++){
    console.log(i);
  }
}

counter10(10);

console.log("===================");

// ifodali funksiya yordamida 1 dan 10 gacha ekranga chiqarish

console.log("ifodali funksiya yordamida 1 dan 10 gacha ekranga chiqarish");

const counter10Expression = function(n){
  // 1-ifoda => i ning dastlabki qiymatini belgilovchi ifoda
  // 2-ifoda => takrorlanishlar sonini belgilovchi shart
  // 3-ifoda => i'ning yangilovchi ifoda
  for(let i=1; i<=n; i++){
    console.log(i);
}
}

counter10Expression(10);

console.log("===================");

// arrow funksiya yordamida 1 dan 10 gacha ekranga chiqarish

console.log("arrow funksiya yordamida 1 dan 10 gacha ekranga chiqarish");

const counter10Arrow = (n) => {
  // 1-ifoda => i ning dastlabki qiymatini belgilovchi ifoda
  // 2-ifoda => takrorlanishlar sonini belgilovchi shart
  // 3-ifoda => i'ning qiymatini yangilovchi ifoda
  for(let i=1; i<=n; i++){
    console.log(i);
  }
}


console.log(counter10Arrow(10));

console.log("===================");

// tezda chiqiriluvchi funksiya yordamida 1 dan 10 gacha ekranga chiqarish

console.log("tezda chaqiriluvchi funksiya yordamida 1 dan 10 gacha ekranga chiqarish");
(
    function counter10(n){
      // 1-ifoda => i ning dastlabki qiymatini belgilovchi ifoda
      // 2-ifoda => takrorlanishlar sonini belgilovchi shart
      // 3-ifoda => i'ning qiymatini yangilovchi ifoda
      for(let i=1; i<=n; i++){
        console.log(i);
      }
    }
)(10);

console.log("===================");

// o'zini-o'zi chaqiruvchi funksiya (= rekursive funksiya) yordamida 1 dan 10 gacha ekranga chiqarish

console.log("o'zini-o'zi chaqiruvchi funksiya yordamida 1 dan 10 gacha ekranga chiqarish");

// berilgan qiymat => n va i ning dastlabki qiymatini belgilovchi ifodani => funksiyaning parameter qabul qiluvchi guruhlash operatori bo'lgan qavs () ichiga yoziladi.
function counter10Recursive(n, i=1){
  //  takrorlanishni to'xtatuvchi shart, takrorlanishlar sonini belgilovchi shart
  if(i>n){
    return; // takrorlanishni to'xtatuvchi buyruq

   // ma'lum bir vazifani bajaruvchi kod to'plami va takrorlashni davom ettirish uchun shu rekursive funksiyani chaqiruvchi kod => else tanasiga yoziladi 
  }else {
    console.log(i);
    // berilgan qiymat n va i ning qiymatini yangilovchi ifoda rekursiv funksiyaning parametrlari sifatida unga beriladi.
    counter10Recursive(n, ++i);
  }
}

counter10Recursive(10); // Rekursive funksiya chaqiriladi

console.log("===================");

// callback funksiya (= funksiya ichida chaqiriluvchi funksiya) yordamida 1 dan 10 gacha ekranga chiqarish

console.log("callback (= funksiya ichida chaqiriluvchi funksiya) chaqiruvchi funksiya yordamida 1 dan 10 gacha ekranga chiqarish");

// higher-order function (= boshqa funksiyani qabul qiluvchi yoki funksiya qaytaruvchi funksiya)
function higherOrderFunction(n, callback){
  callback(n);
}

let m = 10;

higherOrderFunction(m, counter10Callback);


// berilgan qiymat => n va i ning dastlabki qiymatini belgilovchi ifodani => funksiyaning parameter qabul qiluvchi guruhlash operatori bo'lgan qavs () ichiga yoziladi.
function counter10Callback(n, i=1){
  //  takrorlanishni to'xtatuvchi shart, takrorlanishlar sonini belgilovchi shart
  if(i>n){
    return; // takrorlanishni to'xtatuvchi buyruq
  }else {
    console.log(i);
    // berilgan qiymat n va i ning qiymatini yangilovchi ifoda rekursiv funksiyaning parametrlari sifatida unga beriladi.
    counter10Recursive(n, ++i);
  }
}