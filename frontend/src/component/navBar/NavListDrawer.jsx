import { NavLink } from "react-router-dom";

import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
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
                            //console.log(`el path es ${item.path }`)
                            <ListItem key={item.title}>
                                {console.log(item.icon)}
                                <ListItemButton
                                    component={component}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                >
                                    <ListItemIcon> {item.icon} </ListItemIcon>
                                    <ListItemText> {item.title} </ListItemText>
                                </ListItemButton>

                            </ListItem>
                        ))
                    }
                </List>

            </nav>

            <Divider />

            <LoginSesion />
        </box>

    )
}

export default NavListDrawer