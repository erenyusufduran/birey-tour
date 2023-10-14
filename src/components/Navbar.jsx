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

function NavBar() {
  const navigate = useNavigate();
  return (
    <StyledNavbar expand="lg" className="bg-body-tertiary me-5 w-100 text-center position-fixed">
      <Container fluid>
        <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate('/', { replace: true })} className="ms-5">
          <img style={{ width: '140px' }} src="/logo300x110.png" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="ms-lg-5" id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '200px' }} navbarScroll>
            <Nav.Link onClick={() => navigate('/', { replace: true })}>Anasayfa</Nav.Link>
            <Nav.Link onClick={() => navigate('/hac', { replace: true })}>Hac</Nav.Link>

            <NavDropdown title="Umre">
              <NavDropdown drop="end" title="Normal Dönem Umre Programları">
                <NavDropdown.Item onClick={() => navigate('/umre', { replace: true })}>Ekonomik Umre</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/lux-umre', { replace: true })}>Lüx Umre</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown drop="end" title="Sömestr Umre Programları">
                <NavDropdown.Item onClick={() => navigate('/somestr-umresi/umre', { replace: true })}>
                  Ekonomik Umre
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/somestr-umresi/lux-umre', { replace: true })}>
                  Lüx Umre
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown drop="end" title="Ramazan Umre Programları">
                <NavDropdown.Item onClick={() => navigate('/ramazan-umresi/umre', { replace: true })}>
                  Ekonomik Umre
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/ramazan-umresi/lux-umre', { replace: true })}>
                  Lüx Umre
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown drop="end" title="Şevval Umre Programları">
                <NavDropdown.Item onClick={() => navigate('/sevval-umresi/umre', { replace: true })}>
                  Ekonomik Umre
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/sevval-umresi/lux-umre', { replace: true })}>
                  Lüx Umre
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <Nav.Link onClick={() => navigate('/kudus-turlari', { replace: true })}>Kudüs Turları</Nav.Link>

            {/* <NavDropdown title="Kültür Turları">
              <NavDropdown.Item onClick={() => navigate('/kudus-turlari', { replace: true })}>
                Kudüs Turları
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate('/kultur-turlari', { replace: true })}>
                Kültür Turları
              </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link onClick={() => navigate('/yurtdisi-turlari', { replace: true })}>Yurtdışı Turları</Nav.Link>
          </Nav>
          <StyledForm className="d-flex me-5 gap-5 justify-content-center">
            <Nav.Link style={{ padding: '8px 8px' }} onClick={() => navigate('/subelerimiz', { replace: true })}>
              Şubelerimiz
            </Nav.Link>
            <Nav.Link style={{ padding: '8px 8px' }} onClick={() => navigate('/hakkimizda', { replace: true })}>
              Hakkımızda
            </Nav.Link>
            {/* <Nav.Link onClick={() => navigate('/iletisim', { replace: true })}>İletişim</Nav.Link> */}
            <a href={`tel:+905325132858`}>
              <button
                style={{
                  padding: '8px 8px',
                  borderRadius: '5px',
                  border: 'none',
                  fontWeight: 'bold',
                  color: '#fff',
                  backgroundColor: '#ce9136',
                }}
              >
                Bizi Ara: 5325132858 <FaPhone style={{ marginLeft: '5px', paddingBottom: '5px' }} />
              </button>
            </a>
          </StyledForm>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default NavBar;
