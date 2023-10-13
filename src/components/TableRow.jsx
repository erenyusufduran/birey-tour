/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Table from './Table';

import { FaPhone } from 'react-icons/fa';

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  padding: 12px 18px;
  background-color: #ce9136;
  color: #333;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #d49d5a;
  }
`;

function TableRow({ sube: { name, location, phoneNumber } }) {
  return (
    <Table.Row>
      <Stacked>
        <span>{name}</span>
      </Stacked>

      <span>{location}</span>

      {phoneNumber ? (
        <a href={`tel:+90${phoneNumber}`}>
          <Button>
            {phoneNumber} <FaPhone style={{ marginLeft: '2px', paddingBottom: '4px' }} />
          </Button>
        </a>
      ) : (
        <span style={{fontSize: "3em"}}>--</span>
      )}
    </Table.Row>
  );
}

export default TableRow;
