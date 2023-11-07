// console.log('Hello Jee');
// setTimeout(function()
// {
//     console.log('third');
// },3000);
// function synch()
// {
//     console.log('first');
// }
// synch();
// console.log('second');

//promise in js
// let myPromise=new Promise(function(resolve,reject)
// {
//     setTimeout(function(){
//     console.log("Inside Promise");},5000);
//    resolve(2004);
//   reject(new Error('an issue'));
// });
// myPromise.then((value)=>{console.log(value)},(error)=>{console.log("received  : "+error)})
// myPromise.catch((error)=>console.log("received  : "+error));

//using then() to execute 2 promises one by one
// let promise1=new Promise(function(resolve,reject)
// {
//     setTimeout(function()
//     {
//         console.log('inside promise1');
//     },2000);
//     resolve(true);
// })
// let output=promise1.then(()=>{
//     let promise2=new Promise(function(resolve,reject)
//     {
//         resolve('promise2 resolved');
//     });
//     return promise2;
// });
// output.then((value)=>console.log(" value ="+  value ));

async function func1()
{
    console.log('babbar');
    return 7;
}
//func1();
console.log(func1());

async function utility()
{
    let delhiMausam=new Promise(function(resolve ,reject)
    {
                setTimeout(()=>
                {
                    resolve('Delhi hot');
                },1000);
    })

    let hydMausam=new Promise(function(resolve ,reject)
    {
                setTimeout(()=>
                {
                    resolve('hydrabad cold');
                },3000);
    })
    let dM=delhiMausam;
    let hM=hydMausam;

    return[dM,hM];
}
console.log(utility());