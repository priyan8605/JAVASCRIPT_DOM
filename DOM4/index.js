console.log('Hello Jee');
setTimeout(function()
{
    console.log('third');
},3000);
function synch()
{
    console.log('first');
}
synch();
console.log('second');