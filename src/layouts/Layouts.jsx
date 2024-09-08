import { Link, Outlet } from "react-router-dom";


const Layouts = () => {
  return (
    <>
      <header className="py-3 bg-slate-500">
        <div className="container flex justify-between items-center w-5/6 mx-auto">
          <div className="logo">
            <a href="#">
              <img
                className="w-[200px] h-[20px] object-cover"
                src="https://wordsphere.com/wp-content/uploads/2021/11/wordsphere-1024x111.png"
                alt=""
              />
            </a>
          </div>
          <div className="menu">
            <ul className="flex">
              <li>
                <Link
                  className="py-2 px-3 text-white hover:bg-slate-700"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 px-3 text-white hover:bg-slate-700"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 px-3 text-white hover:bg-slate-700"
                  to="/team"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 px-3 text-white hover:bg-slate-700"
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 px-3 text-white hover:bg-slate-700"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="py-2 px-3 text-white hover:bg-slate-700"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="py-1 bg-slate-700 text-center text-white font-light">
        <p className="font-thin text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </footer>
    </>
  );
}

export default Layouts