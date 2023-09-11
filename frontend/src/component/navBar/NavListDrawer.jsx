

import {
    Divider,
    List,
    ListItem,
    ListItemButton,    
    ListItemText,
} from "@mui/material";

import LoginSesion from "../loginSesion/LoginSesion";




//Las llaves para pasar el arreglo son necesarias en react
const NavListDrawer = ({ navigationLink, component, setOpen }) => {
    
    return (
        <box sx={{ width: 250 }}>
            <nav>
                <List>
                    {
                        navigationLink.map((item) => (
                           
                            <ListItem key={item.title}>
                                
                                <ListItemButton
                                    component={component}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    fontFamily= "Lato"
                                    textTransform= "capitalize"
                                    textAlign= "center"
                                    color= "#1E1E1E"
                                    
                                   
                                >
                                  
                                    <ListItemText> {item.title} </ListItemText>
                                </ListItemButton>

                            </ListItem>
                        ))
                    }
                </List>

            </nav>

            <Divider />

            < LoginSesion />
        </box>

    )
}

export default NavListDrawer