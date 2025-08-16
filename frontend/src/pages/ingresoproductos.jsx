import React, { useState } from 'react';

// --- Icono de Carga ---
// Idealmente, este componente debería estar en su propio archivo: src/icons/UploadIcon.jsx
const UploadIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
  </svg>
);


const IngresoProductos = () => {
  // Estado para manejar los archivos de imagen
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    // Lógica para manejar la selección de archivos
    if (event.target.files) {
      setFiles([...files, ...event.target.files]);
    }
  };

  return (
    // Contenedor principal de la página con un fondo gris claro
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      
      {/* Encabezado de la página con título y breadcrumbs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Añadir Producto</h1>
        </div>
        <div className="text-sm text-gray-500 mt-2 sm:mt-0">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Products</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">Añadir Producto</span>
        </div>
      </div>

      <form>
        {/* Formulario principal contenido en una tarjeta blanca */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
            Descripcion del Producto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Campo: Nombre del Producto */}
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Producto
              </label>
              <input
                type="text"
                id="productName"
                placeholder="Enter product name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Campo: Categoría */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <select
                id="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select a categoria</option>
                <option value="categoria1">Categoría 1</option>
                <option value="categoria2">Categoría 2</option>
              </select>
            </div>

            {/* Campo: Marca */}
            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                Marca
              </label>
              <select
                id="brand"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">selecciona una marca</option>
                <option value="marca1">Marca 1</option>
                <option value="marca2">Marca 2</option>
              </select>
            </div>

            {/* Campo: Cantidad */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Cantidad
              </label>
              <input
                type="number"
                id="quantity"
                placeholder="Enter quantity"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Campo: Vehículo Compatible */}
            <div className="md:col-span-2">
              <label htmlFor="compatibleVehicle" className="block text-sm font-medium text-gray-700 mb-2">
                Vehículo Compatible
              </label>
              <select
                id="compatibleVehicle"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Seleccione un vehículo</option>
                <option value="vehiculo1">Vehículo 1</option>
                <option value="vehiculo2">Vehículo 2</option>
              </select>
            </div>

            {/* Campo: Descripción */}
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Descripcion 
              </label>
              <textarea
                id="description"
                rows="4"
                placeholder="Receipt info (optional)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Sección para Subir Imágenes */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
           <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Imagen del Producto
          </h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <div className="flex flex-col items-center">
              <UploadIcon className="w-12 h-12 text-gray-400" />
              <p className="mt-4 text-sm text-gray-600">
                <span className="font-semibold text-indigo-600 cursor-pointer hover:underline">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              <input type="file" multiple className="hidden" onChange={handleFileChange} />
            </div>
          </div>
        </div>

        {/* Botones de Acción Finales */}
        <div className="flex justify-end gap-4 mt-8">
          <button type="button" className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Desacer
          </button>
          <button type="submit" className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Publicar Producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default IngresoProductos;
