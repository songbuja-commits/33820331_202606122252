document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if(hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      if(navMenu.classList.contains('active')) {
        hamburger.innerHTML = '✕';
      } else {
        hamburger.innerHTML = '☰';
      }
    });
  }
});