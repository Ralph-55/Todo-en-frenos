import React , {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Navbar from './navbar';


const AppLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

return (
    // Contenedor principal que ocupa toda la pantalla y organiza verticalmente
  <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar isOpen={isSidebarOpen} />

      {/* 2. Contenedor secundario: ocupa el espacio restante y organiza verticalmente (Navbar / Contenido) */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />

        {/* 3. Contenido principal con su propio scroll */}
        <main className="flex-1 overflow-y-auto py-4 px-4 bg-gray-50 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;