import utils from './utils';

const IMAGE_PATH = '/assets/img/';
const images = ['wide.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg', 'f.jpg','g.jpg'];

const imageFragment = document.createDocumentFragment();
const thumbnailFragment = document.createDocumentFragment();

images.forEach((imageName, index) => {
    const wrapper = utils.createElement('div', {className: 'slider-item'});
    const img = utils.createElement('img', {className: 'slider-item__image'});

    img.src = IMAGE_PATH + imageName;
    img.alt = imageName;

    wrapper.appendChild(img);
    imageFragment.appendChild(wrapper)
});

images.forEach((imageName, index) => {
    const wrapper = utils.createElement('div', {className: 'thumbnail-item'});
    const img = utils.createElement('img', {className: 'thumbnail-item__image'});

    img.src = IMAGE_PATH + imageName;
    img.alt = imageName;
    img.setAttribute('data-index', index);

    wrapper.appendChild(img);
    thumbnailFragment.appendChild(wrapper)
});

export default {
    imageFragment,
    thumbnailFragment
};