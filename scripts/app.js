import {ElementId} from './constants';
import navigation from './navigation';
import slider from './slider';

import '../styles/index.scss';

document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById(ElementId.NAVIGATION).appendChild(navigation);
    document.getElementById(ElementId.PROPERTY_SLIDE).appendChild(slider);

});

window.onload = function() {
    console.log('window loaded')
};




