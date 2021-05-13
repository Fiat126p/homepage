{
    const welcome = () => {
        console.log("Witam wszystkich oddwiedzających! Miło mi Was gościć na pierwszej mojej stronie")
    }

    const onDeletePictureClick = () => {
        const picture = document.querySelector(".section__picture");
        picture.remove()
    };

    const deleted = () => {
        const detetePicture = document.querySelector(".section__deletePicture");
        detetePicture.addEventListener("click", onDeletePictureClick);
    }
    

    const toggleBackgroundSection = () => {
        const container = document.querySelector(".section__favoriteCar");
        const themeName = document.querySelector(".section__lookThemeName");
        container.classList.toggle("black")
        if (container.classList.contains("black")) {
            themeName.innerText = "jasne";
        } else {
            themeName.innerText = "ciemne";
        }
    }

    const init = () => {
        const button = document.querySelector(".section__lookButton");
        button.addEventListener("click", toggleBackgroundSection); 
    }
    
    
    deleted();
    welcome();
    init();

}