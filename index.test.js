import { orthodox, full } from "./index";
import { Card, Deck, Orthodox, Full, SUITS, RANKS } from "./index";

describe("PokerCards", () => {
  describe("module", () => {
    it("should all exist", () => {
      expect(typeof Card).toBe("function");
      expect(Card.name).toBe("Card");

      expect(typeof SUITS).toBe("object");
      expect(SUITS.SPADE).toBeDefined();

      expect(typeof RANKS).toBe("object");
      expect(RANKS[1]).toBeDefined();
    });

    it("deck constructors", () => {
      expect(typeof Deck).toBe("function");
      expect(Deck.name).toBe("Deck");

      expect(typeof Orthodox).toBe("function");
      expect(Orthodox.name).toBe("Orthodox");

      expect(typeof Full).toBe("function");
      expect(Full.name).toBe("Full");
    });
  });
});
