import { btnBackLogin } from "../Buttons/buttons";

// Función encargada de crear un formulario para el login de la página.
const createLogin = () => {
    const divApp = document.querySelector("#app");
    const formLogin = document.createElement("form");
    const labelName = document.createElement("label");
    const inputName = document.createElement("input");
    const labelPassword = document.createElement("label");
    const inputPassword = document.createElement("input");
    const btnSubmit = document.createElement("button");
    const btnReset = document.createElement("button");
    const btnBackPage = document.createElement("button");
    formLogin.classList.add("form");
    btnReset.classList.add("btn");
    btnSubmit.classList.add("btn");
    labelName.textContent = "Introduce tu correo eléctronico";
    labelPassword.textContent = "Inrtroduce tu contraseña";
    inputName.id = "name";
    inputName.type = "email";
    inputName.required = true;
    inputPassword.id = "password";
    inputPassword.type = "password";
    inputPassword.required = true;
    btnSubmit.textContent = "Enviar";
    btnReset.textContent = "Reset Formulario";
    btnBackPage.textContent = "Salir del Login";
    formLogin.appendChild(labelName);
    formLogin.appendChild(inputName);
    formLogin.appendChild(labelPassword);
    formLogin.appendChild(inputPassword);
    formLogin.appendChild(btnSubmit);
    formLogin.appendChild(btnReset);
    divApp.appendChild(formLogin);
}

// Función encargada de renderizar el formulario, esta limpia el div app y llama a la función createLogin y a btnBackLogin para poder salir de la página del formulario.
const renderForm = () => {
    const divApp = document.querySelector("#app");
    divApp.innerHTML = "";
    createLogin();
    btnBackLogin();


}

export default renderForm;