export default class PlayingCard {
  constructor(value, suit) {
    return Object.assign(this, { value, suit });
  }

  get cost() {
    return (
      this.value === 14 ? 'ace' :
      this.value === 13 ? 'king' :
      this.value === 12 ? 'queen' :
      this.value === 11 ? 'jack' :
      this.value
    );
  }

  get name() {
    return this.cost + ' of ' + this.suit;
  }

  createElement(tag = 'li') {
    const element = document.createElement(tag);
    element.classList.add(
      'e-playing-card',
      '-cost-' + this.cost,
      '-suit-' + this.suit
    );
    element.innerHTML = this.name;
    return element;
  }
}

// Достоинства:
//
//     «В» = «J» — Jack
//     «Д» = «Q» — Queen
//     «К» = «K» — King
//     «Т» = «A» — Ace
