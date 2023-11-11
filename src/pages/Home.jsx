import Carousel from '../components/Carousel';
import Programs from '../components/Programs';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useForeignTours } from '../hooks/useForeignTours';

export default function Home() {
  const { pathname } = useLocation();
  useScrollToTop(pathname);
  useForeignTours();
  
  return (
    <div className="w-100 h-50">
      <Carousel />
      <Programs />
    </div>
  );
}
