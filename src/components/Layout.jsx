import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const navList = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Project", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <>
      <header className="relative flex justify-between border-b border-slate-100 md:h-20 h-16 items-center md:px-8 px-2">
        <div>
          <h1 className="md:text-6xl text-5xl">&lt;A&gt;</h1>
        </div>

        <button
          className="md:hidden absolute top-[4.5] right-6"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XIcon className="w-8 h-8" />
          ) : (
            <MenuAlt1Icon className="h-8 w-8" />
          )}
        </button>

        <nav
          id="primary-navigation"
          data-visible={open ? "true" : "false"}
          className="absolute top-14 right-5 z-50 shadow-lg bg-white/25 backdrop-blur-xl md:bg-none md:shadow-none md:relative md:top-0 md:right-0 w-52 md:w-auto rounded-2xl overflow-hidden primary-navigation border md:border-none"
        >
          <ul className="flex text-2xl flex-col md:flex-row divide-y divide-dotted md:divide-y-0 md:gap-11">
            {navList.map((list, idx) => (
              <li
                key={idx}
                className="py-3 px-4 md:py-0 bg-white hover:brightness-105 md:bg-none"
              >
                {list.name}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="px-4 sm:px-12 pb-6">
      <div className="flex justify-between items-center border-b pb-2">
        <h1 className="text-lg sm:text-2xl">
          Designed and Created By <br />
          Ayush 🤟🏻
        </h1>
        <ul className="flex gap-3 sm:gap-10 sm:text-xl text-md">
          <li>Instagram</li>
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <p className="text-right text-lg sm:text-2xl">©2022 Ayush</p>
    </footer>
  );
}
