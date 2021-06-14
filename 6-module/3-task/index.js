import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.render(slides);
    this.initCarousel(this.elem, slides);
  }

  render(slides) {
    const slide = slides.map(value =>`
    <div class="carousel__slide" data-id="${value.id}">
    <img src="/assets/images/carousel/${value.image}" class="carousel__img" alt="slide">
    <div class="carousel__caption">
      <span class="carousel__price">€${value.price.toFixed(2)}</span>
      <div class="carousel__title">${value.name}</div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
      </div>
    </div>
    `).join('');

    this.elem.innerHTML = `
    <div class="carousel__inner">
    ${slide}
    </div>
    `;
  }

 initCarousel(element, slides) {
    let numOfSlides = slides.length;

    let carouselInner = element.querySelector('.carousel__inner');

    let carouselArrowRight = document.createElement('div');
    carouselArrowRight.classList.add('carousel__arrow','carousel__arrow_right');
    carouselArrowRight.innerHTML = `<img src="/assets/images/icons/angle-icon.svg" alt="icon">`;

    let carouselArrowLeft = document.createElement('div');
    carouselArrowLeft.classList.add('carousel__arrow', 'carousel__arrow_left');
    carouselArrowLeft.innerHTML = `<img src="/assets/images/icons/angle-left-icon.svg" alt="icon">`;

    this.elem.append(carouselArrowRight);
    this.elem.append(carouselArrowLeft);

    let currentSlide = 0;

    function updateArrow() {
      if (currentSlide === (numOfSlides - 1)) {
        carouselArrowRight.style.display = 'none';
      } else if (currentSlide === 0){
        carouselArrowLeft.style.display = 'none';
      } else {
        carouselArrowLeft.style.display = '';
        carouselArrowRight.style.display = '';
      }
    }

    function addEvent() {
      let carouselButtons = element.querySelectorAll('.carousel__button');

      for (let carouselButton of carouselButtons) {
        carouselButton.addEventListener('click', function(event) {
          let slideIds = slides.map(value => value.id);
          let newEvent = new CustomEvent("product-add", { 
            detail: slideIds[currentSlide], 
            bubbles: true, 
          });
          element.dispatchEvent(newEvent);
        })};
    }

    addEvent();
    updateArrow();

    carouselArrowRight.addEventListener('click', function() {
      let widthOfSlide = document.querySelector('.carousel__inner').offsetWidth;
      currentSlide++;
      carouselInner.style.transform = `translateX(-${widthOfSlide * currentSlide}px)`;
      updateArrow();
    });

    carouselArrowLeft.addEventListener('click', function() {
      let widthOfSlide = document.querySelector('.carousel__inner').offsetWidth;
      currentSlide--;
      carouselInner.style.transform = `translateX(-${widthOfSlide * currentSlide}px)`;
      updateArrow();
    });
  }
}
