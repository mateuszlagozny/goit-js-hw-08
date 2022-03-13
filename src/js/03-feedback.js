import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const emailUser = document.querySelector('input');
const messageArea = document.querySelector('textarea');

const inputCatcher = event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
    
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: email.value,
      message: message.value,
    }),
  );
};

form.addEventListener('input', throttle(inputCatcher, 500));

const inputValue = localStorage.getItem('feedback-form-state');
const parsedinputValue = JSON.parse(inputValue);

console.log(parsedinputValue);

if (parsedinputValue.email !== "") {
    emailUser.value = parsedinputValue.email;
}

if (parsedinputValue.message !== '') {
  messageArea.value = parsedinputValue.message;
}

const submitHandler = (event) => {
    const {
      elements: { email, message },
    } = event.currentTarget;

    console.log(`Email: ${email.value}, Message: ${message.value}`);
    event.currentTarget.reset();
}

form.addEventListener('submit', submitHandler);