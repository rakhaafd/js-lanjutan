//versi class

class Mahasiswa{
    constructor(nama, energi){
        this.nama = nama
        this.energi = energi
    }
    
    function(porsi){ 
        this.energi += porsi
        return `halo ${this.nama} selamat makan`
        }
        
        
    function(jam){
            this.energi += jam * 2
            return `halo ${this.nama} selamat tidur`
        }
    }

    let mhs = new Mahasiswa ('rakha', 30)