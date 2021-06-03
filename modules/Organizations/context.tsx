import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
} from 'react';

export interface Filters {
  page?: number;
  limit?: number;
  country?: string;
  causesIds?: string[];
}

const initialFilters: Filters = {
  page: 1,
  limit: 10,
  country: undefined,
  causesIds: [],
};

const FiltersContext = createContext<{
  filters: Filters;
  setFilters: Dispatch<React.SetStateAction<Filters>>;
  resetFilters: () => void;
}>(null);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const resetFilters = () => setFilters(initialFilters);

  return (
    <FiltersContext.Provider value={{ filters, setFilters, resetFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  const filtersContext = useContext(FiltersContext);
  if (!filtersContext) {
    throw new Error('No filtersContext found.');
  }

  return filtersContext;
}
