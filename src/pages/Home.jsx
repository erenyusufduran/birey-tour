import Carousel from '../components/Carousel';
import Programs from '../components/Programs';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useForeignTours } from '../hooks/useForeignTours';

const imageData = [
  {
    headerText: 'Ramazan Umre Programlarımız Açıklanmıştır',
    headerColor: '#000',
    pText: 'RAMAZAN AYI UMRE KAMPANYALARIMIZA KATILMAK İÇİN ACELE EDİN.',
    img: 'home_header.jpg',
    to: '/ramazan-umresi/servisli-oteller',
  },
  {
    headerText: 'Şevval Umre Programlarımız Açıklanmıştır',
    headerColor: '#000',
    pText: 'ŞEVVAL AYI UMRE KAMPANYALARIMIZA KATILMAK İÇİN ACELE EDİN.',
    img: 'home_2_headers.jpg',
    to: '/sevval-umresi/umre',
  },
  {
    headerText: 'Temmuz / Ağustos Umre Programlarımız Açıklanmıştır',
    headerColor: '#000',
    pText: 'TEMMUZ / AĞUSTOS UMRE KAMPANYALARIMIZA KATILMAK İÇİN ACELE EDİN.',
    img: 'home_header.jpg',
    to: '/yaz-umresi/umre',
  },
];

export default function Home() {
  const { pathname } = useLocation();
  useScrollToTop(pathname);
  useForeignTours();
  
  return (
    <div className="w-100 h-50">
      <Carousel imageData={imageData} />
      <Programs />
    </div>
  );
}
