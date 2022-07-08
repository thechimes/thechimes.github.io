// choose the h1 style
const h1 = document.querySelector("h1")

// tell it to change width and weight on scroll

window.addEventListener("scroll", function (){
    const pixels = window.scrollY

    const wght = 100 + pixels * 0.4
    const wdth = 100 + pixels * 0.1
    
    h1.style.fontVariationSettings = `"wght" ${wght}, "wdth" ${wdth}`
    }
)

