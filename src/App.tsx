import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";
// import './style.css';

// https://restcountries.com/v3.1/name/country_name

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
