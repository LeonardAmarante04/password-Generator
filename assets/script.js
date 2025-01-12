let lowercase = "abcdefghijklmnopqrstvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
let numbers = "1234567890";
let symbols = "!@#$%^&*()_+=";
let userChoice = [];
let passwordholder = document.getElementById("generatedPassword");
let userdigits = document.getElementById("userDigits");
let password = [];
const generatePassword = document.getElementById("submitPassword");


generatePassword.addEventListener("click", function () {
    const minusculas = document.getElementById("minusculas");
    const mayusculas = document.getElementById("mayusculas");
    const numeros = document.getElementById("numeros");
    const simbolos = document.getElementById("simbolos");

    if (userdigits.value >= 1) {

        if (minusculas.checked) {
            userChoice += lowercase
        }
        if (mayusculas.checked) {
            userChoice += uppercase
        }
        if (numeros.checked) {
            userChoice += numbers
        }
        if (simbolos.checked) {
            userChoice += symbols
        }

        else if (!minusculas.checked && !mayusculas.checked && !numeros.checked && !simbolos.checked) {
            alert("Elige un atributo!")
            reload()

        }

        for (let i = 0; i < userChoice.length - 1; i++) {
            password += userChoice[Math.floor(Math.random() * userChoice.length)]

        }
    generatePassword.style.display = "none";
        document.getElementById("passwordHolder").style.display = "none";
        document.getElementById("passwordSpace").style.display = "inline";
        for (let j = 0; j < userdigits.value; j++) {
            passwordholder.textContent += password[Math.floor(Math.random() * password.length)]
            console.log(passwordholder)
            console.log(typeof userdigits.value);
        }
    }
    else if (userdigits.value < 1) {
        alert("escribe un digito mayor que 1 o igual")
    }
    else if (!userdigits.value || typeof userdigits.value == "string") {
        alert("escribe un digito!")
    }

});
