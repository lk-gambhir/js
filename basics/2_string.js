const myname = 'Lakshay' //doesnt matter single qoutes or double
const lccount = 200
console.log(`${myname} has solved ${lccount} leetcode problems`)

const gamename = new String('lakshay-gambhir-noob')

console.log(gamename[0])
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.indexOf('a')) //first index it finds
const array = gamename.split('-')
console.log(array)

const newstring = gamename.substring(0,6)
console.log(newstring)

const anotherstring = gamename.slice(-16,6) //-16 corresponds to 20-16 = 4 ->slice(4,6)
console.log(anotherstring)

const stringwithspace = "    Lakshay    "
console.log(stringwithspace.trim())

const website = "www.lakshay.com/lakshay%20gambhir" //%20 usually denotes spaces
console.log(website.replace("%20","-"))
console.log(website.includes("rohit"))



