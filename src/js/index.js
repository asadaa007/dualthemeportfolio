// Nav Bar Scroll Effect
const navbar = document.querySelector('.nav-row');
const navAnim = document.querySelector('.nav-menu');
const Theme = document.querySelector('.selectThm')
window.onscroll = () => {
    if (window.scrollY > 100) {
        Theme.classList.add('scroll-nav');
        navbar.classList.add('nav-active');
        navAnim.classList.add("nav-menu2");
    } else {
        Theme.classList.remove('scroll-nav');
        navbar.classList.remove('nav-active');
        navAnim.classList.remove("nav-menu2");
    }
};

// Testimonial 


$('.slider-hero').slick({
    dots: true,
    speed:600,
});


// Theme

function initThemeSelector() {
    const themeSelect = document.getElementById("themeSelect");
    const themeStylesheetLink = document.getElementById("themeStylesheetLink");
    const currentTheme = localStorage.getItem("theme") || "lightTheme";

    function activateTheme(themeName) {
        themeStylesheetLink.setAttribute("href", `./src/css/${themeName}.css`);
    }

    themeSelect.addEventListener("change", () => {
        activateTheme(themeSelect.value);
        localStorage.setItem("theme", themeSelect.value);
    });


    themeSelect.value = currentTheme;
    activateTheme(currentTheme);
}

initThemeSelector();