import PlayingCard from '@/models/PlayingCard';
import randomInt from '@/utils/randomInt';
import { CARD_SUITS, DESK_LENGTH } from '@/store/constants';

const GROUP_LENGTH_DEFAULT = DESK_LENGTH / CARD_SUITS.length;

export default class Desk extends Array {
  constructor(length = DESK_LENGTH) {
    const groupLength = length / CARD_SUITS.length;
    if (groupLength !== parseInt(groupLength)) {
      throw new Error('Неправильный набор карт!');
    }

    super(
      ...new Array(length)
      .fill()
      .map((elem, i) => {
        let value = i % groupLength;
        value += 2;
        value += GROUP_LENGTH_DEFAULT - groupLength;
        const suit = CARD_SUITS[parseInt(i / groupLength)];
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
