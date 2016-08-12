import sliderTemplate from '../templates/slider.html';
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
    console.log('slide', index)
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }

    slides[index].style.display = 'block';
}

setIndex(currentIndex);

window.nextImage = () => {
    let index = currentIndex < slides.length - 1 ? currentIndex++ : currentIndex = 0;
    return setIndex(index);
};

window.prevImage = () => {
    let index = currentIndex > 0 ? currentIndex-- : currentIndex = slides.length - 1;
    return setIndex(index);
};

export default sliderFragment;