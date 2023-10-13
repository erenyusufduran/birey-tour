/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Masthead from './Masthead';

const imageData = [
  { headerText: 'Umre ve Hac Programları', pText: 'Umre Programları için bize başvurun', img: 'home_header.jpg' },
  { headerText: 'Umre Programları', pText: 'Umre Programları', img: 'home_2_header.jpg' },
];

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

  return (
    <div
      className="carousel slide"
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
    >
      <div className="carousel-inner">
        <div className={`carousel-item ${change % imageData.length === 0 && 'active'}`}>
          <Masthead headerText={imageData[0].headerText} pText={imageData[0].pText} img={imageData[0].img} />
        </div>
        <div className={`carousel-item ${change % imageData.length === 1 && 'active'}`}>
        <Masthead headerText={imageData[1].headerText} pText={imageData[1].pText} img={imageData[1].img} />
        </div>
        {/* <div className={`carousel-item ${change % imageData.length === 2 && 'active'}`}>
          <Masthead
            headerText="Hac Programları"
            pText="A layout for a landing page"
            img="home_2_header.jpg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
