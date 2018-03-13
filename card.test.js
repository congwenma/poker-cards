import { ORTHODOX_DECK, DECK } from "./card";
describe("Cards", () => {
  describe("ORTHODOX_DECK", () => {
    it("should have 52 cards", () => {
      expect(ORTHODOX_DECK.length).toBe(52);
    });
  });

  describe("DECK", () => {
    it("should have 54 cards", () => {
      expect(DECK.length).toBe(54);
    });
  });
});
