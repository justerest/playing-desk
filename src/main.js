import Desk from '@/models/Desk';

const desk = new Desk;

window.onload = () => {
  const takenCardsContainer = document.querySelector('#takenCardsContainer');

  document
    .querySelector('button#takeRandomCard')
    .addEventListener('click', () => insertElement(desk.takeRandomCard()));

  document
    .querySelector('button#takeCard')
    .addEventListener('click', () => insertElement(desk.takeCard()));

  document
    .querySelector('button#shuffleDesk')
    .addEventListener('click', () => desk.shuffle());

  document
    .querySelectorAll('button')
    .forEach(button => button.addEventListener('click', event => {
      if (!desk.length) {
        event.stopPropagation();
        document.querySelector('.b-panel').classList.add('-disabled');
        setTimeout(alert('Карты кончились!'));
        setTimeout(() => confirm('Ещё раз?') && location.reload());
      }
    }));

  function insertElement(takedCard) {
    const card = document.createElement('li');
    card.classList.add(
      'b-view__playing-card',
      '-cost-' + takedCard.cost,
      '-suit-' + takedCard.suit
    );
    card.innerHTML = takedCard.name;
    takenCardsContainer.appendChild(card);
  }
};
