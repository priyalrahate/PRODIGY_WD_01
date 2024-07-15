
const navbar = document.getElementById('navbar');


function toggleNavbarBackground() {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
}

window.addEventListener('scroll', toggleNavbarBackground);

const navItems = document.getElementsByClassName('nav-item');
for (let item of navItems) {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#555';
    });
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor ='';
    });
}

