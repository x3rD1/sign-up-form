const form = document.querySelector("form");

const email = document.querySelector("#email");
email.setAttribute("autocomplete", "off");
const emailError = document.querySelector(".emailError");
const emailPattern =
  /^(?=.{7,})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const country = document.querySelector("#country");
const countryError = document.querySelector(".countryError");

const postal = document.querySelector("#postal");
const postalError = document.querySelector(".postalError");

const password = document.querySelector("#password");
const passwordError = document.querySelector(".passwordError");

const confirmPassword = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector(".confirm-passwordError");

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

email.addEventListener("input", () => {
  if (emailPattern.test(email.value)) {
    emailError.textContent = "";
    email.classList.remove("error");
    email.classList.add("valid");
  } else if (email.value === "") {
    email.classList.remove("error");
    email.classList.remove("valid");
  } else {
    email.classList.add("error");
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
  const span = document.querySelector(`.${input.id}Error`);
  input.addEventListener("blur", () => {
    if (input.value !== "") {
      return;
    } else {
      span.textContent = "";
      input.classList.remove("error");
    }
  });
});
