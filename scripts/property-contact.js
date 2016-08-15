import utils from './utils';
import template from '../templates/property-contact.html';

const fragment = utils.convertToDomElement(template);
const items = fragment.querySelectorAll('.property-contact-item__header');

let message = null;
let amount = null;
const contact = {
    name: [],
    email: [],
    phone: []
};


/**
 * Listener for toggle contact items
 */
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (event) => {
        const element = items[i].getAttribute('data-show');
        fragment.querySelector('.' + element).classList.toggle('property-contact-item--show');
    }, false);

}

/**
 * Listener for message agent
 */

const messageElement = fragment.querySelector('#message_agent');

messageElement.addEventListener('blur', (event) => {
    const target = event.target;
    const error = target.parentNode.querySelector('p');

    if (target.value && target.value.trim().length >= 2) {
        message = target.value.trim();
        messageElement.classList.remove('property-contact-item__input--error');
        error.classList.remove('property-contact-item__error--show');
    } else {
        message = null;
        messageElement.classList.add('property-contact-item__input--error');
        error.classList.add('property-contact-item__error--show');
    }

}, false);

/**
 * Listener for name input fields
 */
const nameElements = fragment.querySelectorAll('#fullname, #offer-fullname');

for (let i = 0; i < nameElements.length; i++) {
    nameElements[i].addEventListener('blur', (event) => {
        const target = event.target;
        const error = target.parentNode.querySelector('p');

        if (target.value && target.value.trim().length >= 2) {
            contact.name[i] = target.value.trim();
            nameElements[i].classList.remove('property-contact-item__input--error');
            error.classList.remove('property-contact-item__error--show');
        } else {
            contact.name[i] = null;
            nameElements[i].classList.add('property-contact-item__input--error');
            error.classList.add('property-contact-item__error--show');
        }

    }, false);
}


/**
 * Listener for email input fields
 */
const emailElements = fragment.querySelectorAll('#email, #offer-email');
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

for (let i = 0; i < emailElements.length; i++) {
    emailElements[i].addEventListener('blur', (event) => {
        const target = event.target;
        const error = target.parentNode.querySelector('p');

        if (target.value && regexEmail.test(target.value.trim())) {
            contact.email[i] = target.value.trim();
            emailElements[i].classList.remove('property-contact-item__input--error');
            error.classList.remove('property-contact-item__error--show');
        } else {
            contact.email[i] = null;
            emailElements[i].classList.add('property-contact-item__input--error');
            error.classList.add('property-contact-item__error--show');
        }

    }, false);
}

/**
 * Listener for phone number input fields
 */
const phoneElements = fragment.querySelectorAll('#phone-no, #offer-phone-no');
const regexPhone = /^(?:\+971|00971|0)?(?:50|51|52|55|56|2|3|4|6|7|9)\d{7}$/;

for (let i = 0; i < phoneElements.length; i++) {
    phoneElements[i].addEventListener('blur', (event) => {
        const target = event.target;
        const error = target.parentNode.querySelector('p');

        if (target.value && regexPhone.test(target.value.trim())) {
            contact.phone[i] = target.value.trim();
            phoneElements[i].classList.remove('property-contact-item__input--error');
            error.classList.remove('property-contact-item__error--show');
        } else {
            contact.phone[i] = null;
            phoneElements[i].classList.add('property-contact-item__input--error');
            error.classList.add('property-contact-item__error--show');
        }

    }, false);
}

/**
 * Listener for amount field
 */

const amountElement = fragment.querySelector('#your-offer');
const regexAmount = /\d{1,2}[\,\.]{1}\d{1,2}/;

amountElement.addEventListener('blur', (event) => {
    const target = event.target;
    const parent = target.parentNode;
    const error = parent.parentNode.querySelector('p');

    if (target.value && regexAmount.test(target.value.trim())) {
        amount = target.value.trim();
        amountElement.classList.remove('property-contact-item__input--error');
        error.classList.remove('property-contact-item__error--show');
    } else {
        amount = null;
        amountElement.classList.add('property-contact-item__input--error');
        error.classList.add('property-contact-item__error--show');
    }

}, false);

/**
 * Submit form click listener
 */
const contactButton = fragment.querySelector('#contact-button');

contactButton.addEventListener('click', (event) => {
    const target = event.target;
    const error = target.parentNode.querySelector('p');
    if (message && contact.name[0] && contact.email[0] && contact.phone[0]) {
        error.classList.remove('property-contact-item__error--show');
    } else {
        error.classList.add('property-contact-item__error--show');
    }
}, false);


const offerButton = fragment.querySelector('#offer-button');

offerButton.addEventListener('click', (event) => {
    const target = event.target;
    const error = target.parentNode.querySelector('p');
    if (amount && contact.name[0] && contact.email[0] && contact.phone[0]) {
        error.classList.remove('property-contact-item__error--show');
    } else {
        error.classList.add('property-contact-item__error--show');
    }
}, false);

export default fragment;