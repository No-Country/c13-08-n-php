
import LiveTvIcon from '@mui/icons-material/LiveTv';
//import { AppBar } from '@mui/material';
import CardsContainer from './component/CardsContainer/CardsContainer';
import NavBar from './component/navBar/NavBar';
//import Fotter from './component/fotter/Fotter.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './component/Cart/Cart';
import Contacto from './pages/Contacto';
import Combos from './pages/combos';
import Pizzas from './pages/pizzas';
//import Search from './pages/Search';
//import panificados from './pages/panificados';
/* import LoginSesion from './component/loginSesion/LoginSesion'; Ya no se usa*/
import "./app.css"
//import Footer from './component/Footer/Footer';
import Infomation from './component/information/Infomation';
import SignInSide from './component/loginSesion/anotherLogin';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import Slider from './component/Slider/Slider';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from './Context/CarritoContext';
import { CssBaseline, ListItem } from '@mui/material';
import LoginModal from './component/LoginModal/LoginModal';
import ItemListCompra from './component/ItemListCompra/ItemListCompra';

//import { CarritoProvider } from './Context/CarritoContext';



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
  {
    title: "Iniciar sesión",
    path: "/login",
    icon: <LiveTvIcon />,
  }
];

function App() {


  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <CssBaseline>
        <NavBar navigationLink={navigationLink} />   
        <Routes>
          <Route 
          path='/'
          element={ 
          <>
          <Slider />
          <Infomation /> 
          <CardsContainer />          
          <ItemListContainer />
         
          
          </>          
          
          }/> 
                 

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

           {/* <Route
              path="/panificados"
              element={<panificados />}
            />*/}

            {/* 
            <Route
              path="/login"
              element={<LoginSesion />}
            /> 
            */}

            {/* Este es el login que estamos usando */}
            <Route
              path="/Login"
              element={<SignInSide />}
            />

            <Route
              path='/item/:idItem'
              element={<ItemDetailContainer />}
            />
            <Route
              path='/cart'
              element={<Cart />}
            />    
            <Route
            path='/loginModal'
            element={<LoginModal/>}/>
            
           < Route 
           path="/itemList"
           element={<ItemListCompra/>} />
        </Routes>
        </CssBaseline>
      </CarritoProvider>      
      </BrowserRouter>
        
      
      
    </>
  )
}

export default App
