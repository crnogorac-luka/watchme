export type SortOption = { label: string; value: string };

export enum SortOptions {
    POPULARITY_ASC = "popularity.asc",
    POPULARITY_DESC = "popularity.desc",
    RELEASE_DATE_ASC = "release_date.asc",
    RELEASE_DATE_DESC = "release_date.desc",
    ORIGINAL_TITLE_ASC = "original_title.asc",
    ORIGINAL_TITLE_DESC = "original_title.desc",
  };
  
  export const sortOptionsArray: SortOption[] = [
    { value: SortOptions.POPULARITY_ASC, label: "Popularity (asc.)" },
    { value: SortOptions.POPULARITY_DESC, label: "Popularity (desc.)" },
    { value: SortOptions.RELEASE_DATE_ASC, label: "Release Date (asc.)" },
    { value: SortOptions.RELEASE_DATE_DESC, label: "Release Date (desc.)" },
    { value: SortOptions.ORIGINAL_TITLE_ASC, label: "Original Title (asc.)" },
    { value: SortOptions.ORIGINAL_TITLE_DESC, label: "Original Title (desc.)" }
  ];