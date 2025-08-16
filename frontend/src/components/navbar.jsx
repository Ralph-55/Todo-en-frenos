import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Componentes de Íconos (SVG para simplicidad) ---
const MenuIcon = (props) => (
  <svg {...props} stroke="currentColor" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const SearchIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const BellIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const Navbar = ({ onMenuClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white border border-gray-200">
      {/* Lado Izquierdo: Botón de Menú y Barra de Búsqueda */}
      <div className="flex items-center">
        <button onClick={onMenuClick} className="p-2 text-gray-500 rounded-md hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white">
          <MenuIcon className="w-6 h-6" />
        </button>

        <div className="relative ml-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="w-5 h-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-md dark:bg-white  dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Lado Derecho: Notificaciones y Perfil de Usuario */}
      <div className="flex items-center">
        <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
          <BellIcon className="w-6 h-6" />
        </button>

        <div className="relative ml-4">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src="https://placehold.co/40x40/7e3af2/ffffff?text=R"
              alt="User Avatar"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">Ralph</span>
          </button>

          {/* Menú Desplegable del Usuario */}
          {dropdownOpen && (
            <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
              <Link to="/app/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Mi Perfil
              </Link>
              <Link to="/app/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Configuración
              </Link>
              <div className="border-t border-gray-200 dark:border-gray-700"></div>
              <Link to="/login" className="block w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                Cerrar Sesión
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
