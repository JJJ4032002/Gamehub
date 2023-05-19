import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { app } from "./InitialiseFirebase";
const auth = getAuth(app);
function SignUpUser(
  email,
  password,
  handlesnackemail,
  handlesnackerror,
  handleLoading
) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      await sendEmailVerification(user);
      handleLoading(false);
      handlesnackemail(true);
      await signOut(auth);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      handlesnackerror(true);
      handleLoading(false);
      // ..
    });
}

export default SignUpUser;
