export const getCardsApi = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Array.from({length: 6}, (_, index) => ({
                id: index,
                title: 'Угловая бежевая кухня на заказ с матовыми фасадами в современном стиле «Нарцисс»',
                description: 'Описание товара',
                article: '4607',
                materials: ['ПВХ', 'Эмаль', 'Пластик', 'Массив'],
                price: '515 700',
                linear_price: '30 000',
                images: Array(6).fill('images/photo.png'),
                likes: '57',
            })));
        }, 300);
    });
}

export const likeCardApi = async (cardId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: cardId,
                title: 'Угловая бежевая кухня на заказ с матовыми фасадами в современном стиле «Нарцисс»',
                description: 'Описание товара',
                article: '4607',
                price: '515 700',
                linear_price: '30 000',
                images: Array(6).fill('images/photo.png'),
                likes: '58',
            });
        }, 300);
    });
}

export const unlikeCardApi = async (cardId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: cardId,
                title: 'Угловая бежевая кухня на заказ с матовыми фасадами в современном стиле «Нарцисс»',
                description: 'Описание товара',
                article: '4607',
                price: '515 700',
                linear_price: '30 000',
                images: Array(6).fill('images/photo.png'),
                likes: '57',
            });
        }, 300);
    });
}