// promise (janji)
// object yang merepresentasi keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang

// janji (terpenuhi / tidak)
// janji ini disebut states (terpenuhi: fulfilled, ingkar: rejected dan menunggu: pending)

// callback (resolve) untuk janji yang terpenuhi, callback (reject) untuk janji yang tidak terpenuhi, dan callback(finally) jika waktu tunggu selesai


//aksi (then) untuk janji yang terpenuhi, aksi (catch) untuk janji yang tidak terpenuhi






//contoh 1
// let ditepati = false
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('janji telah ditepati')
//     } else {
//         reject('janji tidak ditepati')
//     }
// })

// janji1
// .then(response => console.log(`sudah ditepati, ${response}`)).catch(response => console.log(`tidak ditepati, ${response}`))






//contoh 2
// let ditepati = false
// janji2 = new Promise ((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => resolve('janji ditepati setelah beberapa waktu'), 2000)
//     }

//     else {
//         setTimeout(() => reject('tidak ditepati setelah beberapa waktu'), 2000)
//     }
// })


// console.log('mulai')
// console.log(janji2.then(() => console.log('sudah ditepati')))

// janji2.finally(() => console.log('selesai menunggu')).then(response => console.log(`sudah ditepati, ${response}`)).catch(response => console.log(`tidak ditepati, ${response}`))
// console.log('selesai')





//promise.all
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'avengers',
            sutradara: 'marvel'
        }])
    }, 1000)
})


const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'jakarta',
            temperatur: 20,
            kondisi: 'normal'
        }])
    }, 500)
})

Promise.all([film, cuaca])

.then(response => {
    const [film, cuaca] = response
    console.log(film)
    console.log(cuaca)
})