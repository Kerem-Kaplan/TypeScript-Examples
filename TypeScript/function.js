function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla("Konya", 42));
console.log(topla2(4, 2));
console.log(topla3(42, 35));
function topla4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(topla4(3)); //bu sekilde tanımlama yapılırsa x=3 ve y=4 olur
console.log(topla4(3, 8)); //bu sekilde tanımlama yapılırsa x=3 fakat y=8 olur ve default olarak tanımlanan değeri ezer.        
function topla5(x, y) {
    if (y) { //ve bu tanımlama parametrelerin en sonunda olmalı
        return x + y;
    }
    return x;
}
console.log(topla5(3, 42));
console.log(topla5(3)); //bu sekilde kullanırsak y'ye deger atamamıs oluyoruz.
function davetEt(ilkdavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkdavetli + " " + digerleri.join(" ");
}
console.log(davetEt("Kerem", "Mehmet", "Havvanur", "Emel"));
