export const initFCarousel = (carouselEl) => {
  const options = {
    Autoplay: false,
    Arrows: {
      prevTpl:
        '<svg width="19" height="19"><use xlink:href="/images/sprite.svg#left-arrow"></use></svg>',
      nextTpl:
        '<svg width="19" height="19"><use xlink:href="/images/sprite.svg#right-arrow"></use></svg>',
    },
    breakpoints: {
      '(max-width: 48rem)': {
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
