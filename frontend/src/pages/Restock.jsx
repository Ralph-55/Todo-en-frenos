import React from 'react';

// --- Iconos (puedes moverlos a tu carpeta /icons) ---
const SearchIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const RestockPage = () => {
  return (
    // Contenedor principal de la página
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      
      {/* Encabezado de la página */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Restock Product</h1>
          <p className="text-sm text-gray-500 mt-1">Add new units to an existing product in your inventory.</p>
        </div>
        <div className="text-sm text-gray-500 mt-2 sm:mt-0">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Inventory</span>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">Restock</span>
        </div>
      </div>

      {/* Formulario principal en una tarjeta */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-4 mb-6">
          Restock Information
        </h2>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Campo: Selector de Producto */}
            <div className="md:col-span-2">
              <label htmlFor="productSearch" className="block text-sm font-medium text-gray-700 mb-2">
                Select Product
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="productSearch"
                  placeholder="Search by product name or SKU..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {/* Aquí podrías mostrar una lista de resultados de búsqueda */}
            </div>

            {/* Campo: Cantidad a Añadir */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity to Add
              </label>
              <input
                type="number"
                id="quantity"
                placeholder="e.g., 50"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Campo: Nuevo Costo (Opcional) */}
            <div>
              <label htmlFor="newCost" className="block text-sm font-medium text-gray-700 mb-2">
                New Cost (Optional)
              </label>
              <input
                type="number"
                id="newCost"
                placeholder="e.g., 15.99"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Campo: Referencia de Compra (Opcional) */}
            <div className="md:col-span-2">
              <label htmlFor="purchaseReference" className="block text-sm font-medium text-gray-700 mb-2">
                Purchase Reference (Optional)
              </label>
              <input
                type="text"
                id="purchaseReference"
                placeholder="e.g., Invoice #12345"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200">
            <button type="button" className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
              Add Stock
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default RestockPage;
