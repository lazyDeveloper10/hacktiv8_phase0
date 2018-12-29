// Objectives

//     Mengetahui properties Pada Array
//     Mengerti Cara Mengakses Nilai Dalam Array

// Directions

// Buatlah sebuah fungsi dengan nama balikString. 
// Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
// Example

// //input "hello world!"
// //output
// "!dlrow olleh"

// Hints

// Untuk membantumu mengerjakan tantangan ini, gunakanlah properti length pada sebuah array yang akan memberikan panjang dari array-nya. 
// Ingat, indeks sebuah array pada JavaScript dimulai dari 0. 
// Untuk tugas ini, kamu wajib menggunakan looping dan dilarang menggunakan sintaks .reverse!

function balikString(str) {

    var balik = ''
  
    for (i = str.length - 1; i >= 0; i--) {
        balik = balik + str[i]
    } return balik
}
  
console.log(balikString('hello world!'))