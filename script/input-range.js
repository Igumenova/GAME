const rangeInputs = document.querySelectorAll(".input-range");
rangeInputs.forEach((rangeInput) => {
    const rangeItemInput = rangeInput.closest(
        ".new-project__range-item__input"
    );
    const rangeNumber = rangeItemInput.querySelector(".input-range-number");
    rangeInput.addEventListener("input", () => {
        rangeNumber.textContent = rangeInput.value;
    });
});
