import { useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import Table from '../components/Table';
import Masthead from '../components/Masthead';
import TableRow from '../components/TableRow';
import styled from 'styled-components';

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
  { id: 12, name: 'Kadıköy Şubesi', location: 'İstanbul', phoneNumber: "5325132858" },
  { id: 13, name: 'Kaynarca Şubesi', location: 'İstanbul' },
  { id: 14, name: 'Avcılar Şubesi', location: 'İstanbul' },
  { id: 15, name: 'Gaziosmanpaşa Şubesi', location: 'İstanbul', phoneNumber: '5348491825' },
  { id: 16, name: 'Üsküdar Şubesi', location: 'İstanbul' },
  { id: 17, name: 'Trabzon Şubesi', location: 'Trabzon', phoneNumber: '5398125540' },
  { id: 18, name: 'Sakarya Şubesi', location: 'Sakarya', phoneNumber: '5325454625' },
];

const TableHeader = styled.div`
  font-weight: 700;
`;

const SubePage = () => {
  const { pathname } = useLocation();
  useScrollToTop(pathname, 'Şubelerimiz');

  return (
    <>
      <Masthead headerText="Şubelerimiz" headerColor="#fff" img="/umre_header.jpg" />
      <div style={{ width: '80%', margin: '0 auto', fontSize: '6px' }}>
        <Table columns="2fr 2fr 2fr">
          <Table.Header>
            <TableHeader>ŞUBE ADI</TableHeader>
            <TableHeader>ŞEHİR</TableHeader>
            <TableHeader>TELEFON</TableHeader>
          </Table.Header>

          <Table.Body data={subeler} render={(sube) => <TableRow key={sube.id} sube={sube} />}></Table.Body>
        </Table>
      </div>
    </>
  );
};

export default SubePage;
