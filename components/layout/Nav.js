import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const sectionLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const myMenu = useRef();
  const navBar = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  const handleMenuClick = () => {
    if (!menuOpen) {
      myMenu.current.classList.add("menuopen");
      setMenuOpen(true);
    } else {
      myMenu.current.classList.remove("menuopen");
      setMenuOpen(false);
    }
  };

  const handleScroll = () => {
    if (navBar) {
      const currentScroll = window.scrollY;
      if (prevScroll > currentScroll) {
        navBar.current.style.top = "0";
      } else {
        myMenu.current.classList.remove("menuopen");
        setMenuOpen(false);
        navBar.current.style.top = "-74px";
      }
      setPrevScroll(currentScroll);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, false);
    return () => {
      document.removeEventListener("scroll", handleScroll, false);
    };
  }, [handleScroll]);

  return (
    <nav
      ref={navBar}
      className="flex fixed w-full text-white z-[10010] transition-all"
    >
      <div
        className={`w-full justify-center flex p-4 bg-black bg-opacity-75 border-b-[1px] ${
          menuOpen ? "h-[340px] md:h-fit" : "h-[69px]"
        } transition-all overflow-hidden`}
      >
        <div className="max-w-7xl w-full justify-between xl:justify-around flex-row hidden md:flex">
          <div className="flex font-nav text-3xl font-extrabold items-center">
            <Link
              href="/"
              className="hover:text-[#ddd] hover:scale-110 transition-all"
            >
              <span>{"<"}</span>
              <span>Seethina Jaya Dileep</span>
              <span className="pl-2">{"/>"}</span>
            </Link>
          </div>
          <div className="flex justify-center items-center font-extrabold font-home">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="pr-3 hover:text-[#ddd] hover:scale-110 transition-all"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/experience"
              className="hover:text-[#ddd] hover:scale-110 transition-all"
            >
              Experience
            </Link>
          </div>
        </div>
        <div
          className={`md:hidden w-full flex flex-col justify-between items-center ${
            menuOpen ? "h-[300px]" : "h-[35px]"
          }`}
        >
          <div className="flex w-full justify-between items-center">
            <Link
              href="/"
              className="font-extrabold font-nav text-xl hover:text-[#ddd] hover:scale-110 transition-all whitespace-nowrap"
            >
              <span>{"<"}</span>
              <span>Seethina Jaya Dileep</span>
              <span className="pl-2">{"/>"}</span>
            </Link>
            <div
              ref={myMenu}
              onClick={handleMenuClick}
              className="py-4 mx-5"
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  handleMenuClick();
                }
              }}
              aria-label="Open menu"
            >
              <div className="myBurguer"></div>
            </div>
          </div>
          <div
            className={`flex flex-col text-center font-extrabold font-home ${
              menuOpen ? "" : "opacity-0 pointer-events-none z-10"
            }  transition-all`}
          >
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                onClick={handleMenuClick}
                href={link.href}
                className="p-3 hover:text-[#ddd] hover:scale-110 transition-all"
              >
                {link.label}
              </a>
            ))}
            <Link
              onClick={handleMenuClick}
              href="/experience"
              className="p-3 hover:text-[#ddd] hover:scale-110 transition-all"
            >
              Experience
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
