
import LiveTvIcon from '@mui/icons-material/LiveTv';
//import { AppBar } from '@mui/material';
import CardsContainer from './component/CardsContainer/CardsContainer';
import NavBar from './component/navBar/NavBar';
import LoginModal from './component/LoginModal/LoginModal';
import { useState } from 'react';
//import Fotter from './component/fotter/Fotter.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Contacto from './pages/Contacto';
import Combos from './pages/Combos';
import Pizzas from './pages/Pizzas';
import Search from './pages/Search';
import Panificados from './pages/Panificados';
/* import LoginSesion from './component/loginSesion/LoginSesion'; Ya no se usa*/
import "./app.css"
import Fotter from './component/fotter/fotter';
import Infomation from './component/information/Infomation';
import SignInSide from './component/loginSesion/anotherLogin';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import Slider from './component/Slider/Slider';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import ItemsTodosProductos from './component/ItemsTodosProductos/ItemsTodosProductos';
import { CarritoProvider } from './Context/CarritoContext';
import { CssBaseline } from '@mui/material';
import Cart from './pages/Cart';

const navigationLink = [

  {
    title: "Combos",
    path: "/combos",
    icon: <LiveTvIcon />,
  },
  {
    title: "Focaccias",
    path: "/focaccias",
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
    title: "Registrarse",
    path: "/register",
    icon: <LiveTvIcon />,
  }
];

function App() {

  // Make the backgorund darker when the modal is open
  const [show, setShow] = useState(false);

  return (
    <>
      
        <BrowserRouter>
          <CarritoProvider>
            <CssBaseline>
              <div className={show ? "darkFilter": ""}>
            <NavBar navigationLink={navigationLink} />
         
        <Routes>
          

            <Route
              path='/'
              element={
              <>
              <Slider /> 
              <Infomation />
              < CardsContainer />
              <ItemListContainer />
              </>
              
              }
            />

            <Route
              path="/combos"
              element={<Combos />}
            />

            {/* <Route
              path="/focaccias"
              element={<Focaccias />}
            /> */}

            <Route
              path="/pizzas"
              element={<Pizzas/>}
            />

            {/* <Route
              path="/panificados"
              element={<Panes />}
            /> */}

            
            <Route
              path="/login"
              element={ <LoginModal show={show} setShow={setShow}/>}
            /> 
            

            
            <Route
              path="/register"
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
            path="/todosProductos"
            element={<ItemsTodosProductos/>}
            />

           

            
         
           
            </Routes>

            <Fotter /> 
         </div>
          <LoginModal show={show} setShow={setShow}/>
       
            </CssBaseline>
          </CarritoProvider>       
        </BrowserRouter>
      
      
    </>
  )
}

export default App
