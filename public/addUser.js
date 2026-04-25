/**
 * User registration handler
 * Creates new user account and redirects to home page
 */
const addUserHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector('#usernameInput').value.trim();
  const password = document.querySelector('#passwordInput').value.trim();

  if (user_name && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ user_name, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      const errorData = await response.json();
      console.error('Failed to create new user:', errorData);
      
      // Check for validation errors
      if (errorData.name === 'SequelizeValidationError') {
        const validationMessages = errorData.errors.map(error => {
          if (error.path === 'password' && error.validatorKey === 'len') {
            return 'Password must be at least 8 characters long.';
          }
          return error.message || 'Validation error';
        });
        alert('Registration failed:\n' + validationMessages.join('\n'));
      }
      // Check if username already exists
      else if (errorData.name === 'SequelizeUniqueConstraintError' || 
          (errorData.parent && errorData.parent.code === '23505')) {
        alert('Username already exists. Please choose a different username.');
      } else {
        alert('Registration failed. Please try again.');
      }
    }
  }
};

// Attach registration form handler
document.querySelector('.registration-form').addEventListener('submit', addUserHandler);
