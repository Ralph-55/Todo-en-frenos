import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// --- Componentes de Páginas y Layout ---
import Login from './pages/login.jsx'; // Este es tu componente de Login
import Register from './pages/Register.jsx';
import AppLayout from './components/layout.jsx'; 
import App from './App.jsx'; // Este será tu Dashboard o página principal
import ProductList from './pages/listaproduct.jsx';
import IngresoProductos from './pages/ingresoproductos.jsx';

import './index.css';



// --- Configuración del Enrutador ---
const router = createBrowserRouter([
  // 1. Rutas públicas (sin sidebar)
  {
    path: '/login',
    element: <Login />,
  },
    {
    path: '/Register',
    element: <Register />
  },

  // 2. Ruta "Contenedor" que usa el Layout con el Sidebar
  {
    path: '/app', // Esta es ahora la ruta padre para la app principal
    element: <AppLayout />,
    // 3. Rutas "hijas" que se mostrarán dentro del Layout
    children: [
      {
        index: true, // La página por defecto cuando se visita "/"
        element: <App />, // App.jsx ahora es tu página principal o Dashboard
      },
      {
      path: 'Productlist', // Ruta para la lista de productos
      element: <ProductList />,
      },
      {
        path: 'IngresoProductos', // Ruta para el ingreso de productos
        element: <IngresoProductos />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
