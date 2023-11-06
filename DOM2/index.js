//Type Coercion=>automatic or implicit conversion from one type to another
let value1=5;
let value2='5';
//let sum=value2+value1;
console.log(typeof(value1==value2));
let obj1={id:1};
let obj2={id:1};
console.log(obj1===obj2);



function m1()
{
    alert('hiii');
}
let doc=document.querySelector('button');
doc.addEventListener('click',m1);
//doc.removeEventListener('click',m1);
//let clickEvent= new Event('click');
//code.dispatchEvent(clickEvent);

//event object
const content=document.querySelector('#one');
content.addEventListener('click',function(event){
    console.log(event);
})


let myDiv=document.createElement('div');
function paraStatus(event)
{
    console.log('i have clicked on para '+event.target.textContent);
}
myDiv.addEventListener('click',paraStatus);

for(let i=1;i<=5;i++)
{
    let newElement=document.createElement('p');
    newElement.textContent='This is a para '+ i;
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

let element=document.querySelector('#wrapper');
element.addEventListener('click',function(event)
{
    if(event.target.nodeName=='SPAN'){
    console.log('clicked on the Span :'+event.target.textContent);
    }
})