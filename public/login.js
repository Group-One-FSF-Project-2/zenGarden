const submit = document.querySelector('#submitbtn');
// Login user logic
const loginUserHandler = async(event) => {
    event.preventDefault();

    const username = document.querySelector('#usernameInput');
    const password = document.querySelector('#passwordInput');

    if(username && password) {
        const response = await fetch('../api/userRoutes', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

    if(response.ok) {
        document.location.replace('/user');
    } else {
        alert(response.statusText);
    }
    }
};
// Sign up user logic
const signupUserHandler = async(event) => {
    event.preventDafault();

    const username = document.querySelector('#usernameSignUp');
    const password = document.querySelector('#passwordSignUp');

    if(email && password) {
        const response = await fetch('../api/userRoutes', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        });

    if(response.ok) {
        document.location.replace('/user');
    } else {
        alert(response.statusText);
    }
    }
};
// Event listener for both functions.
document.addEventListener('submit', loginUserHandler, signupUserHandler);