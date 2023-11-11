import { useForeignTours } from '../hooks/useForeignTours';
import ForeignTourRow from './ForeignTourRow';
import Spinner from './Spinner';

const ForeignToursTable = () => {
  const { foreignTours, isLoading } = useForeignTours();
  console.log(foreignTours);
  if (isLoading) return <Spinner />;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Tur Adı</th>
          <th scope="col">Tur Gidiş Tarihi</th>
          <th scope="col">Tur Dönüş Tarihi</th>
          <th scope="col">Fiyat</th>
          <th scope="col">Kontenjan</th>
        </tr>
      </thead>
      <tbody>
        {foreignTours &&
          foreignTours.length &&
          foreignTours.map((foreignTour) => (
           <ForeignTourRow foreignTour={foreignTour} key={foreignTour.id} />
          ))}
      </tbody>
    </table>
  );
};

export default ForeignToursTable;
