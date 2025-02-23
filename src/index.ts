console.log("Typescript Merhaba");

// değişkenler,döngüler,karar blokları, fonksiyonlar

let name2:string="Halit";
console.log(name2)
//name2 = 10;
//console.log(name2)



// JS => Type-safe değilken 
// TS => Type-safedir
// 

// Value type
let a:number = 10;
let b:number = a;
b+=50;
console.log(a);
console.log(b);

// Reference type
let students:string[] = ["Sefa","Yaren","Sudenur","Nilay"]
let students2:string[] = students; // COPY-> Shallow copy,deep copy
students2.push("Deniz");
console.log(students)
console.log(students2)

// karar blokları
let age:number=18;

// koşul ve koşullar
// Bir koşul bloğu yalnızca bir karar verir.

// if,
// if,else
// if,else if,else
if (age >= 18)
{
    // Scope kavramı -> Bir bloğun kapsadığı alanın belirlenmesi.
    console.log("Kullanıcı reşit");
}
if(age == 18)
{
    console.log("Kullanıcı tam 18 yaşında.")
}
else // Yukarıdaki koşul-(lar) sağlanmaması durumunda çalışsın.
{
    console.log("Kullanıcı reşit değil..")
}

console.log("İf bitti.")

//

let gender:string="E";
if(age >= 18 && gender == "E") // VE => true,true => true
{
    console.log("Kullanıcı 18 yaşından büyük bir erkek")
}

if(age>=18 || gender == "K")// VEYA => true,false -> true
{
    console.log("Kullanıcı kadın ya da 18 yaşından büyük")
} 

