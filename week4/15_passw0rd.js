// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

//     Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu 
//     (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

//     Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

//     Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

//     Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:

// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga


function changeVocals(str) {
    //code di sini

    var split = str.split('')

    for (i = 0; i < split.length; i++) {
        switch(split[i]) {
            case 'a': split[i] = 'b'
            break
            case 'i': split[i] = 'j'
            break
            case 'u': split[i] = 'v'
            break
            case 'e': split[i] = 'f'
            break
            case 'o': split[i] = 'p'
            break
            case 'A': split[i] = 'B'
            break
            case 'I': split[i] = 'J'
            break
            case 'U': split[i] = 'V'
            break
            case 'E': split[i] = 'F'
            break
            case 'O': split[i] = 'P'
            break
            default : split[i]
        }
    } return split.join('')
}

function reverseWord(str) {
    //code di sini
    var newStr = ''

    for (i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    } 

    return newStr

}

function setLowerUpperCase(str) {
    //code di sini
    var split = str.split('')
    var arr = []

    for (i = 0; i < split.length; i++) {
          // console.log(split[i])
          var character = split[i]
          if (character == character.toLowerCase()) {
              arr.push(character.toUpperCase())
          } else {
              arr.push(character.toLowerCase())
          }
    } return arr.join('')
}

function removeSpaces(str) {
  //code di sini

    if (str.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    var split = str.split('')

    for (i = 0; i < split.length; i++) {
        switch(split[i]) {
            case ' ': split[i] = ''
            break
            default : split[i]
        }
    } return split.join('')
}

function passwordGenerator(name) {
    //code di sini
    var ubah = changeVocals(name)
    // return ubah 
    var balik = reverseWord(ubah)
    // return balik
    var hurufBesar = setLowerUpperCase(balik)
    // return hurufBesar
    var space = removeSpaces(hurufBesar)
    return space
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'