import { MagicConstant, flatten } from "./utils";

const BLACK = "#333";
const RED = "#c66";

export const getSuitIcon = suit => SUIT_ICONS[suit];
export const getSuitColor = suit => SUIT_COLORS[suit];

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

// TODO:
// - shuffle
// - length
// - pick one from top
// - pick one bottom
// - put a card back randomly
// - cut
// - export into an npm module
