/* eslint-disable react/prop-types */
import Masthead from '../components/Masthead';
import TourCard2 from '../components/TourCard2';
import { SNavLink } from '../components/Programs';
import { hacCardDatas } from '../data/hac';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const HacPage = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Hac');

  return (
    <>
      <Masthead headerText="HAC" headerColor="#fff" img="/hac_header.jpg" />
      {hacCardDatas.length ? (
        hacCardDatas.map((cardData) => <TourCard2 key={cardData.id} tourCard={cardData} />)
      ) : (
        <div className="conteiner text-center mt-5">
          <h2>Şu anda herhangi bir tur bulunmamakta</h2>
          <SNavLink to="/">
            <h4 style={{ cursor: 'pointer', color: '#333' }}>Diğer turlarımıza göz atmak için tıkla</h4>
          </SNavLink>
        </div>
      )}
    </>
  );
};

export default HacPage;
