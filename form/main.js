const form = document.querySelector("form");

const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");

const country = document.querySelector("#country");
const countryError = document.querySelector(".countryError");

const postal = document.querySelector("#postal");
const postalError = document.querySelector(".postalError");

const password = document.querySelector("#password");
const passwordError = document.querySelector(".passwordError");

const confirmPassword = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector(".confirm-passwordError");

const patterns = {
  email: /^(?=.{7,})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  postal: /^\d{4}$/,
};

const showErrors = ShowErrors();

form.addEventListener("submit", (e) => {
  // If email is invalid
  if (!email.validity.valid) {
    // display email error
    showErrors.showEmailError();
    // prevent form submission
    e.preventDefault();
  }
});

function ShowErrors() {
  const showEmailError = () => {
    if (email.validity.valueMissing) {
      // if email is empty
      emailError.textContent = "Please enter your email address";
    } else if (email.validity.typeMismatch) {
      // if entered value is not an email address
      emailError.textContent = "Please enter a valid email address";
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters, you entered ${email.value.length} characters`;
    }
  };

  const showCountryError = () => {};

  const showPostalError = () => {};

  const showPasswordError = () => {};

  const showConfirmPasswordError = () => {};

  return {
    showEmailError,
    showCountryError,
    showPostalError,
    showPasswordError,
    showConfirmPasswordError,
  };
}

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  //const span = document.querySelector(`.${input.id}Error`);
  // validates input when is not in focus
  input.addEventListener("change", () => {
    const elementId = input.id;
    const elementError = document.querySelector(`.${elementId}Error`);
    const pattern = patterns[elementId];

    if (pattern && pattern.test(input.value)) {
      elementError.textContent = "";
      input.classList.remove("error");
    } else if (input.value === "") {
      input.classList.remove("error");
    } else {
      input.classList.add("error");
    }
  });

  // removes error class if input is empty
  input.addEventListener("input", () => {
    if (input.value === "") {
      input.classList.remove("error");
    }
  });
});
