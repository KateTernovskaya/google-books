export type BooksState = {
  books: BookType[];
  searchInput: string;
  totalCount: number;
  startIndex: number;
  sortBy: sortByString;
  category: categoriesString;
  loading: boolean;
  error: string | null;
};

export type BookType = {
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
