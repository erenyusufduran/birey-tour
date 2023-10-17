/* eslint-disable react/prop-types */
import Masthead from '../components/Masthead';
import TourCard2 from '../components/TourCard2';
import { SNavLink } from '../components/Programs';
import { ExtraText } from './UmrePage';

import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const LuxUmrePage = ({ cardDatas, headerText }) => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Lüx Umre');

  let extraText;
  switch (headerText) {
    case 'Sömestr Lüx Umre':
      extraText = <ExtraText>15 Aralık 2023&apos;e kadar olan ödemelerde 100$ indirim.</ExtraText>;
      break;
    case 'Şevval Lüx Umre':
      extraText = (
        <ExtraText className="mx-1">
          Fiyatlar 1 Şubat 2024&apos;e kadar geçerlidir.
          <br />
          <span>(Bu tarihten sonra fiyatlarımız değişiklik gösterecektir.)</span>
        </ExtraText>
      );
      break;
    default:
      extraText = false;
      break;
  }

  return (
    <>
      <Masthead headerText={headerText} headerColor="white" img="/umre_header.jpg" />
      {extraText && <h2 className="text-center mt-5">{extraText}</h2>}
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
