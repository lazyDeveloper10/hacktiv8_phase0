// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. 
// Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. 
// Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(kata) {
    // you can only write your code here!
    var split = kata.split('')
    // console.log(split)

    for (i = 0; i < split.length; i++) {
        switch(split[i]) {
            case 'z': split[i] = 'a'
            break
            default:
            split[i] = String.fromCharCode(1 + split[i].charCodeAt(0))
          // } console.log(split[i])
        }
    } return split.join('')

}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu