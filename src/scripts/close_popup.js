(() => {

 const CLOSE_BTN = document.querySelector('.js-btn-close');
 const POPUP = document.querySelector('.js-popup');

 document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
   POPUP.classList.add('active-popup');
  }, 2000);
 })


 CLOSE_BTN.addEventListener('click', () => {
  POPUP.classList.add('hide');
 })
})();