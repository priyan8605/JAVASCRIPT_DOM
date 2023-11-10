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

//promise in js
let myPromise=new Promise(function(resolve,reject)
{
    setTimeout(function(){
    console.log("Inside Promise");},5000);
   resolve(2004);
  reject(new Error('an issue'));
});
myPromise.then((value)=>{console.log(value)},(error)=>{console.log("received  : "+error)})
myPromise.catch((error)=>console.log("received  : "+error));

//using then() to execute 2 promises one by one
let promise1=new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        console.log('inside promise1');
    },2000);
    resolve(true);
})
let output=promise1.then(()=>{
    let promise2=new Promise(function(resolve,reject)
    {
        resolve('promise2 resolved');
    });
    return promise2;
});
output.then((value)=>console.log(" value ="+  value ));

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
    let dM=await delhiMausam;
    let hM=await hydMausam;

    return[dM,hM];
}
console.log(utility());
async function utility1()
{
let content=await fetch('https://jsonplaceholder.typicode.com/posts/1');
//let output1=(await content).json();
//let output=await content.status;
//let output=await content.ok;
let output=await content.text();
console.log(output);
}
//utility1();

//post using fetch api
async function helper(){
let options= {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  let content=await fetch('https://jsonplaceholder.typicode.com/posts',options);
  let response= content.json();
  return response;
}
async function utility2()
{
    let ans=await helper();
    console.log(ans);
}
utility2();

//lexical scoping and closure
function outer()
{
    let userName="hitesh";
    function inner1()
    {
        let secret="my123";
        console.log("inner1:-"+userName);
    }
    function inner2()
    {
        console.log("inner2:-"+userName);
       // console.log("inner2:-"+secret);//error
    }
    inner1();
    inner2();
    //console.log("outer:-"+secret);//error
}
outer();

//closure
function makeFunc() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
   return displayName;//here because of lexical scoping it's not that only displayNAme will return
   //but the outer function of displayNAme which is makeFunc will also return
  }
  const myFunc=makeFunc();//when function is execute it's scope is over
  myFunc();
  