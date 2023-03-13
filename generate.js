const generateButton = document.querySelector('.generate');
const copyDiv = document.querySelector('.copy');
const rangeValue = document.getElementById('range-value');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');

const checkbox = document.querySelectorAll('.checkbox');
const items = document.querySelectorAll('.item');

items.forEach(element => {
    element.addEventListener('click', (e) => {
        let target = e.target;
        target.classList.toggle("active");
        generateButton.style.pointerEvents = 'all';
        generateButton.style.cursor = 'pointer';
    })
});

function updateTextInput(val) {
    document.getElementById('length').value = val
    let statusText = val
    rangeValue.textContent = statusText
}
generateButton.addEventListener('click', () => {
    const lengthRange = document.getElementById('length');
    const passwordLength = lengthRange.value;
    let chars = '';

    if (uppercase.checked) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (lowercase.checked) {
        chars += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (number.checked) {
        chars += '0123456789';
    }
    if (symbol.checked) {
        chars += '!@#$%^&*()[]{}<>?/';
    }
    const passwordOutput = document.getElementById('password');
    const password = generatePassword(passwordLength, chars);
    passwordOutput.textContent = password;

});

copyDiv.addEventListener('click', (e) => {
    if(password.textContent != ""){
        copyDiv.textContent = "Copied";
        setTimeout(() => {
            copyDiv.innerHTML = `<i class="uil uil-copy"></i><p>Copy</p>`;
        }, 1000);
        navigator.clipboard.writeText(password.textContent);
    }
})

function generatePassword(length, chars) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}