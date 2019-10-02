import { EmojiByCategory, EmojiMap } from "../EmojiPicker/types";

const emojilib: EmojiLib = require("emojilib").lib;

interface EmojiLib {
  [emojiId: string]: {
    char: string;
    category: string;
  };
}

export const categories = [
  "people",
  "animals_and_nature",
  "food_and_drink",
  "activity",
  "travel_and_places",
  "objects",
  "flags",
];

const emojiByCategory: EmojiByCategory = Object.entries(emojilib).reduce(
  (categories, [id, meta]) => {
    const { category, char } = meta;

    if (categories.hasOwnProperty(category)) {
      categories[category].push({ id, value: char });
    }

    return categories;
  },
  {
    people: [],
    animals_and_nature: [],
    food_and_drink: [],
    activity: [],
    travel_and_places: [],
    objects: [],
    flags: [],
  }
);

const emojiMap = Object.entries(emojilib).reduce(
  (acc, [id, { char }]) => ({ ...acc, [id]: char }),
  {} as EmojiMap
);

export interface EmojiItem {
  id: string;
  value: string;
}

export { emojiMap };

export default emojiByCategory;
