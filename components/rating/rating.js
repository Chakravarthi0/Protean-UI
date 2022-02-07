const ratingInputs = document.getElementsByClassName("rating-input");
const resultContainer = document.getElementById("example-display");

for(let i = 0; i < ratingInputs.length; i++){
    ratingInputs[i].addEventListener("click", function(){
        resultContainer.classList.remove("hidden");
        resultContainer.innerHTML = `<h4>Thanks for rating the product!</h4> <p>Your rating: ${this.value}/5.</p>`
    })
}
