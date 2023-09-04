
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CardsContainer from './component/CardsContainer/CardsContainer';
import NavBar from './component/navBar/NavBar';
import LoginModal from './component/LoginModal/LoginModal';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './component/Cart/Cart';
import "./app.css"
import Fotter from './component/fotter/fotter';
import Infomation from './component/information/Infomation';
import SignInSide from './component/loginSesion/anotherLogin';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import Slider from './component/Slider/Slider';
import ItemDetailContainer from './component/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from './Context/CarritoContext';
import { CssBaseline } from '@mui/material';
import ItemsPizzas from './component/ItemsPizzas/ItemsPizzas';
import ItemsPanes from './component/ItemsPanes/ItemsPanes';
import ItemsFocaccias from './component/ItemsFocaccias/ItemsFocaccias';
import ItemsCombos from './component/ItemsCombos/ItemsCombos';
import ItemsTodosProductos from './component/ItemsTodosProductos/ItemsTodosProductos';

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
    path: "/registro",
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
              path="/registro"
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
