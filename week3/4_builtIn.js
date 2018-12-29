function dataHandling2(input) {

    input.splice(4, 5,  "Pria", "SMA Internasional Metro")
    console.log(input)

    var tanggal = input[3]
    var splitDate = tanggal.split('/')
    var bulan = splitDate[1]

    switch(bulan) {
            case '01' : console.log('Januari');
                break;
            case '02' : console.log('Februari');
                break;
            case '03' : console.log('Maret');
                break;
            case '04' : console.log('April');
                break;
            case '05' : console.log('Mei');
                break;
            case '06' : console.log('Juni');
                break;
            case '07' : console.log('Juli');
                break;
            case '08' : console.log('Agustus');
                break;
            case '09' : console.log('September');
                break;
            case '10' : console.log('Oktober');
                break;
            case '11' : console.log('November');
                break;
            case '12' : console.log('Desember');
                break;
            default   : console.log('Pilih Bulan 01 - 12')
    }

    var splitTanggal = tanggal.split('/')
    splitTanggal.sort(function(a, b) {
            return b - a;
    });
    console.log(splitTanggal)

    var joinDate = splitDate.join('-')
    console.log(joinDate)

    var inputNama = input[1]
    console.log(inputNama.slice(0, 15))
}

console.log(dataHandling2(["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]))

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */