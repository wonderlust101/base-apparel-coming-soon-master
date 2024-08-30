const notificationForm = document.getElementById('notification-form');
const emailInput = document.getElementById('email');
const emailStatus = document.getElementById('email-status');
const emailErrorIcon = document.getElementById('email-error-icon');

notificationForm.addEventListener('submit', e => {
    e.preventDefault();
    emailStatus.style.display = "block"

    // ONLY CHECK IF @ EXIST, NOT A ROBUST EMAIL CHECK
    // When an error occurs
    if (emailInput.value === "" || !emailInput.value.includes("@")) {
        emailErrorIcon.style.display = "block"
        emailStatus.textContent = 'Please provide a valid email';
        emailStatus.style.color = 'var(--clr-primary-color-soft-red)';
        emailInput.classList.add("text-input__error");
        emailInput.classList.remove("text-input__success");
    }
    // When the input is valid
    else {
        emailErrorIcon.style.display = "none"
        emailStatus.textContent = 'Email has been sent!';
        emailStatus.style.color = 'var(--clr-primary-color-green)';
        emailInput.classList.remove("text-input__error");
        emailInput.classList.add("text-input__success");
    }
})