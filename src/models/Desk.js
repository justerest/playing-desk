import PlayingCard from '@/models/PlayingCard';
import randomInt from '@/utils/randomInt';
import { CARD_SUITS, DESK_LENGTH, GROUP_LENGTH } from '@/constants';

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

    this.takeCard = function() {
      return this.splice(0, 1)[0];
    }

    this.takeRandomCard = function() {
      return this.splice(randomInt(0, this.length), 1)[0];
    }

    this.shuffle = function() {
      return this.sort(() => randomInt(-1, 2));
    }
  }
}
