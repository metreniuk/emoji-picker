const emojilib: EmojiLib = require("emojilib").lib;
const fs = require("fs");

interface EmojiLib {
  [emojiId: string]: {
    char: string;
    category: string;
  };
}

const categories = [
  "people",
  "animals_and_nature",
  "food_and_drink",
  "activity",
  "travel_and_places",
  "objects",
  "flags"
];

const emojiShape: EmojiMap = Object.entries(emojilib).reduce(
  (acc, [id, meta]) => {
    const { category, char } = meta;

    if (!categories.includes(category)) {
      return acc;
    }

    const emoji = { id, value: char };
    if (acc[category]) {
      acc[category].push(emoji);
    } else {
      acc[category] = [emoji];
    }

    return acc;
  },
  {}
);

export interface EmojiItem {
  id: string;
  value: string;
}

export interface EmojiMap {
  [category: string]: EmojiItem[];
}

export default emojiShape;
