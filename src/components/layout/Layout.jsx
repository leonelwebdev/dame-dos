import Header from '@components/layout/Header';
// import HomePage from '@pages/HomePage';
import Footer from '@components/layout/Footer';

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
