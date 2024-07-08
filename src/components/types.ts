import { ChangeEvent, SyntheticEvent } from "react";

export type Book = {
  id: string;
  volumeInfo: {
    authors?: string[];
    title?: string;
    imageLinks?: {
      smallThumbnail: string;
    };
    description?: string;
    categories?: string[];
  };
};

export type categoriesString = "All" | "Art" | "Biography" | "Computers" | "History" | "Medical" | "Poetry";
export type sortByString = "relevance" | "newest";

export type HeaderProps = {
  sortBy: sortByString;
  sortChange: (event: SyntheticEvent<Element, Event>, value: sortByString | null) => void;
  getBooks: () => void;
  category: categoriesString;
  categoryChange: (event: SyntheticEvent<Element, Event>, value: categoriesString | null) => void;
  searchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  setError: (error: string | null) => void;
};

export type SearchProps = Omit<HeaderProps, "sortBy" | "sortChange" | "category" | "categoryChange">;
export type SortProps = Omit<HeaderProps, "getBooks" | "searchChange" | "error" | "setError">;
