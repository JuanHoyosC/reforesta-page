import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const NavLinks = [
  { title: "home", url: "/" },
  { title: "aboutUs", url: "/acerca-de-nosotros" },
  { title: "blog", url: "/blog" },
  { title: "contact", url: "/contacto" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const changeLanguage = () => {
    i18n.changeLanguage('en')
  }
  
  return (
    <div className="fixed w-full z-20">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 backdrop-filter backdrop-blur-lg bg-opacity-40">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              { t('navBar.title') }
            </a>
            <button onClick={ changeLanguage }>
              Change Language
            </button>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {NavLinks.map((navlink, index) => (
                <li
                  className={"nav-item" + (navbarOpen ? " mb-3" : " mb-0")}
                  key={index}
                >
                  <a
                    href={navlink.url}
                    className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75 hover:border-b-4 hover:border-green-500"
                  >
                    <span className="ml-2">{ t('navBar.' + navlink.title ) }</span>
                  </a>
                </li>
              ))}
              <li className={"nav-item" + (navbarOpen ? " mb-3" : " mb-0")}>
                <NavLink
                  to="/donativos"
                  className="bg-green-500 hover:bg-green-700 px-12 md:px-5 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white rounded-full"
                >
                  { t('navBar.donation') }
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
