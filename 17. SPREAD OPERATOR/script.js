// spread operator
// memecah iterables menjadi single element

const mhs = ['rakha', 'yanto', 'eko']
// console.log(...mhs[0])


//menggabungkan 2 array
const dosen = ['budi', 'joko', 'siti']
const orangabung = [...mhs, 'Aji', ...dosen]
// const orangabung = mhs.concat(dosen)
console.log(orangabung) //perilaku seperti concat




// mengcopy array
// const mhs2 = mhs
// mhs[0] = 'wahyu' //bersifat mereplace, jadi tidak efektif


const mhs1 = [...mhs] //kalo menggunakan spread operator ini, tidak akan berubah jika kita console.log mhs
mhs1[0] = 'wahyu'
console.log(mhs)