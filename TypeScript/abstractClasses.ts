abstract class KrediBase {
    constructor() {
    }

    kaydet():void{
        console.log("Kaydedildi")
    }

    abstract hesapla():void
}

class KonutKredi extends KrediBase {
    constructor() {
        super()
    }

    hesapla():void{
        console.log("Konut Kredisine GÖre Hesap Yapıldı")
    }
}

class TuketiciKredi extends KrediBase {
    constructor() {
        super()
    }

    hesapla():void{
        console.log("Tuketici Kredisine GÖre Hesap Yapıldı")
    }
}


let tuketicikredi=new TuketiciKredi()
tuketicikredi.hesapla();
tuketicikredi.kaydet();

let konutkredi=new KonutKredi()
konutkredi.hesapla();
konutkredi.kaydet();

let kredi:KrediBase

kredi=new TuketiciKredi()

kredi=new KonutKredi()
