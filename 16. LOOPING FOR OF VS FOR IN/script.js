// for..of
//array
const mhs = ['rakha', 'ahdan', 'alfin']

// for (let i = 0; i < mhs.length; i++){
//     console.log(mhs[i])
// }

// mhs.forEach(m => console.log(m))

// for (const m of mhs) {
//     console.log(m)
// }



//string (tdk bisa guna foreach)
const nama = 'rakha'
// for (const n of nama) {
//     console.log(n)
// }



// versi forEach

// mhs.forEach((m, i) => { 
//     console.log(`${m} adalah mahasiswa ke-${i+1}`)
// }) 


//versi for of

for (const [i, m] of mhs.entries()){
    console.log(`${m} adalah mahasiswa ke-${i+1}`)
}




//Nodelist
// const liNa = document.querySelectorAll('.nama')
// // liNa.forEach(li => console.log(li.innerHTML))

// for (n of liNa){
//     console.log(n.innerHTML)
// }






//arguments
// function jumlahkanAngka (){
//     // return arguments.reduce((a, b) => a + b)
//     let jumlah = o
//     // arguments.forEach(a => jumlah += a)
//     for (let a of arguments){
//         jumlah += a
//     }
//     return jumlah
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5))




//for in
const mhs1 = {
    nama: 'rakha',
    umur: '17',
    kelas: 'XI SIJA 1'
}

for (m in mhs1){
    console.log(mhs1[m])
}