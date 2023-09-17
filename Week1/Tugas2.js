const mtk = 80
const bahasaIndonesia = 80
const bahasaInggris = 95
const ipa = 70

//Untuk Menghitung Rata Rata
const nilaiUjian = [mtk, bahasaIndonesia, bahasaInggris, ipa]
let jumlahNilai = 0
for (let i = 0; i < nilaiUjian.length; i++) {
    //untuk menjumlahkan nilai
    jumlahNilai += nilaiUjian[i]
    average = jumlahNilai / nilaiUjian.length
}
//menambahkan toFixed untuk menampilkan berapa angka di belakang koma
console.log(`Rata Rata nilai anda adalah : ${average.toFixed()}`);

//pengkondisian
if (average <= 59) {
    console.log('Grade : E');
} else if (average >= 60 && average <= 69) {
    console.log('Grade : D');
} else if (average >= 70 && average <= 79) {
    console.log('Grade : C');
} else if (average >= 80 && average <= 89) {
    console.log('Grade : B');
} else {
    console.log('Grade : A');
}