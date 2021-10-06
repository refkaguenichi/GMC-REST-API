import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="logo">
              <img
                src="https://cdn-icons-png.flaticon.com/128/476/476863.png"
                alt="logo"
              />
              {/* <span>Clients</span> */}
            </Link>
          </Typography>
          <div className="Nav-buttons">
            <Button color="inherit" size="small">
              <Link to="/contacts">Contacts</Link>
            </Button>
            <Button color="inherit" size="small">
              <Link to="addContact">Add contact</Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
