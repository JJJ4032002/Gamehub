import React, { useState } from "react";

function useUserInfo({ validation }) {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [userError, setUserError] = useState({
    email: false,
    password: false,
    emailText: "Please enter a valid email",
    passwordText: "Length should be greater than 8",
  });
  const [loading, setLoading] = useState(false);
  function handleLoading(state) {
    setLoading(state);
  }
  const [snackbaremail, setSnackbaremail] = useState(false);
  const [snackbarerror, setSnackbarerror] = useState(false);
  function handleSnackbar(property, state) {
    setSnackbar((prev) => {
      return { ...prev, [property]: state };
    });
  }

  const re = /^\S+@\S+\.\S+$/;
  function handleUserInfo(event) {
    setUserInfo((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
    if (
      validation &&
      event.target.name === "password" &&
      [...event.target.value].length < 8
    ) {
      setUserError((prev) => {
        return { ...prev, password: true };
      });
    } else if (
      validation &&
      event.target.name === "password" &&
      [...event.target.value].length >= 8
    ) {
      setUserError((prev) => {
        return { ...prev, password: false };
      });
    } else if (
      validation &&
      event.target.name === "email" &&
      re.test(event.target.value) === true
    ) {
      setUserError((prev) => {
        return { ...prev, email: false };
      });
    } else if (
      validation &&
      event.target.name === "email" &&
      re.test(event.target.value) === false
    ) {
      setUserError((prev) => {
        return { ...prev, email: true };
      });
    }
  }
  const disable = validation
    ? userInfo.email === "" ||
      userInfo.password === "" ||
      userError.email === true ||
      userError.password === true ||
      loading === true
    : userInfo.email === "" || userInfo.password === "";
  return validation
    ? {
        userInfo,
        handleUserInfo,
        disable,
        userError,
        snackbarerror,
        setSnackbarerror,
        snackbaremail,
        setSnackbaremail,
        loading,
        handleLoading,
      }
    : {
        userInfo,
        handleUserInfo,
        disable,
        snackbaremail,
        snackbarerror,
        setSnackbarerror,
        setSnackbaremail,
        loading,
        handleLoading,
      };
}

export default useUserInfo;
