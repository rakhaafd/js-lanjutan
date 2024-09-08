// const coba = ['satu', 'dua', 'tiga']
// const [a, b, c] = coba
// console.log(a)
// console.log(b)
// console.log(c)


// const mhs = {
//     nama: 'rakha',
//     umur: '17',
//     kelas: 'XI SIJA 1'
// }

// const {nama, umur, kelas} = mhs
// console.log(nama)
// console.log(umur)
// console.log(kelas)



//destructuring variable
// const perkenalan = ['halo', 'nama', 'saya', 'rakha fausta']
// const [salam, satu, dua, nama] = perkenalan


//skipping item
// const [salam, , , nama] = perkenalan
// console.log(salam)



//swap
// let a = 1
// let b = 2
// console.log(a)
// console.log(b)
// [a, b] = [b, a]
// console.log(a)
// console.log(b)


//return value function
// function coba(){
//     return [1, 2, 3]
// }

// const [a, b] = coba()
// console.log(a)




//rest parameter
// const [a, ...value] = [1,2,3,4,5]
// console.log(a)
// console.log(value)




//destructuring obj
// const mhs = {
//     nama: 'rakha',
//     umur: '17',
//     kelas: 'XI SIJA 1'
// }

// const {nama, umur, kelas} = mhs  //harus sama dengan property
// console.log(nama)
// console.log(umur)
// console.log(kelas)





//asignment tanpa deklarasi objek
//   ({nama, umur, kelas} = {
//     nama: 'rakha',
//     umur: '17',
//     kelas: 'XI SIJA 1'
// })

// //harus sama dengan property
// console.log(nama)


//asign ke variable baru
// const mhs = {
//         nama: 'rakha',
//         umur: '17',
//         kelas: 'XI SIJA 1'
//     }

// const {nama: n, umur: u, kelas: k} = mhs
// console.log(n)



//default value
// const mhs = {
//     nama: 'rakha',
//     umur: '17',
//     kelas: 'XI SIJA 1'
// }

// const {nama: n, umur: u, kelas: k, jurusan: j = 'nilai default'} = mhs
// console.log(j)




//rest parameter
// const mhs = {
//     nama: 'rakha',
//     umur: '17',
//     kelas: 'XI SIJA 1'
// }

// const {nama, ...value} = mhs
// console.log(value)





// field pada object , setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'rakha',
    umur: '17',
    kelas: 'XI SIJA 1'
}

function getIdMhs({id}){
    return id
}

console.log(getIdMhs(mhs))