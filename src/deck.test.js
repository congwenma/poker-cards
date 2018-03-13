import Deck, { Orthodox, Full, orthodox, full } from "./deck";
import SUITS from "./decoration/suit";
import RANKS from "./decoration/rank";

const expand = n => [...Array(n)];

const oddsOf = results =>
  results.reduce((accu, oddsOfOne) => {
    return {
      ...accu,
      [oddsOfOne]: accu[oddsOfOne] ? accu[oddsOfOne] + 1 : 1
    };
  }, {});

describe("deck", () => {
  describe("orthodox", () => {
    it("should have 52 cards", () => {
      expect(orthodox.length).toBe(52);
    });
  });

  describe("full", () => {
    it("should have 54 cards", () => {
      expect(full.length).toBe(54);
    });
  });

  describe("Deck", () => {
    let deck;
    beforeEach(() => (deck = new Deck()));

    describe("#reset", () => {
      it("should get back all the cards", () => {
        expect(deck.length).toBe(52);
        deck.pullOneOut();
        expect(deck.length).toBe(51);
        deck.reset();
        expect(deck.length).toBe(52);
      });

      describe("full deck will reset to full deck", () => {
        const deck = new Full();
        expect(deck.length).toBe(54);
        deck.pullOneOut();
        expect(deck.length).toBe(53);
        deck.reset();
        expect(deck.length).toBe(54);
      });
    });

    describe("shuffle", () => {
      it("should have the same chance of leaving Ace Spades everywhere", () => {
        const aceOfSpades = deck.find(
          card => card.suit === SUITS.SPADE && card.rank === RANKS[0]
        );

        const positions = expand(10000).map(n => {
          deck.shuffle();
          return deck.indexOf(aceOfSpades);
        });
        // around 10000 / 52 === 192
        // console.log(oddsOf(positions));
      });
    });

    describe("cut", () => {
      it("should swap the positions of two halves", () => {
        // console.log(deck.cards.map(c => c.toString()));
        deck.cut();
        // console.log(deck.cards.map(c => c.toString()));
      });
    });
  });
});
