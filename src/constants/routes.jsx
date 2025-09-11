// Rutas de la aplicación
export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  ABOUT: '/about',
  NEWS: '/news',
  SUPPORT: '/support',
  CONTACT: '/contact',
  STACKING: '/stacking',
  ROUTES_PAGE: '/routes'
};

// Configuración de navegación para el menú
export const NAVIGATION_ITEMS = [
  {
    key: 'home',
    label: <p className='text-white font-semibold hover:text-blue-600 duration-300'>Inicio</p>,
    path: ROUTES.HOME
  },
  {
    key: 'services',
    label: <p className='text-white font-semibold hover:text-blue-600 duration-300'>Servicios</p>,
    path: ROUTES.SERVICES
  },
  {
    key: 'about',
    label: <p className='text-white font-semibold hover:text-blue-600 duration-300'>Nosotros</p>,
    path: ROUTES.ABOUT
  },
  {
    key: 'news',
    label: <p className='text-white font-semibold hover:text-blue-600 duration-300'>Noticias</p>,
    path: ROUTES.NEWS
  },
  {
    key: 'support',
    label: <p className='text-white font-semibold hover:text-blue-600 duration-300'>Soporte</p>,
    path: ROUTES.SUPPORT
  },
  {
    key: 'contact',
    label: <p className='text-white font-semibold hover:text-blue-600 duration-300'>Contactanos</p>,
    path: ROUTES.CONTACT
  }
];
