
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import MovieListing from "./pages/MovieListing";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children:[
      {index: true, element:<Home/>},
      {path:"movies", element:<MovieListing/>}
    ]
  },
]);


function Router() {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router;
