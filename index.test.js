import { orthodox, full } from "./index";
import { Card, Deck, SUITS, RANKS } from "./index";

describe("PokerCards", () => {
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
});

describe("module", () => {
  it("should all exist", () => {
    expect(typeof Card).toBe("function");
    expect(Card.name).toBe("Card");

    expect(typeof Deck).toBe("function");
    expect(Deck.name).toBe("Deck");

    expect(typeof SUITS).toBe("object");
    expect(SUITS.SPADE).toBeDefined();

    expect(typeof RANKS).toBe("object");
    expect(RANKS[1]).toBeDefined();
  });
});
