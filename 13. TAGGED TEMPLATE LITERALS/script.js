// //tagged templates
// const nama = 'rakha fausta'
// const umur = 17


// function coba(strings, ...values){ //expression akan masuk di parameter berikutnya
// //     let result = ''
// //     strings.forEach((str, i) => {
// //         result += `${str}${values[i] || ''}`
// //     })
// //     return result


// return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')


// }



// const str = coba `Halo, nama saya ${nama}. saya umur ${umur}`
// console.log(str)







// highlight
const nama = 'rakha fausta'
const umur = 17
const email = 'rakha@gmail.com'


function highlight(strings, ...values){ 


return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')


}



const str = highlight `Halo, nama saya ${nama}. saya umur ${umur} dan email saya ${email}`
document.body.innerHTML = str