export const initZoomButton = (cardEl, carouselEl, images) => {
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
