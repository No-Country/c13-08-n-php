import React from 'react'
import { Box } from "@mui/system"
import "./fotter.css"

function Fotter() {
  return (
    <Box
      sx={{
        //position: "absolute",
        //bottom: "0px",
        width: "100%",
        height: "117px",
        borderRadius: "30px 30px 0px 0px",
        // backgroundColor: "#409989",
        background: "rgb(64,153,137)",
        background: "linear-gradient(180deg, rgba(64,153,137,1) 0%, rgba(50,51,52,1) 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>

      <Box sx={{ color: "#F4D88F", fontWeight: "bold" ,width:"300px",marginLeft:"120px", marginBottom:"18px"}} >
        Seguinos en nuestras redes
      </Box> 
      <Box sx ={{display: "flex", flexDirection:"wrap"}}>
        <Box sx={{ marginLeft:"40px"}}>
          <img src="./src/assets/ri_whatsapp-fill.svg" alt="whatsapp" />
        </Box>
        <Box sx={{ marginLeft:"40px"}}>
          <img src="./src/assets/ri_instagram-fill.svg" alt="instagram" />
        </Box>
        <Box  sx={{ marginLeft:"40px"}}>
          <img src="./src/assets/ic_baseline-facebook.svg" alt="facebook" />
        </Box>
      </Box>
    </Box>
  )
}

export default Fotter