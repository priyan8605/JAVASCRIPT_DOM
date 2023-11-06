const t1=performance.now();

for(let i=1;i<=4;i++)
{
    let newElement=document.createElement('p');
    newElement.textContent="This is a para"+i;
    document.body.appendChild(newElement);
}
const t2=performance.now();
console.log('It took'+ (t2-t1)+"ms");

//optimized code
const p1=performance.now();
let myDiv=document.createElement('div');
for(let  i=1;i<=4;i++)
{
    let newElement=document.createElement('p');
    newElement.textContent="This is para"+i;
      myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv)
const p2=performance.now();
console.log("It take "+ (p2-p1)+"ms");

//using document fragment

const t3=performance.now();
let fragment=document.createDocumentFragment();
for(let  i=1;i<=4;i++)
{
    let newElement=document.createElement('p');
    newElement.textContent="This is paragraph"+i;
   fragment.appendChild(newElement);

}
document.body.appendChild(fragment)
const t4=performance.now();

console.log("It takes "+ (t4-t3)+"ms");

console.log("It takes ");

//signle threaded language javascript

function addPara()
{
    let para=document.createElement('p');
    para.textContent='JS is single threaded language';
     document.body.appendChild(para);
}
function appendNewMessage()
{
    let para=document.createElement('p');
    para.textContent='How is everything going on';
    document.body.appendChild(para);
}
addPara();
appendNewMessage();
