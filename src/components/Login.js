import { useState, useRef } from "react";
import NETFLIX_LOGO, { DEFAULT_PHOTO_URL } from "../utils/constants";
import Header from "./Header";
import checkValidation from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../utils/firebase";

const Login = () => {


    let [isSignInForm, setIsSignInForm] = useState(true);
    let [errorMessage, setErrorMessage] = useState(null); 

    let email = useRef(null);
    let password = useRef(null);
    let name = useRef(null);


    let handleSignButton = () => {
        let errorMsg = checkValidation(email.current.value, password.current.value)
        if(errorMsg) {
            setErrorMessage(errorMsg);
            return;
        }

        if(!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                let user = userCredential.user
                updateProfile(user, {
                    displayName: name.current.value, photoURL: DEFAULT_PHOTO_URL
                  }).then(() => {
                    // Profile updated!
                  }).catch((error) => {
                    console.log('error: profile ', error);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage)
                    // An error occurred
                    // ...
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage)
            });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                console.log(userCredential);
                // Signed in 
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage)
            });
        }    
    }


    let handleToggle = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="w-screen" src={NETFLIX_LOGO} />
            </div>
                <form className="absolute p-12 bg-black m-auto right-0 left-0 w-3/12 my-36 text-white opacity-85 rounded-lg" onSubmit={(e)=> {e.preventDefault()}}>
                    <h1 className="font-bold text-3xl py-4">Sign {isSignInForm ? "In" : "Up"}</h1>
                    {
                        !isSignInForm && <input type="text" placeholder="First Name" className="p-4 my-4 bg-gray-700 w-full rounded-md" ref={name}/>
                    }
                    <input type="text" ref={email} placeholder="Email or mobile number" className="p-4 my-4 bg-gray-700 w-full rounded-md"/>
                    <input type="password" ref={password} placeholder="Password" className="p-4 my-4 bg-gray-700 w-full rounded-md" />
                    <p className="font-medium text-red-600 py-2">{errorMessage}</p>
                    <button className="bg-red-500 p-2 my-2 w-full rounded-md font-medium" onClick={handleSignButton}> Sign {isSignInForm ? "In" : "Up"}</button>
                    <p  className="cursor-pointer my-4" onClick={handleToggle}>{isSignInForm ? "New to Netflix ? Sign Up Now" : "Already a user ? Sign In Now"}</p>
                </form>
        </div>
    )
}



export default Login;