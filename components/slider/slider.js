const sliderInputs = document.getElementsByClassName("slider-input");
const progressBars = document.getElementsByClassName("progress-bar");
const sliderValues = document.getElementsByClassName("slider-value");

// sliderInputs[0].addEventListener("input", () => {
//     console.log("change")
//     console.log(sliderInputs[0].value)
//     progressBars[0].value = sliderInputs[0].value;
//     sliderValues[0].innerHTML = sliderInputs[0].value;
// })

for(let i = 0; i < sliderInputs.length; i++){
    sliderInputs[i].addEventListener("input", () => {
        progressBars[i].value = sliderInputs[i].value;
        sliderValues[i].innerHTML = sliderInputs[i].value;
    })
}