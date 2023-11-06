function m1()
{
    let constant=document.querySelectorAll('button');
    constant.addEventListener('click',function(event)
    {
        console.log("Happy birthday");
    })
};
setTimeout(m1,4000);