const basketButton = document.querySelector('.user-menu__link--basket');
const basketPopup = document.querySelector('.basket__popup');

basketButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (basketPopup.classList.contains('basket__popup--closed')) {
    basketPopup.classList.remove('basket__popup--closed');
    basketPopup.classList.add('basket__popup--opened');
  } else {
    basketPopup.classList.remove('basket__popup--opened');
    basketPopup.classList.add('basket__popup--closed');
  }
});

const catalogButton = document.querySelector('.site-menu__button');
const catalogMenu = document.querySelector('.site-menu__catalog');

catalogButton.addEventListener('click', () => {
  console.log('ye');
  if (catalogMenu.classList.contains('site-menu__catalog--closed')) {
    catalogMenu.classList.remove('site-menu__catalog--closed');
    catalogMenu.classList.add('site-menu__catalog--opened');
  } else {
    catalogMenu.classList.remove('site-menu__catalog--opened');
    catalogMenu.classList.add('site-menu__catalog--closed');
  }
});


const orderButton = document.querySelector('.order__link');
const modalContainer = document.querySelector('.modal__container');
const modalClose = document.querySelector('.modal__close-button');

orderButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (modalContainer.classList.contains('modal__container--closed')) {
    modalContainer.classList.remove('modal__container--closed');
    modalContainer.classList.add('modal__container--opened');
  }
});

const onModalHidden = () => {
  modalContainer.classList.remove('modal__container--opened');
  modalContainer.classList.add('modal__container--closed');
}

modalClose.addEventListener('click', onModalHidden);

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onModalHidden();
  }
});



const slides = Array.from(document.querySelectorAll('.slide'));
let currentIndex = 0;
const prewButton = document.querySelector('.slider__button--prew');
const nextButton = document.querySelector('.slider__button--next');
const paginationList = document.querySelector('.slider-pagination');
const paginations = Array.from(document.querySelectorAll('.slider-pagination__item'));

prewButton.addEventListener('click', () => {
  console.log('prev');
  slides.forEach((element, index) => {
    if (element.classList.contains('slide--active')) {
      currentIndex = index;
    }
  });
  if (currentIndex > 0) {
    slides[currentIndex].classList.remove('slide--active');
    slides[currentIndex - 1].classList.add('slide--active');
    paginations[currentIndex].classList.remove('slider-pagination__item--current');
    paginations[currentIndex - 1].classList.add('slider-pagination__item--current');

    currentIndex--;
  }
});

nextButton.addEventListener('click', () => {
  console.log(slides);
  slides.forEach((element, index) => {
    if (element.classList.contains('slide--active')) {
      currentIndex = index;
    }
  });
  if (currentIndex < slides.length - 1) {
    console.log('ty');
    slides[currentIndex].classList.remove('slide--active');
    slides[currentIndex + 1].classList.add('slide--active');
    paginations[currentIndex].classList.remove('slider-pagination__item--current');
    paginations[currentIndex + 1].classList.add('slider-pagination__item--current');

    currentIndex++;
  }
});

paginationList.addEventListener('click', (evt) => {
  paginations.forEach((element, index) => {
    if (element.classList.contains('slider-pagination__item--current')) {
      currentIndex = index;
    }
  });

  if (evt.target.classList.contains('slider-pagination__button')) {
    paginations[currentIndex].classList.remove('slider-pagination__item--current');
    slides[currentIndex].classList.remove('slide--active');
    evt.target.parentElement.classList.add('slider-pagination__item--current');
    paginations.forEach((element, index) => {
      if (element.classList.contains('slider-pagination__item--current')) {
        slides[index].classList.add('slide--active');
      }
    });
  }
});



const servicesControl = document.querySelector('.services-controls');
const servicesButtons = Array.from(document.querySelectorAll('.services-controls__item'));
const services = Array.from(document.querySelectorAll('.service'));
let serviceIndex = 0;


servicesButtons.forEach((element, index) => {
  if (element.classList.contains('services-controls__item--active')) {
    serviceIndex = index;
  }
});

servicesControl.addEventListener('click', (evt) => {
  servicesButtons.forEach((element, index) => {
    if (element.classList.contains('services-controls__item--active')) {
      serviceIndex = index;
    }
  });

  if (evt.target.classList.contains('services-controls__button')) {
    services[serviceIndex].classList.remove('service--active');
    servicesButtons[serviceIndex].classList.remove('services-controls__item--active');
    evt.target.parentElement.classList.add('services-controls__item--active');
    servicesButtons.forEach((element, index) => {
      if (element.classList.contains('services-controls__item--active')) {
        services[index].classList.add('service--active');
      }
    });
  }
});

