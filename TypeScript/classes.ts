class Ev{
    _odaSayisi:number
    _pencereSayisi:number
    _kat:number
    constructor(odasayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi=odasayisi
        this._pencereSayisi=pencereSayisi
        this._kat=kat
    }

    yemekYe(){
        console.log(this._kat+" "+" Katlı evde yemek yendi")
    }
}

let ev=new Ev(3,4,2)
ev.yemekYe();
console.log(ev._pencereSayisi)

class Kisi{
    private _isim:string

    get isim():string{
        return "Sayin " +this._isim
    }

    set isim(ad:string){
        this._isim=ad
    }

    kaydet(){
        console.log("Kisi Kaydedildi")
    }
}

class Musteri extends Kisi{
    satisYap(){
        console.log("Satis Yapildi")
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("Maas Ödendi")
    }
}

let musteri=new Musteri()
musteri.isim="Kerem"
console.log(musteri.isim)
musteri.kaydet();
musteri.satisYap()

let personel=new Personel()
personel.kaydet();
personel.maasOde()