"use client";

import {
  useState,
  useEffect,
  useTransition,
  useRef,
  useMemo,
  use,
} from "react";
import Link from "next/link";

export type InputStatus = "success" | "error" | "warning" | "checking";
export type ActionResult = { status: InputStatus };
export type InputMessages = Partial<Record<InputStatus, string>>;
export type InputAction = (value: string) => Promise<ActionResult>;
export type InputOnChange = (value: string) => InputStatus | null;

export type InputType = "text" | "email" | "password";

interface InputProp {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  type: InputType;
}
interface InputProp {
  comment?: string;
  commentLink?: string;
}
interface InputProp {
  action?: InputAction;
  messages?: InputMessages;
  onChange?: InputOnChange;
  timeout?: number;
}
interface InputProp {
  className?: string;
}
export type { InputProp };

const DEFAULT_TIMEOUT = 350;
const DEFAULT_MESSAGES: InputMessages = {
  success: "Looks good!",
  error: "Something went wrong.",
  warning: "Be careful!",
  checking: "Checking...",
};

function Input(p: InputProp) {
  // get space-y from className and remove it from className
  const [spaceY, className] = getSpaceY(p.className);

  // --- state ---
  const [status, setStatus] = useState<InputStatus | null>(null);
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState("");

  // --- refs ---
  const hasTyped = useRef(false);
  const actionRef = useRef(p.action); // guard for action in useEffect
  const statusRef = useRef(status); // guard for status in useEffect

  // --- effects for refs ---
  useEffect(() => {
    actionRef.current = p.action;
  }, [p.action]);
  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  // --- CONST ---
  const timeoutTime = p.timeout ?? DEFAULT_TIMEOUT;
  const messages: InputMessages = { ...DEFAULT_MESSAGES, ...p.messages };

  // --- effects ---
  useEffect(() => {
    if (actionRef.current == null || !hasTyped.current) return; // guard
    if (statusRef.current === "error" || statusRef.current === "warning")
      return; // if error or warning, don't trigger action until user types again
    const timeout = setTimeout(() => {
      startTransition(() => {
        actionRef.current!(value).then((res) => {
          setStatus(res.status);
        });
      });
    }, timeoutTime);

    return () => clearTimeout(timeout);
  }, [value, timeoutTime]);

  // --- handlers ---
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (value === "") {
      setStatus(null);
      hasTyped.current = false;
      return;
    }

    hasTyped.current = true;
    setValue(value);

    if (p.onChange) {
      const status = p.onChange(value);
      setStatus(status);
    }
  }

  return (
    <>
      {/* Container */}
      <div className={spaceY || "space-y-1.5"}>
        {/* Label Container */}
        <div className="flex items-center justify-between">
          {/* Label */}
          <label
            htmlFor={p.id}
            className="block text-sm font-medium text-slate-300"
          >
            {p.label}
          </label>

          {/* Comment on the right of the label e.g "Forgot Password?" */}
          {p.comment && p.commentLink && (
            <Link
              href={p.commentLink}
              className="text-xs text-sky-400 hover:text-sky-300 transition"
            >
              {p.comment}
            </Link>
          )}
        </div>

        {/* Input */}
        <input
          id={p.id}
          name={p.name}
          type={p.type}
          autoComplete={p.id}
          required
          placeholder={p.placeholder}
          className={`w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-2.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition ${className}`}
          onChange={onChange}
        />

        {/* Message */}
        {isPending && (
          <p className="flex items-center gap-1.5 text-xs text-slate-400">
            <svg
              className="w-3.5 h-3.5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            {messages.checking}
          </p>
        )}
        {!isPending && status === "success" && (
          <p className="flex items-center gap-1.5 text-xs text-emerald-400">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {messages.success}
          </p>
        )}
        {!isPending && status === "error" && (
          <p className="flex items-center gap-1.5 text-xs text-red-400">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {messages.error}
          </p>
        )}
        {!isPending && status === "warning" && (
          <p className="flex items-center gap-1.5 text-xs text-amber-400">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
              />
            </svg>
            {messages.warning}
          </p>
        )}
      </div>
    </>
  );
}
export default Input;

// ---
// helper
// ---

function getSpaceY(className?: string): [string, string] | [null, string] {
  if (className == null) return [null, ""]; // guard
  const classes: string[] = className.split(" ");
  let space: string | null = null;
  let resultClassName: string = "";
  classes.forEach((s) => {
    if (s.startsWith("space-y-")) space = s;
    else resultClassName += s + " ";
  });
  return [space, resultClassName.trim()];
}
