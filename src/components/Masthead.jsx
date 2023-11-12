/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMasthead = styled.header`
  height: 60vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => props.type && `linear-gradient(to bottom, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)),url(${props.type})`};
  background-color: ${(props) => props.bgcolor && props.bgcolor};
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: ${(props) => (props.type ? '2.5em' : '7em')};
  margin-bottom: ${(props) => (props.type ? '2.5em' : '0')};

  @media screen and (max-width: 1200px) {
    font-size: ${(props) => (props.type ? '2.5em' : '6em')};
  }

  @media screen and (max-width: 650px) {
    font-size: ${(props) => (props.type ? '2.5em' : '5em')};
  }

  @media screen and (max-width: 450px) {
    font-size: ${(props) => (props.type ? '2.5em' : '4em')};
  }

  @media screen and (max-width: 350px) {
    font-size: ${(props) => (props.type ? '2.5em' : '2.5em')};
  }

  @media screen and (max-width: 300px) {
    font-size: ${(props) => (props.type ? '2.5em' : '1.5em')};
  }
`;

const CarouselPText = styled.p`
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 8px 12px;
  font-size: 1.5em;
  cursor: pointer;
  color: #000 !important;
  @media screen and (max-width: 500px) {
    font-size: 1em;
  }
`;

const CarouselTexts = ({ headerText, headerColor, pText, to }) => {
  return (
    <div className="col-12 text-center">
      <Header type={pText} style={{ color: headerColor }}>
        {headerText}
      </Header>
      {pText && (
        <NavLink target='blank' style={{ textDecoration: 'none' }} to={to}>
          <CarouselPText className="lead">{pText}</CarouselPText>
        </NavLink>
      )}
    </div>
  );
};

const Masthead = ({ headerText, headerColor, pText, img, bgcolor, to }) => {
  return (
    <StyledMasthead type={img} bgcolor={bgcolor}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <CarouselTexts headerText={headerText} headerColor={headerColor} pText={pText} to={to} />
        </div>
      </div>
    </StyledMasthead>
  );
};

export default Masthead;
