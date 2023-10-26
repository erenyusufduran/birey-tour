import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Masthead from '../components/Masthead';

import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa';

const H1 = styled.h1`
  font-weight: 750;
  font-size: 60px;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3em;
  gap: 3em;
  flex: 1 1 0px;
`;

const FlexItems = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  gap: 2em;
`;

const ImageContainer = styled(FlexItems)`
  margin-top: 5em;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const TelButton = styled.a`
  text-decoration: none;
  color: #fff;
  background-color: #0E2954;
  width: 50%;
  text-align: center;
  margin: 0 auto;
  padding: 10px 16px;
  border-radius: 5%;
  cursor: pointer;
`;

const InformationPage = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Hakkımızda');

  return (
    <>
      <Masthead headerText="Hakkımızda" headerColor="#fff" img="umre_header.jpg" />
      <div style={{ width: '70vw', margin: '0 auto' }}>
        <H1 className="text-center mt-3">Birey Tour</H1>
        <hr style={{ width: '20%', height: '20px' }} className="mx-auto" />
        <p className="text-center" style={{ width: '70%', margin: '0 auto', color: '#686565' }}>
          Birey Turizm ülkemizin Hac ve Umre Programlarında öncü ve yenilikçi firması olarak siz değerli müşterilerine
          hizmet vermektedir. Hac ve umre organizasyonunda Diyanet İşleri Başkanlığı ile sözleşme imzalayan yetkili
          acenta belgeli <span style={{ fontWeight: '600' }}>Birey Turizm</span> ayrıca 2813 nolu Tursab A Grubu seyahat
          acentası olarak hizmet vermektedir.
        </p>
        <SectionContainer>
          <FlexItems>
            <h3>Birey Turizm; Sözün Fiiliyata, Sevginin Yaşama, Umudun Huzur ve Mutluluğa Dönüştüğü Yer</h3>
            <p>
              Birey Turizm bugüne kadar üstlendiği organizasyonlardaki başarılı ve kaliteli hizmetlerinin yanında,
              hergün çoğalan birbirinden değerli dost ve müşterilerinin gösterdiği teveccüh sayesinde, bugün Hac ve Umre
              organizasyon sektöre yö veren lokomotiflerinden biri olarak kabul edilmektedir.Birey Turizm T.C. Kültür ve
              Turizm Bakanlığı’nda, A grubu 2813 belge numarası ile kayıtlıdır. Birey Turizm Genel Merkezi
              İstanbul-Kadıköy’de olup, Türkiye genelinde şube ve Bayileri ile birlikte her türlü seyahat ve tur
              organizasyonlarında başarıyla faaliyet göstermektedir. Özel uzmanlık alanı olan Hac ve Umre Programlarının
              yanında, yurt içi ve yurt dışı kültür turları programlarını da devam ettirmektedir. Birey Turizm, Kutsal
              Topraklara götürdüğü Hacı ve Umreci Dostlarını Allah’ın misafirleri gözü ile görmekte ve hizmet etmeyi bir
              şeref saymaktadır. Birey Turizm, her geçen gün Türkiye genelinde ofis, şube ve satış acentaları ağını
              genişletmektedir. Birey Turizm, IATA ve TÜRSAB üyesidir. IATA’ya üye olarak Dünya’nın her noktasına uçak
              bileti satış yapma yetkisine sahip olan Birey Turizm, Yurt Dışı ve Yurt İçi Uçuşlarınızda uçak bileti
              hizmeti de vermektedir. Birey Turizm, her zaman müşteri memnuniyeti ilkesinden hareketle misafirlerinin
              düşünce ve beklentilerini ön planda tutmaktadır.
            </p>
            <TelButton href="tel:+905325132858">
              Birey Tour: 532 513 2858 <FaPhone fontSize="12px" />
            </TelButton>
          </FlexItems>
          <ImageContainer style={{ marginTop: '4em' }}>
            <img src="/umre_header.jpg" style={{ width: '500px' }} />
            <img src="/umre_header.jpg" style={{ width: '500px' }} />
          </ImageContainer>
        </SectionContainer>
      </div>
    </>
  );
};

export default InformationPage;
