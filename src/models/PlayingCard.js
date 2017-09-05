import { CARD_SUITS } from '@/constants';

export default class PlayingCard {
  constructor(value, suit) {
    return Object.assign(this, { value, suit });
  }

  get cost() {
    return (
      this.value === 8 ? 'Ace' :
      this.value === 7 ? 'King' :
      this.value === 6 ? 'Queen' :
      this.value === 5 ? 'Jack' :
      this.value + 6
    );
  }

  get suitNumber() {
    return CARD_SUITS.findIndex(suit => suit === this.suit);
  }
};

// Достоинства:
//
//     «В» = «J» — Jack
//     «Д» = «Q» — Queen
//     «К» = «K» — King
//     «Т» = «A» — Ace
