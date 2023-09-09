"use client"

import { useContext } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { UIContext } from "@/context/ui";
import { AuthContext } from "@/context/auth";

export const Navbar = () => {
  const { openSideMenu } = useContext( UIContext )
  const { logout } = useContext( AuthContext )
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            OpenJira
        </Typography>
        <Button onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
