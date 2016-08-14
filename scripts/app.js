import {ElementId} from './constants';
import navigation from './navigation';
import propertyInfo from './property-info';
import propertyContent from './property-content';
import propertySlide from './property-slide';
import propertyAgency from './property-agency';
import propertyContact from './property-contact';
import propertyAd from './property-ad';
import propertyShare from './property-share';
import propertyMarket from './property-market';

import '../styles/index.scss';

document.addEventListener('DOMContentLoaded', function(event) {
    document.getElementById(ElementId.NAVIGATION).appendChild(navigation);
    document.getElementById(ElementId.PROPERTY_INFO).appendChild(propertyInfo);
    document.getElementById(ElementId.PROPERTY_SLIDE).appendChild(propertySlide);
    document.getElementById(ElementId.PROPERTY_CONTENT).appendChild(propertyContent);
    document.getElementById(ElementId.PROPERTY_AGENCY).appendChild(propertyAgency);
    document.getElementById(ElementId.PROPERTY_CONTACT).appendChild(propertyContact);
    document.getElementById(ElementId.PROPERTY_AD).appendChild(propertyAd);
    document.getElementById(ElementId.PROPERTY_SHARE).appendChild(propertyShare);
    document.getElementById(ElementId.PROPERTY_MARKET).appendChild(propertyMarket);
});

window.onload = function() {
    console.log('window loaded')
};

