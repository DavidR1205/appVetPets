import { BrowserRouter, useLocation } from 'react-router-dom';
import LayoutHome from './layouts/LayoutHome.jsx';
import LayoutLogin from './layouts/LayoutLogin.jsx';
import Router from './router/Router.jsx';

function App() {

  const location = useLocation();

  const loginRoutes = [
    "/login"
  ]

  return (
    <>
      {
        loginRoutes.some(route => location.pathname.startsWith(route)) ? (
          <LayoutLogin>
            <Router />
          </LayoutLogin>
        ) : (
          <LayoutHome>
            <Router />
          </LayoutHome>
        )
      }
    </>
  )

}

export default App
