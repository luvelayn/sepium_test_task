import {initMaterials} from "./card__materials.js";
import {initCarousel} from "./card__carousel.js";
import {initZoomButton} from "./card__zoom-button.js";

const getTemplate = () => {
    return document
        .querySelector("#card-template")
        .content.querySelector(".card")
        .cloneNode(true);
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

export const createCard = (
    data,
    onLike,
) => {
    const cardId = data.id;
    const cardEl = getTemplate();

    const title = cardEl.querySelector(".card__title");
    const description = cardEl.querySelector(".card__description");
    const article = cardEl.querySelector(".card__article");
    const price = cardEl.querySelector(".card__price span");
    const priceLinear = cardEl.querySelector(".card__price-linear span");
    const likeButton = cardEl.querySelector(".card__like-button");
    const likeCounter = cardEl.querySelector(".card__like-counter");

    title.textContent = data.title;
    description.textContent = data.description;
    article.textContent = data.article;
    price.textContent = data.price;
    priceLinear.textContent = data.linear_price;
    likeCounter.textContent = data.likes;

    initMaterials(cardEl, data.materials);
    const carouselEl = initCarousel(cardEl, data);
    initZoomButton(cardEl, carouselEl, data.images);
    initCardNavigation(cardEl);

    likeButton.addEventListener("click", () =>
        onLike(likeButton, likeCounter, cardId)
    );

    return cardEl;
};

export const likeCard = (card, likeButton, likeCounter) => {
    likeButton.classList.toggle("card__like-button_is-active");
    likeCounter.textContent = card.likes;
};