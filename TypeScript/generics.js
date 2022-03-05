function deger(x) {
    return x;
}
function deger2(x) {
    return x;
}
var sayi = deger(42);
console.log(sayi);
var sehir = deger2("Konya");
console.log(sehir);
function deger3(x) {
    return x;
}
var sayi3 = deger3(35);
var Sehir = deger3("Adana");
console.log(sayi3);
console.log(Sehir);
var genericClass = /** @class */ (function () {
    function genericClass() {
    }
    genericClass.prototype.fonksiyon = function (parametre) {
        return parametre;
    };
    return genericClass;
}());
var generic = new genericClass();
generic.degisken = "Konya";
var generic2 = new genericClass();
generic2.degisken = 42;
console.log("\n");
console.log(generic.degisken);
console.log(generic2.degisken);
