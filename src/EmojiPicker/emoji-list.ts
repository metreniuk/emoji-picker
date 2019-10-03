import emojilib from "emojilib";
import { EmojiByCategory, EmojiMap } from "../EmojiPicker/types";

interface EmojiLib {
  [emojiId: string]: {
    char: string;
    category: string;
  };
}

const emojiLib: EmojiLib = emojilib.lib;

const emojiByCategory: EmojiByCategory = Object.entries(emojiLib).reduce(
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

const emojiMap = Object.entries(emojiLib).reduce(
  (acc, [id, { char }]) => ({ ...acc, [id]: char }),
  {} as EmojiMap
);

export { emojiMap, emojiByCategory };
