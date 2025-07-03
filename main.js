/**
 * Створюємо доступ до елементів
 * Вішаємо слухачів подій 
 */
const textereaEl = document.querySelector('texterea');
const formL = document.querySelector('.js-');

textArea.addEventListener('input', onTextAreaInput);
formL.addEventListener('submit', onSubmit);
/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховищі
 * - Можно додати throttle
 */
function onTextAreaInput(event){
    const TextAreaResult = textArea.value;
    localStorage.setItem('TextAreaResult', TextAreaResult)
}