import { useQuery } from '@tanstack/react-query';
import { getForeignTours } from '../services/apiForeignTours';

export function useForeignTours() {
  const { isLoading, data: foreignTours, error } = useQuery({
    queryKey: ['foreigns'],
    queryFn: getForeignTours,
  });

  return { isLoading, foreignTours, error };
}

export function useForeignTour(periotId) {
  const { isLoading, data: foreignTours, error } = useQuery({
    queryKey: ['foreigns'],
    queryFn: getForeignTours,
  });

  const foreignTour = foreignTours.length && foreignTours.find(foreignTour => foreignTour.periotId === periotId);

  return {isLoading, foreignTour, error};
}