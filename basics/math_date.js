const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)  + min))

// JavaScript stores dates as number of milliseconds since January 01, 1970
let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())

console.log(mydate.toLocaleString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleTimeString())

console.log(mydate.toDateString())
console.log(mydate.toTimeString())

// Getting the timestamp (milliseconds since January 1, 1970)
let myTimestamp = new Date().getTime();
console.log(myTimestamp);
let myTimestampNow = Date.now();
console.log(myTimestampNow);


//let newdate = new Date(2025,12,30,4,30)
let newdate = new Date("12-31-2025")
console.log(newdate.toString());
console.log(newdate.getMonth() + 1) //0 based indexing

console.log(mydate.toLocaleString('default',
    {
        weekday : "long",
        year : "numeric",
        month:"long",
        day:"numeric",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12: true,
        timeZone : 'Asia/Kolkata'
    }
))



