import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// --- Componentes de Íconos (Puedes crearlos o usar una librería) ---
// Para que los íconos se muestren, necesitarás componentes como estos o usar una librería como Lucide-React.
const EyeIcon = (props) => (
  <svg {...props} viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
  </svg>
);

const EyeCloseIcon = (props) => (
  <svg {...props} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A10.025 10.025 0 00.458 10c1.274 4.057 5.064 7 9.542 7 1.852 0 3.576-.468 5.068-1.294L12.454 16.697z" clipRule="evenodd" />
  </svg>
);


const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, contraseña }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Algo salió mal');
      }
      
      localStorage.setItem('token', data.token);
      navigate('/app');

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md px-4 mx-auto sm:px-0">
        <div className="py-10">
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-2xl dark:text-white/90 sm:text-3xl">
              Iniciar Sesión
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ingresa tu email y contraseña para acceder
            </p>
          </div>
          
          {/* Formulario principal */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="info@gmail.com"
                  required
                  className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Contraseña <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={contraseña}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                    required
                    className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-10 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <EyeCloseIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <Link
                  to="/reset-password"
                  className="text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div>
                <button type="submit" className="w-full py-3 text-sm font-semibold text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Entrar
                </button>
              </div>
            </div>
          </form>

          {/* Muestra el error si existe */}
          {error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}

          <div className="mt-6 text-center">
            <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
              ¿No tienes una cuenta?{" "}
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
              >
                Regístrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
