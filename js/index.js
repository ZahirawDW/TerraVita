// Animation in opacity of the backgound image
const header = document.querySelector('.hero-section');

window.addEventListener('scroll',()=>{
    const scrollTop = window.scrollY; 
    header.style.opacity = 1 - scrollTop / 800;
    if (screen.width > 479){
        const minSize = 100;
        const startSize = 120; 
        const scrollLimit = 1000;
        let newSize = startSize - (scrollTop / scrollLimit) * (startSize - minSize);
        header.style.backgroundSize = `${newSize}%`;
    }else{
        header.style.backgroundSize = 'cover';

    }
})

function commingSoon(){
    const futureBtn = document.querySelectorAll('.description');
    futureBtn.forEach(element => {
        element.addEventListener('click',()=>{
            alert('Coming Soon. Sorry!');
        });
    })
}
commingSoon();
