'use client'

import React from "react";
import LoginHero from "./LoginHero";
import RegisterHero from "./RegisterHero";
import { usePathname } from "next/navigation";

const HeroHandler: React.FC = () => {
  const pathname = usePathname();
  // Determine if we're on the login or register page based on the pathname
  const isLogin: boolean = pathname.includes("/login");
  return (
    <>
      {isLogin && <LoginHero />}
      {!isLogin && <RegisterHero />}
    </>
  );
};

export default HeroHandler;
