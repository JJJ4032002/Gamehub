import { getAuth, signOut } from "firebase/auth";
import { app } from "./InitialiseFirebase";
const auth = getAuth(app);
function SignOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("User Signed out");
      window.location.reload();
    })
    .catch((error) => {
      // An error happened.
    });
}

export default SignOutUser;
