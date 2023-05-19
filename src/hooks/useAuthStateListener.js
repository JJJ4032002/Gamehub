import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { app } from "../firebase/InitialiseFirebase";
import { useDispatch } from "react-redux";
import {
  setLoading,
  setUser,
} from "../features/authentication/authenticationslice";
const auth = getAuth(app);
function useAuthStateListener() {
  let dispatch = useDispatch();
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      // Check for user status
      console.log(user, "From GetUser listener");
      console.log(user?.emailVerified);
      if (user !== null && user.emailVerified) {
        console.log("Verified user");
        dispatch(setUser({ name: user.displayName }));
      } else if (user === null) {
        console.log("Not logged in yet");
        dispatch(setLoading(false));
      }
      if (user !== null && !user.emailVerified) {
        dispatch(setLoading(false));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);
}

export default useAuthStateListener;
