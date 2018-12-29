// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
// Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here

  var hasil = []
  var biaya = 2000

  for (i = 0; i < arrPenumpang.length; i++) {
      var data = arrPenumpang[i]

      var objectData = {}
      objectData.penumpang = data[0]
      objectData.naikDari = data[1]
      objectData.tujuan = data[2]

      var asal = rute.indexOf(data[1])
      // console.log(asal)
      var tujuan = rute.indexOf(data[2])
      // console.log(tujuan)

      var jarak = Math.abs(tujuan - asal)
      // console.log(jarak)
      
      objectData.bayar = jarak*biaya
      hasil.push(objectData)

  } 

  return hasil
  
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]