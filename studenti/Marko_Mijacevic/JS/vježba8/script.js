// 1. dio
// 1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena. 

var firstName = "Marko";
var lastName = "Mijacevic";

var fullName = firstName + " " + lastName;

console.log(fullName);

// 2. dio
//2. Razlomite ovu ternarnu operaciju na 3 različite operacije! var x = z === 2? y : 5;
/* var x = z === 2 ? y : 5;

var x;
var z = 2;
var y = 10;

if (z === 2) {
    x = y;
} else {
    x = 5;
} */

//3. dio
//3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").  



for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Broj: " + i + " je paran.");
    }else {
        console.log("Broj: " + i + " je neparan.");
    }
}