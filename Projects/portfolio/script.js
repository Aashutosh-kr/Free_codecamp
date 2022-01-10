// for hiding sidebar
let ham = document.getElementById("hamburger");
let hide = document.getElementById("close");
let nav = document.getElementById("navbar");
let main = document.getElementsByTagName("main");

hide.style.display = 'none';
nav.style.transform = 'translateX(-16rem)';
ham.addEventListener("click", () => {
    if (nav.style.transform != 'translateX(0rem)') {
        nav.style.transform = 'translateX(0rem)';
        ham.style.display = 'none';
        setTimeout(() => {
            hide.style.display = 'inline-block';
        }, 500)
    }
})
hide.addEventListener("click", () => {
    if (nav.style.transform != 'translateX(-16rem)') {
        nav.style.transform = 'translateX(-16rem)';
        hide.style.display = 'none';
        setTimeout(() => {
            ham.style.display = 'inline-block';
        }, 500)
    }

})