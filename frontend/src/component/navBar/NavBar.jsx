import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import Search from "../../pages/Search";

import { NavLink, redirect } from "react-router-dom";
import LoginSesion from "../loginSesion/LoginSesion";

import React from 'react'
import { Height } from "@mui/icons-material";
//import { Login,} from "@mui/icons-material";



const NavBar = ({ navigationLink }) => {
    const [open, setOpen] = useState(false);
    const [openSearch, setOpenSearch] = useState(false)

    const handleSearch = () => {
        return <Search />
    }
    return (
        <>
            <AppBar position="static" sx={{ minHeight: "200px", backgroundColor: "white" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", margin: "auto", width: "85%" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <NavLink to="/">
                        <IconButton
                            color="inherit"
                            size="large"
                            onClick={() => setOpen(true)}
                            sx={{ display: "none" }}
                        >
                            <MenuIcon />

                        </IconButton>
                        <img src="/src/assets/logo.svg" alt="logo" height="150px" width="150px" />
                        </NavLink>

                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navigationLink.map((item) => (
                            <Button
                                color="inherit"
                                key={item.title}
                                LinkComponent={NavLink}
                                to={item.path}
                                sx={{ paddingLeft: "40px", fontFamily: "Lato", textTransform: "capitalize", color: "#1E1E1E" }}

                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{width:"200px", display:"flex",justifyContent: "space-between" }}>
                        <Button href="/login" variant="text" sx={{color:"#1E1E1E",fontFamily: "Lato",fontSize:"14px",fontWeight: "bold"}}>
                           
                          INICIAR SESION
                            
                        </Button>


                        <NavLink to="/cart">
                        <IconButton
                            color="inherit"
                            size="large"
                            //redireccionar a la pagina de de carrito
                        >
                            <img src="/static/images/carrito.svg" alt="carrito" height="24px" width="24px" />
                        </IconButton>
                        </NavLink>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"

                onClose={() => setOpen(false)}
                sx={{ display: { xs: "flex", sm: "none" } }}
            >
                <NavListDrawer
                    navigationLink={navigationLink}
                    component={NavLink}
                    setOpen={setOpen}
                >

                </NavListDrawer>

            </Drawer>

            <Drawer
                open={openSearch}
                anchor="right"
                //buscar papersProps
                PaperProps={{ style: { width: '100%' } }}
                onClose={() => setOpenSearch(false)}
            //sx={{ display: { xs: "flex", sm: "none" } }}
            >

                <Search setOpenSearch={setOpenSearch} />
            </Drawer>
        </>
    )



}

export default NavBar
