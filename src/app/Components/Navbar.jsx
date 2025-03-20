'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 p-4 shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <p className="text-2xl font-bold text-cyan-400">Meal Haven</p>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Posts", href: "/posts" },
            { name: "Meals", href: "/meal" },
            { name: "Register", href: "/register" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-lg font-medium px-3 py-2 rounded-lg transition-colors duration-300 ${
                  pathname === link.href
                    ? "bg-cyan-500 text-gray-900"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <LoginButton></LoginButton>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;