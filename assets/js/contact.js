document.addEventListener('DOMContentLoaded', function () {
    const today = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD' 형식
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
      dateInput.setAttribute('min', today);
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form'); // Select the contact form
    const emailInput = document.getElementById('email');   // Select the email input field
  
    form.addEventListener('submit', function (e) {
      const emailValue = emailInput.value.trim(); // Get and trim the email value
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple pattern to match a valid email format
  
      // Step 1: Check if the email format is valid
      if (!emailRegex.test(emailValue)) {
        e.preventDefault(); // Prevent the form from submitting
        alert('Please enter a valid email address (e.g. yourname@example.com)');
        emailInput.focus(); // Put the cursor back on the email field
        return false;
      }
    });
  });
  
  