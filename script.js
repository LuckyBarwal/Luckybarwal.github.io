document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle mobile navigation menu
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });

  // Motivational Quotes Rotation (updates every minute with a fade effect)
  const quotesArray = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream it. Wish it. Do it."
  ];
  const quoteElem = document.getElementById('motivation-quote');
  function updateQuote() {
    if (quoteElem) {
      // Remove and re-add the fade class for a smooth fade effect
      quoteElem.classList.remove('fade');
      // Force reflow to restart the animation
      void quoteElem.offsetWidth;
      const randomIndex = Math.floor(Math.random() * quotesArray.length);
      quoteElem.innerText = quotesArray[randomIndex];
      quoteElem.classList.add('fade');
    }
  }
  updateQuote();
  setInterval(updateQuote, 60000);

  // Handle contact form submission (demo behavior)
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    contactForm.reset();
  });
});