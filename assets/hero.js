// Фоновое видео первого экрана: кнопка паузы и уважение к «уменьшить движение».
(() => {
  const video = document.querySelector('.hero-video');
  const toggle = document.querySelector('.hero-toggle');
  if (!video || !toggle) return;

  const sync = () => {
    const paused = video.paused;
    toggle.dataset.state = paused ? 'paused' : 'playing';
    toggle.setAttribute('aria-label', paused ? toggle.dataset.play : toggle.dataset.pause);
  };

  // Кто просил меньше движения, видит постер; видео можно включить кнопкой.
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay');
    video.pause();
  }

  toggle.addEventListener('click', () => {
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  });
  video.addEventListener('play', sync);
  video.addEventListener('pause', sync);
  sync();
})();
