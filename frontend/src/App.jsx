
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { AppBar } from '@mui/material';

import NavBar from './component/navBar/NavBar';
import { Routes, Route,BrowserRouter } from 'react-router-dom';


import Combos from './pages/Combos';
import Contacto from './pages/Contacto';
import Pizzas from './pages/Pizzas';
import Search from './pages/Search';



const navigationLink = [

  {
    "title": "combos",
    "path": "/combos",
    "icon": <LiveTvIcon />,
  },

  {
    title: "contacto",
    path: "/contacto",
    icon: <LiveTvIcon />,
  },
  {

    title: "pizzas",
    path: "/pizzas",
    icon: <LiveTvIcon />,
  },
  {

    title: "Search",
    path: "/Search",
    icon: <LiveTvIcon />,
  }

];

function App() {


  return (

      <>
      <NavBar navigationLink={navigationLink} />
        <Routes>

          <Route
            path="/"
            element={<ItemListConteiner/>}
          />
          <Route
            path="/combos"
            element={<Combos />}
          />
          <Route
            path="/contacto"
            element={<Contacto />}
          />
          <Route
            path="/pizzas"
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
