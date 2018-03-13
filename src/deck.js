import RANKS from "./decoration/rank";
import SUITS from "./decoration/suit";
import { flatten, shuffle } from "./utils";
import Card from "./card";

const buildNewOrthodoxCards = () =>
  flatten(
    RANKS.map(rank =>
      Object.values(SUITS).map(suit => new Card({ rank, suit }))
    )
  );

// NOTE: NOT subclassing array b/c vue.js would get rid of it as it trys to observe it, also some frameworks don't really know how to handle this.
export default class Deck {
  constructor(cards) {
    cards = cards || buildNewOrthodoxCards(); // since this is what's most interesting
    this.$cards = [...cards]; // for resetting
    this.cards = cards;
  }
  get length() {
    return this.cards.length;
  }
  shuffle() {
    this.cards = shuffle(this.cards);
  }
  reset() {
    this.cards = [...this.$cards];
  }
  pullOneOut() {
    return this.cards.pop();
  }
  placeInDeck(card) {
    this.cards.push(card);
  }
  cut() {
    const cutIndex = Math.floor(Math.random() * this.length);
    this.cards = [
      ...this.cards.slice(cutIndex),
      ...this.cards.slice(0, cutIndex)
    ];
  }

  // TODO: meta this
  indexOf(...args) {
    return this.cards.indexOf(...args);
  }
  map(...args) {
    return this.cards.map(...args);
  }
  forEach(...args) {
    return this.cards.forEach(...args);
  }
  reduce(...args) {
    return this.cards.reduce(...args);
  }
  filter(...args) {
    return this.cards.filter(...args);
  }
  find(...args) {
    return this.cards.find(...args);
  }
}

export class Orthodox extends Deck {
  constructor() {
    super(buildNewOrthodoxCards());
  }
}

export const orthodox = new Orthodox();

export class Full extends Deck {
  constructor() {
    super([
      ...buildNewOrthodoxCards(),
      new Card({ rank: "Z", suit: SUITS.SPADE }),
      new Card({ rank: "Z", suit: SUITS.HEART })
    ]);
  }
}

export const full = new Full();
