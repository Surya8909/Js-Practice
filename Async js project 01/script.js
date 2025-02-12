const Start = document.querySelector("#btn-1");
const Stop = document.querySelector("#btn-2");
const printer = document.querySelector("#printed-text");

let intervalId;

function displayText(text = "Surya") {
    const newElement = document.createElement("p");
    newElement.innerHTML = text;
    printer.appendChild(newElement);
}

function stIntl() {
    if (!intervalId) {
        intervalId = setInterval(displayText, 1);
    }
}

function addClickEffect(button) {
    button.style.opacity = "0.5";
    setTimeout(() => {
        button.style.opacity = "1";
    }, 100);  
}

Start.addEventListener("click", () => {
    stIntl();
    addClickEffect(Start);  
});

Stop.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    addClickEffect(Stop);  
});