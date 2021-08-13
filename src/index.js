import cardsTemplate from '../src/templates/cards.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxEl = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
const ulMenuEl = document.querySelector('.js-menu');

checkboxEl.addEventListener('change', onCheckboxChange);
document.addEventListener('DOMContentLoaded', checkTheme);
// window.onload = checkTheme();

function onCheckboxChange(e) {
  if (checkboxEl.checked) {
    bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  }
  if (!checkboxEl.checked) {
    bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
}

function checkTheme(e) {
  const savedSettings = localStorage.getItem('theme');
  const parsedSettings = JSON.parse(savedSettings);
  if (parsedSettings === Theme.DARK) {
    bodyEl.classList.add(Theme.DARK);
    checkboxEl.checked = true;
  }
  if (parsedSettings !== Theme.DARK) {
    bodyEl.classList.add(Theme.LIGHT);
    checkboxEl.checked = false;
  }
}

const cardsMarkup = createCardsMarkup(menu);
function createCardsMarkup(menu) {
  return cardsTemplate(menu);
}

ulMenuEl.insertAdjacentHTML('beforeend', cardsMarkup);
