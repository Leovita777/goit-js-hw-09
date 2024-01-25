function saveFormState() {
  const email = document.querySelector("input[name='email']").value;
  const message = document.querySelector("textarea[name='message']").value;

  const state = { email, message };

  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}

function loadFormState() {
  const state = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (state) {
    document.querySelector("input[name='email']").value = state.email;
    document.querySelector("textarea[name='message']").value = state.message;
  }
}

function clearFormState() {
  localStorage.removeItem('feedback-form-state');

  document.querySelector("input[name='email']").value = '';
  document.querySelector("textarea[name='message']").value = '';
}

document
  .querySelector('.feedback-form')
  .addEventListener('input', saveFormState);

loadFormState();

document.querySelector('form').addEventListener('submit', () => {
  clearFormState();

  console.log({
    email: document.querySelector("input[name='email']").value,
    message: document.querySelector("textarea[name='message']").value,
  });
});
