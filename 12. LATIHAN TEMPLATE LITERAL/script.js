// 1. html fragment


// const mhs = {
//     nama: 'rakha',
//     umur: '17',
//     kelas: 'XI SIJA 1'
// }

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="umur">${mhs.umur}</span>
// </div>`;



//2. looping
// const mhs = [
//     {
//         nama: 'rakha',
//         email: 'rakha@gmail.com'
//     },

//     {
//         nama: 'ahdan',
//         email: 'ahdan@gmail.com'
//     },

//     {
//         nama: 'alfin',
//         email: 'alfin@gmail.com'
//     }
// ]

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`




//3. Conditional

//ternary
// const lagu = {
//     judul: 'i wanna be yours',
//     penyanyi: 'arctic monkeys',
//     feat: 'nella karisma'
// }

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.judul}</li>
// <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''} </li>
// </ul>
// </div>`






// 4. Nested
//html fragment bersarang

const mhs = {
    nama: 'rakha',
    semester: 5,
    mataKuliah: [
        'rekayasa web',
        'teknik',
        'listrik'
    ]
}

function cetakMataKuliah(mataKuliah){
    return `
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester: ${mhs.semester}</span>
<h4>Mata Kuliah:</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`



document.body.innerHTML = el