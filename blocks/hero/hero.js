// find the h1 inside of the hero block

const heroBlock = document.querySelector('.hero');
const h1Element = heroBlock.querySelector('h1');

// if value of h1Element starts with "FeDX" then wrap the "DX" in a span tag
if (h1Element.textContent.startsWith('FeDX')) {
  h1Element.innerHTML = h1Element.textContent.replace('DX', '<span class="dx">DX</span>');
}
