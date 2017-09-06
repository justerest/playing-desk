import PlayingCard from '@/models/PlayingCard';
import randomInt from '@/utils/randomInt';
import { CARD_SUITS, DESK_LENGTH, GROUP_LENGTH } from '@/store/constants';

export default class Desk extends Array {
  constructor() {
    super(
      ...new Array(DESK_LENGTH)
      .fill()
      .map((elem, i) => {
        const value = i % GROUP_LENGTH;
        const suit = CARD_SUITS[parseInt(i / GROUP_LENGTH)];
        return new PlayingCard(value, suit);
      })
    );

    // REVIEW:
    // Не получается определить методы класса в стандартном порядке.
    // Наверно, потому что это массив, а не объект.

    Object.assign(this, {
      takeCard() {
        return this.splice(0, 1)[0];
      },

      takeRandomCard() {
        return this.splice(randomInt(0, this.length), 1)[0];
      },

      shuffle() {
        return this.sort(() => randomInt(-1, 2));
      }
    });
  }
}
