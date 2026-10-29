const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const lightboxClose = document.querySelector('.lightbox__close');
const lightboxPrev = document.querySelector('.lightbox__prev');
const lightboxNext = document.querySelector('.lightbox__next');
const lightboxCaption = document.querySelector('.lightbox__caption');
const galleryItems = document.querySelectorAll('[data-lightbox-src]');
let lightboxTrigger = null;
let activeGallery = [];
let activeImageIndex = 0;

const showLightboxImage = (index) => {
  if (!lightboxImage || !activeGallery.length) return;

  activeImageIndex = (index + activeGallery.length) % activeGallery.length;
  const item = activeGallery[activeImageIndex];
  const imageAlt = item.dataset.lightboxAlt || '作品图片预览';
  lightboxImage.setAttribute('src', item.dataset.lightboxSrc);
  lightboxImage.setAttribute('alt', imageAlt);
  if (lightboxCaption) {
    lightboxCaption.textContent = `${activeImageIndex + 1} / ${activeGallery.length} · ${imageAlt}`;
  }
  if (lightboxPrev) lightboxPrev.hidden = activeGallery.length < 2;
  if (lightboxNext) lightboxNext.hidden = activeGallery.length < 2;
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage || !lightbox.classList.contains('is-open')) return;

  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.setAttribute('src', '');
  lightboxImage.setAttribute('alt', '');
  if (lightboxCaption) lightboxCaption.textContent = '';
  document.body.classList.remove('lightbox-open');
  activeGallery = [];
  if (lightboxTrigger) {
    lightboxTrigger.focus({ preventScroll: true });
    lightboxTrigger = null;
  }
};

if (lightbox && lightboxImage && galleryItems.length) {
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const imageSrc = item.dataset.lightboxSrc;

      if (!imageSrc) return;

      lightboxTrigger = item;
      const gallery = item.closest('.work-card') || item.parentElement;
      activeGallery = Array.from(gallery.querySelectorAll('[data-lightbox-src]'));
      showLightboxImage(activeGallery.indexOf(item));
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      lightboxClose?.focus({ preventScroll: true });
    });
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', () => showLightboxImage(activeImageIndex - 1));
  lightboxNext?.addEventListener('click', () => showLightboxImage(activeImageIndex + 1));

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-open')) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeLightbox();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showLightboxImage(activeImageIndex + (event.key === 'ArrowLeft' ? -1 : 1));
    } else if (event.key === 'Tab') {
      const controls = Array.from(lightbox.querySelectorAll('button:not([hidden])'));
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}
