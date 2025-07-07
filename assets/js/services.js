document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.service-section');
    const navLinks = document.querySelectorAll('.services-nav ul li a');
  
    function onScroll() {
      let currentSectionId = '';
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - 200) {
          currentSectionId = section.getAttribute('id');
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', onScroll);
    onScroll(); 
  });

  document.querySelectorAll('.services-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); 
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  document.querySelectorAll('.service-section .button').forEach(button => {
    button.addEventListener('click', function (e) {
      const section = this.closest('.service-section');
      const sectionId = section?.id;

      if (sectionId) {
        const enquiryMap = {
          logbook: 'logbook',
          roadworthy: 'roadworthy',
          brakes: 'brake',
          steering: 'steering-suspension',
          clutch: 'clutch',
          cooling: 'radiators',
          aircon: 'aircon',
          diagnostics: 'diagnostics',
          tyres: 'tyres',
          others: 'otherServices'
        };

        const mappedValue = enquiryMap[sectionId] || 'general';
        this.setAttribute('href', `../contact-us/index.html?enquiry=${mappedValue}#enquiry-form`);
      }
    });
  }); 
  

  document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash;
  
    if (hash) {
      const targetSection = document.querySelector(hash);
      if (targetSection) {
        setTimeout(() => {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 500); 
      }
    }
  });
  