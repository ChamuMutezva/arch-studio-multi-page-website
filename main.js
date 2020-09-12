const hamburger = document.querySelector(".hamburger");
const closemenu = document.querySelector(".closemenu");
const modal = document.querySelector(".modal");

closemenu.addEventListener("click", ()=> {
   closemenu.classList.toggle("hide");
   hamburger.classList.toggle("hide");
   modal.classList.add("hide");
})
hamburger.addEventListener("click", ()=> {
    console.log("clicked")
    closemenu.classList.toggle("hide");
    hamburger.classList.toggle("hide");
    modal.classList.remove("hide");
})
console.log(hamburger)