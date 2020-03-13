const navigationHeader = document.getElementById('navigationHeader');
navigationHeader.addEventListener('click', (event) => {
  navigationHeader.querySelectorAll('a').forEach(item => item.classList.remove('navigation__link_active'));
  event.target.classList.add('navigation__link_active');
});

