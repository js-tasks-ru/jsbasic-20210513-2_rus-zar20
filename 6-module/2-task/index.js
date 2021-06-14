import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {

  constructor(product) {
    this.elem = document.createElement('div');
    this.elem.classList.add('card');
    this.render(product);
    this.add(this.elem, product);
  }

  render(product) {
    let card = `
        <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
        <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    `;

    this.elem.innerHTML = `
    <div class="card__top">
        ${card}
    </div>
    `;
  }

  add(element, product) {
    let cardButton = element.querySelector('.card__button');
    let newEvent = new CustomEvent("product-add", { 
      detail: product.id, 
      bubbles: true, 
    });
    cardButton.addEventListener('click', function(event) {
      element.dispatchEvent(newEvent);
      });
  }
}
