const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]')
                .classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    // check if the navbar is currently hidden
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = "block"; // show the navbar
        menuIcon.classList.remove('bx-menu'); // remove the original menu icon class
        menuIcon.classList.add('bx-x'); // add the close icon class
    } else {
        navbar.style.display = 'none'; 
        menuIcon.classList.remove('bx-x'); 
        menuIcon.classList.add('bx-menu'); 
    }

    navbar.classList.toggle('active'); // toggle the 'active' class on the navbar
};

// handle screen resize to reset styles
window.onresize = () => {
    if (window.innerWidth > 768) { // Assuming 768px is the breakpoint
        navbar.style.display = ''; // Reset inline styles
        menuIcon.classList.remove('bx-x');
        menuIcon.classList.add('bx-menu');
    }
};
