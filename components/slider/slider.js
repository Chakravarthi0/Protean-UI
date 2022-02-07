const sliderInputs = document.getElementsByClassName("slider-input");
const progressBars = document.getElementsByClassName("progress-bar");
const sliderValues = document.getElementsByClassName("slider-value");

for(let i = 0; i < sliderInputs.length; i++){
    sliderInputs[i].addEventListener("input", () => {
        progressBars[i].value = sliderInputs[i].value;
        sliderValues[i].innerHTML = sliderInputs[i].value;
    })
}