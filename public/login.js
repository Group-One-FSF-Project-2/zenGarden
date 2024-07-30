// const modalContainer = document.querySelector(".modal-container"); 
// const modalLogin = document.getElementById("modalLogin"); 
// const create = document.getElementById("create");
// const loginHere = document.getElementById("loginHere");
// const loginForm = document.querySelector(".login");
// const registrationForm = document.querySelector(".registration");
// const closeModal = document.getElementById("closeModal");


// modalLogin.onclick = () => {
//     modalContainer.classList.add("open");
// };

// closeModal.onclick = () => {
//     modalContainer.classList.remove("open");
//     registrationForm.style.transform = "translate(500px)";
// };

// create.onclick = () => {
//     loginForm.style.transform = "translate(-500px)";
//     registrationForm.style.transform = "translate(0)";
// }


// The two lines above automatically generated. I left them in because I am not sure if we need them as requirements.
const loginHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector('#usernameInputLogin').value.trim();
    const password = document.querySelector('#passwordInputLogin').value.trim();
    const submit = document.querySelector('#submitbtn');
    //   change email to username and fix the submit, they aren't attacthed to anything
    if (user_name && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        
        const data = await response.json();
        const userId = data.user;
        console.log('User ID in login JS:', userId);

        // check if the user has a garden plot, if not create one
        const createPlot = await fetch('/api/gardenplots', {
          method: 'POST',
          body: JSON.stringify({ user_id: userId, plot_name: `${userId} Garden Plot` }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (createPlot.ok) {
          console.log('Garden Plot Created');
        } else {
          console.error('Failed to Create Garden Plot');
        }
        




        
     } else {
        console.error('Failed to Create New User');
      }
    }
  };
  // add attacthment to form by adding  document.queryselector('form') before the event listener
  document.querySelector('.login').addEventListener('submit', loginHandler);
  // Event listener
  
