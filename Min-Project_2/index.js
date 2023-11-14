const inputSlider=document.querySelector("[data-lengthslider]");
const lengthDisplay=document.querySelector("[data-lengthnumber]");
const passwordDisplay=document.querySelector("[data-passworddisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copymsg]");
const uppercasecheck=document.querySelector("#uppercase");
const lowercasecheck=document.querySelector("#lowercase");
const numbersCheck=document.querySelector("#numbers");
const symbolCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generateButton");
const allCheckBox=document.querySelectorAll("input[type=checkbox]");/*acces all input whose type is checkbox */

let password="";/* password is empty at starting*/
let passwordLength=5;/* at starting password length will be 10 */
let checkCount=1;/* 1 checkbox will be counted at starting*/


// 1st we decide the length of password with the help of slider
//2nd then we generate the password of that particular length by clicking on Generate password button
//3rd after clicking on generate password we will tick the check box that what we have to keep in generated password 
//4th after password is generated then we will see the strength of password through Circle color
//and we will see the generated password in data-passworddisplay
//we can also copy the password present inside data-passworddisplay

// sets passwordlength based on slider
function handleSlider()
{
    inputSlider.value=passwordLength;//inputSlider is initialized with passwordLength(i.e. 10)
    lengthDisplay.innerText=passwordLength;//inputSlider is on 10 hence lengthDisplay will also be 10
}
handleSlider();
function setIndicator()//sets color and shadow of strength
{
indicator.setAttribute("Class","circle");//inside indicator class circle will be added and styling of class circle is given in "style.css"
}
setIndicator();

function getRndInteger(min,max)
{
    let rnd=Math.random();//(output=0.5)gives number between 0(inclusive) and 1(exclusive)
    let floats=rnd*(max-min);//(output=0.5*9=4.5) gives number between 0 to (max-min) and it may be floating number
   let round= Math.floor(floats);//(output=4)floating number wont be seen and it will be integer
  //still round ,range is between 0 to max-min but we want a range between min to max
  let range=round+min;//(output=4+1=5) integer range between min to max
  return range;
}
// getRndInteger(1,10)

function generateRandomNumber()
{
  return getRndInteger(1,10);
}

function generateLowerCase()//gives character between "a"(ascii of "a"=97) to "z"(ascii of "z"=123) 
{
 String.fromCharCode(getRndInteger(97,23));//String.fromCharcode()coverts 97 and 23 into string

}
function generateUpperCase()//gives character between "A"(ascii of "a"=65) to "z"(ascii of "Z"=>91) 
{
 String.fromCharCode(getRndInteger(65,91));//String.fromCharcode()coverts 65 and 91 into string A and B

}
function generateSymbol()
{
    
}