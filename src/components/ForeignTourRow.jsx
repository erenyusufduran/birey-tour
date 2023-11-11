/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0 12px;
  border: none;
  background-color: #ce9136;
  color: #fff;
  border-radius: 12px;
`

const ForeignTourRow = ({ foreignTour }) => {
  return (
    <tr>
      <td>{foreignTour.periotName}</td>
      <td>{foreignTour.departure.toLocaleDateString('tr')}</td>
      <td>{foreignTour.return.toLocaleDateString('tr')}</td>
      <td>{Number(foreignTour.price)}</td>
      <td>{foreignTour.freeQuota}</td>
     {Number(foreignTour.freeQuota) && <td>
        <StyledButton>Bize Ulaş</StyledButton>
      </td>}
    </tr>
  );
};

export default ForeignTourRow;
