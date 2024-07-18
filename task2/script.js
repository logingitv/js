const clickShowConsole = document.querySelector('#consoleLog');
clickShowConsole.addEventListener('click', (event) => {
    alert('Метод для вывода сообщения в веб-консоль');
})

const clickShowAlert = document.querySelector('#aleft');
clickShowAlert.addEventListener('click', (event) => {
    alert('Метод для вывода диалогового окна пользователю');
})

const clickShowPrompt = document.querySelector('#prompt');
clickShowPrompt.addEventListener('click', (event) => {
    alert('Метод для вывода диалогового окна для ввода данных');
})