import utils from './utils';
import similarItem from '../templates/similar-item.html';
import template from '../templates/property-similar.html';

const itemFragment = utils.convertToDomElement(similarItem);
const fragment = utils.convertToDomElement(template);
const itemBlock = fragment.querySelector('.property-similar__block');

for(let i=0; i< 5; i++){
    const itemClone = itemFragment.cloneNode(true);
    itemBlock.appendChild(itemClone);
}

export default fragment;