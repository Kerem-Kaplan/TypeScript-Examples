function topla(x, y) {        //bu sekilde tanımlama yaparak x ve y degiskenlerine istediğimiz bir veri tipini stsysbiliriz ve sorun cıkartabilir
    return x + y
}

function topla2(x: number, y: number): number {      //bu sekilde tanımlama yaparsak yanlıs bir seyler yaptıgımızda program uyarır ve daha dogru sonuclar alırız
    return x + y
}

let topla3 = function (x: number, y: number): number {     //bu sekilde tanımlama yaprak ise fonksiyonu topla3 degiskenine aktarmıs oluruz
    return x + y
}

console.log(topla(2, 3))
console.log(topla("Konya", 42))
console.log(topla2(4, 2))
console.log(topla3(42, 35))

function topla4(x: number, y: number = 4): number {      //bu sekilde y degiskenine deger verirsek bunu default olarak yapmıs oluruz
    return x + y;
}

console.log(topla4(3))      //bu sekilde tanımlama yapılırsa x=3 ve y=4 olur
console.log(topla4(3, 8))        //bu sekilde tanımlama yapılırsa x=3 fakat y=8 olur ve default olarak tanımlanan değeri ezer.        

function topla5(x: number, y?: number): number { //bu sekilde soru isareti kullanılırsa y'ye deger atanamayabilir demiş oluyoruz
    if (y) {                                  //ve bu tanımlama parametrelerin en sonunda olmalı
        return x + y;
    }
    return x;
}

console.log(topla5(3, 42))
console.log(topla5(3))      //bu sekilde kullanırsak y'ye deger atamamıs oluyoruz.

function davetEt(ilkdavetli: string, ...digerleri: string[]): string {      //rest paratmesi kullanımı
    return ilkdavetli + " " + digerleri.join(" ")
}

console.log(davetEt("Kerem", "Mehmet", "Havvanur", "Emel"))