import React from 'react';

// --- Componentes de Íconos (SVG para replicar el diseño) ---
const SearchIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const FilterIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-4.586L3.293 6.707A1 1 0 013 6V4z"></path>
  </svg>
);

const PlusIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
    </svg>
);

const DownloadIcon = (props) => (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>
);

const DotsVerticalIcon = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
);


// --- Datos de Ejemplo ---
const products = [
  { id: 1, name: 'ASUS ROG Gaming Laptop', img: 'https://placehold.co/40x40/e2e8f0/334155?text=L', category: 'Laptop', brand: 'ASUS', price: 2199, stock: 'Out of Stock', createdAt: '01 Dec, 2027' },
  { id: 2, name: 'Airpods Pro 2nd Gen', img: 'https://placehold.co/40x40/e2e8f0/334155?text=A', category: 'Accessories', brand: 'Apple', price: 839, stock: 'In Stock', createdAt: '29 Jun, 2027' },
  { id: 3, name: 'Apple Watch Ultra', img: 'https://placehold.co/40x40/e2e8f0/334155?text=W', category: 'Watch', brand: 'Apple', price: 1579, stock: 'Out of Stock', createdAt: '13 Mar, 2027' },
  { id: 4, name: 'Bose QuietComfort Earbuds', img: 'https://placehold.co/40x40/e2e8f0/334155?text=E', category: 'Audio', brand: 'Bose', price: 279, stock: 'In Stock', createdAt: '18 Nov, 2027' },
  { id: 5, name: 'Canon EOS R5 Camera', img: 'https://placehold.co/40x40/e2e8f0/334155?text=C', category: 'Camera', brand: 'Canon', price: 3899, stock: 'In Stock', createdAt: '28 Sep, 2027' },
  { id: 6, name: 'Dell XPS 13 Laptop', img: 'https://placehold.co/40x40/e2e8f0/334155?text=L', category: 'Laptop', brand: 'Dell', price: 1299, stock: 'In Stock', createdAt: '18 Aug, 2027' },
  { id: 7, name: 'Google Pixel 8 Pro', img: 'https://placehold.co/40x40/e2e8f0/334155?text=P', category: 'Phone', brand: 'Google', price: 899, stock: 'Out of Stock', createdAt: '02 Sep, 2027' },
];

// CORREGIDO: El nombre del componente ahora empieza con mayúscula
const ProductList = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Encabezado Principal */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product List</h1>
          <p className="text-sm text-gray-500 mt-1">Track your store's progress to boost your sales.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">
            <DownloadIcon className="w-5 h-5" />
            Export
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-lg shadow-sm hover:bg-indigo-700">
            <PlusIcon className="w-5 h-5" />
            Add Product
          </button>
        </div>
      </div>

      {/* Contenedor de la Tabla */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Barra de Búsqueda y Filtros */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="relative w-full max-w-xs">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">
            <FilterIcon className="w-5 h-5" />
            Filter
          </button>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4"><input type="checkbox" className="rounded" /></th>
                <th scope="col" className="px-6 py-3">Products</th>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">Brand</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">Stock</th>
                <th scope="col" className="px-6 py-3">Created At</th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="p-4"><input type="checkbox" className="rounded" /></td>
                  <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-md" src={product.img} alt={`${product.name} image`} />
                    <div className="pl-3">
                      <div className="text-base font-semibold">{product.name}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">${product.price.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.stock === 'In Stock' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                    }`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4">{product.createdAt}</td>
                  <td className="px-6 py-4">
                    <button className="text-gray-500 hover:text-gray-800">
                        <DotsVerticalIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// CORREGIDO: El nombre del componente ahora empieza con mayúscula
export default ProductList;
