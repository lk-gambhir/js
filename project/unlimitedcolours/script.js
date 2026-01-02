const start = document.querySelector('#start');
const stop = document.querySelector('#stop')
let interval = null;
const randomcolour = function()
{
    const hex = "0123456789ABCDEF";
    let colour ='#';
    for(let i = 0 ; i < 6 ; i++)
    {
        const index = Math.floor(Math.random()*16);
        colour+=hex[index];
    }
    return colour;
}
function startchanging()
{
    if(interval) return;
    interval = setInterval(function()
{
    document.body.style.backgroundColor = randomcolour();   
},1000)
}
function stopchanging()
{
    if(interval)
    {
        clearInterval(interval);
        interval = null;
        document.body.style.backgroundColor ="#212121"; 
    }    
}
start.addEventListener('click',function()
{
    startchanging();
})
stop.addEventListener('click',function()
{
    stopchanging();
})
