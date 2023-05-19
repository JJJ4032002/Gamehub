import React from "react";
import { useGetProductsQuery } from "../features/api/apiSlice";
import { CircularProgress, Container } from "@mui/material";
import { Grid, Stack } from "@mui/material";
import Layout from "@theme/Layout";
function Merch() {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();
  let content;

  if (isLoading) {
    content = <CircularProgress></CircularProgress>;
  } else if (isSuccess) {
    console.log(products);
    content = (
      <>
        <h1 className="VoluxFont" style={{ marginBottom: "1em" }}>
          Welcome to the store
        </h1>
        <Grid spacing={6} container columns={12}>
          {products.map((post) => (
            <Grid sx={{ height: "auto" }} xs={4} item key={post.id}>
              <Stack
                sx={{
                  border: "0.5px solid gray",
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "#242526",
                }}
                height={"100%"}
              >
                <div style={{ height: "300px", backgroundColor: "white" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={post.image}
                    alt={post.title}
                    srcset=""
                  />
                </div>
                <p></p>
                <Stack sx={{ padding: "0em 0.7em" }}>
                  <p>{post.title}</p>
                  <p>Price: {post.price}</p>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <Layout>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minheight: "calc(100vh - 115px)",
          padding: "2em 0em",
        }}
      >
        {content}
      </Container>
    </Layout>
  );
}

export default Merch;
