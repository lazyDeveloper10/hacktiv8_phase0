// Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

// Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

// Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

// Jika input adalah string kosong ('') maka return array kosong


function meleeRangedGrouping (str) {
    //your code here

    var split = str.split(',') 

    var namaHero = []
    var jenisSerang = []

    for (i = 0; i < split.length; i++) {

        var hero = split[i].split('-')[0]
        // console.log(hero)
        namaHero.push(hero)

        var jenis = split[i].split('-')[1] 
        // console.log(jenis)
        jenisSerang.push(jenis)
    }

    // console.log(jenisSerang)

    var arr = []

    var ranged = []
    var melee = []

    for (j = 0; j < jenisSerang.length; j++) {
        // console.log(jenisSerang[j])
        if (jenisSerang[j] == 'Ranged') {
            ranged.push(namaHero[j])
            
        } else {
            melee.push(namaHero[j])
        }
    }
    
    arr.push(ranged, melee)

    return arr
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []