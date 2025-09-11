import { useNavigate, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS, ROUTES } from '@constants';
import logo from '@assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }) => {
    const menuItem = NAVIGATION_ITEMS.find(item => item.key === key);
    if (menuItem) {
      navigate(menuItem.path);
    }
  };

  const handleLogoClick = () => {
    navigate(ROUTES.HOME);
  };

  // Determinar el item seleccionado basado en la ruta actual
  const getSelectedKey = () => {
    const currentItem = NAVIGATION_ITEMS.find(item => item.path === location.pathname);
    return currentItem ? [currentItem.key] : [];
  };

  return (
    <header style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }} className="shadow-2xl px-4 lg:px-8 flex items-center justify-between sticky top-0 z-100">
      {/* Logo */}
      <section className="flex items-center ml-8">
        <article
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <div className="py-2 lg:py-0">
            <img src={logo} className='h-12' alt="Logo" />
          </div>
          <div>
          </div>
        </article>
      </section>

      {/* Navigation Menu */}
      <div className="hidden lg:block flex-1 max-w-2xl my-4 mx-8">
        {/* <Menu
          mode="horizontal"
          items={NAVIGATION_ITEMS}
          onClick={handleMenuClick}
          selectedKeys={getSelectedKey()}
          className="border-none bg-transparent justify-center"
          style={{ minWidth: 0, background: 'transparent' }}
        /> */}
      </div>

      {/* Right Side Buttons */}
      <section className="hidden md:flex mr-8">
        {/* <Button type="text" icon={<SearchOutlined style={{ color: 'white' }} />} />
        <Button type="text" icon={<CustomerServiceOutlined style={{ color: 'white' }} />} />
        <Button type="primary" icon={<GlobalOutlined style={{ color: 'white' }} />}>
          ES
        </Button> */}
        {/* <Button type="default">
          Select local sites
        </Button> */}
      </section>
    </header>
  );
};

export default Header;
