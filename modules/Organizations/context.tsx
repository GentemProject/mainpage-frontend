import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
} from 'react';

export interface Filters {
  limit?: number;
  causesIds?: string[];
}

const initialFilters: Filters = {
  limit: 10,
  causesIds: [],
};

const FiltersContext = createContext<{
  filters: Filters;
  setFilters: Dispatch<React.SetStateAction<Filters>>;
}>(null);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
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
