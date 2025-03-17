import { Provider } from "react-redux";
import Browse from "./Browse"
import Login from "./Login"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import appStore from "../stores/appStore";

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
      <Provider store={appStore}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default Body