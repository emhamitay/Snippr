'use client'

import React from "react";
import Button from "@/app/components/Button";
import Username from "./Username";
import Email from "./Email";
import Password from "./Password";
import { CreateAccount } from "../actions";

const Form: React.FC = () => {
  return (
    <>
      <form action={CreateAccount} className="space-y-4">
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
    </>
  );
};

export default Form;
