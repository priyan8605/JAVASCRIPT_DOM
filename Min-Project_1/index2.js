const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay")
function openmodal()
{
    console.log("modal opened");
modal.classList.add("active");
overlay.classList.add("overlayactive");
}
function closemodal()
{
    console.log("modal closed");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive"); 
}