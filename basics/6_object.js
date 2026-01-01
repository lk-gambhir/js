//object literal

const mysym = Symbol("key")

const user = {
    name : "lakshay",
    "full name" : "lakshay gambhir",
    [mysym] : "keyvalue", //symbol
    age : 19,
    location: "sonipat",
    email: "lakshaygambhir96@gmail.com",
    isloggedin: false
}
console.log(user)
console.log(user.email)
console.log(user["email"]) //cant write user[email]
console.log(user["full name"])
console.log(user[mysym])

user.email = "lakshaygambhir12@gmail.com"
//Object.freeze(user) //cant make changes now
user.email = "lgambhir1_be24@thapar.edu"
console.log(user.email)

user.greeting = function(){
    console.log("hello world")
}
user.greetingtwo = function()
{
    console.log(`hello ${this.name}`)
}
user.greeting()
user.greetingtwo()


//singleton ->single object is created through constructors
//Object.create()
const tinderuser = new Object()

tinderuser.name = "chris"
tinderuser.age = 21
tinderuser.isjacked = true

const obj1 = {1:"a" , 2:'b'}
const obj2 = {3:"c",4:"d"}
const obj3 = {6:"f" , 7 : "u"}

const newobj = Object.assign({},obj1,obj2,obj3)
console.log(newobj)

const newobj2 = {...obj1,...obj2,...obj3}
console.log(newobj2)


const course = {
    name: "js learning",
    price: 0,
    platform :"youtube",
    channel: "chai aur code"
}

const {channel} = course //can use name again and again instead of course.name
const {platform : yt} = course //can use yt so shortened it even more

console.log(course.name)
console.log(channel) //curly braces => destructuring
console.log(yt)