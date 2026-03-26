import React from "react";
import Logo from "@/app/components/Logo";
import HeroHandler from "@/app/(auth)/hero/HeroHandler";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-slate-950">
      {/* Left branding panel */}
      <div
        className="hidden lg:flex flex-col justify-between w-1/2 p-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #01133f 0%, #0d1f5c 60%, #0a0a2e 100%)",
        }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        />

        {/* Logo */}
        <Logo />

        {/* Center copy */}
        <HeroHandler />

        {/* footer */}
        <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
          <p className="text-slate-400 text-sm mt-1">
            Snippets. Organized. Instantly.
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2 mb-10">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <span className="text-white text-lg font-bold tracking-tight">
            Snippr
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Layout;
