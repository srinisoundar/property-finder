import utils from './utils';
import template from '../templates/navigation.html';

const navFragment = utils.convertToDomElement(template);

navFragment.addEventListener('click', () => {
    console.log('click');
});


export default navFragment;