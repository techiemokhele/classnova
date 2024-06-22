"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/company/services", label: "Our Services" },
  { href: "/company/about-us", label: "About Us" },
  { href: "/company/blog", label: "Our Blog" },
  { href: "/help/contact-us", label: "Contact Us" },
];

const NavigationComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => pathname === path;

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={`fixed w-full z-20 ${
        scrolled ? "bg-gray-800" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Desktop links */}
          <div className="hidden sm:flex sm:justify-center sm:flex-grow space-x-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} passHref>
                <span
                  className={`px-3 py-2 rounded-md text-sm font-thin text-white cursor-pointer ${
                    isActive(link.href)
                      ? "border-b-4 border-gradient-to-r from-teal-400 to-orange-400"
                      : ""
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right section: Cart and Sign In for desktop */}
          <div className="hidden lg:flex md:flex absolute inset-y-0 right-0 items-center space-x-4">
            <Link href="/shop/cart" passHref>
              <div className="relative cursor-pointer text-white">
                <BsCart4 className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                  0
                </span>
              </div>
            </Link>
            <span className="text-white">|</span>
            <Link href="/sign-in" passHref>
              <span className="text-sm font-thin text-white cursor-pointer">
                Sign In
              </span>
            </Link>
          </div>

          {/* Logo */}
          <Link href="/" passHref>
            <img
              className="flex-shrink-0 h-[40px] w-auto rounded-full absolute left-4 bottom-4"
              src="/icons/logo-white-transparent.png"
              alt="ClassNova-Logo"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`sm:hidden bg-gray-800 fixed top-0 right-0 h-full w-1/2 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4 pb-10">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            Close
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              passHref
            >
              <span
                className={`block px-3 py-3 rounded-md text-base font-thin text-white cursor-pointer ${
                  isActive(link.href)
                    ? "border-b-4 border-gradient-to-r from-teal-400 to-orange-400"
                    : ""
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Right section: Cart and Sign In for mobile */}
        <div className="px-4 pt-4 pb-6 space-y-4 border-t border-gray-700">
          <Link href="/shop/cart" onClick={toggleMenu} passHref>
            <div className="relative cursor-pointer text-white flex items-center mb-3">
              <BsCart4 className="h-6 w-6 mr-3" /> Cart
              <span className="absolute top-1 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                0
              </span>
            </div>
          </Link>

          <Link href="/sign-in" onClick={toggleMenu} passHref>
            <div className="relative cursor-pointer text-white flex items-center pt-3">
              <FaUser className="h-6 w-6 mr-3" /> Sign In
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationComponent;
