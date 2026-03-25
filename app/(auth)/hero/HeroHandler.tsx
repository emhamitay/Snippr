import React from "react";
import { headers } from "next/headers";
import LoginHero from "./LoginHero";
import RegisterHero from "./RegisterHero";

const HeroHandler: React.FC = async () => {
  const pathname = (await headers()).get("x-pathname") || "";
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
