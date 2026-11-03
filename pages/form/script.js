const submitTrigger = document.getElementById('submit-trigger');
const fullnameInput = document.getElementById('fullname');
const emailInput    = document.getElementById('email');
const zipcodeInput  = document.getElementById('zipcode');
const amountInput   = document.getElementById('amount');

const fields = [fullnameInput, emailInput, zipcodeInput, amountInput];

submitTrigger.addEventListener('click', () => {
  let hasErrors = false;

  fields.forEach((field) => {
    field.classList.remove('invalid');

    if (!field.value.trim()) {
      field.classList.add('invalid');
      hasErrors = true;
      return;
    }

    if (field === emailInput && !field.value.includes('@')) {
      field.classList.add('invalid');
      hasErrors = true;
    }

    if (field === zipcodeInput && !/^\d{4}$/.test(field.value.trim())) {
      field.classList.add('invalid');
      hasErrors = true;
    }
  });

  if (!hasErrors) {
    fields.forEach((field) => (field.value = ''));
  }
});