import { useLocation, useNavigate } from 'react-router-dom';
import LayoutHome from './layouts/LayoutHome.jsx';
import LayoutLogin from './layouts/LayoutLogin.jsx';
import Router from './router/Router.jsx';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const loginRoutes = ["/login"];
  const appRoutes = [
    "/citas",
    "/pacientes",
    "/ventas",
    "/clientes",
    "/historial",
    "/"
  ];

  useEffect(() => {
    // Verifica si la ruta actual es válida
    const isValidRoute =
      loginRoutes.some(route => location.pathname.startsWith(route)) ||
      appRoutes.some(route => location.pathname.startsWith(route));

    // Si no es válida, redirige al inicio
    if (!isValidRoute) {
      navigate("/"); // Redirige al inicio
    }
  }, [location.pathname, loginRoutes, appRoutes, navigate]);

  // Determina el layout según la ruta actual
  const isLoginRoute = loginRoutes.some(route => location.pathname.startsWith(route));
  const isAppRoute = appRoutes.some(route => location.pathname.startsWith(route));

  // Si no es ninguna ruta válida, no renderiza nada mientras redirige
  if (!isLoginRoute && !isAppRoute) {
    return null;
  }

  return (
    <>
      {isLoginRoute ? (
        <LayoutLogin>
          <Router />
        </LayoutLogin>
      ) : (
        <LayoutHome>
          <Router />
        </LayoutHome>
      )}
    </>
  );
}

export default App;