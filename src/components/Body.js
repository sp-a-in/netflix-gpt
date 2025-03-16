import Browse from "./Browse"
import Login from "./Login"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const Body = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      Component: Login,
    },
    {
      path: "/browse",
      Component: Browse,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Body