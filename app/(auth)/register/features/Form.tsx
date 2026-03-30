'use client'

import React, { MouseEventHandler, useState } from "react";
import Button from "@/app/components/Button";
import Username from "./Username";
import Email from "./Email";
import Password from "./Password";
import TermsAndPolicy from "./TermsAndPolicy";
import { CreateAccount } from "../../actions";

type ModalSection = 'terms' | 'privacy' | null;

const Form: React.FC = () => {
  const [modal, setModal] = useState<ModalSection>(null);
  const [submitFailure, setSubmitFailure] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    CreateAccount(formData).then(res => {
      //check if res is error
      if(res.status == "error") {
        setSubmitFailure(true);
        return;
      }

      //continue loggin in the user and redirect to home page
      console.log(res);
    }).catch(() => {
      setSubmitFailure(true);
    });
  }

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
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
            <button
              type="button"
              onClick={() => setModal('terms')}
              className="text-sky-400 hover:text-sky-300 transition cursor-pointer"
            >
              Terms of Service
            </button>{" "}
            and{" "}
            <button
              type="button"
              onClick={() => setModal('privacy')}
              className="text-sky-400 hover:text-sky-300 transition cursor-pointer"
            >
              Privacy Policy
            </button>
          </span>
        </label>
        <Button buttonType="submit">Create account</Button>
        { submitFailure && (
          <p className="text-red-500 text-sm text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      {modal && (
        <TermsAndPolicy section={modal} onClose={() => setModal(null)} />
      )}
    </>
  );
};

export default Form;
