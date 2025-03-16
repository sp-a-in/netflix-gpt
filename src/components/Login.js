import Header from "./Header";

const Login = () => {
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" />
            </div>
                <form className="absolute p-12 bg-black m-auto right-0 left-0 w-3/12 my-36 text-white opacity-85 rounded-lg">
                    <h1 className="font-bold text-3xl py-4">Sign In</h1>
                    <input type="text" placeholder="Email or mobile number" className="p-2 my-4 bg-gray-700 w-full"/>
                    <input type="passwod" placeholder="Password" className="p-2 my-4 bg-gray-700 w-full" />
                    <button className="bg-red-500 p-4 my-6 w-full"> Sign In</button>
                </form>
        </div>
    )
}



export default Login;