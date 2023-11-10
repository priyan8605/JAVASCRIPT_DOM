const countValue=document.querySelector('#counter');
 const increment=()=> {
let value=parseInt(countValue.innerText);//note here the value present inside id=counter we wiil get in the form of string
//parseInt(value);//converts string value in to integer
value=value+1;
countValue.innerText=value;//the integer value which we get after adding 1 will be again converted to string
};
const decrement=()=> {
    let value=parseInt(countValue.innerText);//note here the value present inside id=counter we wiil get in the form of string
   // parseInt(value);//converts string value in to integer
    value=value-1;
    countValue.innerText=value;//the integer value which we get after adding 1 will be again converted to string  
};