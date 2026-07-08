document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contactForm') || document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    if (!validateForm(form)) {
      event.preventDefault();

      form.reset();
    }
  });
});

function validateForm(form) {
  // Safely get the name input field
  const nameField = form.querySelector('input[name="name"]');

  let isValid = true;

  if (!nameField || !nameField.value.trim()) {
    alert("Please enter your name.");
    isValid = false;
  }

  if (isValid) {
    alert(nameField.value.trim() + " your message is successfully submitted!!");
  }

  return isValid;
}
