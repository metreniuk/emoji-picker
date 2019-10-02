import { EmojiItem } from "../emoji-list";

export type Category =
  | "people"
  | "animals_and_nature"
  | "food_and_drink"
  | "activity"
  | "travel_and_places"
  | "objects"
  | "flags";

export type UserCategory = "recent" | Category;

export type EmojiEntry = [UserCategory, EmojiItem[]];

export type EmojiMap = {
  [category in Category]: EmojiItem[];
};

export interface ScrolledSection {
  isScrolled: boolean;
  section: { current: HTMLElement };
}
