import React from "react";
import Layout from "../components/Authentication/Layout";
import Button from "@mui/material/Button";
import Videogame1 from "@site/static/img/videogame1.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import Form from "../components/Form";
import useUserInfo from "../hooks/useUserInfo";
import SignInWithGoogle from "../firebase/SignInGoogle";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { Snackbar } from "@mui/material";
import SignInUser from "../firebase/SignInUser";
import { CircularProgress } from "@mui/material";
import Link from "@docusaurus/Link";
function SignIn() {
  const userLoading = useSelector((state) => state.auth.loading);
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
  } = useUserInfo({
    validation: false,
  });
  async function handleSignIn() {
    handleLoading(true);
    let error = await SignInUser(
      userInfo.email,
      userInfo.password,
      setSnackbaremail,
      setSnackbarerror,
      handleLoading
    );
    console.log(error);
  }
  return (
    <>
      {userLoading ? (
        <Loading></Loading>
      ) : (
        <Layout
          navbarButton={
            <Button LinkComponent={Link} to={"/SignUp"} variant="contained">
              Sign Up
            </Button>
          }
          image={
            <Videogame1 style={{ width: "100%", height: "100%" }}></Videogame1>
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
                message="The user has not signed up yet or the information entered is incorrect"
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
                  <h1>Sign In</h1>
                  <p>Don't have an account? Sign Up</p>
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
                  ></TextField>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    value={userInfo.password}
                    onChange={handleUserInfo}
                  ></TextField>
                  <Button
                    onClick={handleSignIn}
                    disabled={disable}
                    size="large"
                    variant="contained"
                  >
                    {loading ? (
                      <CircularProgress></CircularProgress>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                  <Button
                    startIcon={<GoogleIcon></GoogleIcon>}
                    size="large"
                    color="secondary"
                    variant="contained"
                    onClick={SignInWithGoogle}
                  >
                    Sign in with Google
                  </Button>
                </>
              }
            ></Form>
          }
        ></Layout>
      )}
    </>
  );
}

export default SignIn;
