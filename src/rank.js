const RANKS = "A23456789XJQK".split("");

const RANK_NUMERICALS = {
  A: 1,
  ...[2, 3, 4, 5, 6, 7, 8, 9].reduce(
    (accu, key) => ({ ...accu, key: +key }),
    {}
  ),
  X: 10,
  J: 11,
  Q: 12,
  K: 13,
  Z: 0
};

const RANK_DISPLAY = {
  ...["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"].reduce(
    (accu, key) => ({ ...accu, key: String(key) }),
    {}
  ),
  X: "10",
  Z: "JOKER"
};

class Rank {
  constructor(name) {
    this.name = name;
    this.numerical = RANK_NUMERICALS[this.name];
    this.display = RANK_DISPLAY[this.name];
  }
}

export default RANKS.map(rankValue => new Rank(rankValue));
