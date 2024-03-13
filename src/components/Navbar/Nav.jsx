"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const menuItems = [
  { url: "/", title: "Inicio" },
  { url: "/map", title: "Mapa" },
  { url: "/stories", title: "Historias" },
  { url: "/store", title: "Tienda" },
];

export default function Nav() {
  const [isClick, setIsClick] = useState(false);

  const togleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="bg-[#2d313b] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="text-white">
                <Image
                  priority
                  className="w-32 h-auto"
                  src="/assets/tijuanidad_pequeno.png"
                  alt="Tijuanidad"
                  width={300}
                  height={80}
                ></Image>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {menuItems.map((link) => (
                <Link
                  href={link.url}
                  key={link.url}
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={togleNavbar}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((link) => (
              <Link
                href={link.url}
                key={link.url}
                className="block text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
