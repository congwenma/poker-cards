import RANKS from "./rank";
import SUITS from "./suit";
import { flatten } from "./utils";
import Card from "./card";

// NOTE: NOT subclassing array b/c vue.js would get rid of it as it trys to observe it, also some frameworks don't really know how to handle this.
export default class Deck {
  constructor(cards) {
    this.$cards = cards; // for resetting
    this.cards = cards;
  }
  get length() {
    return this.cards.length;
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
  placeInDeck(card) {
    this.cards.push(card);
  }
  cut() {
    const cutIndex = Math.floor(Math.random() * this.length);
    this.cards = [this.cards.slice(cutIndex), ...this.cards.slice(0, cutIndex)];
  }
}

export const orthodox = new Deck(
  flatten(
    RANKS.map(rank =>
      Object.values(SUITS).map(suit => new Card({ rank, suit }))
    )
  )
);

export const full = new Deck([
  ...orthodox.cards,
  // Jokers
  new Card({ rank: "Z", suit: SUITS.SPADE }),
  new Card({ rank: "Z", suit: SUITS.HEART })
]);
