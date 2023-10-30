import Masthead from '../components/Masthead';
import TourCard from '../components/TourCard';
import { SNavLink } from '../components/Programs';
import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
// import { useEffect } from 'react';

const ForeignToursPage = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, "Yurtdışı Turları");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetch("https://www.hunkarturizm.com/turbulteni")
  //     console.log(data);
  //   }
  //   fetchData();
  // }, [])

  return (
    <>
      <Masthead headerText="Yurtdışı Turları" img="/yurtdisi_header.jpg" />
      {[].length ? (
        [].map((cardData) => <TourCard key={cardData.id} tourCard={cardData} />)
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
