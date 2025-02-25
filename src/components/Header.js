import React, { useEffect } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(
    (store) => store.user1
    // console.log(store);
    // return store.user; //here user is the slice name we mention in ppStore
  );

  const dispatchFn = useDispatch();
  useEffect(() => {
    //console.log("Authentication", auth);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //  console.log("users", user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatchFn(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatchFn(removeUser());
        navigate("/");
      }
    });
    //unsubscribe function will be called hen the component unmounts
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-36" src={LOGO_URL} alt="Netflix-logo" />
      {user && (
        <div className="flex ">
          <img src={user?.photoURL} alt="usericon" className="w-12 h-12" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
