import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from '@constants';

// Pages
import HomePage from '@pages/HomePage';
import AboutPage from '@pages/AboutPage';
import ServicesPage from '@pages/ServicesPage';
import NewsPage from '@pages/NewsPage';
import SupportPage from '@pages/SupportPage';
import ContactPage from '@pages/ContactPage';

// Layout
import Layout from '@components/layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Layout />} />
          <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.NEWS} element={<NewsPage />} />
          <Route path={ROUTES.SUPPORT} element={<SupportPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          {/* Fallback route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
