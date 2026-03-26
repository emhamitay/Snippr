"use client";

import Link from "next/link";
import React from "react";
import { StopTypingInput, ActionCallback } from "./StopTypingInput";

function LabelAndInput({
  id,
  label,
  type,
  placeholder,
  comment,
  commentLink,
  useTimeout,
  callback,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  comment?: string;
  commentLink?: string;
  useTimeout?: boolean;
  callback?: ActionCallback;
}) {
  return (
    <>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor={id}
            className="block text-sm font-medium text-slate-300"
          >
            {label}
          </label>
          {comment && commentLink && (
            <Link href={commentLink} className="text-xs text-sky-400 hover:text-sky-300 transition">
              {comment}
            </Link>
          )}
        </div>
        {useTimeout && callback ? (
          <StopTypingInput
            inputProp={{ id, name: id, type: type as "input" | "email" | "password", placeholder }}
            callback={callback}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            autoComplete={id}
            required
            placeholder={placeholder}
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
          />
        )}
      </div>
    </>
  );
}

export default LabelAndInput;
