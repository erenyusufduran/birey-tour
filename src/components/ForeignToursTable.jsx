import styled from 'styled-components';
import { useForeignTours } from '../hooks/useForeignTours';
import ForeignTourRow from './ForeignTourRow';
import Spinner from './Spinner';

const MobileNoneTH = styled.th`
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

const StyledTable = styled.table`
  font-size: 1.1em;
  width: 75%;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 85%;
    font-size: 0.9em;
  }

  @media screen and (max-width: 840px) {
    width: 100%;
    font-size: 0.9em;
    overflow-y: scroll;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.6em;
    overflow-y: scroll;
    text-align: center;
  }

`;

const ForeignToursTable = () => {
  const { foreignTours, isLoading } = useForeignTours();
  if (isLoading) return <Spinner />;

  return (
    <StyledTable className="table">
      <thead>
        <tr>
          <th scope="col">Tur Adı</th>
          <th scope="col">Tur Gidiş Tarihi</th>
          <MobileNoneTH scope="col">Tur Dönüş Tarihi</MobileNoneTH>
          <th scope="col">Fiyat</th>
          <th scope="col">Kontenjan</th>
        </tr>
      </thead>
      <tbody>{foreignTours && foreignTours.length && foreignTours.map((foreignTour) => <ForeignTourRow foreignTour={foreignTour} key={`${foreignTour.id}-${foreignTour.periotId}`} />)}</tbody>
    </StyledTable>
  );
};

export default ForeignToursTable;
