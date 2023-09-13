import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

let routers = createHashRouter([
  {
    path: "",
    element: <Layout title="Home" />,
    children: [
      { index: true, element: <Home title="Home" /> },
      { path: "about", element: <About title="About" /> },
      { path: "portfolio", element: <Portfolio title="Portfolio" /> },
      { path: "contact", element: <Contact title="Contact" /> },
      { path: "*", element: <NotFound title="Not Found" /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
