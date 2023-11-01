/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Masthead from './Masthead';

const imageData = [
  {
    headerText: 'Ramazan Umre Programlarımız Açıklanmıştır',
    headerColor: '#000',
    pText: 'RAMAZAN AYI UMRE KAMPANYALARIMIZA KATILMAK İÇİN ACELE EDİN.',
    img: 'home_header.jpg',
    to: '/ramazan-umresi/servisli-oteller',
  },
  {
    headerText: 'Şevval Umre Programlarımız Açıklanmıştır',
    headerColor: '#000',
    pText: 'ŞEVVAL AYI UMRE KAMPANYALARIMIZA KATILMAK İÇİN ACELE EDİN.',
    img: 'home_2_headers.jpg',
    to: '/sevval-umresi/umre',
  },
];

const SButton = styled.button`
  position: absolute;
  top: 50%;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 2em;
  cursor: pointer;
`;

const Carousel = () => {
  const [change, setChange] = useState(0);
  const [mouseEntered, setMouseEntered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      !mouseEntered && setChange((change) => change + 1);
    }, 2500);

    if (change === imageData.length * 2) setChange(0);
    return () => clearInterval(interval);
  }, [change, mouseEntered]);

  const changeToLeft = () => {
    setChange((change) => (change === 0 ? imageData.length * 2 - 1 : change - 1));
  };

  const changeToRight = () => {
    setChange((change) => (change === imageData.length * 2 ? 0 : change + 1));
  };

  return (
    <div className="carousel slide" onMouseEnter={() => setMouseEntered(true)} onMouseLeave={() => setMouseEntered(false)}>
      <div className="carousel-inner">
        {imageData.length &&
          imageData.map((data, i) => (
            <div key={i} className={`carousel-item ${change % imageData.length === i ? 'active' : ''}`}>
              <div>
                <Masthead headerText={data.headerText} pText={data.pText} img={data.img} to={data.to} />
              </div>
              <SButton onClick={changeToLeft} style={{ left: 0 }}>
                <FaArrowLeft />
              </SButton>
              <SButton onClick={changeToRight} style={{ right: 0 }}>
                <FaArrowRight />
              </SButton>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
