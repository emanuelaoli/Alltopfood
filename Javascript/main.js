const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scolled');
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scolled')
    }
})