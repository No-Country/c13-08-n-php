import { Link, MenuItem, Select } from "@mui/material";
import React from 'react';
import './styles.css';

const CheckoutGrid = () => {
  return (
    <div className='checkout-container'>
      <div className='checkout-data-container'>
        <div className='checkout-data-title'>
          <h2>Corroborá que estén bien tus datos</h2>
        </div>

        {/* here should be  the entire user data */}
        <div className='checkout-data'>
          <div className='checkout-data-email'>
            <img src='/static/images/iconMail.svg' alt='' />
            <p>Lorem ipsum dolor sit amet.{/* {Profile.email} */}</p>
            <svg
              width='542'
              height='2'
              viewBox='0 0 542 2'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M0 1H542' stroke='#F4D88F' />
            </svg>
          </div>

          <div className='checkout-delivery-resume'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19 7C19 5.9 18.1 5 17 5H15C14.45 5 14 5.45 14 6C14 6.55 14.45 7 15 7H17V9.65L13.52 14H10V10C10 9.45 9.55 9 9 9H6C3.79 9 2 10.79 2 13V15C2 15.55 2.45 16 3 16H4C4 17.66 5.34 19 7 19C8.66 19 10 17.66 10 16H13.52C14.13 16 14.7 15.72 15.08 15.25L18.56 10.9C18.85 10.54 19 10.1 19 9.65V7ZM7 17C6.45 17 6 16.55 6 16H8C8 16.55 7.55 17 7 17Z'
                fill='url(#paint0_linear_683_2047)'
              />
              <path
                d='M6 6H9C9.55 6 10 6.45 10 7C10 7.55 9.55 8 9 8H6C5.45 8 5 7.55 5 7C5 6.45 5.45 6 6 6ZM19 13C17.34 13 16 14.34 16 16C16 17.66 17.34 19 19 19C20.66 19 22 17.66 22 16C22 14.34 20.66 13 19 13ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17Z'
                fill='url(#paint1_linear_683_2047)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_683_2047'
                  x1='10.5'
                  y1='5'
                  x2='10.5'
                  y2='19'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#F4D88F' />
                  <stop offset='1' stop-color='#A08643' />
                </linearGradient>
                <linearGradient
                  id='paint1_linear_683_2047'
                  x1='13.5'
                  y1='6'
                  x2='13.5'
                  y2='19'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#F4D88F' />
                  <stop offset='1' stop-color='#A08643' />
                </linearGradient>
              </defs>
            </svg>

            <h3>Resumen de tu envío</h3>
            {/* {Profile.localidad} */}
            <p>Envío a  - $1000</p>

            <p  className='localidad-calle'> Lorem ipsum dolor sit.{/* {Profile.localidad} {Profile.calle} */}</p>

            <Link href="/cart" underline="hover" color="#f4d88f">Cambiar</Link>
          </div>

          <div className='checkout-user-info'>
            <h3>Datos de cobranza</h3>
            <p>Lorem, ipsum.{/* {Profile.nombre} */}</p>

            <p>7862380983{/* {Profile.telefono} */}</p>
          </div>

        </div>

        <div className='checkout-payment-method'>
          <h3>Medios de Pago</h3>
          <div className="dropdown-menu">
            <button>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3333 5.33337H18.6666C23.6946 5.33337 26.2093 5.33337 27.7706 6.89604C28.896 8.02004 29.2106 9.63871 29.2986 12.3334H2.70129C2.78929 9.63871 3.10396 8.02004 4.22929 6.89604C5.79063 5.33337 8.30529 5.33337 13.3333 5.33337ZM18.6666 26.6667H13.3333C8.30529 26.6667 5.79063 26.6667 4.22929 25.104C2.66663 23.5427 2.66663 21.028 2.66663 16C2.66663 15.4107 2.66663 14.856 2.66929 14.3334H29.3306C29.3333 14.856 29.3333 15.4107 29.3333 16C29.3333 21.028 29.3333 23.5427 27.7706 25.104C26.2093 26.6667 23.6946 26.6667 18.6666 26.6667ZM7.99996 20.3334C7.73474 20.3334 7.48039 20.4387 7.29285 20.6263C7.10532 20.8138 6.99996 21.0682 6.99996 21.3334C6.99996 21.5986 7.10532 21.8529 7.29285 22.0405C7.48039 22.228 7.73474 22.3334 7.99996 22.3334H13.3333C13.5985 22.3334 13.8529 22.228 14.0404 22.0405C14.2279 21.8529 14.3333 21.5986 14.3333 21.3334C14.3333 21.0682 14.2279 20.8138 14.0404 20.6263C13.8529 20.4387 13.5985 20.3334 13.3333 20.3334H7.99996ZM16.6666 20.3334C16.4014 20.3334 16.1471 20.4387 15.9595 20.6263C15.772 20.8138 15.6666 21.0682 15.6666 21.3334C15.6666 21.5986 15.772 21.8529 15.9595 22.0405C16.1471 22.228 16.4014 22.3334 16.6666 22.3334H18.6666C18.9318 22.3334 19.1862 22.228 19.3737 22.0405C19.5613 21.8529 19.6666 21.5986 19.6666 21.3334C19.6666 21.0682 19.5613 20.8138 19.3737 20.6263C19.1862 20.4387 18.9318 20.3334 18.6666 20.3334H16.6666Z" fill="url(#paint0_linear_861_437)"/>
                <defs>
                <linearGradient id="paint0_linear_861_437" x1="16" y1="5.33337" x2="16" y2="26.6667" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F4D88F"/>
                <stop offset="1" stop-color="#A08643"/>
                </linearGradient>
                </defs>
              </svg>

              <span className="buttonText">Tarjeta de crédito / Débito</span>
              <svg  className="arrowDown" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7239 21.24L27.3439 10.094C27.5212 9.90799 27.6201 9.66091 27.6201 9.40397C27.6201 9.14703 27.5212 8.89995 27.3439 8.71397L27.3319 8.70197C27.246 8.6115 27.1425 8.53946 27.0279 8.49023C26.9132 8.44101 26.7897 8.41562 26.6649 8.41562C26.5401 8.41562 26.4167 8.44101 26.302 8.49023C26.1873 8.53946 26.0839 8.6115 25.9979 8.70197L15.9979 19.198L6.00193 8.70197C5.91598 8.6115 5.81253 8.53946 5.69786 8.49023C5.58319 8.44101 5.45971 8.41562 5.33493 8.41562C5.21014 8.41562 5.08666 8.44101 4.97199 8.49023C4.85733 8.53946 4.75387 8.6115 4.66793 8.70197L4.65593 8.71397C4.47864 8.89995 4.37973 9.14703 4.37973 9.40397C4.37973 9.66091 4.47864 9.90799 4.65593 10.094L15.2759 21.24C15.3693 21.338 15.4816 21.416 15.6061 21.4694C15.7306 21.5227 15.8645 21.5502 15.9999 21.5502C16.1353 21.5502 16.2693 21.5227 16.3938 21.4694C16.5182 21.416 16.6305 21.338 16.7239 21.24Z" fill="#F4D88F"/>
              </svg>

            </button>
            {/* <input type='radio' name='payment-method' value='credit-card' /> */}
            <button>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.82 21.972C14.4983 21.9755 14.188 21.8542 13.9543 21.6337C13.7207 21.4133 13.5822 21.111 13.568 20.7907C13.5653 20.7347 13.56 20.584 13.4307 20.584C13.3773 20.584 13.332 20.6147 13.28 20.6627C13.1307 20.8 12.9413 20.9374 12.6667 20.9374C12.5267 20.9344 12.3886 20.9045 12.26 20.8494C11.5467 20.564 11.5373 20.0787 11.5653 19.8827C11.5733 19.832 11.5747 19.776 11.5387 19.736L11.496 19.6961H11.4507C11.4147 19.6961 11.3773 19.712 11.3267 19.748C11.1521 19.8804 10.9405 19.955 10.7213 19.9614C10.6057 19.9602 10.4913 19.9376 10.384 19.8947C9.44 19.5347 9.51733 18.6574 9.56133 18.3934C9.568 18.3387 9.55467 18.2974 9.52133 18.2707L9.45467 18.2174L9.392 18.2747C9.21111 18.4484 8.96977 18.5454 8.71867 18.5454C8.46075 18.5461 8.21311 18.4447 8.03011 18.2634C7.84711 18.0822 7.74373 17.8359 7.74267 17.5787C7.74267 17.0454 8.18 16.616 8.71867 16.616C9.204 16.616 9.61867 16.9761 9.68 17.456L9.71467 17.716L9.86133 17.496C9.87467 17.472 10.2707 16.8827 10.9973 16.8827C11.1333 16.8827 11.2773 16.904 11.4187 16.9494C11.9973 17.1227 12.096 17.6427 12.1107 17.8561C12.1213 17.9814 12.2107 17.9894 12.2307 17.9894C12.28 17.9894 12.316 17.9574 12.3413 17.9294C12.4349 17.8336 12.5469 17.7576 12.6706 17.706C12.7943 17.6545 12.9272 17.6284 13.0613 17.6294C13.232 17.6294 13.412 17.6694 13.5973 17.7494C14.5173 18.14 14.1027 19.2934 14.096 19.3054C14.0187 19.4974 14.0147 19.5814 14.0893 19.6307L14.1253 19.6481H14.152C14.192 19.6481 14.2453 19.6294 14.3307 19.6014C14.4547 19.5587 14.644 19.4947 14.82 19.4947C15.1501 19.4961 15.4665 19.6268 15.701 19.8588C15.9354 20.0907 16.0691 20.4053 16.0733 20.7347C16.0712 21.0645 15.9381 21.38 15.7031 21.612C15.4681 21.844 15.1505 21.9735 14.82 21.972ZM24.556 16.4107C23.0387 15.104 19.532 12.0907 18.5813 11.384C18.04 10.9814 17.668 10.768 17.344 10.6734C17.1471 10.6124 16.9422 10.5809 16.736 10.58C16.4933 10.58 16.2347 10.6227 15.9627 10.7067C15.3493 10.9 14.7387 11.38 14.1467 11.8454L14.116 11.8694C13.564 12.3014 12.996 12.7494 12.564 12.8427C12.3758 12.8853 12.1836 12.9072 11.9907 12.908C11.508 12.908 11.0747 12.7694 10.9107 12.5641C10.884 12.5307 10.9013 12.4761 10.964 12.3974L10.9747 12.3867L12.308 10.964C13.352 9.93205 14.3413 8.95605 16.6147 8.90405H16.728C18.144 8.90405 19.5547 9.52938 19.7147 9.60272C20.9827 10.2276 22.3757 10.5577 23.7893 10.568C25.224 10.568 26.7067 10.2174 28.2613 9.50805C28.0854 9.36213 27.9053 9.22118 27.7213 9.08538C26.3547 9.67205 25.0507 9.96538 23.7933 9.96538C22.5107 9.96538 21.2267 9.66005 19.9827 9.05872C19.916 9.02938 18.356 8.30272 16.7293 8.29872C16.6867 8.29872 16.6427 8.29872 16.6013 8.30138C14.6893 8.34538 13.6147 9.01605 12.892 9.60272C12.188 9.62005 11.5827 9.78672 11.0413 9.93605C10.56 10.0694 10.144 10.184 9.736 10.1827C9.56933 10.1827 9.26933 10.1694 9.24267 10.1667C8.776 10.1534 6.42267 9.58405 4.552 8.88405C4.36133 9.01738 4.17867 9.15472 3.99867 9.29738C5.95333 10.088 8.332 10.7014 9.08133 10.7494C9.29067 10.7627 9.512 10.7854 9.736 10.7854C10.232 10.7854 10.728 10.648 11.208 10.5147C11.492 10.436 11.8027 10.3507 12.1307 10.288L11.8693 10.5467L10.5133 11.996C10.4067 12.1027 10.1747 12.388 10.3267 12.7387C10.4059 12.8999 10.53 13.0351 10.684 13.128C11.008 13.344 11.5867 13.488 12.124 13.4894C12.3267 13.4894 12.52 13.4694 12.6973 13.4307C13.2667 13.304 13.8627 12.8334 14.496 12.3374C14.9987 11.9427 15.7133 11.4414 16.26 11.2947C16.421 11.252 16.5867 11.2296 16.7533 11.228C16.7957 11.227 16.838 11.2292 16.88 11.2347C17.24 11.28 17.5907 11.4014 18.2173 11.864C19.3307 12.6907 24.2587 16.9507 24.3053 16.9921C24.308 16.9947 24.6227 17.2627 24.5987 17.708C24.5893 17.956 24.452 18.1774 24.2067 18.3294C24.0151 18.4562 23.7912 18.5256 23.5613 18.5294C23.3593 18.529 23.1615 18.4717 22.9907 18.364C22.972 18.3507 21.284 16.8214 20.6627 16.3067C20.564 16.2267 20.468 16.1534 20.3693 16.1534C20.3449 16.1531 20.3206 16.1584 20.2985 16.1688C20.2763 16.1791 20.2568 16.1944 20.2413 16.2134C20.144 16.3334 20.2547 16.4961 20.3813 16.6054L22.3547 18.5654C22.3573 18.5654 22.6 18.7921 22.6267 19.0921C22.6427 19.4174 22.4853 19.6881 22.16 19.9001C21.9538 20.0433 21.7098 20.1226 21.4587 20.128C21.2594 20.1273 21.0648 20.0684 20.8987 19.9587L20.6133 19.684C20.1493 19.2189 19.669 18.7702 19.1733 18.3387C19.0773 18.2614 18.976 18.1894 18.8787 18.1894C18.8554 18.1888 18.8323 18.1929 18.8107 18.2017C18.7892 18.2104 18.7696 18.2235 18.7533 18.2401C18.7093 18.2894 18.6787 18.3774 18.7907 18.5227C18.821 18.5622 18.8544 18.5992 18.8907 18.6334L20.328 20.2307C20.3413 20.2441 20.624 20.5774 20.36 20.9121L20.3093 20.9761C20.2674 21.0213 20.2229 21.064 20.176 21.104C19.9307 21.3041 19.6027 21.3227 19.4733 21.3227C19.4076 21.3234 19.342 21.3181 19.2773 21.3067C19.136 21.2827 19.04 21.2427 18.9947 21.188L18.9773 21.1707C18.8973 21.0907 18.1747 20.3587 17.572 19.864C17.4933 19.7974 17.3947 19.7174 17.292 19.7174C17.2679 19.7172 17.2441 19.722 17.222 19.7317C17.1999 19.7413 17.1802 19.7555 17.164 19.7734C17.044 19.9014 17.2227 20.0934 17.2973 20.1641L18.524 21.5014C18.5142 21.5313 18.4993 21.5592 18.48 21.584C18.436 21.6427 18.288 21.7907 17.8413 21.8454C17.7874 21.8521 17.733 21.8552 17.6787 21.8547C17.2187 21.8547 16.7293 21.6361 16.476 21.5027C16.5903 21.2628 16.6495 21.0004 16.6493 20.7347C16.6481 20.4907 16.5976 20.2494 16.501 20.0252C16.4044 19.801 16.2636 19.5985 16.087 19.4297C15.9103 19.2609 15.7015 19.1292 15.4728 19.0426C15.2442 18.956 15.0004 18.9161 14.756 18.9254C14.788 18.4694 14.7227 17.6054 13.8267 17.2267C13.5852 17.1196 13.3243 17.0629 13.06 17.0601C12.8653 17.0601 12.6773 17.0934 12.5 17.16C12.3128 16.8016 11.9913 16.5313 11.6053 16.408C11.3936 16.3342 11.171 16.2959 10.9467 16.2947C10.5733 16.2947 10.2307 16.4014 9.924 16.6174C9.77843 16.4388 9.5949 16.2948 9.38667 16.1956C9.17845 16.0964 8.95074 16.0447 8.72 16.0441C8.31102 16.0446 7.91854 16.205 7.62667 16.4907C7.244 16.2014 5.72667 15.2507 1.67067 14.34C1.36141 14.2624 1.05379 14.1784 0.748 14.088C0.702402 14.3057 0.668133 14.5255 0.645333 14.7467L1.53867 14.956C5.68267 15.8654 7.05333 16.8107 7.284 16.9894C7.20512 17.1759 7.16432 17.3763 7.164 17.5787C7.16505 17.8055 7.21612 18.0292 7.31358 18.234C7.41103 18.4388 7.55248 18.6197 7.72787 18.7638C7.90326 18.9079 8.10829 19.0116 8.32839 19.0677C8.54848 19.1237 8.77824 19.1307 9.00133 19.088C9.12933 19.7107 9.54267 20.1827 10.1733 20.4254C10.3497 20.4943 10.5372 20.5304 10.7267 20.5321C10.8467 20.5321 10.9653 20.516 11.0813 20.4867C11.196 20.78 11.4573 21.1441 12.044 21.3774C12.2373 21.4575 12.4441 21.5 12.6533 21.5027C12.816 21.5027 12.9747 21.4734 13.1267 21.4187C13.2662 21.7514 13.5014 22.0355 13.8025 22.235C14.1036 22.4346 14.4572 22.5407 14.8187 22.5401C15.312 22.5427 15.7867 22.3441 16.132 21.9934C16.4267 22.1547 17.0493 22.4481 17.6827 22.4481C17.7627 22.4481 17.84 22.4454 17.916 22.4347C18.5427 22.3561 18.8347 22.1147 18.968 21.9254C18.9921 21.8925 19.0135 21.8577 19.032 21.8214C19.1787 21.864 19.344 21.8987 19.5293 21.8987C19.8693 21.8987 20.1973 21.784 20.5293 21.5454C20.8547 21.3134 21.0867 20.9801 21.1213 20.6961V20.6827C21.232 20.7054 21.344 20.7174 21.456 20.7174C21.8093 20.7174 22.1587 20.608 22.4867 20.3947C23.1267 19.9814 23.236 19.4414 23.2253 19.088C23.449 19.1343 23.6796 19.1352 23.9036 19.0908C24.1276 19.0464 24.3404 18.9575 24.5293 18.8294C24.7185 18.716 24.878 18.5591 24.9944 18.3717C25.1108 18.1844 25.1808 17.9719 25.1987 17.7521C25.2218 17.4466 25.1471 17.1418 24.9853 16.8814C26.0573 16.4254 28.5 15.5441 31.3787 14.9041C31.3604 14.684 31.3306 14.465 31.2893 14.248C28.9813 14.752 26.727 15.4753 24.5573 16.408L24.556 16.4107ZM31.3867 15.3934C31.3867 20.7627 24.4987 25.1174 16.004 25.1174C7.508 25.1174 0.62 20.7627 0.62 15.3934C0.62 10.0227 7.50667 5.66938 16.0053 5.66938C24.5 5.66938 31.3867 10.0227 31.3867 15.3934ZM32 15.3987C32 9.70272 24.8347 5.05872 16 5.05872C7.16533 5.05872 0.00266667 9.70272 0.00266667 15.4001L0 16.0054C0 22.0494 6.26 26.9427 15.9987 26.9427C25.7947 26.9427 31.9987 22.0494 31.9987 16.0041L32 15.3987Z" fill="#F4D88F"/>
              </svg>
              <span className="buttonText">Mercado Pago</span>
              <svg className="arrowDown2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7239 21.24L27.3439 10.094C27.5212 9.90799 27.6201 9.66091 27.6201 9.40397C27.6201 9.14703 27.5212 8.89995 27.3439 8.71397L27.3319 8.70197C27.246 8.6115 27.1425 8.53946 27.0279 8.49023C26.9132 8.44101 26.7897 8.41562 26.6649 8.41562C26.5401 8.41562 26.4167 8.44101 26.302 8.49023C26.1873 8.53946 26.0839 8.6115 25.9979 8.70197L15.9979 19.198L6.00193 8.70197C5.91598 8.6115 5.81253 8.53946 5.69786 8.49023C5.58319 8.44101 5.45971 8.41562 5.33493 8.41562C5.21014 8.41562 5.08666 8.44101 4.97199 8.49023C4.85733 8.53946 4.75387 8.6115 4.66793 8.70197L4.65593 8.71397C4.47864 8.89995 4.37973 9.14703 4.37973 9.40397C4.37973 9.66091 4.47864 9.90799 4.65593 10.094L15.2759 21.24C15.3693 21.338 15.4816 21.416 15.6061 21.4694C15.7306 21.5227 15.8645 21.5502 15.9999 21.5502C16.1353 21.5502 16.2693 21.5227 16.3938 21.4694C16.5182 21.416 16.6305 21.338 16.7239 21.24Z" fill="#F4D88F"/>
              </svg>
            </button>
          </div>

          <div className="makeOrder">
            <button className="makeOrderButton">Realizar pedido</button>
          </div>

        </div>

      </div>

      <div className='checkout-products-container'></div>
    </div>
  );
};

export default CheckoutGrid;