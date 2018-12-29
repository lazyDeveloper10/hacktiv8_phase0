// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +. Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!
// Skeleton Code

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)
// JavaScript is awesome and I love it!

// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.
// Hints

// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata tersebut!
// Skeleton Code

var words = 'wow JavaScript is so cool';
var exampleFirstWord = words[0] + words[1] + words[2];
var secondWord = words[4] + words[5] + words[6] + words[7] + words[8] + words[9] + words[10] + words[11] + words[12] + words[13]; // do your own!
var thirdWord = words[15] + words[16]; // do your own!
var fourthWord = words[18] + words[19]; // do your own!
var fifthWord = words[21] + words[22] + words[23] + words[24]; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// Output

// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!
// Skeleton Code

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14); // do your own!
var thirdWord3 = word3.substring(15, 17); // do your own!
var fourthWord3 = word3.substring(18, 20); // do your own!
var fifthWord3 = word3.substring(21, 25); // do your own!

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

// Output

// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!
// Skeleton Code

// Buatlah variable-variable baru untuk menyimpan panjang string, dan ubah console dibawah untuk menampilkan nya.

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14); // do your own!
var thirdWord4 = word4.substring(15, 17); // do your own!
var fourthWord4 = word4.substring(18, 20); // do your own!
var fifthWord4 = word4.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord4.length;
// create new variables around here
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);

// Output

// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4


