import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import NavBar from './Navbar';
import Footer from './Footer';

const AppLayout = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <NavBar expanded={expanded} setExpanded={setExpanded} />
      <main onClick={() => setExpanded(false)}>
        <Outlet />
      </main>
      <Footer onClick={() => setExpanded(false)} />
    </>
  );
};

export default AppLayout;
