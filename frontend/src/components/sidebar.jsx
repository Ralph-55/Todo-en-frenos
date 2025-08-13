import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Componente para los íconos (puedes reemplazarlos con una librería como Lucide o Heroicons)
const Icon = ({ path }) => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path}></path>
  </svg>
);

const Sidebar = () => {
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const activeLinkStyle = {
    backgroundColor: '#fffff',
    color: 'white',
  };

  return (
    <div className="flex h-screen w-72 flex-col bg-white text-gray-300 border border-gray-200">
      <div className="flex items-center justify-center h-20 border-gray-500 ">
        <h1 className="text-2xl font-bold text-gray-600">Mi Panel</h1>
      </div>
      <nav className="flex-1 px-4 py-4 ">
        <h2 className="mb-2 text-xs font-semibold tracking-wider text-gray-600 uppercase">Menu</h2>
        
        {/* Enlace con submenú */}
        <div>
          <button onClick={() => setDashboardOpen(!dashboardOpen)} className="flex items-center justify-between w-full px-4 py-2 mt-1 text-sm font-medium text-left rounded-lg hover:bg-blue-100 focus:outline-none">
            <div className="flex items-center text-gray-600 ">
              <Icon path="M4 6h16M4 12h16M4 18h16" />
              <span className="ml-3">Dashboard</span>
            </div>
            <Icon path={dashboardOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
          </button>
          {dashboardOpen && (
            <div className="pl-8 mt-2 space-y-2  text-gray-600 ">
              <NavLink to="/app/dashboard/ecommerce" className="block px-4 py-2 text-sm rounded-lg hover:bg-blue-100" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
                Ecommerce
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/app/analytics" className="flex items-center px-4 py-2 mt-1 text-sm font-medium rounded-lg hover:bg-blue-100" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
          <Icon path="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          <span className="ml-3  text-gray-600 ">Analytics</span>
        </NavLink>
        
        <NavLink to="/app/profile" className="flex items-center px-4 py-2 mt-1 text-sm font-medium rounded-lg hover:bg-blue-100" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
          <Icon path="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <span className="ml-3  text-gray-600">User Profile</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
