// email validation function/logic
const email = document.querySelector('#user-email');
const emailError = document.querySelector('#user-email + span.error');

const emailErrorHandling = () => {
  if (email.validity.typeMismatch) {
    emailError.textContent = "I'm expecting an proper email address here!";
  } else if (email.validity.valueMissing) {
    emailError.textContent = 'You must enter an email address!';
  }
  emailError.className = 'error active';
};

email.addEventListener('input', () => {
  if (email.validity.valid) {
    emailError.textContent = '';
  } else {
    emailErrorHandling();
  }
});

// zipcode error handling

const zipcode = document.querySelector('#zipcode');
const zipcodeError = document.querySelector('#zipcode + span.error');

const zipcodeErrorHandling = () => {
  if (zipcode.validity.patternMismatch) {
    zipcodeError.textContent = `You can only enter a valid zipcode! Only Numbers!`;
  } else if (zipcode.validity.rangeOverflow) {
    zipcodeError.textContent = `Zipcode should only be five numbers in length!`;
  }
  zipcodeError.className = 'error active';
};

zipcode.addEventListener('input', () => {
  if (zipcode.validity.valid) {
    zipcodeError.textContent = '';
  } else {
    zipcodeErrorHandling();
  }
});

// country error handling

const country = document.querySelector('#country');
const countryError = document.querySelector('#country + span.error');

const countryErrorHandling = () => {
  if (country.validity.patternMismatch) {
    countryError.textContent = `You can only enter letters!`;
  }
};

country.addEventListener('input', () => {
  if (country.validity.valid) {
    countryError.textContent = '';
  } else {
    countryErrorHandling();
  }
});
