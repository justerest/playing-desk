document.querySelector('button').onclick = takeCard;
const takedCardsContainer = document.querySelector('.taked-cards');

const CARD_SUITS = ['clubs', 'diamonds', 'hearts', 'spades'];
const DESK_LENGTH = 36;

const groupLength = DESK_LENGTH / 4;

const desk = new Array(DESK_LENGTH)
  .fill()
  .map((card, i) => {
    const value = i % groupLength;
    return {
      value,
      cost: (
        value === 8 ? 'Ace' :
        value === 7 ? 'King' :
        value === 6 ? 'Queen' :
        value === 5 ? 'Jack' :
        value + 6
      ),
      suit: CARD_SUITS[parseInt(i / groupLength)]
    };
  });


function takeCard() {
  if (!desk.length) {
    alert('Карты кончились!');
    return;
  }

  const [takedCard] = desk.splice(getRandomInt(0, desk.length), 1);
  const card = document.createElement('li');
  card.classList.add(takedCard.cost, takedCard.suit);
  card.innerHTML = JSON.stringify(takedCard);
  card.style.backgroundPositionX = '800px';
  card.style.backgroundPositionY = '1100px';
  takedCardsContainer.appendChild(card);
}

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Масти:
//
//     Трефы — clubs
//     Бубны — diamonds
//     Червы — hearts
//     Пики — spades
//
// Достоинства:
//
//     «В» = «J» — Jack
//     «Д» = «Q» — Queen
//     «К» = «K» — King
//     «Т» = «A» — Ace
