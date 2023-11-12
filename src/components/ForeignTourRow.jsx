/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import styled from 'styled-components';

// const StyledButton = styled.button`
//   padding: 0 12px;
//   border: none;
//   background-color: #ce9136;
//   color: #fff;
//   border-radius: 12px;
// `;

const MobileNoneTD = styled.td`
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

function extractTextBeforeParenthesis(input) {
  const result = input.replace(/^(.*?)\s*\([^)]*\)/, '$1');
  return result.trim();
}

const ForeignTourRow = ({ foreignTour }) => {
  let currency = '';
  switch (foreignTour.currency) {
    case 'usd':
      currency = '$';
      break;
    case 'euro':
      currency = '€';
      break;
    case 'tl':
      currency = '₺';
      break;
    default:
      currency = '$';
  }

  return (
    <tr>
      <td>
        <NavLink to={foreignTour.periotId} style={{ textDecoration: 'none' }}>
          {extractTextBeforeParenthesis(foreignTour.periotName)}
        </NavLink>
      </td>
      <td>{foreignTour.departure.toLocaleDateString('tr')}</td>
      <MobileNoneTD>{foreignTour.return.toLocaleDateString('tr')}</MobileNoneTD>
      <td>
        {Number(foreignTour.price)} {currency}
      </td>
      <td>{foreignTour.freeQuota}</td>
      {/* {Number(foreignTour.freeQuota) && <td>
        <StyledButton>Bize Ulaş</StyledButton>
      </td>} */}
    </tr>
  );
};

export default ForeignTourRow;
