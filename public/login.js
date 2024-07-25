const submit = document.querySelector('#submitbtn');
// Login user logic
const loginUserHandler = async(event) => {
    event.preventDefault();

    const email = document.querySelector('#emailInput');
    const password = document.querySelector('#passwordInput');

    if(email && password) {
        const response = await fetch('../api/userRoutes', {
            method: 'POST',
            body: JSON.stringify({email, password}),
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

    const email = document.querySelector('#emaiSignUp');
    const password = document.querySelector('#passwordSignUp');

    if(email && password) {
        const response = await fetch('../api/userRoutes', {
            method: 'POST',
            body: JSON.stringify({email, password}),
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