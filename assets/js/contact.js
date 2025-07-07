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
  
  document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("AJ9VRnG1JVoy76hBI"); 
  
    // 오늘 날짜 이후만 선택 가능하도록 설정
    const today = new Date().toISOString().split("T")[0];
    const dateInput = document.getElementById("booking-date");
    if (dateInput) {
      dateInput.setAttribute("min", today);
    }

    const urlParams = new URLSearchParams(window.location.search);
    const enquiryValue = urlParams.get('enquiry');
    if (enquiryValue) {
      const enquirySelect = document.getElementById('enquiry-select');
      if (enquirySelect) {
        enquirySelect.value = enquiryValue;
      }
    }
  
    const form = document.getElementById("enquiry-form");
    const emailInput = document.getElementById("email");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      // Step 1: Email validation
      if (!emailRegex.test(emailValue)) {
        alert("Please enter a valid email address (e.g. yourname@example.com)");
        emailInput.focus();
        return;
      }

      // ✅ Step 2: reCAPTCHA validation
      const recaptchaResponse = document.querySelector('[name="g-recaptcha-response"]').value;
      if (!recaptchaResponse) {
        alert("⚠️ Please complete the reCAPTCHA before submitting.");
        return;
      }
      // ✅ Step 3: Format and inject preferred date
      const bookingDateInput = document.getElementById("booking-date");
      const preferredDateInput = document.getElementById("preferred-date");

      if (bookingDateInput && preferredDateInput && bookingDateInput.value) {
        const rawDate = bookingDateInput.value; // e.g. "2025-07-07"
        const dateObj = new Date(rawDate);
        const formattedDate = dateObj.toLocaleDateString("en-GB"); // "27/07/2025"
        const formattedDash = formattedDate.replaceAll("/", "-");  // "27-07-2025"
        preferredDateInput.value = formattedDate; 
        document.getElementById("preferred-date-dash").value = formattedDash; 
      }

      // Step 3: Send with EmailJS
      emailjs
        .sendForm("service_0cmqs4l", "template_uannx6t", this)
        .then(() => {
          alert("✅ Thank you! Your message has been sent.");
          form.reset();
        })
        .catch((error) => {
          console.error("❌ EmailJS Error:", error);
          alert("⚠️ An error occurred. Please try again.");
        });
    });
  });