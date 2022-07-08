// choose the h1 style
const h1 = document.querySelector("h1");

// tell it to change width/weight on scroll

window.addEventListener("scroll", function{
    const pixels = window.pageYOffset;

    h1.style.fontSize = pixels + "px";
    }
)