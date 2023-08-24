import { AppBar, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import Search from "../../pages/Search";

import { NavLink } from "react-router-dom";

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
            <AppBar position="static">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <IconButton
                            color="inherit"
                            size="large"
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcon />

                        </IconButton>
                        <Typography variant="h6" > LOGO
                        </Typography>

                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navigationLink.map((item) => (
                            <Button
                                color="inherit"
                                key={item.title}
                                LinkComponent={NavLink}
                                to={item.path}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </Box>

                    
                        <IconButton
                            color="inherit"
                            size="large"
                            onClick={() => setOpenSearch(true)}
                        >
                            <SearchIcon />

                        </IconButton>
                
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

                    <Search setOpenSearch= {setOpenSearch} />   
            </Drawer>
        </>
    )



}

export default NavBar