import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import auth from "../utils/firebase";
import logoUrl from "./../assets/netflix.svg"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../stores/slices/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { DEFAULT_IMAGE, LANG_OPTIONS } from "../utils/constants";
import { toggleGptSearch } from "../stores/slices/gptSlice";
import { selectLanguage } from "../stores/slices/configSlice";

const Header = () => {

  let [userImage, setUserImage] = useState(DEFAULT_IMAGE);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let user = useSelector((state)=> state.user);
  

  let toggleGptMethod = () => {
    dispatch(toggleGptSearch());
  }

  let handleLanguageChange = (e)=> {
    dispatch(selectLanguage(e.target.value))
  }

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
    <div className="absolute p-6 bg-gradient-to-b from-black z-20 flex justify-between w-screen">
      <img src = {logoUrl} alt="My Happy SVG" className="w-48 custom-logo" />
      {user && <div className="flex gap-4 align-middle">
       <select className="p-4 w-fit opacity-80 rounded border border-gray-500/70 bg-black text-white" onChange={handleLanguageChange} >
        {LANG_OPTIONS.map((lang) => {
          return (<option value={lang.identifier}>{lang.language}</option>)
        })}
       </select>
        <button className="p-4 bg-blue-800 rounded-lg text-white text-lg font-medium font-sans cursor-pointer" onClick={toggleGptMethod}> GPT Search</button>
        <img src={userImage} className="w-15 h-15"/>
        <button className="font-bold text-yellow-50 cursor-pointer" onClick={handleSignOut}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header;