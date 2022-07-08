// pick the H1 tag
const h1 = document.querySelector("h1");

// and when I scroll calculate how big the font size should be 
window.addEventListener("scroll", function(){
    const pixels = window.pageYOffset

    h1.style.fontSize = pixels + "px"
})