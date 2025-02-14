import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Team from "../pages/Team/Team";
import Layouts from "../layouts/Layouts";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import BlogSingle from "../pages/Blog/BlogSingle";


const router = createBrowserRouter([
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:postId",
        element: <BlogSingle />,
      },
    ],
  },
]);

export default router;