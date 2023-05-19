import React, { useState } from "react";
import Layout from "../components/Authentication/Layout";
import { Button, Box, TextField } from "@mui/material";
import Videogame2 from "@site/static/img/videogame2.svg";
import GoogleIcon from "@mui/icons-material/Google";
import Form from "../components/Form";
import useUserInfo from "../hooks/useUserInfo";
import SignInWithGoogle from "../firebase/SignInGoogle";
import { Snackbar } from "@mui/material";
import SignUpUser from "../firebase/SignUpUser";
import { CircularProgress } from "@mui/material";
import Link from "@docusaurus/Link";
function SignUp() {
  const {
    userInfo,
    disable,
    handleUserInfo,
    snackbarerror,
    setSnackbarerror,
    snackbaremail,
    setSnackbaremail,
    loading,
    handleLoading,
    userError,
  } = useUserInfo({
    validation: true,
  });
  function handleSignUpUser() {
    SignUpUser(
      userInfo.email,
      userInfo.password,
      setSnackbaremail,
      setSnackbarerror,
      handleLoading
    );
  }
  return (
    <Layout
      navbarButton={
        <Button LinkComponent={Link} to={"/SignIn"} variant="contained">
          Sign In
        </Button>
      }
      image={
        <Videogame2 style={{ width: "100%", height: "100%" }}></Videogame2>
      }
      snackBars={
        <>
          <Snackbar
            open={snackbaremail}
            autoHideDuration={3000}
            message="Verification Email Sent. Check your spam folder"
            onClose={() => {
              setSnackbaremail(false);
            }}
          ></Snackbar>
          <Snackbar
            open={snackbarerror}
            autoHideDuration={3000}
            message="User Must have already signed Up"
            onClose={() => {
              setSnackbarerror(false);
            }}
          ></Snackbar>
        </>
      }
      form={
        <Form
          header={
            <Box>
              <h1>Sign Up</h1>
              <p>Already have an account? Sign In</p>
            </Box>
          }
          formContent={
            <>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={userInfo.email}
                onChange={handleUserInfo}
                error={userError.email}
                helperText={userError.email && userError.emailText}
              ></TextField>
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                value={userInfo.password}
                onChange={handleUserInfo}
                error={userError.password}
                helperText={userError.password && userError.passwordText}
              ></TextField>
              <Button
                onClick={() => {
                  handleLoading(true);
                  handleSignUpUser();
                }}
                disabled={disable}
                size="large"
                variant="contained"
              >
                {loading ? <CircularProgress></CircularProgress> : "Sign Up"}
              </Button>
              <Button
                startIcon={<GoogleIcon></GoogleIcon>}
                size="large"
                color="secondary"
                variant="contained"
                onClick={SignInWithGoogle}
              >
                Sign Up with Google
              </Button>
            </>
          }
        ></Form>
      }
    ></Layout>
  );
}

export default SignUp;
