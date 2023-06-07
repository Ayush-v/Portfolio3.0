import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useState, forwardRef } from "react";
import { useRouter } from "next/router";

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
  const { asPath } = useRouter();

  const navList = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Project", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // eslint-disable-next-line react/display-name
  const MyButton = forwardRef(({ onClick, href, title }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={`${
          asPath === `${href}` ? "" : ""
        } block w-full py-3 px-4 md:py-0 `}
      >
        {title}
      </a>
    );
  });

  return (
    <>
      <header className="relative flex justify-between border-b border-slate-100 md:h-20 h-16 items-center md:px-8 px-2">
        <Link href="/" aria-label="home">
          <h1 className="md:text-6xl text-5xl cursor-pointer">&lt;A&gt;</h1>
        </Link>

        <button
          className="md:hidden absolute top-[4.5] right-6"
          aria-controls="primary-navigation"
          aria-expanded="false"
          aria-label="menu"
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
                className="bg-white hover:brightness-105 md:bg-none"
              >
                <Link
                  href={list.href}
                  passHref={true}
                  aria-label={`navigate-to${list.name}`}
                >
                  <MyButton title={list.name} onClick={() => setOpen(false)} />
                </Link>
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
          <li>
            <a
              href="https://www.instagram.com/ayush_iosdev/"
              target="_blank"
              rel="noreferrer"
              className="hover:border-b-2 border-dotted border-black transition duration-200"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ayush-v"
              target="_blank"
              rel="noreferrer"
              className="hover:border-b-2 border-dotted border-black transition duration-200"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ayush2711"
              target="_blank"
              rel="noreferrer"
              className="hover:border-b-2 border-dotted border-black transition duration-200"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <p className="text-right text-lg sm:text-2xl">
        ©{new Date().getFullYear()} Ayush
      </p>
    </footer>
  );
}
