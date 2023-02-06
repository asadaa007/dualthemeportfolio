// Nav Bar Scroll Effect
const navbar = document.querySelector('.nav-row');
const navAnim = document.querySelector('.nav-menu');
const Theme = document.querySelector('.selectThm');
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

// Scroll Nav
(function () {        
    $("#home-btn").on('click',function() {
            $('html, body').animate({
                scrollTop : $("#home").offset().top - 10
            }, 1000);
            $('.list-item').removeClass('active');
            $('#home-btn').parent().addClass('active');
    });
  
    $("#projects-btn").on('click',function() {
            $('html, body').animate({
                scrollTop : $("#projects").offset().top - 45
            }, 1000);
            $('.list-item').removeClass('active');
            $('#projects-btn').parent().addClass('active');
    });
    $("#service-btn").on('click',function() {
            $('html, body').animate({
                scrollTop : $("#service").offset().top - 120
            }, 1000);
            $('.list-item').removeClass('active');
            $('#service-btn').parent().addClass('active');
    });
    $("#testimonial-btn").on('click',function() {
            $('html, body').animate({
                scrollTop : $("#testimonial").offset().top - 120
            }, 2000);
            $('.list-item').removeClass('active');
            $('#testimonial-btn').parent().addClass('active');
    });
})();











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