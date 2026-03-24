import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-slate-950">
      {/* Left branding panel */}
      <div
        className="hidden lg:flex flex-col justify-between w-1/2 p-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #01133f 0%, #0d1f5c 60%, #0a0a2e 100%)" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <span className="text-white text-xl font-bold tracking-tight">Snippr</span>
        </div>

        {/* Center copy */}
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sky-300 text-sm">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Free to get started
          </div>
          <h1 className="text-4xl font-bold text-white leading-snug">
            Join thousands of<br />developers today.
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-sm">
            Create an account and start organizing your snippets in under a minute.
          </p>

          {/* Feature list */}
          <ul className="space-y-3">
            {[
              "Unlimited private snippets",
              "Instant search across all your snippets",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="2 6 5 9 10 3" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom tagline */}
        <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
          <p className="text-slate-400 text-sm mt-1">Snippets. Organized. Instantly.</p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2 mb-10">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <span className="text-white text-lg font-bold tracking-tight">Snippr</span>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Layout;
