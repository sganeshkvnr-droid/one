function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Dummy credentials
    const correctUser = "admin";
    const correctPass = "1234";

    if (username === correctUser && password === correctPass) {
        message.style.color = "green";
        message.textContent = "Login Successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid Username or Password";
    }
}