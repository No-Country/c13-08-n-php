import React, { useEffect, useState } from 'react'
import './styles.css'

const validateComponent = () => {
  const [change, setChange] = useState("enable")
  const [change2, setChange2] = useState("disable")
  const [change3, setChange3] = useState("color1")
  

  useEffect(() => {
    setTimeout(() => {
      setChange("disable")
      setChange2("enable")
      setChange3("color2")
    }, 5000);
    //clear local storage cart and send to home
    setTimeout(() => {
      localStorage.clear()
      window.location.href = '/'
    }, 9000);
  }, [])


  return (
    <div className={`background ${change3}`}>
      <div className={`content ${change}`}>
        <h2>Estamos validando tu tarjeta, esto tomará unos segundos...</h2>
        <img src="/static/images/validate.svg" alt="" />
      </div>

      
      <div className={`content2 ${change2}`}>
          <h2>¡Tu compra fue realizada con éxito!</h2>
          <h2> Revisa tu correo electrónico: <span className='bold'>lauralopez@gmail.com</span> para seguir el envío.</h2>
          <img src="/static/images/validate.svg" alt="" />
        </div>
    </div>
  )
}

export default validateComponent