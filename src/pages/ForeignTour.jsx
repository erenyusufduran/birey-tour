import { useLocation, useParams } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Parser } from 'html-to-react';
import Spinner from '../components/Spinner';
import { useForeignTour } from '../hooks/useForeignTours';
import Carousel from '../components/Carousel';

const ForeignTour = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  useScrollToTop(pathname, 'Yurtdışı Turları');

  const { foreignTour, isLoading } = useForeignTour(id);

  if (isLoading) return <Spinner />;
  if (!foreignTour) return <h2>There is no tour with this parameter</h2>;

  const imageData = [];
  foreignTour.tourImages.forEach((tourImage) => {
    imageData.push({
      headerText: foreignTour.name,
      img: tourImage || '/yurtdisi_header.jpg',
      pText: 'Hemen Rezerve Et',
      to: `https://wa.me/+905339302927/?text=${foreignTour.departure.toLocaleDateString("tr")} tarihli - ${foreignTour.name} ile ilgili bilgi almak istiyorum.`,
    });
  });

  const parser = new Parser();
  const parsedTourProgram = parser.parse(foreignTour.tourProgram);
  const parsedWarningNotes = parser.parse(foreignTour.warningNotes);

  return (
    <>
      <Carousel imageData={imageData} />
      <div className="mt-5 mx-auto">
        <div className="container" style={{overflow: "hidden"}}>{parsedTourProgram} </div>
        <hr />
        <div className="mt-5 fw-light text-center container">
          {parsedWarningNotes}
          <div>
            <a target="blank" href={`https://wa.me/+905339302927/?text=${foreignTour.departure.toLocaleDateString("tr")} tarihli - ${foreignTour.name} ile ilgili bilgi almak istiyorum.`}>
              <button style={{ padding: '8px 12px', border: 'none', borderRadius: '7%' }}>Hemen Rezerve Et</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForeignTour;
