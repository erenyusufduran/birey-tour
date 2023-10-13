import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
