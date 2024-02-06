import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Spinner from './components/Spinner';
import UmrePage from './pages/UmrePage';

const Home = lazy(() => import('./pages/Home'));
const AppLayout = lazy(() => import('./components/AppLayout'));
const HacPage = lazy(() => import('./pages/HacPage'));
const CultureToursPage = lazy(() => import('./pages/CultureToursPage'));
const KudusToursPage = lazy(() => import('./pages/KudusToursPage'));
const ForeignToursPage = lazy(() => import('./pages/ForeignToursPage'));
const ForeignTour = lazy(() => import('./pages/ForeignTour'));
const InformationPage = lazy(() => import('./pages/InformationPage'));
const CommunicationPage = lazy(() => import('./pages/CommunicationPage'));
const SubePage = lazy(() => import('./pages/SubePage'));

import { umreCardDatas, sevvalUmreCardDatas, summerUmreCardDatas } from './data/umre';
import { luxUmreCardDatas, sevvalLuxUmreCardDatas, summerLuxUmreCardDatas } from './data/luxUmre';
import { kisaProgram, son10GunProgram, servisli, yurumeMesafeli } from './data/ramadan';
import PageNotFound from './pages/PageNotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="hac" element={<HacPage />} />

              {/* UMRE PAGES */}
              <Route path="umre" element={<UmrePage cardDatas={umreCardDatas} headerText="Normal Dönem Umre" />} />
              <Route path="lux-umre" element={<UmrePage cardDatas={luxUmreCardDatas} headerText="Normal Dönem Lüx Umre" />} />

              <Route path="sevval-umresi" element={<Outlet />}>
                <Route path="lux-umre" element={<UmrePage cardDatas={sevvalLuxUmreCardDatas} headerText="Şevval Lüx Umre" />} />
                <Route path="umre" element={<UmrePage cardDatas={sevvalUmreCardDatas} headerText="Şevval Umresi" />} />
              </Route>
              <Route path="ramazan-umresi" element={<Outlet />}>
                {/* <Route
                path="lux-umre"
                element={<UmrePage cardDatas={ramazanLuxUmreCardDatas} headerText="Ramazan Lüx Umre" />}
              />
              <Route path="umre" element={<UmrePage cardDatas={ramazanUmreCardDatas} headerText="Ramazan Umresi" />} /> */}
                <Route index element={<UmrePage cardDatas={servisli} headerText="Ramazan Umresi" />} />
                <Route path="servisli-oteller" element={<UmrePage cardDatas={servisli} headerText="Ramazan Umresi" />} />
                <Route path="yurume-mesafeli-oteller" element={<UmrePage cardDatas={yurumeMesafeli} headerText="Ramazan Umresi" />} />
                <Route path="kisa-programlar" element={<UmrePage cardDatas={kisaProgram} headerText="Kısa Ramazan Umresi" />} />
                <Route path="son-on-gun-programlari" element={<UmrePage cardDatas={son10GunProgram} headerText="Son 10 Gün Ramazan Umresi" />} />
              </Route>
              <Route path="yaz-umresi" element={<Outlet />}>
                <Route path="lux-umre" element={<UmrePage cardDatas={summerLuxUmreCardDatas} headerText="Temmuz / Ağustos Lüx Umre" />} />
                <Route path="umre" element={<UmrePage cardDatas={summerUmreCardDatas} headerText="Temmuz / Ağustos Umresi" />} />
              </Route>

              {/* OTHER PAGES */}
              <Route path="kultur-turlari" element={<CultureToursPage />} />
              <Route path="kudus-turlari" element={<KudusToursPage />} />
              <Route path="yurtdisi-turlari" element={<ForeignToursPage />} />
              <Route path="yurtdisi-turlari/:id" element={<ForeignTour />} />

              <Route path="subelerimiz" element={<SubePage />} />
              <Route path="hakkimizda" element={<InformationPage />} />
              <Route path="iletisim" element={<CommunicationPage />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
