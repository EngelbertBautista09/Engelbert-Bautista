// HTML elements
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let generateButton = document.getElementById('generate');

// Password generation function
function generatePassword() {
    const value = "acbdefghijklmnopqrstuvwxyzABCDEGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const len = 16;
    let password = "";
    for (let i = 0; i < len; i++) {
        const randomNumber = Math.floor(Math.random() * value.length);
        password += value.charAt(randomNumber);
    }
    return password;
}

// Event listener for the generate button
generateButton.addEventListener('click', function() {
    passwordInput.value = generatePassword();
});
