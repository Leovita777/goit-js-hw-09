function saveFormState() {
  const emailInput = document.querySelector("input[name='email']");
  const messageTextarea = document.querySelector("textarea[name='message']");

  const state = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}

function loadFormState() {
  const state = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (state) {
    emailInput.value = state.email;
    messageTextarea.value = state.message;
  }
}

function clearFormState() {
  localStorage.removeItem('feedback-form-state');

  emailInput.value = '';
  messageTextarea.value = '';
}

document.querySelector('form').addEventListener('input', event => {
  const target = event.target;

  if (target.tagName === 'INPUT' && target.name === 'email') {
    saveFormState();
  } else if (target.tagName === 'TEXTAREA' && target.name === 'message') {
    saveFormState();
  }
});

loadFormState();

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  clearFormState();

  console.log({
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  });
});
