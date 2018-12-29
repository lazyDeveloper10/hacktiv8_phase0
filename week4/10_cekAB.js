// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. 
// function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

function checkAB(num) {
    // you can only write your code here!

    var split = num.split(' ')
    // console.log(split)

    var str = ''
    
    for (i = 0; i < split.length; i++) {
        str = str + split[i]
    // } console.log(str)
    }

    var A = str.indexOf('a')
    // console.log(A)
    var B = str.indexOf('b', A)
    // console.log(B)
    var jarak = 0

    if (A == -1) {
        return false 
    } else if (B == -1) {
        return false
    }

    for (j = 0; j < str.length; j++) {
        // console.log(str[j])
        if (str[j] == 'a') {
          jarak = B - A
          // return jarak
            if (jarak > 0) {
                return true
            } else {
                return false
            }
        }
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false