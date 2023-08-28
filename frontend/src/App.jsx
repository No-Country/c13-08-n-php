
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { AppBar } from '@mui/material';

import NavBar from './component/navBar/NavBar';
//import Fotter from './component/fotter/Fotter.jsx';
import { Routes, Route,BrowserRouter } from 'react-router-dom';

import  Contacto  from './pages/Contacto';
import Combos from './pages/combos';
import Pizzas from './pages/pizzas';
import Search from './pages/Search';
import panificados from './pages/panificados';
import LoginSesion from './component/loginSesion/LoginSesion';
import "./app.css"
import Fotter from './component/fotter/fotter';
import Infomation from './component/information/Infomation';








const navigationLink = [


  {
    title: "Combos",
    path: "/combos",
    icon: <LiveTvIcon />,
  },
  {

    title: "Contacto",
    path: "/contacto",
    icon: <LiveTvIcon />,
  },
  {

    title: "Pizzas",
    path: "/pizzas",
    icon: <LiveTvIcon />,
  },
  {

    title: "Panificados",
    path: "/panificados",
    icon: <LiveTvIcon />,
  },
  

];

function App() {


  return (

      <>
      <NavBar navigationLink={navigationLink} />
        <Routes>
          <Route
            path="/combos"
            element={<Combos />}
          />
          <Route
            path="/Documentales"
            element={<Contacto />}
          />
          <Route
            path="/Novedades"
            element={<Pizzas />}
          />
          <Route
            path="/panificados"
            element={<panificados />}
          />
          <Route
            path="/login"
            element={<LoginSesion/>}
          />
        </Routes>
        <Infomation/>
        <Fotter/>
     </>

  )
}

export default App
