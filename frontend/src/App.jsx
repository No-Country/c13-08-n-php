
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { AppBar } from '@mui/material';

import NavBar from './component/navBar/NavBar';
import { Routes, Route,BrowserRouter } from 'react-router-dom';

import  Contacto  from './pages/Contacto';
import Combos from './pages/combos';
import Pizzas from './pages/pizzas';
import Search from './pages/Search';
//import ItemListConteiner from './component/itemListConteiner/ItemListConteiner';


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
  }

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
            path="/Search"
            element={<Search />}
          />

        </Routes>
     </>



    

  )
}

export default App
