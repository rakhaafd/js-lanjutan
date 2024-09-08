let methodBuku = {
    baca: function(halaman){
        this.halaman -= halaman
        console.log(`halaman buku tersisa ${this.halaman}`)
    }

    ,tulis: function(halaman){
        this.halaman += halaman
        console.log(`halaman buku tersisa ${this.halaman}`)
    }

    ,tampil: function(judul, penulis, halaman){
        console.log(`${this.judul} ditulis oleh ${this.penulis}, dan memiliki jumlah halaman ${this.halaman}`)
    }
}

function Buku (judul, penulis, halaman){
    let buku = Object.create(methodBuku)
    buku.judul = judul
    buku.penulis = penulis
    buku.halaman = halaman
    return buku
}

let buku1 = Buku (`python`, 'rakha', 30)

buku1.tampil()
buku1.baca(100)
