// Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. 
// Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. 
// Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, 
// dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.

function hitungHuruf(kata) {
    // you can only write your code here!

    var split = kata.split(' ')
    // console.log(split)
    var num = 0
    var wort = ''
    for (i = 0; i < split.length; i++) {
        // console.log(split[i])
        for (j = 0; j < split[i].length; j++) {
            // console.log(split[i][j] + ' ' + split[i])
            var max = 0
            for (z = 0; z < split[i].length; z++) {
                // console.log(split[i][z] + ' ' + split[i][j])
                if (split[i][z] === split [i][j]) {
                    max = max + 1
                } if (max > num) {
                    num = max
                    word = split[i]
                } 
            }
        }
    }

    return word
    
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
// console.log(hitungHuruf('danau')); // danau