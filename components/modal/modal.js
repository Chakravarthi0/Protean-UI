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
