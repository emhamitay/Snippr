'use client'

import Button from "../../components/Button";
import Link from "next/link";
import Username from "./components/Username";
import Email from "./components/Email";
import Password from "./components/Password";

function RegisterPage() {

  return (
    <div className="w-full max-w-sm space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-white">Create an account</h2>
        <p className="text-slate-400 text-sm">
          Start organizing your snippets for free
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4">
        {/* Name row */}
        <div className="flex flex-col gap-3">

          <Username />

          <Email />

          <Password />

        </div>

        {/* Terms */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            required
            className="mt-0.5 w-4 h-4 rounded border-slate-600 bg-slate-900 accent-sky-500 cursor-pointer"
          />
          <span className="text-slate-400 text-xs leading-relaxed">
            I agree to the{" "}
            <a href="#" className="text-sky-400 hover:text-sky-300 transition">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-sky-400 hover:text-sky-300 transition">
              Privacy Policy
            </a>
          </span>
        </label>
        <Button buttonType="submit">Create account</Button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-slate-800" />
        <span className="text-slate-600 text-xs">or</span>
        <div className="flex-1 h-px bg-slate-800" />
      </div>

      {/* GitHub OAuth */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2.5 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 text-sm font-medium py-2.5 transition focus:outline-none focus:ring-2 focus:ring-slate-600"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
        Sign up with GitHub
      </button>

      {/* Sign in link */}
      <p className="text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-sky-400 hover:text-sky-300 font-medium transition"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}

export default RegisterPage;
