function selamVer(isim: string) {
    return "Merhaba " + isim
}

let mesaj = selamVer("Kerem")

console.log(mesaj)

let sayi: number = 42     //number tipindeki değiskenlerde ondalıklı ifadeleri de tutabiliriz
sayi = 19
sayi = 4.2

let sehir: string = "Konya"        //string değiskeni ile meetinsel ifadeler tutarız
sehir = "Ankara"
sehir = "İzmir"

let dogruMu: boolean = true        //boolean degiskeni ile mantıksal ifadeleri tutarız ve yalnızca true ve false degeri alır.
dogruMu = false
dogruMu = true

let sayilar: number[] = [1, 2, 3]       //bu sekilde array tanımı yapılabilir
let sayilar2: Array<number> = [1, 2, 3,]        //bu sekilde array tanımı yapmak daha saglıklı olur.

let array: [number, string] = [42, "Konya"]      //bu tip tanımlamaya ise tuple denir
array[0]        //dizideki 42 yazan kısıma ulasırız
array[1]        //dizideki Konya kısmına ulasırız

enum Renk { Kirmizi = 1, Siyah, Mor }
let renk: Renk = Renk.Kirmizi        //bu sekilde enumdaki istediğimiz değere ulasabiliriz

let deger: any = "Ankara"        //any kelimesiyle ile istedigimiz tipdeki verileri tutabiliriz
deger = 4
deger = []
deger = {}

let deger2: void = undefined

function selamVer2(): void {      //fonksiyon eger void ise return yani geri dönus degeri almaz
    console.log("Merhaba kardes")
}

let yas: number
yas = 42

class Customer {

}