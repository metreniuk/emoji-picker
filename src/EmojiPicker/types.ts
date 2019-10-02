export type Category =
  | "people"
  | "animals_and_nature"
  | "food_and_drink"
  | "activity"
  | "travel_and_places"
  | "objects"
  | "flags";

export type UserCategory = "recent" | Category;

export interface EmojiItem {
  id: string;
  value: string;
}

export type EmojiEntry = [UserCategory, EmojiItem[]];

export type EmojiByCategory = {
  [category in Category]: EmojiItem[];
};

export type EmojiMap = {
  [category in Category]: string;
};

export interface ScrolledSection {
  isScrolled: boolean;
  section: { current: HTMLElement };
}
