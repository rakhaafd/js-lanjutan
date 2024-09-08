// const liMhs = document.querySelectorAll('li')
// const mhs = []
// for (let i = 0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent)
// }

// console.log(mhs)

// const mhs = [...liMhs].map(m => m.textContent) //yg aslinya nodelist di spread menjadi array




const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
nama.innerHTML = huruf