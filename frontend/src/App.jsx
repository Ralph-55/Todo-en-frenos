import React from 'react';

function App() {
  return (
    // Se cambió "class" por "className" y se añadió "min-h-screen"
    <div className="min-h-screen bg-gray-100 border border-gray-200 px-6 py-4">
      <div className="flex flex-row justify-between items-center">
        <div>hola</div>
        <div>menu</div>
        <div>usuario</div>
      </div>
      {/* Puedes añadir más contenido aquí y seguirá dentro del contenedor blanco con borde */}
    </div>
  );
}

export default App;
