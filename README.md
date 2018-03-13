# Poker Cards

`poker-cards` is a module that seeks to provide an abstract deck of playing cards for bootstraping a game or algorithmic purpose.

# Examples

### Use prebuilt deck

```js
import { orthodox } from "poker-cards";

class BlackJack {
  constructor() {
    this.deck = orthodox;
    // ...
  }
  // ...
}
```

### Build your own deck

```js
import { Orthodox, Full, Card, Deck, SUITS, RANKS } from "poker-cards";
class BlackJack {
  constructor() {
    this.deck = new Orthodox();
    this.deck = new Deck([
      new Card({ suit: SUITS.SPADE, rank: RANKS[1] }),
      ...
    ]);
  }
}
```

#### Console

```js
orthodox.cards; // [Card 1 Spade, Card 1 Heart, ....]
[orthodox.length, full.length] // [52, 54], full deck contains Jokers
orthodox instanceOf Orthodox; // true
Deck.isPrototypeOf(Orthodox); // true
```

### from `Deck` instances:

* `cards` - cards in the current deck
* `length` - length of cards in deck
* `shuffle()`
* `reset()` - reset mutations done to the deck
* `pullOneOut()` - pop last card
* `placeInDeck(card)` - push a card into deck
* `cut()`
* Array methods delegation: `indexOf, map, forEach, reduce, filter, find`

### from `Card` instances:

* `suit` - <Suit> object
* `rank` - <Rank> object, A,2,3...K
* `isA({ suit, rank })` - return true if card matches
