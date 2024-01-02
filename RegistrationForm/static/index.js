function submitForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // You can add validation logic here before submitting the form

    alert("Registration Successful!\n\nUsername: " + username + "\nEmail: " + email);
  }