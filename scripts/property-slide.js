import sliderTemplate from '../templates/property-slide.html';
import sliderItem from './slider-item';
import utils from './utils';


const sliderFragment = utils.convertToDomElement(sliderTemplate);
const sliderInner = sliderFragment.getElementsByClassName('slider-inner')[0];
const sliderThumbnail = sliderFragment.getElementsByClassName('slider-thumbnail')[0];

sliderInner.appendChild(sliderItem.imageFragment);
sliderThumbnail.appendChild(sliderItem.thumbnailFragment);

let currentIndex = 0;
let slides = sliderInner.children;

function setIndex(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[index].style.display = 'block';
}

setIndex(currentIndex);

/**
 * slider arrows listeners
 */
sliderFragment.querySelector('a[data-slide="right"]').addEventListener('click', (event) => {
    let index = currentIndex < slides.length - 1 ? ++currentIndex : currentIndex = 0;
    return setIndex(index);
});

sliderFragment.querySelector('a[data-slide="left"]').addEventListener('click', () => {
    let index = currentIndex > 0 ? --currentIndex : currentIndex = slides.length - 1;
    return setIndex(index);
});

/**
 * slider thumbnail listeners
 */
sliderThumbnail.addEventListener('click', (event) => {
    const target = event.target;
    const index = target.getAttribute('data-index');
    if (index && index >= 0) {
         setIndex(index);
    }
}, false);

export default sliderFragment;