// function init (){
//     let nama = 'rakha fausta'
//     function panggilNama (){
//         console.log(nama) // ini dinamakan lexical closure, mencari variable nama sampai ke atas
//     }
//     panggilNama()
// }
// init()




// function init (){
//     return function (nama){
//         console.log(nama)
//     }
// }

// let panggilNama = init()
// panggilNama('rakha')




// function ucapkanSalam (waktu){
//     return function (nama){
//         console.log(`halo selamat ${waktu}, ${nama}`)
//     }
// }

// let pagi = ucapkanSalam('pagi')
// let sore = ucapkanSalam('sore')
// let malam = ucapkanSalam('malam')

// pagi('rakha')






let add = (function(){
let counter = 0
return function(){
    return ++counter
}
})()

console.log(add())
console.log(add())
console.log(add())
console.log(add())
console.log(add())