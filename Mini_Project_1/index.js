

const Modal = document.querySelector(".modal");
const Overlay = document.querySelector(".overlay");
//Modal open function
function OpenModal() {
    console.log(Modal);
    Modal.classList.add("active");/* adds the className ative inside modal*/
    Overlay.classList.add("overlayactive");
}

function CloseModal() {
    Modal.classList.remove("active");//active class created will be removed
    Overlay.classList.remove("overlayactive");//Overlayactive class created will be removed

}
// when click on closeModal class active and overlayactive will be removed
