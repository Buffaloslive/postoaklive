const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const banner = document.querySelector('.championship-banner');

const setChromeOffset = () => {
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const bannerHeight = banner ? banner.getBoundingClientRect().height : 0;
  document.documentElement.style.setProperty('--chrome-offset', `${Math.ceil(headerHeight + bannerHeight + 18)}px`);
};
setChromeOffset();
window.addEventListener('resize', setChromeOffset, { passive: true });
window.addEventListener('orientationchange', setChromeOffset, { passive: true });

if (header && !header.classList.contains('solid')) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
const setMenuOpen = (open) => {
  if (!header || !navToggle) return;
  header.classList.toggle('nav-open', open);
  document.body.classList.toggle('nav-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
};

if (navToggle && nav) {
  navToggle.addEventListener('click', () => setMenuOpen(!header.classList.contains('nav-open')));
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
  document.addEventListener('click', (event) => {
    if (!header.classList.contains('nav-open')) return;
    if (!header.contains(event.target)) setMenuOpen(false);
  });
}

const lightbox = document.createElement('div');
lightbox.className = 'bracket-lightbox';
lightbox.setAttribute('aria-hidden', 'true');
lightbox.innerHTML = `
  <div class="bracket-lightbox__dialog" role="dialog" aria-modal="true" aria-label="Expanded bracket image">
    <div class="bracket-lightbox__bar">
      <span class="bracket-lightbox__title">Full bracket</span>
      <button class="bracket-lightbox__close" type="button" aria-label="Close bracket viewer">×</button>
    </div>
    <div class="bracket-lightbox__stage" tabindex="0">
      <img alt="" />
    </div>
  </div>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');
const lightboxTitle = lightbox.querySelector('.bracket-lightbox__title');
const lightboxClose = lightbox.querySelector('.bracket-lightbox__close');
const lightboxStage = lightbox.querySelector('.bracket-lightbox__stage');
let lastFocused = null;

const openBracket = (link) => {
  lastFocused = document.activeElement;
  const img = link.querySelector('img');
  lightboxImg.src = link.href;
  lightboxImg.alt = img ? img.alt : 'Expanded bracket image';
  lightboxTitle.textContent = link.getAttribute('aria-label') || 'Full bracket';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
  requestAnimationFrame(() => {
    lightboxStage.scrollLeft = Math.max(0, (lightboxStage.scrollWidth - lightboxStage.clientWidth) / 2);
  });
};

const closeBracket = () => {
  if (!lightbox.classList.contains('is-open')) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lightboxImg.removeAttribute('src');
  if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
};

document.querySelectorAll('[data-full-image]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openBracket(link);
  });
});

lightboxClose.addEventListener('click', closeBracket);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeBracket();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuOpen(false);
    closeBracket();
  }
});
