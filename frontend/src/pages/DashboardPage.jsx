import React from 'react';
import { Link } from 'react-router-dom';

// --- Iconos para el Dashboard (puedes moverlos a tu carpeta /icons) ---
const WrenchIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);
const ArchiveBoxIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
);
const DocumentTextIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
);
const CheckCircleIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

// --- Datos de Ejemplo ---
const recentServices = [
    { id: 1, vehicle: 'Toyota Corolla', client: 'Ana Pérez', status: 'En Reparación' },
    { id: 2, vehicle: 'Ford F-150', client: 'Carlos Rivas', status: 'Esperando Repuestos' },
    { id: 3, vehicle: 'Honda Civic', client: 'Maria López', status: 'En Diagnóstico' },
    { id: 4, vehicle: 'Chevrolet Spark', client: 'Luis Gómez', status: 'Listo para Entrega' },
];

const DashboardPage = () => {
  return (
    <div>
      {/* Encabezado del Dashboard */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Bienvenido, aquí tienes un resumen de la actividad del taller.</p>
        </div>
        <Link to="/app/create-quote" className="mt-4 sm:mt-0 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
          Crear Presupuesto
        </Link>
      </div>

      {/* Tarjetas de Estadísticas (KPIs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Tarjeta 1: Servicios en Progreso */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Servicios en Progreso</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <WrenchIcon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        {/* Tarjeta 2: Repuestos con Bajo Stock */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Repuestos Bajo Stock</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">8</p>
            </div>
            <div className="p-3 bg-red-100 rounded-full">
              <ArchiveBoxIcon className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
        {/* Tarjeta 3: Presupuestos Pendientes */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Presupuestos Pendientes</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <DocumentTextIcon className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        {/* Tarjeta 4: Servicios Completados (Hoy) */}
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Completados (Hoy)</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <CheckCircleIcon className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Sección Principal: Gráfico y Actividad Reciente */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Izquierda: Gráfico */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Actividad Semanal</h3>
          <div className="flex items-center justify-center h-64 bg-gray-50 rounded-md">
            <p className="text-gray-500">Aquí irá un gráfico de barras</p>
          </div>
        </div>
        
        {/* Columna Derecha: Actividad Reciente */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Últimos Servicios Actualizados</h3>
          <ul className="space-y-4">
            {recentServices.map(service => (
              <li key={service.id} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                  <WrenchIcon className="w-5 h-5 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{service.vehicle}</p>
                  <p className="text-sm text-gray-500 truncate">{service.client}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  service.status === 'Listo para Entrega' ? 'bg-green-100 text-green-800' :
                  service.status === 'En Reparación' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {service.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
