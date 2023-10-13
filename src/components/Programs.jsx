import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { homeProgramCards } from '../data/home';

export const SNavLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 18%;
  margin: 10px;
  cursor: pointer;
  border: 1px solid black;
  -moz-box-shadow: 6px 6px 3px #999494;
  -webkit-box-shadow: 6px 6px 3px #999494;
  box-shadow: 6px 6px 3px #999494;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  transition: 0.7s ease-in-out;

  &:hover {
    scale: 1.03;
  }
`;

const CardTitle = styled.h3`
  margin-top: 0.4em;
  text-align: center;
`;

const Cards = () => {
  return (
    <>
      <h1 className="m-5 text-center">Programlarımız</h1>
      <CardContainer>
        {homeProgramCards.map((card) => (
          <Card key={card.id}>
            <SNavLink to={card.url}>
              <CardImage src={card.image} />
              <CardTitle>{card.title}</CardTitle>
            </SNavLink>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default Cards;
