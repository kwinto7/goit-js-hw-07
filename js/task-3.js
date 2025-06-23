


const inputEl = document.querySelector('#name-input');
const greetText = document.querySelector('#name-output');

inputEl.addEventListener('input', inputHandler);

function inputHandler(event) { 
    const trimmedInput = event.target.value.trim();
    greetText.textContent = trimmedInput === "" ? "Ananymous" : trimmedInput;
};

 


