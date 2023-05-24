import React from "react";
import Layout from "@theme/Layout";
import { Container, Box, Stack, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import {
  selectCartProducts,
  removeFromCart,
  addToCart,
} from "../features/cart/cartSlice";
function calculateTotal(products) {
  let totalPrice = 0;
  if (products.length === 0) {
    return 0;
  } else {
    products.forEach((product) => {
      totalPrice = totalPrice + product.quantity * product.price;
    });
    return totalPrice;
  }
}
import { useDispatch } from "react-redux";
function EvaluateCart() {
  const dispatch = useDispatch();
  let cartProducts = useSelector(selectCartProducts);
  let totalPrice = calculateTotal(cartProducts);
  return (
    <Layout>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2em",
          }}
        >
          <h3>Please checkout your cart</h3>
          <p>Price : {totalPrice}</p>
        </Box>
        <Stack height={"auto"}>
          {cartProducts.length === 0
            ? "The cart is empty"
            : cartProducts.map((product) => {
                return (
                  <Grid
                    key={product.id}
                    columns={12}
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    border={"1px solid gray"}
                    height={"auto"}
                    padding={"1em 1em 0em 1em"}
                  >
                    <Grid sx={{ height: "auto" }} item xs={4}>
                      <p>{product.title}</p>
                      <Stack height={"200px"}>
                        <img
                          style={{ height: "80%", objectFit: "contain" }}
                          src={product.image}
                          alt=""
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "0.5em",
                        }}
                      >
                        <Button
                          onClick={() => {
                            dispatch(removeFromCart({ ...product }));
                          }}
                        >
                          -
                        </Button>
                        <p style={{ margin: 0 }}>{product.quantity}</p>
                        <Button
                          onClick={() => {
                            dispatch(addToCart({ ...product }));
                          }}
                        >
                          +
                        </Button>
                      </Box>
                    </Grid>
                    <Grid
                      sx={{ display: "flex", justifyContent: "center" }}
                      item
                      xs={4}
                    >
                      <p>{product.price}</p>
                    </Grid>
                  </Grid>
                );
              })}
        </Stack>
      </Container>
    </Layout>
  );
}

export default EvaluateCart;
