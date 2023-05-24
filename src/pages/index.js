import React, { useState, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Container, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import VideoGame3 from "@site/static/img/videoGame3.svg";
import styles from "./index.module.css";
import Curtain from "../components/Curtain";
import Gallery from "../components/Gallery";
export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Layout
        title={`Gamehub`}
        description="All about games at one single place"
      >
        <Container sx={{ height: "calc(100vh - 111px)" }} maxWidth="100%">
          <Grid
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ marginInline: "auto" }}
            height={"100%"}
            container
            width={"90%"}
          >
            <Grid sx={{ height: "100%" }} sm={8} md={6} xs={4} item>
              <Stack height={"100%"} justifyContent={"center"}>
                <h1 className={styles.tagline}>Let the</h1>
                <h1 className={styles.tagline}>
                  <span className={styles.cursive}>Games</span> Begin
                </h1>
                <h1 className={styles.tagline}>
                  At <span className={styles.cursive}>Gamehub!</span>{" "}
                </h1>
                <p className={styles.about}>
                  All your favourite games, lores and much more at one place
                </p>
              </Stack>
            </Grid>
            <Grid sx={{ height: "100%" }} sm={8} md={6} xs={4} item>
              <Stack height={"95%"} alignItems={"flex-end"}>
                <VideoGame3 style={{ height: "100%" }}></VideoGame3>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
