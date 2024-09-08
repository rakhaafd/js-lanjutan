//destructuring
// function operasi(a, b){
//     return [a + b, a-b, a * b, a/b]
// }

// const jumlah = penjumlahanPerkalian(2, 3)(0)
// const kali = penjumlahanPerkalian(2, 3)(1)

// const [jumlah, kurang, kali, bagi = 'tidak ada'] = operasi(2, 3) //urutannya harus benar
// console.log(jumlah)
// console.log(kali)



// function kalkulasi (a, b){
//     return {
//         tambah: a + b,
//         kali: a * b,
//         kurang: a - b,
//         bagi: a / b
//     }
// }


// const {tambah, kali, kurang, bagi} = kalkulasi(2, 3) //urutan tidak berpengaruh
// console.log(tambah)
// console.log(kali)
// console.log(kurang)
// console.log(bagi)





//destructuring function arguments
const mhs1 = {
    nama: 'rakha',
    umur: '17',
    kelas: 'XI SIJA 1', 
    nilai: {
        tugas: 90,
        uts: 90,
        uas: 90
    }
}

// function cetakMhs(mhs){
//     return `halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} dan kelas saya ${mhs.kelas}`
// }

// console.log(cetakMhs(mhs1))


function cetakMhs({nama, umur, kelas, nilai: {tugas, uts, uas}}){
    return `halo, nama saya ${nama}, saya berumur ${umur} dan kelas saya ${kelas}, dan nilai uas saya adalah ${uas}`
}

console.log(cetakMhs(mhs1))