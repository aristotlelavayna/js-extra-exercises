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
    if(firstName==null || firstName=="") {
        alert("first name input box should not be empty.");
        return false;
    }

    let lastName = document.getElementById("lastName").value;
    if(lastName==null || lastName=="") {
        alert("last name input box should not be empty.");
        return false;
    }

    let userName = document.getElementById("userName").value;
    if(userName==null || userName=="" || userName.length < 8) {
        alert("user name should be atleast 8 characters")
        return false;
    }

    let password = document.getElementById("password").value; 
    if(password==null || password=="" || password.length < 8) {
        alert("The password should be atleast 8 characters.")
        return false;
    }

    let confirmPassword = document.getElementById("confirmPassword").value;
    if(confirmPassword==null || confirmPassword=="" || confirmPassword.length < 8) {
        alert("The confirm password should be atleast 8 characters.")
        return false;
    }

    if(password !== confirmPassword) {
        alert("the password and confirm password should match.")
        return false;
    }

    document.getElementById("outputMessage").innerHTML = "Successfully Registered.";
});

