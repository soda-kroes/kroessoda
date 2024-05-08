"use client";

import React, { useEffect, useState } from "react";

//component
import ThemeTogger from "./ThemeTogger";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { WidthIcon } from "@radix-ui/react-icons";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  //Form Load
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    //Remove Event
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header
          ? "py-0 bg-white shadow-lg dark:bg-accent"
          : "py-0 dark: bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerStyle="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover: text-bold transition-all"
              underLineStyle="absolute left-0 top-full h-[2px]
            bg-primary w-full"
            />
            <ThemeTogger />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
