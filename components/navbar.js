// search bar
const inputEL = document.querySelector('.search-container input');

const searchEL = document.querySelector('.search-icon');

searchEL.addEventListener('click', () => {
    inputEL.classList.toggle('search-expanded');
});


// dark mode toggle
const bodyEl = document.querySelector("body")
const btnEL = document.querySelector(".btn")
const thumbEl = btnEL.querySelector("span"); 
    
if(localStorage.getItem("dark-mode") === "enabled"){
    bodyEl.classList.add("dark-mode");
    thumbEl.innerHTML = '<i class="fa-solid fa-moon" style="left: 6px;"></i>';
}else{
    thumbEl.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

btnEL.addEventListener("click",()=>{
    bodyEl.classList.toggle("dark-mode");

    if (bodyEl.classList.contains("dark-mode")){
        localStorage.setItem("dark-mode","enabled");
        thumbEl.innerHTML = '<i class="fa-solid fa-moon" style="left: 6px;"></i>';
    }else{
        localStorage.removeItem("dark-mode");
        thumbEl.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
})


// mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-toggle');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active'); // Toggle on the button
    document.querySelector('.topnavbar').classList.toggle('menu-height'); // Expand the navbar height
    document.querySelectorAll('.nav-links').forEach(link => link.classList.toggle('menu-open')); // Show the menu
    document.querySelectorAll('.auth-links').forEach(link => link.classList.toggle('menu-open')); // Stack links vertically
});