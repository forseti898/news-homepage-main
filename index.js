const navMenu = document.getElementById("navMenu");
const showMenu = document.getElementById("showMenu");
const closeMenu = document.getElementById("closeMenu");
const body = document.querySelector("body");
showMenu.addEventListener("click", ()=>{
    navMenu.classList.add("active");
    body.style.backgroundColor = "hsl(240, 100%, 5%, 30%)";
    body.style.transition = "ease-out 0.3s";
})

closeMenu.addEventListener("click", ()=>{
    
   navMenu.classList.remove("active");
   body.style.backgroundColor = "hsl(36, 100%, 99%)";
   body.style.transition = "ease-out 0.3s";
   
})