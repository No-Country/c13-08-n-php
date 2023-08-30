import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles.css';
import Slider from '../Slider/Slider';
import Infomation from '../information/Infomation';
import { Link } from 'react-router-dom';
const LoginModal = ({}) => {
  const [show, setShow] = useState(false);
  //after 30 seconds the modal will show up
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  //if the user clicks on the close button, the modal will close
  const closeModal = () => {
    setShow(false);
  };
  //if the user clicks on the background, the modal will close
  const closeOutside = (e) => {
    if (e.target.id === 'modal') {
      setShow(false);
    }
  };

  async function postData(Data) {
    try {
      await axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: Data,
        url: 'https://c13-08-n-php.fly.dev/api/auth/login',
      }).then((response) => {
        console.log(response);
        alert('Bienvenido');
      });
    } catch (error) {
      console.log(error);
    }
  }

  //prevent the page from refreshing when the user clicks on the button
  const handleSubmit = (e) => {
    e.preventDefault();
    //set the data in a variable
    const Data = {
      correo: e.target.correo.value,
      contrasena: e.target.contrasena.value,
    };
    //send the data to the backend
    postData(JSON.stringify(Data));
  };

  

  return (
    //made the style change depending on the state of the modal
    <>
    <Slider />
    <Infomation />
    <form
      className='modal'
      style={show ? { display: 'inline-block' } : { display: 'none' }}
      onSubmit={handleSubmit}
    >
      <div className='formulario-login'>
        <div className='frame'>
          <div className='overlap'>
            <div className='text-wrapper'>Iniciar Sesión con Google</div>
          </div>
          <div className='overlap-group'>
            {/* Modal Button Login */}
            <Link to={ '/itemList'}>
            <button className='iniciar-sesi-n' type='submit' >
              INICIAR SESIÓN
            </button>
            </Link>
            
          </div>
          <p className='quiero-crear-una'>
            <span className='span'>Quiero crear una </span>
            <span className='text-wrapper-2'>cuenta nueva</span>
          </p>
          <div className='modal-title'>Ingresá con tu usuario</div>
          <div className='email-wrapper'>
            {/* the input of the email */}
            <input
              className='input-modal '
              type='text'
              placeholder='EMAIL'
              name='correo'
            />
          </div>
          <div className='contrase-a-wrapper'>
            {/* the input of the password */}
            <input
              className='input-modal '
              type='password'
              placeholder='CONTRASEÑA'
              name='contrasena'
            />
          </div>
        </div>
      </div>
    </form>
    
    
    
    </>
    
  );
};
export default LoginModal