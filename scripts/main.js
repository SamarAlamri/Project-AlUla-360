/* Name: [Your Name], ID: [Your ID], Section: [Section], Date: [Current Date] */

// Function to validate the form before submission
function validateForm() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("useremail").value;

    // Basic check: Are the fields empty?
    if (name == "" || email == "") {
        alert("Name and Email must be filled out!");
        return false; // Stops the form from submitting
    }

    // Check if email contains '@' (Basic validation taught in basics)
    if (email.indexOf("@") == -1) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thank you, " + name + "! Your feedback is being processed.");
    return true; // Allows the form to submit to PHP
}
