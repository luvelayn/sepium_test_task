export const initMaterials = (cardEl, materials) => {
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
