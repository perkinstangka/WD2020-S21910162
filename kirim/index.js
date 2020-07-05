// Tanya
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