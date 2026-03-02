import { createCard, likeCard } from './common.blocks/card/card.js';
import { getCardsApi, likeCardApi, unlikeCardApi } from './scripts/fakeApi.js';

const cardsList = document.querySelector('.products__list');

const handleCardLike = async (likeButton, likeCounter, cardId) => {
  const isLiked = likeButton.classList.contains('card__like-button_is-active');

  try {
    const updatedCard = isLiked
      ? await unlikeCardApi(cardId)
      : await likeCardApi(cardId);
    likeCard(updatedCard, likeButton, likeCounter);
  } catch (err) {
    console.error(err);
  }
};

try {
  const cards = await getCardsApi();
  cards.forEach((card) => cardsList.append(createCard(card, handleCardLike)));
} catch (err) {
  console.error(err);
}
