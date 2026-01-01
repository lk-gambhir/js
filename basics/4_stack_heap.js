//stack -> primitive datatype(inbuilt)
//heap -> non-premitive datatype(object,function,array)
//stack-> call by copy , heap-> call by reference
let myname = "lakshay"
let myname2 = myname
myname2 = "gambhir"
console.log(myname)
console.log(myname2)


let user1 = {
    name: "Lakshay",
    mail: "lakshaygambhir96@gmail.com"
}
let user2 = user1
user2.name = "Gambhir"
console.log(user1)
console.log(user2)