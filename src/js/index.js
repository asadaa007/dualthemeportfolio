const navbar = document.querySelector('.nav-row');
const navAnim = document.querySelector('.nav-menu');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('nav-active');
        navAnim.classList.add("nav-menu2");
    } else {
        navbar.classList.remove('nav-active');
        navAnim.classList.remove("nav-menu2");
    }
};