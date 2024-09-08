//callback
//synchronous callback

// function hallo (nama){
//     alert(`halo ${nama}`)
// }

// function tampilkanPesan(callback){
//     const nama = prompt('siapa namamu?')
//     callback(nama)
// }

// tampilkanPesan((nama) => alert(`halo ${nama}`))






// const mhs = [
//     {
//     "nama": "rakha",
//     "umur": 17,
//     "email": "rakha@gmail",
//     "kota": "jakarta",
//     "ipk": 3.5
//     },

//     {
//     "nama": "syahrul",
//     "umur": 17,
//     "email": "syahrul@gmail",
//     "kota": "surabaya",
//     "ipk": 2.5
//     },

//     {
//         "nama": "udin",
//         "umur": 17,
//         "email": "udin@gmail",
//         "kota": "malang",
//         "ipk": 2.0
//         }
// ]

// console.log('mulai')
// mhs.forEach(m => {
//     for(let i = 0; i < 1000000; i++){
//     let date = new Date()
//     }
//     console.log(m.nama)
// })
// console.log('selesai')



console.log('mulai')
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama))
    },

    error: (e) => {
        console.log(e.responseText)
    }
})
console.log('selesai')