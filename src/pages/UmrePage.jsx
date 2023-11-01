/* eslint-disable react/prop-types */
import styled from 'styled-components';

import Masthead from '../components/Masthead';
import TourCard from '../components/TourCard';
import { SNavLink } from '../components/Programs';

import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

export const ExtraText = styled.span`
  font-weight: bold;
  color: red;
  font-size: 1.4em !important;

  & span {
    margin-top: -20px;
    font-size: 0.5em !important;
    color: #000;

    @media screen and (max-width: 500px) {
      font-size: 0.4em !important;
    }

    @media screen and (max-width: 500px) {
      font-size: 0.4em !important;
    }

    @media screen and (max-width: 360px) {
      font-size: 0.35em !important;
    }
  }
`;

const UmrePage = ({ cardDatas, headerText }) => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Umre');

  let extraText;
  switch (headerText) {
    case 'Sömestr Umresi' || 'Sömestr Lüx Umre':
      extraText = (
        <ExtraText>
          15 Aralık 2023&apos;e kadar olan ödemelerde 100$ indirim.
          <br />
          <span>(Bu tarihten sonra fiyatlarımız değişiklik gösterecektir.)</span>
        </ExtraText>
      );
      break;
    case 'Şevval Umresi' || 'Şevval Lüx Umre':
      extraText = (
        <ExtraText className="mx-1">
          Fiyatlar 1 Şubat 2024&apos;e kadar geçerlidir.
          <br />
          <span>(Bu tarihten sonra fiyatlarımız değişiklik gösterecektir.)</span>
        </ExtraText>
      );
      break;
    case 'Ramazan Umresi':
      extraText = (
        <ExtraText className="mx-1">
          Fiyatlar üstlerindeki ödeme tarihlerine kadar geçerlidir.
          <br />
          <span>(Ödeme tarihlerinden sonra fiyatlarımız değişiklik gösterecektir.)</span>
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
        cardDatas.map((umreCardData) => <TourCard key={umreCardData.id} tourCard={umreCardData} />)
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

export default UmrePage;
