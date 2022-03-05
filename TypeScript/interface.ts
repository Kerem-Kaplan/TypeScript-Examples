interface Product{      //eger interface kullanımı olursa icindeki tum degiskenlere bir deger verilmelidir!!!!!
    id:number
    name:string
    unitPrice:number
}

function save(product:Product){
    console.log(product.name +" Kaydedildi")
}

save({id:1,name:"Laptop ",unitPrice:42})

class Product2{     //eger bu sekilde product tanmlarsak istedigimiz degiskene deger verilebilir yani degerlerin hepisini girme zorunlulugu yok
    id:number
    name:string
    unitPrice:number
}

function save2(product2:Product2){
    console.log(product2.name +" Kaydedildi")
}

save2({id:1,name:"Laptop ",unitPrice:42})

let mouse =new Product2();
mouse.name="ATech"

save2(mouse);

interface personServices{       //böyle bir interface tanımlandıgında ve kalıtım yapılmak istenirse 'impplements' keywordu ile kullanılır.!!!
    save()
}

class customerServices implements personServices{
    save() {
        
    }

}