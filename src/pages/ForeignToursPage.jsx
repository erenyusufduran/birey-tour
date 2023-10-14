import Masthead from '../components/Masthead';
import TourCard2 from '../components/TourCard2';
import { SNavLink } from '../components/Programs';
import { foreignCardDatas } from '../data/foreignTour';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ForeignToursPage = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, "Yurtdışı Turları");

  return (
    <>
      <Masthead headerText="Yurtdışı Turları" img="/abroad_header.jpg" />
      {foreignCardDatas.length ? (
        foreignCardDatas.map((cardData) => <TourCard2 key={cardData.id} tourCard={cardData} />)
      ) : (
        <div className="conteiner text-center mt-5 ">
          <h2>Şu anda herhangi bir tur bulunmamakta</h2>
          <SNavLink to="/">
            <h4 style={{ cursor: 'pointer', color: '#333' }}>Diğer turlarımıza göz atmak için tıkla</h4>
          </SNavLink>
        </div>
      )}
    </>
  );
};

export default ForeignToursPage;
