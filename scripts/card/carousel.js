export const initCarousel = (cardEl, data) => {
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

  const options = {
    Autoplay: false,
    Arrows: {
      prevTpl:
        '<svg width="19" height="19"><use xlink:href="/images/sprite.svg#left-arrow"></use></svg>',
      nextTpl:
        '<svg width="19" height="19"><use xlink:href="/images/sprite.svg#right-arrow"></use></svg>',
    },
    breakpoints: {
      '(max-width: 768px)': {
        Autoplay: {
          pauseOnHover: false,
          showProgressbar: false,
          timeout: 3000,
        },
        Arrows: false,
      },
    },
    infinite: true,
  };

  const plugins = { Lazyload, Dots, Arrows, Autoplay };

  Carousel(carouselEl, options, plugins).init();

  return carouselEl;
};
