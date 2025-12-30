const arr = [1,2,3,4]
const arr2 = new Array("lakshay","gambhir","is","good","boy")
console.log(arr)
console.log(arr[0])

arr.push(0)
arr.pop()
arr.push(67)

arr.unshift(9)
console.log(arr)
arr.shift()
console.log(arr)

console.log(arr.includes(6))
console.log(arr.indexOf(3))

const newarr = arr.join()
console.log(typeof newarr)

//slice , splice
console.log(`array before slice and splice is : ${arr}`)
console.log(arr.slice(1,3))
console.log(`array after slice is : ${arr}`)
console.log(arr.splice(1,3))
console.log(`array after splice is : ${arr}`)


const marvel = ["hulk","ironman","captain america","spiderman"]
const dc = ["superman","flash","batman"]

marvel.push(dc) //pushed array itself not elements
console.log(marvel)

const all_concat_heroes = marvel.concat(dc) //requires a new array

const all_heroes = [...marvel,...dc] //called spreading of array
console.log(all_heroes)


const newarray = [1,2,[3,4],5,[6,7,[8,9]]] //3 degree array
const flatarray = newarray.flat(Infinity)
console.log(flatarray)


console.log(Array.isArray("Lakshay"))
console.log(Array.from("Lakshay"))
console.log(Array.from({name:"lakshay"}))

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3))