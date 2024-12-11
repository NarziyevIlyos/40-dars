//func1
function greet(name){
    console.log("Salom, " + name);
}

greet("Diyor");

// //func2
// const counterSalaryOfYear = function(salary){
//     return salary*12;
// }

// //func3
// let salary = 1200000;
// console.log(counterSalaryOfYear(salary));

// function multipler(a,b){
//     return a*b;
// }

// //func4
// let res = multipler(2,7);
// console.log(res);

// //func5

// const dollor = (sum) => {
//     let res = sum/12870;
//     return res.toFixed(2);
// }

// let sum = 14000000;
// console.log(dollor(sum));

// //func6
// const distanceCalculator = (speed, time) => speed * time;
// // km'da
// let speed = 120;
// //soatda
// let time = 3;
// console.log(distanceCalculator(speed, time));

// // fun7

// function lengthOfContent(content){
//     return content.length;
// }
// const str = "avotomexanizatsiyalashtirilgan";
// res = lengthOfContent(str);
// console.log(res);

//fun8 => fibonachi
//    0     1  1         2         3         5        8        13
// f1=0, f2=1, f3=f1+f2, f4=f2+f3, f5=f3+f4, f6=f4+f5 f7=f5+f6 f8=f6+f7
//                 0+1       1+1       1+2       2+3      3+5      5+8

// function fibonaci(n, s0 = 1, s1 = 1){
//     if( n == 1 ){
//         return s0;

//     }else{
//         return fibonaci(n-1, s1, s0 + s1);
//     }
// }

// console.log(fibonaci(1000));
// function fibonacci(n, f1=0, f2=1){
//     if(n<=1){
//         return 1;
//     }else{
//         console.log(f1, f2);
//         n--;
//         fibonacci(f1=f2, f2=f1+f2);
//     }
// }

// console.log(fibonacci(8));

// func9
//palindromlikka tekshirish =>  non

// let str1 = "non";

// const palindrom = function(str){
//     let reverseString = "";
//     for(let i=str.length-1; i>=0; i--){
//         reverseString = reverseString + str[i];
//     }

//     if(reverseString == str) {
//         return "Ha, palindrom";
//     }else {
//         return "yo'q, palindrom emas"
//     }
// }

// let string = "nodon";
// let result = palindrom(string);
// console.log(result);

// // func10

// function counterAge(birthYear){
//     let date = new Date();
//     let year = date.getFullYear();
//     return year - birthYear;
// }

// let res = counterAge(1995);
// console.log(res);

// // func11

// const numberOfLetterInString = (string, letter) => {
//     let counter = 0;
//     for(let i=0; i<string.length; i++){
//         if(string[i]== letter){
//             counter++;
//         }
//     }

//     if(counter>0){
//         return counter + " ta " + letter + " harfi qatnashgan"
//     }else {
//         console.log("Harf qatnashmagan");
//     }
// }

// let sentence = "mantiqiy"
// let letter = "i"
// let answer = numberOfLetterInString(sentence, letter);
// console.log(answer);

// //func12
// //4! == 1*2*3*4
// function fact(n){
//     let mult = 1;
//     for(i=1; i<=n; i++){
//         mult*=i;
//     }
//     return mult;
// }

// let n = 3;
// let res = fact(n);
// console.log(res);

// // func13

// const reverseNumber = function (n) {
//   let tempVar = n;
//   let reverseNum = 0;
//   while (n > 0) {
//     reverseNum = reverseNum * 10 + (n % 10);
//     n = parseInt(n / 10);
//   }
//   console.log(tempVar + " soniga teskari raqam = " + reverseNum);
// };

// reverseNumber(123);

// //while14
// function isHaveOddNumber(n) {
//   let isHaveOddNumber = false;
//   let aNumber = 0;

//   while (n > 0) {
//     aNumber = n % 10;
//     if (aNumber % 2 !== 0) {
//       isHaveOddNumber = true;
//       break;
//     }
//     n = parseInt(n / 10);
//   }

//   if (isHaveOddNumber) {
//     console.log("Ha, kiritilgan sonda toq son bor");
//   } else {
//     console.log("Yo'q, kiritilgan sonda toq son yo'q");
//   }
// }

// console.log(isHaveOddNumber(123));

// //func15

// const counterNumbers_TotalOfNumbers = (a) => {
//   let sum = 0;
//   let counter = 0;
//   while (a > 0) {
//     sum += a % 10;
//     a = parseInt(a / 10);
//     counter++;
//   }
//   console.log("Raqamlar yig'indisi = " + sum + " ga teng");
//   console.log("Raqamlar soni = " + counter + " ga teng");
// };

// counterNumbers_TotalOfNumbers(123);

// // func16

// function finderDegree(n) {
//   let product = 1;
//   let counter = 0;
//   while (n > product) {
//     product *= 3;
//     counter++;
//   }

//   if (n - product == 0) {
//     isDegree = true;
//   }

//   if (isDegree) {
//     console.log(n + " soni" + " 3 ning darajasi");
//   } else {
//     console.log(n + " soni" + " 3 ning darajasi emas");
//   }
// }

// finderDegree(27);

// //func17

// const finderTotalOfSquareNumbersOfIntervalA_B = (a,b)=>{
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//           sum += i**2;
//         }
//         console.log(sum); 
// }

// finderTotalOfSquareNumbersOfIntervalA_B(2,5);

// //func18

// const specialFormula = function(n){
//     let sum = 0;
//     for(let i=0; i<n; i++){
//           sum+=(n+i)**2
//         }
//         console.log(sum);
// }
// specialFormula(10);

// // func19
// const prime = (n) => {
//     let isPrime = false;
//     let numberOfDividers = 0;
//     let diveder = 1;

//     while(n>=diveder){
//     if(n%diveder == 0) {
//         numberOfDividers++
//     }
//     diveder++
//     }
//     if(numberOfDividers==2){
//     console.log("Kiritilgan " + n + " soni" + " TUB son");
//     }else {
//     console.log("Yo'q, kiritilgan son TUB son emas");
//     }
// }

// prime(17);
// //func20

// function finderPrice(price, kg = 1){
//     for(let i=1; i<=10; i++){
//     console.log((kg +(i/10)) + "kg narxi = " + (price*(kg + (i/10))));
//     }
// }

// finderPrice(4000);


















































































// let m=1;
// let n=5;
// while(n>0){
//     console.log(m);
//     m++;
//     n--;
// }

// function rec(n, m=1){
//     if(n<1){
//         return;
//     }else{
//         console.log(m);
//         m++;
//         n--;
//         rec(n, m)
//     }
// }

// console.log(rec(5));
