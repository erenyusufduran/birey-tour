import axios from 'axios';
import moment from 'moment/moment';

export async function getForeignTours() {
  const API_KEY = 'S54FYYK7LEZIGPHD';
  const response = await axios.get(`https://www.hunkarturizm.com/api/tour?api_key=${API_KEY}`);
  const tours = response.data
    .filter((tour) => tour.periots && tour.periots.length)
    .flatMap((tour) =>
      tour.periots.map((periotItem) => {
        return {
          id: tour.ID,
          periotId: periotItem.periotID,
          category: tour.category,
          currency: periotItem.currency || tour.currency,
          image: tour.image,
          includedPrice: tour.includedPrice,
          name: periotItem.name || tour.name,
          periotName: periotItem.name,
          price: periotItem.price || tour.price,
          tourImages: tour.tourImages,
          tourProgram: tour.tourProgram,
          tourType: tour.tourType,
          warningNotes: tour.warningNotes,
          child1Price: periotItem.child1Price,
          child2Price: periotItem.child2Price,
          freeQuota: periotItem.freeQuota,
          infantPrice: periotItem.infantPrice,
          singleExtraPrice: periotItem.singleExtraPrice,
          tourId: periotItem.tourID,
          tourQuota: periotItem.tourQuota,
          departure: moment(periotItem.departure.replaceAll('.', '/'), 'DD/MM/YYYY').toDate(),
          return: moment(periotItem.return.replaceAll('.', '/'), 'DD/MM/YYYY').toDate(),
        };
      })
    )
    .sort((a, b) => a.departure - b.departure)
    .slice(0, -1);

  return tours;
}
