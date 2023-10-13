/* eslint-disable react/prop-types */
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaEnvelope, FaPhone, FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const WhiteNavLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

const StyledHover = styled.a`
  transition: 0.5s ease-in;
  color: #333;

  &:hover {
    color: #fff;
  }
`;

const NavLinkComponent = ({ to, children }) => {
  return (
    <p>
      <WhiteNavLink to={to}>{children}</WhiteNavLink>
    </p>
  );
};
const Footer = () => {
  return (
    <footer className="text-center text-white text-lg-start mt-5" style={{ backgroundColor: '#0E2954' }}>
      {/* 2E4374, 213555, 0E2954, 213555, 27374D */}
      <section className="d-flex text-white justify-content-between p-4" style={{ backgroundColor: '#ce9136' }}>
        <div className="me-5">
          <span>Sosyal Medya hesaplarımızdan bizi takip edin:</span>
        </div>

        <div className="justify-space-around">
          <StyledHover href="" className="me-4">
            <FaFacebookF />
          </StyledHover>
          <StyledHover href="" className="me-4">
            <FaTwitter />
          </StyledHover>
          <StyledHover href="" className="me-4">
            <FaGoogle />
          </StyledHover>
          <StyledHover href="" className="me-4">
            <FaInstagram />
          </StyledHover>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Birey Tour</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#333', height: '2px' }}
              />
              <p>
                <img style={{ width: '300px' }} src="/logo300x110_beyaz.png" />
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Kurumsal</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#333', height: '2px' }}
              />
              <NavLinkComponent /*to="/hakkimizda"*/>A Grubu Seyahat Acentası</NavLinkComponent>
              <NavLinkComponent /*to="/subelerimiz"*/>Belge No: <span style={{fontWeight: "bold"}}>2813</span></NavLinkComponent>
              <NavLinkComponent /*to="/hesap-numaralarimiz"*/>Tursab Üyesi</NavLinkComponent>
              <NavLinkComponent /*to="/oteller"*/>Diyanet İşleri Başkanlığı Yetkili Acenta</NavLinkComponent>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Hizmetlerimiz</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#333', height: '2px' }}
              />
              <NavLinkComponent to="/hac">Hac</NavLinkComponent>
              <NavLinkComponent to="/umre">Ekonomik Umre</NavLinkComponent>
              <NavLinkComponent to="/lux-umre">Lüx Umre</NavLinkComponent>
              <NavLinkComponent to="/kudus-turlari">Kudüs Turları</NavLinkComponent>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">İletişim</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: '60px', backgroundColor: '#333', height: '2px' }}
              />
              <p>
                <FaHome className="me-3" /> Söğütlüçeşme Caddesi, Beyciğim Sk. Mutlu Apt. No: 1/1, Kadıköy/İstanbul
              </p>
              <p>
                <FaEnvelope className="me-3" /> bireytour@info.com
              </p>
              <p>
                <FaPhone className="me-3" /> 0532 513 2858
              </p>
              {/* <p>
                <FaPrint className="me-3" /> 01 234 567 89
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className="text-white" href="https://mdbootstrap.com/" />
      </div> */}
    </footer>
  );
};

export default Footer;
