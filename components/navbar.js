/** 
 * ===== NAVBAR INCLUSION SYSTEM =====
 * Loads navbar component into all pages dynamically
*/

// Function to load the navbar HTML
async function loadNavbar() {
    try {
        const response = await fetch('/components/navbar.html');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }   
        const navbarHTML = await response.text();
        const container = document.getElementById('navbar-container');
        if (!container) {
            throw new Error('Navbar container not found');
        }
        container.innerHTML = navbarHTML;
        console.log('Navbar loaded successfully');
        
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

// Initialize the navbar when page loads
async function initializeNavbar() {
    await loadNavbar();
    
    initializeSearch();
    initializeDarkMode();
    initializeMobileMenu();
}


/**
 * ===== SEARCH BAR FUNCTIONALITY =====
 * Toggles search input expansion on icon click
 */
const initializeSearch = () => {
    const searchInput = document.querySelector('.search-container input');
    const searchIcon = document.querySelector('.search-icon');

    if(!searchInput || !searchIcon){
        console.warn('Search elements not found');
         return;
    }

    searchIcon.addEventListener('click', () => {
        searchInput.classList.toggle('search-expanded');
    });
}

/**
 * ===== DARK MODE TOGGLE =====
 * Manages theme switching with localStorage persistence
 * Updates icon visual feedback based on current theme
 */
const initializeDarkMode = () => {
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
};

/**
 * ===== MOBILE MENU TOGGLE =====
 * Handles hamburger menu functionality for mobile devices
 * Manages navbar expansion and link visibility
 */
const initializeMobileMenu = () => {
    const menuBtn = document.querySelector('.mobile-menu-toggle');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active'); // Toggle on the button
        document.querySelector('.topnavbar').classList.toggle('menu-height'); // Expand the navbar height
        document.querySelectorAll('.nav-links').forEach(link => link.classList.toggle('menu-open')); // Show the menu
        document.querySelectorAll('.auth-links').forEach(link => link.classList.toggle('menu-open')); // Stack links vertically
    });
};

document.addEventListener('DOMContentLoaded', initializeNavbar);