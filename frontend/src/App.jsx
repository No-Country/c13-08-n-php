
import LiveTvIcon from '@mui/icons-material/LiveTv';
//import { AppBar } from '@mui/material';
import CardsContainer from './component/CardsContainer/CardsContainer';
import NavBar from './component/navBar/NavBar';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Cart from './component/Cart/Cart';
import  Contacto  from './pages/Contacto';
import Combos from './pages/combos';
import Pizzas from './pages/pizzas';
import Search from './pages/Search';
import SignInSide from './component/loginSesion/anotherLogin';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import Slider from './component/Slider/Slider';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from './Context/CarritoContext';

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
    title: "Iniciar sesión",
    path: "/login",
    icon: <LiveTvIcon />,
  },

];

function App() {  


  return (
      <>
      
           <NavBar navigationLink={navigationLink} />
           < Slider />
           < CardsContainer />
           <Routes>

          <Route 
          path='/' 
          element={<ItemListContainer/>}/>

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
          <Route
            path="/Login"
            element={<SignInSide />}
          />
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={ <Cart />} />

        </Routes>

      
      
     </> 

  )
}

export default App
