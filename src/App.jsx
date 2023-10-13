import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Spinner from './components/Spinner';

import UmrePage from './pages/UmrePage';
import LuxUmrePage from './pages/LuxUmrePage';

const Home = lazy(() => import('./pages/Home'));
const AppLayout = lazy(() => import('./components/AppLayout'));
const HacPage = lazy(() => import('./pages/HacPage'));
const CultureToursPage = lazy(() => import('./pages/CultureToursPage'));
const KudusToursPage = lazy(() => import('./pages/KudusToursPage'));
const ForeignToursPage = lazy(() => import('./pages/ForeignToursPage'));
const InformationPage = lazy(() => import('./pages/InformationPage'));
const CommunicationPage = lazy(() => import('./pages/CommunicationPage'));
const SubePage = lazy(() => import('./pages/SubePage'));

import { umreCardDatas, sevvalUmreCardDatas, ramazanUmreCardDatas, somestrUmreCardDatas } from './data/umre';
import {
  luxUmreCardDatas,
  sevvalLuxUmreCardDatas,
  ramazanLuxUmreCardDatas,
  somestrLuxUmreCardDatas,
} from './data/luxUmre';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="hac" element={<HacPage />} />

            {/* UMRE PAGES */}
            <Route path="umre" element={<UmrePage cardDatas={umreCardDatas} headerText="Normal Dönem Umre" />} />
            <Route
              path="lux-umre"
              element={<LuxUmrePage cardDatas={luxUmreCardDatas} headerText="Normal Dönem Lüx Umre" />}
            />

            <Route path="sevval-umresi" element={<Outlet />}>
              <Route
                path="lux-umre"
                element={<LuxUmrePage cardDatas={sevvalLuxUmreCardDatas} headerText="Şevval Lüx Umre" />}
              />
              <Route path="umre" element={<UmrePage cardDatas={sevvalUmreCardDatas} headerText="Şevval Umresi" />} />
            </Route>
            <Route path="ramazan-umresi" element={<Outlet />}>
              <Route
                path="lux-umre"
                element={<LuxUmrePage cardDatas={ramazanLuxUmreCardDatas} headerText="Ramazan Lüx Umre" />}
              />
              <Route path="umre" element={<UmrePage cardDatas={ramazanUmreCardDatas} headerText="Ramazan Umresi" />} />
            </Route>
            <Route path="somestr-umresi" element={<Outlet />}>
              <Route
                path="lux-umre"
                element={<LuxUmrePage cardDatas={somestrLuxUmreCardDatas} headerText="Sömestr Lüx Umre" />}
              />
              <Route path="umre" element={<UmrePage cardDatas={somestrUmreCardDatas} headerText="Sömestr Umresi" />} />
            </Route>

            {/* OTHER PAGES */}
            <Route path="kultur-turlari" element={<CultureToursPage />} />
            <Route path="kudus-turlari" element={<KudusToursPage />} />
            <Route path="yurtdisi-turlari" element={<ForeignToursPage />} />
            <Route path="subelerimiz" element={<SubePage />} />
            <Route path="hakkimizda" element={<InformationPage />} />
            <Route path="iletisim" element={<CommunicationPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
