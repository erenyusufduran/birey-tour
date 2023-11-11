import { useQuery } from '@tanstack/react-query';
import { getForeignTours } from '../services/apiForeignTours';

export function useForeignTours() {
  const { isLoading, data: foreignTours, error } = useQuery({
    queryKey: ['foreigns'],
    queryFn: getForeignTours,
  });

  return { isLoading, foreignTours, error };
}
