
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },{
    path:"/home",
    element:<Home/>
  }
]);


function Router() {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router;
