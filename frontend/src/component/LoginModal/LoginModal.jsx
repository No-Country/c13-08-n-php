import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export const LoginModal = ({ setShow, show }) => {
  //after 30 seconds the modal will show up
  useEffect(() => {
    setTimeout(() => {
      //checks if the user have cookies with the token
      if (document.cookie.includes('token')) {
        //if the user have the token, the modal will not show up
        setShow(false);
      } else {
        //if the user doesn't have the token, the modal will show up
        setShow(true);
      }
    },1000);

    //if the user clicks on the background, the modal will close
    let handler = (e) => {
      if (!document.querySelector('.modal').contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', (e) => handler(e));
  }, []);

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
        // Guardamos el token en las cookies del navegador para que el usuario no tenga que volver a loguearse
        // Con tiempo de expiración de 1 hora
        document.cookie = `token=${response.data.token};max-age=3600;path=/`;
        // Redireccionamos al usuario a la página de inicio
        window.location.href = '/';
        // Cerramos el modal
        setShow(false);
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
      email: e.target.correo.value,
      contrasena: e.target.contrasena.value,
    };
    //send the data to the backend
    postData(JSON.stringify(Data));
  };

  return (
    //made the style change depending on the state of the modal
    <form
      className={show ? 'modal active' : 'modal inactive'}
      onSubmit={handleSubmit}
    >
      <div className='formulario-login'>
        <div className='frame'>
          <div className='overlap'>
            {/*  */}
            <button className='login-google' type="button" onClick={() => console.log("lol")}>Iniciar Sesión con Google</button>
          </div>
          <div className='overlap-group'>
            {/* Modal Button Login */}
            <button className='iniciar-sesi-n' type='submit'>
              INICIAR SESIÓN
            </button>
          </div>
          <p className='quiero-crear-una'>
            <span className='span'>Quiero crear una </span>
            <Link to='/register' className='cuenta-nueva'>
              <span className='text-wrapper-2'>cuenta nueva</span>
            </Link>
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
  );
};

export default LoginModal;
