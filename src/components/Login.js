import { useState } from "react";
import NETFLIX_LOGO from "../utils/constants";
import Header from "./Header";

const Login = () => {
    let [isSignInForm, setIsSignInForm] = useState(true)

    let handleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={NETFLIX_LOGO} />
            </div>
                <form className="absolute p-12 bg-black m-auto right-0 left-0 w-3/12 my-36 text-white opacity-85 rounded-lg">
                    <h1 className="font-bold text-3xl py-4">Sign {isSignInForm ? "In" : "Up"}</h1>
                    {
                        !isSignInForm && <input type="text" placeholder="First Name" className="p-4 my-4 bg-gray-700 w-full rounded-md"/>
                    }
                    <input type="text" placeholder="Email or mobile number" className="p-4 my-4 bg-gray-700 w-full rounded-md"/>
                    <input type="passwod" placeholder="Password" className="p-4 my-4 bg-gray-700 w-full rounded-md" />
                    <button className="bg-red-500 p-2 my-2 w-full rounded-md font-medium"> Sign {isSignInForm ? "In" : "Up"}</button>
                    <p  className="cursor-pointer my-4" onClick={handleSignIn}>{isSignInForm ? "New to Netflix ? Sign Up Now" : "Already a user ? Sign In Now"}</p>
                </form>
        </div>
    )
}



export default Login;