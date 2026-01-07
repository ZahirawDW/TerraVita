const seasons = {
    spring:{
        btn: document.querySelector('.spring-btn'),
        section: document.getElementById('spring')
    },
    summer:{   
        btn: document.querySelector('.summer-btn'),
        section: document.getElementById('summer')  
    },
    autumn:{
        btn: document.querySelector('.autumn-btn'),
        section: document.getElementById('autumn')
    },
    winter:{
        btn: document.querySelector('.winter-btn'),
        section: document.getElementById('winter')
    },
    other:{
        btn: document.querySelector('.other-btn'),
        section: document.getElementById('other')
    }
}

// Hide all the season
function hideAll(){
    Object.values(seasons).forEach(({section,btn}) => {
        section.style.display = 'none';
        // remove active class from all buttons
        btn.classList.remove('active');
    });
}

// Display one season
function displaySeason(section, button){
    hideAll();
    section.style.display = 'block';
    button.classList.add('active');
}

// Event Listener
Object.entries(seasons).forEach(([seasonName,{section,btn}]) => {
    btn.addEventListener('click', () => {
        displaySeason(section, btn);
        window.location.hash = seasonName; // Update URL hash
    });
});



// Handle URl hash on the pageload
function handlehashLink(){
    const hash = window.location.hash.substring(1);
    if (seasons[hash]) {
        displaySeason(seasons[hash].section, seasons[hash].btn);
    } else {
        displaySeason(seasons.spring.section, seasons.spring.btn);
    }
}

// Default Season when loading and handle hash link
window.addEventListener('load',()=>{
    handlehashLink();
});