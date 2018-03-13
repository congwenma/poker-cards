import { MagicConstant, flatten } from "./utils";

export default class Card {
  constructor({ suit, rank }) {
    this.suit = suit;
    this.rank = rank;
    this.points = isNaN(+rank) ? 10 : +rank;
  }

  isA({ suit, rank }) {
    return this.suit === suit && this.rank === rank;
  }
}
