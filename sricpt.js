document.querySelectorAll('[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollintoView({
            behavior: 'smooth'
          });
        });
});