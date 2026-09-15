import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const sectionLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const pageLinks = [
  { href: "/leetcode", label: "LeetCode" },
  { href: "/open-source", label: "Open Source" },
  { href: "/github", label: "GitHub" },
  { href: "/admin", label: "Admin" },
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
        navBar.current.style.top = "-90px";
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
          menuOpen ? "h-[520px] md:h-fit" : "h-[84px]"
        } transition-all overflow-hidden`}
      >
        <div className="max-w-7xl w-full justify-between xl:justify-around flex-row hidden md:flex gap-4">
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
          <div className="flex flex-col justify-center items-end font-extrabold font-home text-sm lg:text-base">
            <div className="flex flex-wrap justify-end">
              {sectionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="pr-3 hover:text-[#ddd] hover:scale-110 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap justify-end pt-1 text-[#ddd]">
              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="pr-3 hover:text-white hover:scale-110 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`md:hidden w-full flex flex-col justify-between items-center ${
            menuOpen ? "h-[470px]" : "h-[48px]"
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
            {[...sectionLinks, ...pageLinks].map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  onClick={handleMenuClick}
                  href={link.href}
                  className="p-2 hover:text-[#ddd] hover:scale-110 transition-all"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  onClick={handleMenuClick}
                  href={link.href}
                  className="p-2 hover:text-[#ddd] hover:scale-110 transition-all"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
