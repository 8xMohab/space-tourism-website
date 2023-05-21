import { useState } from "react";
import NavLink from "./NavLink";
const Nav = () => {
  const [ul, setUl] = useState(false);
  return (
    <header className="pt-6 lg:pt-16 lg:mr-14 lg:w-full flex items-start">
      {/* background div */}
      <div className="fixed hidden md:block w-[62%] h-28 bg-opacity-[4%] bg-White backdrop-blur-3xl right-0 top-0 lg:mt-10"></div>
      <div className="container flex w-full items-center">
        <div className="flex-1 relative">
          <a className="flex w-10 md:w-12" href="/">
            <img src="/shared/logo.svg" alt="logo" />
          </a>
          <div className="hidden lg:block absolute xl:w-80 2xl:w-[430px] w-64 left-28 top-1/2 h-[1px] opacity-25 bg-White"></div>
        </div>
        <nav className="xl:mr-36 2xl:mr-48">
          <div>
            <img
              className="md:hidden"
              onClick={() => setUl(true)}
              src="/shared/icon-hamburger.svg"
              alt="open list icon"
            />
          </div>
          <ul
            className={`fixed top-0 ${
              ul ? "right-0" : "-right-full"
            } w-4/6 h-full p-8 pr-0 bg-opacity-[4%] bg-White backdrop-blur-3xl md:backdrop-blur-0 md:bg-opacity-0 transition-all duration-500 z-20 md:static md:flex items-center md:m-0 md:p-0 md:w-full`}
          >
            <div className="w-full flex justify-end mb-16">
              <img
                className="pr-8 md:hidden"
                onClick={() => setUl(false)}
                src="/shared/icon-close.svg"
                alt="close icon"
              />
            </div>
            {["home", "destination", "crew", "technology"].map(
              (link, index) => (
                <li
                  className={`text-White after:transition-all after:duration-500 md:m-0 nav-text mb-8 after:w-1 after:h-full after:absolute relative after:bg-White after:right-0 md:after:-bottom-11 md:after:w-full md:after:h-1 ${
                    window.location.pathname === `/${link}` ||
                    `${window.location.pathname}home` === `/${link}`
                      ? "after:opacity-100"
                      : "after:opacity-0 lg:after:hover:opacity-50"
                  } md:mr-8 last:mr-0 z-10`}
                  key={link}
                >
                  <span className="mr-3 font-bold md:hidden lg:inline">
                    0{index}
                  </span>
                  <span onClick={() => setUl(false)}>
                    {<NavLink link={link} />}
                  </span>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
