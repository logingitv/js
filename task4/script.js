const userText = prompt('Введите текст');
const userTexField = document.querySelector('a');
userTexField.textContent = userText;
userTexField.addEventListener('click', (event) => {
    event.preventDefault();
})