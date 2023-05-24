import React from "react";
import SignOutUser from "../../firebase/SignOutUser";

export default function ColorModeToggleWrapper(props) {
  return (
    <>
      <a
        style={{ marginLeft: 15, cursor: "pointer", color: "white" }}
        onClick={SignOutUser}
      >
        Logout
      </a>
      {/* <ColorModeToggle {...props} /> */}
    </>
  );
}
