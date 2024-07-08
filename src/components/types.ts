import { ChangeEvent, SyntheticEvent } from "react";
import { AutocompleteChangeReason } from "@mui/material";

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
  sortBy: string;
  sortChange: (event: SyntheticEvent<Element, Event>, value: string | null) => void;
  getBooks: () => void;
  category: string;
  categoryChange: (event: SyntheticEvent<Element, Event>, value: string | null) => void;
  searchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type SearchProps = Omit<HeaderProps, "sortBy" | "sortChange" | "category" | "categoryChange">;
export type SortProps = Omit<HeaderProps, "getBooks" | "searchChange">;
