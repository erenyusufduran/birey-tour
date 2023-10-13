/* eslint-disable react/prop-types */
import styled from 'styled-components';

const MobileNone = styled.span`
  display: 'flex';
  flex-direction: 'column';

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const StyledHR = styled.hr`
  margin-top: 0;

  @media screen and (max-width: 1200px) {
    width: 0 !important;
  }
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
  font-size: 1.1rem;
  margin-bottom: 5px;
  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
    margin-top: 1em;
    margin-bottom: -1em;
  }
`;

const StyledDates = styled.p`
  font-size: 12px;
  text-align: center;
  font-size: 0.85em;

  @media screen and (max-width: 1200px) {
    font-size: 1.2rem !important;
    display: 'flex';
    justify-content: 'center';
  }
`;

const StyledRoomsNights = styled(StyledDates)`
  font-size: 20px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledCardCont = styled.div`
  width: 95%;
  margin: 0 auto;
  border-radius: 15px;
  -webkit-box-shadow: 2px 1px 0 0 rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 2px 1px 0 0 rgba(0, 0, 0, 0.15);
  box-shadow: 2px 1px 0 0 rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 1200px) {
    width: 70%;
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

const StyledSectionBottom = styled.section`
  border-radius: 0 0 15px 15px;

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

const TourCard2 = ({ tourCard }) => {
  const {
    id,
    extraTexts,
    dayCounts,
    nightsDays,
    twoPeopleRoomPrices,
    threePeopleRoomPrices,
    fourPeopleRoomPrices,
    dates,
    hotelType,
    img,
  } = tourCard;

  const dateLength = dates.entries.length;
  const datesRowCount = Math.ceil(dateLength / 2);

  return (
    <StyledCardCont className="text-center mt-5" style={{ backgroundColor: '#dfd9d9' }}>
      <StyledSection className="d-flex justify-content-around pb-0 p-3" style={{ backgroundColor: '#ce9136' }}>
        <StyledSectionMini style={{ fontSize: '20px' }} className="text-white">
          {id}. PROGRAM
        </StyledSectionMini>
        <StyledSectionMini style={{ fontSize: '20px' }} className="text-white text-uppercase">
          {hotelType}
        </StyledSectionMini>
      </StyledSection>
      <section>
        <div className="text-center text-xl-start mt-3">
          <div className="row">
            <StyledCols className="col-lg-12 col-xl-3 col-xxl-3 my-auto">
              <StyledImg className="mb-2" src={img} />
            </StyledCols>
            <StyledCols className="col-lg-12 col-xl-6 col-xxl-6" style={{ margin: 'auto 0' }}>
              <StyledRow className="row text-center">
                <StyledProgramsCol className="col-xl-3 col-xxl-3">
                  <StyledH7>Gün Sayıları</StyledH7>
                  <StyledHR
                    className="d-inline-block mx-auto mt-0"
                    style={{ width: '40px', backgroundColor: '#333', height: '2px' }}
                  />
                  {dayCounts.length &&
                    dayCounts.map((text, i) => {
                      if (i === 0)
                        return (
                          <span key={i}>
                            <StyledMini>{text}</StyledMini>
                            <p style={{ fontSize: '10px', marginBottom: 0, marginTop: '-14px' }}>{nightsDays[i]}</p>
                          </span>
                        );
                      else if (i === 1)
                        return (
                          <span key={i}>
                            <StyledHR style={{ marginBottom: '-4px' }} />
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <StyledMini style={{ marginTop: '30px' }}>{text}</StyledMini>
                              <p style={{ fontSize: '10px', marginBottom: 0, marginTop: '-15px' }}>{nightsDays[i]}</p>
                            </div>
                          </span>
                        );
                      else if (i === 2)
                        return (
                          <>
                            <StyledHR style={{ marginBottom: '-4px' }} />
                            <StyledMini style={{ marginTop: '20px' }} key={i}>
                              {text}
                            </StyledMini>
                            <p style={{ fontSize: '10px', marginBottom: '10px', marginTop: '-15px' }}>
                              {nightsDays[i]}
                            </p>
                          </>
                        );
                    })}
                </StyledProgramsCol>

                <StyledCol className="col-xl-3 col-xxl-3">
                  <StyledH7>2 Kişilik Odalar</StyledH7>
                  <StyledHR
                    className="d-inline-block mx-auto"
                    style={{ width: '40px', backgroundColor: '#333', height: '2px' }}
                  />
                  {twoPeopleRoomPrices.map((price, i) => {
                    if (i === 0)
                      return (
                        <StyledRoomsNights style={{ marginBottom: '7.4px' }} key={i}>
                          <div>
                            <MobileNone>{dayCounts[i]}:</MobileNone>
                            <span className="fw-bold"> {price === '-' ? '----' : `$${price}`}</span>
                          </div>
                          <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>
                        </StyledRoomsNights>
                      );
                    else
                      return (
                        <span key={i}>
                          <StyledHR style={{ marginBottom: '-4px' }} />
                          <StyledRoomsNights style={{ marginTop: '20px' }}>
                            <div>
                              <MobileNone>{dayCounts[i]}: </MobileNone>
                              <span className="fw-bold">{price === '-' ? '----' : `$${price}`}</span>
                            </div>
                            <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>
                          </StyledRoomsNights>
                        </span>
                      );
                  })}
                </StyledCol>

                <StyledCol className="col-xl-3 col-xxl-3">
                  <StyledH7>3 Kişilik Odalar</StyledH7>
                  <StyledHR
                    className="d-inline-block mx-auto"
                    style={{ width: '40px', backgroundColor: '#333', height: '2px' }}
                  />
                  {threePeopleRoomPrices.map((price, i) => {
                    if (i === 0)
                      return (
                        <StyledRoomsNights style={{ marginBottom: '7.4px' }} key={i}>
                          <div>
                            <MobileNone>{dayCounts[i]}:</MobileNone>
                            <span className="fw-bold"> {price === '-' ? '----' : `$${price}`}</span>
                          </div>
                          <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>
                        </StyledRoomsNights>
                      );
                    else
                      return (
                        <span key={i}>
                          <StyledHR style={{ marginBottom: '-4px' }} />
                          <StyledRoomsNights style={{ marginTop: '20px' }}>
                            <div>
                              <MobileNone>{dayCounts[i]}: </MobileNone>
                              <span className="fw-bold">{price === '-' ? '----' : `$${price}`}</span>
                            </div>
                            <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>
                          </StyledRoomsNights>
                        </span>
                      );
                  })}
                </StyledCol>
                {
                  <StyledCol className={`col-xl-3 col-xxl-3 ${fourPeopleRoomPrices[0] === '-' ? 'mobile-none' : ''}`}>
                    <StyledH7>4 Kişilik Odalar</StyledH7>
                    <StyledHR
                      className="d-inline-block mx-auto"
                      style={{ width: '40px', backgroundColor: '#333', height: '2px' }}
                    />
                    {fourPeopleRoomPrices.map((price, i) => {
                      if (i === 0)
                        return (
                          <StyledRoomsNights style={{ marginBottom: '7.4px' }} key={i}>
                            <div>
                              <MobileNone>{dayCounts[i]}:</MobileNone>
                              <span className="fw-bold"> {price === '-' ? '----' : `$${price}`}</span>
                            </div>
                            <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>
                          </StyledRoomsNights>
                        );
                      else
                        return (
                          <>
                            <StyledHR style={{ marginBottom: '-4px' }} />
                            <StyledRoomsNights style={{ marginTop: '20px' }}>
                              <div>
                                <MobileNone>{dayCounts[i]}: </MobileNone>
                                <span className="fw-bold">{price === '-' ? '----' : `$${price}`}</span>
                              </div>
                              <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>
                            </StyledRoomsNights>
                          </>
                        );
                    })}
                  </StyledCol>
                }
              </StyledRow>
            </StyledCols>

            <StyledCols className="col-lg-12 col-xl-3 col-xxl-3 mb-md-0 mb-4">
              <div style={dates.entries.length <= 5 ? { margin: '50px auto' } : { margin: 'inherit' }}>
                <StyledH6 className="mb-3 text-uppercase fw-bold">GİDİŞ TARİHLERİ</StyledH6>
                {dates.entries.map((entry, i) => {
                  if (dateLength <= 5) {
                    return (
                      <StyledDates style={{ fontSize: '.9em' }} key={i}>
                        <span className="fw-bold">{entry}</span>
                      </StyledDates>
                    );
                  } else {
                    if (i === datesRowCount) null;
                    if (i < datesRowCount)
                      return (
                        <StyledDates style={{ fontSize: '.9em' }} key={i}>
                          <span className="fw-bold">{entry} </span>
                          {dates.entries[i + datesRowCount] && (
                            <span className="fw-bold">
                              <span style={{ fontSize: '1.1em' }}>/</span> {dates.entries[i + datesRowCount]}
                            </span>
                          )}
                        </StyledDates>
                      );
                  }
                })}
              </div>
            </StyledCols>
          </div>
        </div>
      </section>

      <StyledSectionBottom
        className="d-flex text-white justify-content-between pb-0 p-3"
        style={{ backgroundColor: '#0E2954' }}
      >
        {extraTexts.length &&
          extraTexts.map((text, i) => (
            <StyledSectionMini className="text-white" key={i}>
              {text}
            </StyledSectionMini>
          ))}
      </StyledSectionBottom>
    </StyledCardCont>
  );
};

export default TourCard2;
