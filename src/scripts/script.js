/**todo селект с анимацией*/
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
