import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./InitialiseFirebase";
const auth = getAuth(app);
async function SignInUser(
  email,
  password,
  handlesnackemail,
  handlesnackerror,
  handleLoading
) {
  return signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user !== null && !user.emailVerified) {
        handleLoading(false);
        await signOut(auth);
        handlesnackerror(true);
      }
      // ...
    })
    .catch((error) => {
      console.log("error");
      handlesnackerror(true);
      handleLoading(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export default SignInUser;
