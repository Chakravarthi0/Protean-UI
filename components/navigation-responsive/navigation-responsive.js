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