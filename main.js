// modal

const modalBackgrounds = document.getElementsByClassName("modal-bg");
const modalCloseButtons = document.getElementsByClassName("modal-close-btn");
const modalOpenButtons = document.getElementsByClassName("modal-open-btn");

for (let i = 0; i < modalOpenButtons.length; i++) {
  modalOpenButtons[i].addEventListener("click", function () {
    const temp = this.getAttribute("modal-btn-for");
    const correspondingModalBg = document.getElementById(temp);
    correspondingModalBg.classList.toggle("hidden");
  });
}

for (let i = 0; i < modalCloseButtons.length; i++) {
  modalCloseButtons[i].addEventListener("click", function () {
    const temp = this.getAttribute("modal-btn-for");
    const correspondingModalBg = document.getElementById(temp);
    correspondingModalBg.classList.add("hidden");
  });
}

// navbar

const hamBurgerIcon = document.getElementsByClassName("hamburger-icon")[0];
const navLinksContainer = document.getElementsByClassName("nav-links-container")[0];
const navLinks = document.getElementsByClassName("nav-link");

hamBurgerIcon.addEventListener("click", function(){
    navLinksContainer.classList.toggle("open");
    if(navLinksContainer.classList.contains("open")){
        hamBurgerIcon.innerText = "close"
    }else{
        hamBurgerIcon.innerText = "menu"
    }
})

const removeActiveLink = () => {
    for(let i = 0; i < navLinks.length; i++){
            navLinks[i].classList.remove("nav-link-active")
    }
}

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", () => {
        removeActiveLink();
        navLinks[i].classList.add("nav-link-active");
    })
}

// ratings

const ratingInputs = document.getElementsByClassName("rating-input");
const resultContainer = document.getElementById("example-display");

for(let i = 0; i < ratingInputs.length; i++){
    ratingInputs[i].addEventListener("click", function(){
        resultContainer.classList.remove("hidden");
        resultContainer.innerHTML = `<h4>Thanks for rating the product!</h4> <p>Your rating: ${this.value}/5.</p>`
    })
}

// slider

const sliderInputs = document.getElementsByClassName("slider-input");
const progressBars = document.getElementsByClassName("progress-bar");
const sliderValues = document.getElementsByClassName("slider-value");

for(let i = 0; i < sliderInputs.length; i++){
    sliderInputs[i].addEventListener("input", () => {
        progressBars[i].value = sliderInputs[i].value;
        sliderValues[i].innerHTML = sliderInputs[i].value;
    })
}

// toast

const toastOpenBtns = document.getElementsByClassName("toast-open-btn");
const toastCloseBtns = document.getElementsByClassName("toast-close-btn");

for(let i = 0; i < toastOpenBtns.length; i++){
    toastOpenBtns[i].addEventListener("click", function(){
        const temp = this.getAttribute("toast-btn-for");
        const correspondingToast = document.getElementById(temp);
        correspondingToast.classList.remove("hidden");
        if(correspondingToast.classList.contains("toast-timed")){
            setTimeout(function(){
                correspondingToast.classList.add("hidden");
            },5000)
        }
    })
}

for(let i = 0; i < toastCloseBtns.length; i++){
    toastCloseBtns[i].addEventListener("click", function(){
        const temp = this.getAttribute("toast-btn-for");
        const correspondingToast = document.getElementById(temp);
        correspondingToast.classList.add("hidden");
    })
}