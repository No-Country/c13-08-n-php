
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';
import { OptionProvider } from './Context/OptionsContext';
import "./app.css";
import AboutUs from './component/AboutUs/AboutUs';
import BarraMovile from './component/BarraMobile/BarraMovile';
import Bienvenida from './component/Bienvenida/Bienvenida';
import CardsContainer from './component/CardsContainer/CardsContainer';
import CartGrid from './component/CartGrid/CartGrid';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemsCombos from './component/ItemsCombos/ItemsCombos';
import ItemsFocaccias from './component/ItemsFocaccias/ItemsFocaccias';
import ItemsPanes from './component/ItemsPanes/ItemsPanes';
import ItemsPizzas from './component/ItemsPizzas/ItemsPizzas';
import ItemsTodosProductos from './component/ItemsTodosProductos/ItemsTodosProductos';
import LoginModal from './component/LoginModal/LoginModal';
import Slider from './component/Slider/Slider';
import Fotter from './component/fotter/Fotter';
import Infomation from './component/information/Infomation';
import SignInSide from './component/loginSesion/anotherLogin';
import NavBar from './component/navBar/NavBar';
import Checkout from './pages/Checkout';
import Validando from './pages/Validando';





const navigationLink = [

  {
    title: "Combos",
    path: "/combos",
    element: <ItemsCombos/>,
    icon: <LiveTvIcon/>
  },
  {
    title: "Focaccias",
    path: "/focaccias",
    element: <ItemsFocaccias/>,
    icon: <LiveTvIcon />,
  },
  {
    title: "Pizzas",
    path: "/pizzas",
    element: <ItemsPizzas/>,
    icon: <LiveTvIcon />,
  },
  {
    title: "Panificados",
    path: "/panificados",
    element: <ItemsPanes/>,
    icon: <LiveTvIcon />,
  },
  {
    title: "Acerca de",
    path: "/aboutus",
    element: <AboutUs/>,
    icon: <LiveTvIcon />,
  }

  
];

function App() {

  // Make the backgorund darker when the modal is open
  const [show, setShow] = useState(false);

  useEffect(() => {
    //if the user is in /cart route without login, the modal will show up
  if (window.location.pathname === '/cart' || window.location.pathname === '/checkout') {
    console.log('cart');
    if (!document.cookie.includes('token')) {
      setShow(true);
    }
  }
  });
  return (
    <>
      
        <BrowserRouter>
         
        <CarritoProvider>
          <OptionProvider>
            <CssBaseline>
              <div className={show ? "darkFilter": ""}>
            <NavBar navigationLink={navigationLink} show={show} setShow={setShow}/>
         
        <Routes>
          

            <Route
              path='/'
              element={
              <>
              <Slider /> 
              <Infomation />
              < CardsContainer />
              <ItemListContainer />              
              < Bienvenida />
              <BarraMovile />
              

              </>
              
              }
            />

            <Route
              path="/combos"
              element={<ItemsCombos />}
            />

            <Route
              path="/focaccias"
              element={<ItemsFocaccias />}
            />

            <Route
              path="/pizzas"
              element={<ItemsPizzas/>}
            />

            <Route
              path="/panificados"
              element={<ItemsPanes />}
            />

            <Route
              path="/login"
              element={ <LoginModal show={show} setShow={setShow}/>}
            /> 
            
            <Route
              path="/register"
              element={<SignInSide />}
            />

           <Route
              path='/cart'
              element={<CartGrid />}
            />

            <Route 
            path="/todosProductos"
            element={<ItemsTodosProductos/>}
            />

            <Route 
            path="/aboutus"
            element={<AboutUs/>}
            />

            <Route
              path="/checkout"
              element={<Checkout />}
            />

            <Route
              path="/validando"
              element={<Validando />}
            />
           
          </Routes>

            <Fotter /> 
         </div>
          <LoginModal show={show} setShow={setShow}/>
       
            </CssBaseline>
          </OptionProvider>
        </CarritoProvider>     
           
        </BrowserRouter>
      
      
    </>
  )
}




export default App
