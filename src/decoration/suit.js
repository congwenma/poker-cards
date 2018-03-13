import { MagicConstant } from "../utils";
const { HEART, SPADE, DIAMOND, CLUB } = MagicConstant;
const { BLACK, RED } = MagicConstant;

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

class Suit {
  constructor(name) {
    this.name = name;
    this.color = SUIT_COLORS[this.name];
    this.icon = SUIT_ICONS[this.name];
  }
  toString() {
    return `${this.name}`;
  }
}

export default {
  HEART: new Suit(HEART),
  SPADE: new Suit(SPADE),
  DIAMOND: new Suit(DIAMOND),
  CLUB: new Suit(CLUB)
};
