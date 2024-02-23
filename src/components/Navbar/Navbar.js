import React, { useState } from "react";
import { buttonStyles, buttonConfig } from "./ButtonConfigrations";
import { AppBar, Toolbar, Stack, Button, Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [selectedHeader, setSelectedHeader] = useState(null);

  const handleSelect = (selectedButton) => {
    setSelectedHeader(selectedButton);
  };

  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center">
      <CardMedia
        component="img"
        sx={{ width: "200px", marginTop: "10px" }}
        image={logo}
        alt="logo"
      />
      <AppBar
        position="static"
        sx={{
          width: "60%",
          borderRadius: "50px",
          alignItems: "center",
          backgroundColor: "#EFEFEF",
        }}>
        <Toolbar>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}>
            <Stack direction="row" spacing={4}>
              {buttonConfig.map((button) => (
                <Button
                  key={button.label}
                  sx={{
                    ...buttonStyles,
                    width: button.width,
                    ...(selectedHeader === button.target && {
                      backgroundColor: "black",
                      opacity: "1",
                      color: "white",
                      borderRadius: "40px",
                      padding: "10px 20px",
                      "&:hover": {
                        backgroundColor: "black",
                        opacity: "1",
                        color: "white",
                        borderRadius: "40px",
                        padding: "10px 20px",
                      },
                    }),
                  }}
                  onClick={() => handleSelect(button.target)}>
                  {button.label}
                </Button>
              ))}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default Navbar;
