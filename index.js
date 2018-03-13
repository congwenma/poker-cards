const flatten = arrays => {
  return arrays.reduce((accu, cur) => accu.concat(cur), []);
};
const BLACK = "#333";
const RED = "#c66";

const MagicGetter = new Proxy(
  {},
  {
    get: (_, name) => name
  }
);

const shuffle = function(arr, { lo, hi, mutable = false } = {}) {
  if (!mutable) arr = arr.slice(lo, hi);

  var len = arr.length;
  var temp;
  lo = lo || 0;
  hi = hi || arr.length;
  if (len <= 1) return arr;
  for (var i = lo; i < hi; i++) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    temp = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

const { HEART, SPADE, DIAMOND, CLUB } = MagicGetter;
const RANKS = "123456789XJQK".split("");
const SUITS = [HEART, SPADE, DIAMOND, CLUB];
const SUIT_ICONS = {
  SPADE: "&#9824;",
  HEART: "&#9829;",
  CLUB: "&#9827;",
  DIAMOND: "&#9830;"
};
const SUIT_COLORS = {
  SPADE: BLACK,
  HEART: RED,
  CLUB: BLACK,
  DIAMOND: RED
};

export const getSuitIcon = suit => SUIT_ICONS[suit];
export const getSuitColor = suit => SUIT_COLORS[suit];

export default class Card {
  constructor({ suit, rank }) {
    this.suit = suit;
    this.rank = rank;
    this.points = isNaN(+rank) ? 10 : +rank;
  }
}
// NOTE: can't subclass array b/c vue.js would get rid of it as it trys to observe it.
export class Deck {
  constructor(cards) {
    this.$cards = cards; // for resetting
    this.cards = cards;
  }
  shuffle() {
    this.cards = shuffle(this.cards);
  }
  reset() {
    this.cards = this.$cards;
  }
  pullOneOut() {
    return this.cards.pop();
  }
}

export const ORTHODOX_DECK = new Deck(
  flatten(RANKS.map(rank => SUITS.map(suit => new Card({ rank, suit }))))
);

export const DECK = new Deck([
  ...ORTHODOX_DECK.cards,
  // Jokers
  new Card({ rank: "Z", suit: "RED" }),
  new Card({ rank: "Z", suit: "BLACK" })
]);

// TODO:
// - shuffle
// - length
// - pick one from top
// - pick one bottom
// - put a card back randomly
// - cut
// - export into an npm module
