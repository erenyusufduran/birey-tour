/* eslint-disable react/prop-types */
import Masthead from '../components/Masthead';
import TourCard2 from '../components/TourCard2';
import { SNavLink } from '../components/Programs';

import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const LuxUmrePage = ({ cardDatas, headerText }) => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Lüx Umre');

  let extraText;
  switch (headerText) {
    case 'Sömestr Umresi':
      extraText = (
        <span>
          15 Aralık 2023&apos;e kadar olan ödemelerde <span className="fw-bold">100$</span> indirim.
        </span>
      );
      break;
    case 'Şevval Lüx Umre':
      extraText = <span>Fiyatlar 1 Şubat 2024&apos;e kadar geçerlidir.</span>;
      break;
    default:
      extraText = false;
      break;
  }

  return (
    <>
      <Masthead headerText={headerText} headerColor="white" img="/umre_header.jpg" />
      {extraText && <h2 className="text-center mt-5">{extraText}</h2>}

      {headerText === 'Sömestr Lüx Umre' && (
        <h2 className="text-center mt-5">
          15 Aralık 2023&apos;e kadar olan ödemelerde <span className="fw-bold">100$</span> indirim.
        </h2>
      )}
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
