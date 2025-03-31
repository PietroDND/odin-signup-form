"use strict"

const formEl = document.getElementById('registration-form');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-msg');
const submitBtn = document.getElementById('submit-btn');

//Prevent form from refreshing the page (fake form)
formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    formEl.reset();
    alert('Account successfully registered!');
});

//Real-time password matching validator
confirmPasswordEl.addEventListener('input', () => {
    checkPasswordMatching();
});

const checkPasswordMatching = () => {
    if (passwordEl.value !== confirmPasswordEl.value) {
        errorMsg.textContent = 'Password do not match!'
        submitBtn.disabled = true;
        submitBtn.classList.add('disabled');
    } else {
        errorMsg.textContent = '';
        submitBtn.disabled = false;
        submitBtn.classList.remove('disabled');
    }
};