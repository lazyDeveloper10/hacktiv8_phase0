// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
// Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, 
// Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
// Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    
    var arr = []  

    for (i = 1; i <= angka; i++) {
        for (j = i; j <= angka; j++) {
            // console.log(i)
            // console.log(j)
            if (i * j == angka) {
                // console.log(i + '' + j)
                var num = i + '' + j
                // console.log(num)
                var str = num.toString()
                arr.push(str)
            } 
        } 
    // } return arr
    } var min = arr[0].length
    // console.log(min)
    for (i = 0; i < arr.length; i++) {
        if(arr[i].length < min) {
            min = arr[i].length
        }
    } return min
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2