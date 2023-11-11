import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

import Masthead from '../components/Masthead';
import ForeignToursTable from '../components/ForeignToursTable';

const ForeignToursPage = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Yurtdışı Turları');

  return (
    <>
      <Masthead headerText="Yurtdışı Turları" img="/yurtdisi_header.jpg" />
      <div style={{ width: '90%', margin: '40px auto', textAlign: 'center' }}>
        <ForeignToursTable />
      </div>
    </>
  );
};

export default ForeignToursPage;
