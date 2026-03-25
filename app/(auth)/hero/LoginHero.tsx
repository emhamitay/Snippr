import React from "react";

const LoginHero: React.FC = () => {
  return (
    <>
      <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-sky-300 text-sm">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Your code. Organized.
          </div>
          <h1 className="text-4xl font-bold text-white leading-snug">
            Save, share &amp;<br />discover code snippets.
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-sm">
            Snippr helps you capture the code that matters, tag it, and find it again in seconds.
          </p>
        </div>

        {/* Bottom testimonial */}
        <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
  <p className="text-slate-400 text-sm mt-1">Snippets. Organized. Instantly.</p>
  </div>
    </>
  );
};

export default LoginHero;
