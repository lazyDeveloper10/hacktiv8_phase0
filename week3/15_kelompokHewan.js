// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

function groupAnimals(animals) {
    // you can only write your code here!
    
    var hewan = animals.sort()
    
    var zoo = []
  
    for (i = 0; i < hewan.length; i++) {
  
        var groupZoo = []
        
        if (zoo.length == 0) {
            groupZoo.push(hewan[i])
            zoo.push(groupZoo)
        } else {
            var newGroup = false
            for (j = 0; j < zoo.length; j++) {
                var pembanding = zoo[j][0][0]
                if (pembanding == hewan[i][0]) {
                    zoo[j].push(hewan[i])
                    newGroup = true
                } 
            } if (newGroup == false) {
                groupZoo.push(hewan[i])
                zoo.push(groupZoo)
            }
        }
    } 
    
    return zoo

}
  
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]