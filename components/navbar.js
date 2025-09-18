// search bar
const inputEL = document.querySelector('.search-container input');

const searchEL = document.querySelector('.search-icon');

searchEL.addEventListener('click', () => {
    inputEL.classList.toggle('search-expanded');
});


// dark mode toggle
const bodyEl = document.querySelector("body")
const btnEL = document.querySelector(".btn")

if(localStorage.getItem("dark-mode") === "enabled"){
    bodyEl.classList.add("dark-mode");
}

btnEL.addEventListener("click",()=>{
    bodyEl.classList.toggle("dark-mode");

    if (bodyEl.classList.contains("dark-mode")){
        localStorage.setItem("dark-mode","enabled");
    }else{
        localStorage.removeItem("dark-mode");
    }
})