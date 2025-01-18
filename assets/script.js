// password properties
let lowercase = "abcdefghijklmnopqrstvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
let numbers = "1234567890";
let symbols = "!@#$%^&*()_+=";
// password attributes array
let userChoice = [];
// display password p element target
let displayedPassword = document.getElementById("generatedPassword");
// digits input target
let userdigits = document.getElementById("userDigits");
// password information array
let password = [];
// password button target
const generatePassword = document.getElementById("submitPassword");
// backbutton element 
let backButton = document.createElement("button");
// copybutton element
const copybutton = document.getElementById("copybutton");
// saved password array 
let savedPasswords = [];

// submit button click event listener
generatePassword.addEventListener("click", function () {

    // attributes checkboxes targets
    const lowercaseCheck = document.getElementById("lowercaseCheck");
    const uppercaseCheck = document.getElementById("uppercaseCheck");
    const numbersCheck = document.getElementById("numbersCheck");
    const symbolsCheck = document.getElementById("symbolsCheck");

    // attribute checkboxes if statements
    if (userdigits.value >= 1) {
        // if lowercase checkbox is checked than add lowercase string value to user choice value
        if (lowercaseCheck.checked) {
            userChoice += lowercase
        }
        // if uppercase checkbox is checked than add uppercase string value to user choice value
        if (uppercaseCheck.checked) {
            userChoice += uppercase
        }
        // if numbers checkbox is checked than add numbers string value to user choice value
        if (numbersCheck.checked) {
            userChoice += numbers
        }
        // if symbols checkbox is click than add symbols string value to user choice value
        if (symbolsCheck.checked) {
            userChoice += symbols
        }

        // if is not check than alert user screen with 'message'
        else if (!lowercaseCheck.checked && !uppercaseCheck.checked && !numbersCheck.checked && !symbolsCheck.checked) {
            alert("CHOOSE AN ATTRIBUTE!")
            reload()

        }
        // for loop for randomizing the password checked properties values inside the password let variable 
        for (let i = 0; i < userChoice.length - 1; i++) {
            password += userChoice[Math.floor(Math.random() * userChoice.length)]

        }

        // setting  no display to password options 
        generatePassword.style.display = "none";
        // for loop to target all elements with 'fadeAnimation' class and setting no display on it 
        for (q = 0; q < document.getElementsByClassName("fadeAnimation").length - 1; q++) {
            document.getElementsByClassName("fadeAnimation")[q].style.display = "none";
        }

        // for loop selection at random password values times the value of userdigits
        document.getElementById("passwordSpace").style.display = "inline";
        for (let j = 0; j < userdigits.value; j++) {
            displayedPassword.textContent += password[Math.floor(Math.random() * password.length)]
        }
        document.getElementById("lastPasswordSection").style.display = "none";
        document.getElementById("lastenPasswordHolder").style.display = "none";

        displayedPassword.appendChild(copybutton);
        // Backbutton properties 
        document.getElementById("buttonsHolder").appendChild(backButton);
        backButton.textContent = "Generate New Password";
        backButton.style.marginLeft = "10px";
        backButton.style.marginTop = "15px";
        backButton.style.display = "block";
        backButton.className = "btn btn-default btn-light";




        if (savedPasswords.length >= 9) {
            savedPasswords.splice(9, 1);
            savedPasswords.splice(0, 0, displayedPassword.textContent);
            console.log(savedPasswords)
        }

        else {
            savedPasswords.push(displayedPassword.textContent);
            console.log(savedPasswords);
        }


        localStorage.setItem("passwordData", JSON.stringify(savedPasswords))
        let liPasswordDisplay = document.createElement("li");
        liPasswordDisplay.textContent =displayedPassword.textContent;
        document.getElementById("lastenPasswordHolder").appendChild(liPasswordDisplay);
        liPasswordDisplay.style.color = "white";
        

    }

    // if userdigits input value is less than 1 alert user 'message'
    else if (userdigits.value < 1) {
        alert("Write digit number greater or equal to 1")
    }

    // if userdigits is empty or type equals a string than alert user this 'message'
    else if (!userdigits.value || typeof userdigits.value == "string") {
        alert("Write a digit number!")
    }




});
// backbutton click event listener
backButton.addEventListener("click", function () {
    // set userchoice variable, password and displayedPassword values empty
    userChoice = [];
    password = [];
    displayedPassword.textContent = '';
    // sets generate password button display
    generatePassword.style.display = "block";
    // targets all elements with fadeAnimation class to set display
    for (q = 0; q < document.getElementsByClassName("fadeAnimation").length; q++) {
        document.getElementsByClassName("fadeAnimation")[q].style.display = "block";
    }
    // sets password no display
    document.getElementById("passwordSpace").style.display = "none";
    document.getElementById("lastPasswordSection").style.display = "block";
    document.getElementById("lastenPasswordHolder").style.display = "block";
    backButton.style.display = "none";






});
// makes displayedPassword let variable appendchild copybutton variable
displayedPassword.appendChild(copybutton);

// copy button function
function copyText() {
    // Get the text content of the paragraph
    const text = displayedPassword.textContent;
    const copyImage = document.createElement("img");
    copyImage.src = "./copy button image.png";
    copyImage.style.width = "20px";
    copyImage.style.height = "20px"

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(text)
        .then(() => {
            // Show the "Copied" message
            const message = "Copied";
            copybutton.textContent = message


            // Hide the "Copied" message after 2 seconds
            setTimeout(() => {
                copybutton.textContent = "";
                copybutton.appendChild(copyImage);
            }, 1000);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
}



let AllpassworDatastring = localStorage.getItem("passwordData");

let AllpassworData = JSON.parse(AllpassworDatastring);
console.log(AllpassworData);
function passwordHistory() {
    for (l = 0; l < AllpassworData.length; l++) {
        let AllpassworDataloop = AllpassworData[l];
        let savedpasswordsli = document.createElement("li");
        savedpasswordsli.marginTop = "10px";
        savedpasswordsli.textContent = AllpassworDataloop;
        document.getElementById("lastenPasswordHolder").appendChild(savedpasswordsli);
        savedpasswordsli.style.color = "white";



    };
}
passwordHistory();
savedPasswords = AllpassworData;
