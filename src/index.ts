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