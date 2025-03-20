'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import LoginButton from "./LoginButton";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession(); 
  console.log(session)// Access session data

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 p-4 shadow-lg">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <p className="text-xl font-bold text-cyan-400">Meal Haven</p>

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

          {/* Conditionally Render Dashboard Link */}
          {session && (
            <li>
              <Link
                href="/dashboard"
                className={`text-lg font-medium px-3 py-2 rounded-lg transition-colors duration-300 ${
                  pathname === "/dashboard"
                    ? "bg-cyan-500 text-gray-900"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                Dashboard
              </Link>
            </li>
          )}

          {/* Conditional Rendering Based on Login Status */}
          {session ? (
            <div className="flex items-center gap-4">
              <p className="text-gray-300">{session?.user?.name || "User"}</p>
              <Image src={session?.user?.image} alt="User Image" width={50} height={50} className="rounded-full" />
             
              <button
                onClick={() => signOut()}
                className="ml-4 bg-gray-800 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <LoginButton />
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;