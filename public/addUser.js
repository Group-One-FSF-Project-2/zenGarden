const { response } = require('express');
const { JSON } = require('sequelize');
// The two lines above automatically generated. I left them in because I am not sure if we need them as requirements.
const addUserHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#usernameInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();
//   const submit = document.querySelector('#submitbtn');
  // change email to username and fix the submit, they aren't attacthed to anything
  if (username && password) {
    const response = await fetch('../api/userRoutes', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/user');
    } else {
      console.error('Failed to Create New User');
    }
  }
};
// add attacthment to form by adding  document.queryselector('form') before the event listener
document.queryselector('form').addEventListener('submit', addUserHandler);
// Event listener
