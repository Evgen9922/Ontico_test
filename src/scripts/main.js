
(() => {

  const DATES = document.querySelectorAll('.js-card-date');
  const LOGO_IMG = document.querySelectorAll('.js-logo-img');
  const NAME = document.querySelectorAll('.js-card-title');
  const BRIEF = document.querySelectorAll('.js-card-text');
  const LOCATION = document.querySelectorAll('.js-address-link');
  const URI_LINK = document.querySelectorAll('.js-uri-link');
  const POPUP = document.querySelector('.js-popup');

  let conf_info = [];

  const INFO = document.querySelector('.js-popup-btn');

  INFO.addEventListener('click', () => {

    POPUP.classList.add('hide');

    fetch('https://conf.ontico.ru/api/conferences/forCalendar.json')
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        for (let item of response.result) {
          conf_info.push(item);
        }
      })
      .then(() => {
        console.log(conf_info);

        DATES.forEach((item, ind) => {
          item.innerText = conf_info[ind].date_range;
        });

        LOGO_IMG.forEach((item, ind) => {
          item.setAttribute('src', conf_info[ind].logo);
        })

        NAME.forEach((item, ind) => {
          item.innerText = conf_info[ind].name;
        })

        BRIEF.forEach((item, ind) => {
          item.innerText = conf_info[ind].brief;
        })

        LOCATION.forEach((item, ind) => {
          item.innerText = conf_info[ind].location;
        })

        URI_LINK.forEach((item, ind) => {
          item.innerText = conf_info[ind].uri.slice(8);
        })

      })
  })

})();





