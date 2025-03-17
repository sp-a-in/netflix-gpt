import { useDispatch, useSelector } from "react-redux";
import auth from "../utils/firebase";
import logoUrl from "./../assets/netflix.svg"
import { signOut } from "firebase/auth";
import { removeUser } from "../stores/slices/userSlice";
import { useNavigate } from "react-router";


const Header = () => {

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let user = useSelector((state)=> state.user);
  console.log('user: ', user);

  let handleSignOut = ()=> {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Here");
      dispatch(removeUser());
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
        <img src="https://i.pinimg.com/474x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg" className="w-10 h-10"/>
        <button className="font-bold text-yellow-50 cursor-pointer" onClick={handleSignOut}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header;