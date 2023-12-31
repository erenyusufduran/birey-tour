/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 !important;
    gap: 15px !important;
  }
`;

const StyledNavbar = styled(Navbar)`
  z-index: 1000;
`;

const NavItems = styled.button`
  padding: 8px 8px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background-color: transparent;
`;

const StyledNavDropdown = styled(NavDropdown)`
  padding: 8px 8px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background-color: transparent;
`;

const StyledLinkComp = ({ to, setExpanded, children }) => {
  const navigate = useNavigate();

  return (
    <Nav.Link
      style={{ color: '#000' }}
      onClick={() => {
        navigate(to, { replace: true });
        setExpanded(false);
      }}
    >
      <NavItems style={{ color: '#000' }}>{children}</NavItems>
    </Nav.Link>
  );
};

const StyledDropdownComp = ({ to, setExpanded, children }) => {
  const navigate = useNavigate();

  return (
    <NavDropdown.Item
      style={{ color: '#000' }}
      onClick={() => {
        navigate(to, { replace: true });
        setExpanded(false);
      }}
    >
      <NavItems style={{ color: '#000' }}>{children}</NavItems>
    </NavDropdown.Item>
  );
};

const TabletNoneAndMobilDisplay = styled.span`
  @media screen and (max-width: 1220px) and (min-width: 1200px) {
    display: none;
  }
`;

// const LotteryButton = styled(NavItems)`
//   @media screen and (max-width: 1415px) and (min-width: 1200px) {
//     display: none;
//   }
// `;

function NavBar({ expanded, setExpanded }) {
  const navigate = useNavigate();

  return (
    <StyledNavbar expanded={expanded} expand="xl" className="bg-body-tertiary me-5 w-100 text-center position-fixed">
      <Container fluid>
        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate('/', { replace: true })} className="ms-5">
          <img style={{ width: '140px' }} src="/logo300x110.png" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded((expanded) => (expanded ? false : 'expanded'))} />
        <Navbar.Collapse className="ms-lg-5" id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" /*style={{ maxHeight: '200px' }}*/ navbarScroll>
            {/* FOR SCROLLBAR */}
            <StyledLinkComp to="/" setExpanded={setExpanded}>
              Anasayfa
            </StyledLinkComp>

            <StyledLinkComp to="/hac" setExpanded={setExpanded}>
              Hac
            </StyledLinkComp>

            <StyledNavDropdown title="Umre">
              <StyledNavDropdown drop="end" title="Normal Dönem Umre Programları">
                <StyledDropdownComp to="/umre" setExpanded={setExpanded}>
                  Ekonomik Umre
                </StyledDropdownComp>

                <StyledDropdownComp to="/lux-umre" setExpanded={setExpanded}>
                  Lüx Umre
                </StyledDropdownComp>
              </StyledNavDropdown>
              <NavDropdown.Divider />

              <StyledNavDropdown drop="end" title="Sömestr Umre Programları">
                <StyledDropdownComp to="/somestr-umresi/umre" setExpanded={setExpanded}>
                  Ekonomik Umre
                </StyledDropdownComp>
                <StyledDropdownComp to="/somestr-umresi/lux-umre" setExpanded={setExpanded}>
                  Lüx Umre
                </StyledDropdownComp>
              </StyledNavDropdown>
              <NavDropdown.Divider />

              <StyledNavDropdown drop="end" title="Ramazan Umre Programları">
                {/* <StyledDropdownComp to="/ramazan-umresi/lux-umre" setExpanded={setExpanded}>
                  Ekonomik Umre
                </StyledDropdownComp>
                <StyledDropdownComp to="/ramazan-umresi/lux-umre" setExpanded={setExpanded}>
                  Lüx Umre
                </StyledDropdownComp> */}

                <StyledDropdownComp to="/ramazan-umresi/servisli-oteller" setExpanded={setExpanded}>
                  Servisli Oteller
                </StyledDropdownComp>
                <StyledDropdownComp to="/ramazan-umresi/yurume-mesafeli-oteller" setExpanded={setExpanded}>
                  Yürüme Mesafeli Oteller
                </StyledDropdownComp>
                <StyledDropdownComp to="/ramazan-umresi/kisa-programlar" setExpanded={setExpanded}>
                  Kısa Programlar
                </StyledDropdownComp>
                <StyledDropdownComp to="/ramazan-umresi/son-on-gun-programlari" setExpanded={setExpanded}>
                  Son 10 Gün Programları
                </StyledDropdownComp>
              </StyledNavDropdown>
              <NavDropdown.Divider />

              <StyledNavDropdown drop="end" title="Şevval Umre Programları">
                <StyledDropdownComp to="/sevval-umresi/umre" setExpanded={setExpanded}>
                  Ekonomik Umre
                </StyledDropdownComp>
                <StyledDropdownComp to="/sevval-umresi/lux-umre" setExpanded={setExpanded}>
                  Lüx Umre
                </StyledDropdownComp>
              </StyledNavDropdown>
            </StyledNavDropdown>

            {/* <StyledNavDropdown title="Diğer Turlar">
              <StyledDropdownComp to="/kudus-turlari" setExpanded={setExpanded}>
                Kudüs Turları
              </StyledDropdownComp>
              <StyledDropdownComp to="/yurtdisi-turlari" setExpanded={setExpanded}>
                Yurtdışı Turları
              </StyledDropdownComp>
            </StyledNavDropdown> */}
            <StyledLinkComp to="/yurtdisi-turlari" setExpanded={setExpanded}>
              Yurtdışı Turları
            </StyledLinkComp>
          </Nav>

          <StyledForm className="d-flex me-5 gap-5 justify-content-center">
            <StyledLinkComp to="/subelerimiz" setExpanded={setExpanded}>
              Şubelerimiz
            </StyledLinkComp>
            <StyledLinkComp to="/hakkimizda" setExpanded={setExpanded}>
              Hakkımızda
            </StyledLinkComp>
            <NavItems style={{ backgroundColor: '#ce9136' }}>
              <a style={{ color: '#fff', textDecoration: 'none' }} href={`tel:+905325132858`}>
                Bizi Ara: 5325132858
                <TabletNoneAndMobilDisplay>
                  <FaPhone style={{ marginLeft: '5px', paddingBottom: '5px' }} />
                </TabletNoneAndMobilDisplay>
              </a>
            </NavItems>

            {/* <LotteryButton style={{ backgroundColor: '#0E2954' }}>
              <a style={{ color: '#fff', textDecoration: 'none' }}>Hac Kura Sonuçları</a>
            </LotteryButton> */}
          </StyledForm>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default NavBar;
