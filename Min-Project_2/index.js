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
handleSlider();//ye passwordLength ko user interface or screen prr display krayga
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
 return String.fromCharCode(getRndInteger(97,23));//String.fromCharcode()coverts 97 and 23 into string

}
function generateUpperCase()//gives character between "A"(ascii of "a"=65) to "z"(ascii of "Z"=>90) 
{
 return String.fromCharCode(getRndInteger(65,90));//String.fromCharcode()coverts 65 and 90 into string A and B

 }
 const symbols =" ~``!@#%^&*(_+?</>)./";
function generateSymbol()
{
const randNum=getRndInteger(0,symbols.length);//symbols.length is max which gives string length
return symbols.charAt[randNum];//charAt[randNum] returns the character present at particular index of string symbols
//const randNum=getRndInteger(0,symbols.length); getRndInteger se jo bhi number milega between 0 and String.length vo particular number is
//stored in randNum
//return symbols.charAt[randNum]; number stored in randNum will become the particular index of symbols string and that particular
//index string we will return
}

function clacStrength()//calculates length of passwor
{
  // in js we can access checkbox element using id,class or tag name and apply '.checked', '.checked' returns a boolean value
let hasUpper=false;
let hasLower=false;
let hasNum=false;
let hasSym=false;
if(uppercasecheck.checked)
{
  hasUpper=true; //means checkbox will get tick
}
if(lowercasecheck.checked)
{
  hasLower=true; //means checkbox will get tick
}
if(numbersCheck.checked)
{
  hasNum=true; //means checkbox will get tick
}
if(symbolCheck.checked)
{
  hasSym=true; //means checkbox will get tick
}
if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength>=8 ==true)
{
  setIndicator("#0f0");
}
else if((hasUpper || hasLower) && (hasNum || hasSym) && passwordLength>=8 == true)
{
  setIndicator("#ff0")
}
else
{
  setIndicator("#f00");
}
}

async function copyContent()//wil copythe generated password
{
  try
  {
   // Copy the text inside the text field
  await navigator.clipboard.writeText(passwordDisplay.value);//writeText() will copy on clipboard api and return a promise
 // to copy the text with clipboard API we will use the asynchronous writeText() method which accept only one parameter-the text to copy to your clipboard. 
 //as writeText() method is asynchronous it returns a promise.This promise is resolved if clipboard has been updated successfully and is rejected otherwise
 //navigator is an object which contains information about browser
 //navigator object is a property of window object
  copyMsg.innerText="copied";
  //alert the copied text
   await alert("Copied the text: " + passwordDisplay.value);
  }
  catch(e)
  {
  copyMsg.innerText="Failed";
  }
  //to make copy <span></span> visible
  copyMsg.classList("active");//active class will be added in copyMsg
  setTimeout(function()
  {
    copyMsg.classList.remove("active");

  },2000);
  //after 2sec active class will be removed
}

//when we move slider password length will also change hence one eventListener on slider
//another eventlistener on copy button
//another listener on generate password button


inputSlider.addEventListener('input',function(event)
{
  
   passwordLength=event.target.value;
   handleSlider();
  
   //yha jaise jaise slider aage badhega passwordLength bhi change hote rhega
})

copyBtn.addEventListener('click',function()
{
  if(passwordDisplay.value) //agr passwordDisplay me kuchhvalue pda hoga tbhi copy hoga
  {
     copyContent()
  }

  //or if(passwordLength.length>0){copyContent()}

})

// note that there is 4 checkbox then minimum length of password should be 4
function handleCheckBoxChange()
{
  checkCount=0;//initializing that till now their is no change in checkBox 
  allCheckBox.forEach(function(checkBox)//each checkbox will be accesed
  {
    if(checkBox.checked)//agr checkBox checked hai to checkCount will increment by 1
    {
      checkCount=checkCount+1;
    }

    //special condition:- agr passwordLength is less than checkCount then in that case 
    //make passwordLength = checkCount
    if(passwordLength<checkCount)
    {
      passwordLength=checkCount;
      handleSlider();
    }
  })
} 
//forEach loop ka use krke har ek checkbox ke oopar eventlistener lga denge
//ki jb bhi koi change(i.e tick or untick) ho to ek function call hoga handleCheckBoxChange()
allCheckBox.forEach (function(checkbox)
{
  //allCheckBox ke and ke hr ek checkbox ko forEach access krega
   checkbox.addEventListener('change',handleCheckBoxChange);
} )

generateBtn.addEventListener('click',function()
{
//agr sbhi checked box unchecked hai then password will not be generated
//agr password generate krna hai to kmm se kmm atleast ek checkbox must be  ticked
//so we will use listener on check box so that we can keep count of how much checkBox we have ticked

})