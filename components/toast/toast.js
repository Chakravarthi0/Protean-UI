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