// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');

function addCard(array) {
    initialCards.forEach(function(elem) {
        const cardTemplate = document.querySelector('#card-template').content;
        const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
        cardElement.querySelector('.card__title').textContent = elem.name;
        cardElement.querySelector('.card__image').src = elem.link;
        cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
        placesList.append(cardElement);
    })
}

addCard(initialCards);

function deleteCard() {
    const cardItem = content.querySelector('.places__item');
    cardItem.remove();
}
