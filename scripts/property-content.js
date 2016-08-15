import utils from './utils';
import {ElementId} from './constants';
import template from '../templates/property-content.html';

import contentDescription from './content-description';
import contentSummary from './content-summary';

const fragment = utils.convertToDomElement(template);

fragment.querySelector(ElementId.CONTENT_DESCRIPTION).appendChild(contentDescription);
fragment.querySelector(ElementId.CONTENT_SUMMARY).appendChild(contentSummary);

export default fragment;
