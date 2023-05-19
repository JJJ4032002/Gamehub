import React from "react";
import styles from "./index.module.css";
import { Container } from "@mui/material";
import Logo from "@site/static/img/logo.svg";
import { Grid, Stack } from "@mui/material";
function Layout({ navbarButton, form, image, snackBars }) {
  return (
    <Container maxWidth="100%" sx={{ padding: "1em" }}>
      <nav className={styles.navbar}>
        <Logo></Logo>
        {navbarButton}
      </nav>
      <Grid
        sx={{ paddingTop: "2em", height: "calc(100vh - 37px)" }}
        container
        spacing={4}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid
          sx={{
            height: { xs: "auto", md: "100%" },
          }}
          item
          sm={8}
          md={6}
          xs={4}
        >
          <Stack
            alignItems={"center"}
            sx={{
              height: { xs: "auto", md: "100%" },
              justifyContent: { xs: "start", md: "center" },
            }}
          >
            {form}
          </Stack>
        </Grid>
        <Grid
          sx={{ height: { xs: "auto", md: "100%" } }}
          item
          sm={8}
          md={6}
          xs={4}
        >
          {image}
        </Grid>
        {snackBars}
      </Grid>
    </Container>
  );
}

export default Layout;
