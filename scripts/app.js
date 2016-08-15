import utils from './utils';
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
import propertySimilar from './property-similar';

//template
import template from '../templates/property-app.html';

//styles
import '../styles/index.scss';

const app = utils.convertToDomElement(template);


app.querySelector(ElementId.NAVIGATION).appendChild(navigation);
app.querySelector(ElementId.PROPERTY_INFO).appendChild(propertyInfo);
app.querySelector(ElementId.PROPERTY_SLIDE).appendChild(propertySlide);
app.querySelector(ElementId.PROPERTY_CONTENT).appendChild(propertyContent);
app.querySelector(ElementId.PROPERTY_AGENCY).appendChild(propertyAgency);
app.querySelector(ElementId.PROPERTY_CONTACT).appendChild(propertyContact);
app.querySelector(ElementId.PROPERTY_AD).appendChild(propertyAd);
app.querySelector(ElementId.PROPERTY_SHARE).appendChild(propertyShare);
app.querySelector(ElementId.PROPERTY_MARKET).appendChild(propertyMarket);
app.querySelector(ElementId.PROPERTY_SIMILAR).appendChild(propertySimilar);
app.querySelector(ElementId.PROPERTY_INFO_2).appendChild(propertyInfo.cloneNode(true));


export default app;
