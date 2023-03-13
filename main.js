console.log("Password Generator");


// const generatorBtn = document.querySelector('.generate');
// const generatorDiv = document.querySelector('.generate-div');
// const settingItems = document.querySelectorAll('.item');
// const settingItemInputs = document.querySelectorAll('.item input');

let letter = ["A", "B", "C", "D", "E", "F"];


// let random = Math.floor(Math.random() * letter.length) + 1;
// console.log(random);  


// settingItems.forEach(element => {
//     element.addEventListener('click', () => {
//         element.classList.toggle("active");
//     })
// });


// generatorBtn.addEventListener('click',() =>{
//     // generatorDiv.textContent = "Generated";
// })


// function generate() {
//   var length = document.getElementById("length").value;
//   var upper = document.getElementById("uppercase").checked;
//   var lower = document.getElementById("lowercase").checked;
//   var numbers = document.getElementById("numbers").checked;
//   var symbols = document.getElementById("symbols").checked;
  
//   var password = "";
  
//   // Minimum qisqa harf e'lon qilinganmi tekshiriladi
//   if (!(upper || lower || numbers || symbols)) {
//     alert("Select at least one character set!");
//     return;
//   }
  
//   // Katta harf seriesi yaratiladi
//   if (upper) {
//     password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   }
  
//   // Kichig harf seriesi yaratiladi
//   if (lower) {
//     password += "abcdefghijklmnopqrstuvwxyz";
//   }
  
//   // Raqam seriesi yaratiladi
//   if (numbers) {
//     password += "0123456789";
//   }
  
//   // Beldi seriesi yaratiladi
//   if (symbols) {
//     password += "!@#$%^&*()-_=+[]{}|;:,.<>/?";
//   }
  
//   // Parol pseudoraqimi generatsiya qilingan.
//   for (var i = 0; i < length; i++) {
//     password += password.charAt(Math.floor(Math.random() * password.length));
//   }

//   //Parol inputga chiqarilgan
//   document.getElementById("password").value = password;
// }

const generateBtn = document.querySelector("#generate-btn");
const passwordDisplay = document.querySelector("#password-display");

// Arrays of characters to include in the password generation
// const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerChars = "abcdefghijklmnopqrstuvwxyz";
// const numberChars = "0123456789";
// const symbolChars = "!@#$%^&*()[]{}<>?/";

// // Generate a random character from an array
// function getRandomCharacter(charArray) {
//   const index = Math.floor(Math.random() * charArray.length);
//   return charArray.charAt(index);
// }

// // Generate the password
// function generatePassword() {
//   let passwordLength = document.querySelector("#length").value;
//   let includeUpper = document.querySelector("#include-upper").checked;
//   let includeLower = document.querySelector("#include-lower").checked;
//   let includeNumbers = document.querySelector("#include-numbers").checked;
//   let includeSymbols = document.querySelector("#include-symbols").checked;

//   // Make sure at least one character type is selected
//   if (!includeUpper && !includeLower && !includeNumbers && !includeSymbols) {
//     alert("Iltimos, kamida bitta belgi turini tanlang.");
//     return;
//   }

//   let validChars = "";
//   if (includeUpper) {
//     validChars += upperChars;
//   }
//   if (includeLower) {
//     validChars += lowerChars;
//   }
//   if (includeNumbers) {
//     validChars += numberChars;
//   }
//   if (includeSymbols) {
//     validChars += symbolChars;
//   }

//   let password = "";
//   for (let i = 0; i < passwordLength; i++) {
//     let randomChar = getRandomCharacter(validChars);
//     password += randomChar;
//   }

//   passwordDisplay.value = password;
// }

// generateBtn.addEventListener("click", generatePassword);

const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', () => {
  const lengthRange = document.getElementById('length');
  const uppercaseCheckbox = document.getElementById('uppercase');
  const lowercaseCheckbox = document.getElementById('lowercase');
  const numberCheckbox = document.getElementById('number');
  const symbolCheckbox = document.getElementById('symbol');
  const passwordOutput = document.getElementById('password');

  const passwordLength = lengthRange.value;
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeNumber = numberCheckbox.checked;
  const includeSymbol = symbolCheckbox.checked;

  const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumber, includeSymbol);
  passwordOutput.textContent = password;
});


function generatePassword(length, uppercase, lowercase, number, symbol) {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = "!@#$%^&*()[]{}<>?/";

  
    let chars = '';
    if (uppercase) {
      chars += upperChars;
    }
    if (lowercase) {
      chars += lowerChars;
    }
    if (number) {
      chars += numberChars;
    }
    if (symbol) {
      chars += symbolChars;
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
  
    return password;
  }
  
  