// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const massageEl = document.querySelector('.feedback-form textarea');

const KEY = 'feedback-form-state';
const objectToLocalEL = {};

function loadFromLocal() {
  try {
    const localKey = localStorage.getItem(KEY);
    if (localKey !== null) {
      const parseObject = JSON.parse(localKey);
      emailEl.value = parseObject.email;
      massageEl.value = parseObject.message;
    }
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
loadFromLocal();

function saveEventInput() {
  objectToLocalEL.email = emailEl.value;
  objectToLocalEL.message = massageEl.value;
  try {
    localStorage.setItem(KEY, JSON.stringify(objectToLocalEL) || '');
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function onSubmit(event) {
  event.preventDefault();
  console.log(localStorage.getItem(KEY));
  formEl.reset();
  localStorage.clear();
}

formEl.addEventListener('submit', onSubmit);
formEl.addEventListener('input', throttle(saveEventInput, 500));
