const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, password } = loginForm.elements;
    const emailValue = email.value;
    const passwordValue = password.value;
    if (emailValue === "" || passwordValue === "") {
        alert('All form fields must be filled in')
    }
    const formData = {
        email: emailValue,
        password: passwordValue,
    }
    console.log(formData);
    loginForm.reset();

}); 