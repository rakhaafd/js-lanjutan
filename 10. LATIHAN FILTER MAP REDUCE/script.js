// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration-video]'))



// pilih hanya yang c++
let cpp = videos.filter(video => video.textContent.includes('c++'))




// ambil durasi masing2 video
.map(item => item.dataset.durationVideo)




// ubah durasi menjadi int, ubah menit menjadi detik
.map (waktu => {
    let parts = waktu.split(':').map(part => parseFloat(part))
    return parts[0] * 60 + parts[1]
})



// jumlahkan semua detik
.reduce((total, detik) => total * detik);



// ubah format jadi jam menit detik
let jam = Math.floor(cpp / 3600)
cpp = cpp - jam * 3600
const menit = Math.floor(cpp / 60)
const detik = cpp - menit * 60




//simpan di DOM
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`
const jmlVideo = videos.filter(video => video.textContent.includes('c++')).length
const pJmlVideo = document.querySelector('.jumlah-video')
pJmlVideo.textContent = `${jmlVideo} Video`