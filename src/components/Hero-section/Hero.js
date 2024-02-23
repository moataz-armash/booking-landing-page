import * as React from "react";
import { Box, Card, Stack, Typography, Grid, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import hero from "../../assets/hero-section/heroPhoto.png";
import austurallia from "../../assets/hero-section/austurallia.jpg";
import california from "../../assets/hero-section/california.png";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Hero() {
  return (
    <Card
      sx={{
        display: "flex",
        width: "90%",
        margin: "auto",
        columnGap: 2,
        alignContent: "center",
        justifyContent: "center",
      }}>
      <CardMedia
        component="img"
        sx={{
          width: "763px",
          height: "519px",
          borderRadius: 4,
        }}
        image={hero}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: 3 }}>
        <Box
          sx={{
            display: "flex",
            width: "368px",
            height: "244px",
            backgroundColor: "#F4E5D5",
            borderRadius: 5,
            paddingTop: "15px",
            justifyContent: "center",
            position: "relative",
          }}>
          <Stack style={{ position: "relative" }}>
            <CardMedia
              component="img"
              sx={{
                width: "294px",
                height: "167px",
                borderRadius: 5,
                objectFit: "fill",
              }}
              image={california}
              alt="Live from space album cover"
            />
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                alignItems: "center",
                position: "absolute",
                bottom: 65,
                right: 10,
                margin: "10px", // Adjust as needed
              }}>
              <StarIcon sx={{ fontSize: "medium" }} />
              <Typography variant="h6" fontWeight="bold">
                5.0
              </Typography>
            </Stack>
            <Grid
              container
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              marginTop={2}>
              <Grid item xs={7}>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ textAlign: "left", paddingLeft: 1 }}>
                    Australia
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  justifyContent="center"
                  paddingLeft="4px">
                  <Grid item xs={1}>
                    <LocationOnIcon
                      sx={{ fontSize: 20, color: "black", opacity: "0.5" }}
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        textAlign: "left",
                        color: "black",
                        opacity: "0.5",
                        paddingLeft: 1,
                      }}>
                      New South Wales
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "20px",
                    // whiteSpace: "nowrap",
                    padding: "8px 15px",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    margin: "10px",
                  }}>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    textTransform="none">
                    Book Now
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Box>
        <Box>
          <CardMedia
            component="img"
            sx={{
              width: "294px",
              height: "167px",
              borderRadius: 5,
              objectFit: "fill",
            }}
            image={california}
            alt="Live from space album cover"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
}

// <CardContent sx={{ flex: "1 0 auto" }}>
//   <Typography component="div" variant="h5">
//     Live From Space
//   </Typography>
//   <Typography variant="subtitle1" color="text.secondary" component="div">
//     Mac Miller
//   </Typography>
// </CardContent>;
