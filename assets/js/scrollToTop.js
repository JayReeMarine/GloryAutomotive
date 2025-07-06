document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

    const rootElement = document.documentElement;

    function scrollToTop() {
      rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);

    const target = document.querySelector("#header");

    function callback(entries) {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        scrollToTopBtn.classList.add("showBtn");
      } else {
        scrollToTopBtn.classList.remove("showBtn");
      }
    }

    const observer = new IntersectionObserver(callback);
    observer.observe(target);
  });