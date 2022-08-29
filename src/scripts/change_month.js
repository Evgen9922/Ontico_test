(() => {

 const MONTH = document.querySelectorAll('.js-month-name');
 const LABEL = document.querySelector('.js-label');

 MONTH.forEach((item, ind) => {

  item.addEventListener('click', (ev) => {

   removeActive();

   item.classList.add('js-active-month');

   if (ind == 0) {
    LABEL.style.left = "1%";
   }
   if (ind == 1) {
    LABEL.style.left = "11%";
   }
   if (ind == 2) {
    LABEL.style.left = "19%";
   }
   if (ind == 3) {
    LABEL.style.left = "28%";
   }
   if (ind == 4) {
    LABEL.style.left = "35%";
   }
   if (ind == 5) {
    LABEL.style.left = "42%";
   }
   if (ind == 6) {
    LABEL.style.left = "49%";
   }
   if (ind == 7) {
    LABEL.style.left = "57%";
   }
   if (ind == 8) {
    LABEL.style.left = "67%";
   }
   if (ind == 9) {
    LABEL.style.left = "77%";
   }
   if (ind == 10) {
    LABEL.style.left = "86%";
   }
   if (ind == 11) {
    LABEL.style.left = "96%";
   }

  })
 })

 function removeActive() {

  MONTH.forEach((item) => {
   item.classList.remove('js-active-month')
  });

 };



})();