import React, { useEffect } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(
    (store) => store.user1
    // console.log(store);
    // return store.user; //here user is the slice name we mention in ppStore
  );
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);
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
  const gptSearchClickHandler = () => {
    dispatchFn(toggleGptSearchView());
  };
  const languageChangeHandler = (e) => {
    dispatchFn(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-36" src={LOGO_URL} alt="Netflix-logo" />
      {user && (
        <div className="flex p2">
          {showGPTSearch && (
            <select
              onChange={languageChangeHandler}
              className="bg-gray-900 text-white rounded-lg w-20 h-10 my-5"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" px-4 mx-4 bg-purple-800 text-white rounded-lg w-50 h-10 my-5"
            onClick={gptSearchClickHandler}
          >
            {showGPTSearch ? "HomePage" : "GPT Search"}
          </button>
          <img src={user?.photoURL} alt="usericon" className="w-10 h-10 my-5" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
