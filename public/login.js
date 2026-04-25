/**
 * User login handler
 * Authenticates user and redirects to garden plots
 */
const loginHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector('#usernameInputLogin').value.trim();
  const password = document.querySelector('#passwordInputLogin').value.trim();

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
      
      // Store plot ID for garden access
      const plotId = data.plotData;
      localStorage.setItem('plotId', plotId);
      
      // Redirect to garden plots
      window.location.href = '/plots';
    } else {
      console.error('Login failed');
    }
  }
};

// Attach login form handler
document.querySelector('.login-form').addEventListener('submit', loginHandler);
  
