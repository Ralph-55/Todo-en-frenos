import React from "react";

const IngresoProductos = () => {
    return (
        <div className="border border-gray-400 rounded-lg p-4 m-4">
            <div>
                <label className="text-gray-500 px-2 py-3">
                    Registro de Productos
                </label>
            </div>
            <div >
                <div className=" flex flex-row justify-center h-full border border-gray-400 gap-4 p-4">
                    <input type="text"
                    placeholder="Nombre" />
                </div>
            </div>
        </div>
    )
}

export default IngresoProductos;
