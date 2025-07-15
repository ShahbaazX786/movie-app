import type { Dispatch, SetStateAction } from "react";

export type searchProps = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

export type changeEvent = React.ChangeEvent<HTMLInputElement>;
