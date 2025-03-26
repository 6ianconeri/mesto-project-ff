const content = document.querySelector('.content');
const placesList = content.querySelector('.places__list');

function createCard(name, link, deleteCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');
    const cardImageElement = cardElement.querySelector('.card__image');
    const cardTitleElement = cardElement.querySelector('.card__title');
    cardTitleElement.textContent = name;
    cardImageElement.src = link;
    cardImageElement.alt = name;
    cardDeleteButton.addEventListener('click', function () {
        deleteCard(cardElement);
    });
    return cardElement;
}

for(let i = 0; i < initialCards.length; i++) {
    placesList.append(createCard(initialCards[i].name, initialCards[i].link, deleteCard));
}

function deleteCard(card) {
    card.remove();
}
