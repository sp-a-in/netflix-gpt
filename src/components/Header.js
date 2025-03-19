import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import auth from "../utils/firebase";
import logoUrl from "./../assets/netflix.svg"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../stores/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { DEFAULT_IMAGE } from "../utils/constants";


const Header = () => {

  let [userImage, setUserImage] = useState(DEFAULT_IMAGE);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let user = useSelector((state)=> state.user);
  

  useEffect(()=> {
      let unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              // User is signed in, see docs for a list of available properties
              // const user = user;   
              let {displayName, email, photoURL, uid} = user
              setUserImage(user.photoURL)
              navigate("/browse")
              dispatch(addUser({displayName: displayName, email: email, photoURL: photoURL, uid: uid}));
          } else {
              // User is signed out
              navigate("/");
              dispatch(removeUser());
              // ...
          }
      });

      return ()=> {unsubscribe};
  }, [])

  let handleSignOut = ()=> {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      console.log('error: ', error);
      // An error happened.
    });
  } 

  return (
    <div className="absolute p-6 bg-gradient-to-b from-black z-10 flex justify-between w-screen">
      <img src = {logoUrl} alt="My Happy SVG" className="w-48 custom-logo" />
      {user && <div className="flex gap-2 align-middle">
        <img src={userImage} className="w-10 h-10"/>
        <button className="font-bold text-yellow-50 cursor-pointer" onClick={handleSignOut}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header;