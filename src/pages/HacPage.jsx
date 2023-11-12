/* eslint-disable react/prop-types */
import Masthead from '../components/Masthead';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

import HacLuxTourCard from '../components/HacLux';
import HacEkonomik from '../components/HacEkonomik';
import { ExtraText } from './UmrePage';

const HacPage = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Hac');

  let extraText = (
    <ExtraText className="mx-1">
      Hac için Pasaport Geçerlilik Tarihi 31 Aralık 2024.
      <br />
      <span>31 Aralık 2024 ve Öncesi Pasaportlar Kabul Edilmeyecektir.</span>
    </ExtraText>
  );

  return (
    <>
      <Masthead headerText="HAC" headerColor="#fff" img="/hac_header.jpg" />
      {extraText && <h2 className="text-center mt-5">{extraText}</h2>}
      {/* {[].length ? (
        [].map((cardData) => <TourCard key={cardData.id} tourCard={cardData} />)
      ) : (
        <div className="conteiner text-center mt-5">
          {extraText && <h2 className="text-center mt-5">{extraText}</h2>}

          <SNavLink to="/">
            <h4 style={{ cursor: 'pointer', color: '#333' }}>Diğer turlarımıza göz atmak için tıkla</h4>
          </SNavLink>
        </div>
      )} */}
      <HacEkonomik />
      <HacLuxTourCard />
    </>
  );
};

export default HacPage;
