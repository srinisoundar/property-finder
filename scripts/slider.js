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

console.log(sliderFragment)
sliderFragment.getElementById('slider-nav-right').addEventListener('click', (event) => {
    let index = currentIndex < slides.length - 1 ? currentIndex++ : currentIndex = 0;
    return setIndex(index);
});

sliderFragment.getElementById('slider-nav-right').addEventListener('click', () => {
    let index = currentIndex > 0 ? currentIndex-- : currentIndex = slides.length - 1;
    return setIndex(index);
});

sliderThumbnail.addEventListener('click', (event) => {
    const target = event.target;
    const index = target.getAttribute('data-index');
    setIndex(index);
}, false);

export default sliderFragment;