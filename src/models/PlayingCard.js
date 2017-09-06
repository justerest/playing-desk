export default class PlayingCard {
  constructor(value, suit) {
    return Object.assign(this, { value, suit });
  }

  get cost() {
    return (
      this.value === 8 ? 'ace' :
      this.value === 7 ? 'king' :
      this.value === 6 ? 'queen' :
      this.value === 5 ? 'jack' :
      this.value + 6
    );
  }

  get name() {
    return this.cost + ' of ' + this.suit;
  }
}

// Достоинства:
//
//     «В» = «J» — Jack
//     «Д» = «Q» — Queen
//     «К» = «K» — King
//     «Т» = «A» — Ace
