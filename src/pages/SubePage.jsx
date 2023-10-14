import { useLocation } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

import { useScrollToTop } from '../hooks/useScrollToTop';
import Masthead from '../components/Masthead';

const subeler = [
  {
    id: 1,
    name: 'Adapazarı Şubesi',
    location: 'Adapazarı',
  },
  {
    id: 2,
    name: 'Balıkesir Şubesi',
    location: 'Balıkesir',
    phoneNumber: '5426523067',
  },
  {
    id: 3,
    name: 'Gönen Şubesi',
    location: 'Balıkesir',
    phoneNumber: '5059783747',
  },
  {
    id: 4,
    name: 'Çankırı Şubesi',
    location: 'Çankırı',
  },
  {
    id: 5,
    name: 'Çorlu Şubesi',
    location: 'Tekirdağ',
    phoneNumber: '5362313645',
  },
  {
    id: 6,
    name: 'Düzce Şubesi',
    location: 'Düzce',
    phoneNumber: '5556306696',
  },
  {
    id: 7,
    name: 'İzmit Şubesi',
    location: 'Kocaeli',
  },
  { id: 8, name: 'Derince Şubesi', location: 'Kocaeli', phoneNumber: '5336605678' },
  { id: 9, name: 'Kastamonu Şubesi', location: 'Kastamonu', phoneNumber: '5436718513' },
  { id: 10, name: 'Kırkağaç Şubesi', location: 'Manisa' },
  { id: 11, name: 'Turgutlu Şubesi', location: 'Manisa' },
  { id: 12, name: 'Kadıköy Şubesi', location: 'İstanbul', phoneNumber: '5325132858' },
  { id: 13, name: 'Kaynarca Şubesi', location: 'İstanbul' },
  { id: 14, name: 'Avcılar Şubesi', location: 'İstanbul' },
  { id: 15, name: 'Gaziosmanpaşa Şubesi', location: 'İstanbul', phoneNumber: '5348491825' },
  { id: 16, name: 'Üsküdar Şubesi', location: 'İstanbul' },
  { id: 17, name: 'Trabzon Şubesi', location: 'Trabzon', phoneNumber: '5398125540' },
  { id: 18, name: 'Sakarya Şubesi', location: 'Sakarya', phoneNumber: '5325454625' },
];

const TableContainer = styled.div`
  width: 50%;
  margin: 40px auto;
  text-align: center;

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const MobileNone = styled.th`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const SubePage = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Şubelerimiz');

  return (
    <>
      <Masthead headerText="Şubelerimiz" headerColor="#fff" img="/umre_header.jpg" />
      <TableContainer>
        <table className="table">
          <thead>
            <tr>
              <MobileNone scope="col">#</MobileNone>
              <th scope="col">Şube Adı</th>
              <MobileNone scope="col">Şehir</MobileNone>
              <th scope="col">Telefon Numarası</th>
            </tr>
          </thead>
          <tbody>
            {subeler.length &&
              subeler.map((sube) => (
                <tr key={sube.id}>
                  <MobileNone scope="row">{sube.id}</MobileNone>
                  <td style={{ padding: '8px 12px' }}>
                    <button style={{ padding: '8px 12px', border: 'none', backgroundColor: 'transparent' }}>
                      {sube.name}
                    </button>
                  </td>
                  <MobileNone>
                    <button style={{ padding: '8px 12px', border: 'none', backgroundColor: 'transparent' }}>
                      {sube.location}
                    </button>
                  </MobileNone>
                  <td>
                    {sube.phoneNumber ? (
                      <a href={`tel:+90${sube.phoneNumber}`}>
                        <button
                          style={{ padding: '8px 12px', border: 'none', backgroundColor: '#ce9136', color: '#fff' }}
                        >
                          {sube.phoneNumber} <FaPhone />
                        </button>
                      </a>
                    ) : (
                      <button
                        style={{ padding: '8px 12px', border: 'none', backgroundColor: 'transparent', color: '#fff' }}
                      >
                        --
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default SubePage;
