const modalContainer = document.querySelector(".modal-container"); 
const modalLogin = document.getElementById("modalLogin"); 
const create = document.getElementById("create");
const loginHere = document.getElementById("loginHere");
const loginForm = document.querySelector(".login");
const registrationForm = document.querySelector(".registration");
const closeModal = document.getElementById("closeModal");


modalLogin.onclick = () => {
    modalContainer.classList.add("open");
};

closeModal.onclick = () => {
    modalContainer.classList.remove("open");
};

create.onclick = () => {
    loginForm.style.transform = "translate(-500px)";
    registrationForm.style.transform = "translate(0)";
}


