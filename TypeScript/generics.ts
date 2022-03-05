function deger(x:number):number{        //bu sekilde kullanarak sadece number tipinde deger döndurebiliriz
    return x
}

function deger2(x:string):string{       //böyle kullanırsak sadece string tipinde deger dondurur.
    return x
}

let sayi =deger(42)
console.log(sayi)

let sehir=deger2("Konya")
console.log(sehir)

function deger3 <T>(x:T):T{     //bu tip kullanım yaparsak istediğimiz tipte veri saglayabilriz.
    return x
}

let sayi3=deger3<number>(35)
let Sehir=deger3<string>("Adana")

console.log(sayi3)
console.log(Sehir)

class genericClass<T>{      //generic ifadeleri sınıflara da tanımlayabiliriz.!!!
    degisken:T
    fonksiyon (parametre:T):T{
        return parametre
    }
}

let generic =new genericClass<string>()
generic.degisken="Konya"

let generic2 =new genericClass<number>()
generic2.degisken=42
console.log("\n")
console.log(generic.degisken)
console.log(generic2.degisken)