/** 
 * ===== FOOTER INCLUSION SYSTEM =====
 * Loads footer component into all pages dynamically
*/

// Function to load the footer HTML 
async function loadFooter() {
    try{
        const response = await fetch('/components/footer.html');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const footerHTML = await response.text();
        const container = document.getElementById('footer-container');
        if (!container) {
            throw new Error('Footer container not found');
        }
        container.innerHTML = footerHTML;
        

    }catch(error){
        console.error('Error loding Footer:', error)
    }
}

// Initialize the footer when page loads
async function initializeFooter(){
    await loadFooter();
    yearUpdate();
}

// UDTARE THE YEAR 
const yearUpdate = ()=>{
    const year = document.getElementById('year');
    const curyear =new Date().getFullYear();
    year.innerHTML = curyear;
}


document.addEventListener('DOMContentLoaded', initializeFooter);
