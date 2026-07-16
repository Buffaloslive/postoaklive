document.getElementById('year').textContent = new Date().getFullYear();
const header = document.querySelector('.site-header');
if (header && !header.classList.contains('solid')) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}
