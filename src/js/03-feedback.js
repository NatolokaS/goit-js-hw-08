import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const item = "feedback-form-state";

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInputData, 500));

setFormData()

const onFormData = {};
function onInputData(evt) {
  onFormData[evt.target.name] = evt.target.value;
  localStorage.setItem(item, JSON.stringify(onFormData));
}

function setFormData() {
  let dataForm = JSON.parse(localStorage.getItem(item));
  if (dataForm) {
    const {
      elements: { email, message },
    } = form;
    email.value = dataForm.email;
    message.value = dataForm.message;
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Fill the values in fields');
  }
  console.log({ email: email.value.trim(), message: message.value.trim() });
  evt.currentTarget.reset();
  localStorage.removeItem(item);
}