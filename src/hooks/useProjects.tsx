import { useState } from 'react';

export const useProjects = (initialFilter: string = 'all') => {
  const [filter, setFilter] = useState<string>(initialFilter);
  return { filter, setFilter };
};
