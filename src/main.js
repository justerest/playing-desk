import Desk from '@/models/Desk';
import randomInt from '@/utils/randomInt';

const desk = new Desk;

window.onload = () => {
  const takedCardsContainer = document.querySelector('.b-taked-cards');

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
    .forEach(button => button
      .addEventListener('click', event => {
        if (!desk.length) {
          event.stopPropagation();
          alert('Карты кончились!');
          document.querySelector('.b-panel').classList.add('-disabled');
          confirm('Ещё раз?') && location.reload();
        }
      }));

  function insertElement(takedCard) {
    const card = document.createElement('li');
    card.classList.add(
      'playing-card',
      '-value-' + takedCard.value,
      '-suit-' + takedCard.suitNumber
    );
    card.innerHTML = takedCard.name;
    takedCardsContainer.appendChild(card);
  }
}
