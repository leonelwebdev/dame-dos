import { useState } from "react";

const HomePage = () => {
  const [producto, setProducto] = useState('');
  const [color, setColor] = useState('');
  const [nombre, setNombre] = useState('');

  const handleCopy = () => {
    const text = `Necesito imagen realista manteniendo proporciones de este/a ${producto}, con fondo de ${color} pastel, con un texto por detras del producto (entre el mismo y el fondo) que diga en una fuente minúscula similar a Poppins '${nombre}'`;
    navigator.clipboard.writeText(text);
  };

  return (
    <section>
      <h1>Home Page</h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-4">
          <label>Producto:</label>
          <input type="text" value={producto} onChange={e => setProducto(e.target.value)}/>
          <label>Color:</label>
          <input type="text" value={color} onChange={e => setColor(e.target.value)}/>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)}/>
        </div>
        <button onClick={handleCopy}>Copiar</button>
      </div>
    </section>
  );
};

export default HomePage;
