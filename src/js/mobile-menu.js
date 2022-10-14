// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');
//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');
//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };
//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Закрываем мобильное меню на более широких экранах
//   // в случае изменения ориентации устройства.
//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();

(() => {
  const mobileMenu = document.querySelector('.js-menu-container'); // в середині клас контейнера меню
  const openMenuBtn = document.querySelector('.js-open-menu'); // в середині клас кнопки бургера
  const closeMenuBtn = document.querySelector('.js-close-menu'); // в середині клас кнопки закриття меню
  openMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  });
  closeMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.toggle('is-open');
    mobileMenu.classList.remove('is-open');
    closeMenuBtn.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
  document.querySelectorAll('.menu__navigation').forEach(n =>
    n.addEventListener('click', () => {
      openMenuBtn.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    })
  );
})();