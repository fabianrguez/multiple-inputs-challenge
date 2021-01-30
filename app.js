const form = document.querySelector('[name="verify"]');
const inputs = document.querySelectorAll('.inputs input');

function handleInput(e) {
  const input = e.target;
  // if there is a next input focus it
  if (input.nextElementSibling && input.value) {
    input.nextElementSibling.focus();
    input.nextElementSibling.select();
  }
}

function handlePaste(e) {
  const paste = e.clipboardData.getData('text');
  // loop over each input, and populate with the index of that string
  inputs.forEach((input, i) => (input.value = paste[i] || ''));

  // if the pasted code is the same length of inputs, submit the form
  setTimeout(() => paste.length === inputs.length && simulateSubmit(form), 500);
}

function handleSubmit(e) {
  e.preventDefault();
  alert('Code submitted');
  this.reset();
  inputs[0].focus();
}

function simulateSubmit(form) {
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.click();
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', handleInput);
inputs[0].addEventListener('paste', handlePaste);
inputs.forEach((input) =>
  input.addEventListener('focus', () => input.select())
);

// 123456
// 513453
// 938
