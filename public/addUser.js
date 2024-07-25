const { response } = require("express");
const { JSON } = require("sequelize");
// The two lines above automatically generated. I left them in because I am not sure if we need them as requirements.
const addUserHandler = async(event) => {
    event.preventDefault();

const email = document.querySelector('#emailInput').value.trim();
const password = document.querySelector('#passwordInput').value.trim();
const submit = document.querySelector('#submitbtn');

if(email && password) {
    const reponse = await fetch('../api/userRoutes', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(response.ok) {
        document.location.replace('/user');
    } else {
        ('Failed to Create New User');
    }
}
};

document.addEventListener('submit', addUserHandler);