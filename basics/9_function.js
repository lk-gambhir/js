function greetings()
{
    console.log("Hello")
}
greetings()


function addtwonumbers(num1 = 0 , num2 = 0)
{
    return num1 + num2
}
const sum1 = addtwonumbers(3,4)
const sum2 = addtwonumbers(3,"a")
console.log(sum1,sum2)
console.log(addtwonumbers(3))


function shoppingcart(val1 , val2 , ...num1)
{
    console.log(val1 , val2 , num1)
}
shoppingcart(200,300,500,900,100)


function info(user)
{
    console.log(`${user.name} bought something at price ${user.price}`)
}
costumer = {
    name: "Lakshay",
    price: "500"
}
info(costumer)


const chai =  () => {
    let username = "lakshay"
    console.log(this);
}
chai()


// const addTwo = (num1, num2) => {
    //     return num1 + num2
    // }
    
// const addTwo = (num1, num2) =>  num1 + num2
const addTwo = (num1, num2) => ( num1 + num2 )
console.log(addTwo(3, 4));
//const addTwo = (num1, num2) => ({username: "lakshay"})


// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('lakshay')
    