

import {
    Divider,
    List,
    ListItem,
    ListItemButton,    
    ListItemText,
} from "@mui/material";
import { Box} from "@mui/system";
import React from "react";


import LoginSesion from "../loginSesion/LoginSesion";




//Las llaves para pasar el arreglo son necesarias en react
const NavListDrawer = ({ navigationLink, component, setOpen }) => {
    
    return (
        <Box sx={{ width: 250 }}>
            
                <List>
                    {
                        navigationLink.map((item) => (
                           
                            <ListItem key={item.title}>
                                
                                <ListItemButton onClick={() => setOpen(false)}  zz={setOpen.toString()}    component={component} to={item.path} sx={{
                                    
                                    fontFamily:"Lato",
                                    textTransform:"capitalize",
                                    textAlign: "center",
                                    color:"#1E1E1E", 
                                    
                                }                              
                                }                                                            
                                >
                                  
                                    <ListItemText> {item.title} </ListItemText>
                                </ListItemButton>

                            </ListItem>
                        ))
                    }
                </List>

           
            <Divider />

            < LoginSesion />
        </Box>

    )
}

export default NavListDrawer