//template literal
const nama = 'rakha'
const umur = 17
console.log(`nama saya ${nama}, dan umur saya ${umur}`)


// embedded expression

// console.log(`${alert('halo')}`)
const x = 10
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`)



//html fragment
const mhs = {
    nama: 'rakha',
    umur: '17',
    kelas: 'XI SIJA 1'
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="umur">${mhs.umur}</span>
</div>`;