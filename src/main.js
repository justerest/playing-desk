import Desk from '@/models/Desk';

const desk = new Desk;

window.onload = () => {
  const takenCardsContainer = document.querySelector('#takenCardsContainer');

  document
    .querySelector('button#takeCard')
    .addEventListener('click', () => {
      const cardHtml = desk.takeCard().createElement();
      takenCardsContainer.appendChild(cardHtml);
    });

  document
    .querySelector('button#takeRandomCard')
    .addEventListener('click', () => {
      const cardHtml = desk.takeRandomCard().createElement();
      takenCardsContainer.appendChild(cardHtml);
    });

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
};
