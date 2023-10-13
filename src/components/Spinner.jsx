import styled from 'styled-components';
import '../styles/Spinner.css';

const SpinnerFullPage = styled.div`
  margin: 2.5rem;
  height: calc(100vh - 5rem);
  background-color: var(--color-dark--1);
`;

const Spinner = () => {
  return (
    <SpinnerFullPage>
      <div className="spinnerContainer">
        <div className="spinner"></div>
      </div>
    </SpinnerFullPage>
  );
};

export default Spinner;
