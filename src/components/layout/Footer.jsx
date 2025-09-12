import logo from '@assets/full-logo.png';

const Footer = () => {
  return (
    <footer className="bg-red-400 p-4 text-white mt-auto">
      <section className='w-full flex items-center justify-center'>
        <article className='flex flex-col items-center gap-5'>
          {/* <img src={logo} alt="Logo" className="w-32 h-32" /> */}
          <h2>Dame Dos 2025</h2>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
