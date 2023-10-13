/* eslint-disable react/prop-types */
import Masthead from '../components/Masthead';
import TourCard2 from '../components/TourCard2';
import { SNavLink } from '../components/Programs';

import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const LuxUmrePage = ({ cardDatas, headerText }) => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Lüx Umre');

  return (
    <>
      <Masthead headerText={headerText} headerColor="white" img="/umre_header.jpg" />
      {cardDatas.length ? (
        cardDatas.map((luxUmreCardData) => <TourCard2 key={luxUmreCardData.id} tourCard={luxUmreCardData} />)
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

export default LuxUmrePage;
