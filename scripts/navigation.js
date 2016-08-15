import utils from './utils';
import template from '../templates/navigation.html';

const navFragment = utils.convertToDomElement(template);

const menu = navFragment.querySelector('.navigation-mobile__menu');
const menu_right = navFragment.querySelector('.navigation-mobile__menu-right');
const icon = navFragment.querySelector('.navigation__icon-menu');

const elements = navFragment.querySelectorAll('.navigation__icon, .navigation-mobile__menu-left,.navigation-mobile__menu-right');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', () => {
        menu.classList.toggle('navigation-mobile__menu--transform');
        menu_right.classList.toggle('navigation-mobile__menu-right--transform');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');

    });
}



export default navFragment;