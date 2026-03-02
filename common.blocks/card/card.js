import { initFCarousel } from '../../library.blocks/f-carousel/f-carousel.js';

const getTemplate = () => {
  return document
    .querySelector('#card-template')
    .content.querySelector('.card')
    .cloneNode(true);
};

export const initCardCarousel = (cardEl, data) => {
  const carouselEl = cardEl.querySelector('.card__carousel');

  data.images.forEach((imgSrc, index) => {
    const slide = document.createElement('div');
    slide.className = 'f-carousel__slide';
    slide.setAttribute('data-src', imgSrc);
    slide.setAttribute('data-thumb-src', imgSrc);

    const img = document.createElement('img');
    img.alt = `${data.title} - фото ${index + 1}`;
    img.width = 1918;
    img.height = 1280;
    img.setAttribute('data-lazy-src', imgSrc);

    slide.appendChild(img);
    carouselEl.appendChild(slide);
  });

  initFCarousel(carouselEl);

  return carouselEl;
};

const initMaterials = (cardEl, materials) => {
  const materialsListEl = cardEl.querySelector('.card__materials');

  materials.forEach((material, index) => {
    const materialsItem = document.createElement('li');
    const materialsItemText = document.createElement('p');

    materialsItem.classList.add('card__materials-item');
    materialsItemText.textContent = material;
    materialsItem.appendChild(materialsItemText);

    if (index === 0) {
      materialsItem.classList.add('card__materials-item_is-checked');
    }

    materialsItem.addEventListener('click', () => {
      materialsListEl
        .querySelector('.card__materials-item_is-checked')
        ?.classList.remove('card__materials-item_is-checked');

      materialsItem.classList.add('card__materials-item_is-checked');
    });

    materialsListEl.appendChild(materialsItem);
  });
};

const initZoomButton = (cardEl, carouselEl, images) => {
  const zoomButton = cardEl.querySelector('.card__zoom-button');

  zoomButton.addEventListener('click', () => {
    const items = images.map((src, index) => ({
      src,
      thumbSrc: src,
      caption: `Фото ${index + 1}`,
    }));

    Fancybox.show(items, {
      startIndex: carouselEl
        .querySelector('.f-carousel__slide.is-selected')
        .getAttribute('index'),
    });
  });
};

const initCardNavigation = (cardEl) => {
  const INTERACTIVE_SELECTORS = [
    '.card__zoom-button',
    '.card__like-button',
    '.card__buy-button',
    '.card__price-link',
    '.card__materials-item',
    '.f-button',
    '.f-carousel__dots',
  ].join(', ');

  cardEl.addEventListener('click', (e) => {
    if (!e.target.closest(INTERACTIVE_SELECTORS)) {
      window.open('/card', '_blank');
    }
  });
};

const createCard = (data, onLike) => {
  const cardId = data.id;
  const cardEl = getTemplate();

  const title = cardEl.querySelector('.card__title');
  const description = cardEl.querySelector('.card__description');
  const article = cardEl.querySelector('.card__article');
  const price = cardEl.querySelector('.card__price_full span');
  const priceLinear = cardEl.querySelector('.card__price_meter span');
  const likeButton = cardEl.querySelector('.card__like-button');
  const likeCounter = cardEl.querySelector('.card__like-counter');

  title.textContent = data.title;
  description.textContent = data.description;
  article.textContent = data.article;
  price.textContent = data.price;
  priceLinear.textContent = data.linear_price;
  likeCounter.textContent = data.likes;

  initMaterials(cardEl, data.materials);
  const carouselEl = initCardCarousel(cardEl, data);
  initZoomButton(cardEl, carouselEl, data.images);
  initCardNavigation(cardEl);

  likeButton.addEventListener('click', () =>
    onLike(likeButton, likeCounter, cardId)
  );

  return cardEl;
};

const likeCard = (card, likeButton, likeCounter) => {
  likeButton.classList.toggle('card__like-button_is-active');
  likeCounter.textContent = card.likes;
};

export { createCard, likeCard };
