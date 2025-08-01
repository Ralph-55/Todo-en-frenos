import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpia errores previos

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

      // Si el login es exitoso
      console.log('Login exitoso:', data);
      // Guarda el token para usarlo en futuras peticiones
      localStorage.setItem('token', data.token);
      // Redirige al usuario a la página principal de la app
      window.location.href = '/app';

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="contraseña"
              className="text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="contraseña"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              href="./app.jsx"
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Entrar
            </button>
          </div>

          <button>
            <a href="./app.jsx" className="text-sm text-indigo-600 hover:text-indigo-500">
              ¿Olvidaste tu contraseña?
            </a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;