const modalContainer= document.querySelector(".modal-conatiner"),
modalLogin = document.getElementById(".modalLogin"),
create = document.getElementById("create"),
loginHere = document.getElementById("loginHere"),
loginForm = document.querySelector(".login"),
registrationForm = document.querySelector(".registration")

modalLogin.onclick =() => {
    modalContainer.classList.add("open");
};

function closeModalContainer() {
    modalContainer.classList.remove("open");
}

create.onclick=()=>{
    loginForm.setAttribute("style", "transform: translate(-500px);");
    registrationForm.setAttribute("style","transform:: translate(0);");
};

loginHere.onclick=()=>{
    loginForm.removeAttributeAttribute("style");
    registrationForm.setAttribute("style");
};