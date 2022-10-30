'use strict';

function ToggleMenu() {
    document.getElementsByTagName('header')[0].childNodes.forEach((node, i) => {
        // Skip first 2 nodes (button)
        if (i < 2) {
            return;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
            if (node.style.display === 'block') {
                node.style.display = 'none';
                node.style.padding = 'unset';
            } else {
                node.style.display = 'block';
                node.style.padding = '0.5rem';
            }
        }
    })
}