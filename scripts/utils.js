
function convertToDomElement(template) {
    const fragment = document.createDocumentFragment();
    const wrapper = document.createElement('div');

    wrapper.innerHTML = template;
    wrapper.className += 'container';
    return fragment.appendChild(wrapper);
}

function createElement(tag, attrs) {
    const element = document.createElement(tag);

    Object.keys(attrs).forEach(function (key) {
        element[key] = attrs[key];
    });

    return element;
}


export default {
    convertToDomElement,
    createElement,
    scrollX
}