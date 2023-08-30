import React from 'react'
import { Box } from "@mui/system"
import "./footer.css"

function Footer() {
  return (
    <Box
      sx={{
        
        bottom: "0px",
        width: "100%",
        height: "117px",
        borderRadius: "30px 30px 0px 0px",
        backgroundColor: "#409989",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>

      <Box sx={{ color: "white", fontWeight: "bold" ,width:"300px",marginLeft:"120px"}} >
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

export default Footer