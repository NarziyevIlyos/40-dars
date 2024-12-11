// // function add()

// // function add(n){
// //     if(n>0){
// //         add(n-1);
// //     }
// // }

// const res = calc(3, 12, "/");

// function calc(a,b, operator){
//     switch(operator){
//         case "+":
//             console.log(a+b);
//             break;
//         case "-":
//             console.log(a-b);
//             break;
//         case "*":
//             console.log(a*b);
//             break;
//         case "/":
//             console.log(a/b);
//             break;
//         case "%":
//             console.log(a/b);
//             break;
//         default:
//             console.log("bunday operator bilan hisob kitob qilib bo'lmaydi");
//     }
// }

// // rec funksiya

// function rec(n){
//     if(n>0){
//             let m;
//             m++
//             console.log(m);
//             // m++;
//             rec(n-1, m++);
//         }
//     }
// }

// rec(3);

// var globalVar = "I'm global variable";

// function checkScope(){
//     console.log(globalVar); 
// }

// checkScope(); // I'm global variable


// function parentFunction() {
//     var localVar = "I'm local variable";
//     // ota-funksiyasining bola-o'zgaruvchisi => otasining maydonida ishlaydi
//     console.log(localVar); // I'm local variable
// }

// parentFunction();
// // ota-funksiyasining bola-o'zgaruvchisi => ota-funksiyasi maydonidan tashqarida ishlamaydi. U faqat OTASIGA bo'ysunadi.
// //console.log(localVar); // ReferenceError: localVar is not defined


// if(true){
//     let blockVar = "I'm a block variable in a block ";

//     // ota-blockning block-farzandi faqat ota-blockda ishlaydi
//     console.log(blockVar); //I'm a block variable in a block 
// }
//ota-blockning block-farzandi ota-block tashqarisida ishlamaydi
//console.log(blockVar); // ReferenceError: localVar is not defined

// console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
// let myVar = 10;

// if (true) {
//     let blockVariable = "I live in this block"; // Block scope
//     console.log(blockVariable); // Accessible here
//   }
  
//   console.log(blockVariable); // Error! Not accessible outside the block

// o'zgaruvchilarni ishga tushirishdan oldin, ulardan foydalanib bo'lmaydi
// e'lon qilingan o'zgaruvchilar e'lon qilinishidan yuqoridagi hududda ishlamaydi, chunki u yuqoriga ko'tarilmaydi
//console.log(sameName); // ReferenceError: Cannot access 'sameName' before initialization
console.log(variable); // undefined (= chunki var bilan e'lon qilingan o'zgaruvchi faqat => qiymatsiz holda o'zidan yuqoriga ko'tariladi).

//funksiyalar o'zidan yuqoriga ko'tariladi
finderModulus(123, 456);

//funksiyalar o'zidan yuqoriga ko'tariladi, faqat mahalliy funksiya ota-funksiyasi belgilab bergan maydondan tashqariga chiqib ketmaydi. Bu yerda bola funksiya otasidan tashqarida ishlamaydi
//productWithParameter(4,7); // ReferenceError: productWithParameter is not defined

  let sameName = 5;
  var variable = 10;

  function add() {
    let sameName = 10;
    console.log(sameName); // 10 => faqat funksiya doirasida ishlaydi
    // global o'zgaruvchi bo'lgan variable tashqi maydondan kirib kela oladi, chunki funksiya maydonida qidirilyotgan shu nomdagi o'zgaruvchi yo'q.
    // lekin sameName nomli Global o'zgaruvchi add() funkiyasiga kirib kela olmaydi. Chunki add() funksiyasining ichida shu nomdagi o'zgaruvchi bor, shu sababli tashqi maydondan o'zgaruvchini qabul qilmaydi.
    let sumOfFunction = sameName + variable;
    console.log("sameName + variable = " + sumOfFunction); // 20

    let a = 2; 
    let b = 3;
    
    if(true){
        // let va const bilan e'lon qilingan o'zgaruvchi BLOCK maydoni ichida ishlaydi.
        console.log("a+b = " + a+b);

        function productWithParameter(n,m){
            console.log("n*m = " +  n*m); // 6
        }

        productWithParameter(a,b); // 6

        // parametrli funksiyani parametrsiz chaqirsangiz NaN qiymatni qaytaradi, chunki o'zidagi parametrlar undefined qiymatda turadi. Shuning uchun undefined bilan arifmetik amal bajarish NaN beradi
        productWithParameter(); // NaN 

        function productNoParameter1(){
            let n = 1;
            let m = 4;
            // parametrsiz funksiya 1-navbatda o'zidan kerakli o'zgaruvchilarni qidiradi va topsa, u bilan ishlaydi
            console.log("n*m = " + n*m); // 4

            // parametrsiz funksiya 1-navbatda o'zidan kerakli o'zgaruvchilarni qidiradi, agar uni topa olmasa, uni otasidan qidiradi, otasidan uni topsa u bilan ishlaydi, agar otasidan uni topa olmasa bobosidan qidiradi, agar bobosidan uni topsa u bilan ishlaydi, agarda bobosidan topa olmasa, uni ajdodlaridan qidiradi va topsa u bilan ishlaydi. Agara ajdodlaridan uni topa olmasa, undefined dega yozuv chiqadi.
            console.log("a*b = " + a**b); // 8
            
            // parametrsiz funksiya 1-navbatda o'zidan kerakli o'zgaruvchilarni qidiradi, agar uni topa olmasa, uni otasidan qidiradi, otasidan uni topsa u bilan ishlaydi, agar otasidan uni topa olmasa bobosidan qidiradi, agar bobosidan uni topsa u bilan ishlaydi, agarda bobosidan topa olmasa, uni ajdodlaridan qidiradi va topsa u bilan ishlaydi. Agara ajdodlaridan uni topa olmasa, undefined dega yozuv chiqadi.
            console.log(sameName + " ** 3 = " + sameName**3); // 125

            // parametrsiz funksiya 1-navbatda o'zidan kerakli o'zgaruvchilarni qidiradi, agar uni topa olmasa, uni otasidan qidiradi, otasidan uni topsa u bilan ishlaydi, agar otasidan uni topa olmasa bobosidan qidiradi, agar bobosidan uni topsa u bilan ishlaydi, agarda bobosidan topa olmasa, uni ajdodlaridan qidiradi va topsa u bilan ishlaydi. Agara ajdodlaridan uni topa olmasa, undefined dega yozuv chiqadi.
            //console.log("s - t = " + (s - t)); // ReferenceError: s is not defined
        }

        productNoParameter1();

        function divider(){
            console.log(a/b); // 0.66666666
        }

        divider(); 
    }
  }

  add();
  // global o'zgaruvchining qiymati chiqadi
  console.log(sameName); // 5
  // add() funksiyasining sumOfFunction o'zgaruvchisi Global maydonda ishlamaydi.
  //console.log(sumOfFunction); //ReferenceError: sumOfFunction is not defined
  // let va const bilan e'lon qilingan o'zgaruvchi BLOCK maydoni tashqarisida ishlamaydi
//   console.log(a); // ReferenceError: a is not defined

function finderModulus(a,b){
    console.log("a % b = " + a%b);
}
