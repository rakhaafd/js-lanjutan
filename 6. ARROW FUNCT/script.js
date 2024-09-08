// let myFunc = nama => `halo ${nama}` //jika parameter satu, maka tidak usah pakai (), dan jika isi dari function nya cuma return tidak perlu pakai {}. disebut implisit return
// console.log(myFunc('rakha'))


let mahasiswa = ['rakha', 'yanto', 'eko']
let jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}))
console.log(jumlahHuruf)