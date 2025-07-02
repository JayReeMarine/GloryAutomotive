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
  
  