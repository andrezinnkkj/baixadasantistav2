function scrollBanner() {
    scrollPos = window.scrollY
    var headerText = document.querySelector('.header-paralax h1')
    headerText.style.transform = "translateY(" + -(scrollPos / 3) + "px)";
    headerText.style.opacity = 1-(scrollPos/400);
    
}

window.addEventListener('scroll', scrollBanner)