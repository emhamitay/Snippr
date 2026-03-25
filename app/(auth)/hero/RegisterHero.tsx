import React from 'react';


const RegisterHero: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default RegisterHero;