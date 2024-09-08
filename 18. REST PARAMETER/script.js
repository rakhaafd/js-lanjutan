// rest parameter merepresentasikan argunment pada function dengan jumlah yang tidak terbatas menjadi sebuah array

// function myFunc () {
// return `a = ${args}, b = ${args}, args = ${args}`
// return Array.from(arguments)
// return [...arguments]
// }

// console.log(myFunc(1,2,3,4,5))





function jumlahkan (...angka){
// let total = 0
// for(const a of arguments){
// total += a
// }
//     return total

// return angka.reduce((total, a) => total + a)
}

// console.log(jumlahkan(1,2,3,4,5))




//array distructuring
const k1 = ['rakha', 'ahdan', 'alfin', 'budi', 'joko', 'siti']
const [ketua, wakil, ...anggota] = k1

console.log(ketua)