/* eslint-disable react/prop-types */
import styled from 'styled-components';

const MobileNone = styled.span`
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const StyledHR = styled.hr`
  margin-top: 0;
`;

const StyledImg = styled.img`
  width: 18em;
  margin-left: 2em;
  transition: 1s ease-in-out;

  @media screen and (max-width: 1400px) and (min-width: 1200px) {
    margin-left: 0.5em;
  }
`;

const StyledMini = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-size: 0.85em;
`;

const StyledSectionMini = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-size: 0.9em;
`;

const StyledH7 = styled(StyledMini)`
  font-size: 0.95rem;
  margin-bottom: 5px;
  @media screen and (max-width: 1200px) {
    font-size: 1.1rem;
    margin-top: 1em;
    margin-bottom: -1em;
  }
`;

const StyledDates = styled.p`
  font-size: 12px;
  text-align: center;
  font-size: 0.85em;

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

const StyledCardCont = styled.div`
  width: 95%;
  margin: 0 auto;
  border-radius: 15px;
  -webkit-box-shadow: 2px 1px 0 2px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 2px 1px 0 2px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 1px 0 2px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1200px) {
    width: 40%;
  }

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;

const StyledRow = styled.div`
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const StyledH6 = styled.div`
  text-align: center;
  font-size: 1.2em;
`;

const StyledSection = styled.section`
  border-radius: 15px 15px 0 0;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const StyledCol = styled.div`
  @media screen and (min-width: 1200px) {
    border-right: 1px solid black;

    &:last-child {
      border-right: none;
    }
  }
`;

const StyledCols = styled(StyledCol)`
  @media screen and (min-width: 1200px) {
    &:first-child {
      border-right: none;
    }
  }
`;

const StyledProgramsCol = styled(StyledCol)`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Heads = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    margin-top: 2em;
  }
`;

const TourCard = ({ tourCard }) => {
  const {
    id,
    extraTexts,
    dayCounts,
    twoPeopleRoomPrices,
    threePeopleRoomPrices,
    fourPeopleRoomPrices,
    dates,
    hotelType,
    img,
  } = tourCard;
  return (
    <StyledCardCont className="text-center mt-5" style={{ backgroundColor: '#dfd9d9' }}>
      <StyledSection className="d-flex justify-content-between pb-0 p-3" style={{ backgroundColor: '#ce9136' }}>
        {extraTexts.length &&
          extraTexts.map((text, i) => (
            <StyledSectionMini className="text-white" key={i}>
              {text}
            </StyledSectionMini>
          ))}
      </StyledSection>

      <section>
        <div className="text-center text-xl-start mt-3">
          <div className="row">
            <StyledCols className="col-lg-12 col-xl-3 col-xxl-3">
              <StyledImg src={img} />
            </StyledCols>
            <StyledCols className="col-lg-12 col-xl-6 col-xxl-6">
              <Heads>
                <StyledH6 className="mb-3 text-uppercase fw-bold">{id}. Program</StyledH6>
                <StyledH6 className="mb-3 text-uppercase fw-bold">{hotelType}</StyledH6>
              </Heads>

              <StyledRow className="row text-center">
                <StyledProgramsCol className="col-xl-3 col-xxl-3">
                  <StyledH7>Gün Sayıları</StyledH7>
                  <StyledHR
                    className="d-inline-block mx-auto mt-0"
                    style={{ width: '40px', backgroundColor: '#333', height: '2px' }}
                  />
                  {dayCounts.length && dayCounts.map((text, i) => <StyledMini key={i}>{text}</StyledMini>)}
                </StyledProgramsCol>

                <StyledCol className="col-xl-3 col-xxl-3">
                  <StyledH7>2 Kişilik Odalar</StyledH7>
                  <StyledHR
                    className="d-inline-block mx-auto"
                    style={{ width: '40px', backgroundColor: '#333', height: '2px' }}
                  />
                  {twoPeopleRoomPrices.map((price, i) => (
                    <StyledDates key={i}>
                      <MobileNone>{dayCounts[i]}: </MobileNone> <span className="fw-bold">${price}</span>
                    </StyledDates>
                  ))}
                </StyledCol>

                <StyledCol className="col-xl-3 col-xxl-3">
                  <StyledH7>3 Kişilik Odalar</StyledH7>
                  <StyledHR
                    className="d-inline-block mx-auto"
                    style={{ width: '40px', backgroundColor: '#333', height: '2px' }}
                  />
                  {threePeopleRoomPrices.map((price, i) => (
                    <StyledDates key={i}>
                      <MobileNone>{dayCounts[i]}: </MobileNone> <span className="fw-bold">${price}</span>
                    </StyledDates>
                  ))}
                </StyledCol>
                <StyledCol className="col-xl-3 col-xxl-3">
                  <StyledH7>4 Kişilik Odalar</StyledH7>
                  <StyledHR
                    className="d-inline-block mx-auto"
                    style={{ width: '40px', backgroundColor: '#333', height: '2px' }}
                  />
                  {fourPeopleRoomPrices.map((price, i) => (
                    <StyledDates key={i}>
                      <MobileNone>{dayCounts[i]}: </MobileNone> <span className="fw-bold">${price}</span>
                    </StyledDates>
                  ))}
                </StyledCol>
              </StyledRow>
            </StyledCols>

            <StyledCols className="col-lg-12 col-xl-3 col-xxl-3 mb-md-0 mb-4">
              <StyledH6 className="mb-3 text-uppercase fw-bold">Tarihler</StyledH6>
              {dates.entries.map((entry, i) => (
                <StyledDates key={i}>
                  Gidiş: <span className="fw-bold">{entry} -</span> Dönüş:
                  <span className="fw-bold"> {dates.exits[i]}</span>
                </StyledDates>
              ))}
            </StyledCols>
          </div>
        </div>
      </section>

      {/* <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <a className="text-white" href="https://mdbootstrap.com/" />
    </div> */}
    </StyledCardCont>
  );
};

export default TourCard;
