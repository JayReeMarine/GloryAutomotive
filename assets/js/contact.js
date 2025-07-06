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
    // EmailJS 초기화 - 반드시 실제 Public Key로
    emailjs.init("AJ9VRnG1JVoy76hBI"); // ✅ 실제 Public Key 입력
  
    // 오늘 날짜 이후만 선택 가능하도록 설정
    const today = new Date().toISOString().split("T")[0];
    const dateInput = document.getElementById("booking-date");
    if (dateInput) {
      dateInput.setAttribute("min", today);
    }
  
    const form = document.getElementById("enquiry-form");
    const emailInput = document.getElementById("email");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      // 이메일 형식 확인
      if (!emailRegex.test(emailValue)) {
        alert("Please enter a valid email address (e.g. yourname@example.com)");
        emailInput.focus();
        return;
      }
  
      // EmailJS로 전송
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