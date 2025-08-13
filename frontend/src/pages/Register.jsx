import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// --- Componentes de Íconos (SVG para que funcionen sin instalar nada más) ---
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

const Register = () => {
  // Tu lógica de estado existente
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Estado para el checkbox
  const navigate = useNavigate();

  // Tu función handleSubmit existente
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isChecked) {
      setError('Debes aceptar los términos y condiciones.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, contraseña }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'No se pudo registrar.');
      }
      alert('¡Usuario registrado exitosamente! Ahora puedes iniciar sesión.');
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
              Crear una Cuenta
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Ingresa tus datos para registrarte
            </p>
          </div>

          {/* Botones de Registro Social */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
            <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
              {/* SVG de Google */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z" fill="#4285F4"/><path d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z" fill="#34A853"/><path d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z" fill="#FBBC05"/><path d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z" fill="#EB4335"/></svg>
              Registrarse con Google
            </button>
            <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
              {/* SVG de X */}
              <svg width="21" className="fill-current" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6705 1.875H18.4272L12.4047 8.75833L19.4897 18.125H13.9422L9.59717 12.4442L4.62554 18.125H1.86721L8.30887 10.7625L1.51221 1.875H7.20054L11.128 7.0675L15.6705 1.875ZM14.703 16.475H16.2305L6.37054 3.43833H4.73137L14.703 16.475Z" /></svg>
              Registrarse con X
            </button>
          </div>

          {/* Separador "Or" */}
          <div className="relative py-3 sm:py-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-400 bg-gray-50 dark:bg-gray-900 sm:px-5">
                O continuar con
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ingresa tu nombre completo"
                  required
                  className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu.correo@example.com"
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
                    type={showPassword ? "text" : "contraseña"}
                    value={contraseña}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Crea una contraseña segura"
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
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox"
                  id="terms"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                  Acepto los <a href="#" className="font-medium text-indigo-600 hover:underline">Términos y Condiciones</a>
                </label>
              </div>
              <div>
                <button type="submit" className="w-full py-3 text-sm font-semibold text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Crear Cuenta
                </button>
              </div>
            </div>
          </form>

          {error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}

          <div className="mt-6 text-center">
            <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
              ¿Ya tienes una cuenta?{" "}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
              >
                Inicia Sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
