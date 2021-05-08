console.log("Witam wszystkich oddwiedzających! Miło mi Was gościć na pierwszej mojej stronie")

let detetePicture = document.querySelector(".section__deletePicture");
let picture = document.querySelector(".section__picture");

detetePicture.addEventListener("click", () => {
    picture.remove()
});


let button = document.querySelector(".section__lookButton");
let container = document.querySelector(".section--favoriteCar");
let themeName = document.querySelector(".section__lookThemeName");

button.addEventListener("click", () => {
    container.classList.toggle("black")
    if (container.classList.contains("black")) {
        themeName.innerText = "jasne";
    } else {
        themeName.innerText = "ciemne";
    }
});