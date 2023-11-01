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
  transition: 1s ease-in;
  margin-left: 1em;

  @media screen and (min-width: 1800px) {
    width: 25em;
  }

  @media screen and (min-width: 1600px) and (max-width: 1800px) {
    width: 22em;
  }

  @media screen and (min-width: 1500px) and (max-width: 1600px) {
    width: 20em;
  }

  @media screen and (min-width: 1400px) and (max-width: 1500px) {
    width: 18em;
  }

  @media screen and (max-width: 1400px) {
    width: 16em;
  }

  @media screen and (max-width: 1200px) {
    width: 80%;
    margin-left: 0;
  }
`;

const StyledMini = styled.p`
  font-size: 12px;
  font-weight: bold;
  font-size: 0.85em;
`;

const StyledSectionMini = styled.p`
  font-weight: bold;
  margin-top: auto;
  font-size: ${(props) =>
    props.type === 'mobilenone' ? '14px !important' : props.type === 'bottom' ? '14px !important' : '20px !important'};

  @media screen and (max-width: 1200px) {
    display: ${(props) => (props.type === 'mobilenone' ? 'none' : '')};
  }
`;

const StyledH7 = styled(StyledMini)`
  font-size: 1.1rem;
  margin-bottom: 5px;

  @media screen and (max-width: 1240px) and (min-width: 1200px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
    margin-top: 1em;
    margin-bottom: -1em;
  }
`;

const StyledDates = styled.p`
  font-size: 12px;
  font-size: 0.85em;

  li {
    list-style: ${(props) => (props.type === 'less' ? 'none' : '')};
  }

  @media screen and (max-width: 1420px) and (min-width: 1200px) {
    font-size: 12px !important;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1rem !important;
    display: 'flex';

    & li {
      list-style: none;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9rem !important;
  }
`;

const StyledRoomsNights = styled(StyledDates)`
  font-size: 20px !important;
  text-align: center;

  @media screen and (max-width: 1440px) and (min-width: 1240px) {
    font-size: 18px !important;
  }

  @media screen and (max-width: 1240px) and (min-width: 1200px) {
    font-size: 15px !important;
  }

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

const DatesRow = styled.div`
  display: flex;

  @media screen and (min-width: 2500px) {
    margin-left: 5em !important;
  }

  @media screen and (min-width: 2000px) {
    margin-left: 3em !important;
  }

  @media screen and (min-width: 1400px) {
    margin-left: 0.3em;
  }

  @media screen and (max-width: 1440px) and (min-width: 1200px) {
  }
`;

const TourCard = ({ tourCard }) => {
  const {
    id,
    extraTexts,
    dayCounts,
    nightsDays,
    extraHead,
    secondExtraHead,
    twoPeopleRoomPrices,
    threePeopleRoomPrices,
    fourPeopleRoomPrices,
    dates,
    hotelType,
    img,
  } = tourCard;

  const dateLength = dates.entries.length;

  return (
    <StyledCardCont className="text-center mt-5" style={{ backgroundColor: '#dfd9d9' }}>
      <StyledSection className="d-flex justify-content-around pb-0 p-3" style={{ backgroundColor: '#ce9136' }}>
        <StyledSectionMini style={{ fontSize: '20px' }} className="text-white">
          {id}. PROGRAM
        </StyledSectionMini>
        <StyledSectionMini style={{ fontSize: '20px' }} className="text-white text-uppercase">
          {hotelType}
        </StyledSectionMini>
        {extraHead && (
          <StyledSectionMini className="text-white text-uppercase">
            {extraHead}
          </StyledSectionMini>
        )}
        {secondExtraHead && (
          <StyledSectionMini type="mobilenone" style={{ fontSize: '20px' }} className="text-white text-uppercase">
            {secondExtraHead}
          </StyledSectionMini>
        )}
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
                  <StyledH7 type="gun">Gün Sayıları</StyledH7>
                  <StyledHR
                    className="d-inline-block mx-auto mt-0"
                    style={{ width: '40px', backgroundColor: '#333', height: '2px' }}
                  />
                  {dayCounts.length &&
                    dayCounts.map((text, i) => {
                      if (i === 0)
                        return (
                          <StyledRoomsNights style={{ marginBottom: '7.4px' }} key={i}>
                            <div>
                              <MobileNone>{dayCounts[i]}:</MobileNone>
                              <StyledMini key={i}>{text}</StyledMini>
                            </div>
                            {nightsDays[i] && <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>}
                          </StyledRoomsNights>
                        );
                      else
                        return (
                          <span key={i}>
                            <StyledHR style={{ marginBottom: '-4px' }} />
                            <StyledRoomsNights style={{ marginTop: '20px' }}>
                              <div>
                                <MobileNone>{dayCounts[i]}: </MobileNone>
                                <StyledMini key={i}>{text}</StyledMini>
                              </div>
                              {nightsDays[i] && <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>}
                            </StyledRoomsNights>
                          </span>
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
                          {nightsDays[i] && <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>}
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
                            {nightsDays[i] && <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>}
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
                          {nightsDays[i] && <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>}
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
                            {nightsDays[i] && <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>}
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
                            {nightsDays[i] && <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>}
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
                              {nightsDays[i] && <MobileNone style={{ fontSize: '.8em' }}>({nightsDays[i]})</MobileNone>}
                            </StyledRoomsNights>
                          </>
                        );
                    })}
                  </StyledCol>
                }
              </StyledRow>
            </StyledCols>

            <StyledCols className="col-lg-12 col-xl-3 col-xxl-3">
              <div>
                <StyledH6 className="mb-3 text-uppercase fw-bold">GİDİŞ TARİHLERİ</StyledH6>
                <DatesRow className="row">
                  {dates.entries.map((entry, i) => {
                    if (dateLength <= 5) {
                      return (
                        <StyledDates type="less" className="text-center" style={{ fontSize: '.9em' }} key={i}>
                          <li>
                            <span className="fw-bold">{entry}</span>
                          </li>
                        </StyledDates>
                      );
                    } else {
                      return (
                        <StyledDates className="col-xl-6 col-lg-12" style={{ fontSize: '.9em' }} key={i}>
                          <li>
                            <span className="fw-bold">{entry} </span>
                          </li>
                        </StyledDates>
                      );
                    }
                  })}
                </DatesRow>
              </div>
            </StyledCols>
          </div>
        </div>
      </section>

      <StyledSectionBottom
        className="d-flex text-white justify-content-center pb-0 p-3"
        style={{ backgroundColor: '#0E2954' }}
      >
        <div className="row">
          {extraTexts.length &&
            extraTexts.map((text, i) => (
              <StyledSectionMini type="bottom" className="text-white col-xl-6 col-md-12" key={i}>
                {text}
              </StyledSectionMini>
            ))}
        </div>
      </StyledSectionBottom>
    </StyledCardCont>
  );
};

export default TourCard;
