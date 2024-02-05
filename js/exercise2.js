/*
-The firstname input box should not be empty
-The lastname input box should not be empty
-The username should be atleast 8 characters
-The password and confirm password should be atleast 8 characters and it should match

If everything satisfies the condition. Inside the h2 display 'Successfully Registered'


// optional
If you have successfully registered and the gender chosen is male. Inside the h2 display the text. 'Mr. Firstname Lastname you have Successfully Registered'

Else 'Ms. Firstname Lastname you have Successfully Registered'

*/

let message = document.getElementById("outputMessage");
let form = document.getElementById("loginForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let userInput = inputtxt.value;
    if (userInput.value == null || userInput.value == "" || userInput.value.length < 8) {
        alert("Field is 8 characters minimum!");
    } else {
        alert("ok");
    }

});

