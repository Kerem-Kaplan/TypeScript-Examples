let sehirler=["konya","izmir","adana","mersin"]

for(let i in sehirler){     //bu sekilde kullanımda dizi içindeki index numaralarına erişiriz
    console.log(i)
}

for(let i of sehirler){     //bu sekilde kullanımda ise dizideki verilere erişiriz
    console.log(i)
}