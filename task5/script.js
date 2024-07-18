const textInput = document.querySelector('input');
const textParagraph = document.querySelector('#duplicateField');
const pushButton = document.querySelector('button');

textInput.addEventListener('input', (event) => {
    textParagraph.textContent = textInput.value;
})

pushButton.addEventListener('click', (event) => {
    console.log(textInput.value);
    textParagraph.textContent = '';
    event.preventDefault();
})