//1. Variable dan Tipe Data

// console.log("Hello World");

// let variable1 ="hello";
// const variable2 = "world";
// var variable3 = "Hello World";

// let firstName = "John";
// const _number = 3;
// let years;
// var age = 23;
// let isMarried = false;

// firstName = 'jane';

// console.log(firstName);
// console.log(_number);
// console.log(isMarried);
// console.log(years);

//2. Operasi Javascript

// Operator Aritmatika
// let num1 =10;
// let num2 =2;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);
// num1++;
// console.log(num1);
// num1 --;
// console.log(num1);

// Assignment Operator
// let num3 = 10;
// let num4;

// num4=num3;
// console.log(num4);

// num3 += 2;
// console.log(num3);

// num3 -= 2;
// console.log(num3);

// num3 += 2;
// console.log(num3);

// num3 *= 2;
// console.log(num3);

// num3 /= 2;
// console.log(num3);

//3.String Operator

// let firstName = 'john';
// let lastName = 'doe';
// let age = 25;

// console.log(firstName + " " + lastName);
// console.log(firstName + age);

//Operator Perbandingan

// let num1 = 10;

// console.log(num1 == 10);
// console.log(num1 == "10");

// console.log(num1 === 10);
// console.log(num1 === "10");

// console.log(num1 != 10);
// console.log(num1 > 10);
// console.log(num1 >= 10);

// let num2 = num1 === 10 ? "Ten" : "Another Number";
// console.log(num2);


// Operator Logika
// let hasCertificate = true;
// let hasTranscript = true;

// console.log(hasCertificate && hasTranscript);

// // Operator Presedence 

// let result = (10 + 2) * 3;

// console.log(result);
let tanya = "apakah BMI mark lebih dari John?";
// simpan variable
let massaMark = 70;
let tinggiMark = 170;
let massaJohn = 65;
let tinggiJohn = 165;
// hitung BMI
let hasilMark = massaMark / (tinggiMark * tinggiMark) ;
let hasilJohn = massaJohn / (tinggiJohn * tinggiJohn);
console.log("Hasil Mark =");
console.log(hasilMark);
console.log("Hasil John =");
console.log(hasilJohn);
//Membuat Variable Boolean
let banding = hasilMark>hasilJohn;
// Tanya
console.log(tanya + banding);