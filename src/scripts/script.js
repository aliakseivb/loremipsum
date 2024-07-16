(function () {
  /** стилизация хедера при скролле */
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolly');
    } else {
      header.classList.remove('scrolly');
    }
  };

  /** кастомный анимированный селект */
  const select = document.querySelector('.select');
  const selectOption = document.querySelectorAll('.select-option');
  const inside = document.querySelector('.inside')
  select.addEventListener('click', (e) => {
    if (select.classList.contains('open')) {
      select.classList.remove('open');
      inside.style.maxHeight = `0`;
      setTimeout(() => {
        inside.classList.remove('see');
      }, 250)

    } else {

      inside.style.maxHeight = `${inside.scrollHeight}px`;
      inside.classList.add('see');
      select.classList.toggle('open');
    }
  });
  selectOption.forEach(elem => {
    elem.addEventListener('click', (e) => {
      inside.style.maxHeight = `0`;
      setTimeout(() => {
        select.innerText = e.target.innerText;
        select.classList.remove('open');
        select.style.color = '#333';
        inside.classList.remove('see')
      }, 250);
    });
  });

  /** выбор пункта меню навигации */
  const navMenu = document.querySelector('.nav');
  const navLinkElements = document.querySelectorAll('.nav__link');
  navMenu.addEventListener('click', (e) => {
    if(!e.target.classList.contains('active')){
      navLinkElements.forEach(elem => {
        elem.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  });
}());
