import { Box } from '@mui/material'
import React from 'react'

import { Typography } from '@mui/material';

function Infomation() {
    return (
        <Box sx={{  width: "1297", height: "89px", display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", width: "1000px" }} >
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    //border: "1px solid green",
                    width:"400px"
                }} >
                    <img src="/static/images/ic_round-delivery-dining.svg" alt="logo seguridad" width="48px" height="48px" />

                    <Typography
                        variant="h1"
                        component="h2"
                        sx={{
                            color: "#1E1E1E",
                            fontFamily: "Lato",
                            fontSize: "12px",
                            fontWeight: "bold",
                            height: "48px",
                            //border: "1px solid green",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        ENVIO A DOMICILIO <br />
                        Recibi tu pedido en GBA y CABA
                    </Typography>


                </Box>
                <hr />
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    //border: "1px solid green",
                    width:"400px"
                }} >
                    <img src="/static/images/solar_card-bold.svg" alt="logo seguridad" width="48px" height="48px" />

                    <Typography
                        variant="h1"
                        component="h2"
                        sx={{
                            color: "#1E1E1E",
                            fontFamily: "Lato",
                            fontSize: "12px",
                            fontWeight: "bold",
                            height: "48px",
                            //border: "1px solid green",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        PAGA COMO QUIERAS <br />
                        Tarjea de credito o debito
                    </Typography>


                </Box>
                <hr />
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    //border: "1px solid green",
                    width:"400px"
                }} >
                    <img src="/static/images/material-symbols_security.svg" alt="logo seguridad" width="48px" height="48px" />

                    <Typography
                        variant="h1"
                        component="h2"
                        sx={{
                            color: "#1E1E1E",
                            fontFamily: "Lato",
                            fontSize: "12px",
                            fontWeight: "bold",
                            height: "48px",
                            //border: "1px solid green",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        COMPRA CON SEGURIDAD <br />
                        Tus datos siempre protejidos
                    </Typography>


                </Box>
            </Box>
        </Box>

    )
}

export default Infomation