"use strict"; //new standard of js being used
console.log("Hello World")
//alert("Hello")
let name = "Lakshay"
let age = 19
let isloggedin = false
let stringtoint = Number(name)
console.log(typeof(stringtoint))
console.log(stringtoint); //NaN -> not a number

console.log(typeof(name))
console.table([name,age,isloggedin])

let ageword = String(age);
console.log(ageword)
console.log(typeof(ageword));
console.log(ageword[1]) //can use indexing now
console.log(age[0]) //can't use indexing in normal number datatype

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

//js converts datatype in case of comparison but not in case of equality

console.log("2" == 2) //true because converts to desired datatype
console.log("2" === 2) //false because compares datatype as well

//Datatypes(in js) :
// number
// bigint
// string
// boolean
// null
// undefined
// symbol

// object 
